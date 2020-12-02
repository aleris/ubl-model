import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaNetworkID = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.NetworkID,
  'NetworkID',
  'Network Identifier',
  'Identifier',
  'An identifier for the network where messages are delivered (e.g. a business network).',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  '5790002221134'
)

export const DeliveryChannelFieldMetaTestIndicator = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.TestIndicator,
  'TestIndicator',
  'Test Indicator',
  'Indicator',
  'An indicator that the channel is a test channel (true).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalCertificate = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalCertificate,
  'DigitalCertificate',
  'Digital Certificate',
  'Certificate',
  'A digital certificate associated with this delivery channel.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DeliveryChannelFieldMetaDigitalMessageDelivery = new FieldMeta<DeliveryChannelField>(
  DeliveryChannelField.DigitalMessageDelivery,
  'DigitalMessageDelivery',
  'Digital Message Delivery',
  'MessageDelivery',
  'A digital message delivery associated with this delivery channel (aka routing information).',
  '0..1',
  'cac',
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
