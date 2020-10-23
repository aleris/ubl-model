import { CoreType } from './CoreType'
import { UblSchema } from '../UblSchema'

export class CoreTypesReader {
  constructor(
    private readonly ublSchema: UblSchema
  ) { }

  public async readTypes(): Promise<CoreType[]> {
    const json = await this.ublSchema.readAsJson('common/CCTS_CCT_SchemaModule')
    const typeNodes = json['xsd:schema']['xsd:complexType'] as Array<any>
    return typeNodes.map((jsonNode: any) => CoreType.fromJsonNode(jsonNode))
  }
}
