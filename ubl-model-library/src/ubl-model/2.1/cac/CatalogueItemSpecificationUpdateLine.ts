import { CustomerParty } from './CustomerParty'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { SupplierParty } from './SupplierParty'

/**
 * A class to define a line describing the transaction that updates the specification of an item in a catalogue.
 */
export interface CatalogueItemSpecificationUpdateLine {
  /**
   * An identifier for the line to be updated in a catalogue.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: [Identifier]

  /**
   * The customer responsible for the contract associated with the catalogue item.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty?: [CustomerParty] | undefined

  /**
   * The seller/supplier responsible for the contract associated with the catalogue item.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: [SupplierParty] | undefined

  /**
   * The catalogue item to be updated.
   * Item
   * Cardinality: 1
   */
  Item: [Item]
}
