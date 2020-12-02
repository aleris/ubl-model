import { FieldMeta } from '../FieldMeta'

export enum TransportEquipmentSealField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SealIssuerTypeCode = 'SealIssuerTypeCode',
  Condition = 'Condition',
  SealStatusCode = 'SealStatusCode',
  SealingPartyType = 'SealingPartyType'
}

export const TransportEquipmentSealFieldMetaUBLExtensions = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaID = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this transport equipment seal.',
  '1',
  'cbc',
  undefined,
  'ACS1234'
)

export const TransportEquipmentSealFieldMetaSealIssuerTypeCode = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealIssuerTypeCode,
  'SealIssuerTypeCode',
  'Seal Issuer Type Code',
  'Code',
  'A code signifying the type of party that issues and is responsible for this transport equipment seal.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaCondition = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.Condition,
  'Condition',
  'Condition',
  'Text',
  'The condition of this transport equipment seal.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaSealStatusCode = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealStatusCode,
  'SealStatusCode',
  'Seal Status Code',
  'Code',
  'A code signifying the condition of this transport equipment seal.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaSealingPartyType = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealingPartyType,
  'SealingPartyType',
  'Sealing Party Type',
  'Text',
  'The role of the sealing party.',
  '0..1',
  'cbc',
  'Sealing Party',
  undefined
)

export class TransportEquipmentSealFieldMeta {
  public static readonly UBLExtensions = TransportEquipmentSealFieldMetaUBLExtensions
  public static readonly ID = TransportEquipmentSealFieldMetaID
  public static readonly SealIssuerTypeCode = TransportEquipmentSealFieldMetaSealIssuerTypeCode
  public static readonly Condition = TransportEquipmentSealFieldMetaCondition
  public static readonly SealStatusCode = TransportEquipmentSealFieldMetaSealStatusCode
  public static readonly SealingPartyType = TransportEquipmentSealFieldMetaSealingPartyType
}

export const TransportEquipmentSealFieldMap = new Map([
  [TransportEquipmentSealField.UBLExtensions, TransportEquipmentSealFieldMetaUBLExtensions],
  [TransportEquipmentSealField.ID, TransportEquipmentSealFieldMetaID],
  [TransportEquipmentSealField.SealIssuerTypeCode, TransportEquipmentSealFieldMetaSealIssuerTypeCode],
  [TransportEquipmentSealField.Condition, TransportEquipmentSealFieldMetaCondition],
  [TransportEquipmentSealField.SealStatusCode, TransportEquipmentSealFieldMetaSealStatusCode],
  [TransportEquipmentSealField.SealingPartyType, TransportEquipmentSealFieldMetaSealingPartyType]
])
