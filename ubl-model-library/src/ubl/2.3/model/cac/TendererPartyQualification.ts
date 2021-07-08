import { ProcurementProjectLot } from './ProcurementProjectLot'
import { QualifyingParty } from './QualifyingParty'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the qualifications of a tenderer party.
 */
export interface TendererPartyQualification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The procurement project lot the party is interested in.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  InterestedProcurementProjectLot?: Array<ProcurementProjectLot> | undefined

  /**
   * The qualifications of the main tenderer party.
   * Qualifying Party
   * Cardinality: 1
   */
  MainQualifyingParty: Array<QualifyingParty>

  /**
   * The qualifications of a tenderer party other than the main tenderer party when bidding as a consortium.
   * Qualifying Party
   * Cardinality: 0..n
   */
  AdditionalQualifyingParty?: Array<QualifyingParty> | undefined
}
