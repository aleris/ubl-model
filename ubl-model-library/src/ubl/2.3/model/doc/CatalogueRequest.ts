import { Address } from '../cac/Address'
import { CatalogueReference } from '../cac/CatalogueReference'
import { CatalogueRequestLine } from '../cac/CatalogueRequestLine'
import { ClassificationScheme } from '../cac/ClassificationScheme'
import { Contract } from '../cac/Contract'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Language } from '../cac/Language'
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
 * A document used to request a Catalogue.
 */
export interface CatalogueRequest {
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
   * Examples: winter 2005 collection
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
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   * Examples: latest computer accessories for laptops
   */
  Description?: Array<Text> | undefined

  /**
   * Indicates a request for a pricing update.
   * Indicator
   * Cardinality: 0..1
   * Examples: default is true
   */
  PricingUpdateRequestIndicator?: Array<Indicator> | undefined

  /**
   * Indicates a request for an update of the item specifications.
   * Indicator
   * Cardinality: 0..1
   * Examples: default is true
   */
  ItemUpdateRequestIndicator?: Array<Indicator> | undefined

  /**
   * The number of Catalogue Lines in this document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric?: Array<Numeric> | undefined

  /**
   * The period, assigned by the Catalogue Managing party, during which the information in the Catalogue requested is to
   * be effective. This may be given as start and end dates or a duration.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party receiving the Catalogue Request.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: Array<Party>

  /**
   * The party sending the Catalogue Request.
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
   * The customer party responsible for the contracts with which the Catalogue is associated.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty?: Array<CustomerParty> | undefined

  /**
   * A reference to a specific Catalogue; used if the Catalogue Request is for an update.
   * Catalogue Reference
   * Cardinality: 0..1
   */
  RequestedCatalogueReference?: Array<CatalogueReference> | undefined

  /**
   * A contract or framework agreement with which the Catalogue being requested is associated.
   * Contract
   * Cardinality: 0..n
   */
  ReferencedContract?: Array<Contract> | undefined

  /**
   * The trading terms associated with the requested Catalogue.
   * Trading Terms
   * Cardinality: 0..1
   */
  TradingTerms?: Array<TradingTerms> | undefined

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a territory (region, country, city, etc.) to which the requested Catalogue will apply, expressed as
   * an Address.
   * Address
   * Cardinality: 0..n
   */
  ApplicableTerritoryAddress?: Array<Address> | undefined

  /**
   * The language in which the Catalogue is requested to be provided.
   * Language
   * Cardinality: 0..1
   */
  RequestedLanguage?: Array<Language> | undefined

  /**
   * A requested classification scheme for the requested Catalogue.
   * Classification Scheme
   * Cardinality: 0..n
   */
  RequestedClassificationScheme?: Array<ClassificationScheme> | undefined

  /**
   * An association to specific Catalogue Lines for the catalogue requested.
   * Catalogue Request Line
   * Cardinality: 0..n
   */
  CatalogueRequestLine?: Array<CatalogueRequestLine> | undefined
}
