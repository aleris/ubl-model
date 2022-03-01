import {
  extractTypeName, getPropertyName
} from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { AggregateAttribute } from './AggregateAttribute'
import { AggregateField } from './AggregateField'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'

export class AggregateType {
  public readonly typeName: string
  public readonly prefixedTypeName: string
  public readonly fields = new Array<AggregateField>()
  public readonly attributes = new Array<AggregateAttribute>()

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
    const aggregateType = new AggregateType(
      module,
      jsonNode.$['name'],
      Documentation.fromTypeJsonNode(jsonNode),
    )
    const fieldNodes = jsonNode['xsd:sequence']?.[0]?.['xsd:element'] as Array<any> | undefined
    const fields = fieldNodes === undefined
      ? []
      : fieldNodes.map((fieldNode: any) => AggregateField.fromJsonNode(aggregateType, typeResolver, fieldNode))
    aggregateType.fields.push(...fields)
    return aggregateType
  }

  static isSimpleType(jsonNode: any) {
    return jsonNode['xsd:simpleContent'] !== undefined
  }

  static fromJsonNodeSimpleType(typeResolver: TypeResolver, jsonNode: any, module: UblModule, refTypes?: AggregateType[]) {
    const name = jsonNode.$['name']
    const aggregateType = new AggregateType(
      module,
      name,
      Documentation.fromTypeJsonNode(jsonNode),
    )
    const attributeNodes = jsonNode['xsd:simpleContent']?.[0]?.['xsd:extension']?.[0]?.['xsd:attribute']
    if (attributeNodes !== undefined) {
      const attributes = attributeNodes.map((attrNode: any) => AggregateAttribute.fromJsonNode(aggregateType, typeResolver, attrNode))
      aggregateType.attributes.push(...attributes)
    }
    let baseNode = jsonNode['xsd:simpleContent']?.[0]?.['xsd:extension']?.[0]
    if (baseNode === undefined) {
      baseNode = jsonNode['xsd:simpleContent']?.[0]?.['xsd:restriction']?.[0]
    }
    if (baseNode !== undefined) {
      const basePrefixedName = baseNode.$['base']
      const baseType = refTypes?.find(t => `${t.module}:${t.name}` === basePrefixedName)
      // console.log('basePrefixedName', basePrefixedName, baseType?.module, baseType?.name)
      if (baseType !== undefined) {
        aggregateType.attributes.push(...baseType.attributes)
      } else {
        const baseType = refTypes?.find(t =>
          t.name === name ||
          (name === 'DateTimeType' && t.name === 'DateTimeType') ||
          (name === 'DateType' && t.name === 'DateTimeType') ||
          (name === 'TimeType' && t.name === 'DateTimeType')
        )
        if (baseType !== undefined) {
          aggregateType.attributes.push(...baseType.attributes)
        }
      }
    }
    return aggregateType
  }

  get propertyName() {
    return getPropertyName(this.typeName)
  }

  get label() {
    return this.documentation.objectClass ?? this.name
  }
}
