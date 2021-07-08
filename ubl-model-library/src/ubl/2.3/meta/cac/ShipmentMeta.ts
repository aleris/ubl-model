import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ConsignmentType } from './ConsignmentMeta'
import { CountryType } from './CountryMeta'
import { DeliveryType } from './DeliveryMeta'
import { GoodsItemType } from './GoodsItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from './LocationMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ShipmentStageType } from './ShipmentStageMeta'
import { TextType } from '../cbc/TextMeta'
import { TransportHandlingUnitType } from './TransportHandlingUnitMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ShipmentFieldMetaID = new FieldMeta<ShipmentField>(
  ShipmentField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this shipment.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Waybill Number',
  undefined
)

export const ShipmentFieldMetaShippingPriorityLevelCode = new FieldMeta<ShipmentField>(
  ShipmentField.ShippingPriorityLevelCode,
  'ShippingPriorityLevelCode',
  'Shipping Priority Level Code',
  CodeType.name,
  'A code signifying the priority or level of service required for this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Service Level, Service Priority',
  undefined
)

export const ShipmentFieldMetaHandlingCode = new FieldMeta<ShipmentField>(
  ShipmentField.HandlingCode,
  'HandlingCode',
  'Handling Code',
  CodeType.name,
  'The handling required for this shipment, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Special Handling',
  undefined
)

export const ShipmentFieldMetaHandlingInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.HandlingInstructions,
  'HandlingInstructions',
  'Handling Instructions',
  TextType.name,
  'The handling required for this shipment, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaInformation = new FieldMeta<ShipmentField>(
  ShipmentField.Information,
  'Information',
  'Information',
  TextType.name,
  'Free-form text pertinent to this shipment, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaGrossWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  MeasureType.name,
  'The total gross weight of a shipment; the weight of the goods plus packaging plus transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaNetWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  MeasureType.name,
  'The net weight of this shipment, excluding packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaNetNetWeightMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  MeasureType.name,
  'The total net weight of this shipment, excluding packaging and transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaGrossVolumeMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  MeasureType.name,
  'The total volume of the goods in this shipment, including packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaNetVolumeMeasure = new FieldMeta<ShipmentField>(
  ShipmentField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  MeasureType.name,
  'The total volume of the goods in this shipment, excluding packaging and transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaTotalGoodsItemQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.TotalGoodsItemQuantity,
  'TotalGoodsItemQuantity',
  'Total Goods Item Quantity',
  QuantityType.name,
  'The total number of goods items in this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaTotalTransportHandlingUnitQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.TotalTransportHandlingUnitQuantity,
  'TotalTransportHandlingUnitQuantity',
  'Total Transport Handling Unit Quantity',
  QuantityType.name,
  'The number of pieces of transport handling equipment (pallets, boxes, cases, etc.) in this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Number of THUs',
  undefined
)

export const ShipmentFieldMetaInsuranceValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.InsuranceValueAmount,
  'InsuranceValueAmount',
  'Insurance Value',
  AmountType.name,
  'The amount covered by insurance for this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Value Insured',
  undefined
)

export const ShipmentFieldMetaDeclaredCustomsValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredCustomsValueAmount,
  'DeclaredCustomsValueAmount',
  'Declared Customs Value',
  AmountType.name,
  'The total declared value for customs purposes of those goods in this shipment that are subject to the same customs procedure and have the same tariff/statistical heading, country information, and duty regime.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaDeclaredForCarriageValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredForCarriageValueAmount,
  'DeclaredForCarriageValueAmount',
  'Declared For Carriage Value',
  AmountType.name,
  'The value of this shipment, declared by the shipper or his agent solely for the purpose of varying the carrier\'s level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Declared value for carriage, Interest in delivery',
  undefined
)

export const ShipmentFieldMetaDeclaredStatisticsValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.DeclaredStatisticsValueAmount,
  'DeclaredStatisticsValueAmount',
  'Declared Statistics Value',
  AmountType.name,
  'The value, declared for statistical purposes, of those goods in this shipment that have the same statistical heading.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Statistical Value',
  undefined
)

export const ShipmentFieldMetaFreeOnBoardValueAmount = new FieldMeta<ShipmentField>(
  ShipmentField.FreeOnBoardValueAmount,
  'FreeOnBoardValueAmount',
  'Free On Board Value',
  AmountType.name,
  'The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'FOB Value',
  undefined
)

export const ShipmentFieldMetaSpecialInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.SpecialInstructions,
  'SpecialInstructions',
  'Special Instructions',
  TextType.name,
  'Special instructions relating to this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaDeliveryInstructions = new FieldMeta<ShipmentField>(
  ShipmentField.DeliveryInstructions,
  'DeliveryInstructions',
  'Delivery Instructions',
  TextType.name,
  'Delivery instructions relating to this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaSplitConsignmentIndicator = new FieldMeta<ShipmentField>(
  ShipmentField.SplitConsignmentIndicator,
  'SplitConsignmentIndicator',
  'Split Consignment Indicator',
  IndicatorType.name,
  'An indicator that the consignment has been split in transit (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaConsignmentQuantity = new FieldMeta<ShipmentField>(
  ShipmentField.ConsignmentQuantity,
  'ConsignmentQuantity',
  'Consignment Quantity',
  QuantityType.name,
  'The total number of consignments within this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentFieldMetaConsignment = new FieldMeta<ShipmentField>(
  ShipmentField.Consignment,
  'Consignment',
  'Consignment',
  ConsignmentType.name,
  'A consignment covering this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaGoodsItem = new FieldMeta<ShipmentField>(
  ShipmentField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  GoodsItemType.name,
  'A goods item included in this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaShipmentStage = new FieldMeta<ShipmentField>(
  ShipmentField.ShipmentStage,
  'ShipmentStage',
  'Shipment Stage',
  ShipmentStageType.name,
  'A stage in the transport movement of this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaDelivery = new FieldMeta<ShipmentField>(
  ShipmentField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'The delivery of this shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaTransportHandlingUnit = new FieldMeta<ShipmentField>(
  ShipmentField.TransportHandlingUnit,
  'TransportHandlingUnit',
  'Transport Handling Unit',
  TransportHandlingUnitType.name,
  'A transport handling unit associated with this shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaReturnAddress = new FieldMeta<ShipmentField>(
  ShipmentField.ReturnAddress,
  'ReturnAddress',
  'Return Address',
  AddressType.name,
  'The address to which a shipment should be returned.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaOriginAddress = new FieldMeta<ShipmentField>(
  ShipmentField.OriginAddress,
  'OriginAddress',
  'Origin Address',
  AddressType.name,
  'The region in which the goods have been produced or manufactured, according to criteria laid down for the purposes of application of the customs tariff, or of quantitative restrictions, or of any other measure related to trade.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaFirstArrivalPortLocation = new FieldMeta<ShipmentField>(
  ShipmentField.FirstArrivalPortLocation,
  'FirstArrivalPortLocation',
  'First Arrival Port Location',
  LocationType.name,
  'The first arrival location of a shipment. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaLastExitPortLocation = new FieldMeta<ShipmentField>(
  ShipmentField.LastExitPortLocation,
  'LastExitPortLocation',
  'Last Exit Port Location',
  LocationType.name,
  'The final exporting location for a shipment. This would be a port for sea, an airport for air, a terminal for rail, or a border post for land crossing.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentFieldMetaExportCountry = new FieldMeta<ShipmentField>(
  ShipmentField.ExportCountry,
  'ExportCountry',
  'Export Country',
  CountryType.name,
  'The country from which the goods were originally exported, without any commercial transaction taking place in intermediate countries.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Country of exportation (WCO ID 062)',
  undefined
)

export const ShipmentFieldMetaFreightAllowanceCharge = new FieldMeta<ShipmentField>(
  ShipmentField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  AllowanceChargeType.name,
  'A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the contract of carriage. In addition to transport costs, this may include such elements as packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const ShipmentType: Type<ShipmentField> = {
  name: 'Shipment',
  label: 'Shipment',
  module: TypeModule.cac,
  definition: 'A class defining an identifiable collection of one or more goods items to be transported between the seller party and the buyer party. This information may be defined within a commercial contract. A shipment can be transported in different consignments (e.g., split for logistical purposes).',
  fields: ShipmentFieldMap,
}
