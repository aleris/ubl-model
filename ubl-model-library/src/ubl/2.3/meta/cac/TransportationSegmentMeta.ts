import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ConsignmentType } from './ConsignmentMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PartyType } from './PartyMeta'
import { ShipmentStageType } from './ShipmentStageMeta'
import { TransportationServiceType } from './TransportationServiceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TransportationSegmentField {
  UBLExtensions = 'UBLExtensions',
  SequenceNumeric = 'SequenceNumeric',
  TransportExecutionPlanReferenceID = 'TransportExecutionPlanReferenceID',
  TransportationService = 'TransportationService',
  TransportServiceProviderParty = 'TransportServiceProviderParty',
  ReferencedConsignment = 'ReferencedConsignment',
  ShipmentStage = 'ShipmentStage'
}

export const TransportationSegmentFieldMetaUBLExtensions = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaSequenceNumeric = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  NumericType.name,
  'A number indicating the order of this segment in the sequence of transportation segments making up a transportation service.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1, 2, 3, 4, etc.'
)

export const TransportationSegmentFieldMetaTransportExecutionPlanReferenceID = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportExecutionPlanReferenceID,
  'TransportExecutionPlanReferenceID',
  'Transport Execution Plan Reference',
  IdentifierType.name,
  'An identifier for the transport execution plan governing this transportation segment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaTransportationService = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportationService,
  'TransportationService',
  'Transportation Service',
  TransportationServiceType.name,
  'The transportation service used in this transportation segment.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaTransportServiceProviderParty = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.TransportServiceProviderParty,
  'TransportServiceProviderParty',
  'Transport Service Provider Party',
  PartyType.name,
  'The transport service provider responsible for carrying out transportation services in this transportation segment.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaReferencedConsignment = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.ReferencedConsignment,
  'ReferencedConsignment',
  'Referenced Consignment',
  ConsignmentType.name,
  'A consignment referenced in this transportation segment. Such a consignment may have different identifiers than the consignment identifiers being used in the transportation service agreed between the transport user and the transport service provider.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TransportationSegmentFieldMetaShipmentStage = new FieldMeta<TransportationSegmentField>(
  TransportationSegmentField.ShipmentStage,
  'ShipmentStage',
  'Shipment Stage',
  ShipmentStageType.name,
  'The shipment stage associated with this transportation segment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TransportationSegmentFieldMeta {
  public static readonly UBLExtensions = TransportationSegmentFieldMetaUBLExtensions
  public static readonly SequenceNumeric = TransportationSegmentFieldMetaSequenceNumeric
  public static readonly TransportExecutionPlanReferenceID = TransportationSegmentFieldMetaTransportExecutionPlanReferenceID
  public static readonly TransportationService = TransportationSegmentFieldMetaTransportationService
  public static readonly TransportServiceProviderParty = TransportationSegmentFieldMetaTransportServiceProviderParty
  public static readonly ReferencedConsignment = TransportationSegmentFieldMetaReferencedConsignment
  public static readonly ShipmentStage = TransportationSegmentFieldMetaShipmentStage
}

export const TransportationSegmentFieldMap = new Map([
  [TransportationSegmentField.UBLExtensions, TransportationSegmentFieldMetaUBLExtensions],
  [TransportationSegmentField.SequenceNumeric, TransportationSegmentFieldMetaSequenceNumeric],
  [TransportationSegmentField.TransportExecutionPlanReferenceID, TransportationSegmentFieldMetaTransportExecutionPlanReferenceID],
  [TransportationSegmentField.TransportationService, TransportationSegmentFieldMetaTransportationService],
  [TransportationSegmentField.TransportServiceProviderParty, TransportationSegmentFieldMetaTransportServiceProviderParty],
  [TransportationSegmentField.ReferencedConsignment, TransportationSegmentFieldMetaReferencedConsignment],
  [TransportationSegmentField.ShipmentStage, TransportationSegmentFieldMetaShipmentStage]
])

export const TransportationSegmentType: Type<TransportationSegmentField> = {
  name: 'TransportationSegment',
  label: 'Transportation Segment',
  module: TypeModule.cac,
  definition: 'A class to describe one segment or leg in a transportation service.',
  fields: TransportationSegmentFieldMap,
}
