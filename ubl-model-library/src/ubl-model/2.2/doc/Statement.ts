import { AllowanceCharge } from '../cac/AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Party } from '../cac/Party'
import { PaymentMeans } from '../cac/PaymentMeans'
import { PaymentTerms } from '../cac/PaymentTerms'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { StatementLine } from '../cac/StatementLine'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to report the status of orders, billing, and payment. This document is a statement of account, not a
 * summary invoice.
 */
export interface Statement {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The default currency for the Statement.
   * Code
   * Cardinality: 1
   */
  DocumentCurrencyCode: [Code]

  /**
   * The total of all debit amounts for the Statement.
   * Amount
   * Cardinality: 0..1
   */
  TotalDebitAmount: [Amount] | undefined

  /**
   * The total of all credit amounts for the Statement.
   * Amount
   * Cardinality: 0..1
   */
  TotalCreditAmount: [Amount] | undefined

  /**
   * The total amount for the Statement.
   * Amount
   * Cardinality: 0..1
   */
  TotalBalanceAmount: [Amount] | undefined

  /**
   * The number of Statement Lines in the Statement.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * A code signifying the type of the Statement.
   * Code
   * Cardinality: 0..1
   */
  StatementTypeCode: [Code] | undefined

  /**
   * A period to which the Statement applies.
   * Period
   * Cardinality: 0..1
   */
  StatementPeriod: [Period] | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 1
   */
  AccountingSupplierParty: [SupplierParty]

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 1
   */
  AccountingCustomerParty: [CustomerParty]

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty: [CustomerParty] | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty: [SupplierParty] | undefined

  /**
   * The originator.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty: [CustomerParty] | undefined

  /**
   * The payee.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty: [Party] | undefined

  /**
   * Expected means of payment.
   * Payment Means
   * Cardinality: 0..n
   */
  PaymentMeans: Array<PaymentMeans> | undefined

  /**
   * A set of payment terms associated with this document.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms: Array<PaymentTerms> | undefined

  /**
   * A discount or charge that applies to a price component.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge: Array<AllowanceCharge> | undefined

  /**
   * The total amount of a specific type of tax.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal: Array<TaxTotal> | undefined

  /**
   * A Statement Line.
   * Statement Line
   * Cardinality: 1..n
   */
  StatementLine: Array<StatementLine>
}
