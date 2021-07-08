import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LineReferenceField {
  UBLExtensions = 'UBLExtensions',
  LineID = 'LineID',
  UUID = 'UUID',
  LineStatusCode = 'LineStatusCode',
  DocumentReference = 'DocumentReference'
}

export const LineReferenceFieldMetaUBLExtensions = new FieldMeta<LineReferenceField>(
  LineReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LineReferenceFieldMetaLineID = new FieldMeta<LineReferenceField>(
  LineReferenceField.LineID,
  'LineID',
  'Line Identifier',
  IdentifierType.name,
  'Identifies the referenced line in the document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LineReferenceFieldMetaUUID = new FieldMeta<LineReferenceField>(
  LineReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this line reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LineReferenceFieldMetaLineStatusCode = new FieldMeta<LineReferenceField>(
  LineReferenceField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  CodeType.name,
  'A code signifying the status of the referenced line with respect to its original state.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LineReferenceFieldMetaDocumentReference = new FieldMeta<LineReferenceField>(
  LineReferenceField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to the document containing the referenced line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class LineReferenceFieldMeta {
  public static readonly UBLExtensions = LineReferenceFieldMetaUBLExtensions
  public static readonly LineID = LineReferenceFieldMetaLineID
  public static readonly UUID = LineReferenceFieldMetaUUID
  public static readonly LineStatusCode = LineReferenceFieldMetaLineStatusCode
  public static readonly DocumentReference = LineReferenceFieldMetaDocumentReference
}

export const LineReferenceFieldMap = new Map([
  [LineReferenceField.UBLExtensions, LineReferenceFieldMetaUBLExtensions],
  [LineReferenceField.LineID, LineReferenceFieldMetaLineID],
  [LineReferenceField.UUID, LineReferenceFieldMetaUUID],
  [LineReferenceField.LineStatusCode, LineReferenceFieldMetaLineStatusCode],
  [LineReferenceField.DocumentReference, LineReferenceFieldMetaDocumentReference]
])

export const LineReferenceType: Type<LineReferenceField> = {
  name: 'LineReference',
  label: 'Line Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a line in a document.',
  fields: LineReferenceFieldMap,
}
