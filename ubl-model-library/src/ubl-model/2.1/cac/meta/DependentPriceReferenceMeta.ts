import { FieldMeta } from '../../FieldMeta'

export enum DependentPriceReferenceField {
  Percent = 'Percent',
  LocationAddress = 'LocationAddress',
  DependentLineReference = 'DependentLineReference'
}

export const DependentPriceReferenceFieldMetaPercent = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.Percent,
  'Percent',
  'Percent',
  'Numeric',
  'The percentage by which the price of the different item is multiplied to calculate the price of the item.',
  '0..1',
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaLocationAddress = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.LocationAddress,
  'LocationAddress',
  'Address',
  'Address',
  'The reference location for this dependent price reference.',
  '0..1',
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaDependentLineReference = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.DependentLineReference,
  'DependentLineReference',
  'Line Reference',
  'LineReference',
  'A reference to a line that the price is depended of.',
  '0..1',
  undefined,
  undefined
)

export class DependentPriceReferenceFieldMeta {
  public static readonly Percent = DependentPriceReferenceFieldMetaPercent
  public static readonly LocationAddress = DependentPriceReferenceFieldMetaLocationAddress
  public static readonly DependentLineReference = DependentPriceReferenceFieldMetaDependentLineReference
}

export const DependentPriceReferenceFieldMap = new Map([
  [DependentPriceReferenceField.Percent, DependentPriceReferenceFieldMetaPercent],
  [DependentPriceReferenceField.LocationAddress, DependentPriceReferenceFieldMetaLocationAddress],
  [DependentPriceReferenceField.DependentLineReference, DependentPriceReferenceFieldMetaDependentLineReference]
])
