import { UblSchema } from './UblSchema'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { UblModule } from './UblModule'
import { AggregateTypesReader } from './aggregate/AggregateTypesReader'
import { CodeFileWriter } from './CodeFileWriter'
import { FieldMapBuilder } from './FieldMapBuilder'
import { CodeFile } from './CodeGenerator'

export type TypeDescriptor = [
  cardinality: string,
  typeName?: string | undefined
]

export type TypeDescriptorMap = {
  [typeName: string]: {[typeName: string]: TypeDescriptor}
}

export class FieldMapGenerator {
  async generateFieldMaps(rootGenDirPath: string, version: string, addVersionToPath: boolean) {
    console.log(`Generating field maps for UBL version ${version}...`)
    const ublSchema = new UblSchema(version)
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)
    const aggregateTypesReader = new AggregateTypesReader(ublSchema, typeResolver)
    const codeFileWriter = new CodeFileWriter(rootGenDirPath, version, addVersionToPath)
    const refTypes = await aggregateTypesReader.readAllTypes()
    const mapBuilder = new FieldMapBuilder(refTypes, typeResolver)
    const allTypes = await Promise.all(ublSchema.listMainDocFileNames().map(async (mainDocFileName) => {
      const types = await aggregateTypesReader.readTypes(UblModule.doc, mainDocFileName)
      return types[0]
    }))
    const map = mapBuilder.buildForAll(allTypes)
    const name = `DocFieldsMap`
    const code = `export const ${name} = ${JSON.stringify(map)}`
    const codeFile: CodeFile = {
      dirPath: 'doc/map',
      fileName: `${name}.ts`,
      content: code
    }
    codeFileWriter.write(codeFile)
    console.log(`${codeFileWriter.counter} field maps files generated for UBL model version ${version}`)
  }
}
