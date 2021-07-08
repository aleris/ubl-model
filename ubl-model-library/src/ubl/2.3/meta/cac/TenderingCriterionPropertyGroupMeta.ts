import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { TenderingCriterionPropertyType } from './TenderingCriterionPropertyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaID = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the group of criteria.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaName = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the group.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaDescription = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.Description,
  'Description',
  'Description',
  TextType.name,
  'The textual description for this group.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaPropertyGroupTypeCode = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.PropertyGroupTypeCode,
  'PropertyGroupTypeCode',
  'Property Group Type Code',
  CodeType.name,
  'A code signifying the type of the property group',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicator = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.FulfilmentIndicator,
  'FulfilmentIndicator',
  'Fulfilment Indicator',
  IndicatorType.name,
  'An indication that this group of criteria have been fulfilled.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaFulfilmentIndicatorTypeCode = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.FulfilmentIndicatorTypeCode,
  'FulfilmentIndicatorTypeCode',
  'Fulfilment Indicator Type Code',
  CodeType.name,
  'A code signifying how this group of criteria have been fulfilled.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaTenderingCriterionProperty = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.TenderingCriterionProperty,
  'TenderingCriterionProperty',
  'Tendering Criterion Property',
  TenderingCriterionPropertyType.name,
  'All the criteria properties comprising the tendering criterion.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionPropertyGroupFieldMetaSubsidiaryTenderingCriterionPropertyGroup = new FieldMeta<TenderingCriterionPropertyGroupField>(
  TenderingCriterionPropertyGroupField.SubsidiaryTenderingCriterionPropertyGroup,
  'SubsidiaryTenderingCriterionPropertyGroup',
  'Subsidiary Tendering Criterion Property Group',
  TenderingCriterionPropertyGroupType.name,
  'Subsidiary tendering criteria groups comprising this tendering criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TenderingCriterionPropertyGroupType: Type<TenderingCriterionPropertyGroupField> = {
  name: 'TenderingCriterionPropertyGroup',
  label: 'Tendering Criterion Property Group',
  module: TypeModule.cac,
  definition: 'A class to describe a group of tendering criteria',
  fields: TenderingCriterionPropertyGroupFieldMap,
}
