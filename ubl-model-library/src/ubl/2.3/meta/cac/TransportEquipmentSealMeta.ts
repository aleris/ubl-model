import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaID = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this transport equipment seal.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'ACS1234'
)

export const TransportEquipmentSealFieldMetaSealIssuerTypeCode = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealIssuerTypeCode,
  'SealIssuerTypeCode',
  'Seal Issuer Type Code',
  CodeType.name,
  'A code signifying the type of party that issues and is responsible for this transport equipment seal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaCondition = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.Condition,
  'Condition',
  'Condition',
  TextType.name,
  'The condition of this transport equipment seal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaSealStatusCode = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealStatusCode,
  'SealStatusCode',
  'Seal Status Code',
  CodeType.name,
  'A code signifying the condition of this transport equipment seal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentSealFieldMetaSealingPartyType = new FieldMeta<TransportEquipmentSealField>(
  TransportEquipmentSealField.SealingPartyType,
  'SealingPartyType',
  'Sealing Party Type',
  TextType.name,
  'The role of the sealing party.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const TransportEquipmentSealType: Type<TransportEquipmentSealField> = {
  name: 'TransportEquipmentSeal',
  label: 'Transport Equipment Seal',
  module: TypeModule.cac,
  definition: 'A class to describe a device (a transport equipment seal) for securing the doors of a shipping container.',
  fields: TransportEquipmentSealFieldMap,
}
