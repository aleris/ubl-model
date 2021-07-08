import { EconomicOperatorRole } from './EconomicOperatorRole'
import { Party } from './Party'
import { QualifyingParty } from './QualifyingParty'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a potential contractor, supplier and service provider responding to a tender.
 */
export interface EconomicOperatorParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The party qualifying this economic operator.
   * Qualifying Party
   * Cardinality: 0..n
   */
  QualifyingParty?: Array<QualifyingParty> | undefined

  /**
   * The role of the party in a tender consortium.
   * Economic Operator Role
   * Cardinality: 0..1
   */
  EconomicOperatorRole?: Array<EconomicOperatorRole> | undefined

  /**
   * The party information about the economic operator in a tender.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>
}
