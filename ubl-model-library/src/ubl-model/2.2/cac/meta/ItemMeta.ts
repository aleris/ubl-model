import { FieldMeta } from '../../FieldMeta'

export enum ItemField {
  Description = 'Description',
  PackQuantity = 'PackQuantity',
  PackSizeNumeric = 'PackSizeNumeric',
  CatalogueIndicator = 'CatalogueIndicator',
  Name = 'Name',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  AdditionalInformation = 'AdditionalInformation',
  Keyword = 'Keyword',
  BrandName = 'BrandName',
  ModelName = 'ModelName',
  BuyersItemIdentification = 'BuyersItemIdentification',
  SellersItemIdentification = 'SellersItemIdentification',
  ManufacturersItemIdentification = 'ManufacturersItemIdentification',
  StandardItemIdentification = 'StandardItemIdentification',
  CatalogueItemIdentification = 'CatalogueItemIdentification',
  AdditionalItemIdentification = 'AdditionalItemIdentification',
  CatalogueDocumentReference = 'CatalogueDocumentReference',
  ItemSpecificationDocumentReference = 'ItemSpecificationDocumentReference',
  OriginCountry = 'OriginCountry',
  CommodityClassification = 'CommodityClassification',
  TransactionConditions = 'TransactionConditions',
  HazardousItem = 'HazardousItem',
  ClassifiedTaxCategory = 'ClassifiedTaxCategory',
  AdditionalItemProperty = 'AdditionalItemProperty',
  ManufacturerParty = 'ManufacturerParty',
  InformationContentProviderParty = 'InformationContentProviderParty',
  OriginAddress = 'OriginAddress',
  ItemInstance = 'ItemInstance',
  Certificate = 'Certificate',
  Dimension = 'Dimension'
}

export const ItemFieldMetaDescription = new FieldMeta<ItemField>(
  ItemField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaPackQuantity = new FieldMeta<ItemField>(
  ItemField.PackQuantity,
  'PackQuantity',
  'Pack Quantity',
  'Quantity',
  'The unit packaging quantity; the number of subunits making up this item.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaPackSizeNumeric = new FieldMeta<ItemField>(
  ItemField.PackSizeNumeric,
  'PackSizeNumeric',
  'Pack Size',
  'Numeric',
  'The number of items in a pack of this item.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueIndicator = new FieldMeta<ItemField>(
  ItemField.CatalogueIndicator,
  'CatalogueIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this item was ordered from a catalogue (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaName = new FieldMeta<ItemField>(
  ItemField.Name,
  'Name',
  'Name',
  'Text',
  'A short name optionally given to this item, such as a name from a catalogue, as distinct from a description.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaHazardousRiskIndicator = new FieldMeta<ItemField>(
  ItemField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Indicator',
  'Indicator',
  'An indication that the transported item, as delivered, is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  undefined,
  'Default is negative'
)

export const ItemFieldMetaAdditionalInformation = new FieldMeta<ItemField>(
  ItemField.AdditionalInformation,
  'AdditionalInformation',
  'Information',
  'Text',
  'Further details regarding this item (e.g., the URL of a relevant web page).',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaKeyword = new FieldMeta<ItemField>(
  ItemField.Keyword,
  'Keyword',
  'Keyword',
  'Text',
  'A keyword (search string) for this item, assigned by the seller party. Can also be a synonym for the name of the item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaBrandName = new FieldMeta<ItemField>(
  ItemField.BrandName,
  'BrandName',
  'Brand Name',
  'Text',
  'A brand name of this item.',
  '0..n',
  undefined,
  'Coca-Cola'
)

export const ItemFieldMetaModelName = new FieldMeta<ItemField>(
  ItemField.ModelName,
  'ModelName',
  'Model Name',
  'Text',
  'A model name of this item.',
  '0..n',
  undefined,
  'VW Beetle'
)

export const ItemFieldMetaBuyersItemIdentification = new FieldMeta<ItemField>(
  ItemField.BuyersItemIdentification,
  'BuyersItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'Identifying information for this item, assigned by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaSellersItemIdentification = new FieldMeta<ItemField>(
  ItemField.SellersItemIdentification,
  'SellersItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'Identifying information for this item, assigned by the seller.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaManufacturersItemIdentification = new FieldMeta<ItemField>(
  ItemField.ManufacturersItemIdentification,
  'ManufacturersItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'Identifying information for this item, assigned by the manufacturer.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaStandardItemIdentification = new FieldMeta<ItemField>(
  ItemField.StandardItemIdentification,
  'StandardItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'Identifying information for this item, assigned according to a standard system.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueItemIdentification = new FieldMeta<ItemField>(
  ItemField.CatalogueItemIdentification,
  'CatalogueItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'Identifying information for this item, assigned according to a cataloguing system.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaAdditionalItemIdentification = new FieldMeta<ItemField>(
  ItemField.AdditionalItemIdentification,
  'AdditionalItemIdentification',
  'Item Identification',
  'ItemIdentification',
  'An additional identifier for this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueDocumentReference = new FieldMeta<ItemField>(
  ItemField.CatalogueDocumentReference,
  'CatalogueDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the catalogue in which this item appears.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaItemSpecificationDocumentReference = new FieldMeta<ItemField>(
  ItemField.ItemSpecificationDocumentReference,
  'ItemSpecificationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a specification document for this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaOriginCountry = new FieldMeta<ItemField>(
  ItemField.OriginCountry,
  'OriginCountry',
  'Country',
  'Country',
  'The country of origin of this item.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaCommodityClassification = new FieldMeta<ItemField>(
  ItemField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  'CommodityClassification',
  'A classification of this item according to a specific system for classifying commodities.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaTransactionConditions = new FieldMeta<ItemField>(
  ItemField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  'TransactionConditions',
  'A set of sales conditions applying to this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaHazardousItem = new FieldMeta<ItemField>(
  ItemField.HazardousItem,
  'HazardousItem',
  'Hazardous Item',
  'HazardousItem',
  'Information pertaining to this item as a hazardous item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaClassifiedTaxCategory = new FieldMeta<ItemField>(
  ItemField.ClassifiedTaxCategory,
  'ClassifiedTaxCategory',
  'Tax Category',
  'TaxCategory',
  'A tax category applicable to this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaAdditionalItemProperty = new FieldMeta<ItemField>(
  ItemField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Item Property',
  'ItemProperty',
  'An additional property of this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaManufacturerParty = new FieldMeta<ItemField>(
  ItemField.ManufacturerParty,
  'ManufacturerParty',
  'Party',
  'Party',
  'The manufacturer of this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaInformationContentProviderParty = new FieldMeta<ItemField>(
  ItemField.InformationContentProviderParty,
  'InformationContentProviderParty',
  'Party',
  'Party',
  'The party responsible for specification of this item.',
  '0..1',
  undefined,
  undefined
)

export const ItemFieldMetaOriginAddress = new FieldMeta<ItemField>(
  ItemField.OriginAddress,
  'OriginAddress',
  'Address',
  'Address',
  'A region (not country) of origin of this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaItemInstance = new FieldMeta<ItemField>(
  ItemField.ItemInstance,
  'ItemInstance',
  'Item Instance',
  'ItemInstance',
  'A trackable, unique instantiation of this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaCertificate = new FieldMeta<ItemField>(
  ItemField.Certificate,
  'Certificate',
  'Certificate',
  'Certificate',
  'A certificate associated with this item.',
  '0..n',
  undefined,
  undefined
)

export const ItemFieldMetaDimension = new FieldMeta<ItemField>(
  ItemField.Dimension,
  'Dimension',
  'Dimension',
  'Dimension',
  'One of the measurable dimensions (length, mass, weight, or volume) of this item.',
  '0..n',
  undefined,
  undefined
)

export class ItemFieldMeta {
  public static readonly Description = ItemFieldMetaDescription
  public static readonly PackQuantity = ItemFieldMetaPackQuantity
  public static readonly PackSizeNumeric = ItemFieldMetaPackSizeNumeric
  public static readonly CatalogueIndicator = ItemFieldMetaCatalogueIndicator
  public static readonly Name = ItemFieldMetaName
  public static readonly HazardousRiskIndicator = ItemFieldMetaHazardousRiskIndicator
  public static readonly AdditionalInformation = ItemFieldMetaAdditionalInformation
  public static readonly Keyword = ItemFieldMetaKeyword
  public static readonly BrandName = ItemFieldMetaBrandName
  public static readonly ModelName = ItemFieldMetaModelName
  public static readonly BuyersItemIdentification = ItemFieldMetaBuyersItemIdentification
  public static readonly SellersItemIdentification = ItemFieldMetaSellersItemIdentification
  public static readonly ManufacturersItemIdentification = ItemFieldMetaManufacturersItemIdentification
  public static readonly StandardItemIdentification = ItemFieldMetaStandardItemIdentification
  public static readonly CatalogueItemIdentification = ItemFieldMetaCatalogueItemIdentification
  public static readonly AdditionalItemIdentification = ItemFieldMetaAdditionalItemIdentification
  public static readonly CatalogueDocumentReference = ItemFieldMetaCatalogueDocumentReference
  public static readonly ItemSpecificationDocumentReference = ItemFieldMetaItemSpecificationDocumentReference
  public static readonly OriginCountry = ItemFieldMetaOriginCountry
  public static readonly CommodityClassification = ItemFieldMetaCommodityClassification
  public static readonly TransactionConditions = ItemFieldMetaTransactionConditions
  public static readonly HazardousItem = ItemFieldMetaHazardousItem
  public static readonly ClassifiedTaxCategory = ItemFieldMetaClassifiedTaxCategory
  public static readonly AdditionalItemProperty = ItemFieldMetaAdditionalItemProperty
  public static readonly ManufacturerParty = ItemFieldMetaManufacturerParty
  public static readonly InformationContentProviderParty = ItemFieldMetaInformationContentProviderParty
  public static readonly OriginAddress = ItemFieldMetaOriginAddress
  public static readonly ItemInstance = ItemFieldMetaItemInstance
  public static readonly Certificate = ItemFieldMetaCertificate
  public static readonly Dimension = ItemFieldMetaDimension
}

export const ItemFieldMap = new Map([
  [ItemField.Description, ItemFieldMetaDescription],
  [ItemField.PackQuantity, ItemFieldMetaPackQuantity],
  [ItemField.PackSizeNumeric, ItemFieldMetaPackSizeNumeric],
  [ItemField.CatalogueIndicator, ItemFieldMetaCatalogueIndicator],
  [ItemField.Name, ItemFieldMetaName],
  [ItemField.HazardousRiskIndicator, ItemFieldMetaHazardousRiskIndicator],
  [ItemField.AdditionalInformation, ItemFieldMetaAdditionalInformation],
  [ItemField.Keyword, ItemFieldMetaKeyword],
  [ItemField.BrandName, ItemFieldMetaBrandName],
  [ItemField.ModelName, ItemFieldMetaModelName],
  [ItemField.BuyersItemIdentification, ItemFieldMetaBuyersItemIdentification],
  [ItemField.SellersItemIdentification, ItemFieldMetaSellersItemIdentification],
  [ItemField.ManufacturersItemIdentification, ItemFieldMetaManufacturersItemIdentification],
  [ItemField.StandardItemIdentification, ItemFieldMetaStandardItemIdentification],
  [ItemField.CatalogueItemIdentification, ItemFieldMetaCatalogueItemIdentification],
  [ItemField.AdditionalItemIdentification, ItemFieldMetaAdditionalItemIdentification],
  [ItemField.CatalogueDocumentReference, ItemFieldMetaCatalogueDocumentReference],
  [ItemField.ItemSpecificationDocumentReference, ItemFieldMetaItemSpecificationDocumentReference],
  [ItemField.OriginCountry, ItemFieldMetaOriginCountry],
  [ItemField.CommodityClassification, ItemFieldMetaCommodityClassification],
  [ItemField.TransactionConditions, ItemFieldMetaTransactionConditions],
  [ItemField.HazardousItem, ItemFieldMetaHazardousItem],
  [ItemField.ClassifiedTaxCategory, ItemFieldMetaClassifiedTaxCategory],
  [ItemField.AdditionalItemProperty, ItemFieldMetaAdditionalItemProperty],
  [ItemField.ManufacturerParty, ItemFieldMetaManufacturerParty],
  [ItemField.InformationContentProviderParty, ItemFieldMetaInformationContentProviderParty],
  [ItemField.OriginAddress, ItemFieldMetaOriginAddress],
  [ItemField.ItemInstance, ItemFieldMetaItemInstance],
  [ItemField.Certificate, ItemFieldMetaCertificate],
  [ItemField.Dimension, ItemFieldMetaDimension]
])
