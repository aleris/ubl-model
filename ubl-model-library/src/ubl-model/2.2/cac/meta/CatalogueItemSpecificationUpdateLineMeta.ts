import { FieldMeta } from '../../FieldMeta'

export enum CatalogueItemSpecificationUpdateLineField {
  ID = 'ID',
  ContractorCustomerParty = 'ContractorCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  Item = 'Item'
}

export const CatalogueItemSpecificationUpdateLineFieldMetaID = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the line to be updated in a catalogue.',
  '1',
  undefined,
  '1'
)

export const CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The customer responsible for the contract associated with the catalogue item.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller/supplier responsible for the contract associated with the catalogue item.',
  '0..1',
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateLineFieldMetaItem = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.Item,
  'Item',
  'Item',
  'Item',
  'The catalogue item to be updated.',
  '1',
  undefined,
  undefined
)

export class CatalogueItemSpecificationUpdateLineFieldMeta {
  public static readonly ID = CatalogueItemSpecificationUpdateLineFieldMetaID
  public static readonly ContractorCustomerParty = CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty
  public static readonly SellerSupplierParty = CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty
  public static readonly Item = CatalogueItemSpecificationUpdateLineFieldMetaItem
}

export const CatalogueItemSpecificationUpdateLineFieldMap = new Map([
  [CatalogueItemSpecificationUpdateLineField.ID, CatalogueItemSpecificationUpdateLineFieldMetaID],
  [CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty, CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty],
  [CatalogueItemSpecificationUpdateLineField.SellerSupplierParty, CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty],
  [CatalogueItemSpecificationUpdateLineField.Item, CatalogueItemSpecificationUpdateLineFieldMetaItem]
])
