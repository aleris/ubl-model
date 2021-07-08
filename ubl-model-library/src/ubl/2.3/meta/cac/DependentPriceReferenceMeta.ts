import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { NumericType } from '../cbc/NumericMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DependentPriceReferenceField {
  UBLExtensions = 'UBLExtensions',
  Percent = 'Percent',
  LocationAddress = 'LocationAddress',
  DependentLineReference = 'DependentLineReference'
}

export const DependentPriceReferenceFieldMetaUBLExtensions = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaPercent = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.Percent,
  'Percent',
  'Percent',
  NumericType.name,
  'The percentage by which the price of the different item is multiplied to calculate the price of the item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaLocationAddress = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.LocationAddress,
  'LocationAddress',
  'Location Address',
  AddressType.name,
  'The reference location for this dependent price reference.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaDependentLineReference = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.DependentLineReference,
  'DependentLineReference',
  'Dependent Line Reference',
  LineReferenceType.name,
  'A reference to a line that the price is depended of.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DependentPriceReferenceFieldMeta {
  public static readonly UBLExtensions = DependentPriceReferenceFieldMetaUBLExtensions
  public static readonly Percent = DependentPriceReferenceFieldMetaPercent
  public static readonly LocationAddress = DependentPriceReferenceFieldMetaLocationAddress
  public static readonly DependentLineReference = DependentPriceReferenceFieldMetaDependentLineReference
}

export const DependentPriceReferenceFieldMap = new Map([
  [DependentPriceReferenceField.UBLExtensions, DependentPriceReferenceFieldMetaUBLExtensions],
  [DependentPriceReferenceField.Percent, DependentPriceReferenceFieldMetaPercent],
  [DependentPriceReferenceField.LocationAddress, DependentPriceReferenceFieldMetaLocationAddress],
  [DependentPriceReferenceField.DependentLineReference, DependentPriceReferenceFieldMetaDependentLineReference]
])

export const DependentPriceReferenceType: Type<DependentPriceReferenceField> = {
  name: 'DependentPriceReference',
  label: 'Dependent Price Reference',
  module: TypeModule.cac,
  definition: 'A class to define the price of an item as a percentage of the price of a different item.',
  fields: DependentPriceReferenceFieldMap,
}
