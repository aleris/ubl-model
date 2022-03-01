import { UblModule } from '../UblModule'
import { AggregateType } from './AggregateType'
import { UblSchema } from '../UblSchema'
import { TypeResolver } from '../TypeResolver'

export class AggregateTypesReader {
  constructor(
    private readonly ublSchema: UblSchema,
    private readonly typeResolver: TypeResolver
  ) { }

  public async readTypes(module: UblModule, schemaFileName: string, refTypes?: AggregateType[]) {
    const json = await this.ublSchema.readAsJson(schemaFileName)
    const typeNodes = json['xsd:schema']['xsd:complexType'] as Array<any>
    return typeNodes
      .map((jsonNode: any) => {
        if (AggregateType.isWholeType(jsonNode)) {
          return AggregateType.fromJsonNode(this.typeResolver, jsonNode, module)
        } else if (AggregateType.isSimpleType(jsonNode)) {
          return AggregateType.fromJsonNodeSimpleType(this.typeResolver, jsonNode, module, refTypes)
        } else {
          return undefined
        }
      })
      .filter(type => type !== undefined) as AggregateType[]
  }

  public async readAllTypes() {
    const docTypes = (await Promise.all(this.ublSchema.listMainDocFileNames().map(async (mainDocPath) => {
      return await this.readTypes(UblModule.doc, mainDocPath)
    }))).reduce((acc, val) => acc.concat(val), [])

    const refTypes = [
      ...await this.readTypes(UblModule.cac, 'common/UBL-CommonAggregateComponents'),
      ...await this.readTypes(UblModule.ext, 'common/UBL-ExtensionContentDataType'),
      ...await this.readTypes(UblModule.ext, 'common/UBL-CommonExtensionComponents'),
      ...await this.readTypes(
        UblModule.cbc,
        'common/UBL-UnqualifiedDataTypes',
        await this.readTypes(UblModule.ccts_cct, 'common/CCTS_CCT_SchemaModule')
      ),
      ...docTypes
    ]
    return refTypes
  }
}
