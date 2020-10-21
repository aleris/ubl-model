import { Contact } from './Contact'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'

/**
 * A class to describe a customer party.
 */
export interface CustomerParty {
  /**
   * An identifier for the customer's account, assigned by the customer itself.
   * Identifier
   * Cardinality: 0..1
   */
  CustomerAssignedAccountID?: [Identifier] | undefined

  /**
   * An identifier for the customer's account, assigned by the supplier.
   * Identifier
   * Cardinality: 0..1
   */
  SupplierAssignedAccountID?: [Identifier] | undefined

  /**
   * An identifier for the customer's account, assigned by a third party.
   * Identifier
   * Cardinality: 0..n
   */
  AdditionalAccountID?: Array<Identifier> | undefined

  /**
   * The customer party itself.
   * Party
   * Cardinality: 0..1
   */
  Party?: [Party] | undefined

  /**
   * A customer contact for deliveries.
   * Contact
   * Cardinality: 0..1
   */
  DeliveryContact?: [Contact] | undefined

  /**
   * A customer contact for accounting.
   * Contact
   * Cardinality: 0..1
   */
  AccountingContact?: [Contact] | undefined

  /**
   * A customer contact for purchasing.
   * Contact
   * Cardinality: 0..1
   */
  BuyerContact?: [Contact] | undefined
}
