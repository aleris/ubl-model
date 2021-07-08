import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from './CustomerPartyMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemType } from './ItemMeta'
import { ItemComparisonType } from './ItemComparisonMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { ItemPropertyType } from './ItemPropertyMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { RelatedItemType } from './RelatedItemMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CatalogueLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ActionCode = 'ActionCode',
  LifeCycleStatusCode = 'LifeCycleStatusCode',
  ContractSubdivision = 'ContractSubdivision',
  Note = 'Note',
  OrderableIndicator = 'OrderableIndicator',
  OrderableUnit = 'OrderableUnit',
  ContentUnitQuantity = 'ContentUnitQuantity',
  OrderQuantityIncrementNumeric = 'OrderQuantityIncrementNumeric',
  MinimumOrderQuantity = 'MinimumOrderQuantity',
  MaximumOrderQuantity = 'MaximumOrderQuantity',
  WarrantyInformation = 'WarrantyInformation',
  PackLevelCode = 'PackLevelCode',
  ContractorCustomerParty = 'ContractorCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  WarrantyParty = 'WarrantyParty',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  LineValidityPeriod = 'LineValidityPeriod',
  ItemComparison = 'ItemComparison',
  ComponentRelatedItem = 'ComponentRelatedItem',
  AccessoryRelatedItem = 'AccessoryRelatedItem',
  RequiredRelatedItem = 'RequiredRelatedItem',
  ReplacementRelatedItem = 'ReplacementRelatedItem',
  ComplementaryRelatedItem = 'ComplementaryRelatedItem',
  ReplacedRelatedItem = 'ReplacedRelatedItem',
  RequiredItemLocationQuantity = 'RequiredItemLocationQuantity',
  DocumentReference = 'DocumentReference',
  Item = 'Item',
  KeywordItemProperty = 'KeywordItemProperty',
  CallForTendersLineReference = 'CallForTendersLineReference',
  CallForTendersDocumentReference = 'CallForTendersDocumentReference'
}

export const CatalogueLineFieldMetaUBLExtensions = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaID = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the line in the catalogue.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const CatalogueLineFieldMetaActionCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ActionCode,
  'ActionCode',
  'Action Code',
  CodeType.name,
  'A code signifying the action required to synchronize this catalogue line. Recommend codes (delete, update, add)',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Replace , Update , Delete , Add'
)

export const CatalogueLineFieldMetaLifeCycleStatusCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.LifeCycleStatusCode,
  'LifeCycleStatusCode',
  'Life Cycle Status Code',
  CodeType.name,
  'A code signifying the life cycle status of this catalogue line. Examples are pre-order, end of production',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'new - announcement only , new and available , deleted - announcement only'
)

export const CatalogueLineFieldMetaContractSubdivision = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContractSubdivision,
  'ContractSubdivision',
  'Contract Subdivision',
  TextType.name,
  'A subdivision of a contract or tender covering this catalogue line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Installation , Phase One , Support and Maintenance'
)

export const CatalogueLineFieldMetaNote = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaOrderableIndicator = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderableIndicator,
  'OrderableIndicator',
  'Orderable Indicator',
  IndicatorType.name,
  'An indicator that this catalogue line describes an orderable item (true) or is included for reference purposes only (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'TRUE means orderable, FALSE means not orderable'
)

export const CatalogueLineFieldMetaOrderableUnit = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderableUnit,
  'OrderableUnit',
  'Orderable Unit',
  TextType.name,
  'A textual description of the units in which the item described in this catalogue line can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaContentUnitQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContentUnitQuantity,
  'ContentUnitQuantity',
  'Content Unit',
  QuantityType.name,
  'The numeric quantity of the ordering unit (and units of measure) of the catalogue line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'If order unit measure identifier is each , then content unit quantity is 1 .'
)

export const CatalogueLineFieldMetaOrderQuantityIncrementNumeric = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderQuantityIncrementNumeric,
  'OrderQuantityIncrementNumeric',
  'Order Quantity Increment',
  NumericType.name,
  'The number of items that can set the order quantity increments.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaMinimumOrderQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.MinimumOrderQuantity,
  'MinimumOrderQuantity',
  'Minimum Order Quantity',
  QuantityType.name,
  'The minimum amount of the item described in this catalogue line that can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '10 boxes'
)

export const CatalogueLineFieldMetaMaximumOrderQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.MaximumOrderQuantity,
  'MaximumOrderQuantity',
  'Maximum Order Quantity',
  QuantityType.name,
  'The maximum amount of the item described in this catalogue line that can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1 tonne'
)

export const CatalogueLineFieldMetaWarrantyInformation = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyInformation,
  'WarrantyInformation',
  'Warranty Information',
  TextType.name,
  'Text about a warranty (provided by WarrantyParty) for the good or service described in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell warrants to the Customer that Dell branded Products (excluding third party products and software), will be free from defects in materials and workmanship affecting normal use for a period of one year from invoice date ( Standard Warranty ).'
)

export const CatalogueLineFieldMetaPackLevelCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.PackLevelCode,
  'PackLevelCode',
  'Pack Level Code',
  CodeType.name,
  'A mutually agreed code signifying the level of packaging associated with the item described in this catalogue line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Consumer Unit, Trading Unit',
  'level 2 , Group 4'
)

export const CatalogueLineFieldMetaContractorCustomerParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  CustomerPartyType.name,
  'The customer responsible for the contract with which this catalogue line is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaSellerSupplierParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller/supplier responsible for the contract with which this catalogue line is associated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaWarrantyParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyParty,
  'WarrantyParty',
  'Warranty Party',
  PartyType.name,
  'The party responsible for any warranty associated with the item described in this catalogue line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaWarrantyValidityPeriod = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  PeriodType.name,
  'The period for which a warranty associated with the item in this catalogue line is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaLineValidityPeriod = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.LineValidityPeriod,
  'LineValidityPeriod',
  'Line Validity Period',
  PeriodType.name,
  'The period for which the information in this catalogue line is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaItemComparison = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ItemComparison,
  'ItemComparison',
  'Item Comparison',
  ItemComparisonType.name,
  'A combination of price and quantity used to provide price comparisons based on different sizes of order.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaComponentRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ComponentRelatedItem,
  'ComponentRelatedItem',
  'Component Related Item',
  RelatedItemType.name,
  'An item that may be a component of the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaAccessoryRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.AccessoryRelatedItem,
  'AccessoryRelatedItem',
  'Accessory Related Item',
  RelatedItemType.name,
  'An item that may be an optional accessory of the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaRequiredRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.RequiredRelatedItem,
  'RequiredRelatedItem',
  'Required Related Item',
  RelatedItemType.name,
  'An item that may be required for the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaReplacementRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ReplacementRelatedItem,
  'ReplacementRelatedItem',
  'Replacement Related Item',
  RelatedItemType.name,
  'An item that may be a replacement for the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaComplementaryRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ComplementaryRelatedItem,
  'ComplementaryRelatedItem',
  'Complementary Related Item',
  RelatedItemType.name,
  'An item that may complement the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaReplacedRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ReplacedRelatedItem,
  'ReplacedRelatedItem',
  'Replaced Related Item',
  RelatedItemType.name,
  'An item in an existing catalogue that is being replaced by the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  ItemLocationQuantityType.name,
  'Properties of the item in this catalogue line that are dependent on location and quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaDocumentReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'A specification of the item itself.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaKeywordItemProperty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.KeywordItemProperty,
  'KeywordItemProperty',
  'Keyword Item Property',
  ItemPropertyType.name,
  'A property of the item in this catalogue line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaCallForTendersLineReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.CallForTendersLineReference,
  'CallForTendersLineReference',
  'Call For Tenders Line Reference',
  LineReferenceType.name,
  'Reference to a Line on a Call For Tenders document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CatalogueLineFieldMetaCallForTendersDocumentReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Call For Tenders Document Reference',
  DocumentReferenceType.name,
  'A class defining references to a Call For Tenders document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CatalogueLineFieldMeta {
  public static readonly UBLExtensions = CatalogueLineFieldMetaUBLExtensions
  public static readonly ID = CatalogueLineFieldMetaID
  public static readonly ActionCode = CatalogueLineFieldMetaActionCode
  public static readonly LifeCycleStatusCode = CatalogueLineFieldMetaLifeCycleStatusCode
  public static readonly ContractSubdivision = CatalogueLineFieldMetaContractSubdivision
  public static readonly Note = CatalogueLineFieldMetaNote
  public static readonly OrderableIndicator = CatalogueLineFieldMetaOrderableIndicator
  public static readonly OrderableUnit = CatalogueLineFieldMetaOrderableUnit
  public static readonly ContentUnitQuantity = CatalogueLineFieldMetaContentUnitQuantity
  public static readonly OrderQuantityIncrementNumeric = CatalogueLineFieldMetaOrderQuantityIncrementNumeric
  public static readonly MinimumOrderQuantity = CatalogueLineFieldMetaMinimumOrderQuantity
  public static readonly MaximumOrderQuantity = CatalogueLineFieldMetaMaximumOrderQuantity
  public static readonly WarrantyInformation = CatalogueLineFieldMetaWarrantyInformation
  public static readonly PackLevelCode = CatalogueLineFieldMetaPackLevelCode
  public static readonly ContractorCustomerParty = CatalogueLineFieldMetaContractorCustomerParty
  public static readonly SellerSupplierParty = CatalogueLineFieldMetaSellerSupplierParty
  public static readonly WarrantyParty = CatalogueLineFieldMetaWarrantyParty
  public static readonly WarrantyValidityPeriod = CatalogueLineFieldMetaWarrantyValidityPeriod
  public static readonly LineValidityPeriod = CatalogueLineFieldMetaLineValidityPeriod
  public static readonly ItemComparison = CatalogueLineFieldMetaItemComparison
  public static readonly ComponentRelatedItem = CatalogueLineFieldMetaComponentRelatedItem
  public static readonly AccessoryRelatedItem = CatalogueLineFieldMetaAccessoryRelatedItem
  public static readonly RequiredRelatedItem = CatalogueLineFieldMetaRequiredRelatedItem
  public static readonly ReplacementRelatedItem = CatalogueLineFieldMetaReplacementRelatedItem
  public static readonly ComplementaryRelatedItem = CatalogueLineFieldMetaComplementaryRelatedItem
  public static readonly ReplacedRelatedItem = CatalogueLineFieldMetaReplacedRelatedItem
  public static readonly RequiredItemLocationQuantity = CatalogueLineFieldMetaRequiredItemLocationQuantity
  public static readonly DocumentReference = CatalogueLineFieldMetaDocumentReference
  public static readonly Item = CatalogueLineFieldMetaItem
  public static readonly KeywordItemProperty = CatalogueLineFieldMetaKeywordItemProperty
  public static readonly CallForTendersLineReference = CatalogueLineFieldMetaCallForTendersLineReference
  public static readonly CallForTendersDocumentReference = CatalogueLineFieldMetaCallForTendersDocumentReference
}

export const CatalogueLineFieldMap = new Map([
  [CatalogueLineField.UBLExtensions, CatalogueLineFieldMetaUBLExtensions],
  [CatalogueLineField.ID, CatalogueLineFieldMetaID],
  [CatalogueLineField.ActionCode, CatalogueLineFieldMetaActionCode],
  [CatalogueLineField.LifeCycleStatusCode, CatalogueLineFieldMetaLifeCycleStatusCode],
  [CatalogueLineField.ContractSubdivision, CatalogueLineFieldMetaContractSubdivision],
  [CatalogueLineField.Note, CatalogueLineFieldMetaNote],
  [CatalogueLineField.OrderableIndicator, CatalogueLineFieldMetaOrderableIndicator],
  [CatalogueLineField.OrderableUnit, CatalogueLineFieldMetaOrderableUnit],
  [CatalogueLineField.ContentUnitQuantity, CatalogueLineFieldMetaContentUnitQuantity],
  [CatalogueLineField.OrderQuantityIncrementNumeric, CatalogueLineFieldMetaOrderQuantityIncrementNumeric],
  [CatalogueLineField.MinimumOrderQuantity, CatalogueLineFieldMetaMinimumOrderQuantity],
  [CatalogueLineField.MaximumOrderQuantity, CatalogueLineFieldMetaMaximumOrderQuantity],
  [CatalogueLineField.WarrantyInformation, CatalogueLineFieldMetaWarrantyInformation],
  [CatalogueLineField.PackLevelCode, CatalogueLineFieldMetaPackLevelCode],
  [CatalogueLineField.ContractorCustomerParty, CatalogueLineFieldMetaContractorCustomerParty],
  [CatalogueLineField.SellerSupplierParty, CatalogueLineFieldMetaSellerSupplierParty],
  [CatalogueLineField.WarrantyParty, CatalogueLineFieldMetaWarrantyParty],
  [CatalogueLineField.WarrantyValidityPeriod, CatalogueLineFieldMetaWarrantyValidityPeriod],
  [CatalogueLineField.LineValidityPeriod, CatalogueLineFieldMetaLineValidityPeriod],
  [CatalogueLineField.ItemComparison, CatalogueLineFieldMetaItemComparison],
  [CatalogueLineField.ComponentRelatedItem, CatalogueLineFieldMetaComponentRelatedItem],
  [CatalogueLineField.AccessoryRelatedItem, CatalogueLineFieldMetaAccessoryRelatedItem],
  [CatalogueLineField.RequiredRelatedItem, CatalogueLineFieldMetaRequiredRelatedItem],
  [CatalogueLineField.ReplacementRelatedItem, CatalogueLineFieldMetaReplacementRelatedItem],
  [CatalogueLineField.ComplementaryRelatedItem, CatalogueLineFieldMetaComplementaryRelatedItem],
  [CatalogueLineField.ReplacedRelatedItem, CatalogueLineFieldMetaReplacedRelatedItem],
  [CatalogueLineField.RequiredItemLocationQuantity, CatalogueLineFieldMetaRequiredItemLocationQuantity],
  [CatalogueLineField.DocumentReference, CatalogueLineFieldMetaDocumentReference],
  [CatalogueLineField.Item, CatalogueLineFieldMetaItem],
  [CatalogueLineField.KeywordItemProperty, CatalogueLineFieldMetaKeywordItemProperty],
  [CatalogueLineField.CallForTendersLineReference, CatalogueLineFieldMetaCallForTendersLineReference],
  [CatalogueLineField.CallForTendersDocumentReference, CatalogueLineFieldMetaCallForTendersDocumentReference]
])

export const CatalogueLineType: Type<CatalogueLineField> = {
  name: 'CatalogueLine',
  label: 'Catalogue Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Catalogue describing a purchasable item.',
  fields: CatalogueLineFieldMap,
}
