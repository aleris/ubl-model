import { FieldMeta } from '../FieldMeta'

export enum DigitalCollaborationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SendingDigitalService = 'SendingDigitalService',
  ReceivingDigitalService = 'ReceivingDigitalService'
}

export const DigitalCollaborationFieldMetaUBLExtensions = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaID = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaSendingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.SendingDigitalService,
  'SendingDigitalService',
  'Sending Digital Service',
  'DigitalService',
  'The sending digital service associated with this digital collaboration.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaReceivingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ReceivingDigitalService,
  'ReceivingDigitalService',
  'Receiving Digital Service',
  'DigitalService',
  'The receiving digital service associated with this digital collaboration.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class DigitalCollaborationFieldMeta {
  public static readonly UBLExtensions = DigitalCollaborationFieldMetaUBLExtensions
  public static readonly ID = DigitalCollaborationFieldMetaID
  public static readonly SendingDigitalService = DigitalCollaborationFieldMetaSendingDigitalService
  public static readonly ReceivingDigitalService = DigitalCollaborationFieldMetaReceivingDigitalService
}

export const DigitalCollaborationFieldMap = new Map([
  [DigitalCollaborationField.UBLExtensions, DigitalCollaborationFieldMetaUBLExtensions],
  [DigitalCollaborationField.ID, DigitalCollaborationFieldMetaID],
  [DigitalCollaborationField.SendingDigitalService, DigitalCollaborationFieldMetaSendingDigitalService],
  [DigitalCollaborationField.ReceivingDigitalService, DigitalCollaborationFieldMetaReceivingDigitalService]
])
