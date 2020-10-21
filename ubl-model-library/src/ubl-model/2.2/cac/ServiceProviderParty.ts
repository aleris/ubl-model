import { Code } from '../cbc/Code'
import { Contact } from './Contact'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'

/**
 * A class to describe a party contracting to provide services, such as transportation, finance, etc.
 */
export interface ServiceProviderParty {
  /**
   * An identifier for this service provider.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The type of service provided, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  ServiceTypeCode?: [Code] | undefined

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
  Party: [Party]

  /**
   * The contact for the service provider.
   * Contact
   * Cardinality: 0..1
   */
  SellerContact?: [Contact] | undefined
}
