import { CustomerParty } from './CustomerParty'
import { Identifier } from '../cbc/Identifier'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { SupplierParty } from './SupplierParty'

/**
 * A class to define a line describing a pricing update to a catalogue line.
 */
export interface CataloguePricingUpdateLine {
  /**
   * An identifier for the catalogue line to be updated.
   * Identifier
   * Cardinality: 1
   * Examples: 1 
   */
  ID: [Identifier]

  /**
   * The customer responsible for the contract associated with the catalogue line being updated.
   * Customer Party
   * Cardinality: 0..1
   */
  ContractorCustomerParty: [CustomerParty] | undefined

  /**
   * The seller/supplier responsible for the contract associated with the catalogue line being updated.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty: [SupplierParty] | undefined

  /**
   * Updated properties of the item in this catalogue line that are dependent on location and quantity.
   * Item Location Quantity
   * Cardinality: 0..n
   */
  RequiredItemLocationQuantity: Array<ItemLocationQuantity> | undefined
}
