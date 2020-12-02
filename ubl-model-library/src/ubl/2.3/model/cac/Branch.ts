import { Address } from './Address'
import { FinancialInstitution } from './FinancialInstitution'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a branch or a division of an organization.
 */
export interface Branch {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this branch or division of an organization.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this branch or division of an organization.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * The financial institution that this branch belongs to (if applicable).
   * Financial Institution
   * Cardinality: 0..1
   */
  FinancialInstitution?: Array<FinancialInstitution> | undefined

  /**
   * The address of this branch or division.
   * Address
   * Cardinality: 0..1
   */
  Address?: Array<Address> | undefined
}
