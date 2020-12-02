import { Consignment } from '../cac/Consignment'
import { Date } from '../cbc/Date'
import { GoodsItem } from '../cac/GoodsItem'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Package } from '../cac/Package'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportationSegment } from '../cac/TransportationSegment'
import { TransportEquipment } from '../cac/TransportEquipment'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document providing details relating to a transport service, such as transport movement, identification of equipment
 * and goods, subcontracted service providers, etc.
 */
export interface GoodsItemItinerary {
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
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
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
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: Array<Date>

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 1
   */
  IssueTime: Array<Time>

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Identifies a version of a Goods Item Itinerary in order to distinguish updates.
   * Identifier
   * Cardinality: 1
   */
  VersionID: Array<Identifier>

  /**
   * The Transport Execution Plan associated with this Goods Item Itinerary.
   * Identifier
   * Cardinality: 1
   */
  TransportExecutionPlanReferenceID: Array<Identifier>

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The sender of this Goods Item Itinerary.
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The receiver of this Goods Item Itinerary.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * A consignment being transported in the transport service associated with this Goods Item Itinerary.
   * Consignment
   * Cardinality: 0..n
   */
  ReferencedConsignment?: Array<Consignment> | undefined

  /**
   * Transport equipment being transported in the transport service associated with this Goods Item Itinerary.
   * Transport Equipment
   * Cardinality: 0..n
   */
  ReferencedTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A package being transported in the transport service associated with this Goods Item Itinerary.
   * Package
   * Cardinality: 0..n
   */
  ReferencedPackage?: Array<Package> | undefined

  /**
   * An item of goods being transported in the transport service associated with this Goods Item Itinerary.
   * Goods Item
   * Cardinality: 0..n
   */
  ReferencedGoodsItem?: Array<GoodsItem> | undefined

  /**
   * A part of a transport service that has its own Transport Execution Plan. A Transportation Segment may cover
   * services other than transport, such as terminal handling, document management, customs procedures, etc.
   * Transportation Segment
   * Cardinality: 1..n
   */
  TransportationSegment: Array<TransportationSegment>
}
