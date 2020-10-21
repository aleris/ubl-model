import { FieldMeta } from '../../FieldMeta'

export enum SecondaryHazardField {
  ID = 'ID',
  PlacardNotation = 'PlacardNotation',
  PlacardEndorsement = 'PlacardEndorsement',
  EmergencyProceduresCode = 'EmergencyProceduresCode',
  Extension = 'Extension'
}

export const SecondaryHazardFieldMetaID = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this secondary hazard.',
  '0..1',
  undefined,
  undefined
)

export const SecondaryHazardFieldMetaPlacardNotation = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.PlacardNotation,
  'PlacardNotation',
  'Placard Notation',
  'Text',
  'Text of the placard notation corresponding to the hazard class of this secondary hazard. Can also be the hazard identification number of the orange placard (upper part) required on the means of transport.',
  '0..1',
  undefined,
  '5.1'
)

export const SecondaryHazardFieldMetaPlacardEndorsement = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.PlacardEndorsement,
  'PlacardEndorsement',
  'Placard Endorsement',
  'Text',
  'Text of the placard endorsement for this secondary hazard that is to be shown on the shipping papers for a hazardous item. Can also be used for the number of the orange placard (lower part) required on the means of transport.',
  '0..1',
  undefined,
  '2'
)

export const SecondaryHazardFieldMetaEmergencyProceduresCode = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.EmergencyProceduresCode,
  'EmergencyProceduresCode',
  'Emergency Procedures Code',
  'Code',
  'A code signifying the emergency procedures for this secondary hazard.',
  '0..1',
  'EMG code, EMS Page Number',
  undefined
)

export const SecondaryHazardFieldMetaExtension = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.Extension,
  'Extension',
  'Extension',
  'Text',
  'Additional information about the hazardous substance, which can be used (for example) to specify the type of regulatory requirements that apply to this secondary hazard.',
  '0..n',
  undefined,
  'N.O.S. or a Waste Characteristics Code in conjunction with an EPA Waste Stream code'
)

export class SecondaryHazardFieldMeta {
  public static readonly ID = SecondaryHazardFieldMetaID
  public static readonly PlacardNotation = SecondaryHazardFieldMetaPlacardNotation
  public static readonly PlacardEndorsement = SecondaryHazardFieldMetaPlacardEndorsement
  public static readonly EmergencyProceduresCode = SecondaryHazardFieldMetaEmergencyProceduresCode
  public static readonly Extension = SecondaryHazardFieldMetaExtension
}

export const SecondaryHazardFieldMap = new Map([
  [SecondaryHazardField.ID, SecondaryHazardFieldMetaID],
  [SecondaryHazardField.PlacardNotation, SecondaryHazardFieldMetaPlacardNotation],
  [SecondaryHazardField.PlacardEndorsement, SecondaryHazardFieldMetaPlacardEndorsement],
  [SecondaryHazardField.EmergencyProceduresCode, SecondaryHazardFieldMetaEmergencyProceduresCode],
  [SecondaryHazardField.Extension, SecondaryHazardFieldMetaExtension]
])
