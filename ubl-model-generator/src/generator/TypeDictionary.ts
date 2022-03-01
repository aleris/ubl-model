import { UblSchema } from './UblSchema'

export class TypeMap {
  constructor(
    public readonly nameToType: Map<string, string>,
    public readonly typeToPrefixedType: Map<string, string>
  ) { }
}

export class TypeDictionary {
  public readonly typeMapsByPrefix = new Map<string, TypeMap>()

  constructor(private readonly ublSchema: UblSchema) {}

  async loadFromSchema() {
    await this.addFromFile('ccts-cct', 'common/CCTS_CCT_SchemaModule')
    await this.addFromFile('cbc', 'common/UBL-CommonBasicComponents')
    await this.addFromFile('cac', 'common/UBL-CommonAggregateComponents')
    await this.addFromFile('udt', 'common/UBL-UnqualifiedDataTypes')
    await this.addFromFile('qdt', 'common/UBL-QualifiedDataTypes')
    await this.addFromFile('ext', 'common/UBL-CommonExtensionComponents')

    // console.log(this.typeMapsByPrefix.get('cbc')?.typeToPrefixedType)
    // console.log(this.typeMapsByPrefix.get('cbc')?.nameToType)
    return this
  }

  private async addFromFile(prefix: string, path: string) {
    const json = await this.ublSchema.readAsJson(path)
    const typeMap = new TypeMap(
      this.loadPrefixedNameToTypeMap(json),
      this.loadTypeToPrefixedNameMap(json)
    )
    this.typeMapsByPrefix.set(prefix, typeMap)
  }

  private loadTypeToPrefixedNameMap(json: any) {
    const typeNodes = json['xsd:schema']?.['xsd:complexType'] as Array<any> | undefined
    const map = new Map<string, string>()
    if (typeNodes === undefined) {
      return map
    }
    typeNodes.forEach((typeNode: any) => {
      const typeName = typeNode.$['name']
      const restriction = typeNode['xsd:simpleContent']?.[0]?.['xsd:restriction']
      const extension = typeNode['xsd:simpleContent']?.[0]?.['xsd:extension']
      if (restriction !== undefined || extension !== undefined) {
        const prefixedName = restriction ? restriction[0].$['base'] : extension[0].$['base']
        map.set(typeName, prefixedName)
      }
    })
    return map
  }

  private loadPrefixedNameToTypeMap(json: any) {
    const elementNodes = json['xsd:schema']?.['xsd:element'] as Array<any> | undefined
    const map = new Map<string, string>()
    if (elementNodes === undefined) {
      return map
    }
    elementNodes.forEach((elementNode: any) => {
      const name = elementNode.$['name']
      const type = elementNode.$['type']
      map.set(name, type)
    })
    return map
  }
}
