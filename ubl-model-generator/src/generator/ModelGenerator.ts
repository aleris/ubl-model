import { UblSchema } from './UblSchema'
import { CodeFileWriter } from './CodeFileWriter'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { CoreTypeModelCodeGenerator } from './core/CoreTypeModelCodeGenerator'
import { CoreTypesGenerator } from './core/CoreTypesGenerator'
import { AggregateTypeModelCodeGenerator } from './aggregate/AggregateTypeModelCodeGenerator'
import { AggregateTypeMetaCodeGenerator } from './aggregate/AggregateTypeMetaCodeGenerator'
import { AggregateTypesGenerator } from './aggregate/AggregateTypesGenerator'
import { UblModule } from './UblModule'

export class ModelGenerator {
  async generateModels(version: string) {
    const rootGenDirPath = '../ubl-model-library/src/ubl-model'
    await ModelGenerator.generateForVersion(version, rootGenDirPath)
  }

  private static async generateForVersion(version: string, rootGenDirPath: string) {
    const ublSchema = new UblSchema(version)
    const codeFileWriter = new CodeFileWriter(rootGenDirPath, version)
    console.log(`Writing UBL model for version ${version} in ${codeFileWriter.genDirPath}`)
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)

    const coreTypesCodeGenerators = [new CoreTypeModelCodeGenerator(version)]
    const coreTypesGenerator = new CoreTypesGenerator(ublSchema, codeFileWriter, coreTypesCodeGenerators)
    await coreTypesGenerator.generate()

    const aggregateTypesCodeGenerators = [new AggregateTypeModelCodeGenerator(), new AggregateTypeMetaCodeGenerator()]
    const aggregateTypesGenerator = new AggregateTypesGenerator(
      ublSchema,
      typeResolver,
      codeFileWriter,
      aggregateTypesCodeGenerators
    )
    await aggregateTypesGenerator.generate(UblModule.cac, 'common/UBL-CommonAggregateComponents')
    await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-ExtensionContentDataType')
    await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-CommonExtensionComponents')

    for (const mainDocPath of ublSchema.listMainDocFileNames()) {
      await aggregateTypesGenerator.generate(UblModule.doc, mainDocPath)
    }
  }
}
