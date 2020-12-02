import { FieldMeta } from '../FieldMeta'

export enum TenderingCriterionPropertyGroupField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Description = 'Description',
  PropertyGroupTypeCode = 'PropertyGroupTypeCode',
  FulfilmentIndicator = 'FulfilmentIndicator',
  FulfilmentIndicatorTypeCode = 'FulfilmentIndicatorTypeCode',
  TenderingCriterionProperty = 'TenderingCriterionProperty',
  SubsidiaryTenderingCriterionPropertyGroup = 'SubsidiaryTenderingCriterionPropertyGroup'
}

export const TenderingCriterionPropertyGroupFieldMetaUBLExtensions = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaID = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the group of criteria.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaName = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the group.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaDescription = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.Description,
  'Description',
  'Description',
  'Text',
  'The textual description for this group.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaPropertyGroupTypeCode = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.PropertyGroupTypeCode,
  'PropertyGroupTypeCode',
  'Property Group Type Code',
  'Code',
  'A code signifying the type of the property group',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicator = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.FulfilmentIndicator,
  'FulfilmentIndicator',
  'Fulfilment Indicator',
  'Indicator',
  'An indication that this group of criteria have been fulfilled.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicatorTypeCode = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.FulfilmentIndicatorTypeCode,
  'FulfilmentIndicatorTypeCode',
  'Fulfilment Indicator Type Code',
  'Code',
  'A code signifying how this group of criteria have been fulfilled.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaTenderingCriterionProperty = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.TenderingCriterionProperty,
  'TenderingCriterionProperty',
  'Tendering Criterion Property',
  'TenderingCriterionProperty',
  'All the criteria properties comprising the tendering criterion.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaSubsidiaryTenderingCriterionPropertyGroup = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.SubsidiaryTenderingCriterionPropertyGroup,
  'SubsidiaryTenderingCriterionPropertyGroup',
  'Subsidiary Tendering Criterion Property Group',
  'TenderingCriterionPropertyGroup',
  'Subsidiary tendering criteria groups comprising this tendering criterion.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TenderingCriterionPropertyGroupFieldMeta {
  public static readonly UBLExtensions = TenderingCriterionPropertyGroupFieldMetaUBLExtensions
  public static readonly ID = TenderingCriterionPropertyGroupFieldMetaID
  public static readonly Name = TenderingCriterionPropertyGroupFieldMetaName
  public static readonly Description = TenderingCriterionPropertyGroupFieldMetaDescription
  public static readonly PropertyGroupTypeCode = TenderingCriterionPropertyGroupFieldMetaPropertyGroupTypeCode
  public static readonly FulfilmentIndicator = TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicator
  public static readonly FulfilmentIndicatorTypeCode = TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicatorTypeCode
  public static readonly TenderingCriterionProperty = TenderingCriterionPropertyGroupFieldMetaTenderingCriterionProperty
  public static readonly SubsidiaryTenderingCriterionPropertyGroup = TenderingCriterionPropertyGroupFieldMetaSubsidiaryTenderingCriterionPropertyGroup
}

export const TenderingCriterionPropertyGroupFieldMap = new Map([
  [TenderingCriterionPropertyGroupField.UBLExtensions, TenderingCriterionPropertyGroupFieldMetaUBLExtensions],
  [TenderingCriterionPropertyGroupField.ID, TenderingCriterionPropertyGroupFieldMetaID],
  [TenderingCriterionPropertyGroupField.Name, TenderingCriterionPropertyGroupFieldMetaName],
  [TenderingCriterionPropertyGroupField.Description, TenderingCriterionPropertyGroupFieldMetaDescription],
  [TenderingCriterionPropertyGroupField.PropertyGroupTypeCode, TenderingCriterionPropertyGroupFieldMetaPropertyGroupTypeCode],
  [TenderingCriterionPropertyGroupField.FulfilmentIndicator, TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicator],
  [TenderingCriterionPropertyGroupField.FulfilmentIndicatorTypeCode, TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicatorTypeCode],
  [TenderingCriterionPropertyGroupField.TenderingCriterionProperty, TenderingCriterionPropertyGroupFieldMetaTenderingCriterionProperty],
  [TenderingCriterionPropertyGroupField.SubsidiaryTenderingCriterionPropertyGroup, TenderingCriterionPropertyGroupFieldMetaSubsidiaryTenderingCriterionPropertyGroup]
])
