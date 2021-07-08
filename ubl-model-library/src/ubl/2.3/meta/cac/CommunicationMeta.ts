import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CommunicationField {
  UBLExtensions = 'UBLExtensions',
  ChannelCode = 'ChannelCode',
  Channel = 'Channel',
  Value = 'Value'
}

export const CommunicationFieldMetaUBLExtensions = new FieldMeta<CommunicationField>(
  CommunicationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CommunicationFieldMetaChannelCode = new FieldMeta<CommunicationField>(
  CommunicationField.ChannelCode,
  'ChannelCode',
  'Channel Code',
  CodeType.name,
  'The method of communication, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Phone Fax Email'
)

export const CommunicationFieldMetaChannel = new FieldMeta<CommunicationField>(
  CommunicationField.Channel,
  'Channel',
  'Channel',
  TextType.name,
  'The method of communication, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Skype'
)

export const CommunicationFieldMetaValue = new FieldMeta<CommunicationField>(
  CommunicationField.Value,
  'Value',
  'Value',
  TextType.name,
  'An identifying value (phone number, email address, etc.) for this channel of communication',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '+44 1 2345 6789 president@whitehouse.com'
)

export class CommunicationFieldMeta {
  public static readonly UBLExtensions = CommunicationFieldMetaUBLExtensions
  public static readonly ChannelCode = CommunicationFieldMetaChannelCode
  public static readonly Channel = CommunicationFieldMetaChannel
  public static readonly Value = CommunicationFieldMetaValue
}

export const CommunicationFieldMap = new Map([
  [CommunicationField.UBLExtensions, CommunicationFieldMetaUBLExtensions],
  [CommunicationField.ChannelCode, CommunicationFieldMetaChannelCode],
  [CommunicationField.Channel, CommunicationFieldMetaChannel],
  [CommunicationField.Value, CommunicationFieldMetaValue]
])

export const CommunicationType: Type<CommunicationField> = {
  name: 'Communication',
  label: 'Communication',
  module: TypeModule.cac,
  definition: 'A class to describe a means of communication.',
  fields: CommunicationFieldMap,
}
