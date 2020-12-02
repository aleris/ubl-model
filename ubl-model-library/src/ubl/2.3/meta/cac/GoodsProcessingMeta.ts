import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaID = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this goods processing.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaTypeCode = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.TypeCode,
  'TypeCode',
  'Type',
  'Code',
  'A type code for this goods processing.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaDescription = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Description,
  'Description',
  'Description',
  'Text',
  'A description for this goods processing expressed in one or more languages',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaNote = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaPeriod = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.Period,
  'Period',
  'Period',
  'Period',
  'The period within this goods processing was performed',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaProcessingParty = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.ProcessingParty,
  'ProcessingParty',
  'Processing Party',
  'Party',
  'The party processing the goods',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaCriterionItem = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.CriterionItem,
  'CriterionItem',
  'Criterion Item',
  'CriterionItem',
  'A reference to a criterion item that applies to this goods processing',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsProcessingFieldMetaSubGoodsProcessing = new FieldMeta<GoodsProcessingField>(
  GoodsProcessingField.SubGoodsProcessing,
  'SubGoodsProcessing',
  'Sub Goods Processing',
  'GoodsProcessing',
  'A subordinate processing to this goods processing',
  '0..n',
  'cac',
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
