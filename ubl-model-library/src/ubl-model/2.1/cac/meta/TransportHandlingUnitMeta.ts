import { FieldMeta } from '../../FieldMeta'

export enum TransportHandlingUnitField {
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

export const TransportHandlingUnitFieldMetaID = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportHandlingUnitTypeCode = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportHandlingUnitTypeCode,
  'TransportHandlingUnitTypeCode',
  'Transport Handling Unit Type Code',
  'Code',
  'A code signifying the type of this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingCode = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingCode,
  'HandlingCode',
  'Handling Code',
  'Code',
  'The handling required for this transport handling unit, expressed as a code.',
  '0..1',
  'Special Handling',
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingInstructions = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingInstructions,
  'HandlingInstructions',
  'Instructions',
  'Text',
  'The handling required for this transport handling unit, expressed as text.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHazardousRiskIndicator = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Indicator',
  'Indicator',
  'An indicator that the materials contained in this transport handling unit are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  undefined,
  'Default is negative'
)

export const TransportHandlingUnitFieldMetaTotalGoodsItemQuantity = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TotalGoodsItemQuantity,
  'TotalGoodsItemQuantity',
  'Goods Item Quantity',
  'Quantity',
  'The total number of goods items in this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTotalPackageQuantity = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TotalPackageQuantity,
  'TotalPackageQuantity',
  'Package Quantity',
  'Quantity',
  'The total number of packages in this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaDamageRemarks = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.DamageRemarks,
  'DamageRemarks',
  'Remarks',
  'Text',
  'Text describing damage associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaShippingMarks = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ShippingMarks,
  'ShippingMarks',
  'Marks',
  'Text',
  'Text describing the marks and numbers on this transport handling unit.',
  '0..n',
  'Marks and Numbers, Shipping Marks',
  undefined
)

export const TransportHandlingUnitFieldMetaTraceID = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TraceID,
  'TraceID',
  'Identifier',
  'Identifier',
  'An identifier for use in tracing this transport handling unit, such as the EPC number used in RFID.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHandlingUnitDespatchLine = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HandlingUnitDespatchLine,
  'HandlingUnitDespatchLine',
  'Despatch Line',
  'DespatchLine',
  'A despatch line associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaActualPackage = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ActualPackage,
  'ActualPackage',
  'Package',
  'Package',
  'A package contained in this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaReceivedHandlingUnitReceiptLine = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ReceivedHandlingUnitReceiptLine,
  'ReceivedHandlingUnitReceiptLine',
  'Receipt Line',
  'ReceiptLine',
  'A receipt line associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportEquipment = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportEquipment,
  'TransportEquipment',
  'Transport Equipment',
  'TransportEquipment',
  'A piece of transport equipment associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaTransportMeans = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  'TransportMeans',
  'A means of transport associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaHazardousGoodsTransit = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.HazardousGoodsTransit,
  'HazardousGoodsTransit',
  'Hazardous Goods Transit',
  'HazardousGoodsTransit',
  'Transit-related information regarding a type of hazardous goods contained in this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MeasurementDimension,
  'MeasurementDimension',
  'Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMinimumTemperature = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MinimumTemperature,
  'MinimumTemperature',
  'Temperature',
  'Temperature',
  'The minimum required operating temperature of this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaMaximumTemperature = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.MaximumTemperature,
  'MaximumTemperature',
  'Temperature',
  'Temperature',
  'The maximum allowable operating temperature of this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaGoodsItem = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  'GoodsItem',
  'A goods item contained in this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaFloorSpaceMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.FloorSpaceMeasurementDimension,
  'FloorSpaceMeasurementDimension',
  'Dimension',
  'Dimension',
  'The floor space measurement dimension associated with this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaPalletSpaceMeasurementDimension = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.PalletSpaceMeasurementDimension,
  'PalletSpaceMeasurementDimension',
  'Dimension',
  'Dimension',
  'The pallet space measurement dimension associated to this transport handling unit.',
  '0..1',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaShipmentDocumentReference = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ShipmentDocumentReference,
  'ShipmentDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a shipping document associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaStatus = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.Status,
  'Status',
  'Status',
  'Status',
  'The status of this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaCustomsDeclaration = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.CustomsDeclaration,
  'CustomsDeclaration',
  'Customs Declaration',
  'CustomsDeclaration',
  'Describes identifiers or references relating to customs procedures.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaReferencedShipment = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.ReferencedShipment,
  'ReferencedShipment',
  'Shipment',
  'Shipment',
  'A shipment associated with this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export const TransportHandlingUnitFieldMetaPackage = new FieldMeta<TransportHandlingUnitField>(
  TransportHandlingUnitField.Package,
  'Package',
  'Package',
  'Package',
  'A package contained in this transport handling unit.',
  '0..n',
  undefined,
  undefined
)

export class TransportHandlingUnitFieldMeta {
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
