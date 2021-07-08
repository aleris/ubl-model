import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryTermsType } from './DeliveryTermsMeta'
import { DeliveryUnitType } from './DeliveryUnitMeta'
import { DespatchType } from './DespatchMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { ShipmentType } from './ShipmentMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DeliveryField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  MinimumQuantity = 'MinimumQuantity',
  MaximumQuantity = 'MaximumQuantity',
  ActualDeliveryDate = 'ActualDeliveryDate',
  ActualDeliveryTime = 'ActualDeliveryTime',
  LatestDeliveryDate = 'LatestDeliveryDate',
  LatestDeliveryTime = 'LatestDeliveryTime',
  ReleaseID = 'ReleaseID',
  TrackingID = 'TrackingID',
  DeliveryAddress = 'DeliveryAddress',
  DeliveryLocation = 'DeliveryLocation',
  AlternativeDeliveryLocation = 'AlternativeDeliveryLocation',
  RequestedDeliveryPeriod = 'RequestedDeliveryPeriod',
  PromisedDeliveryPeriod = 'PromisedDeliveryPeriod',
  EstimatedDeliveryPeriod = 'EstimatedDeliveryPeriod',
  CarrierParty = 'CarrierParty',
  DeliveryParty = 'DeliveryParty',
  NotifyParty = 'NotifyParty',
  Despatch = 'Despatch',
  DeliveryTerms = 'DeliveryTerms',
  MinimumDeliveryUnit = 'MinimumDeliveryUnit',
  MaximumDeliveryUnit = 'MaximumDeliveryUnit',
  Shipment = 'Shipment'
}

export const DeliveryFieldMetaUBLExtensions = new FieldMeta<DeliveryField>(
  DeliveryField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DeliveryFieldMetaID = new FieldMeta<DeliveryField>(
  DeliveryField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of items, child consignments, shipments in this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaMinimumQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum quantity of items, child consignments, shipments in this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaMaximumQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum quantity of items, child consignments, shipments in this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaActualDeliveryDate = new FieldMeta<DeliveryField>(
  DeliveryField.ActualDeliveryDate,
  'ActualDeliveryDate',
  'Actual Delivery Date',
  DateType.name,
  'The actual date of delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaActualDeliveryTime = new FieldMeta<DeliveryField>(
  DeliveryField.ActualDeliveryTime,
  'ActualDeliveryTime',
  'Actual Delivery Time',
  TimeType.name,
  'The actual time of delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaLatestDeliveryDate = new FieldMeta<DeliveryField>(
  DeliveryField.LatestDeliveryDate,
  'LatestDeliveryDate',
  'Latest Delivery Date',
  DateType.name,
  'The latest date of delivery allowed by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaLatestDeliveryTime = new FieldMeta<DeliveryField>(
  DeliveryField.LatestDeliveryTime,
  'LatestDeliveryTime',
  'Latest Delivery Time',
  TimeType.name,
  'The latest time of delivery allowed by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaReleaseID = new FieldMeta<DeliveryField>(
  DeliveryField.ReleaseID,
  'ReleaseID',
  'Release',
  IdentifierType.name,
  'An identifier used for approval of access to delivery locations (e.g., port terminals).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaTrackingID = new FieldMeta<DeliveryField>(
  DeliveryField.TrackingID,
  'TrackingID',
  'Tracking Identifier',
  IdentifierType.name,
  'The delivery Tracking ID (for transport tracking).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryAddress = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryAddress,
  'DeliveryAddress',
  'Delivery Address',
  AddressType.name,
  'The delivery address.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryLocation = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryLocation,
  'DeliveryLocation',
  'Delivery Location',
  LocationType.name,
  'The delivery location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaAlternativeDeliveryLocation = new FieldMeta<DeliveryField>(
  DeliveryField.AlternativeDeliveryLocation,
  'AlternativeDeliveryLocation',
  'Alternative Delivery Location',
  LocationType.name,
  'An alternative delivery location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaRequestedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.RequestedDeliveryPeriod,
  'RequestedDeliveryPeriod',
  'Requested Delivery Period',
  PeriodType.name,
  'The period requested for delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaPromisedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.PromisedDeliveryPeriod,
  'PromisedDeliveryPeriod',
  'Promised Delivery Period',
  PeriodType.name,
  'The period promised for delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaEstimatedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.EstimatedDeliveryPeriod,
  'EstimatedDeliveryPeriod',
  'Estimated Delivery Period',
  PeriodType.name,
  'The period estimated for delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaCarrierParty = new FieldMeta<DeliveryField>(
  DeliveryField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party responsible for delivering the goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryParty = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryParty,
  'DeliveryParty',
  'Delivery Party',
  PartyType.name,
  'The party to whom the goods are delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaNotifyParty = new FieldMeta<DeliveryField>(
  DeliveryField.NotifyParty,
  'NotifyParty',
  'Notify Party',
  PartyType.name,
  'A party to be notified of this delivery.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaDespatch = new FieldMeta<DeliveryField>(
  DeliveryField.Despatch,
  'Despatch',
  'Despatch',
  DespatchType.name,
  'The despatch (pickup) associated with this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryTerms = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'Terms and conditions relating to the delivery.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaMinimumDeliveryUnit = new FieldMeta<DeliveryField>(
  DeliveryField.MinimumDeliveryUnit,
  'MinimumDeliveryUnit',
  'Minimum Delivery Unit',
  DeliveryUnitType.name,
  'The minimum delivery unit for this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaMaximumDeliveryUnit = new FieldMeta<DeliveryField>(
  DeliveryField.MaximumDeliveryUnit,
  'MaximumDeliveryUnit',
  'Maximum Delivery Unit',
  DeliveryUnitType.name,
  'The maximum delivery unit for this delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryFieldMetaShipment = new FieldMeta<DeliveryField>(
  DeliveryField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The shipment being delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DeliveryFieldMeta {
  public static readonly UBLExtensions = DeliveryFieldMetaUBLExtensions
  public static readonly ID = DeliveryFieldMetaID
  public static readonly Quantity = DeliveryFieldMetaQuantity
  public static readonly MinimumQuantity = DeliveryFieldMetaMinimumQuantity
  public static readonly MaximumQuantity = DeliveryFieldMetaMaximumQuantity
  public static readonly ActualDeliveryDate = DeliveryFieldMetaActualDeliveryDate
  public static readonly ActualDeliveryTime = DeliveryFieldMetaActualDeliveryTime
  public static readonly LatestDeliveryDate = DeliveryFieldMetaLatestDeliveryDate
  public static readonly LatestDeliveryTime = DeliveryFieldMetaLatestDeliveryTime
  public static readonly ReleaseID = DeliveryFieldMetaReleaseID
  public static readonly TrackingID = DeliveryFieldMetaTrackingID
  public static readonly DeliveryAddress = DeliveryFieldMetaDeliveryAddress
  public static readonly DeliveryLocation = DeliveryFieldMetaDeliveryLocation
  public static readonly AlternativeDeliveryLocation = DeliveryFieldMetaAlternativeDeliveryLocation
  public static readonly RequestedDeliveryPeriod = DeliveryFieldMetaRequestedDeliveryPeriod
  public static readonly PromisedDeliveryPeriod = DeliveryFieldMetaPromisedDeliveryPeriod
  public static readonly EstimatedDeliveryPeriod = DeliveryFieldMetaEstimatedDeliveryPeriod
  public static readonly CarrierParty = DeliveryFieldMetaCarrierParty
  public static readonly DeliveryParty = DeliveryFieldMetaDeliveryParty
  public static readonly NotifyParty = DeliveryFieldMetaNotifyParty
  public static readonly Despatch = DeliveryFieldMetaDespatch
  public static readonly DeliveryTerms = DeliveryFieldMetaDeliveryTerms
  public static readonly MinimumDeliveryUnit = DeliveryFieldMetaMinimumDeliveryUnit
  public static readonly MaximumDeliveryUnit = DeliveryFieldMetaMaximumDeliveryUnit
  public static readonly Shipment = DeliveryFieldMetaShipment
}

export const DeliveryFieldMap = new Map([
  [DeliveryField.UBLExtensions, DeliveryFieldMetaUBLExtensions],
  [DeliveryField.ID, DeliveryFieldMetaID],
  [DeliveryField.Quantity, DeliveryFieldMetaQuantity],
  [DeliveryField.MinimumQuantity, DeliveryFieldMetaMinimumQuantity],
  [DeliveryField.MaximumQuantity, DeliveryFieldMetaMaximumQuantity],
  [DeliveryField.ActualDeliveryDate, DeliveryFieldMetaActualDeliveryDate],
  [DeliveryField.ActualDeliveryTime, DeliveryFieldMetaActualDeliveryTime],
  [DeliveryField.LatestDeliveryDate, DeliveryFieldMetaLatestDeliveryDate],
  [DeliveryField.LatestDeliveryTime, DeliveryFieldMetaLatestDeliveryTime],
  [DeliveryField.ReleaseID, DeliveryFieldMetaReleaseID],
  [DeliveryField.TrackingID, DeliveryFieldMetaTrackingID],
  [DeliveryField.DeliveryAddress, DeliveryFieldMetaDeliveryAddress],
  [DeliveryField.DeliveryLocation, DeliveryFieldMetaDeliveryLocation],
  [DeliveryField.AlternativeDeliveryLocation, DeliveryFieldMetaAlternativeDeliveryLocation],
  [DeliveryField.RequestedDeliveryPeriod, DeliveryFieldMetaRequestedDeliveryPeriod],
  [DeliveryField.PromisedDeliveryPeriod, DeliveryFieldMetaPromisedDeliveryPeriod],
  [DeliveryField.EstimatedDeliveryPeriod, DeliveryFieldMetaEstimatedDeliveryPeriod],
  [DeliveryField.CarrierParty, DeliveryFieldMetaCarrierParty],
  [DeliveryField.DeliveryParty, DeliveryFieldMetaDeliveryParty],
  [DeliveryField.NotifyParty, DeliveryFieldMetaNotifyParty],
  [DeliveryField.Despatch, DeliveryFieldMetaDespatch],
  [DeliveryField.DeliveryTerms, DeliveryFieldMetaDeliveryTerms],
  [DeliveryField.MinimumDeliveryUnit, DeliveryFieldMetaMinimumDeliveryUnit],
  [DeliveryField.MaximumDeliveryUnit, DeliveryFieldMetaMaximumDeliveryUnit],
  [DeliveryField.Shipment, DeliveryFieldMetaShipment]
])

export const DeliveryType: Type<DeliveryField> = {
  name: 'Delivery',
  label: 'Delivery',
  module: TypeModule.cac,
  definition: 'A class to describe a delivery.',
  fields: DeliveryFieldMap,
}
