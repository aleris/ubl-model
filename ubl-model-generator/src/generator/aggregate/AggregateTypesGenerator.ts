import { UblSchema } from '../UblSchema'
import { CodeFileWriter } from '../CodeFileWriter'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'
import { TypeCodeGenerator } from '../CodeGenerator'
import { AggregateType } from './AggregateType'
import { AggregateTypesReader } from './AggregateTypesReader'

export class AggregateTypesGenerator {
  private readonly aggregateTypesReader: AggregateTypesReader

  constructor(
    private readonly ublSchema: UblSchema,
    private readonly typeResolver: TypeResolver,
    private readonly codeFileWriter: CodeFileWriter,
    private readonly codeGenerators: TypeCodeGenerator<any>[]
  ) {
    this.aggregateTypesReader = new AggregateTypesReader(this.ublSchema, this.typeResolver)
  }

  async generate(ublModule: UblModule, schemaFileName: string) {
    console.log(`Generating ${ublModule} from ${schemaFileName}...`)
    const types = await this.aggregateTypesReader.readTypes(ublModule, schemaFileName)
    for (const codeGenerator of this.codeGenerators) {
      const codeFiles = [
        ...codeGenerator.globals(),
        ...types.map(type => codeGenerator.asCodeFiles(type)).reduce((acc, val) => acc.concat(val), []),
      ]
      for (const codeFile of codeFiles) {
        this.codeFileWriter.write(codeFile)
      }
    }
    console.log(`Done generating ${ublModule} for ${schemaFileName}.`)
  }

  async generateAll(ublModule: UblModule, schemaFileName: string) {
    console.log(`Generating ${ublModule} all types list from ${schemaFileName}...`)
    const types = await this.aggregateTypesReader.readTypes(ublModule, schemaFileName)
    this.codeFileWriter.write({
      dirPath: `meta`,
      fileName: `${ublModule}All.ts`,
      content: this.asCodeTypeAll(ublModule, types)
    })
    console.log(`Done generating ${ublModule} all types list for ${schemaFileName}.`)
  }

  asCodeTypeAll(ublModule: UblModule, types: AggregateType[]) {
    return `import { FieldMeta } from './Meta'
import { Type } from './Type'
${types.map(type => `import { ${type.typeName}TypeMeta } from './${ublModule}/${type.typeName}MetaType'
import { ${type.typeName}FieldMap } from './cac/${type.typeName}Meta'`).join('\n')}

export const ${ublModule}All = [
${types.map(type => `  ${type.typeName}TypeMeta`).join(',\n')}
]

export const ${ublModule}AllFieldsMap = new Map<string, Map<any, FieldMeta<any>>>([
${types.map(type => `  ['${type.module}:${type.typeName}', ${type.typeName}FieldMap]`).join(',\n')}
])
`
  }
}
