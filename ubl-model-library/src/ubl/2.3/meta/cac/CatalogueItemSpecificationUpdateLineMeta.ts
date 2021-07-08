import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from './CustomerPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CatalogueItemSpecificationUpdateLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ContractorCustomerParty = 'ContractorCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  Item = 'Item'
}

export const CatalogueItemSpecificationUpdateLineFieldMetaUBLExtensions = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateLineFieldMetaID = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the line to be updated in a catalogue.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer responsible for the contract associated with the catalogue item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller/supplier responsible for the contract associated with the catalogue item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueItemSpecificationUpdateLineFieldMetaItem = new FieldMeta<CatalogueItemSpecificationUpdateLineField>(
  CatalogueItemSpecificationUpdateLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The catalogue item to be updated.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class CatalogueItemSpecificationUpdateLineFieldMeta {
  public static readonly UBLExtensions = CatalogueItemSpecificationUpdateLineFieldMetaUBLExtensions
  public static readonly ID = CatalogueItemSpecificationUpdateLineFieldMetaID
  public static readonly ContractorCustomerParty = CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty
  public static readonly SellerSupplierParty = CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty
  public static readonly Item = CatalogueItemSpecificationUpdateLineFieldMetaItem
}

export const CatalogueItemSpecificationUpdateLineFieldMap = new Map([
  [CatalogueItemSpecificationUpdateLineField.UBLExtensions, CatalogueItemSpecificationUpdateLineFieldMetaUBLExtensions],
  [CatalogueItemSpecificationUpdateLineField.ID, CatalogueItemSpecificationUpdateLineFieldMetaID],
  [CatalogueItemSpecificationUpdateLineField.ContractorCustomerParty, CatalogueItemSpecificationUpdateLineFieldMetaContractorCustomerParty],
  [CatalogueItemSpecificationUpdateLineField.SellerSupplierParty, CatalogueItemSpecificationUpdateLineFieldMetaSellerSupplierParty],
  [CatalogueItemSpecificationUpdateLineField.Item, CatalogueItemSpecificationUpdateLineFieldMetaItem]
])

export const CatalogueItemSpecificationUpdateLineType: Type<CatalogueItemSpecificationUpdateLineField> = {
  name: 'CatalogueItemSpecificationUpdateLine',
  label: 'Catalogue Item Specification Update Line',
  module: TypeModule.cac,
  definition: 'A class to define a line describing the transaction that updates the specification of an item in a catalogue.',
  fields: CatalogueItemSpecificationUpdateLineFieldMap,
}
