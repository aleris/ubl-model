import { Address } from './Address'
import { FinancialInstitution } from './FinancialInstitution'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a branch or a division of an organization.
 */
export interface Branch {
  /**
   * An identifier for this branch or division of an organization.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The name of this branch or division of an organization.
   * Name
   * Cardinality: 0..1
   */
  Name?: [Text] | undefined

  /**
   * The financial institution that this branch belongs to (if applicable).
   * Financial Institution
   * Cardinality: 0..1
   */
  FinancialInstitution?: [FinancialInstitution] | undefined

  /**
   * The address of this branch or division.
   * Address
   * Cardinality: 0..1
   */
  Address?: [Address] | undefined
}
