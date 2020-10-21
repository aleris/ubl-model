import { FieldMeta } from '../../FieldMeta'

export enum LineReferenceField {
  LineID = 'LineID',
  UUID = 'UUID',
  LineStatusCode = 'LineStatusCode',
  DocumentReference = 'DocumentReference'
}

export const LineReferenceFieldMetaLineID = new FieldMeta<LineReferenceField>(
  LineReferenceField.LineID,
  'LineID',
  'Line Identifier',
  'Identifier',
  'Identifies the referenced line in the document.',
  '1',
  undefined,
  undefined
)

export const LineReferenceFieldMetaUUID = new FieldMeta<LineReferenceField>(
  LineReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this line reference.',
  '0..1',
  undefined,
  undefined
)

export const LineReferenceFieldMetaLineStatusCode = new FieldMeta<LineReferenceField>(
  LineReferenceField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  'Code',
  'A code signifying the status of the referenced line with respect to its original state.',
  '0..1',
  undefined,
  undefined
)

export const LineReferenceFieldMetaDocumentReference = new FieldMeta<LineReferenceField>(
  LineReferenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the document containing the referenced line.',
  '0..1',
  undefined,
  undefined
)

export class LineReferenceFieldMeta {
  public static readonly LineID = LineReferenceFieldMetaLineID
  public static readonly UUID = LineReferenceFieldMetaUUID
  public static readonly LineStatusCode = LineReferenceFieldMetaLineStatusCode
  public static readonly DocumentReference = LineReferenceFieldMetaDocumentReference
}

export const LineReferenceFieldMap = new Map([
  [LineReferenceField.LineID, LineReferenceFieldMetaLineID],
  [LineReferenceField.UUID, LineReferenceFieldMetaUUID],
  [LineReferenceField.LineStatusCode, LineReferenceFieldMetaLineStatusCode],
  [LineReferenceField.DocumentReference, LineReferenceFieldMetaDocumentReference]
])
