import { FieldMeta } from '../../FieldMeta'

export enum TransactionConditionsField {
  ID = 'ID',
  ActionCode = 'ActionCode',
  Description = 'Description',
  DocumentReference = 'DocumentReference'
}

export const TransactionConditionsFieldMetaID = new FieldMeta<TransactionConditionsField>(
  TransactionConditionsField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for conditions of the transaction, typically purchase/sales conditions.',
  '0..1',
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
  undefined,
  undefined
)

export class TransactionConditionsFieldMeta {
  public static readonly ID = TransactionConditionsFieldMetaID
  public static readonly ActionCode = TransactionConditionsFieldMetaActionCode
  public static readonly Description = TransactionConditionsFieldMetaDescription
  public static readonly DocumentReference = TransactionConditionsFieldMetaDocumentReference
}

export const TransactionConditionsFieldMap = new Map([
  [TransactionConditionsField.ID, TransactionConditionsFieldMetaID],
  [TransactionConditionsField.ActionCode, TransactionConditionsFieldMetaActionCode],
  [TransactionConditionsField.Description, TransactionConditionsFieldMetaDescription],
  [TransactionConditionsField.DocumentReference, TransactionConditionsFieldMetaDocumentReference]
])
