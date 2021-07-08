import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaID = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identification of this awarding criterion response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAwardingCriterionID = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.AwardingCriterionID,
  'AwardingCriterionID',
  'Awarding Criterion Identifier',
  IdentifierType.name,
  'An identifer of the awarding criterion being referred to.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAwardingCriterionDescription = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.AwardingCriterionDescription,
  'AwardingCriterionDescription',
  'Awarding Criterion Description',
  TextType.name,
  'Describes the awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaDescription = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Description,
  'Description',
  'Description',
  TextType.name,
  'Describes the awarding criterion response.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaQuantity = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'Specifies the quantity tendered for this awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaAmount = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'Specifies the monetary amount tendered for this awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionResponseFieldMetaSubordinateAwardingCriterionResponse = new FieldMeta<AwardingCriterionResponseField>(
  AwardingCriterionResponseField.SubordinateAwardingCriterionResponse,
  'SubordinateAwardingCriterionResponse',
  'Subordinate Awarding Criterion Response',
  AwardingCriterionResponseType.name,
  'Defines responses to any subsidiary awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const AwardingCriterionResponseType: Type<AwardingCriterionResponseField> = {
  name: 'AwardingCriterionResponse',
  label: 'Awarding Criterion Response',
  module: TypeModule.cac,
  definition: 'Defines the response for an awarding criterion from the tendering party.',
  fields: AwardingCriterionResponseFieldMap,
}
