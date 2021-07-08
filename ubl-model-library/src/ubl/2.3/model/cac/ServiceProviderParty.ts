import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a party contracting to provide services, such as transportation, finance, etc.
 */
export interface ServiceProviderParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this service provider.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The type of service provided, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  ServiceTypeCode?: Array<Code> | undefined

  /**
   * The type of service provided, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ServiceType?: Array<Text> | undefined

  /**
   * The party providing the service.
   * Party
   * Cardinality: 1
   */
  Party: Array<Party>

  /**
   * The contact for the service provider.
   * Contact
   * Cardinality: 0..1
   */
  SellerContact?: Array<Contact> | undefined
}
