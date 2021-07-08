import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { StatementLineType } from '../cac/StatementLineMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum StatementField {
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
  TotalBalanceAmount = 'TotalBalanceAmount',
  LineCountNumeric = 'LineCountNumeric',
  StatementTypeCode = 'StatementTypeCode',
  StatementPeriod = 'StatementPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  PayeeParty = 'PayeeParty',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  StatementLine = 'StatementLine'
}

export const StatementFieldMetaUBLExtensions = new FieldMeta<StatementField>(
  StatementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StatementFieldMetaUBLVersionID = new FieldMeta<StatementField>(
  StatementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const StatementFieldMetaCustomizationID = new FieldMeta<StatementField>(
  StatementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const StatementFieldMetaProfileID = new FieldMeta<StatementField>(
  StatementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const StatementFieldMetaProfileExecutionID = new FieldMeta<StatementField>(
  StatementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const StatementFieldMetaID = new FieldMeta<StatementField>(
  StatementField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaCopyIndicator = new FieldMeta<StatementField>(
  StatementField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaUUID = new FieldMeta<StatementField>(
  StatementField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaIssueDate = new FieldMeta<StatementField>(
  StatementField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaIssueTime = new FieldMeta<StatementField>(
  StatementField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaNote = new FieldMeta<StatementField>(
  StatementField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaDocumentCurrencyCode = new FieldMeta<StatementField>(
  StatementField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'The default currency for the Statement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaTotalDebitAmount = new FieldMeta<StatementField>(
  StatementField.TotalDebitAmount,
  'TotalDebitAmount',
  'Total Debit Amount',
  AmountType.name,
  'The total of all debit amounts for the Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaTotalCreditAmount = new FieldMeta<StatementField>(
  StatementField.TotalCreditAmount,
  'TotalCreditAmount',
  'Total Credit Amount',
  AmountType.name,
  'The total of all credit amounts for the Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaTotalBalanceAmount = new FieldMeta<StatementField>(
  StatementField.TotalBalanceAmount,
  'TotalBalanceAmount',
  'Total Balance Amount',
  AmountType.name,
  'The total amount for the Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaLineCountNumeric = new FieldMeta<StatementField>(
  StatementField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Statement Lines in the Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaStatementTypeCode = new FieldMeta<StatementField>(
  StatementField.StatementTypeCode,
  'StatementTypeCode',
  'Statement Type Code',
  CodeType.name,
  'A code signifying the type of the Statement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const StatementFieldMetaStatementPeriod = new FieldMeta<StatementField>(
  StatementField.StatementPeriod,
  'StatementPeriod',
  'Statement Period',
  PeriodType.name,
  'A period to which the Statement applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaAdditionalDocumentReference = new FieldMeta<StatementField>(
  StatementField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaSignature = new FieldMeta<StatementField>(
  StatementField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaAccountingSupplierParty = new FieldMeta<StatementField>(
  StatementField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaAccountingCustomerParty = new FieldMeta<StatementField>(
  StatementField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaBuyerCustomerParty = new FieldMeta<StatementField>(
  StatementField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaSellerSupplierParty = new FieldMeta<StatementField>(
  StatementField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaOriginatorCustomerParty = new FieldMeta<StatementField>(
  StatementField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaPayeeParty = new FieldMeta<StatementField>(
  StatementField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaPaymentMeans = new FieldMeta<StatementField>(
  StatementField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaPaymentTerms = new FieldMeta<StatementField>(
  StatementField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaAllowanceCharge = new FieldMeta<StatementField>(
  StatementField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaTaxTotal = new FieldMeta<StatementField>(
  StatementField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const StatementFieldMetaStatementLine = new FieldMeta<StatementField>(
  StatementField.StatementLine,
  'StatementLine',
  'Statement Line',
  StatementLineType.name,
  'A Statement Line.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class StatementFieldMeta {
  public static readonly UBLExtensions = StatementFieldMetaUBLExtensions
  public static readonly UBLVersionID = StatementFieldMetaUBLVersionID
  public static readonly CustomizationID = StatementFieldMetaCustomizationID
  public static readonly ProfileID = StatementFieldMetaProfileID
  public static readonly ProfileExecutionID = StatementFieldMetaProfileExecutionID
  public static readonly ID = StatementFieldMetaID
  public static readonly CopyIndicator = StatementFieldMetaCopyIndicator
  public static readonly UUID = StatementFieldMetaUUID
  public static readonly IssueDate = StatementFieldMetaIssueDate
  public static readonly IssueTime = StatementFieldMetaIssueTime
  public static readonly Note = StatementFieldMetaNote
  public static readonly DocumentCurrencyCode = StatementFieldMetaDocumentCurrencyCode
  public static readonly TotalDebitAmount = StatementFieldMetaTotalDebitAmount
  public static readonly TotalCreditAmount = StatementFieldMetaTotalCreditAmount
  public static readonly TotalBalanceAmount = StatementFieldMetaTotalBalanceAmount
  public static readonly LineCountNumeric = StatementFieldMetaLineCountNumeric
  public static readonly StatementTypeCode = StatementFieldMetaStatementTypeCode
  public static readonly StatementPeriod = StatementFieldMetaStatementPeriod
  public static readonly AdditionalDocumentReference = StatementFieldMetaAdditionalDocumentReference
  public static readonly Signature = StatementFieldMetaSignature
  public static readonly AccountingSupplierParty = StatementFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = StatementFieldMetaAccountingCustomerParty
  public static readonly BuyerCustomerParty = StatementFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = StatementFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = StatementFieldMetaOriginatorCustomerParty
  public static readonly PayeeParty = StatementFieldMetaPayeeParty
  public static readonly PaymentMeans = StatementFieldMetaPaymentMeans
  public static readonly PaymentTerms = StatementFieldMetaPaymentTerms
  public static readonly AllowanceCharge = StatementFieldMetaAllowanceCharge
  public static readonly TaxTotal = StatementFieldMetaTaxTotal
  public static readonly StatementLine = StatementFieldMetaStatementLine
}

export const StatementFieldMap = new Map([
  [StatementField.UBLExtensions, StatementFieldMetaUBLExtensions],
  [StatementField.UBLVersionID, StatementFieldMetaUBLVersionID],
  [StatementField.CustomizationID, StatementFieldMetaCustomizationID],
  [StatementField.ProfileID, StatementFieldMetaProfileID],
  [StatementField.ProfileExecutionID, StatementFieldMetaProfileExecutionID],
  [StatementField.ID, StatementFieldMetaID],
  [StatementField.CopyIndicator, StatementFieldMetaCopyIndicator],
  [StatementField.UUID, StatementFieldMetaUUID],
  [StatementField.IssueDate, StatementFieldMetaIssueDate],
  [StatementField.IssueTime, StatementFieldMetaIssueTime],
  [StatementField.Note, StatementFieldMetaNote],
  [StatementField.DocumentCurrencyCode, StatementFieldMetaDocumentCurrencyCode],
  [StatementField.TotalDebitAmount, StatementFieldMetaTotalDebitAmount],
  [StatementField.TotalCreditAmount, StatementFieldMetaTotalCreditAmount],
  [StatementField.TotalBalanceAmount, StatementFieldMetaTotalBalanceAmount],
  [StatementField.LineCountNumeric, StatementFieldMetaLineCountNumeric],
  [StatementField.StatementTypeCode, StatementFieldMetaStatementTypeCode],
  [StatementField.StatementPeriod, StatementFieldMetaStatementPeriod],
  [StatementField.AdditionalDocumentReference, StatementFieldMetaAdditionalDocumentReference],
  [StatementField.Signature, StatementFieldMetaSignature],
  [StatementField.AccountingSupplierParty, StatementFieldMetaAccountingSupplierParty],
  [StatementField.AccountingCustomerParty, StatementFieldMetaAccountingCustomerParty],
  [StatementField.BuyerCustomerParty, StatementFieldMetaBuyerCustomerParty],
  [StatementField.SellerSupplierParty, StatementFieldMetaSellerSupplierParty],
  [StatementField.OriginatorCustomerParty, StatementFieldMetaOriginatorCustomerParty],
  [StatementField.PayeeParty, StatementFieldMetaPayeeParty],
  [StatementField.PaymentMeans, StatementFieldMetaPaymentMeans],
  [StatementField.PaymentTerms, StatementFieldMetaPaymentTerms],
  [StatementField.AllowanceCharge, StatementFieldMetaAllowanceCharge],
  [StatementField.TaxTotal, StatementFieldMetaTaxTotal],
  [StatementField.StatementLine, StatementFieldMetaStatementLine]
])

export const StatementType: Type<StatementField> = {
  name: 'Statement',
  label: 'Statement',
  module: TypeModule.doc,
  definition: 'A document used to report the status of orders, billing, and payment. This document is a statement of account, not a summary invoice.',
  fields: StatementFieldMap,
}
