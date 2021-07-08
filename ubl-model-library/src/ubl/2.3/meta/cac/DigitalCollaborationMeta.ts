import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DigitalServiceType } from './DigitalServiceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DigitalCollaborationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SendingDigitalService = 'SendingDigitalService',
  ReceivingDigitalService = 'ReceivingDigitalService'
}

export const DigitalCollaborationFieldMetaUBLExtensions = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaID = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the digital collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaSendingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.SendingDigitalService,
  'SendingDigitalService',
  'Sending Digital Service',
  DigitalServiceType.name,
  'The sending digital service associated with this digital collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalCollaborationFieldMetaReceivingDigitalService = new FieldMeta<DigitalCollaborationField>(
  DigitalCollaborationField.ReceivingDigitalService,
  'ReceivingDigitalService',
  'Receiving Digital Service',
  DigitalServiceType.name,
  'The receiving digital service associated with this digital collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const DigitalCollaborationType: Type<DigitalCollaborationField> = {
  name: 'DigitalCollaboration',
  label: 'Digital Collaboration',
  module: TypeModule.cac,
  definition: 'A class to describe a digital trade collaboration.',
  fields: DigitalCollaborationFieldMap,
}
