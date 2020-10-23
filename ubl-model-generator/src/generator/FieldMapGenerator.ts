import { UblSchema } from './UblSchema'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { UblModule } from './UblModule'
import { AggregateTypesReader } from './aggregate/AggregateTypesReader'
import { CodeFileWriter } from './CodeFileWriter'
import { FieldMapBuilder } from './FieldMapBuilder'
import { CodeFile } from './CodeGenerator'

export type TypeDescriptor = [
  name: string,
  ref?: string | undefined
]

export type TypeDescriptorMap = {
  [key: string]: TypeDescriptor[]
}

export class FieldMapGenerator {
  async generateFieldMaps(version: string) {
    console.log("Generating tree maps...")
    const ublSchema = new UblSchema(version)
    const typeDictionary = await new TypeDictionary(ublSchema).loadFromSchema()
    const typeResolver = new TypeResolver(typeDictionary)
    const aggregateTypesReader = new AggregateTypesReader(ublSchema, typeResolver)
    const rootGenDirPath = '../ubl-model-library/src/ubl-model'
    const codeFileWriter = new CodeFileWriter(rootGenDirPath, version)
    const refTypes = await aggregateTypesReader.readAllTypes()
    const mapBuilder = new FieldMapBuilder(refTypes, typeResolver)
    for (const mainDocFileName of ublSchema.listMainDocFileNames()) {
      const types = await aggregateTypesReader.readTypes(UblModule.doc, mainDocFileName)
      const mainDocType = types[0]!
      const map = mapBuilder.build(mainDocType)
      const name = `${mainDocType.typeName}FieldMap`
      const code = `export const ${name} = ${JSON.stringify(map)}`
      const codeFile: CodeFile = {
        dirPath: 'doc/map',
        fileName: name,
        content: code
      }
      codeFileWriter.write(codeFile)
    }
    console.log("Done generating tree maps.")
  }
}
