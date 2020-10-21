import { FieldMeta } from '../../FieldMeta'

export enum DeliveryField {
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

export const DeliveryFieldMetaID = new FieldMeta<DeliveryField>(
  DeliveryField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of items, child consignments, shipments in this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaMinimumQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.MinimumQuantity,
  'MinimumQuantity',
  'Quantity',
  'Quantity',
  'The minimum quantity of items, child consignments, shipments in this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaMaximumQuantity = new FieldMeta<DeliveryField>(
  DeliveryField.MaximumQuantity,
  'MaximumQuantity',
  'Quantity',
  'Quantity',
  'The maximum quantity of items, child consignments, shipments in this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaActualDeliveryDate = new FieldMeta<DeliveryField>(
  DeliveryField.ActualDeliveryDate,
  'ActualDeliveryDate',
  'Delivery Date',
  'Date',
  'The actual date of delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaActualDeliveryTime = new FieldMeta<DeliveryField>(
  DeliveryField.ActualDeliveryTime,
  'ActualDeliveryTime',
  'Delivery Time',
  'Time',
  'The actual time of delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaLatestDeliveryDate = new FieldMeta<DeliveryField>(
  DeliveryField.LatestDeliveryDate,
  'LatestDeliveryDate',
  'Delivery Date',
  'Date',
  'The latest date of delivery allowed by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaLatestDeliveryTime = new FieldMeta<DeliveryField>(
  DeliveryField.LatestDeliveryTime,
  'LatestDeliveryTime',
  'Delivery Time',
  'Time',
  'The latest time of delivery allowed by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaReleaseID = new FieldMeta<DeliveryField>(
  DeliveryField.ReleaseID,
  'ReleaseID',
  'Release',
  'Identifier',
  'An identifier used for approval of access to delivery locations (e.g., port terminals).',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaTrackingID = new FieldMeta<DeliveryField>(
  DeliveryField.TrackingID,
  'TrackingID',
  'Tracking Identifier',
  'Identifier',
  'The delivery Tracking ID (for transport tracking).',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryAddress = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryAddress,
  'DeliveryAddress',
  'Address',
  'Address',
  'The delivery address.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryLocation = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryLocation,
  'DeliveryLocation',
  'Location',
  'Location',
  'The delivery location.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaAlternativeDeliveryLocation = new FieldMeta<DeliveryField>(
  DeliveryField.AlternativeDeliveryLocation,
  'AlternativeDeliveryLocation',
  'Location',
  'Location',
  'An alternative delivery location.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaRequestedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.RequestedDeliveryPeriod,
  'RequestedDeliveryPeriod',
  'Period',
  'Period',
  'The period requested for delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaPromisedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.PromisedDeliveryPeriod,
  'PromisedDeliveryPeriod',
  'Period',
  'Period',
  'The period promised for delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaEstimatedDeliveryPeriod = new FieldMeta<DeliveryField>(
  DeliveryField.EstimatedDeliveryPeriod,
  'EstimatedDeliveryPeriod',
  'Period',
  'Period',
  'The period estimated for delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaCarrierParty = new FieldMeta<DeliveryField>(
  DeliveryField.CarrierParty,
  'CarrierParty',
  'Party',
  'Party',
  'The party responsible for delivering the goods.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryParty = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryParty,
  'DeliveryParty',
  'Party',
  'Party',
  'The party to whom the goods are delivered.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaNotifyParty = new FieldMeta<DeliveryField>(
  DeliveryField.NotifyParty,
  'NotifyParty',
  'Party',
  'Party',
  'A party to be notified of this delivery.',
  '0..n',
  undefined,
  undefined
)

export const DeliveryFieldMetaDespatch = new FieldMeta<DeliveryField>(
  DeliveryField.Despatch,
  'Despatch',
  'Despatch',
  'Despatch',
  'The despatch (pickup) associated with this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaDeliveryTerms = new FieldMeta<DeliveryField>(
  DeliveryField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'Terms and conditions relating to the delivery.',
  '0..n',
  undefined,
  undefined
)

export const DeliveryFieldMetaMinimumDeliveryUnit = new FieldMeta<DeliveryField>(
  DeliveryField.MinimumDeliveryUnit,
  'MinimumDeliveryUnit',
  'Delivery Unit',
  'DeliveryUnit',
  'The minimum delivery unit for this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaMaximumDeliveryUnit = new FieldMeta<DeliveryField>(
  DeliveryField.MaximumDeliveryUnit,
  'MaximumDeliveryUnit',
  'Delivery Unit',
  'DeliveryUnit',
  'The maximum delivery unit for this delivery.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryFieldMetaShipment = new FieldMeta<DeliveryField>(
  DeliveryField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The shipment being delivered.',
  '0..1',
  undefined,
  undefined
)

export class DeliveryFieldMeta {
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
