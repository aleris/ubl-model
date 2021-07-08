import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum MessageDeliveryField {
  UBLExtensions = 'UBLExtensions',
  ProtocolID = 'ProtocolID',
  EnvelopeTypeCode = 'EnvelopeTypeCode',
  EndpointURI = 'EndpointURI'
}

export const MessageDeliveryFieldMetaUBLExtensions = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MessageDeliveryFieldMetaProtocolID = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.ProtocolID,
  'ProtocolID',
  'Protocol Identifier',
  IdentifierType.name,
  'An identifier for the protocol to be used within this message delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'AS2, ebMS2, AS4, WS-RM'
)

export const MessageDeliveryFieldMetaEnvelopeTypeCode = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.EnvelopeTypeCode,
  'EnvelopeTypeCode',
  'Envelope Type Code',
  CodeType.name,
  'A code signifying the type of envelope to be used within this message delivery (e.g. OASIS BDX Business Document Envelope).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BDE'
)

export const MessageDeliveryFieldMetaEndpointURI = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.EndpointURI,
  'EndpointURI',
  'Endpoint URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of the access point (e.g. an HTTP URL including the port).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'https://services.enterprise.com/participant-id/rx'
)

export class MessageDeliveryFieldMeta {
  public static readonly UBLExtensions = MessageDeliveryFieldMetaUBLExtensions
  public static readonly ProtocolID = MessageDeliveryFieldMetaProtocolID
  public static readonly EnvelopeTypeCode = MessageDeliveryFieldMetaEnvelopeTypeCode
  public static readonly EndpointURI = MessageDeliveryFieldMetaEndpointURI
}

export const MessageDeliveryFieldMap = new Map([
  [MessageDeliveryField.UBLExtensions, MessageDeliveryFieldMetaUBLExtensions],
  [MessageDeliveryField.ProtocolID, MessageDeliveryFieldMetaProtocolID],
  [MessageDeliveryField.EnvelopeTypeCode, MessageDeliveryFieldMetaEnvelopeTypeCode],
  [MessageDeliveryField.EndpointURI, MessageDeliveryFieldMetaEndpointURI]
])

export const MessageDeliveryType: Type<MessageDeliveryField> = {
  name: 'MessageDelivery',
  label: 'Message Delivery',
  module: TypeModule.cac,
  definition: 'A class to describe how a message is delivered (routed).',
  fields: MessageDeliveryFieldMap,
}
