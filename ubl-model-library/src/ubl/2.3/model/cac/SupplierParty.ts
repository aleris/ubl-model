import { Contact } from './Contact'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a supplier party.
 */
export interface SupplierParty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this supplier party, assigned by the customer.
   * Identifier
   * Cardinality: 0..1
   */
  CustomerAssignedAccountID?: Array<Identifier> | undefined

  /**
   * An additional identifier for this supplier party.
   * Identifier
   * Cardinality: 0..n
   */
  AdditionalAccountID?: Array<Identifier> | undefined

  /**
   * Text describing the supplier's ability to send invoice data via a purchase card provider (e.g., VISA, MasterCard,
   * American Express).
   * Text
   * Cardinality: 0..1
   */
  DataSendingCapability?: Array<Text> | undefined

  /**
   * The supplier party itself.
   * Party
   * Cardinality: 0..1
   */
  Party?: Array<Party> | undefined

  /**
   * A contact at this supplier party for despatches (pickups).
   * Contact
   * Cardinality: 0..1
   */
  DespatchContact?: Array<Contact> | undefined

  /**
   * A contact at this supplier party for accounting.
   * Contact
   * Cardinality: 0..1
   */
  AccountingContact?: Array<Contact> | undefined

  /**
   * The primary contact for this supplier party.
   * Contact
   * Cardinality: 0..1
   */
  SellerContact?: Array<Contact> | undefined
}
