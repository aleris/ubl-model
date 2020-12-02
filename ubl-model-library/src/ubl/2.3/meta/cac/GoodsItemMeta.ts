import { FieldMeta } from '../FieldMeta'

export enum GoodsItemField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SequenceNumberID = 'SequenceNumberID',
  Description = 'Description',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  DeclaredCustomsValueAmount = 'DeclaredCustomsValueAmount',
  DeclaredForCarriageValueAmount = 'DeclaredForCarriageValueAmount',
  DeclaredStatisticsValueAmount = 'DeclaredStatisticsValueAmount',
  FreeOnBoardValueAmount = 'FreeOnBoardValueAmount',
  InsuranceValueAmount = 'InsuranceValueAmount',
  ValueAmount = 'ValueAmount',
  GrossWeightMeasure = 'GrossWeightMeasure',
  NetWeightMeasure = 'NetWeightMeasure',
  NetNetWeightMeasure = 'NetNetWeightMeasure',
  ChargeableWeightMeasure = 'ChargeableWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  Quantity = 'Quantity',
  PreferenceCriterionCode = 'PreferenceCriterionCode',
  RequiredCustomsID = 'RequiredCustomsID',
  CustomsStatusCode = 'CustomsStatusCode',
  CustomsTariffQuantity = 'CustomsTariffQuantity',
  CustomsImportClassifiedIndicator = 'CustomsImportClassifiedIndicator',
  ChargeableQuantity = 'ChargeableQuantity',
  ReturnableQuantity = 'ReturnableQuantity',
  TraceID = 'TraceID',
  Item = 'Item',
  GoodsItemContainer = 'GoodsItemContainer',
  FreightAllowanceCharge = 'FreightAllowanceCharge',
  InvoiceLine = 'InvoiceLine',
  Temperature = 'Temperature',
  ContainedGoodsItem = 'ContainedGoodsItem',
  OriginAddress = 'OriginAddress',
  Delivery = 'Delivery',
  Pickup = 'Pickup',
  Despatch = 'Despatch',
  MeasurementDimension = 'MeasurementDimension',
  ContainingPackage = 'ContainingPackage',
  ShipmentDocumentReference = 'ShipmentDocumentReference',
  MinimumTemperature = 'MinimumTemperature',
  MaximumTemperature = 'MaximumTemperature'
}

export const GoodsItemFieldMetaUBLExtensions = new FieldMeta<GoodsItemField>(
  GoodsItemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsItemFieldMetaID = new FieldMeta<GoodsItemField>(
  GoodsItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this goods item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaSequenceNumberID = new FieldMeta<GoodsItemField>(
  GoodsItemField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  'Identifier',
  'A sequence number differentiating a specific goods item within a consignment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaDescription = new FieldMeta<GoodsItemField>(
  GoodsItemField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this goods item to identify it for customs, statistical, or transport purposes.',
  '0..n',
  'cbc',
  'Description of goods (WCO ID 137)',
  undefined
)

export const GoodsItemFieldMetaHazardousRiskIndicator = new FieldMeta<GoodsItemField>(
  GoodsItemField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  'Indicator',
  'An indication that the transported goods item is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const GoodsItemFieldMetaDeclaredCustomsValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredCustomsValueAmount,
  'DeclaredCustomsValueAmount',
  'Declared Customs Value',
  'Amount',
  'The total declared value for customs purposes of the goods item.',
  '0..1',
  'cbc',
  'For Customs Value (WCO ID 108)',
  undefined
)

export const GoodsItemFieldMetaDeclaredForCarriageValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredForCarriageValueAmount,
  'DeclaredForCarriageValueAmount',
  'Declared For Carriage Value',
  'Amount',
  'The value of this goods item, declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed delivery.',
  '0..1',
  'cbc',
  'Interest in delivery, declared value for carriage',
  undefined
)

export const GoodsItemFieldMetaDeclaredStatisticsValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.DeclaredStatisticsValueAmount,
  'DeclaredStatisticsValueAmount',
  'Declared Statistics Value',
  'Amount',
  'The total declared value of all the goods items in the same consignment with this goods item that have the same statistical heading.',
  '0..1',
  'cbc',
  'Statistical Value (WCO ID 114)',
  undefined
)

export const GoodsItemFieldMetaFreeOnBoardValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.FreeOnBoardValueAmount,
  'FreeOnBoardValueAmount',
  'Free On Board Value',
  'Amount',
  'The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.',
  '0..1',
  'cbc',
  'FOB Value',
  undefined
)

export const GoodsItemFieldMetaInsuranceValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.InsuranceValueAmount,
  'InsuranceValueAmount',
  'Insurance Value',
  'Amount',
  'The amount covered by insurance for this goods item.',
  '0..1',
  'cbc',
  'Value Insured',
  undefined
)

export const GoodsItemFieldMetaValueAmount = new FieldMeta<GoodsItemField>(
  GoodsItemField.ValueAmount,
  'ValueAmount',
  'Value',
  'Amount',
  'The amount on which a duty, tax, or fee will be assessed.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaGrossWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  'Measure',
  'The weight of this goods item, including packing and packaging but excluding the carrier\'s equipment.',
  '0..1',
  'cbc',
  'Actual Gross Weight',
  undefined
)

export const GoodsItemFieldMetaNetWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  'Measure',
  'The weight of this goods item, excluding packing but including packaging that normally accompanies the goods.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaNetNetWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  'Measure',
  'The total weight of this goods item, excluding all packing and packaging.',
  '0..1',
  'cbc',
  'Customs Weight (WCO ID 128)',
  undefined
)

export const GoodsItemFieldMetaChargeableWeightMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.ChargeableWeightMeasure,
  'ChargeableWeightMeasure',
  'Chargeable Weight',
  'Measure',
  'The weight on which a charge is to be based.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaGrossVolumeMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  'Measure',
  'The volume of this goods item, normally calculated by multiplying its maximum length, width, and height.',
  '0..1',
  'cbc',
  'Volume, Gross Measurement Cube (GMC), Cube (WCO ID 134)',
  undefined
)

export const GoodsItemFieldMetaNetVolumeMeasure = new FieldMeta<GoodsItemField>(
  GoodsItemField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  'Measure',
  'The volume contained by a goods item, excluding the volume of any packaging material.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The number of units making up this goods item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaPreferenceCriterionCode = new FieldMeta<GoodsItemField>(
  GoodsItemField.PreferenceCriterionCode,
  'PreferenceCriterionCode',
  'Preference Criterion Code',
  'Code',
  'A code signifying the treatment preference for this goods item according to international trading agreements.',
  '0..1',
  'cbc',
  undefined,
  'Preference Criterion is used in the following manner in the paper CO of another country (e.g.): A - The good is wholly obtained or produced entirely in the territory of one or more of the NAFTA countries as reference in Article 415. Note: The purchase of a good in the territory does not necessarily render it wholly obtained or produced . If the good is an agricultural good, see also criterion F and Annex 703.2. (Reference: Article 401(a), 415). B - ... C - ... D - ... E - ... F - The good is an originating agricultural good under preference criterion A,B, or C above and is not subjected to quantitative restriction in the importing NAFTA country because.... Thus, the column Preference Criterion will indicate either A, B, C,...'
)

export const GoodsItemFieldMetaRequiredCustomsID = new FieldMeta<GoodsItemField>(
  GoodsItemField.RequiredCustomsID,
  'RequiredCustomsID',
  'Required Customs Identifier',
  'Identifier',
  'An identifier for a set of tariff codes required to specify a type of goods for customs, transport, statistical, or other regulatory purposes.',
  '0..1',
  'cbc',
  'Tariff code extensions (WCO ID 255)',
  undefined
)

export const GoodsItemFieldMetaCustomsStatusCode = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsStatusCode,
  'CustomsStatusCode',
  'Customs Status Code',
  'Code',
  'A code assigned by customs to signify the status of this goods item.',
  '0..1',
  'cbc',
  'Customs status of goods (WCO ID 094)',
  undefined
)

export const GoodsItemFieldMetaCustomsTariffQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsTariffQuantity,
  'CustomsTariffQuantity',
  'Customs Tariff Quantity',
  'Quantity',
  'Quantity of the units in this goods item as required by customs for tariff, statistical, or fiscal purposes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaCustomsImportClassifiedIndicator = new FieldMeta<GoodsItemField>(
  GoodsItemField.CustomsImportClassifiedIndicator,
  'CustomsImportClassifiedIndicator',
  'Customs Import Classified Indicator',
  'Indicator',
  'An indicator that this goods item has been classified for import by customs (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaChargeableQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.ChargeableQuantity,
  'ChargeableQuantity',
  'Chargeable Quantity',
  'Quantity',
  'The number of units in the goods item to which charges apply.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaReturnableQuantity = new FieldMeta<GoodsItemField>(
  GoodsItemField.ReturnableQuantity,
  'ReturnableQuantity',
  'Returnable Quantity',
  'Quantity',
  'The number of units in the goods item that may be returned.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaTraceID = new FieldMeta<GoodsItemField>(
  GoodsItemField.TraceID,
  'TraceID',
  'Trace Identifier',
  'Identifier',
  'An identifier for use in tracing this goods item, such as the EPC number used in RFID.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemFieldMetaItem = new FieldMeta<GoodsItemField>(
  GoodsItemField.Item,
  'Item',
  'Item',
  'Item',
  'Product information relating to a goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaGoodsItemContainer = new FieldMeta<GoodsItemField>(
  GoodsItemField.GoodsItemContainer,
  'GoodsItemContainer',
  'Goods Item Container',
  'GoodsItemContainer',
  'The transporting of a goods item in a unit of transport equipment (e.g., container).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaFreightAllowanceCharge = new FieldMeta<GoodsItemField>(
  GoodsItemField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  'AllowanceCharge',
  'A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the contract of carriage. In addition to transport costs, this may include such elements as packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.',
  '0..n',
  'cac',
  'Freight Costs',
  undefined
)

export const GoodsItemFieldMetaInvoiceLine = new FieldMeta<GoodsItemField>(
  GoodsItemField.InvoiceLine,
  'InvoiceLine',
  'Invoice Line',
  'InvoiceLine',
  'Information about an invoice line relating to this goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.Temperature,
  'Temperature',
  'Temperature',
  'Temperature',
  'The temperature of the goods item.',
  '0..n',
  'cac',
  undefined,
  'maximum, storage, minimum'
)

export const GoodsItemFieldMetaContainedGoodsItem = new FieldMeta<GoodsItemField>(
  GoodsItemField.ContainedGoodsItem,
  'ContainedGoodsItem',
  'Contained Goods Item',
  'GoodsItem',
  'A goods item contained in this goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaOriginAddress = new FieldMeta<GoodsItemField>(
  GoodsItemField.OriginAddress,
  'OriginAddress',
  'Origin Address',
  'Address',
  'The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.',
  '0..1',
  'cac',
  'Region of origin (WCO ID 066)',
  undefined
)

export const GoodsItemFieldMetaDelivery = new FieldMeta<GoodsItemField>(
  GoodsItemField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'The delivery of this goods item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaPickup = new FieldMeta<GoodsItemField>(
  GoodsItemField.Pickup,
  'Pickup',
  'Pickup',
  'Pickup',
  'The pickup of this goods item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaDespatch = new FieldMeta<GoodsItemField>(
  GoodsItemField.Despatch,
  'Despatch',
  'Despatch',
  'Despatch',
  'The despatch of this goods item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaMeasurementDimension = new FieldMeta<GoodsItemField>(
  GoodsItemField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaContainingPackage = new FieldMeta<GoodsItemField>(
  GoodsItemField.ContainingPackage,
  'ContainingPackage',
  'Containing Package',
  'Package',
  'A package containing this goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaShipmentDocumentReference = new FieldMeta<GoodsItemField>(
  GoodsItemField.ShipmentDocumentReference,
  'ShipmentDocumentReference',
  'Shipment Document Reference',
  'DocumentReference',
  'A reference to a shipping document associated with this goods item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaMinimumTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.MinimumTemperature,
  'MinimumTemperature',
  'Minimum Temperature',
  'Temperature',
  'Information about minimum temperature.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const GoodsItemFieldMetaMaximumTemperature = new FieldMeta<GoodsItemField>(
  GoodsItemField.MaximumTemperature,
  'MaximumTemperature',
  'Maximum Temperature',
  'Temperature',
  'Information about maximum temperature.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class GoodsItemFieldMeta {
  public static readonly UBLExtensions = GoodsItemFieldMetaUBLExtensions
  public static readonly ID = GoodsItemFieldMetaID
  public static readonly SequenceNumberID = GoodsItemFieldMetaSequenceNumberID
  public static readonly Description = GoodsItemFieldMetaDescription
  public static readonly HazardousRiskIndicator = GoodsItemFieldMetaHazardousRiskIndicator
  public static readonly DeclaredCustomsValueAmount = GoodsItemFieldMetaDeclaredCustomsValueAmount
  public static readonly DeclaredForCarriageValueAmount = GoodsItemFieldMetaDeclaredForCarriageValueAmount
  public static readonly DeclaredStatisticsValueAmount = GoodsItemFieldMetaDeclaredStatisticsValueAmount
  public static readonly FreeOnBoardValueAmount = GoodsItemFieldMetaFreeOnBoardValueAmount
  public static readonly InsuranceValueAmount = GoodsItemFieldMetaInsuranceValueAmount
  public static readonly ValueAmount = GoodsItemFieldMetaValueAmount
  public static readonly GrossWeightMeasure = GoodsItemFieldMetaGrossWeightMeasure
  public static readonly NetWeightMeasure = GoodsItemFieldMetaNetWeightMeasure
  public static readonly NetNetWeightMeasure = GoodsItemFieldMetaNetNetWeightMeasure
  public static readonly ChargeableWeightMeasure = GoodsItemFieldMetaChargeableWeightMeasure
  public static readonly GrossVolumeMeasure = GoodsItemFieldMetaGrossVolumeMeasure
  public static readonly NetVolumeMeasure = GoodsItemFieldMetaNetVolumeMeasure
  public static readonly Quantity = GoodsItemFieldMetaQuantity
  public static readonly PreferenceCriterionCode = GoodsItemFieldMetaPreferenceCriterionCode
  public static readonly RequiredCustomsID = GoodsItemFieldMetaRequiredCustomsID
  public static readonly CustomsStatusCode = GoodsItemFieldMetaCustomsStatusCode
  public static readonly CustomsTariffQuantity = GoodsItemFieldMetaCustomsTariffQuantity
  public static readonly CustomsImportClassifiedIndicator = GoodsItemFieldMetaCustomsImportClassifiedIndicator
  public static readonly ChargeableQuantity = GoodsItemFieldMetaChargeableQuantity
  public static readonly ReturnableQuantity = GoodsItemFieldMetaReturnableQuantity
  public static readonly TraceID = GoodsItemFieldMetaTraceID
  public static readonly Item = GoodsItemFieldMetaItem
  public static readonly GoodsItemContainer = GoodsItemFieldMetaGoodsItemContainer
  public static readonly FreightAllowanceCharge = GoodsItemFieldMetaFreightAllowanceCharge
  public static readonly InvoiceLine = GoodsItemFieldMetaInvoiceLine
  public static readonly Temperature = GoodsItemFieldMetaTemperature
  public static readonly ContainedGoodsItem = GoodsItemFieldMetaContainedGoodsItem
  public static readonly OriginAddress = GoodsItemFieldMetaOriginAddress
  public static readonly Delivery = GoodsItemFieldMetaDelivery
  public static readonly Pickup = GoodsItemFieldMetaPickup
  public static readonly Despatch = GoodsItemFieldMetaDespatch
  public static readonly MeasurementDimension = GoodsItemFieldMetaMeasurementDimension
  public static readonly ContainingPackage = GoodsItemFieldMetaContainingPackage
  public static readonly ShipmentDocumentReference = GoodsItemFieldMetaShipmentDocumentReference
  public static readonly MinimumTemperature = GoodsItemFieldMetaMinimumTemperature
  public static readonly MaximumTemperature = GoodsItemFieldMetaMaximumTemperature
}

export const GoodsItemFieldMap = new Map([
  [GoodsItemField.UBLExtensions, GoodsItemFieldMetaUBLExtensions],
  [GoodsItemField.ID, GoodsItemFieldMetaID],
  [GoodsItemField.SequenceNumberID, GoodsItemFieldMetaSequenceNumberID],
  [GoodsItemField.Description, GoodsItemFieldMetaDescription],
  [GoodsItemField.HazardousRiskIndicator, GoodsItemFieldMetaHazardousRiskIndicator],
  [GoodsItemField.DeclaredCustomsValueAmount, GoodsItemFieldMetaDeclaredCustomsValueAmount],
  [GoodsItemField.DeclaredForCarriageValueAmount, GoodsItemFieldMetaDeclaredForCarriageValueAmount],
  [GoodsItemField.DeclaredStatisticsValueAmount, GoodsItemFieldMetaDeclaredStatisticsValueAmount],
  [GoodsItemField.FreeOnBoardValueAmount, GoodsItemFieldMetaFreeOnBoardValueAmount],
  [GoodsItemField.InsuranceValueAmount, GoodsItemFieldMetaInsuranceValueAmount],
  [GoodsItemField.ValueAmount, GoodsItemFieldMetaValueAmount],
  [GoodsItemField.GrossWeightMeasure, GoodsItemFieldMetaGrossWeightMeasure],
  [GoodsItemField.NetWeightMeasure, GoodsItemFieldMetaNetWeightMeasure],
  [GoodsItemField.NetNetWeightMeasure, GoodsItemFieldMetaNetNetWeightMeasure],
  [GoodsItemField.ChargeableWeightMeasure, GoodsItemFieldMetaChargeableWeightMeasure],
  [GoodsItemField.GrossVolumeMeasure, GoodsItemFieldMetaGrossVolumeMeasure],
  [GoodsItemField.NetVolumeMeasure, GoodsItemFieldMetaNetVolumeMeasure],
  [GoodsItemField.Quantity, GoodsItemFieldMetaQuantity],
  [GoodsItemField.PreferenceCriterionCode, GoodsItemFieldMetaPreferenceCriterionCode],
  [GoodsItemField.RequiredCustomsID, GoodsItemFieldMetaRequiredCustomsID],
  [GoodsItemField.CustomsStatusCode, GoodsItemFieldMetaCustomsStatusCode],
  [GoodsItemField.CustomsTariffQuantity, GoodsItemFieldMetaCustomsTariffQuantity],
  [GoodsItemField.CustomsImportClassifiedIndicator, GoodsItemFieldMetaCustomsImportClassifiedIndicator],
  [GoodsItemField.ChargeableQuantity, GoodsItemFieldMetaChargeableQuantity],
  [GoodsItemField.ReturnableQuantity, GoodsItemFieldMetaReturnableQuantity],
  [GoodsItemField.TraceID, GoodsItemFieldMetaTraceID],
  [GoodsItemField.Item, GoodsItemFieldMetaItem],
  [GoodsItemField.GoodsItemContainer, GoodsItemFieldMetaGoodsItemContainer],
  [GoodsItemField.FreightAllowanceCharge, GoodsItemFieldMetaFreightAllowanceCharge],
  [GoodsItemField.InvoiceLine, GoodsItemFieldMetaInvoiceLine],
  [GoodsItemField.Temperature, GoodsItemFieldMetaTemperature],
  [GoodsItemField.ContainedGoodsItem, GoodsItemFieldMetaContainedGoodsItem],
  [GoodsItemField.OriginAddress, GoodsItemFieldMetaOriginAddress],
  [GoodsItemField.Delivery, GoodsItemFieldMetaDelivery],
  [GoodsItemField.Pickup, GoodsItemFieldMetaPickup],
  [GoodsItemField.Despatch, GoodsItemFieldMetaDespatch],
  [GoodsItemField.MeasurementDimension, GoodsItemFieldMetaMeasurementDimension],
  [GoodsItemField.ContainingPackage, GoodsItemFieldMetaContainingPackage],
  [GoodsItemField.ShipmentDocumentReference, GoodsItemFieldMetaShipmentDocumentReference],
  [GoodsItemField.MinimumTemperature, GoodsItemFieldMetaMinimumTemperature],
  [GoodsItemField.MaximumTemperature, GoodsItemFieldMetaMaximumTemperature]
])
