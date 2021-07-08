import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CriterionItemType } from './CriterionItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GoodsProcessingField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TypeCode = 'TypeCode',
  Description = 'Description',
  Note = 'Note',
  Period = 'Period',
  ProcessingParty = 'ProcessingParty',
  CriterionItem = 'CriterionItem',
  SubGoodsProcessing = 'SubGoodsProcessing'
}

export const GoodsProcessingFieldMetaUBLExtensions = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaID = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this goods processing.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaTypeCode = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.TypeCode,
  'TypeCode',
  'Type',
  CodeType.name,
  'A type code for this goods processing.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaDescription = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description for this goods processing expressed in one or more languages',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaNote = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaPeriod = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period within this goods processing was performed',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaProcessingParty = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.ProcessingParty,
  'ProcessingParty',
  'Processing Party',
  PartyType.name,
  'The party processing the goods',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaCriterionItem = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.CriterionItem,
  'CriterionItem',
  'Criterion Item',
  CriterionItemType.name,
  'A reference to a criterion item that applies to this goods processing',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaSubGoodsProcessing = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.SubGoodsProcessing,
  'SubGoodsProcessing',
  'Sub Goods Processing',
  GoodsProcessingType.name,
  'A subordinate processing to this goods processing',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class GoodsProcessingFieldMeta {
  public static readonly UBLExtensions = GoodsProcessingFieldMetaUBLExtensions
  public static readonly ID = GoodsProcessingFieldMetaID
  public static readonly TypeCode = GoodsProcessingFieldMetaTypeCode
  public static readonly Description = GoodsProcessingFieldMetaDescription
  public static readonly Note = GoodsProcessingFieldMetaNote
  public static readonly Period = GoodsProcessingFieldMetaPeriod
  public static readonly ProcessingParty = GoodsProcessingFieldMetaProcessingParty
  public static readonly CriterionItem = GoodsProcessingFieldMetaCriterionItem
  public static readonly SubGoodsProcessing = GoodsProcessingFieldMetaSubGoodsProcessing
}

export const GoodsProcessingFieldMap = new Map([
  [GoodsProcessingField.UBLExtensions, GoodsProcessingFieldMetaUBLExtensions],
  [GoodsProcessingField.ID, GoodsProcessingFieldMetaID],
  [GoodsProcessingField.TypeCode, GoodsProcessingFieldMetaTypeCode],
  [GoodsProcessingField.Description, GoodsProcessingFieldMetaDescription],
  [GoodsProcessingField.Note, GoodsProcessingFieldMetaNote],
  [GoodsProcessingField.Period, GoodsProcessingFieldMetaPeriod],
  [GoodsProcessingField.ProcessingParty, GoodsProcessingFieldMetaProcessingParty],
  [GoodsProcessingField.CriterionItem, GoodsProcessingFieldMetaCriterionItem],
  [GoodsProcessingField.SubGoodsProcessing, GoodsProcessingFieldMetaSubGoodsProcessing]
])

export const GoodsProcessingType: Type<GoodsProcessingField> = {
  name: 'GoodsProcessing',
  label: 'Goods Processing',
  module: TypeModule.cac,
  definition: 'A class to describe the processing of goods and products',
  fields: GoodsProcessingFieldMap,
}
