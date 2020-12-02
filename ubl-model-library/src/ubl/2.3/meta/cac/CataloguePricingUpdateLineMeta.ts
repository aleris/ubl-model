import { FieldMeta } from '../FieldMeta'

export enum CataloguePricingUpdateLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ContractorCustomerParty = 'ContractorCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  RequiredItemLocationQuantity = 'RequiredItemLocationQuantity'
}

export const CataloguePricingUpdateLineFieldMetaUBLExtensions = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaID = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the catalogue line to be updated.',
  '1',
  'cbc',
  undefined,
  '1'
)

export const CataloguePricingUpdateLineFieldMetaContractorCustomerParty = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  'CustomerParty',
  'The customer responsible for the contract associated with the catalogue line being updated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaSellerSupplierParty = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller/supplier responsible for the contract associated with the catalogue line being updated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  'ItemLocationQuantity',
  'Updated properties of the item in this catalogue line that are dependent on location and quantity.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class CataloguePricingUpdateLineFieldMeta {
  public static readonly UBLExtensions = CataloguePricingUpdateLineFieldMetaUBLExtensions
  public static readonly ID = CataloguePricingUpdateLineFieldMetaID
  public static readonly ContractorCustomerParty = CataloguePricingUpdateLineFieldMetaContractorCustomerParty
  public static readonly SellerSupplierParty = CataloguePricingUpdateLineFieldMetaSellerSupplierParty
  public static readonly RequiredItemLocationQuantity = CataloguePricingUpdateLineFieldMetaRequiredItemLocationQuantity
}

export const CataloguePricingUpdateLineFieldMap = new Map([
  [CataloguePricingUpdateLineField.UBLExtensions, CataloguePricingUpdateLineFieldMetaUBLExtensions],
  [CataloguePricingUpdateLineField.ID, CataloguePricingUpdateLineFieldMetaID],
  [CataloguePricingUpdateLineField.ContractorCustomerParty, CataloguePricingUpdateLineFieldMetaContractorCustomerParty],
  [CataloguePricingUpdateLineField.SellerSupplierParty, CataloguePricingUpdateLineFieldMetaSellerSupplierParty],
  [CataloguePricingUpdateLineField.RequiredItemLocationQuantity, CataloguePricingUpdateLineFieldMetaRequiredItemLocationQuantity]
])
