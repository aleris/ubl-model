import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { GoodsItem } from './GoodsItem'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class describing a Goods Item Passport or ATA Carnet Counterfoil
 */
export interface GoodsItemPassportCounterfoil {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * This identifier for this Goods Item Passport Counterfoil
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * The identifier of the Goods Item Passport or ATA Carnet of this counterfoil, usually the number on the upper part
   * of the orange hazard placard required on the means of transport
   * Identifier
   * Cardinality: 1
   * Alternative business terms: ATA Carnet number
   */
  GoodsItemPassportID: Array<Identifier>

  /**
   * Final date of re-exportation, if less than the overall validity period of te Goods Item Passport or ATA Carnet
   * Date
   * Cardinality: 0..1
   */
  FinalReexportationDate?: Array<Date> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The location of the customs office to where the counterfoil has been presented
   * Location
   * Cardinality: 0..1
   */
  CustomsOfficeLocation?: Array<Location> | undefined

  /**
   * A goods item associated with this counterfoil
   * Goods Item
   * Cardinality: 0..1
   */
  GoodsItem?: Array<GoodsItem> | undefined

  /**
   * A reference to a document used for the export of the goods related to this counterfoil
   * Document Reference
   * Cardinality: 0..n
   */
  ExportationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document used for the import of the goods related to this counterfoil
   * Document Reference
   * Cardinality: 0..n
   */
  ImportationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document used for the re-exportation of the goods related to this counterfoil
   * Document Reference
   * Cardinality: 0..n
   */
  ReexportationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document used for re-importation of the goods related to this counterfoil
   * Document Reference
   * Cardinality: 0..n
   */
  ReimportationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a voucher related to this counterfoil
   * Document Reference
   * Cardinality: 0..n
   */
  VoucherDocumentReference?: Array<DocumentReference> | undefined
}
