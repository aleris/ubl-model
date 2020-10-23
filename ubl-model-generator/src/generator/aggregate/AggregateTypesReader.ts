import { UblModule } from '../UblModule'
import { AggregateType } from './AggregateType'
import { UblSchema } from '../UblSchema'
import { TypeResolver } from '../TypeResolver'

export class AggregateTypesReader {
  constructor(
    private readonly ublSchema: UblSchema,
    private readonly typeResolver: TypeResolver
  ) { }

  public async readTypes(module: UblModule, schemaFileName: string) {
    const json = await this.ublSchema.readAsJson(schemaFileName)
    const typeNodes = json['xsd:schema']['xsd:complexType'] as Array<any>
    return typeNodes
      .filter((jsonNode: any) => AggregateType.isWholeType(jsonNode))
      .map((jsonNode: any) => AggregateType.fromJsonNode(this.typeResolver, jsonNode, module))
  }

  public async readAllTypes() {
    const refTypes = [
      ...await this.readTypes(UblModule.cac, 'common/UBL-CommonAggregateComponents'),
      ...await this.readTypes(UblModule.ext, 'common/UBL-ExtensionContentDataType'),
      ...await this.readTypes(UblModule.ext, 'common/UBL-CommonExtensionComponents')
    ]
    return refTypes
  }
}
