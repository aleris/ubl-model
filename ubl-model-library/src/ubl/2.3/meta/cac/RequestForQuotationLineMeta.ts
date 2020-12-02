import { FieldMeta } from '../FieldMeta'

export enum RequestForQuotationLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  UUID = 'UUID',
  Note = 'Note',
  OptionalLineItemIndicator = 'OptionalLineItemIndicator',
  PrivacyCode = 'PrivacyCode',
  SecurityClassificationCode = 'SecurityClassificationCode',
  DocumentReference = 'DocumentReference',
  LineItem = 'LineItem'
}

export const RequestForQuotationLineFieldMetaUBLExtensions = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaID = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this line in the request for quotation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaUUID = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this line in the request for quotation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaNote = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaOptionalLineItemIndicator = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.OptionalLineItemIndicator,
  'OptionalLineItemIndicator',
  'Optional Line Item Indicator',
  'Indicator',
  'An indication whether this line is optional (true) or not (false) for purposes of this request for quotation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaPrivacyCode = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.PrivacyCode,
  'PrivacyCode',
  'Privacy Code',
  'Code',
  'A code signifying the level of confidentiality of this request for quotation line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaSecurityClassificationCode = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.SecurityClassificationCode,
  'SecurityClassificationCode',
  'Security Classification Code',
  'Code',
  'A code signifying the security classification of this request for quotation line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaDocumentReference = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A document associated with this request for quotation line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaLineItem = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.LineItem,
  'LineItem',
  'Line Item',
  'LineItem',
  'A description of the item for which a quotation is requested.',
  '1',
  'cac',
  undefined,
  undefined
)

export class RequestForQuotationLineFieldMeta {
  public static readonly UBLExtensions = RequestForQuotationLineFieldMetaUBLExtensions
  public static readonly ID = RequestForQuotationLineFieldMetaID
  public static readonly UUID = RequestForQuotationLineFieldMetaUUID
  public static readonly Note = RequestForQuotationLineFieldMetaNote
  public static readonly OptionalLineItemIndicator = RequestForQuotationLineFieldMetaOptionalLineItemIndicator
  public static readonly PrivacyCode = RequestForQuotationLineFieldMetaPrivacyCode
  public static readonly SecurityClassificationCode = RequestForQuotationLineFieldMetaSecurityClassificationCode
  public static readonly DocumentReference = RequestForQuotationLineFieldMetaDocumentReference
  public static readonly LineItem = RequestForQuotationLineFieldMetaLineItem
}

export const RequestForQuotationLineFieldMap = new Map([
  [RequestForQuotationLineField.UBLExtensions, RequestForQuotationLineFieldMetaUBLExtensions],
  [RequestForQuotationLineField.ID, RequestForQuotationLineFieldMetaID],
  [RequestForQuotationLineField.UUID, RequestForQuotationLineFieldMetaUUID],
  [RequestForQuotationLineField.Note, RequestForQuotationLineFieldMetaNote],
  [RequestForQuotationLineField.OptionalLineItemIndicator, RequestForQuotationLineFieldMetaOptionalLineItemIndicator],
  [RequestForQuotationLineField.PrivacyCode, RequestForQuotationLineFieldMetaPrivacyCode],
  [RequestForQuotationLineField.SecurityClassificationCode, RequestForQuotationLineFieldMetaSecurityClassificationCode],
  [RequestForQuotationLineField.DocumentReference, RequestForQuotationLineFieldMetaDocumentReference],
  [RequestForQuotationLineField.LineItem, RequestForQuotationLineFieldMetaLineItem]
])
