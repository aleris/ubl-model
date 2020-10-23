import { Documentation } from '../Documentation'
import { PrefixedName } from '../PrefixedName'
import { TypeResolver } from '../TypeResolver'
import { AggregateType } from './AggregateType'

export class AggregateField {
  public readonly fieldName: string
  public readonly resolvedType: PrefixedName

  constructor(
    private readonly typeResolver: TypeResolver,
    public readonly aggregateType: AggregateType,
    public readonly ref: string,
    public readonly minOccur: string,
    public readonly maxOccurs: string,
    public readonly documentation: Documentation
  ) {
    this.fieldName = PrefixedName.extractNameWithoutPrefix(ref)
    this.resolvedType = this.typeResolver.resolveTypeByPrefixedName(new PrefixedName(this.ref))
  }

  static fromJsonNode(aggregateType: AggregateType, typeResolver: TypeResolver, jsonNode: any) {
    const ref = jsonNode.$['ref']
    const defaultTypePrefix = aggregateType.module
    const prefixedRef = defaultTypePrefix === undefined || ref.indexOf(':') !== -1 ? ref : `${defaultTypePrefix}:${ref}`

    return new AggregateField(
      typeResolver,
      aggregateType,
      prefixedRef,
      jsonNode.$['minOccurs'],
      jsonNode.$['maxOccurs'],
      Documentation.fromTypeJsonNode(jsonNode)
    )
  }
}
