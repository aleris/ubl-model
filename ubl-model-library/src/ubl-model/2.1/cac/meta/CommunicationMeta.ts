import { FieldMeta } from '../../FieldMeta'

export enum CommunicationField {
  ChannelCode = 'ChannelCode',
  Channel = 'Channel',
  Value = 'Value'
}

export const CommunicationFieldMetaChannelCode = new FieldMeta<CommunicationField>(
  CommunicationField.ChannelCode,
  'ChannelCode',
  'Channel Code',
  'Code',
  'The method of communication, expressed as a code.',
  '0..1',
  undefined,
  'Phone Fax Email'
)

export const CommunicationFieldMetaChannel = new FieldMeta<CommunicationField>(
  CommunicationField.Channel,
  'Channel',
  'Channel',
  'Text',
  'The method of communication, expressed as text.',
  '0..1',
  undefined,
  'Skype'
)

export const CommunicationFieldMetaValue = new FieldMeta<CommunicationField>(
  CommunicationField.Value,
  'Value',
  'Value',
  'Text',
  'An identifying value (phone number, email address, etc.) for this channel of communication',
  '0..1',
  undefined,
  '+44 1 2345 6789 president@whitehouse.com'
)

export class CommunicationFieldMeta {
  public static readonly ChannelCode = CommunicationFieldMetaChannelCode
  public static readonly Channel = CommunicationFieldMetaChannel
  public static readonly Value = CommunicationFieldMetaValue
}

export const CommunicationFieldMap = new Map([
  [CommunicationField.ChannelCode, CommunicationFieldMetaChannelCode],
  [CommunicationField.Channel, CommunicationFieldMetaChannel],
  [CommunicationField.Value, CommunicationFieldMetaValue]
])
