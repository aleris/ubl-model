import { CatalogueLine } from '../cac/CatalogueLine'
import { CatalogueReference } from '../cac/CatalogueReference'
import { Code } from '../cbc/Code'
import { Contract } from '../cac/Contract'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TradingTerms } from '../cac/TradingTerms'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document that describes items, prices, and price validity.
 */
export interface Catalogue {
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
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * A code signifying whether the transaction is a replacement or an update.
   * Code
   * Cardinality: 0..1
   * Examples: Replace , Update .
   */
  ActionCode: [Code] | undefined

  /**
   * Text, assigned by the sender, that identifies this document to business users.
   * Name
   * Cardinality: 0..1
   * Examples: winter 2005 collection 
   */
  Name: [Text] | undefined

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
   * The date, assigned by the seller party, on which the information in the Catalogue was last revised.
   * Date
   * Cardinality: 0..1
   */
  RevisionDate: [Date] | undefined

  /**
   * The time, assigned by the Seller party, at which the information in the Catalogue was last revised.
   * Time
   * Cardinality: 0..1
   */
  RevisionTime: [Time] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   * Examples: computer accessories for laptops 
   */
  Description: Array<Text> | undefined

  /**
   * An identifier for the current version of the Catalogue.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1 
   */
  VersionID: [Identifier] | undefined

  /**
   * An identifier for the previous version of the Catalogue that is superseded by this version.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.0 
   */
  PreviousVersionID: [Identifier] | undefined

  /**
   * The number of Catalogue Lines in the document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * A period, assigned by the seller, during which the information in the Catalogue is effective. This may be given as
   * start and end dates or as a duration.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod: Array<Period> | undefined

  /**
   * A contract or framework agreement with which this Catalogue is associated.
   * Contract
   * Cardinality: 0..n
   */
  ReferencedContract: Array<Contract> | undefined

  /**
   * A reference to the source catalogue.
   * Catalogue Reference
   * Cardinality: 0..1
   */
  SourceCatalogueReference: [CatalogueReference] | undefined

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The party providing the Catalogue.
   * Party
   * Cardinality: 1
   */
  ProviderParty: [Party]

  /**
   * The party receiving the Catalogue.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: [Party]

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty: [SupplierParty] | undefined

  /**
   * The customer party responsible for the contracts with which the Catalogue is associated.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty: [CustomerParty] | undefined

  /**
   * The trading terms associated with this Catalogue.
   * Trading Terms
   * Cardinality: 0..n
   */
  TradingTerms: Array<TradingTerms> | undefined

  /**
   * A line in a Catalogue describing an item of sale.
   * Catalogue Line
   * Cardinality: 1..n
   */
  CatalogueLine: Array<CatalogueLine>
}
