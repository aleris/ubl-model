import { CoreType, DateAndTimeType } from './CoreType'
import { UblSchema } from '../UblSchema'
import { UblModule } from '../UblModule'
import { GeneratedWriter } from '../GeneratedWriter'

export class CoreTypesGenerator {
  private static readonly module = UblModule.cbc

  constructor(
    private readonly ublSchema: UblSchema,
    private readonly generatedWriter: GeneratedWriter
  ) { }

  async generate() {
    console.log("Generating Core Components...")
    const json = await this.ublSchema.readAsJson('common/CCTS_CCT_SchemaModule')
    const typeNodes = json['xsd:schema']['xsd:complexType'] as Array<any>
    const types = typeNodes.map((jsonNode: any) => CoreType.fromJsonNode(jsonNode))
    types.forEach(type =>
      this.generatedWriter.write(CoreTypesGenerator.module, type.typeName, type.asCodeString(this.ublSchema.version))
    )

    // there are no Date and Time separate types defined in UBL, see note in UBL-UnqualifiedDataTypes-2.2.xsd
    // however for JSON representation it is expected to have separate types similar with DateTime one
    this.generatedWriter.write(
      CoreTypesGenerator.module,
      'Date',
      new DateAndTimeType().asCodeString(this.ublSchema.version, 'Date')
    )
    this.generatedWriter.write(
      CoreTypesGenerator.module,
      'Time',
      new DateAndTimeType().asCodeString(this.ublSchema.version, 'Time')
    )
    console.log("Done generating Core Components.")
  }
}
