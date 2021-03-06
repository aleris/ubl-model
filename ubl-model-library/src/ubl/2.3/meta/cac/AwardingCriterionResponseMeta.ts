import { FieldMeta } from '../FieldMeta'

export enum AwardingCriterionResponseField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  AwardingCriterionID = 'AwardingCriterionID',
  AwardingCriterionDescription = 'AwardingCriterionDescription',
  Description = 'Description',
  Quantity = 'Quantity',
  Amount = 'Amount',
  SubordinateAwardingCriterionResponse = 'SubordinateAwardingCriterionResponse'
}

export const AwardingCriterionResponseFieldMetaUBLExtensions = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaID = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identification of this awarding criterion response.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAwardingCriterionID = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.AwardingCriterionID,
  'AwardingCriterionID',
  'Awarding Criterion Identifier',
  'Identifier',
  'An identifer of the awarding criterion being referred to.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAwardingCriterionDescription = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.AwardingCriterionDescription,
  'AwardingCriterionDescription',
  'Awarding Criterion Description',
  'Text',
  'Describes the awarding criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaDescription = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Description,
  'Description',
  'Description',
  'Text',
  'Describes the awarding criterion response.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaQuantity = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'Specifies the quantity tendered for this awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAmount = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'Specifies the monetary amount tendered for this awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaSubordinateAwardingCriterionResponse = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.SubordinateAwardingCriterionResponse,
  'SubordinateAwardingCriterionResponse',
  'Subordinate Awarding Criterion Response',
  'AwardingCriterionResponse',
  'Defines responses to any subsidiary awarding criterion.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class AwardingCriterionResponseFieldMeta {
  public static readonly UBLExtensions = AwardingCriterionResponseFieldMetaUBLExtensions
  public static readonly ID = AwardingCriterionResponseFieldMetaID
  public static readonly AwardingCriterionID = AwardingCriterionResponseFieldMetaAwardingCriterionID
  public static readonly AwardingCriterionDescription = AwardingCriterionResponseFieldMetaAwardingCriterionDescription
  public static readonly Description = AwardingCriterionResponseFieldMetaDescription
  public static readonly Quantity = AwardingCriterionResponseFieldMetaQuantity
  public static readonly Amount = AwardingCriterionResponseFieldMetaAmount
  public static readonly SubordinateAwardingCriterionResponse = AwardingCriterionResponseFieldMetaSubordinateAwardingCriterionResponse
}

export const AwardingCriterionResponseFieldMap = new Map([
  [AwardingCriterionResponseField.UBLExtensions, AwardingCriterionResponseFieldMetaUBLExtensions],
  [AwardingCriterionResponseField.ID, AwardingCriterionResponseFieldMetaID],
  [AwardingCriterionResponseField.AwardingCriterionID, AwardingCriterionResponseFieldMetaAwardingCriterionID],
  [AwardingCriterionResponseField.AwardingCriterionDescription, AwardingCriterionResponseFieldMetaAwardingCriterionDescription],
  [AwardingCriterionResponseField.Description, AwardingCriterionResponseFieldMetaDescription],
  [AwardingCriterionResponseField.Quantity, AwardingCriterionResponseFieldMetaQuantity],
  [AwardingCriterionResponseField.Amount, AwardingCriterionResponseFieldMetaAmount],
  [AwardingCriterionResponseField.SubordinateAwardingCriterionResponse, AwardingCriterionResponseFieldMetaSubordinateAwardingCriterionResponse]
])
