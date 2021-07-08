import {
  extractTypeName, getPropertyName
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { AggregateField } from './AggregateField'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateType {
  public readonly typeName: string
  public readonly prefixedTypeName: string
  public readonly fields = new Array<AggregateField>()

  constructor(
    public readonly module: UblModule,
    public readonly name: string,
    public readonly documentation: Documentation
  ) {
    const nameWithoutPrefix = PrefixedName.extractNameWithoutPrefix(this.name)
    this.typeName = extractTypeName(nameWithoutPrefix)
    this.prefixedTypeName = `${this.module}:${this.typeName}`
  }

  static isWholeType(jsonNode: any) {
    return jsonNode['xsd:sequence'] !== undefined
  }

  static fromJsonNode(typeResolver: TypeResolver, jsonNode: any, module: UblModule) {
    const fieldNodes = jsonNode['xsd:sequence']?.[0]?.['xsd:element'] as Array<any> | undefined
    const aggregateType = new AggregateType(
      module,
      jsonNode.$['name'],
      Documentation.fromTypeJsonNode(jsonNode),
    )
    const fields = fieldNodes === undefined
      ? []
      : fieldNodes.map((fieldNode: any) => AggregateField.fromJsonNode(aggregateType, typeResolver, fieldNode))
    aggregateType.fields.push(...fields)
    return aggregateType
  }

  get propertyName() {
    return getPropertyName(this.typeName)
  }
}
