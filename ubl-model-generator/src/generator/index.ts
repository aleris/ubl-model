import { UblSchema } from './UblSchema'
import { TypeDictionary } from './TypeDictionary'
import { GeneratedWriter } from './GeneratedWriter'
import { AggregateTypesGenerator } from './aggregate/AggregateTypesGenerator'
import { CoreTypesGenerator } from './core/CoreTypesGenerator'
import { TypeResolver } from './TypeResolver'
import { UblModule } from './UblModule'

async function generate() {
  const rootGenDirPath = '../ubl-model-library/src/ubl-model'
  const versions = ['2.1', '2.2']
  for (const version of versions) {
    await generateForVersion(version, rootGenDirPath)
  }
}

async function generateForVersion(version: string, rootGenDirPath: string) {
  const ublSchema = new UblSchema(version)
  const generatedWriter = new GeneratedWriter(rootGenDirPath, version)
  console.log(`Writing UBL model for version ${version} in ${generatedWriter.genDirPath}`)
  const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
  const typeResolver = new TypeResolver(typeDictionary)

  const coreTypesGenerator = new CoreTypesGenerator(ublSchema, generatedWriter)
  await coreTypesGenerator.generate()

  const aggregateTypesGenerator = new AggregateTypesGenerator(ublSchema, typeResolver, generatedWriter)
  await aggregateTypesGenerator.generate(UblModule.cac, 'common/UBL-CommonAggregateComponents')
  await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-ExtensionContentDataType')
  await aggregateTypesGenerator.generate(UblModule.ext, 'common/UBL-CommonExtensionComponents')

  for (const mainDocPath of ublSchema.listMainDocNames()) {
    await aggregateTypesGenerator.generate(UblModule.doc, mainDocPath)
  }
}

generate().then()
