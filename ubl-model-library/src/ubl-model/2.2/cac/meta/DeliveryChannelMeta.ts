import { FieldMeta } from '../../FieldMeta'

export enum DeliveryChannelField {
  NetworkID = 'NetworkID',
  ParticipantID = 'ParticipantID',
  TestIndicator = 'TestIndicator',
  DigitalCertificate = 'DigitalCertificate',
  DigitalMessageDelivery = 'DigitalMessageDelivery'
}

export const DeliveryChannelFieldMetaNetworkID = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.NetworkID,
  'NetworkID',
  'Network Identifier',
  'Identifier',
  'An identifier for the network where messages are delivered (e.g. a business network).',
  '0..1',
  undefined,
  'OpenPEPPOL'
)

export const DeliveryChannelFieldMetaParticipantID = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.ParticipantID,
  'ParticipantID',
  'Participant Identifier',
  'Identifier',
  'An identifier for a registered participant in the network (e.g. according a precise scheme such as IT:VAT, DK:CVR, GLN).',
  '0..1',
  undefined,
  '5790002221134'
)

export const DeliveryChannelFieldMetaTestIndicator = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.TestIndicator,
  'TestIndicator',
  'Indicator',
  'Indicator',
  'An indicator that the channel is a test channel (true).',
  '0..1',
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalCertificate = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalCertificate,
  'DigitalCertificate',
  'Certificate',
  'Certificate',
  'A digital certificate associated with this delivery channel.',
  '0..1',
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalMessageDelivery = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalMessageDelivery,
  'DigitalMessageDelivery',
  'Message Delivery',
  'MessageDelivery',
  'A digital message delivery associated with this delivery channel (aka routing information).',
  '0..1',
  undefined,
  undefined
)

export class DeliveryChannelFieldMeta {
  public static readonly NetworkID = DeliveryChannelFieldMetaNetworkID
  public static readonly ParticipantID = DeliveryChannelFieldMetaParticipantID
  public static readonly TestIndicator = DeliveryChannelFieldMetaTestIndicator
  public static readonly DigitalCertificate = DeliveryChannelFieldMetaDigitalCertificate
  public static readonly DigitalMessageDelivery = DeliveryChannelFieldMetaDigitalMessageDelivery
}

export const DeliveryChannelFieldMap = new Map([
  [DeliveryChannelField.NetworkID, DeliveryChannelFieldMetaNetworkID],
  [DeliveryChannelField.ParticipantID, DeliveryChannelFieldMetaParticipantID],
  [DeliveryChannelField.TestIndicator, DeliveryChannelFieldMetaTestIndicator],
  [DeliveryChannelField.DigitalCertificate, DeliveryChannelFieldMetaDigitalCertificate],
  [DeliveryChannelField.DigitalMessageDelivery, DeliveryChannelFieldMetaDigitalMessageDelivery]
])
