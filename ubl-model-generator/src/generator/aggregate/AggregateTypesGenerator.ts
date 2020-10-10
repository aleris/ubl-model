import { UblSchema } from '../UblSchema'
import { GeneratedWriter } from '../GeneratedWriter'
import { AggregateType } from './AggregateType'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateTypesGenerator {
  constructor(
    private readonly ublSchema: UblSchema,
    private readonly typeResolver: TypeResolver,
    private readonly generatedWriter: GeneratedWriter
  ) { }

  async generate(module: UblModule, schemaFileName: string) {
    console.log(`Generating ${module} from ${schemaFileName}...`)
    const json = await this.ublSchema.readAsJson(schemaFileName)
    const typeNodes = json['xsd:schema']['xsd:complexType'] as Array<any>
    const types = typeNodes
      .filter((jsonNode: any) => AggregateType.isWholeType(jsonNode))
      .map((jsonNode: any) => AggregateType.fromJsonNode(this.typeResolver, jsonNode, module))
    // types.filter(type => type.name === 'AllowanceChargeType').forEach(type => type.writeToFile(this.genDir))
    types.forEach(type =>
      this.generatedWriter.write(module, type.typeName, type.asCodeString(module))
    )
    console.log(`Done generating ${module}.`)
  }

}
