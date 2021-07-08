import { UblSchema } from '../UblSchema'
import { CodeFileWriter } from '../CodeFileWriter'
import { TypeCodeGenerator } from '../CodeGenerator'
import { CoreTypesReader } from './CoreTypesReader'

export class CoreTypesGenerator {
  private readonly coreTypesReader: CoreTypesReader
  constructor(
    private readonly ublSchema: UblSchema,
    private readonly codeFileWriter: CodeFileWriter,
    private readonly codeGenerators: TypeCodeGenerator<any>[]
  ) {
    this.coreTypesReader = new CoreTypesReader(this.ublSchema)
  }

  async generate() {
    console.log("Generating Core Components...")
    const types = await this.coreTypesReader.readTypes()
    for (const codeGenerator of this.codeGenerators) {
      const codeFiles = [
        ...codeGenerator.globals(),
        ...types.map(type => codeGenerator.asCodeFiles(type)).reduce((acc, val) => acc.concat(val), [])
      ]
      for (const codeFile of codeFiles) {
        this.codeFileWriter.write(codeFile)
      }
    }
    console.log("Done generating Core Components.")
  }

}
