import { Address } from './Address'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a financial institution.
 */
export interface FinancialInstitution {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this financial institution. It is recommended that the ISO 9362 Bank Identification Code (BIC) be
   * used as the ID.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this financial institution.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * The address of this financial institution.
   * Address
   * Cardinality: 0..1
   */
  Address?: Array<Address> | undefined
}
