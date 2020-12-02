import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaID = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for conditions of the transaction, typically purchase/sales conditions.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaActionCode = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.ActionCode,
  'ActionCode',
  'Action Code',
  'Code',
  'A code signifying a type of action relating to sales or payment conditions.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaDescription = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the transaction conditions.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TransactionConditionsFieldMetaDocumentReference = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A document associated with these transaction conditions.',
  '0..n',
  'cac',
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
