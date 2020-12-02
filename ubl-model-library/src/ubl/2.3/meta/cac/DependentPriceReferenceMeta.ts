import { FieldMeta } from '../FieldMeta'

export enum DependentPriceReferenceField {
  UBLExtensions = 'UBLExtensions',
  Percent = 'Percent',
  LocationAddress = 'LocationAddress',
  DependentLineReference = 'DependentLineReference'
}

export const DependentPriceReferenceFieldMetaUBLExtensions = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaPercent = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.Percent,
  'Percent',
  'Percent',
  'Numeric',
  'The percentage by which the price of the different item is multiplied to calculate the price of the item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaLocationAddress = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.LocationAddress,
  'LocationAddress',
  'Location Address',
  'Address',
  'The reference location for this dependent price reference.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DependentPriceReferenceFieldMetaDependentLineReference = new FieldMeta<DependentPriceReferenceField>(
  DependentPriceReferenceField.DependentLineReference,
  'DependentLineReference',
  'Dependent Line Reference',
  'LineReference',
  'A reference to a line that the price is depended of.',
  '0..1',
  'cac',
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
