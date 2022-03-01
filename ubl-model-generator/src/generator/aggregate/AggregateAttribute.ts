import { Documentation } from '../Documentation'
import { TypeResolver } from '../TypeResolver'
import { UblModule } from '../UblModule'
import { AggregateType } from './AggregateType'

export class AggregateAttribute {
  constructor(
    private readonly typeResolver: TypeResolver,
    public readonly aggregateType: AggregateType,
    public readonly attributeName: string,
    public readonly optional: boolean,
    public readonly documentation: Documentation
  ) {
  }

  get label() {
    return this.getPropertyTermWithFallbackToName()
  }

  static fromJsonNode(aggregateType: AggregateType, typeResolver: TypeResolver, jsonNode: any) {
    const name = jsonNode.$['name']

    const optional = jsonNode.$['use'] === 'optional'

    return new AggregateAttribute(
      typeResolver,
      aggregateType,
      name,
      optional,
      Documentation.fromTypeJsonNode(jsonNode)
    )
  }

  protected getPropertyTermWithFallbackToName() {
    if (this.documentation.propertyTerm !== undefined) {
      return this.documentation.propertyTermQualifier
        ? `${this.documentation.propertyTermQualifier} ${this.documentation.propertyTerm}`
        : this.documentation.propertyTerm
    }
    return this.documentation.propertyTermName ?? this.attributeName
  }
}
