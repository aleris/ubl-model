import { AggregateType } from './aggregate/AggregateType'
import { AggregateTypesReader } from './aggregate/AggregateTypesReader'
import { CodeFileWriter } from './CodeFileWriter'
import { TypeResolver } from './TypeResolver'
import { UblModule } from './UblModule'
import { UblSchema } from './UblSchema'

export class AllDocsGenerator {
  private readonly aggregateTypesReader: AggregateTypesReader

  constructor(
    private readonly ublSchema: UblSchema,
    private readonly typeResolver: TypeResolver,
    private readonly codeFileWriter: CodeFileWriter
  ) {
    this.aggregateTypesReader = new AggregateTypesReader(this.ublSchema, this.typeResolver)
  }

  async generate() {
    console.log(`Generating doc all types list for ${this.ublSchema.version}...`)
    const docTypes = []
    for (const mainDocPath of this.ublSchema.listMainDocFileNames()) {
      const types = await this.aggregateTypesReader.readTypes(UblModule.doc, mainDocPath)
      docTypes.push(...types)
    }

    this.codeFileWriter.write({
      dirPath: `meta`,
      fileName: `docAll.ts`,
      content: this.asCodeTypeAll(docTypes)
    })
    console.log(`Done generating doc all types list for ${this.ublSchema.version}...`)
  }

  asCodeTypeAll(types: AggregateType[]) {
    return `${types.map(type => `import { ${type.typeName}Type } from './doc/${type.typeName}Meta'`).join('\n')}

export const docAll = [
${types.map(type => `  ${type.typeName}Type`).join(',\n')}
]
`
  }
}
