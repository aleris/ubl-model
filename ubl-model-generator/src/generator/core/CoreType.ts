import { extractTypeName, formatComment, mapPrimitiveType } from '../type-gen-utils'
import { Documentation } from '../Documentation'
import { CoreTypeAttribute } from './CoreTypeAttribute'

export class CoreType {
  public readonly typeName: string
  public readonly resolvedType: string

  constructor(
    public readonly name: string,
    public readonly base: string,
    public readonly documentation: Documentation,
    public readonly attributes: Array<CoreTypeAttribute>
  ) {
    this.typeName = extractTypeName(this.name)
    this.resolvedType = mapPrimitiveType(this.documentation.primitiveType)
  }

  static fromJsonNode(jsonNode: any) {
    const attributes = jsonNode['xsd:simpleContent'][0]['xsd:extension'][0]['xsd:attribute']
      .map((attributeNode: any) => CoreTypeAttribute.fromJsonNode(attributeNode))
    return new CoreType(
      jsonNode.$['name'],
      jsonNode['xsd:simpleContent'][0]['xsd:extension'][0].$['base'],
      Documentation.fromTypeJsonNode(jsonNode),
      attributes
    )
  }
}

