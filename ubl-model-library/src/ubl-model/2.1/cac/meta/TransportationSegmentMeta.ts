import { FieldMeta } from '../../FieldMeta'

export enum TransportationSegmentField {
  SequenceNumeric = 'SequenceNumeric',
  TransportExecutionPlanReferenceID = 'TransportExecutionPlanReferenceID',
  TransportationService = 'TransportationService',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  ReferencedConsignment = 'ReferencedConsignment',
  ShipmentStage = 'ShipmentStage'
}

export const TransportationSegmentFieldMetaSequenceNumeric = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  'Numeric',
  'A number indicating the order of this segment in the sequence of transportation segments making up a transportation service.',
  '1',
  undefined,
  '1, 2, 3, 4, etc.'
)

export const TransportationSegmentFieldMetaTransportExecutionPlanReferenceID = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportExecutionPlanReferenceID,
  'TransportExecutionPlanReferenceID',
  'Transport Execution Plan Reference',
  'Identifier',
  'An identifier for the transport execution plan governing this transportation segment.',
  '0..1',
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaTransportationService = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportationService,
  'TransportationService',
  'Transportation Service',
  'TransportationService',
  'The transportation service used in this transportation segment.',
  '1',
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaTransportServiceProviderParty = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Party',
  'Party',
  'The transport service provider responsible for carrying out transportation services in this transportation segment.',
  '1',
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaReferencedConsignment = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.ReferencedConsignment,
  'ReferencedConsignment',
  'Consignment',
  'Consignment',
  'A consignment referenced in this transportation segment. Such a consignment may have different identifiers than the consignment identifiers being used in the transportation service agreed between the transport user and the transport service provider.',
  '0..1',
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaShipmentStage = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.ShipmentStage,
  'ShipmentStage',
  'Shipment Stage',
  'ShipmentStage',
  'The shipment stage associated with this transportation segment.',
  '0..n',
  undefined,
  undefined
)

export class TransportationSegmentFieldMeta {
  public static readonly SequenceNumeric = TransportationSegmentFieldMetaSequenceNumeric
  public static readonly TransportExecutionPlanReferenceID = TransportationSegmentFieldMetaTransportExecutionPlanReferenceID
  public static readonly TransportationService = TransportationSegmentFieldMetaTransportationService
  public static readonly TransportServiceProviderParty = TransportationSegmentFieldMetaTransportServiceProviderParty
  public static readonly ReferencedConsignment = TransportationSegmentFieldMetaReferencedConsignment
  public static readonly ShipmentStage = TransportationSegmentFieldMetaShipmentStage
}

export const TransportationSegmentFieldMap = new Map([
  [TransportationSegmentField.SequenceNumeric, TransportationSegmentFieldMetaSequenceNumeric],
  [TransportationSegmentField.TransportExecutionPlanReferenceID, TransportationSegmentFieldMetaTransportExecutionPlanReferenceID],
  [TransportationSegmentField.TransportationService, TransportationSegmentFieldMetaTransportationService],
  [TransportationSegmentField.TransportServiceProviderParty, TransportationSegmentFieldMetaTransportServiceProviderParty],
  [TransportationSegmentField.ReferencedConsignment, TransportationSegmentFieldMetaReferencedConsignment],
  [TransportationSegmentField.ShipmentStage, TransportationSegmentFieldMetaShipmentStage]
])
