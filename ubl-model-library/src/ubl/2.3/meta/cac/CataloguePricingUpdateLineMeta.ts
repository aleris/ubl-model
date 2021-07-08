import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from './CustomerPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaID = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the catalogue line to be updated.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const CataloguePricingUpdateLineFieldMetaContractorCustomerParty = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer responsible for the contract associated with the catalogue line being updated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaSellerSupplierParty = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller/supplier responsible for the contract associated with the catalogue line being updated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CataloguePricingUpdateLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CataloguePricingUpdateLineField>(
  CataloguePricingUpdateLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  ItemLocationQuantityType.name,
  'Updated properties of the item in this catalogue line that are dependent on location and quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const CataloguePricingUpdateLineType: Type<CataloguePricingUpdateLineField> = {
  name: 'CataloguePricingUpdateLine',
  label: 'Catalogue Pricing Update Line',
  module: TypeModule.cac,
  definition: 'A class to define a line describing a pricing update to a catalogue line.',
  fields: CataloguePricingUpdateLineFieldMap,
}
