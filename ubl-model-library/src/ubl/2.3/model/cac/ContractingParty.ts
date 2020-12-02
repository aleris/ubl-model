import { ContractingActivity } from './ContractingActivity'
import { ContractingPartyType } from './ContractingPartyType'
import { ContractingRepresentationType } from './ContractingRepresentationType'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe an individual, a group, or a body having a procurement role in a tendering process.
 */
export interface ContractingParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The buyer profile is typically located on a web site where the contracting party publishes its procurement
   * opportunities
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Buyer Profile
   */
  BuyerProfileURI?: Array<Identifier> | undefined

  /**
   * The type of contracting party that is independent of its role.
   * Contracting Party Type
   * Cardinality: 0..n
   */
  ContractingPartyType?: Array<ContractingPartyType> | undefined

  /**
   * The nature of the type of business of the organization
   * Contracting Activity
   * Cardinality: 0..n
   */
  ContractingActivity?: Array<ContractingActivity> | undefined

  /**
   * The type of represention empowering the party to act on behalf of a third party
   * Contracting Representation Type
   * Cardinality: 0..1
   */
  ContractingRepresentationType?: Array<ContractingRepresentationType> | undefined

  /**
   * The contracting party itself.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>
}
