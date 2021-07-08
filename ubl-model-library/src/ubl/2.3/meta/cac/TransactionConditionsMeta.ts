import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransactionConditionsField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ActionCode = 'ActionCode',
  Description = 'Description',
  DocumentReference = 'DocumentReference'
}

export const TransactionConditionsFieldMetaUBLExtensions = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaID = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for conditions of the transaction, typically purchase/sales conditions.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaActionCode = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.ActionCode,
  'ActionCode',
  'Action Code',
  CodeType.name,
  'A code signifying a type of action relating to sales or payment conditions.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaDescription = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the transaction conditions.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaDocumentReference = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A document associated with these transaction conditions.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransactionConditionsFieldMeta {
  public static readonly UBLExtensions = TransactionConditionsFieldMetaUBLExtensions
  public static readonly ID = TransactionConditionsFieldMetaID
  public static readonly ActionCode = TransactionConditionsFieldMetaActionCode
  public static readonly Description = TransactionConditionsFieldMetaDescription
  public static readonly DocumentReference = TransactionConditionsFieldMetaDocumentReference
}

export const TransactionConditionsFieldMap = new Map([
  [TransactionConditionsField.UBLExtensions, TransactionConditionsFieldMetaUBLExtensions],
  [TransactionConditionsField.ID, TransactionConditionsFieldMetaID],
  [TransactionConditionsField.ActionCode, TransactionConditionsFieldMetaActionCode],
  [TransactionConditionsField.Description, TransactionConditionsFieldMetaDescription],
  [TransactionConditionsField.DocumentReference, TransactionConditionsFieldMetaDocumentReference]
])

export const TransactionConditionsType: Type<TransactionConditionsField> = {
  name: 'TransactionConditions',
  label: 'Transaction Conditions',
  module: TypeModule.cac,
  definition: 'A class to describe purchasing, sales, or payment conditions.',
  fields: TransactionConditionsFieldMap,
}
