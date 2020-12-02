import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaID = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the line in the catalogue.',
  '1',
  'cbc',
  undefined,
  '1'
)

export const CatalogueLineFieldMetaActionCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ActionCode,
  'ActionCode',
  'Action Code',
  'Code',
  'A code signifying the action required to synchronize this catalogue line. Recommend codes (delete, update, add)',
  '0..1',
  'cbc',
  undefined,
  'Replace , Update , Delete , Add'
)

export const CatalogueLineFieldMetaLifeCycleStatusCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.LifeCycleStatusCode,
  'LifeCycleStatusCode',
  'Life Cycle Status Code',
  'Code',
  'A code signifying the life cycle status of this catalogue line. Examples are pre-order, end of production',
  '0..1',
  'cbc',
  undefined,
  'new - announcement only , new and available , deleted - announcement only'
)

export const CatalogueLineFieldMetaContractSubdivision = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContractSubdivision,
  'ContractSubdivision',
  'Contract Subdivision',
  'Text',
  'A subdivision of a contract or tender covering this catalogue line.',
  '0..1',
  'cbc',
  undefined,
  'Installation , Phase One , Support and Maintenance'
)

export const CatalogueLineFieldMetaNote = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaOrderableIndicator = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderableIndicator,
  'OrderableIndicator',
  'Orderable Indicator',
  'Indicator',
  'An indicator that this catalogue line describes an orderable item (true) or is included for reference purposes only (false).',
  '0..1',
  'cbc',
  undefined,
  'TRUE means orderable, FALSE means not orderable'
)

export const CatalogueLineFieldMetaOrderableUnit = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderableUnit,
  'OrderableUnit',
  'Orderable Unit',
  'Text',
  'A textual description of the units in which the item described in this catalogue line can be ordered.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaContentUnitQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContentUnitQuantity,
  'ContentUnitQuantity',
  'Content Unit',
  'Quantity',
  'The numeric quantity of the ordering unit (and units of measure) of the catalogue line.',
  '0..1',
  'cbc',
  undefined,
  'If order unit measure identifier is each , then content unit quantity is 1 .'
)

export const CatalogueLineFieldMetaOrderQuantityIncrementNumeric = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.OrderQuantityIncrementNumeric,
  'OrderQuantityIncrementNumeric',
  'Order Quantity Increment',
  'Numeric',
  'The number of items that can set the order quantity increments.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaMinimumOrderQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.MinimumOrderQuantity,
  'MinimumOrderQuantity',
  'Minimum Order Quantity',
  'Quantity',
  'The minimum amount of the item described in this catalogue line that can be ordered.',
  '0..1',
  'cbc',
  undefined,
  '10 boxes'
)

export const CatalogueLineFieldMetaMaximumOrderQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.MaximumOrderQuantity,
  'MaximumOrderQuantity',
  'Maximum Order Quantity',
  'Quantity',
  'The maximum amount of the item described in this catalogue line that can be ordered.',
  '0..1',
  'cbc',
  undefined,
  '1 tonne'
)

export const CatalogueLineFieldMetaWarrantyInformation = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyInformation,
  'WarrantyInformation',
  'Warranty Information',
  'Text',
  'Text about a warranty (provided by WarrantyParty) for the good or service described in this catalogue line.',
  '0..n',
  'cbc',
  undefined,
  'Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell warrants to the Customer that Dell branded Products (excluding third party products and software), will be free from defects in materials and workmanship affecting normal use for a period of one year from invoice date ( Standard Warranty ).'
)

export const CatalogueLineFieldMetaPackLevelCode = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.PackLevelCode,
  'PackLevelCode',
  'Pack Level Code',
  'Code',
  'A mutually agreed code signifying the level of packaging associated with the item described in this catalogue line.',
  '0..1',
  'cbc',
  'Consumer Unit, Trading Unit',
  'level 2 , Group 4'
)

export const CatalogueLineFieldMetaContractorCustomerParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ContractorCustomerParty,
  'ContractorCustomerParty',
  'Contractor Customer Party',
  'CustomerParty',
  'The customer responsible for the contract with which this catalogue line is associated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaSellerSupplierParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller/supplier responsible for the contract with which this catalogue line is associated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaWarrantyParty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyParty,
  'WarrantyParty',
  'Warranty Party',
  'Party',
  'The party responsible for any warranty associated with the item described in this catalogue line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaWarrantyValidityPeriod = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  'Period',
  'The period for which a warranty associated with the item in this catalogue line is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaLineValidityPeriod = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.LineValidityPeriod,
  'LineValidityPeriod',
  'Line Validity Period',
  'Period',
  'The period for which the information in this catalogue line is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaItemComparison = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ItemComparison,
  'ItemComparison',
  'Item Comparison',
  'ItemComparison',
  'A combination of price and quantity used to provide price comparisons based on different sizes of order.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaComponentRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ComponentRelatedItem,
  'ComponentRelatedItem',
  'Component Related Item',
  'RelatedItem',
  'An item that may be a component of the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaAccessoryRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.AccessoryRelatedItem,
  'AccessoryRelatedItem',
  'Accessory Related Item',
  'RelatedItem',
  'An item that may be an optional accessory of the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaRequiredRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.RequiredRelatedItem,
  'RequiredRelatedItem',
  'Required Related Item',
  'RelatedItem',
  'An item that may be required for the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaReplacementRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ReplacementRelatedItem,
  'ReplacementRelatedItem',
  'Replacement Related Item',
  'RelatedItem',
  'An item that may be a replacement for the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaComplementaryRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ComplementaryRelatedItem,
  'ComplementaryRelatedItem',
  'Complementary Related Item',
  'RelatedItem',
  'An item that may complement the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaReplacedRelatedItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.ReplacedRelatedItem,
  'ReplacedRelatedItem',
  'Replaced Related Item',
  'RelatedItem',
  'An item in an existing catalogue that is being replaced by the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaRequiredItemLocationQuantity = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.RequiredItemLocationQuantity,
  'RequiredItemLocationQuantity',
  'Required Item Location Quantity',
  'ItemLocationQuantity',
  'Properties of the item in this catalogue line that are dependent on location and quantity.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaDocumentReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document associated with this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaItem = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.Item,
  'Item',
  'Item',
  'Item',
  'A specification of the item itself.',
  '1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaKeywordItemProperty = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.KeywordItemProperty,
  'KeywordItemProperty',
  'Keyword Item Property',
  'ItemProperty',
  'A property of the item in this catalogue line.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaCallForTendersLineReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.CallForTendersLineReference,
  'CallForTendersLineReference',
  'Call For Tenders Line Reference',
  'LineReference',
  'Reference to a Line on a Call For Tenders document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const CatalogueLineFieldMetaCallForTendersDocumentReference = new FieldMeta<CatalogueLineField>(
  CatalogueLineField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Call For Tenders Document Reference',
  'DocumentReference',
  'A class defining references to a Call For Tenders document.',
  '0..1',
  'cac',
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
