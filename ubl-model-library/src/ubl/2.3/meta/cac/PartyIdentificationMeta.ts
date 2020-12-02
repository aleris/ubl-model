import { FieldMeta } from '../FieldMeta'

export enum PartyIdentificationField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID'
}

export const PartyIdentificationFieldMetaUBLExtensions = new FieldMeta<PartyIdentificationField>(
  PartyIdentificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PartyIdentificationFieldMetaID = new FieldMeta<PartyIdentificationField>(
  PartyIdentificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the party.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class PartyIdentificationFieldMeta {
  public static readonly UBLExtensions = PartyIdentificationFieldMetaUBLExtensions
  public static readonly ID = PartyIdentificationFieldMetaID
}

export const PartyIdentificationFieldMap = new Map([
  [PartyIdentificationField.UBLExtensions, PartyIdentificationFieldMetaUBLExtensions],
  [PartyIdentificationField.ID, PartyIdentificationFieldMetaID]
])
