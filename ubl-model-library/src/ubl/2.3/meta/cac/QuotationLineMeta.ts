import { FieldMeta } from '../FieldMeta'

export enum QuotationLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  TotalTaxAmount = 'TotalTaxAmount',
  RequestForQuotationLineID = 'RequestForQuotationLineID',
  DocumentReference = 'DocumentReference',
  LineItem = 'LineItem',
  SellerProposedSubstituteLineItem = 'SellerProposedSubstituteLineItem',
  AlternativeLineItem = 'AlternativeLineItem',
  RequestLineReference = 'RequestLineReference'
}

export const QuotationLineFieldMetaUBLExtensions = new FieldMeta<QuotationLineField>(
  QuotationLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const QuotationLineFieldMetaID = new FieldMeta<QuotationLineField>(
  QuotationLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this quotation line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaNote = new FieldMeta<QuotationLineField>(
  QuotationLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaQuantity = new FieldMeta<QuotationLineField>(
  QuotationLineField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of the item quoted.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaLineExtensionAmount = new FieldMeta<QuotationLineField>(
  QuotationLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this quotation line, including allowance charges but net of taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<QuotationLineField>(
  QuotationLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  'Amount',
  'The total amount for this quotation line, including all allowances, charges and taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaTotalTaxAmount = new FieldMeta<QuotationLineField>(
  QuotationLineField.TotalTaxAmount,
  'TotalTaxAmount',
  'Total Tax Amount',
  'Amount',
  'The total tax amount for this quotation line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaRequestForQuotationLineID = new FieldMeta<QuotationLineField>(
  QuotationLineField.RequestForQuotationLineID,
  'RequestForQuotationLineID',
  'Request For Quotation Line Identifier',
  'Identifier',
  'An identifier for the line in the Request for Quotation to which this line is a response.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const QuotationLineFieldMetaDocumentReference = new FieldMeta<QuotationLineField>(
  QuotationLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this quotation line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QuotationLineFieldMetaLineItem = new FieldMeta<QuotationLineField>(
  QuotationLineField.LineItem,
  'LineItem',
  'Line Item',
  'LineItem',
  'The item that is the subject of this quotation line.',
  '1',
  'cac',
  undefined,
  undefined
)

export const QuotationLineFieldMetaSellerProposedSubstituteLineItem = new FieldMeta<QuotationLineField>(
  QuotationLineField.SellerProposedSubstituteLineItem,
  'SellerProposedSubstituteLineItem',
  'Seller Proposed Substitute Line Item',
  'LineItem',
  'An item proposed by the seller as a substitute for the item that is the subject of this quotation line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QuotationLineFieldMetaAlternativeLineItem = new FieldMeta<QuotationLineField>(
  QuotationLineField.AlternativeLineItem,
  'AlternativeLineItem',
  'Alternative Line Item',
  'LineItem',
  'An item proposed by the seller as an alternative to the item that is the subject of this quotation line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const QuotationLineFieldMetaRequestLineReference = new FieldMeta<QuotationLineField>(
  QuotationLineField.RequestLineReference,
  'RequestLineReference',
  'Request Line Reference',
  'LineReference',
  'A reference to the line in the Request for Quotation to which this line is a response.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class QuotationLineFieldMeta {
  public static readonly UBLExtensions = QuotationLineFieldMetaUBLExtensions
  public static readonly ID = QuotationLineFieldMetaID
  public static readonly Note = QuotationLineFieldMetaNote
  public static readonly Quantity = QuotationLineFieldMetaQuantity
  public static readonly LineExtensionAmount = QuotationLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = QuotationLineFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly TotalTaxAmount = QuotationLineFieldMetaTotalTaxAmount
  public static readonly RequestForQuotationLineID = QuotationLineFieldMetaRequestForQuotationLineID
  public static readonly DocumentReference = QuotationLineFieldMetaDocumentReference
  public static readonly LineItem = QuotationLineFieldMetaLineItem
  public static readonly SellerProposedSubstituteLineItem = QuotationLineFieldMetaSellerProposedSubstituteLineItem
  public static readonly AlternativeLineItem = QuotationLineFieldMetaAlternativeLineItem
  public static readonly RequestLineReference = QuotationLineFieldMetaRequestLineReference
}

export const QuotationLineFieldMap = new Map([
  [QuotationLineField.UBLExtensions, QuotationLineFieldMetaUBLExtensions],
  [QuotationLineField.ID, QuotationLineFieldMetaID],
  [QuotationLineField.Note, QuotationLineFieldMetaNote],
  [QuotationLineField.Quantity, QuotationLineFieldMetaQuantity],
  [QuotationLineField.LineExtensionAmount, QuotationLineFieldMetaLineExtensionAmount],
  [QuotationLineField.TaxInclusiveLineExtensionAmount, QuotationLineFieldMetaTaxInclusiveLineExtensionAmount],
  [QuotationLineField.TotalTaxAmount, QuotationLineFieldMetaTotalTaxAmount],
  [QuotationLineField.RequestForQuotationLineID, QuotationLineFieldMetaRequestForQuotationLineID],
  [QuotationLineField.DocumentReference, QuotationLineFieldMetaDocumentReference],
  [QuotationLineField.LineItem, QuotationLineFieldMetaLineItem],
  [QuotationLineField.SellerProposedSubstituteLineItem, QuotationLineFieldMetaSellerProposedSubstituteLineItem],
  [QuotationLineField.AlternativeLineItem, QuotationLineFieldMetaAlternativeLineItem],
  [QuotationLineField.RequestLineReference, QuotationLineFieldMetaRequestLineReference]
])
