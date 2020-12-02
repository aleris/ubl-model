import { Contact } from './Contact'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a customer party.
 */
export interface CustomerParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the customer's account, assigned by the customer itself.
   * Identifier
   * Cardinality: 0..1
   */
  CustomerAssignedAccountID?: Array<Identifier> | undefined

  /**
   * An identifier for the customer's account, assigned by the supplier.
   * Identifier
   * Cardinality: 0..1
   */
  SupplierAssignedAccountID?: Array<Identifier> | undefined

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
  Party?: Array<Party> | undefined

  /**
   * A customer contact for deliveries.
   * Contact
   * Cardinality: 0..1
   */
  DeliveryContact?: Array<Contact> | undefined

  /**
   * A customer contact for accounting.
   * Contact
   * Cardinality: 0..1
   */
  AccountingContact?: Array<Contact> | undefined

  /**
   * A customer contact for purchasing.
   * Contact
   * Cardinality: 0..1
   */
  BuyerContact?: Array<Contact> | undefined
}
