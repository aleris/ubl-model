import { FieldMeta } from '../../FieldMeta'

export enum PartyIdentificationField {
  ID = 'ID'
}

export const PartyIdentificationFieldMetaID = new FieldMeta<PartyIdentificationField>(
  PartyIdentificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the party.',
  '1',
  undefined,
  undefined
)

export class PartyIdentificationFieldMeta {
  public static readonly ID = PartyIdentificationFieldMetaID
}

export const PartyIdentificationFieldMap = new Map([
  [PartyIdentificationField.ID, PartyIdentificationFieldMetaID]
])
