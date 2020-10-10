import { ContractingActivity } from './ContractingActivity'
import { ContractingPartyType } from './ContractingPartyType'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'

/**
 * A class to describe an individual, a group, or a body having a procurement role in a tendering process.
 */
export interface ContractingParty {
  /**
   * The buyer profile is typically located on a web site where the contracting party publishes its procurement
   * opportunities
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Buyer Profile
   */
  BuyerProfileURI: [Identifier] | undefined

  /**
   * The type of contracting party that is independent of its role.
   * Contracting Party Type
   * Cardinality: 0..n
   */
  ContractingPartyType: Array<ContractingPartyType> | undefined

  /**
   * The nature of the type of business of the organization
   * Contracting Activity
   * Cardinality: 0..n
   */
  ContractingActivity: Array<ContractingActivity> | undefined

  /**
   * The contracting party itself.
   * Party
   * Cardinality: 1
   */
  Party: [Party]
}
