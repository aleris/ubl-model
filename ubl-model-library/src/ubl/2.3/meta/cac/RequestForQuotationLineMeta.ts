import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LineItemType } from './LineItemMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaID = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this line in the request for quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaUUID = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this line in the request for quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaNote = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaOptionalLineItemIndicator = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.OptionalLineItemIndicator,
  'OptionalLineItemIndicator',
  'Optional Line Item Indicator',
  IndicatorType.name,
  'An indication whether this line is optional (true) or not (false) for purposes of this request for quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaPrivacyCode = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.PrivacyCode,
  'PrivacyCode',
  'Privacy Code',
  CodeType.name,
  'A code signifying the level of confidentiality of this request for quotation line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaSecurityClassificationCode = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.SecurityClassificationCode,
  'SecurityClassificationCode',
  'Security Classification Code',
  CodeType.name,
  'A code signifying the security classification of this request for quotation line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaDocumentReference = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A document associated with this request for quotation line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RequestForQuotationLineFieldMetaLineItem = new FieldMeta<RequestForQuotationLineField>(
  RequestForQuotationLineField.LineItem,
  'LineItem',
  'Line Item',
  LineItemType.name,
  'A description of the item for which a quotation is requested.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const RequestForQuotationLineType: Type<RequestForQuotationLineField> = {
  name: 'RequestForQuotationLine',
  label: 'Request For Quotation Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Request for Quotation.',
  fields: RequestForQuotationLineFieldMap,
}
