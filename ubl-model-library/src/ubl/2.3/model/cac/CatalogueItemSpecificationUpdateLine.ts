import { CustomerParty } from './CustomerParty'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { SupplierParty } from './SupplierParty'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line describing the transaction that updates the specification of an item in a catalogue.
 */
export interface CatalogueItemSpecificationUpdateLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the line to be updated in a catalogue.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: Array<Identifier>

  /**
   * The customer responsible for the contract associated with the catalogue item.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller/supplier responsible for the contract associated with the catalogue item.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The catalogue item to be updated.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>
}
