export class Documentation {
  constructor(
    public definition: string | undefined,
    public uniqueID?: string | undefined,
    public versionID?: string | undefined,
    public componentType?: string | undefined,
    public objectClass?: string | undefined,
    public categoryCode?: string | undefined,
    public dictionaryEntryName?: string | undefined,
    public propertyTerm?: string | undefined,
    public propertyTermName?: string | undefined,
    public representationTerm?: string | undefined,
    public representationTermName?: string | undefined,
    public primitiveType?: string | undefined,
    public dataType?: string | undefined,
    public cardinality?: string | undefined,
    public usageRule?: string | undefined,
    public alternativeBusinessTerms?: string | undefined,
    public examples?: string | undefined
  ) {
  }

  static fromTypeJsonNode(jsonNode: any) {
    const documentationNode = jsonNode['xsd:annotation']?.[0]?.['xsd:documentation']?.[0]

    if (!documentationNode) {
      return Documentation.fromJsonNode(undefined)
    }

    const component = documentationNode['ccts:Component']?.[0]
    if (component) {
      return Documentation.fromJsonNode(component)
    }

    if (documentationNode['ccts:Definition'] !== undefined) {
      return Documentation.fromJsonNode(documentationNode)
    }

    return Documentation.fromJsonTextNode(documentationNode)
  }

  static fromJsonNode(jsonNode: any) {
    return new Documentation(
      jsonNode?.['ccts:Definition']?.[0],
      jsonNode?.['ccts:UniqueID']?.[0],
      jsonNode?.['ccts:VersionID']?.[0],
      jsonNode?.['ccts:ComponentType']?.[0],
      jsonNode?.['ccts:ObjectClass']?.[0],
      jsonNode?.['ccts:CategoryCode']?.[0],
      jsonNode?.['ccts:DictionaryEntryName']?.[0],
      jsonNode?.['ccts:PropertyTerm']?.[0],
      jsonNode?.['ccts:PropertyTermName']?.[0],
      jsonNode?.['ccts:RepresentationTerm']?.[0],
      jsonNode?.['ccts:RepresentationTermName']?.[0],
      jsonNode?.['ccts:PrimitiveType']?.[0],
      jsonNode?.['ccts:DataType']?.[0],
      jsonNode?.['ccts:Cardinality']?.[0],
      jsonNode?.['ccts:UsageRule']?.[0],
      jsonNode?.['ccts:AlternativeBusinessTerms']?.[0],
      jsonNode?.['ccts:Examples']?.[0],
    )
  }

  static fromJsonTextNode(jsonNode: any) {
    return new Documentation(jsonNode?.toString().trim())
  }
}
