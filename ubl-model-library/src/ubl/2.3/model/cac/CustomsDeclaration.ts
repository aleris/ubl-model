import { Address } from './Address'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Party } from './Party'
import { Period } from './Period'
import { Shipment } from './Shipment'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class describing identifiers or references relating to customs procedures.
 */
export interface CustomsDeclaration {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier associated with customs related procedures.
   * Identifier
   * Cardinality: 1
   * Examples: CUST001 3333-44-123
   */
  ID: Array<Identifier>

  /**
   * The period during which this customs declaration is valid
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The area or region where this customs declaration applies
   * Address
   * Cardinality: 0..1
   */
  ApplicableTerritoryAddress?: Array<Address> | undefined

  /**
   * A reference to the shipment of goods being declared
   * Shipment
   * Cardinality: 0..1
   */
  Shipment?: Array<Shipment> | undefined

  /**
   * The location of the exit office from where the goods will leave or have left the customs territory
   * Location
   * Cardinality: 0..1
   * Alternative business terms: Customs office of exit
   */
  CustomsExitOfficeLocation?: Array<Location> | undefined

  /**
   * Describes the party issuing the customs declaration.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined

  /**
   * The party, usually the seller, who is responsible for the consignment
   * Party
   * Cardinality: 0..1
   */
  ConsignorParty?: Array<Party> | undefined

  /**
   * The party, usually the buyer, who will receive the goods
   * Party
   * Cardinality: 0..1
   */
  ConsigneeParty?: Array<Party> | undefined

  /**
   * The freight forwarder or the forwarding agent responsible for the transportation of the goods
   * Party
   * Cardinality: 0..1
   */
  FreightForwarderParty?: Array<Party> | undefined

  /**
   * The authority responsible for processing this customs declaration
   * Party
   * Cardinality: 0..1
   */
  CustomsParty?: Array<Party> | undefined

  /**
   * A reference to a previous version of this customs declaration
   * Customs Declaration
   * Cardinality: 0..1
   */
  PreviousCustomsDeclaration?: Array<CustomsDeclaration> | undefined

  /**
   * A reference to additional documents relevant or related to this customs declaration
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined
}
