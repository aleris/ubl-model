import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { OnAccountPayment } from '../cac/OnAccountPayment'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { SubscriberConsumption } from '../cac/SubscriberConsumption'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A supplement to an Invoice or Credit Note, containing information on the consumption of services provided by utility
 * suppliers to private and public customers, including electricity, gas, water, and telephone services.
 */
export interface UtilityStatement {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: OIOUBL-2.02
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: Reference-Utility-1.0
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Examples: 61014906x-1
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   * Examples: 9756b4d0-8815-1029-857a-e388fe63f499
   */
  UUID?: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   * Examples: 2007-12-12
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   * Examples: 12:32:56
   */
  IssueTime?: [Time] | undefined

  /**
   * A code signifying the type of Utility Statement.
   * Code
   * Cardinality: 1
   * Examples: Electricity
   */
  UtilityStatementTypeCode: [Code]

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   * Examples: Concerning account remark
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the default currency for this document.
   * Code
   * Cardinality: 1
   */
  DocumentCurrencyCode: [Code]

  /**
   * The buyer's accounting cost code, applied to the UtilityStatement.
   * Code
   * Cardinality: 0..1
   * Examples: 5050.0
   */
  AccountingCostCode?: [Code] | undefined

  /**
   * The buyer's accounting cost code, applied to the UtilityStatement, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: [Text] | undefined

  /**
   * A reference to the parent Invoice or Credit Note.
   * Document Reference
   * Cardinality: 1
   */
  ParentDocumentReference: [DocumentReference]

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending this document.
   * Party
   * Cardinality: 1
   */
  SenderParty: [Party]

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: [Party]

  /**
   * The buyer, if different from the receiver of the document.
   * Customer Party
   * Cardinality: 0..1
   */
  CustomerParty?: [CustomerParty] | undefined

  /**
   * The subscriber (user or receiver of the service), if different from the buyer and from the party receiving this
   * document.
   * Party
   * Cardinality: 0..1
   */
  SubscriberParty?: [Party] | undefined

  /**
   * A payment on an account.
   * On Account Payment
   * Cardinality: 0..n
   */
  MainOnAccountPayment?: Array<OnAccountPayment> | undefined

  /**
   * A utility statement for a particular consumption point.
   * Subscriber Consumption
   * Cardinality: 0..n
   */
  SubscriberConsumption?: Array<SubscriberConsumption> | undefined
}
