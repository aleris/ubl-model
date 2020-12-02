import { FieldMeta } from '../FieldMeta'

export enum LineItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SalesOrderID = 'SalesOrderID',
  UUID = 'UUID',
  Note = 'Note',
  LineStatusCode = 'LineStatusCode',
  Quantity = 'Quantity',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxInclusiveLineExtensionAmount = 'TaxInclusiveLineExtensionAmount',
  TotalTaxAmount = 'TotalTaxAmount',
  MinimumQuantity = 'MinimumQuantity',
  MaximumQuantity = 'MaximumQuantity',
  MinimumBackorderQuantity = 'MinimumBackorderQuantity',
  MaximumBackorderQuantity = 'MaximumBackorderQuantity',
  InspectionMethodCode = 'InspectionMethodCode',
  PartialDeliveryIndicator = 'PartialDeliveryIndicator',
  BackOrderAllowedIndicator = 'BackOrderAllowedIndicator',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  WarrantyInformation = 'WarrantyInformation',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  OriginatorParty = 'OriginatorParty',
  OrderedShipment = 'OrderedShipment',
  PricingReference = 'PricingReference',
  AllowanceCharge = 'AllowanceCharge',
  Price = 'Price',
  Item = 'Item',
  SubLineItem = 'SubLineItem',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  WarrantyParty = 'WarrantyParty',
  TaxTotal = 'TaxTotal',
  ItemPriceExtension = 'ItemPriceExtension',
  LineReference = 'LineReference'
}

export const LineItemFieldMetaUBLExtensions = new FieldMeta<LineItemField>(
  LineItemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LineItemFieldMetaID = new FieldMeta<LineItemField>(
  LineItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this line item, assigned by the buyer.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaSalesOrderID = new FieldMeta<LineItemField>(
  LineItemField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  'Identifier',
  'An identifier for this line item, assigned by the seller.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaUUID = new FieldMeta<LineItemField>(
  LineItemField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this line item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaNote = new FieldMeta<LineItemField>(
  LineItemField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaLineStatusCode = new FieldMeta<LineItemField>(
  LineItemField.LineStatusCode,
  'LineStatusCode',
  'Line Status Code',
  'Code',
  'A code signifying the status of this line item with respect to its original state.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaQuantity = new FieldMeta<LineItemField>(
  LineItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of items associated with this line item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaLineExtensionAmount = new FieldMeta<LineItemField>(
  LineItemField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The total amount for this line item, including allowance charges but net of taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaTaxInclusiveLineExtensionAmount = new FieldMeta<LineItemField>(
  LineItemField.TaxInclusiveLineExtensionAmount,
  'TaxInclusiveLineExtensionAmount',
  'Tax Inclusive Line Extension Amount',
  'Amount',
  'The total amount for this line item, including all allowances, charges and taxes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaTotalTaxAmount = new FieldMeta<LineItemField>(
  LineItemField.TotalTaxAmount,
  'TotalTaxAmount',
  'Total Tax Amount',
  'Amount',
  'The total tax amount for this line item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaMinimumQuantity = new FieldMeta<LineItemField>(
  LineItemField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  'Quantity',
  'The minimum quantity of the item associated with this line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaMaximumQuantity = new FieldMeta<LineItemField>(
  LineItemField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  'Quantity',
  'The maximum quantity of the item associated with this line.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaMinimumBackorderQuantity = new FieldMeta<LineItemField>(
  LineItemField.MinimumBackorderQuantity,
  'MinimumBackorderQuantity',
  'Minimum Backorder',
  'Quantity',
  'The minimum back order quantity of the item associated with this line (where back order is allowed).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaMaximumBackorderQuantity = new FieldMeta<LineItemField>(
  LineItemField.MaximumBackorderQuantity,
  'MaximumBackorderQuantity',
  'Maximum Backorder',
  'Quantity',
  'The maximum back order quantity of the item associated with this line (where back order is allowed).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaInspectionMethodCode = new FieldMeta<LineItemField>(
  LineItemField.InspectionMethodCode,
  'InspectionMethodCode',
  'Inspection Method Code',
  'Code',
  'A code signifying the inspection requirements for the item associated with this line item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaPartialDeliveryIndicator = new FieldMeta<LineItemField>(
  LineItemField.PartialDeliveryIndicator,
  'PartialDeliveryIndicator',
  'Partial Delivery Indicator',
  'Indicator',
  'An indicator that a partial delivery is allowed (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaBackOrderAllowedIndicator = new FieldMeta<LineItemField>(
  LineItemField.BackOrderAllowedIndicator,
  'BackOrderAllowedIndicator',
  'Back Order Allowed Indicator',
  'Indicator',
  'An indicator that back order is allowed (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaAccountingCostCode = new FieldMeta<LineItemField>(
  LineItemField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting cost centre for this line item, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaAccountingCost = new FieldMeta<LineItemField>(
  LineItemField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre for this line item, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LineItemFieldMetaWarrantyInformation = new FieldMeta<LineItemField>(
  LineItemField.WarrantyInformation,
  'WarrantyInformation',
  'Warranty Information',
  'Text',
  'Text describing a warranty (provided by WarrantyParty) for the good or service described in this line item.',
  '0..n',
  'cbc',
  undefined,
  'Unless specified otherwise and in addition to any rights the Customer may have under statute, Dell warrants to the Customer that Dell branded Products (excluding third party products and software), will be free from defects in materials and workmanship affecting normal use for a period of one year from invoice date ( Standard Warranty ).'
)

export const LineItemFieldMetaDelivery = new FieldMeta<LineItemField>(
  LineItemField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this line item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaDeliveryTerms = new FieldMeta<LineItemField>(
  LineItemField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'Terms and conditions of the delivery associated with this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaOriginatorParty = new FieldMeta<LineItemField>(
  LineItemField.OriginatorParty,
  'OriginatorParty',
  'Originator Party',
  'Party',
  'The party who originated the Order associated with this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaOrderedShipment = new FieldMeta<LineItemField>(
  LineItemField.OrderedShipment,
  'OrderedShipment',
  'Ordered Shipment',
  'OrderedShipment',
  'An ordered shipment associated with this line item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaPricingReference = new FieldMeta<LineItemField>(
  LineItemField.PricingReference,
  'PricingReference',
  'Pricing Reference',
  'PricingReference',
  'A reference to pricing and item location information associated with this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaAllowanceCharge = new FieldMeta<LineItemField>(
  LineItemField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this line item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaPrice = new FieldMeta<LineItemField>(
  LineItemField.Price,
  'Price',
  'Price',
  'Price',
  'The price of the item of trade associated with this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaItem = new FieldMeta<LineItemField>(
  LineItemField.Item,
  'Item',
  'Item',
  'Item',
  'The item of trade associated with this line item.',
  '1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaSubLineItem = new FieldMeta<LineItemField>(
  LineItemField.SubLineItem,
  'SubLineItem',
  'Sub Line Item',
  'LineItem',
  'The subsidiary line items that constitute the main line item, such as in a bill of materials.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaWarrantyValidityPeriod = new FieldMeta<LineItemField>(
  LineItemField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  'Period',
  'The period during which the warranty associated with this line item is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaWarrantyParty = new FieldMeta<LineItemField>(
  LineItemField.WarrantyParty,
  'WarrantyParty',
  'Warranty Party',
  'Party',
  'The party responsible for any warranty associated with this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaTaxTotal = new FieldMeta<LineItemField>(
  LineItemField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaItemPriceExtension = new FieldMeta<LineItemField>(
  LineItemField.ItemPriceExtension,
  'ItemPriceExtension',
  'Item Price Extension',
  'PriceExtension',
  'The price extension, calculated by multiplying the price per unit by the quantity of items.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const LineItemFieldMetaLineReference = new FieldMeta<LineItemField>(
  LineItemField.LineReference,
  'LineReference',
  'Line Reference',
  'LineReference',
  'A reference to a line in a document associated with this line item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class LineItemFieldMeta {
  public static readonly UBLExtensions = LineItemFieldMetaUBLExtensions
  public static readonly ID = LineItemFieldMetaID
  public static readonly SalesOrderID = LineItemFieldMetaSalesOrderID
  public static readonly UUID = LineItemFieldMetaUUID
  public static readonly Note = LineItemFieldMetaNote
  public static readonly LineStatusCode = LineItemFieldMetaLineStatusCode
  public static readonly Quantity = LineItemFieldMetaQuantity
  public static readonly LineExtensionAmount = LineItemFieldMetaLineExtensionAmount
  public static readonly TaxInclusiveLineExtensionAmount = LineItemFieldMetaTaxInclusiveLineExtensionAmount
  public static readonly TotalTaxAmount = LineItemFieldMetaTotalTaxAmount
  public static readonly MinimumQuantity = LineItemFieldMetaMinimumQuantity
  public static readonly MaximumQuantity = LineItemFieldMetaMaximumQuantity
  public static readonly MinimumBackorderQuantity = LineItemFieldMetaMinimumBackorderQuantity
  public static readonly MaximumBackorderQuantity = LineItemFieldMetaMaximumBackorderQuantity
  public static readonly InspectionMethodCode = LineItemFieldMetaInspectionMethodCode
  public static readonly PartialDeliveryIndicator = LineItemFieldMetaPartialDeliveryIndicator
  public static readonly BackOrderAllowedIndicator = LineItemFieldMetaBackOrderAllowedIndicator
  public static readonly AccountingCostCode = LineItemFieldMetaAccountingCostCode
  public static readonly AccountingCost = LineItemFieldMetaAccountingCost
  public static readonly WarrantyInformation = LineItemFieldMetaWarrantyInformation
  public static readonly Delivery = LineItemFieldMetaDelivery
  public static readonly DeliveryTerms = LineItemFieldMetaDeliveryTerms
  public static readonly OriginatorParty = LineItemFieldMetaOriginatorParty
  public static readonly OrderedShipment = LineItemFieldMetaOrderedShipment
  public static readonly PricingReference = LineItemFieldMetaPricingReference
  public static readonly AllowanceCharge = LineItemFieldMetaAllowanceCharge
  public static readonly Price = LineItemFieldMetaPrice
  public static readonly Item = LineItemFieldMetaItem
  public static readonly SubLineItem = LineItemFieldMetaSubLineItem
  public static readonly WarrantyValidityPeriod = LineItemFieldMetaWarrantyValidityPeriod
  public static readonly WarrantyParty = LineItemFieldMetaWarrantyParty
  public static readonly TaxTotal = LineItemFieldMetaTaxTotal
  public static readonly ItemPriceExtension = LineItemFieldMetaItemPriceExtension
  public static readonly LineReference = LineItemFieldMetaLineReference
}

export const LineItemFieldMap = new Map([
  [LineItemField.UBLExtensions, LineItemFieldMetaUBLExtensions],
  [LineItemField.ID, LineItemFieldMetaID],
  [LineItemField.SalesOrderID, LineItemFieldMetaSalesOrderID],
  [LineItemField.UUID, LineItemFieldMetaUUID],
  [LineItemField.Note, LineItemFieldMetaNote],
  [LineItemField.LineStatusCode, LineItemFieldMetaLineStatusCode],
  [LineItemField.Quantity, LineItemFieldMetaQuantity],
  [LineItemField.LineExtensionAmount, LineItemFieldMetaLineExtensionAmount],
  [LineItemField.TaxInclusiveLineExtensionAmount, LineItemFieldMetaTaxInclusiveLineExtensionAmount],
  [LineItemField.TotalTaxAmount, LineItemFieldMetaTotalTaxAmount],
  [LineItemField.MinimumQuantity, LineItemFieldMetaMinimumQuantity],
  [LineItemField.MaximumQuantity, LineItemFieldMetaMaximumQuantity],
  [LineItemField.MinimumBackorderQuantity, LineItemFieldMetaMinimumBackorderQuantity],
  [LineItemField.MaximumBackorderQuantity, LineItemFieldMetaMaximumBackorderQuantity],
  [LineItemField.InspectionMethodCode, LineItemFieldMetaInspectionMethodCode],
  [LineItemField.PartialDeliveryIndicator, LineItemFieldMetaPartialDeliveryIndicator],
  [LineItemField.BackOrderAllowedIndicator, LineItemFieldMetaBackOrderAllowedIndicator],
  [LineItemField.AccountingCostCode, LineItemFieldMetaAccountingCostCode],
  [LineItemField.AccountingCost, LineItemFieldMetaAccountingCost],
  [LineItemField.WarrantyInformation, LineItemFieldMetaWarrantyInformation],
  [LineItemField.Delivery, LineItemFieldMetaDelivery],
  [LineItemField.DeliveryTerms, LineItemFieldMetaDeliveryTerms],
  [LineItemField.OriginatorParty, LineItemFieldMetaOriginatorParty],
  [LineItemField.OrderedShipment, LineItemFieldMetaOrderedShipment],
  [LineItemField.PricingReference, LineItemFieldMetaPricingReference],
  [LineItemField.AllowanceCharge, LineItemFieldMetaAllowanceCharge],
  [LineItemField.Price, LineItemFieldMetaPrice],
  [LineItemField.Item, LineItemFieldMetaItem],
  [LineItemField.SubLineItem, LineItemFieldMetaSubLineItem],
  [LineItemField.WarrantyValidityPeriod, LineItemFieldMetaWarrantyValidityPeriod],
  [LineItemField.WarrantyParty, LineItemFieldMetaWarrantyParty],
  [LineItemField.TaxTotal, LineItemFieldMetaTaxTotal],
  [LineItemField.ItemPriceExtension, LineItemFieldMetaItemPriceExtension],
  [LineItemField.LineReference, LineItemFieldMetaLineReference]
])
