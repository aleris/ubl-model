import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomsDeclarationType } from './CustomsDeclarationMeta'
import { DespatchLineType } from './DespatchLineMeta'
import { DimensionType } from './DimensionMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { GoodsItemType } from './GoodsItemMeta'
import { HazardousGoodsTransitType } from './HazardousGoodsTransitMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PackageType } from './PackageMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ReceiptLineType } from './ReceiptLineMeta'
import { ShipmentType } from './ShipmentMeta'
import { StatusType } from './StatusMeta'
import { TemperatureType } from './TemperatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TransportEquipmentType } from './TransportEquipmentMeta'
import { TransportMeansType } from './TransportMeansMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportHandlingUnitField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  TransportHandlingUnitTypeCode = 'TransportHandlingUnitTypeCode',
  HandlingCode = 'HandlingCode',
  HandlingInstructions = 'HandlingInstructions',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  TotalGoodsItemQuantity = 'TotalGoodsItemQuantity',
  TotalPackageQuantity = 'TotalPackageQuantity',
  DamageRemarks = 'DamageRemarks',
  ShippingMarks = 'ShippingMarks',
  TraceID = 'TraceID',
  HandlingUnitDespatchLine = 'HandlingUnitDespatchLine',
  ActualPackage = 'ActualPackage',
  ReceivedHandlingUnitReceiptLine = 'ReceivedHandlingUnitReceiptLine',
  TransportEquipment = 'TransportEquipment',
  TransportMeans = 'TransportMeans',
  HazardousGoodsTransit = 'HazardousGoodsTransit',
  MeasurementDimension = 'MeasurementDimension',
  MinimumTemperature = 'MinimumTemperature',
  MaximumTemperature = 'MaximumTemperature',
  GoodsItem = 'GoodsItem',
  FloorSpaceMeasurementDimension = 'FloorSpaceMeasurementDimension',
  PalletSpaceMeasurementDimension = 'PalletSpaceMeasurementDimension',
  ShipmentDocumentReference = 'ShipmentDocumentReference',
  Status = 'Status',
  CustomsDeclaration = 'CustomsDeclaration',
  ReferencedShipment = 'ReferencedShipment',
  Package = 'Package'
}

export const TransportHandlingUnitFieldMetaUBLExtensions = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaID = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportHandlingUnitTypeCode = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportHandlingUnitTypeCode,
  'TransportHandlingUnitTypeCode',
  'Transport Handling Unit Type Code',
  CodeType.name,
  'A code signifying the type of this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingCode = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingCode,
  'HandlingCode',
  'Handling Code',
  CodeType.name,
  'The handling required for this transport handling unit, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Special Handling',
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingInstructions = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingInstructions,
  'HandlingInstructions',
  'Handling Instructions',
  TextType.name,
  'The handling required for this transport handling unit, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHazardousRiskIndicator = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  IndicatorType.name,
  'An indicator that the materials contained in this transport handling unit are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Default is negative'
)

export const TransportHandlingUnitFieldMetaTotalGoodsItemQuantity = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TotalGoodsItemQuantity,
  'TotalGoodsItemQuantity',
  'Total Goods Item Quantity',
  QuantityType.name,
  'The total number of goods items in this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTotalPackageQuantity = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TotalPackageQuantity,
  'TotalPackageQuantity',
  'Total Package Quantity',
  QuantityType.name,
  'The total number of packages in this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaDamageRemarks = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.DamageRemarks,
  'DamageRemarks',
  'Damage Remarks',
  TextType.name,
  'Text describing damage associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaShippingMarks = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ShippingMarks,
  'ShippingMarks',
  'Shipping Marks',
  TextType.name,
  'Text describing the marks and numbers on this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Marks and Numbers, Shipping Marks',
  undefined
)

export const TransportHandlingUnitFieldMetaTraceID = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TraceID,
  'TraceID',
  'Trace Identifier',
  IdentifierType.name,
  'An identifier for use in tracing this transport handling unit, such as the EPC number used in RFID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingUnitDespatchLine = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingUnitDespatchLine,
  'HandlingUnitDespatchLine',
  'Handling Unit Despatch Line',
  DespatchLineType.name,
  'A despatch line associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaActualPackage = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ActualPackage,
  'ActualPackage',
  'Actual Package',
  PackageType.name,
  'A package contained in this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaReceivedHandlingUnitReceiptLine = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ReceivedHandlingUnitReceiptLine,
  'ReceivedHandlingUnitReceiptLine',
  'Received Handling Unit Receipt Line',
  ReceiptLineType.name,
  'A receipt line associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportEquipment = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportEquipment,
  'TransportEquipment',
  'Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportMeans = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  TransportMeansType.name,
  'A means of transport associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHazardousGoodsTransit = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HazardousGoodsTransit,
  'HazardousGoodsTransit',
  'Hazardous Goods Transit',
  HazardousGoodsTransitType.name,
  'Transit-related information regarding a type of hazardous goods contained in this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMinimumTemperature = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MinimumTemperature,
  'MinimumTemperature',
  'Minimum Temperature',
  TemperatureType.name,
  'The minimum required operating temperature of this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMaximumTemperature = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MaximumTemperature,
  'MaximumTemperature',
  'Maximum Temperature',
  TemperatureType.name,
  'The maximum allowable operating temperature of this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaGoodsItem = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  GoodsItemType.name,
  'A goods item contained in this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaFloorSpaceMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.FloorSpaceMeasurementDimension,
  'FloorSpaceMeasurementDimension',
  'Floor Space Measurement Dimension',
  DimensionType.name,
  'The floor space measurement dimension associated with this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaPalletSpaceMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.PalletSpaceMeasurementDimension,
  'PalletSpaceMeasurementDimension',
  'Pallet Space Measurement Dimension',
  DimensionType.name,
  'The pallet space measurement dimension associated to this transport handling unit.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaShipmentDocumentReference = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ShipmentDocumentReference,
  'ShipmentDocumentReference',
  'Shipment Document Reference',
  DocumentReferenceType.name,
  'A reference to a shipping document associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaStatus = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.Status,
  'Status',
  'Status',
  StatusType.name,
  'The status of this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaCustomsDeclaration = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.CustomsDeclaration,
  'CustomsDeclaration',
  'Customs Declaration',
  CustomsDeclarationType.name,
  'Describes identifiers or references relating to customs procedures.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaReferencedShipment = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ReferencedShipment,
  'ReferencedShipment',
  'Referenced Shipment',
  ShipmentType.name,
  'A shipment associated with this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaPackage = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.Package,
  'Package',
  'Package',
  PackageType.name,
  'A package contained in this transport handling unit.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportHandlingUnitFieldMeta {
  public static readonly UBLExtensions = TransportHandlingUnitFieldMetaUBLExtensions
  public static readonly ID = TransportHandlingUnitFieldMetaID
  public static readonly TransportHandlingUnitTypeCode = TransportHandlingUnitFieldMetaTransportHandlingUnitTypeCode
  public static readonly HandlingCode = TransportHandlingUnitFieldMetaHandlingCode
  public static readonly HandlingInstructions = TransportHandlingUnitFieldMetaHandlingInstructions
  public static readonly HazardousRiskIndicator = TransportHandlingUnitFieldMetaHazardousRiskIndicator
  public static readonly TotalGoodsItemQuantity = TransportHandlingUnitFieldMetaTotalGoodsItemQuantity
  public static readonly TotalPackageQuantity = TransportHandlingUnitFieldMetaTotalPackageQuantity
  public static readonly DamageRemarks = TransportHandlingUnitFieldMetaDamageRemarks
  public static readonly ShippingMarks = TransportHandlingUnitFieldMetaShippingMarks
  public static readonly TraceID = TransportHandlingUnitFieldMetaTraceID
  public static readonly HandlingUnitDespatchLine = TransportHandlingUnitFieldMetaHandlingUnitDespatchLine
  public static readonly ActualPackage = TransportHandlingUnitFieldMetaActualPackage
  public static readonly ReceivedHandlingUnitReceiptLine = TransportHandlingUnitFieldMetaReceivedHandlingUnitReceiptLine
  public static readonly TransportEquipment = TransportHandlingUnitFieldMetaTransportEquipment
  public static readonly TransportMeans = TransportHandlingUnitFieldMetaTransportMeans
  public static readonly HazardousGoodsTransit = TransportHandlingUnitFieldMetaHazardousGoodsTransit
  public static readonly MeasurementDimension = TransportHandlingUnitFieldMetaMeasurementDimension
  public static readonly MinimumTemperature = TransportHandlingUnitFieldMetaMinimumTemperature
  public static readonly MaximumTemperature = TransportHandlingUnitFieldMetaMaximumTemperature
  public static readonly GoodsItem = TransportHandlingUnitFieldMetaGoodsItem
  public static readonly FloorSpaceMeasurementDimension = TransportHandlingUnitFieldMetaFloorSpaceMeasurementDimension
  public static readonly PalletSpaceMeasurementDimension = TransportHandlingUnitFieldMetaPalletSpaceMeasurementDimension
  public static readonly ShipmentDocumentReference = TransportHandlingUnitFieldMetaShipmentDocumentReference
  public static readonly Status = TransportHandlingUnitFieldMetaStatus
  public static readonly CustomsDeclaration = TransportHandlingUnitFieldMetaCustomsDeclaration
  public static readonly ReferencedShipment = TransportHandlingUnitFieldMetaReferencedShipment
  public static readonly Package = TransportHandlingUnitFieldMetaPackage
}

export const TransportHandlingUnitFieldMap = new Map([
  [TransportHandlingUnitField.UBLExtensions, TransportHandlingUnitFieldMetaUBLExtensions],
  [TransportHandlingUnitField.ID, TransportHandlingUnitFieldMetaID],
  [TransportHandlingUnitField.TransportHandlingUnitTypeCode, TransportHandlingUnitFieldMetaTransportHandlingUnitTypeCode],
  [TransportHandlingUnitField.HandlingCode, TransportHandlingUnitFieldMetaHandlingCode],
  [TransportHandlingUnitField.HandlingInstructions, TransportHandlingUnitFieldMetaHandlingInstructions],
  [TransportHandlingUnitField.HazardousRiskIndicator, TransportHandlingUnitFieldMetaHazardousRiskIndicator],
  [TransportHandlingUnitField.TotalGoodsItemQuantity, TransportHandlingUnitFieldMetaTotalGoodsItemQuantity],
  [TransportHandlingUnitField.TotalPackageQuantity, TransportHandlingUnitFieldMetaTotalPackageQuantity],
  [TransportHandlingUnitField.DamageRemarks, TransportHandlingUnitFieldMetaDamageRemarks],
  [TransportHandlingUnitField.ShippingMarks, TransportHandlingUnitFieldMetaShippingMarks],
  [TransportHandlingUnitField.TraceID, TransportHandlingUnitFieldMetaTraceID],
  [TransportHandlingUnitField.HandlingUnitDespatchLine, TransportHandlingUnitFieldMetaHandlingUnitDespatchLine],
  [TransportHandlingUnitField.ActualPackage, TransportHandlingUnitFieldMetaActualPackage],
  [TransportHandlingUnitField.ReceivedHandlingUnitReceiptLine, TransportHandlingUnitFieldMetaReceivedHandlingUnitReceiptLine],
  [TransportHandlingUnitField.TransportEquipment, TransportHandlingUnitFieldMetaTransportEquipment],
  [TransportHandlingUnitField.TransportMeans, TransportHandlingUnitFieldMetaTransportMeans],
  [TransportHandlingUnitField.HazardousGoodsTransit, TransportHandlingUnitFieldMetaHazardousGoodsTransit],
  [TransportHandlingUnitField.MeasurementDimension, TransportHandlingUnitFieldMetaMeasurementDimension],
  [TransportHandlingUnitField.MinimumTemperature, TransportHandlingUnitFieldMetaMinimumTemperature],
  [TransportHandlingUnitField.MaximumTemperature, TransportHandlingUnitFieldMetaMaximumTemperature],
  [TransportHandlingUnitField.GoodsItem, TransportHandlingUnitFieldMetaGoodsItem],
  [TransportHandlingUnitField.FloorSpaceMeasurementDimension, TransportHandlingUnitFieldMetaFloorSpaceMeasurementDimension],
  [TransportHandlingUnitField.PalletSpaceMeasurementDimension, TransportHandlingUnitFieldMetaPalletSpaceMeasurementDimension],
  [TransportHandlingUnitField.ShipmentDocumentReference, TransportHandlingUnitFieldMetaShipmentDocumentReference],
  [TransportHandlingUnitField.Status, TransportHandlingUnitFieldMetaStatus],
  [TransportHandlingUnitField.CustomsDeclaration, TransportHandlingUnitFieldMetaCustomsDeclaration],
  [TransportHandlingUnitField.ReferencedShipment, TransportHandlingUnitFieldMetaReferencedShipment],
  [TransportHandlingUnitField.Package, TransportHandlingUnitFieldMetaPackage]
])

export const TransportHandlingUnitType: Type<TransportHandlingUnitField> = {
  name: 'TransportHandlingUnit',
  label: 'Transport Handling Unit',
  module: TypeModule.cac,
  definition: 'A class to describe a uniquely identifiable unit consisting of one or more packages, goods items, or pieces of transport equipment.',
  fields: TransportHandlingUnitFieldMap,
}
