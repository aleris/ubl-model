import { FieldMeta } from '../../FieldMeta'

export enum DigitalCollaborationField {
  ID = 'ID',
  SendingDigitalService = 'SendingDigitalService',
  ReceivingDigitalService = 'ReceivingDigitalService'
}

export const DigitalCollaborationFieldMetaID = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital collaboration.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaSendingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.SendingDigitalService,
  'SendingDigitalService',
  'Digital Service',
  'DigitalService',
  'The sending digital service associated with this digital collaboration.',
  '0..1',
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaReceivingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ReceivingDigitalService,
  'ReceivingDigitalService',
  'Digital Service',
  'DigitalService',
  'The receiving digital service associated with this digital collaboration.',
  '0..1',
  undefined,
  undefined
)

export class DigitalCollaborationFieldMeta {
  public static readonly ID = DigitalCollaborationFieldMetaID
  public static readonly SendingDigitalService = DigitalCollaborationFieldMetaSendingDigitalService
  public static readonly ReceivingDigitalService = DigitalCollaborationFieldMetaReceivingDigitalService
}

export const DigitalCollaborationFieldMap = new Map([
  [DigitalCollaborationField.ID, DigitalCollaborationFieldMetaID],
  [DigitalCollaborationField.SendingDigitalService, DigitalCollaborationFieldMetaSendingDigitalService],
  [DigitalCollaborationField.ReceivingDigitalService, DigitalCollaborationFieldMetaReceivingDigitalService]
])
