import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CertificateType } from './CertificateMeta'
import { CommodityClassificationType } from './CommodityClassificationMeta'
import { CountryType } from './CountryMeta'
import { DimensionType } from './DimensionMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { HazardousItemType } from './HazardousItemMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemIdentificationType } from './ItemIdentificationMeta'
import { ItemInstanceType } from './ItemInstanceMeta'
import { ItemPropertyType } from './ItemPropertyMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { TransactionConditionsType } from './TransactionConditionsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemField {
  UBLExtensions = 'UBLExtensions',
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

export const ItemFieldMetaUBLExtensions = new FieldMeta<ItemField>(
  ItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemFieldMetaDescription = new FieldMeta<ItemField>(
  ItemField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaPackQuantity = new FieldMeta<ItemField>(
  ItemField.PackQuantity,
  'PackQuantity',
  'Pack Quantity',
  QuantityType.name,
  'The unit packaging quantity; the number of subunits making up this item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaPackSizeNumeric = new FieldMeta<ItemField>(
  ItemField.PackSizeNumeric,
  'PackSizeNumeric',
  'Pack Size',
  NumericType.name,
  'The number of items in a pack of this item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueIndicator = new FieldMeta<ItemField>(
  ItemField.CatalogueIndicator,
  'CatalogueIndicator',
  'Catalogue Indicator',
  IndicatorType.name,
  'An indicator that this item was ordered from a catalogue (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaName = new FieldMeta<ItemField>(
  ItemField.Name,
  'Name',
  'Name',
  TextType.name,
  'A short name optionally given to this item, such as a name from a catalogue, as distinct from a description.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaHazardousRiskIndicator = new FieldMeta<ItemField>(
  ItemField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  IndicatorType.name,
  'An indication that the transported item, as delivered, is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Default is negative'
)

export const ItemFieldMetaAdditionalInformation = new FieldMeta<ItemField>(
  ItemField.AdditionalInformation,
  'AdditionalInformation',
  'Additional Information',
  TextType.name,
  'Further details regarding this item (e.g., the URL of a relevant web page).',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaKeyword = new FieldMeta<ItemField>(
  ItemField.Keyword,
  'Keyword',
  'Keyword',
  TextType.name,
  'A keyword (search string) for this item, assigned by the seller party. Can also be a synonym for the name of the item.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemFieldMetaBrandName = new FieldMeta<ItemField>(
  ItemField.BrandName,
  'BrandName',
  'Brand Name',
  TextType.name,
  'A brand name of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Coca-Cola'
)

export const ItemFieldMetaModelName = new FieldMeta<ItemField>(
  ItemField.ModelName,
  'ModelName',
  'Model Name',
  TextType.name,
  'A model name of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'VW Beetle'
)

export const ItemFieldMetaBuyersItemIdentification = new FieldMeta<ItemField>(
  ItemField.BuyersItemIdentification,
  'BuyersItemIdentification',
  'Buyers Item Identification',
  ItemIdentificationType.name,
  'Identifying information for this item, assigned by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaSellersItemIdentification = new FieldMeta<ItemField>(
  ItemField.SellersItemIdentification,
  'SellersItemIdentification',
  'Sellers Item Identification',
  ItemIdentificationType.name,
  'Identifying information for this item, assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaManufacturersItemIdentification = new FieldMeta<ItemField>(
  ItemField.ManufacturersItemIdentification,
  'ManufacturersItemIdentification',
  'Manufacturers Item Identification',
  ItemIdentificationType.name,
  'Identifying information for this item, assigned by the manufacturer.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaStandardItemIdentification = new FieldMeta<ItemField>(
  ItemField.StandardItemIdentification,
  'StandardItemIdentification',
  'Standard Item Identification',
  ItemIdentificationType.name,
  'Identifying information for this item, assigned according to a standard system.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueItemIdentification = new FieldMeta<ItemField>(
  ItemField.CatalogueItemIdentification,
  'CatalogueItemIdentification',
  'Catalogue Item Identification',
  ItemIdentificationType.name,
  'Identifying information for this item, assigned according to a cataloguing system.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaAdditionalItemIdentification = new FieldMeta<ItemField>(
  ItemField.AdditionalItemIdentification,
  'AdditionalItemIdentification',
  'Additional Item Identification',
  ItemIdentificationType.name,
  'An additional identifier for this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaCatalogueDocumentReference = new FieldMeta<ItemField>(
  ItemField.CatalogueDocumentReference,
  'CatalogueDocumentReference',
  'Catalogue Document Reference',
  DocumentReferenceType.name,
  'A reference to the catalogue in which this item appears.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaItemSpecificationDocumentReference = new FieldMeta<ItemField>(
  ItemField.ItemSpecificationDocumentReference,
  'ItemSpecificationDocumentReference',
  'Item Specification Document Reference',
  DocumentReferenceType.name,
  'A reference to a specification document for this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaOriginCountry = new FieldMeta<ItemField>(
  ItemField.OriginCountry,
  'OriginCountry',
  'Origin Country',
  CountryType.name,
  'The country of origin of this item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaCommodityClassification = new FieldMeta<ItemField>(
  ItemField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  CommodityClassificationType.name,
  'A classification of this item according to a specific system for classifying commodities.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaTransactionConditions = new FieldMeta<ItemField>(
  ItemField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  TransactionConditionsType.name,
  'A set of sales conditions applying to this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaHazardousItem = new FieldMeta<ItemField>(
  ItemField.HazardousItem,
  'HazardousItem',
  'Hazardous Item',
  HazardousItemType.name,
  'Information pertaining to this item as a hazardous item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaClassifiedTaxCategory = new FieldMeta<ItemField>(
  ItemField.ClassifiedTaxCategory,
  'ClassifiedTaxCategory',
  'Classified Tax Category',
  TaxCategoryType.name,
  'A tax category applicable to this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaAdditionalItemProperty = new FieldMeta<ItemField>(
  ItemField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Additional Item Property',
  ItemPropertyType.name,
  'An additional property of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaManufacturerParty = new FieldMeta<ItemField>(
  ItemField.ManufacturerParty,
  'ManufacturerParty',
  'Manufacturer Party',
  PartyType.name,
  'The manufacturer of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaInformationContentProviderParty = new FieldMeta<ItemField>(
  ItemField.InformationContentProviderParty,
  'InformationContentProviderParty',
  'Information Content Provider Party',
  PartyType.name,
  'The party responsible for specification of this item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaOriginAddress = new FieldMeta<ItemField>(
  ItemField.OriginAddress,
  'OriginAddress',
  'Origin Address',
  AddressType.name,
  'A region (not country) of origin of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaItemInstance = new FieldMeta<ItemField>(
  ItemField.ItemInstance,
  'ItemInstance',
  'Item Instance',
  ItemInstanceType.name,
  'A trackable, unique instantiation of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaCertificate = new FieldMeta<ItemField>(
  ItemField.Certificate,
  'Certificate',
  'Certificate',
  CertificateType.name,
  'A certificate associated with this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemFieldMetaDimension = new FieldMeta<ItemField>(
  ItemField.Dimension,
  'Dimension',
  'Dimension',
  DimensionType.name,
  'One of the measurable dimensions (length, mass, weight, or volume) of this item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ItemFieldMeta {
  public static readonly UBLExtensions = ItemFieldMetaUBLExtensions
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
  [ItemField.UBLExtensions, ItemFieldMetaUBLExtensions],
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

export const ItemType: Type<ItemField> = {
  name: 'Item',
  label: 'Item',
  module: TypeModule.cac,
  definition: 'A class to describe an item of trade. It includes a generic description applicable to all examples of the item together with optional subsidiary descriptions of any number of actual instances of the type.',
  fields: ItemFieldMap,
}
