import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { LineReferenceType } from './LineReferenceMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { RelatedItemType } from './RelatedItemMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Quantity = 'Quantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  TotalTaxAmount = 'TotalTaxAmount',
  OrderableUnit = 'OrderableUnit',
  ContentUnitQuantity = 'ContentUnitQuantity',
  OrderQuantityIncrementNumeric = 'OrderQuantityIncrementNumeric',
  MinimumOrderQuantity = 'MinimumOrderQuantity',
  MaximumOrderQuantity = 'MaximumOrderQuantity',
  WarrantyInformation = 'WarrantyInformation',
  PackLevelCode = 'PackLevelCode',
  DocumentReference = 'DocumentReference',
  Item = 'Item',
  OfferedItemLocationQuantity = 'OfferedItemLocationQuantity',
  ReplacementRelatedItem = 'ReplacementRelatedItem',
  WarrantyParty = 'WarrantyParty',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  SubTenderLine = 'SubTenderLine',
  CallForTendersLineReference = 'CallForTendersLineReference',
  CallForTendersDocumentReference = 'CallForTendersDocumentReference'
}

export const TenderLineFieldMetaUBLExtensions = new FieldMeta<TenderLineField>(
  TenderLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderLineFieldMetaID = new FieldMeta<TenderLineField>(
  TenderLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaNote = new FieldMeta<TenderLineField>(
  TenderLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of the item quoted in this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaLineExtensionAmount = new FieldMeta<TenderLineField>(
  TenderLineField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'The total amount for this tender line, including allowance charges but net of taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<TenderLineField>(
  TenderLineField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  AmountType.name,
  'The total amount for this tender line, including all allowances, charges and taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaTotalTaxAmount = new FieldMeta<TenderLineField>(
  TenderLineField.TotalTaxAmount,
  'TotalTaxAmount',
  'Total Tax Amount',
  AmountType.name,
  'The total tax amount for this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaOrderableUnit = new FieldMeta<TenderLineField>(
  TenderLineField.OrderableUnit,
  'OrderableUnit',
  'Orderable Unit',
  TextType.name,
  'Text describing a unit in which the item described in this tender line can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaContentUnitQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.ContentUnitQuantity,
  'ContentUnitQuantity',
  'Content Unit',
  QuantityType.name,
  'The unit of measure and quantity of the orderable unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'If order unit measure identifier is each , then content unit quantity is 1 .'
)

export const TenderLineFieldMetaOrderQuantityIncrementNumeric = new FieldMeta<TenderLineField>(
  TenderLineField.OrderQuantityIncrementNumeric,
  'OrderQuantityIncrementNumeric',
  'Order Quantity Increment',
  NumericType.name,
  'The number of items that can set the order quantity increments.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderLineFieldMetaMinimumOrderQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.MinimumOrderQuantity,
  'MinimumOrderQuantity',
  'Minimum Order Quantity',
  QuantityType.name,
  'The minimum number of items described in this tender line that can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '10 boxes'
)

export const TenderLineFieldMetaMaximumOrderQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.MaximumOrderQuantity,
  'MaximumOrderQuantity',
  'Maximum Order Quantity',
  QuantityType.name,
  'The maximum number of items described in this tender line that can be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1 tonne'
)

export const TenderLineFieldMetaWarrantyInformation = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyInformation,
  'WarrantyInformation',
  'Warranty Information',
  TextType.name,
  'Text about a warranty (provided by WarrantyParty) for the good or service described in this tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell warrants to the Customer that Dell branded Products (excluding third party products and software), will be free from defects in materials and workmanship affecting normal use for a period of one year from invoice date ( Standard Warranty ).'
)

export const TenderLineFieldMetaPackLevelCode = new FieldMeta<TenderLineField>(
  TenderLineField.PackLevelCode,
  'PackLevelCode',
  'Pack Level Code',
  CodeType.name,
  'A mutually agreed code signifying the level of packaging associated with the item described in this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Consumer Unit, Trading Unit',
  'level 2 , Group 4'
)

export const TenderLineFieldMetaDocumentReference = new FieldMeta<TenderLineField>(
  TenderLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to a document associated with this tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaItem = new FieldMeta<TenderLineField>(
  TenderLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaOfferedItemLocationQuantity = new FieldMeta<TenderLineField>(
  TenderLineField.OfferedItemLocationQuantity,
  'OfferedItemLocationQuantity',
  'Offered Item Location Quantity',
  ItemLocationQuantityType.name,
  'A set of location-specific properties (e.g., price, quantity, lead time) associated with the item described in this tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaReplacementRelatedItem = new FieldMeta<TenderLineField>(
  TenderLineField.ReplacementRelatedItem,
  'ReplacementRelatedItem',
  'Replacement Related Item',
  RelatedItemType.name,
  'A catalogue item that may be a replacement for the item described in this tender line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaWarrantyParty = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyParty,
  'WarrantyParty',
  'Warranty Party',
  PartyType.name,
  'The party responsible for any warranty described in this tender line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaWarrantyValidityPeriod = new FieldMeta<TenderLineField>(
  TenderLineField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  PeriodType.name,
  'The period for which a warranty associated with the item described in this tender line is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaSubTenderLine = new FieldMeta<TenderLineField>(
  TenderLineField.SubTenderLine,
  'SubTenderLine',
  'Sub Tender Line',
  TenderLineType.name,
  'An association to a Sub Tender Line',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaCallForTendersLineReference = new FieldMeta<TenderLineField>(
  TenderLineField.CallForTendersLineReference,
  'CallForTendersLineReference',
  'Call For Tenders Line Reference',
  LineReferenceType.name,
  'Reference to a Line on a Call For Tenders document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderLineFieldMetaCallForTendersDocumentReference = new FieldMeta<TenderLineField>(
  TenderLineField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Call For Tenders Document Reference',
  DocumentReferenceType.name,
  'A class defining references to a Call For Tenders document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderLineFieldMeta {
  public static readonly UBLExtensions = TenderLineFieldMetaUBLExtensions
  public static readonly ID = TenderLineFieldMetaID
  public static readonly Note = TenderLineFieldMetaNote
  public static readonly Quantity = TenderLineFieldMetaQuantity
  public static readonly LineExtensionAmount = TenderLineFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = TenderLineFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly TotalTaxAmount = TenderLineFieldMetaTotalTaxAmount
  public static readonly OrderableUnit = TenderLineFieldMetaOrderableUnit
  public static readonly ContentUnitQuantity = TenderLineFieldMetaContentUnitQuantity
  public static readonly OrderQuantityIncrementNumeric = TenderLineFieldMetaOrderQuantityIncrementNumeric
  public static readonly MinimumOrderQuantity = TenderLineFieldMetaMinimumOrderQuantity
  public static readonly MaximumOrderQuantity = TenderLineFieldMetaMaximumOrderQuantity
  public static readonly WarrantyInformation = TenderLineFieldMetaWarrantyInformation
  public static readonly PackLevelCode = TenderLineFieldMetaPackLevelCode
  public static readonly DocumentReference = TenderLineFieldMetaDocumentReference
  public static readonly Item = TenderLineFieldMetaItem
  public static readonly OfferedItemLocationQuantity = TenderLineFieldMetaOfferedItemLocationQuantity
  public static readonly ReplacementRelatedItem = TenderLineFieldMetaReplacementRelatedItem
  public static readonly WarrantyParty = TenderLineFieldMetaWarrantyParty
  public static readonly WarrantyValidityPeriod = TenderLineFieldMetaWarrantyValidityPeriod
  public static readonly SubTenderLine = TenderLineFieldMetaSubTenderLine
  public static readonly CallForTendersLineReference = TenderLineFieldMetaCallForTendersLineReference
  public static readonly CallForTendersDocumentReference = TenderLineFieldMetaCallForTendersDocumentReference
}

export const TenderLineFieldMap = new Map([
  [TenderLineField.UBLExtensions, TenderLineFieldMetaUBLExtensions],
  [TenderLineField.ID, TenderLineFieldMetaID],
  [TenderLineField.Note, TenderLineFieldMetaNote],
  [TenderLineField.Quantity, TenderLineFieldMetaQuantity],
  [TenderLineField.LineExtensionAmount, TenderLineFieldMetaLineExtensionAmount],
  [TenderLineField.TaxInclusiveLineExtensionAmount, TenderLineFieldMetaTaxInclusiveLineExtensionAmount],
  [TenderLineField.TotalTaxAmount, TenderLineFieldMetaTotalTaxAmount],
  [TenderLineField.OrderableUnit, TenderLineFieldMetaOrderableUnit],
  [TenderLineField.ContentUnitQuantity, TenderLineFieldMetaContentUnitQuantity],
  [TenderLineField.OrderQuantityIncrementNumeric, TenderLineFieldMetaOrderQuantityIncrementNumeric],
  [TenderLineField.MinimumOrderQuantity, TenderLineFieldMetaMinimumOrderQuantity],
  [TenderLineField.MaximumOrderQuantity, TenderLineFieldMetaMaximumOrderQuantity],
  [TenderLineField.WarrantyInformation, TenderLineFieldMetaWarrantyInformation],
  [TenderLineField.PackLevelCode, TenderLineFieldMetaPackLevelCode],
  [TenderLineField.DocumentReference, TenderLineFieldMetaDocumentReference],
  [TenderLineField.Item, TenderLineFieldMetaItem],
  [TenderLineField.OfferedItemLocationQuantity, TenderLineFieldMetaOfferedItemLocationQuantity],
  [TenderLineField.ReplacementRelatedItem, TenderLineFieldMetaReplacementRelatedItem],
  [TenderLineField.WarrantyParty, TenderLineFieldMetaWarrantyParty],
  [TenderLineField.WarrantyValidityPeriod, TenderLineFieldMetaWarrantyValidityPeriod],
  [TenderLineField.SubTenderLine, TenderLineFieldMetaSubTenderLine],
  [TenderLineField.CallForTendersLineReference, TenderLineFieldMetaCallForTendersLineReference],
  [TenderLineField.CallForTendersDocumentReference, TenderLineFieldMetaCallForTendersDocumentReference]
])

export const TenderLineType: Type<TenderLineField> = {
  name: 'TenderLine',
  label: 'Tender Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Tender.',
  fields: TenderLineFieldMap,
}
