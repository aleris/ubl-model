import { UblSchema } from '../UblSchema'
import { CodeFileWriter } from '../CodeFileWriter'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'
import { TypeCodeGenerator } from '../CodeGenerator'
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
      const codeFiles = [...codeGenerator.globals(), ...types.map(type => codeGenerator.asCodeString(type))]
      for (const codeFile of codeFiles) {
        this.codeFileWriter.write(codeFile)
      }
    }
    console.log(`Done generating ${ublModule} for ${schemaFileName}.`)
  }
}
