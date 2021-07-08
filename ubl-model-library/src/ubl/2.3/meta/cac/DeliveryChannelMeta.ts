import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CertificateType } from './CertificateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MessageDeliveryType } from './MessageDeliveryMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DeliveryChannelField {
  UBLExtensions = 'UBLExtensions',
  NetworkID = 'NetworkID',
  ParticipantID = 'ParticipantID',
  TestIndicator = 'TestIndicator',
  DigitalCertificate = 'DigitalCertificate',
  DigitalMessageDelivery = 'DigitalMessageDelivery'
}

export const DeliveryChannelFieldMetaUBLExtensions = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaNetworkID = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.NetworkID,
  'NetworkID',
  'Network Identifier',
  IdentifierType.name,
  'An identifier for the network where messages are delivered (e.g. a business network).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'OpenPEPPOL'
)

export const DeliveryChannelFieldMetaParticipantID = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.ParticipantID,
  'ParticipantID',
  'Participant Identifier',
  IdentifierType.name,
  'An identifier for a registered participant in the network (e.g. according a precise scheme such as IT:VAT, DK:CVR, GLN).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5790002221134'
)

export const DeliveryChannelFieldMetaTestIndicator = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.TestIndicator,
  'TestIndicator',
  'Test Indicator',
  IndicatorType.name,
  'An indicator that the channel is a test channel (true).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalCertificate = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalCertificate,
  'DigitalCertificate',
  'Digital Certificate',
  CertificateType.name,
  'A digital certificate associated with this delivery channel.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalMessageDelivery = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalMessageDelivery,
  'DigitalMessageDelivery',
  'Digital Message Delivery',
  MessageDeliveryType.name,
  'A digital message delivery associated with this delivery channel (aka routing information).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DeliveryChannelFieldMeta {
  public static readonly UBLExtensions = DeliveryChannelFieldMetaUBLExtensions
  public static readonly NetworkID = DeliveryChannelFieldMetaNetworkID
  public static readonly ParticipantID = DeliveryChannelFieldMetaParticipantID
  public static readonly TestIndicator = DeliveryChannelFieldMetaTestIndicator
  public static readonly DigitalCertificate = DeliveryChannelFieldMetaDigitalCertificate
  public static readonly DigitalMessageDelivery = DeliveryChannelFieldMetaDigitalMessageDelivery
}

export const DeliveryChannelFieldMap = new Map([
  [DeliveryChannelField.UBLExtensions, DeliveryChannelFieldMetaUBLExtensions],
  [DeliveryChannelField.NetworkID, DeliveryChannelFieldMetaNetworkID],
  [DeliveryChannelField.ParticipantID, DeliveryChannelFieldMetaParticipantID],
  [DeliveryChannelField.TestIndicator, DeliveryChannelFieldMetaTestIndicator],
  [DeliveryChannelField.DigitalCertificate, DeliveryChannelFieldMetaDigitalCertificate],
  [DeliveryChannelField.DigitalMessageDelivery, DeliveryChannelFieldMetaDigitalMessageDelivery]
])

export const DeliveryChannelType: Type<DeliveryChannelField> = {
  name: 'DeliveryChannel',
  label: 'Delivery Channel',
  module: TypeModule.cac,
  definition: 'A class to describe a delivery channel.',
  fields: DeliveryChannelFieldMap,
}
