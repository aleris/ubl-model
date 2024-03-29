import { AllDocsGenerator } from './AllDocsGenerator'
import { UblSchema } from './UblSchema'
import { CodeFileWriter } from './CodeFileWriter'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { CoreTypesGenerator } from './core/CoreTypesGenerator'
import { CoreModelGenerator } from './core/CoreModelGenerator'
import { AggregateTypesGenerator } from './aggregate/AggregateTypesGenerator'
import { ModelTypeGenerator } from './aggregate/ModelTypeGenerator'
import { MetaTypeGenerator } from './aggregate/MetaTypeGenerator'
import { DisplayTypeGenerator } from './aggregate/DisplayTypeGenerator'
import { UblModule } from './UblModule'

export class ModelGenerator {
  async generateModels(rootGenDirPath: string, version: string, addVersionToPath: boolean) {
    await ModelGenerator.generateForVersion(version, rootGenDirPath, addVersionToPath)
  }

  private static async generateForVersion(version: string, rootGenDirPath: string, addVersionToPath: boolean) {
    const ublSchema = new UblSchema(version)
    const codeFileWriter = new CodeFileWriter(rootGenDirPath, version, addVersionToPath)
    console.log(`Writing UBL model for version ${version} in ${codeFileWriter.genDirPath}`)
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)

    const coreTypesCodeGenerators = [new CoreModelGenerator(version)]
    const coreTypesGenerator = new CoreTypesGenerator(ublSchema, codeFileWriter, coreTypesCodeGenerators)
    await coreTypesGenerator.generate()

    const aggregateTypesCodeGenerators = [
      new ModelTypeGenerator(),
      new MetaTypeGenerator(),
      new DisplayTypeGenerator(),
    ]
    const aggregateTypesGenerator = new AggregateTypesGenerator(
      ublSchema,
      typeResolver,
      codeFileWriter,
      aggregateTypesCodeGenerators
    )
    await aggregateTypesGenerator.generate(UblModule.cac, 'common/UBL-CommonAggregateComponents')
    await aggregateTypesGenerator.generateAll(UblModule.cac, 'common/UBL-CommonAggregateComponents')
    await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-ExtensionContentDataType')
    await aggregateTypesGenerator.generateAll(UblModule.ext, 'common/UBL-ExtensionContentDataType')
    await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-CommonExtensionComponents')
    await aggregateTypesGenerator.generateAll(UblModule.ext, 'common/UBL-CommonExtensionComponents')

    for (const mainDocPath of ublSchema.listMainDocFileNames()) {
      await aggregateTypesGenerator.generate(UblModule.doc, mainDocPath)
    }

    await new AllDocsGenerator(ublSchema, typeResolver, codeFileWriter).generate()

    console.log(`${codeFileWriter.counter} UBL model files generated for version ${version}`)
  }
}
