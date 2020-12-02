import { FieldMeta } from '../FieldMeta'

export enum MessageDeliveryField {
  UBLExtensions = 'UBLExtensions',
  ProtocolID = 'ProtocolID',
  EnvelopeTypeCode = 'EnvelopeTypeCode',
  EndpointURI = 'EndpointURI'
}

export const MessageDeliveryFieldMetaUBLExtensions = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const MessageDeliveryFieldMetaProtocolID = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.ProtocolID,
  'ProtocolID',
  'Protocol Identifier',
  'Identifier',
  'An identifier for the protocol to be used within this message delivery.',
  '0..1',
  'cbc',
  undefined,
  'AS2, ebMS2, AS4, WS-RM'
)

export const MessageDeliveryFieldMetaEnvelopeTypeCode = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.EnvelopeTypeCode,
  'EnvelopeTypeCode',
  'Envelope Type Code',
  'Code',
  'A code signifying the type of envelope to be used within this message delivery (e.g. OASIS BDX Business Document Envelope).',
  '0..1',
  'cbc',
  undefined,
  'BDE'
)

export const MessageDeliveryFieldMetaEndpointURI = new FieldMeta<MessageDeliveryField>(
  MessageDeliveryField.EndpointURI,
  'EndpointURI',
  'Endpoint URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of the access point (e.g. an HTTP URL including the port).',
  '0..1',
  'cbc',
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
