import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExchangeRateType } from '../cac/ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentType } from '../cac/PaymentMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ReminderLineType } from '../cac/ReminderLineMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ReminderField {
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
  ReminderTypeCode = 'ReminderTypeCode',
  ReminderSequenceNumeric = 'ReminderSequenceNumeric',
  Note = 'Note',
  TaxPointDate = 'TaxPointDate',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  TaxCurrencyCode = 'TaxCurrencyCode',
  PricingCurrencyCode = 'PricingCurrencyCode',
  PaymentCurrencyCode = 'PaymentCurrencyCode',
  PaymentAlternativeCurrencyCode = 'PaymentAlternativeCurrencyCode',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  LineCountNumeric = 'LineCountNumeric',
  ReminderPeriod = 'ReminderPeriod',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  PayeeParty = 'PayeeParty',
  TaxRepresentativeParty = 'TaxRepresentativeParty',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  PrepaidPayment = 'PrepaidPayment',
  AllowanceCharge = 'AllowanceCharge',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  PaymentAlternativeExchangeRate = 'PaymentAlternativeExchangeRate',
  TaxTotal = 'TaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  ReminderLine = 'ReminderLine'
}

export const ReminderFieldMetaUBLExtensions = new FieldMeta<ReminderField>(
  ReminderField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ReminderFieldMetaUBLVersionID = new FieldMeta<ReminderField>(
  ReminderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ReminderFieldMetaCustomizationID = new FieldMeta<ReminderField>(
  ReminderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ReminderFieldMetaProfileID = new FieldMeta<ReminderField>(
  ReminderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ReminderFieldMetaProfileExecutionID = new FieldMeta<ReminderField>(
  ReminderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ReminderFieldMetaID = new FieldMeta<ReminderField>(
  ReminderField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Invoice Number',
  undefined
)

export const ReminderFieldMetaCopyIndicator = new FieldMeta<ReminderField>(
  ReminderField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaUUID = new FieldMeta<ReminderField>(
  ReminderField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaIssueDate = new FieldMeta<ReminderField>(
  ReminderField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Invoice Date',
  undefined
)

export const ReminderFieldMetaIssueTime = new FieldMeta<ReminderField>(
  ReminderField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaReminderTypeCode = new FieldMeta<ReminderField>(
  ReminderField.ReminderTypeCode,
  'ReminderTypeCode',
  'Reminder Type Code',
  CodeType.name,
  'A code signifying the type of the Reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaReminderSequenceNumeric = new FieldMeta<ReminderField>(
  ReminderField.ReminderSequenceNumeric,
  'ReminderSequenceNumeric',
  'Reminder Sequence',
  NumericType.name,
  'The number of the current Reminder in the sequence of reminders relating to the specified payments; the number of reminders previously sent plus one.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaNote = new FieldMeta<ReminderField>(
  ReminderField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaTaxPointDate = new FieldMeta<ReminderField>(
  ReminderField.TaxPointDate,
  'TaxPointDate',
  'Tax Point Date',
  DateType.name,
  'The date of the Reminder, used to indicate the point at which tax becomes applicable.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaDocumentCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaTaxCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency used for tax amounts in the Reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaPricingCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for prices in the Reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PaymentCurrencyCode,
  'PaymentCurrencyCode',
  'Payment Currency Code',
  CodeType.name,
  'A code signifying the currency used for payment in the Reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentAlternativeCurrencyCode = new FieldMeta<ReminderField>(
  ReminderField.PaymentAlternativeCurrencyCode,
  'PaymentAlternativeCurrencyCode',
  'Payment Alternative Currency Code',
  CodeType.name,
  'A code signifying the alternative currency used for payment in the Reminder.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCostCode = new FieldMeta<ReminderField>(
  ReminderField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting code, applied to the Reminder as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCost = new FieldMeta<ReminderField>(
  ReminderField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting code, applied to the Reminder as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaLineCountNumeric = new FieldMeta<ReminderField>(
  ReminderField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Reminder Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReminderFieldMetaReminderPeriod = new FieldMeta<ReminderField>(
  ReminderField.ReminderPeriod,
  'ReminderPeriod',
  'Reminder Period',
  PeriodType.name,
  'The periods to which the Reminder applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaAdditionalDocumentReference = new FieldMeta<ReminderField>(
  ReminderField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaSignature = new FieldMeta<ReminderField>(
  ReminderField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingSupplierParty = new FieldMeta<ReminderField>(
  ReminderField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaAccountingCustomerParty = new FieldMeta<ReminderField>(
  ReminderField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPayeeParty = new FieldMeta<ReminderField>(
  ReminderField.PayeeParty,
  'PayeeParty',
  'Payee Party',
  PartyType.name,
  'The payee.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaTaxRepresentativeParty = new FieldMeta<ReminderField>(
  ReminderField.TaxRepresentativeParty,
  'TaxRepresentativeParty',
  'Tax Representative Party',
  PartyType.name,
  'The tax representative.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentMeans = new FieldMeta<ReminderField>(
  ReminderField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentTerms = new FieldMeta<ReminderField>(
  ReminderField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPrepaidPayment = new FieldMeta<ReminderField>(
  ReminderField.PrepaidPayment,
  'PrepaidPayment',
  'Prepaid Payment',
  PaymentType.name,
  'A prepaid payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaAllowanceCharge = new FieldMeta<ReminderField>(
  ReminderField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaTaxExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPricingExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaPaymentAlternativeExchangeRate = new FieldMeta<ReminderField>(
  ReminderField.PaymentAlternativeExchangeRate,
  'PaymentAlternativeExchangeRate',
  'Payment Alternative Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment alternative currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaTaxTotal = new FieldMeta<ReminderField>(
  ReminderField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaLegalMonetaryTotal = new FieldMeta<ReminderField>(
  ReminderField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount payable on the Invoice, including Allowances, Charges, and Taxes.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReminderFieldMetaReminderLine = new FieldMeta<ReminderField>(
  ReminderField.ReminderLine,
  'ReminderLine',
  'Reminder Line',
  ReminderLineType.name,
  'A line describing a payment past due.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ReminderFieldMeta {
  public static readonly UBLExtensions = ReminderFieldMetaUBLExtensions
  public static readonly UBLVersionID = ReminderFieldMetaUBLVersionID
  public static readonly CustomizationID = ReminderFieldMetaCustomizationID
  public static readonly ProfileID = ReminderFieldMetaProfileID
  public static readonly ProfileExecutionID = ReminderFieldMetaProfileExecutionID
  public static readonly ID = ReminderFieldMetaID
  public static readonly CopyIndicator = ReminderFieldMetaCopyIndicator
  public static readonly UUID = ReminderFieldMetaUUID
  public static readonly IssueDate = ReminderFieldMetaIssueDate
  public static readonly IssueTime = ReminderFieldMetaIssueTime
  public static readonly ReminderTypeCode = ReminderFieldMetaReminderTypeCode
  public static readonly ReminderSequenceNumeric = ReminderFieldMetaReminderSequenceNumeric
  public static readonly Note = ReminderFieldMetaNote
  public static readonly TaxPointDate = ReminderFieldMetaTaxPointDate
  public static readonly DocumentCurrencyCode = ReminderFieldMetaDocumentCurrencyCode
  public static readonly TaxCurrencyCode = ReminderFieldMetaTaxCurrencyCode
  public static readonly PricingCurrencyCode = ReminderFieldMetaPricingCurrencyCode
  public static readonly PaymentCurrencyCode = ReminderFieldMetaPaymentCurrencyCode
  public static readonly PaymentAlternativeCurrencyCode = ReminderFieldMetaPaymentAlternativeCurrencyCode
  public static readonly AccountingCostCode = ReminderFieldMetaAccountingCostCode
  public static readonly AccountingCost = ReminderFieldMetaAccountingCost
  public static readonly LineCountNumeric = ReminderFieldMetaLineCountNumeric
  public static readonly ReminderPeriod = ReminderFieldMetaReminderPeriod
  public static readonly AdditionalDocumentReference = ReminderFieldMetaAdditionalDocumentReference
  public static readonly Signature = ReminderFieldMetaSignature
  public static readonly AccountingSupplierParty = ReminderFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = ReminderFieldMetaAccountingCustomerParty
  public static readonly PayeeParty = ReminderFieldMetaPayeeParty
  public static readonly TaxRepresentativeParty = ReminderFieldMetaTaxRepresentativeParty
  public static readonly PaymentMeans = ReminderFieldMetaPaymentMeans
  public static readonly PaymentTerms = ReminderFieldMetaPaymentTerms
  public static readonly PrepaidPayment = ReminderFieldMetaPrepaidPayment
  public static readonly AllowanceCharge = ReminderFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = ReminderFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = ReminderFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = ReminderFieldMetaPaymentExchangeRate
  public static readonly PaymentAlternativeExchangeRate = ReminderFieldMetaPaymentAlternativeExchangeRate
  public static readonly TaxTotal = ReminderFieldMetaTaxTotal
  public static readonly LegalMonetaryTotal = ReminderFieldMetaLegalMonetaryTotal
  public static readonly ReminderLine = ReminderFieldMetaReminderLine
}

export const ReminderFieldMap = new Map([
  [ReminderField.UBLExtensions, ReminderFieldMetaUBLExtensions],
  [ReminderField.UBLVersionID, ReminderFieldMetaUBLVersionID],
  [ReminderField.CustomizationID, ReminderFieldMetaCustomizationID],
  [ReminderField.ProfileID, ReminderFieldMetaProfileID],
  [ReminderField.ProfileExecutionID, ReminderFieldMetaProfileExecutionID],
  [ReminderField.ID, ReminderFieldMetaID],
  [ReminderField.CopyIndicator, ReminderFieldMetaCopyIndicator],
  [ReminderField.UUID, ReminderFieldMetaUUID],
  [ReminderField.IssueDate, ReminderFieldMetaIssueDate],
  [ReminderField.IssueTime, ReminderFieldMetaIssueTime],
  [ReminderField.ReminderTypeCode, ReminderFieldMetaReminderTypeCode],
  [ReminderField.ReminderSequenceNumeric, ReminderFieldMetaReminderSequenceNumeric],
  [ReminderField.Note, ReminderFieldMetaNote],
  [ReminderField.TaxPointDate, ReminderFieldMetaTaxPointDate],
  [ReminderField.DocumentCurrencyCode, ReminderFieldMetaDocumentCurrencyCode],
  [ReminderField.TaxCurrencyCode, ReminderFieldMetaTaxCurrencyCode],
  [ReminderField.PricingCurrencyCode, ReminderFieldMetaPricingCurrencyCode],
  [ReminderField.PaymentCurrencyCode, ReminderFieldMetaPaymentCurrencyCode],
  [ReminderField.PaymentAlternativeCurrencyCode, ReminderFieldMetaPaymentAlternativeCurrencyCode],
  [ReminderField.AccountingCostCode, ReminderFieldMetaAccountingCostCode],
  [ReminderField.AccountingCost, ReminderFieldMetaAccountingCost],
  [ReminderField.LineCountNumeric, ReminderFieldMetaLineCountNumeric],
  [ReminderField.ReminderPeriod, ReminderFieldMetaReminderPeriod],
  [ReminderField.AdditionalDocumentReference, ReminderFieldMetaAdditionalDocumentReference],
  [ReminderField.Signature, ReminderFieldMetaSignature],
  [ReminderField.AccountingSupplierParty, ReminderFieldMetaAccountingSupplierParty],
  [ReminderField.AccountingCustomerParty, ReminderFieldMetaAccountingCustomerParty],
  [ReminderField.PayeeParty, ReminderFieldMetaPayeeParty],
  [ReminderField.TaxRepresentativeParty, ReminderFieldMetaTaxRepresentativeParty],
  [ReminderField.PaymentMeans, ReminderFieldMetaPaymentMeans],
  [ReminderField.PaymentTerms, ReminderFieldMetaPaymentTerms],
  [ReminderField.PrepaidPayment, ReminderFieldMetaPrepaidPayment],
  [ReminderField.AllowanceCharge, ReminderFieldMetaAllowanceCharge],
  [ReminderField.TaxExchangeRate, ReminderFieldMetaTaxExchangeRate],
  [ReminderField.PricingExchangeRate, ReminderFieldMetaPricingExchangeRate],
  [ReminderField.PaymentExchangeRate, ReminderFieldMetaPaymentExchangeRate],
  [ReminderField.PaymentAlternativeExchangeRate, ReminderFieldMetaPaymentAlternativeExchangeRate],
  [ReminderField.TaxTotal, ReminderFieldMetaTaxTotal],
  [ReminderField.LegalMonetaryTotal, ReminderFieldMetaLegalMonetaryTotal],
  [ReminderField.ReminderLine, ReminderFieldMetaReminderLine]
])

export const ReminderType: Type<ReminderField> = {
  name: 'Reminder',
  label: 'Reminder',
  module: TypeModule.doc,
  definition: 'A document used to remind a customer of payments past due.',
  fields: ReminderFieldMap,
}
