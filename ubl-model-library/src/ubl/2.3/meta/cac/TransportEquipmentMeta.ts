import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DeliveryType } from './DeliveryMeta'
import { DespatchType } from './DespatchMeta'
import { DimensionType } from './DimensionMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { GoodsItemType } from './GoodsItemMeta'
import { HazardousGoodsTransitType } from './HazardousGoodsTransitMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from './LocationMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PackageType } from './PackageMeta'
import { PartyType } from './PartyMeta'
import { PickupType } from './PickupMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { TemperatureType } from './TemperatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TradingTermsType } from './TradingTermsMeta'
import { TransportEquipmentSealType } from './TransportEquipmentSealMeta'
import { TransportEventType } from './TransportEventMeta'
import { TransportHandlingUnitType } from './TransportHandlingUnitMeta'
import { TransportMeansType } from './TransportMeansMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { VerifiedGrossMassType } from './VerifiedGrossMassMeta'

export enum TransportEquipmentField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ReferencedConsignmentID = 'ReferencedConsignmentID',
  TransportEquipmentTypeCode = 'TransportEquipmentTypeCode',
  ProviderTypeCode = 'ProviderTypeCode',
  OwnerTypeCode = 'OwnerTypeCode',
  SizeTypeCode = 'SizeTypeCode',
  DispositionCode = 'DispositionCode',
  FullnessIndicationCode = 'FullnessIndicationCode',
  RefrigerationOnIndicator = 'RefrigerationOnIndicator',
  Information = 'Information',
  ReturnabilityIndicator = 'ReturnabilityIndicator',
  LegalStatusIndicator = 'LegalStatusIndicator',
  AirFlowPercent = 'AirFlowPercent',
  HumidityPercent = 'HumidityPercent',
  AnimalFoodApprovedIndicator = 'AnimalFoodApprovedIndicator',
  HumanFoodApprovedIndicator = 'HumanFoodApprovedIndicator',
  DangerousGoodsApprovedIndicator = 'DangerousGoodsApprovedIndicator',
  RefrigeratedIndicator = 'RefrigeratedIndicator',
  Characteristics = 'Characteristics',
  DamageRemarks = 'DamageRemarks',
  Description = 'Description',
  SpecialTransportRequirements = 'SpecialTransportRequirements',
  GrossWeightMeasure = 'GrossWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  TareWeightMeasure = 'TareWeightMeasure',
  TrackingDeviceCode = 'TrackingDeviceCode',
  PowerIndicator = 'PowerIndicator',
  TraceID = 'TraceID',
  MeasurementDimension = 'MeasurementDimension',
  TransportEquipmentSeal = 'TransportEquipmentSeal',
  MinimumTemperature = 'MinimumTemperature',
  MaximumTemperature = 'MaximumTemperature',
  ProviderParty = 'ProviderParty',
  LoadingProofParty = 'LoadingProofParty',
  SupplierParty = 'SupplierParty',
  OwnerParty = 'OwnerParty',
  OperatingParty = 'OperatingParty',
  LoadingLocation = 'LoadingLocation',
  UnloadingLocation = 'UnloadingLocation',
  StorageLocation = 'StorageLocation',
  PositioningTransportEvent = 'PositioningTransportEvent',
  QuarantineTransportEvent = 'QuarantineTransportEvent',
  DeliveryTransportEvent = 'DeliveryTransportEvent',
  PickupTransportEvent = 'PickupTransportEvent',
  HandlingTransportEvent = 'HandlingTransportEvent',
  LoadingTransportEvent = 'LoadingTransportEvent',
  TransportEvent = 'TransportEvent',
  ApplicableTransportMeans = 'ApplicableTransportMeans',
  HaulageTradingTerms = 'HaulageTradingTerms',
  HazardousGoodsTransit = 'HazardousGoodsTransit',
  PackagedTransportHandlingUnit = 'PackagedTransportHandlingUnit',
  ServiceAllowanceCharge = 'ServiceAllowanceCharge',
  FreightAllowanceCharge = 'FreightAllowanceCharge',
  AttachedTransportEquipment = 'AttachedTransportEquipment',
  Delivery = 'Delivery',
  Pickup = 'Pickup',
  Despatch = 'Despatch',
  ShipmentDocumentReference = 'ShipmentDocumentReference',
  ContainedInTransportEquipment = 'ContainedInTransportEquipment',
  Package = 'Package',
  GoodsItem = 'GoodsItem',
  VerifiedGrossMass = 'VerifiedGrossMass'
}

export const TransportEquipmentFieldMetaUBLExtensions = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaID = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'OCLU 1234567'
)

export const TransportEquipmentFieldMetaReferencedConsignmentID = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ReferencedConsignmentID,
  'ReferencedConsignmentID',
  'Referenced Consignment Identifier',
  IdentifierType.name,
  'An identifier for the consignment contained by this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTransportEquipmentTypeCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TransportEquipmentTypeCode,
  'TransportEquipmentTypeCode',
  'Transport Equipment Type Code',
  CodeType.name,
  'A code signifying the type of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaProviderTypeCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ProviderTypeCode,
  'ProviderTypeCode',
  'Provider Type Code',
  CodeType.name,
  'A code signifying the type of provider of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaOwnerTypeCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.OwnerTypeCode,
  'OwnerTypeCode',
  'Owner Type Code',
  CodeType.name,
  'A code signifying the type of owner of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaSizeTypeCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.SizeTypeCode,
  'SizeTypeCode',
  'Size Type Code',
  CodeType.name,
  'A code signifying the size and type of this piece of piece of transport equipment. When the piece of transport equipment is a shipping container, it is recommended to use ContainerSizeTypeCode for validation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Container Size Type Code',
  undefined
)

export const TransportEquipmentFieldMetaDispositionCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.DispositionCode,
  'DispositionCode',
  'Disposition Code',
  CodeType.name,
  'A code signifying the current disposition of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Status',
  undefined
)

export const TransportEquipmentFieldMetaFullnessIndicationCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.FullnessIndicationCode,
  'FullnessIndicationCode',
  'Fullness Indication Code',
  CodeType.name,
  'A code signifying whether this piece of transport equipment is full, partially full, or empty.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaRefrigerationOnIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.RefrigerationOnIndicator,
  'RefrigerationOnIndicator',
  'Refrigeration On Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment\'s refrigeration is on (true) or off (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaInformation = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Information,
  'Information',
  'Information',
  TextType.name,
  'Additional information about this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaReturnabilityIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ReturnabilityIndicator,
  'ReturnabilityIndicator',
  'Returnability Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment is returnable (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaLegalStatusIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.LegalStatusIndicator,
  'LegalStatusIndicator',
  'Legal Status Indicator',
  IndicatorType.name,
  'An indication of the legal status of this piece of transport equipment with respect to the Container Convention Code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaAirFlowPercent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.AirFlowPercent,
  'AirFlowPercent',
  'Air Flow Percent',
  NumericType.name,
  'The percent of the airflow within this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaHumidityPercent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.HumidityPercent,
  'HumidityPercent',
  'Humidity Percent',
  NumericType.name,
  'The percent humidity within this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaAnimalFoodApprovedIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.AnimalFoodApprovedIndicator,
  'AnimalFoodApprovedIndicator',
  'Animal Food Approved Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment is approved for animal food (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaHumanFoodApprovedIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.HumanFoodApprovedIndicator,
  'HumanFoodApprovedIndicator',
  'Human Food Approved Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment is approved for human food (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDangerousGoodsApprovedIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.DangerousGoodsApprovedIndicator,
  'DangerousGoodsApprovedIndicator',
  'Dangerous Goods Approved Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment is approved for dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaRefrigeratedIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.RefrigeratedIndicator,
  'RefrigeratedIndicator',
  'Refrigerated Indicator',
  IndicatorType.name,
  'An indicator that this piece of transport equipment is refrigerated (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaCharacteristics = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Characteristics,
  'Characteristics',
  'Characteristics',
  TextType.name,
  'Characteristics of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDamageRemarks = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.DamageRemarks,
  'DamageRemarks',
  'Damage Remarks',
  TextType.name,
  'Damage associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDescription = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaSpecialTransportRequirements = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.SpecialTransportRequirements,
  'SpecialTransportRequirements',
  'Special Transport Requirements',
  TextType.name,
  'Special transport requirements expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaGrossWeightMeasure = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  MeasureType.name,
  'The gross weight of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaGrossVolumeMeasure = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  MeasureType.name,
  'The gross volume of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTareWeightMeasure = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TareWeightMeasure,
  'TareWeightMeasure',
  'Tare Weight',
  MeasureType.name,
  'The weight of this piece of transport equipment when empty.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTrackingDeviceCode = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TrackingDeviceCode,
  'TrackingDeviceCode',
  'Tracking Device Code',
  CodeType.name,
  'A code signifying the tracking device for this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaPowerIndicator = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.PowerIndicator,
  'PowerIndicator',
  'Power',
  IndicatorType.name,
  'An indicator that this piece of transport equipment can supply power (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTraceID = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TraceID,
  'TraceID',
  'Trace Identifier',
  IdentifierType.name,
  'An identifier for use in tracing this piece of transport equipment, such as the EPC number used in RFID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaMeasurementDimension = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTransportEquipmentSeal = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TransportEquipmentSeal,
  'TransportEquipmentSeal',
  'Transport Equipment Seal',
  TransportEquipmentSealType.name,
  'A seal securing the door of a piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaMinimumTemperature = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.MinimumTemperature,
  'MinimumTemperature',
  'Minimum Temperature',
  TemperatureType.name,
  'In the case of a refrigeration unit, the minimum allowable operating temperature for this container.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaMaximumTemperature = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.MaximumTemperature,
  'MaximumTemperature',
  'Maximum Temperature',
  TemperatureType.name,
  'In the case of a refrigeration unit, the maximum allowable operating temperature for this container.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaProviderParty = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ProviderParty,
  'ProviderParty',
  'Provider Party',
  PartyType.name,
  'The party providing this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaLoadingProofParty = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.LoadingProofParty,
  'LoadingProofParty',
  'Loading Proof Party',
  PartyType.name,
  'The authorized party responsible for certifying that the goods were loaded into this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Party responsible for proof of vanning (WCO ID 059)',
  undefined
)

export const TransportEquipmentFieldMetaSupplierParty = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.SupplierParty,
  'SupplierParty',
  'Supplier Party',
  SupplierPartyType.name,
  'The party that supplies this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Party responsible for proof of vanning (WCO ID 059)',
  undefined
)

export const TransportEquipmentFieldMetaOwnerParty = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.OwnerParty,
  'OwnerParty',
  'Owner Party',
  PartyType.name,
  'The party that owns this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Party responsible for proof of vanning (WCO ID 059)',
  undefined
)

export const TransportEquipmentFieldMetaOperatingParty = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.OperatingParty,
  'OperatingParty',
  'Operating Party',
  PartyType.name,
  'The party that operates this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Party responsible for proof of vanning (WCO ID 059)',
  undefined
)

export const TransportEquipmentFieldMetaLoadingLocation = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.LoadingLocation,
  'LoadingLocation',
  'Loading Location',
  LocationType.name,
  'The location where this piece of transport equipment is loaded.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Vanning address (WCO ID 068), Stuffing location',
  undefined
)

export const TransportEquipmentFieldMetaUnloadingLocation = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.UnloadingLocation,
  'UnloadingLocation',
  'Unloading Location',
  LocationType.name,
  'The location where this piece of transport equipment is unloaded.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaStorageLocation = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.StorageLocation,
  'StorageLocation',
  'Storage Location',
  LocationType.name,
  'The location where this piece of transport equipment is being stored.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaPositioningTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.PositioningTransportEvent,
  'PositioningTransportEvent',
  'Positioning Transport Event',
  TransportEventType.name,
  'A positioning of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaQuarantineTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.QuarantineTransportEvent,
  'QuarantineTransportEvent',
  'Quarantine Transport Event',
  TransportEventType.name,
  'A quarantine of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDeliveryTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.DeliveryTransportEvent,
  'DeliveryTransportEvent',
  'Delivery Transport Event',
  TransportEventType.name,
  'A delivery of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaPickupTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.PickupTransportEvent,
  'PickupTransportEvent',
  'Pickup Transport Event',
  TransportEventType.name,
  'A pickup of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaHandlingTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.HandlingTransportEvent,
  'HandlingTransportEvent',
  'Handling Transport Event',
  TransportEventType.name,
  'A handling of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaLoadingTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.LoadingTransportEvent,
  'LoadingTransportEvent',
  'Loading Transport Event',
  TransportEventType.name,
  'A loading of this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaTransportEvent = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  TransportEventType.name,
  'A transport event associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaApplicableTransportMeans = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ApplicableTransportMeans,
  'ApplicableTransportMeans',
  'Applicable Transport Means',
  TransportMeansType.name,
  'The applicable transport means associated with this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaHaulageTradingTerms = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.HaulageTradingTerms,
  'HaulageTradingTerms',
  'Haulage Trading Terms',
  TradingTermsType.name,
  'A set of haulage trading terms associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaHazardousGoodsTransit = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.HazardousGoodsTransit,
  'HazardousGoodsTransit',
  'Hazardous Goods Transit',
  HazardousGoodsTransitType.name,
  'Transit-related information regarding a type of hazardous goods contained in this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaPackagedTransportHandlingUnit = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.PackagedTransportHandlingUnit,
  'PackagedTransportHandlingUnit',
  'Packaged Transport Handling Unit',
  TransportHandlingUnitType.name,
  'A packaged transport handling unit associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaServiceAllowanceCharge = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ServiceAllowanceCharge,
  'ServiceAllowanceCharge',
  'Service Allowance Charge',
  AllowanceChargeType.name,
  'A service allowance charge associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaFreightAllowanceCharge = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  AllowanceChargeType.name,
  'A freight allowance charge associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaAttachedTransportEquipment = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.AttachedTransportEquipment,
  'AttachedTransportEquipment',
  'Attached Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment attached to this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDelivery = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'The delivery of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaPickup = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Pickup,
  'Pickup',
  'Pickup',
  PickupType.name,
  'The pickup of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaDespatch = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Despatch,
  'Despatch',
  'Despatch',
  DespatchType.name,
  'The despatch of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaShipmentDocumentReference = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ShipmentDocumentReference,
  'ShipmentDocumentReference',
  'Shipment Document Reference',
  DocumentReferenceType.name,
  'A reference to a shipping document associated with this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaContainedInTransportEquipment = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.ContainedInTransportEquipment,
  'ContainedInTransportEquipment',
  'Contained In Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment contained in this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'e.g. pallets inside containers'
)

export const TransportEquipmentFieldMetaPackage = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.Package,
  'Package',
  'Package',
  PackageType.name,
  'A package contained in this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaGoodsItem = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  GoodsItemType.name,
  'A goods item contained in this piece of transport equipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportEquipmentFieldMetaVerifiedGrossMass = new FieldMeta<TransportEquipmentField>(
  TransportEquipmentField.VerifiedGrossMass,
  'VerifiedGrossMass',
  'Verified Gross Mass',
  VerifiedGrossMassType.name,
  'The verified gross mass of this piece of transport equipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportEquipmentFieldMeta {
  public static readonly UBLExtensions = TransportEquipmentFieldMetaUBLExtensions
  public static readonly ID = TransportEquipmentFieldMetaID
  public static readonly ReferencedConsignmentID = TransportEquipmentFieldMetaReferencedConsignmentID
  public static readonly TransportEquipmentTypeCode = TransportEquipmentFieldMetaTransportEquipmentTypeCode
  public static readonly ProviderTypeCode = TransportEquipmentFieldMetaProviderTypeCode
  public static readonly OwnerTypeCode = TransportEquipmentFieldMetaOwnerTypeCode
  public static readonly SizeTypeCode = TransportEquipmentFieldMetaSizeTypeCode
  public static readonly DispositionCode = TransportEquipmentFieldMetaDispositionCode
  public static readonly FullnessIndicationCode = TransportEquipmentFieldMetaFullnessIndicationCode
  public static readonly RefrigerationOnIndicator = TransportEquipmentFieldMetaRefrigerationOnIndicator
  public static readonly Information = TransportEquipmentFieldMetaInformation
  public static readonly ReturnabilityIndicator = TransportEquipmentFieldMetaReturnabilityIndicator
  public static readonly LegalStatusIndicator = TransportEquipmentFieldMetaLegalStatusIndicator
  public static readonly AirFlowPercent = TransportEquipmentFieldMetaAirFlowPercent
  public static readonly HumidityPercent = TransportEquipmentFieldMetaHumidityPercent
  public static readonly AnimalFoodApprovedIndicator = TransportEquipmentFieldMetaAnimalFoodApprovedIndicator
  public static readonly HumanFoodApprovedIndicator = TransportEquipmentFieldMetaHumanFoodApprovedIndicator
  public static readonly DangerousGoodsApprovedIndicator = TransportEquipmentFieldMetaDangerousGoodsApprovedIndicator
  public static readonly RefrigeratedIndicator = TransportEquipmentFieldMetaRefrigeratedIndicator
  public static readonly Characteristics = TransportEquipmentFieldMetaCharacteristics
  public static readonly DamageRemarks = TransportEquipmentFieldMetaDamageRemarks
  public static readonly Description = TransportEquipmentFieldMetaDescription
  public static readonly SpecialTransportRequirements = TransportEquipmentFieldMetaSpecialTransportRequirements
  public static readonly GrossWeightMeasure = TransportEquipmentFieldMetaGrossWeightMeasure
  public static readonly GrossVolumeMeasure = TransportEquipmentFieldMetaGrossVolumeMeasure
  public static readonly TareWeightMeasure = TransportEquipmentFieldMetaTareWeightMeasure
  public static readonly TrackingDeviceCode = TransportEquipmentFieldMetaTrackingDeviceCode
  public static readonly PowerIndicator = TransportEquipmentFieldMetaPowerIndicator
  public static readonly TraceID = TransportEquipmentFieldMetaTraceID
  public static readonly MeasurementDimension = TransportEquipmentFieldMetaMeasurementDimension
  public static readonly TransportEquipmentSeal = TransportEquipmentFieldMetaTransportEquipmentSeal
  public static readonly MinimumTemperature = TransportEquipmentFieldMetaMinimumTemperature
  public static readonly MaximumTemperature = TransportEquipmentFieldMetaMaximumTemperature
  public static readonly ProviderParty = TransportEquipmentFieldMetaProviderParty
  public static readonly LoadingProofParty = TransportEquipmentFieldMetaLoadingProofParty
  public static readonly SupplierParty = TransportEquipmentFieldMetaSupplierParty
  public static readonly OwnerParty = TransportEquipmentFieldMetaOwnerParty
  public static readonly OperatingParty = TransportEquipmentFieldMetaOperatingParty
  public static readonly LoadingLocation = TransportEquipmentFieldMetaLoadingLocation
  public static readonly UnloadingLocation = TransportEquipmentFieldMetaUnloadingLocation
  public static readonly StorageLocation = TransportEquipmentFieldMetaStorageLocation
  public static readonly PositioningTransportEvent = TransportEquipmentFieldMetaPositioningTransportEvent
  public static readonly QuarantineTransportEvent = TransportEquipmentFieldMetaQuarantineTransportEvent
  public static readonly DeliveryTransportEvent = TransportEquipmentFieldMetaDeliveryTransportEvent
  public static readonly PickupTransportEvent = TransportEquipmentFieldMetaPickupTransportEvent
  public static readonly HandlingTransportEvent = TransportEquipmentFieldMetaHandlingTransportEvent
  public static readonly LoadingTransportEvent = TransportEquipmentFieldMetaLoadingTransportEvent
  public static readonly TransportEvent = TransportEquipmentFieldMetaTransportEvent
  public static readonly ApplicableTransportMeans = TransportEquipmentFieldMetaApplicableTransportMeans
  public static readonly HaulageTradingTerms = TransportEquipmentFieldMetaHaulageTradingTerms
  public static readonly HazardousGoodsTransit = TransportEquipmentFieldMetaHazardousGoodsTransit
  public static readonly PackagedTransportHandlingUnit = TransportEquipmentFieldMetaPackagedTransportHandlingUnit
  public static readonly ServiceAllowanceCharge = TransportEquipmentFieldMetaServiceAllowanceCharge
  public static readonly FreightAllowanceCharge = TransportEquipmentFieldMetaFreightAllowanceCharge
  public static readonly AttachedTransportEquipment = TransportEquipmentFieldMetaAttachedTransportEquipment
  public static readonly Delivery = TransportEquipmentFieldMetaDelivery
  public static readonly Pickup = TransportEquipmentFieldMetaPickup
  public static readonly Despatch = TransportEquipmentFieldMetaDespatch
  public static readonly ShipmentDocumentReference = TransportEquipmentFieldMetaShipmentDocumentReference
  public static readonly ContainedInTransportEquipment = TransportEquipmentFieldMetaContainedInTransportEquipment
  public static readonly Package = TransportEquipmentFieldMetaPackage
  public static readonly GoodsItem = TransportEquipmentFieldMetaGoodsItem
  public static readonly VerifiedGrossMass = TransportEquipmentFieldMetaVerifiedGrossMass
}

export const TransportEquipmentFieldMap = new Map([
  [TransportEquipmentField.UBLExtensions, TransportEquipmentFieldMetaUBLExtensions],
  [TransportEquipmentField.ID, TransportEquipmentFieldMetaID],
  [TransportEquipmentField.ReferencedConsignmentID, TransportEquipmentFieldMetaReferencedConsignmentID],
  [TransportEquipmentField.TransportEquipmentTypeCode, TransportEquipmentFieldMetaTransportEquipmentTypeCode],
  [TransportEquipmentField.ProviderTypeCode, TransportEquipmentFieldMetaProviderTypeCode],
  [TransportEquipmentField.OwnerTypeCode, TransportEquipmentFieldMetaOwnerTypeCode],
  [TransportEquipmentField.SizeTypeCode, TransportEquipmentFieldMetaSizeTypeCode],
  [TransportEquipmentField.DispositionCode, TransportEquipmentFieldMetaDispositionCode],
  [TransportEquipmentField.FullnessIndicationCode, TransportEquipmentFieldMetaFullnessIndicationCode],
  [TransportEquipmentField.RefrigerationOnIndicator, TransportEquipmentFieldMetaRefrigerationOnIndicator],
  [TransportEquipmentField.Information, TransportEquipmentFieldMetaInformation],
  [TransportEquipmentField.ReturnabilityIndicator, TransportEquipmentFieldMetaReturnabilityIndicator],
  [TransportEquipmentField.LegalStatusIndicator, TransportEquipmentFieldMetaLegalStatusIndicator],
  [TransportEquipmentField.AirFlowPercent, TransportEquipmentFieldMetaAirFlowPercent],
  [TransportEquipmentField.HumidityPercent, TransportEquipmentFieldMetaHumidityPercent],
  [TransportEquipmentField.AnimalFoodApprovedIndicator, TransportEquipmentFieldMetaAnimalFoodApprovedIndicator],
  [TransportEquipmentField.HumanFoodApprovedIndicator, TransportEquipmentFieldMetaHumanFoodApprovedIndicator],
  [TransportEquipmentField.DangerousGoodsApprovedIndicator, TransportEquipmentFieldMetaDangerousGoodsApprovedIndicator],
  [TransportEquipmentField.RefrigeratedIndicator, TransportEquipmentFieldMetaRefrigeratedIndicator],
  [TransportEquipmentField.Characteristics, TransportEquipmentFieldMetaCharacteristics],
  [TransportEquipmentField.DamageRemarks, TransportEquipmentFieldMetaDamageRemarks],
  [TransportEquipmentField.Description, TransportEquipmentFieldMetaDescription],
  [TransportEquipmentField.SpecialTransportRequirements, TransportEquipmentFieldMetaSpecialTransportRequirements],
  [TransportEquipmentField.GrossWeightMeasure, TransportEquipmentFieldMetaGrossWeightMeasure],
  [TransportEquipmentField.GrossVolumeMeasure, TransportEquipmentFieldMetaGrossVolumeMeasure],
  [TransportEquipmentField.TareWeightMeasure, TransportEquipmentFieldMetaTareWeightMeasure],
  [TransportEquipmentField.TrackingDeviceCode, TransportEquipmentFieldMetaTrackingDeviceCode],
  [TransportEquipmentField.PowerIndicator, TransportEquipmentFieldMetaPowerIndicator],
  [TransportEquipmentField.TraceID, TransportEquipmentFieldMetaTraceID],
  [TransportEquipmentField.MeasurementDimension, TransportEquipmentFieldMetaMeasurementDimension],
  [TransportEquipmentField.TransportEquipmentSeal, TransportEquipmentFieldMetaTransportEquipmentSeal],
  [TransportEquipmentField.MinimumTemperature, TransportEquipmentFieldMetaMinimumTemperature],
  [TransportEquipmentField.MaximumTemperature, TransportEquipmentFieldMetaMaximumTemperature],
  [TransportEquipmentField.ProviderParty, TransportEquipmentFieldMetaProviderParty],
  [TransportEquipmentField.LoadingProofParty, TransportEquipmentFieldMetaLoadingProofParty],
  [TransportEquipmentField.SupplierParty, TransportEquipmentFieldMetaSupplierParty],
  [TransportEquipmentField.OwnerParty, TransportEquipmentFieldMetaOwnerParty],
  [TransportEquipmentField.OperatingParty, TransportEquipmentFieldMetaOperatingParty],
  [TransportEquipmentField.LoadingLocation, TransportEquipmentFieldMetaLoadingLocation],
  [TransportEquipmentField.UnloadingLocation, TransportEquipmentFieldMetaUnloadingLocation],
  [TransportEquipmentField.StorageLocation, TransportEquipmentFieldMetaStorageLocation],
  [TransportEquipmentField.PositioningTransportEvent, TransportEquipmentFieldMetaPositioningTransportEvent],
  [TransportEquipmentField.QuarantineTransportEvent, TransportEquipmentFieldMetaQuarantineTransportEvent],
  [TransportEquipmentField.DeliveryTransportEvent, TransportEquipmentFieldMetaDeliveryTransportEvent],
  [TransportEquipmentField.PickupTransportEvent, TransportEquipmentFieldMetaPickupTransportEvent],
  [TransportEquipmentField.HandlingTransportEvent, TransportEquipmentFieldMetaHandlingTransportEvent],
  [TransportEquipmentField.LoadingTransportEvent, TransportEquipmentFieldMetaLoadingTransportEvent],
  [TransportEquipmentField.TransportEvent, TransportEquipmentFieldMetaTransportEvent],
  [TransportEquipmentField.ApplicableTransportMeans, TransportEquipmentFieldMetaApplicableTransportMeans],
  [TransportEquipmentField.HaulageTradingTerms, TransportEquipmentFieldMetaHaulageTradingTerms],
  [TransportEquipmentField.HazardousGoodsTransit, TransportEquipmentFieldMetaHazardousGoodsTransit],
  [TransportEquipmentField.PackagedTransportHandlingUnit, TransportEquipmentFieldMetaPackagedTransportHandlingUnit],
  [TransportEquipmentField.ServiceAllowanceCharge, TransportEquipmentFieldMetaServiceAllowanceCharge],
  [TransportEquipmentField.FreightAllowanceCharge, TransportEquipmentFieldMetaFreightAllowanceCharge],
  [TransportEquipmentField.AttachedTransportEquipment, TransportEquipmentFieldMetaAttachedTransportEquipment],
  [TransportEquipmentField.Delivery, TransportEquipmentFieldMetaDelivery],
  [TransportEquipmentField.Pickup, TransportEquipmentFieldMetaPickup],
  [TransportEquipmentField.Despatch, TransportEquipmentFieldMetaDespatch],
  [TransportEquipmentField.ShipmentDocumentReference, TransportEquipmentFieldMetaShipmentDocumentReference],
  [TransportEquipmentField.ContainedInTransportEquipment, TransportEquipmentFieldMetaContainedInTransportEquipment],
  [TransportEquipmentField.Package, TransportEquipmentFieldMetaPackage],
  [TransportEquipmentField.GoodsItem, TransportEquipmentFieldMetaGoodsItem],
  [TransportEquipmentField.VerifiedGrossMass, TransportEquipmentFieldMetaVerifiedGrossMass]
])

export const TransportEquipmentType: Type<TransportEquipmentField> = {
  name: 'TransportEquipment',
  label: 'Transport Equipment',
  module: TypeModule.cac,
  definition: 'A class to describe a piece of equipment used to transport goods.',
  fields: TransportEquipmentFieldMap,
}
