import { CataloguePricingUpdateLine } from '../cac/CataloguePricingUpdateLine'
import { CatalogueReference } from '../cac/CatalogueReference'
import { Contract } from '../cac/Contract'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
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
 * A document used to update information about prices in an existing Catalogue.
 */
export interface CataloguePricingUpdate {
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
   * Identifies a user-defined profile of the subset of UBL being used.
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
   * Examples: Seasonal Promotion
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
   * The date, assigned by the seller, on which the Catalogue was revised.
   * Date
   * Cardinality: 0..1
   */
  RevisionDate?: Array<Date> | undefined

  /**
   * The time, assigned by the seller, at which the Catalogue was revised.
   * Time
   * Cardinality: 0..1
   */
  RevisionTime?: Array<Time> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Describes the Catalogue Revision.
   * Text
   * Cardinality: 0..n
   * Examples: adjustment of prices for Christmas trading period
   */
  Description?: Array<Text> | undefined

  /**
   * Indicates the current version of the catalogue.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * The number of lines in the document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric?: Array<Numeric> | undefined

  /**
   * A period, assigned by the seller, during which the information in the Catalogue Revision is effective. This may be
   * given as start and end dates or as a duration.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A reference to the Catalogue being updated.
   * Catalogue Reference
   * Cardinality: 1
   */
  RelatedCatalogueReference: Array<CatalogueReference>

  /**
   * A contract or framework agreement with which the Catalogue is associated.
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
   * The party sending the Catalogue Pricing Update.
   * Party
   * Cardinality: 1
   */
  ProviderParty: Array<Party>

  /**
   * The party receiving the Catalogue Pricing Update.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: Array<Party>

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
   * The trading terms associated with the Catalogue.
   * Trading Terms
   * Cardinality: 0..1
   */
  TradingTerms?: Array<TradingTerms> | undefined

  /**
   * The default language for the catalogue pricing update.
   * Language
   * Cardinality: 0..1
   */
  DefaultLanguage?: Array<Language> | undefined

  /**
   * One or more lines in the Catalogue Pricing Update, each line updating a specific catalogue item.
   * Catalogue Pricing Update Line
   * Cardinality: 1..n
   */
  CataloguePricingUpdateLine: Array<CataloguePricingUpdateLine>
}
