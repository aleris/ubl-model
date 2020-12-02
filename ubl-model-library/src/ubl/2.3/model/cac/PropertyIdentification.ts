import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class for assigning identifying information for a property
 */
export interface PropertyIdentification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An Identifier for the property.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A scope within which the issuer has assigned this identifier.
   * Identifier
   * Cardinality: 0..1
   */
  IssuerScopeID?: Array<Identifier> | undefined

  /**
   * The party that issued this property identifier.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined
}
