import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { BillingReferenceType } from '../cac/BillingReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { RemittanceAdviceLineType } from '../cac/RemittanceAdviceLineMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RemittanceAdviceField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  TotalDebitAmount = 'TotalDebitAmount',
  TotalCreditAmount = 'TotalCreditAmount',
  TotalPaymentAmount = 'TotalPaymentAmount',
  PaymentOrderReference = 'PaymentOrderReference',
  PayerReference = 'PayerReference',
  InvoicingPartyReference = 'InvoicingPartyReference',
  LineCountNumeric = 'LineCountNumeric',
  InvoicePeriod = 'InvoicePeriod',
  BillingReference = 'BillingReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  PayeeParty = 'PayeeParty',
  PaymentMeans = 'PaymentMeans',
  TaxTotal = 'TaxTotal',
  RemittanceAdviceLine = 'RemittanceAdviceLine'
}

export const RemittanceAdviceFieldMetaUBLExtensions = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaUBLVersionID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const RemittanceAdviceFieldMetaCustomizationID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const RemittanceAdviceFieldMetaProfileID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const RemittanceAdviceFieldMetaProfileExecutionID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const RemittanceAdviceFieldMetaID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaCopyIndicator = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaUUID = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaIssueDate = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaIssueTime = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaNote = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaDocumentCurrencyCode = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalDebitAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalDebitAmount,
  'TotalDebitAmount',
  'Total Debit Amount',
  AmountType.name,
  'The totals of all debit amounts for the Remittance Advice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalCreditAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalCreditAmount,
  'TotalCreditAmount',
  'Total Credit Amount',
  AmountType.name,
  'The totals of all credit amounts for the Remittance Advice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTotalPaymentAmount = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TotalPaymentAmount,
  'TotalPaymentAmount',
  'Total Payment Amount',
  AmountType.name,
  'The total payable amount for the Remittance Advice (must be positive).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPaymentOrderReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PaymentOrderReference,
  'PaymentOrderReference',
  'Payment Order Reference',
  TextType.name,
  'An internal reference to the order for payment from the payer to the payer\'s bank.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPayerReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PayerReference,
  'PayerReference',
  'Payer Reference',
  TextType.name,
  'An internal reference to the payer\'s order for payment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaInvoicingPartyReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.InvoicingPartyReference,
  'InvoicingPartyReference',
  'Invoicing Party Reference',
  TextType.name,
  'An internal reference to the order for payment by the invoicing party. This may have been requested of the payer by the payee to accompany the payer\'s remittance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaLineCountNumeric = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Remittance Advice Lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaInvoicePeriod = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.InvoicePeriod,
  'InvoicePeriod',
  'Invoice Period',
  PeriodType.name,
  'A period (rather than a specific invoice) associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaBillingReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.BillingReference,
  'BillingReference',
  'Billing Reference',
  BillingReferenceType.name,
  'A reference to a billing document associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaSignature = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAccountingCustomerParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaAccountingSupplierParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPayeeParty = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaPaymentMeans = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaTaxTotal = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const RemittanceAdviceFieldMetaRemittanceAdviceLine = new FieldMeta<RemittanceAdviceField>(
  RemittanceAdviceField.RemittanceAdviceLine,
  'RemittanceAdviceLine',
  'Remittance Advice Line',
  RemittanceAdviceLineType.name,
  'A line specifying a balance.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class RemittanceAdviceFieldMeta {
  public static readonly UBLExtensions = RemittanceAdviceFieldMetaUBLExtensions
  public static readonly UBLVersionID = RemittanceAdviceFieldMetaUBLVersionID
  public static readonly CustomizationID = RemittanceAdviceFieldMetaCustomizationID
  public static readonly ProfileID = RemittanceAdviceFieldMetaProfileID
  public static readonly ProfileExecutionID = RemittanceAdviceFieldMetaProfileExecutionID
  public static readonly ID = RemittanceAdviceFieldMetaID
  public static readonly CopyIndicator = RemittanceAdviceFieldMetaCopyIndicator
  public static readonly UUID = RemittanceAdviceFieldMetaUUID
  public static readonly IssueDate = RemittanceAdviceFieldMetaIssueDate
  public static readonly IssueTime = RemittanceAdviceFieldMetaIssueTime
  public static readonly Note = RemittanceAdviceFieldMetaNote
  public static readonly DocumentCurrencyCode = RemittanceAdviceFieldMetaDocumentCurrencyCode
  public static readonly TotalDebitAmount = RemittanceAdviceFieldMetaTotalDebitAmount
  public static readonly TotalCreditAmount = RemittanceAdviceFieldMetaTotalCreditAmount
  public static readonly TotalPaymentAmount = RemittanceAdviceFieldMetaTotalPaymentAmount
  public static readonly PaymentOrderReference = RemittanceAdviceFieldMetaPaymentOrderReference
  public static readonly PayerReference = RemittanceAdviceFieldMetaPayerReference
  public static readonly InvoicingPartyReference = RemittanceAdviceFieldMetaInvoicingPartyReference
  public static readonly LineCountNumeric = RemittanceAdviceFieldMetaLineCountNumeric
  public static readonly InvoicePeriod = RemittanceAdviceFieldMetaInvoicePeriod
  public static readonly BillingReference = RemittanceAdviceFieldMetaBillingReference
  public static readonly AdditionalDocumentReference = RemittanceAdviceFieldMetaAdditionalDocumentReference
  public static readonly Signature = RemittanceAdviceFieldMetaSignature
  public static readonly AccountingCustomerParty = RemittanceAdviceFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = RemittanceAdviceFieldMetaAccountingSupplierParty
  public static readonly PayeeParty = RemittanceAdviceFieldMetaPayeeParty
  public static readonly PaymentMeans = RemittanceAdviceFieldMetaPaymentMeans
  public static readonly TaxTotal = RemittanceAdviceFieldMetaTaxTotal
  public static readonly RemittanceAdviceLine = RemittanceAdviceFieldMetaRemittanceAdviceLine
}

export const RemittanceAdviceFieldMap = new Map([
  [RemittanceAdviceField.UBLExtensions, RemittanceAdviceFieldMetaUBLExtensions],
  [RemittanceAdviceField.UBLVersionID, RemittanceAdviceFieldMetaUBLVersionID],
  [RemittanceAdviceField.CustomizationID, RemittanceAdviceFieldMetaCustomizationID],
  [RemittanceAdviceField.ProfileID, RemittanceAdviceFieldMetaProfileID],
  [RemittanceAdviceField.ProfileExecutionID, RemittanceAdviceFieldMetaProfileExecutionID],
  [RemittanceAdviceField.ID, RemittanceAdviceFieldMetaID],
  [RemittanceAdviceField.CopyIndicator, RemittanceAdviceFieldMetaCopyIndicator],
  [RemittanceAdviceField.UUID, RemittanceAdviceFieldMetaUUID],
  [RemittanceAdviceField.IssueDate, RemittanceAdviceFieldMetaIssueDate],
  [RemittanceAdviceField.IssueTime, RemittanceAdviceFieldMetaIssueTime],
  [RemittanceAdviceField.Note, RemittanceAdviceFieldMetaNote],
  [RemittanceAdviceField.DocumentCurrencyCode, RemittanceAdviceFieldMetaDocumentCurrencyCode],
  [RemittanceAdviceField.TotalDebitAmount, RemittanceAdviceFieldMetaTotalDebitAmount],
  [RemittanceAdviceField.TotalCreditAmount, RemittanceAdviceFieldMetaTotalCreditAmount],
  [RemittanceAdviceField.TotalPaymentAmount, RemittanceAdviceFieldMetaTotalPaymentAmount],
  [RemittanceAdviceField.PaymentOrderReference, RemittanceAdviceFieldMetaPaymentOrderReference],
  [RemittanceAdviceField.PayerReference, RemittanceAdviceFieldMetaPayerReference],
  [RemittanceAdviceField.InvoicingPartyReference, RemittanceAdviceFieldMetaInvoicingPartyReference],
  [RemittanceAdviceField.LineCountNumeric, RemittanceAdviceFieldMetaLineCountNumeric],
  [RemittanceAdviceField.InvoicePeriod, RemittanceAdviceFieldMetaInvoicePeriod],
  [RemittanceAdviceField.BillingReference, RemittanceAdviceFieldMetaBillingReference],
  [RemittanceAdviceField.AdditionalDocumentReference, RemittanceAdviceFieldMetaAdditionalDocumentReference],
  [RemittanceAdviceField.Signature, RemittanceAdviceFieldMetaSignature],
  [RemittanceAdviceField.AccountingCustomerParty, RemittanceAdviceFieldMetaAccountingCustomerParty],
  [RemittanceAdviceField.AccountingSupplierParty, RemittanceAdviceFieldMetaAccountingSupplierParty],
  [RemittanceAdviceField.PayeeParty, RemittanceAdviceFieldMetaPayeeParty],
  [RemittanceAdviceField.PaymentMeans, RemittanceAdviceFieldMetaPaymentMeans],
  [RemittanceAdviceField.TaxTotal, RemittanceAdviceFieldMetaTaxTotal],
  [RemittanceAdviceField.RemittanceAdviceLine, RemittanceAdviceFieldMetaRemittanceAdviceLine]
])

export const RemittanceAdviceType: Type<RemittanceAdviceField> = {
  name: 'RemittanceAdvice',
  label: 'Remittance Advice',
  module: TypeModule.doc,
  definition: 'A document that specifies details of an actual payment.',
  fields: RemittanceAdviceFieldMap,
}
