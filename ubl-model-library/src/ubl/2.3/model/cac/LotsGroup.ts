import { Identifier } from '../cbc/Identifier'
import { ProcurementProjectLot } from './ProcurementProjectLot'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class for defining set of lots.
 */
export interface LotsGroup {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the lotsgroup.
   * Identifier
   * Cardinality: 1
   */
  LotLotsGroupID: Array<Identifier>

  /**
   * A Procurement project lot that is included in this LotsGroup.
   * Procurement Project Lot
   * Cardinality: 1..n
   */
  ProcurementProjectLot: Array<ProcurementProjectLot>
}
