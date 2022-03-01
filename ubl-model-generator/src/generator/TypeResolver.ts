import { extractTypeName } from './type-gen-utils'
import { PrefixedName } from './PrefixedName'
import { TypeDictionary } from './TypeDictionary'

export class TypeResolver {
  constructor(private readonly typeDictionary: TypeDictionary) { }

  public resolveTypeByPrefixedName(prefixedName: PrefixedName): PrefixedName {
    if (prefixedName.hasPrefix('cac')) {
      return this.resolveCACTypeByPrefixed(prefixedName)
    }
    if (prefixedName.hasPrefix('cbc')) {
      return this.resolveCBCTypeByPrefixedName(prefixedName)
    }
    if (prefixedName.hasPrefix('udt')) {
      return this.resolveUDTType(prefixedName)
    }
    if (prefixedName.hasPrefix('qdt')) {
      return this.resolveQDTType(prefixedName)
    }
    if (prefixedName.hasPrefix('ext')) {
      return this.resolveEXTType(prefixedName)
    }
    if (prefixedName.hasPrefix('ccts-cct')) {
      return this.resolveCCTSCCTType(prefixedName)
    }

    return prefixedName.asUnknownName()
  }

  private getTypeByPrefixedName(prefixedName: PrefixedName): string | undefined {
    const map = this.typeDictionary.typeMapsByPrefix.get(prefixedName.prefix)
    if (map === undefined) {
      return undefined
    }
    return map.nameToType.get(prefixedName.name)
  }

  private resolveCACTypeByPrefixed(prefixedName: PrefixedName) {
    const type = this.getTypeByPrefixedName(prefixedName) ?? 'cac:unknown'
    return PrefixedName.from(prefixedName.prefix, extractTypeName(type))
  }

  private resolveCBCTypeByPrefixedName(prefixedName: PrefixedName): PrefixedName {
    const cbcMap = this.typeDictionary.typeMapsByPrefix.get('cbc')
    if (cbcMap === undefined) {
      console.error('cbc map undefined')
      return prefixedName.asUnknownName()
    }
    const resolvedType = cbcMap.nameToType.get(prefixedName.name)
    if (resolvedType === undefined) {
      console.error(`cannot find ${prefixedName.name} in cbc#nameToType map`)
      return prefixedName.asUnknownName()
    }
    const resolvedPrefixedType = cbcMap.typeToPrefixedType.get(resolvedType)
    if (resolvedPrefixedType === undefined) {
      console.error(`cannot find ${resolvedPrefixedType} in cbc#typeToPrefixedType map`)
      return prefixedName.asUnknownName()
    }
    const resolvedPrefixedTypeName = new PrefixedName(resolvedPrefixedType)
    return this.resolveTypeByPrefixedName(resolvedPrefixedTypeName)
  }

  private resolveUDTType(prefixedName: PrefixedName): PrefixedName {
    const prefixedType = this.typeDictionary.typeMapsByPrefix.get('udt')?.typeToPrefixedType.get(prefixedName.name)
    if (prefixedType === undefined) {
      return prefixedName.asUnknownName()
    }

    const prefixedTypeName = new PrefixedName(prefixedType)
    if (prefixedTypeName.hasPrefix('ccts-cct')) {
      return PrefixedName.from('cbc', extractTypeName(prefixedTypeName.name))
    }

    // Per XSD lexical constraints, the following unqualified data types
    // corresponding to core component types and secondary representation terms
    // are based on XSD types (accordingly, the supplementary component "format"
    // is not made available for these types):
    //
    // Date Time. Type  on  xsd:dateTime
    // Date. Type       on  xsd:date
    // Time. Type       on  xsd:time
    // Indicator. Type  on  xsd:boolean
    switch (prefixedName.prefixedName) {
      case 'xsd:dateTime':
        return PrefixedName.from('cbc', 'DateTime')
      case 'xsd:date':
        return PrefixedName.from('cbc', 'Date')
      case 'xsd:time':
        return PrefixedName.from('cbc', 'Time')
      case 'xsd:boolean':
        return PrefixedName.from('cbc', 'Indicator')
    }

    return PrefixedName.from('cbc', extractTypeName(PrefixedName.extractNameWithoutPrefix(prefixedName.name)))
  }

  private resolveQDTType(prefixedName: PrefixedName): PrefixedName {
    const prefixedType = this.typeDictionary.typeMapsByPrefix.get('qdt')?.typeToPrefixedType.get(prefixedName.name)
    if (prefixedType === undefined) {
      return prefixedName.asUnknownName()
    }
    return this.resolveTypeByPrefixedName(new PrefixedName(prefixedType))
  }

  private resolveEXTType(prefixedName: PrefixedName): PrefixedName {
    const extMap = this.typeDictionary.typeMapsByPrefix.get('ext')
    if (extMap === undefined) {
      return prefixedName.asUnknownName()
    }
    const type = extMap.nameToType.get(prefixedName.name)
    if (type === undefined) {
      return prefixedName.asUnknownName()
    }
    const name = extMap.typeToPrefixedType.get(type)
    if (name === undefined) {
      return PrefixedName.from('ext', prefixedName.name)
    }
    return this.resolveUDTType(new PrefixedName(name))
  }

  private resolveCCTSCCTType(prefixedName: PrefixedName): PrefixedName {
    return prefixedName
  }
}
