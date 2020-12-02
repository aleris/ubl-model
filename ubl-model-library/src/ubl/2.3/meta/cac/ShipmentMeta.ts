import { FieldMeta } from '../FieldMeta'

export enum ShipmentField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ShippingPriorityLevelCode = 'ShippingPriorityLevelCode',
  HandlingCode = 'HandlingCode',
  HandlingInstructions = 'HandlingInstructions',
  Information = 'Information',
  GrossWeightMeasure = 'GrossWeightMeasure',
  NetWeightMeasure = 'NetWeightMeasure',
  NetNetWeightMeasure = 'NetNetWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  TotalGoodsItemQuantity = 'TotalGoodsItemQuantity',
  TotalTransportHandlingUnitQuantity = 'TotalTransportHandlingUnitQuantity',
  InsuranceValueAmount = 'InsuranceValueAmount',
  DeclaredCustomsValueAmount = 'DeclaredCustomsValueAmount',
  DeclaredForCarriageValueAmount = 'DeclaredForCarriageValueAmount',
  DeclaredStatisticsValueAmount = 'DeclaredStatisticsValueAmount',
  FreeOnBoardValueAmount = 'FreeOnBoardValueAmount',
  SpecialInstructions = 'SpecialInstructions',
  DeliveryInstructions = 'DeliveryInstructions',
  SplitConsignmentIndicator = 'SplitConsignmentIndicator',
  ConsignmentQuantity = 'ConsignmentQuantity',
  Consignment = 'Consignment',
  GoodsItem = 'GoodsItem',
  ShipmentStage = 'ShipmentStage',
  Delivery = 'Delivery',
  TransportHandlingUnit = 'TransportHandlingUnit',
  ReturnAddress = 'ReturnAddress',
  OriginAddress = 'OriginAddress',
  FirstArrivalPortLocation = 'FirstArrivalPortLocation',
  LastExitPortLocation = 'LastExitPortLocation',
  ExportCountry = 'ExportCountry',
  FreightAllowanceCharge = 'FreightAllowanceCharge'
}

export const ShipmentFieldMetaUBLExtensions = new FieldMeta<ShipmentField>(
  ShipmentField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ShipmentFieldMetaID = new FieldMeta<ShipmentField>(
  ShipmentField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this shipment.',
  '1',
  'cbc',
  'Waybill Number',
  undefined
)

export const ShipmentFieldMetaShippingPriorityLevelCode = new FieldMeta<ShipmentField>(
  ShipmentField.ShippingPriorityLevelCode,
  'ShippingPriorityLevelCode',
  'Shipping Priority Level Code',
  'Code',
  'A code signifying the priority or level of service required for this shipment.',
  '0..1',
  'cbc',
  'Service Level, Service Priority',
  undefined
)

export const ShipmentFieldMetaHandlingCode = new FieldMeta<ShipmentField>(
  ShipmentField.HandlingCode,
  'HandlingCode',
  'Handling Code',
  'Code',
  'The handling required for this shipment, expressed as a code.',
  '0..1',
  'cbc',
  'Special Handling',
  undefined
)

export const ShipmentFieldMetaHandlingInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.HandlingInstructions,
  'HandlingInstructions',
  'Handling Instructions',
  'Text',
  'The handling required for this shipment, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaInformation = new FieldMeta<ShipmentField>(
  ShipmentField.Information,
  'Information',
  'Information',
  'Text',
  'Free-form text pertinent to this shipment, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaGrossWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  'Measure',
  'The total gross weight of a shipment; the weight of the goods plus packaging plus transport equipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaNetWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  'Measure',
  'The net weight of this shipment, excluding packaging.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaNetNetWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  'Measure',
  'The total net weight of this shipment, excluding packaging and transport equipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaGrossVolumeMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  'Measure',
  'The total volume of the goods in this shipment, including packaging.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaNetVolumeMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  'Measure',
  'The total volume of the goods in this shipment, excluding packaging and transport equipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaTotalGoodsItemQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.TotalGoodsItemQuantity,
  'TotalGoodsItemQuantity',
  'Total Goods Item Quantity',
  'Quantity',
  'The total number of goods items in this shipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaTotalTransportHandlingUnitQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.TotalTransportHandlingUnitQuantity,
  'TotalTransportHandlingUnitQuantity',
  'Total Transport Handling Unit Quantity',
  'Quantity',
  'The number of pieces of transport handling equipment (pallets, boxes, cases, etc.) in this shipment.',
  '0..1',
  'cbc',
  'Number of THUs',
  undefined
)

export const ShipmentFieldMetaInsuranceValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.InsuranceValueAmount,
  'InsuranceValueAmount',
  'Insurance Value',
  'Amount',
  'The amount covered by insurance for this shipment.',
  '0..1',
  'cbc',
  'Value Insured',
  undefined
)

export const ShipmentFieldMetaDeclaredCustomsValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredCustomsValueAmount,
  'DeclaredCustomsValueAmount',
  'Declared Customs Value',
  'Amount',
  'The total declared value for customs purposes of those goods in this shipment that are subject to the same customs procedure and have the same tariff/statistical heading, country information, and duty regime.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaDeclaredForCarriageValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredForCarriageValueAmount,
  'DeclaredForCarriageValueAmount',
  'Declared For Carriage Value',
  'Amount',
  'The value of this shipment, declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed delivery.',
  '0..1',
  'cbc',
  'Declared value for carriage, Interest in delivery',
  undefined
)

export const ShipmentFieldMetaDeclaredStatisticsValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredStatisticsValueAmount,
  'DeclaredStatisticsValueAmount',
  'Declared Statistics Value',
  'Amount',
  'The value, declared for statistical purposes, of those goods in this shipment that have the same statistical heading.',
  '0..1',
  'cbc',
  'Statistical Value',
  undefined
)

export const ShipmentFieldMetaFreeOnBoardValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.FreeOnBoardValueAmount,
  'FreeOnBoardValueAmount',
  'Free On Board Value',
  'Amount',
  'The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.',
  '0..1',
  'cbc',
  'FOB Value',
  undefined
)

export const ShipmentFieldMetaSpecialInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.SpecialInstructions,
  'SpecialInstructions',
  'Special Instructions',
  'Text',
  'Special instructions relating to this shipment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaDeliveryInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.DeliveryInstructions,
  'DeliveryInstructions',
  'Delivery Instructions',
  'Text',
  'Delivery instructions relating to this shipment.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaSplitConsignmentIndicator = new FieldMeta<ShipmentField>(
  ShipmentField.SplitConsignmentIndicator,
  'SplitConsignmentIndicator',
  'Split Consignment Indicator',
  'Indicator',
  'An indicator that the consignment has been split in transit (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaConsignmentQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.ConsignmentQuantity,
  'ConsignmentQuantity',
  'Consignment Quantity',
  'Quantity',
  'The total number of consignments within this shipment.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ShipmentFieldMetaConsignment = new FieldMeta<ShipmentField>(
  ShipmentField.Consignment,
  'Consignment',
  'Consignment',
  'Consignment',
  'A consignment covering this shipment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaGoodsItem = new FieldMeta<ShipmentField>(
  ShipmentField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  'GoodsItem',
  'A goods item included in this shipment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaShipmentStage = new FieldMeta<ShipmentField>(
  ShipmentField.ShipmentStage,
  'ShipmentStage',
  'Shipment Stage',
  'ShipmentStage',
  'A stage in the transport movement of this shipment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaDelivery = new FieldMeta<ShipmentField>(
  ShipmentField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'The delivery of this shipment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaTransportHandlingUnit = new FieldMeta<ShipmentField>(
  ShipmentField.TransportHandlingUnit,
  'TransportHandlingUnit',
  'Transport Handling Unit',
  'TransportHandlingUnit',
  'A transport handling unit associated with this shipment.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaReturnAddress = new FieldMeta<ShipmentField>(
  ShipmentField.ReturnAddress,
  'ReturnAddress',
  'Return Address',
  'Address',
  'The address to which a shipment should be returned.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaOriginAddress = new FieldMeta<ShipmentField>(
  ShipmentField.OriginAddress,
  'OriginAddress',
  'Origin Address',
  'Address',
  'The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaFirstArrivalPortLocation = new FieldMeta<ShipmentField>(
  ShipmentField.FirstArrivalPortLocation,
  'FirstArrivalPortLocation',
  'First Arrival Port Location',
  'Location',
  'The first arrival location of a shipment. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaLastExitPortLocation = new FieldMeta<ShipmentField>(
  ShipmentField.LastExitPortLocation,
  'LastExitPortLocation',
  'Last Exit Port Location',
  'Location',
  'The final exporting location for a shipment. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ShipmentFieldMetaExportCountry = new FieldMeta<ShipmentField>(
  ShipmentField.ExportCountry,
  'ExportCountry',
  'Export Country',
  'Country',
  'The country from which the goods were originally exported, without any commercial transaction taking place in intermediate countries.',
  '0..1',
  'cac',
  'Country of exportation (WCO ID 062)',
  undefined
)

export const ShipmentFieldMetaFreightAllowanceCharge = new FieldMeta<ShipmentField>(
  ShipmentField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  'AllowanceCharge',
  'A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the contract of carriage. In addition to transport costs, this may include such elements as packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.',
  '0..n',
  'cac',
  'Freight Costs',
  undefined
)

export class ShipmentFieldMeta {
  public static readonly UBLExtensions = ShipmentFieldMetaUBLExtensions
  public static readonly ID = ShipmentFieldMetaID
  public static readonly ShippingPriorityLevelCode = ShipmentFieldMetaShippingPriorityLevelCode
  public static readonly HandlingCode = ShipmentFieldMetaHandlingCode
  public static readonly HandlingInstructions = ShipmentFieldMetaHandlingInstructions
  public static readonly Information = ShipmentFieldMetaInformation
  public static readonly GrossWeightMeasure = ShipmentFieldMetaGrossWeightMeasure
  public static readonly NetWeightMeasure = ShipmentFieldMetaNetWeightMeasure
  public static readonly NetNetWeightMeasure = ShipmentFieldMetaNetNetWeightMeasure
  public static readonly GrossVolumeMeasure = ShipmentFieldMetaGrossVolumeMeasure
  public static readonly NetVolumeMeasure = ShipmentFieldMetaNetVolumeMeasure
  public static readonly TotalGoodsItemQuantity = ShipmentFieldMetaTotalGoodsItemQuantity
  public static readonly TotalTransportHandlingUnitQuantity = ShipmentFieldMetaTotalTransportHandlingUnitQuantity
  public static readonly InsuranceValueAmount = ShipmentFieldMetaInsuranceValueAmount
  public static readonly DeclaredCustomsValueAmount = ShipmentFieldMetaDeclaredCustomsValueAmount
  public static readonly DeclaredForCarriageValueAmount = ShipmentFieldMetaDeclaredForCarriageValueAmount
  public static readonly DeclaredStatisticsValueAmount = ShipmentFieldMetaDeclaredStatisticsValueAmount
  public static readonly FreeOnBoardValueAmount = ShipmentFieldMetaFreeOnBoardValueAmount
  public static readonly SpecialInstructions = ShipmentFieldMetaSpecialInstructions
  public static readonly DeliveryInstructions = ShipmentFieldMetaDeliveryInstructions
  public static readonly SplitConsignmentIndicator = ShipmentFieldMetaSplitConsignmentIndicator
  public static readonly ConsignmentQuantity = ShipmentFieldMetaConsignmentQuantity
  public static readonly Consignment = ShipmentFieldMetaConsignment
  public static readonly GoodsItem = ShipmentFieldMetaGoodsItem
  public static readonly ShipmentStage = ShipmentFieldMetaShipmentStage
  public static readonly Delivery = ShipmentFieldMetaDelivery
  public static readonly TransportHandlingUnit = ShipmentFieldMetaTransportHandlingUnit
  public static readonly ReturnAddress = ShipmentFieldMetaReturnAddress
  public static readonly OriginAddress = ShipmentFieldMetaOriginAddress
  public static readonly FirstArrivalPortLocation = ShipmentFieldMetaFirstArrivalPortLocation
  public static readonly LastExitPortLocation = ShipmentFieldMetaLastExitPortLocation
  public static readonly ExportCountry = ShipmentFieldMetaExportCountry
  public static readonly FreightAllowanceCharge = ShipmentFieldMetaFreightAllowanceCharge
}

export const ShipmentFieldMap = new Map([
  [ShipmentField.UBLExtensions, ShipmentFieldMetaUBLExtensions],
  [ShipmentField.ID, ShipmentFieldMetaID],
  [ShipmentField.ShippingPriorityLevelCode, ShipmentFieldMetaShippingPriorityLevelCode],
  [ShipmentField.HandlingCode, ShipmentFieldMetaHandlingCode],
  [ShipmentField.HandlingInstructions, ShipmentFieldMetaHandlingInstructions],
  [ShipmentField.Information, ShipmentFieldMetaInformation],
  [ShipmentField.GrossWeightMeasure, ShipmentFieldMetaGrossWeightMeasure],
  [ShipmentField.NetWeightMeasure, ShipmentFieldMetaNetWeightMeasure],
  [ShipmentField.NetNetWeightMeasure, ShipmentFieldMetaNetNetWeightMeasure],
  [ShipmentField.GrossVolumeMeasure, ShipmentFieldMetaGrossVolumeMeasure],
  [ShipmentField.NetVolumeMeasure, ShipmentFieldMetaNetVolumeMeasure],
  [ShipmentField.TotalGoodsItemQuantity, ShipmentFieldMetaTotalGoodsItemQuantity],
  [ShipmentField.TotalTransportHandlingUnitQuantity, ShipmentFieldMetaTotalTransportHandlingUnitQuantity],
  [ShipmentField.InsuranceValueAmount, ShipmentFieldMetaInsuranceValueAmount],
  [ShipmentField.DeclaredCustomsValueAmount, ShipmentFieldMetaDeclaredCustomsValueAmount],
  [ShipmentField.DeclaredForCarriageValueAmount, ShipmentFieldMetaDeclaredForCarriageValueAmount],
  [ShipmentField.DeclaredStatisticsValueAmount, ShipmentFieldMetaDeclaredStatisticsValueAmount],
  [ShipmentField.FreeOnBoardValueAmount, ShipmentFieldMetaFreeOnBoardValueAmount],
  [ShipmentField.SpecialInstructions, ShipmentFieldMetaSpecialInstructions],
  [ShipmentField.DeliveryInstructions, ShipmentFieldMetaDeliveryInstructions],
  [ShipmentField.SplitConsignmentIndicator, ShipmentFieldMetaSplitConsignmentIndicator],
  [ShipmentField.ConsignmentQuantity, ShipmentFieldMetaConsignmentQuantity],
  [ShipmentField.Consignment, ShipmentFieldMetaConsignment],
  [ShipmentField.GoodsItem, ShipmentFieldMetaGoodsItem],
  [ShipmentField.ShipmentStage, ShipmentFieldMetaShipmentStage],
  [ShipmentField.Delivery, ShipmentFieldMetaDelivery],
  [ShipmentField.TransportHandlingUnit, ShipmentFieldMetaTransportHandlingUnit],
  [ShipmentField.ReturnAddress, ShipmentFieldMetaReturnAddress],
  [ShipmentField.OriginAddress, ShipmentFieldMetaOriginAddress],
  [ShipmentField.FirstArrivalPortLocation, ShipmentFieldMetaFirstArrivalPortLocation],
  [ShipmentField.LastExitPortLocation, ShipmentFieldMetaLastExitPortLocation],
  [ShipmentField.ExportCountry, ShipmentFieldMetaExportCountry],
  [ShipmentField.FreightAllowanceCharge, ShipmentFieldMetaFreightAllowanceCharge]
])
