import { AggregateType } from './aggregate/AggregateType'
import { TypeResolver } from './TypeResolver'
import { PrefixedName } from './PrefixedName'
import { TypeDescriptor, TypeDescriptorMap } from './FieldMapGenerator'

export class FieldMapBuilder {
  constructor(
    private readonly refTypes: AggregateType[],
    private readonly typeResolver: TypeResolver
  ) {
  }

  public build(type: AggregateType): any {
    const map: TypeDescriptorMap = {}
    this.addRecursive(type, map)
    return map
  }

  public buildForAll(types: AggregateType[]): any {
    const map: TypeDescriptorMap = {}
    for (const type of types) {
      this.addRecursive(type, map)
    }
    return map
  }

  private addRecursive(type: AggregateType, map: TypeDescriptorMap) {
    const entry: {[ref: string]: TypeDescriptor} = {}
    const resolvedFieldTypes = type.fields.map(field => {
      const refFieldTypePrefixedName = this.typeResolver.resolveTypeByPrefixedName(new PrefixedName(field.ref))
      const refFieldType = this.refTypes.find(t => t.prefixedTypeName === refFieldTypePrefixedName.prefixedName)
      return {field, refFieldType}
    })
    for (const refField of resolvedFieldTypes) {
      if (refField.refFieldType !== undefined) {
        entry[refField.field.ref] = [
          refField.refFieldType.prefixedTypeName,
          refField.field.cardinalityWithFallbackToOccur,
        ]
      } else {
        entry[refField.field.ref] = [
          refField.field.resolvedType.name,
          refField.field.cardinalityWithFallbackToOccur,
        ]
      }
    }
    map[type.prefixedTypeName] = entry

    for (const refField of resolvedFieldTypes) {
      if (refField.refFieldType !== undefined && map[refField.refFieldType.prefixedTypeName] === undefined) {
        this.addRecursive(refField.refFieldType, map)
      }
    }
  }
}
