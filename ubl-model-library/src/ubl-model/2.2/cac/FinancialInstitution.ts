import { Address } from './Address'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a financial institution.
 */
export interface FinancialInstitution {
  /**
   * An identifier for this financial institution. It is recommended that the ISO 9362 Bank Identification Code (BIC) be
   * used as the ID.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The name of this financial institution.
   * Name
   * Cardinality: 0..1
   */
  Name: [Text] | undefined

  /**
   * The address of this financial institution.
   * Address
   * Cardinality: 0..1
   */
  Address: [Address] | undefined
}
