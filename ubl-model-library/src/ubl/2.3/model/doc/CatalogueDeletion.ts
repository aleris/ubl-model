import { CatalogueReference } from '../cac/CatalogueReference'
import { Contract } from '../cac/Contract'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document used to cancel an entire Catalogue.
 */
export interface CatalogueDeletion {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: Array<Identifier> | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * Text, assigned by the sender, that identifies this document to business users.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: Array<Date>

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * The effective date, assigned by the seller, on which the Catalogue expires.
   * Date
   * Cardinality: 0..1
   */
  EffectiveDate?: Array<Date> | undefined

  /**
   * The effective time, assigned by the seller, at which the Catalogue expires.
   * Time
   * Cardinality: 0..1
   */
  EffectiveTime?: Array<Time> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Identifies the current version of the Catalogue.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   * Examples: stock no longer provided
   */
  Description?: Array<Text> | undefined

  /**
   * The period during which the Deletion of the catalogue becomes effective. This may be given as start (after date)
   * and end dates (before date).
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A reference to the Catalogue being deleted.
   * Catalogue Reference
   * Cardinality: 1
   */
  DeletedCatalogueReference: Array<CatalogueReference>

  /**
   * A contract or framework agreement with which the Catalogue was associated.
   * Contract
   * Cardinality: 0..n
   */
  ReferencedContract?: Array<Contract> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party receiving the Catalogue Deletion.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: Array<Party>

  /**
   * The party sending the Catalogue Deletion.
   * Party
   * Cardinality: 1
   */
  ProviderParty: Array<Party>

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The customer party responsible for the contracts with which the Catalogue was associated.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty?: Array<CustomerParty> | undefined
}
