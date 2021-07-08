import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SecondaryHazardField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  PlacardNotation = 'PlacardNotation',
  PlacardEndorsement = 'PlacardEndorsement',
  EmergencyProceduresCode = 'EmergencyProceduresCode',
  Extension = 'Extension'
}

export const SecondaryHazardFieldMetaUBLExtensions = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SecondaryHazardFieldMetaID = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this secondary hazard.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SecondaryHazardFieldMetaPlacardNotation = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.PlacardNotation,
  'PlacardNotation',
  'Placard Notation',
  TextType.name,
  'Text of the placard notation corresponding to the hazard class of this secondary hazard. Can also be the hazard identification number of the orange placard (upper part) required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5.1'
)

export const SecondaryHazardFieldMetaPlacardEndorsement = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.PlacardEndorsement,
  'PlacardEndorsement',
  'Placard Endorsement',
  TextType.name,
  'Text of the placard endorsement for this secondary hazard that is to be shown on the shipping papers for a hazardous item. Can also be used for the number of the orange placard (lower part) required on the means of transport.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2'
)

export const SecondaryHazardFieldMetaEmergencyProceduresCode = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.EmergencyProceduresCode,
  'EmergencyProceduresCode',
  'Emergency Procedures Code',
  CodeType.name,
  'A code signifying the emergency procedures for this secondary hazard.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'EMG code, EMS Page Number',
  undefined
)

export const SecondaryHazardFieldMetaExtension = new FieldMeta<SecondaryHazardField>(
  SecondaryHazardField.Extension,
  'Extension',
  'Extension',
  TextType.name,
  'Additional information about the hazardous substance, which can be used (for example) to specify the type of regulatory requirements that apply to this secondary hazard.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'N.O.S. or a Waste Characteristics Code in conjunction with an EPA Waste Stream code'
)

export class SecondaryHazardFieldMeta {
  public static readonly UBLExtensions = SecondaryHazardFieldMetaUBLExtensions
  public static readonly ID = SecondaryHazardFieldMetaID
  public static readonly PlacardNotation = SecondaryHazardFieldMetaPlacardNotation
  public static readonly PlacardEndorsement = SecondaryHazardFieldMetaPlacardEndorsement
  public static readonly EmergencyProceduresCode = SecondaryHazardFieldMetaEmergencyProceduresCode
  public static readonly Extension = SecondaryHazardFieldMetaExtension
}

export const SecondaryHazardFieldMap = new Map([
  [SecondaryHazardField.UBLExtensions, SecondaryHazardFieldMetaUBLExtensions],
  [SecondaryHazardField.ID, SecondaryHazardFieldMetaID],
  [SecondaryHazardField.PlacardNotation, SecondaryHazardFieldMetaPlacardNotation],
  [SecondaryHazardField.PlacardEndorsement, SecondaryHazardFieldMetaPlacardEndorsement],
  [SecondaryHazardField.EmergencyProceduresCode, SecondaryHazardFieldMetaEmergencyProceduresCode],
  [SecondaryHazardField.Extension, SecondaryHazardFieldMetaExtension]
])

export const SecondaryHazardType: Type<SecondaryHazardField> = {
  name: 'SecondaryHazard',
  label: 'Secondary Hazard',
  module: TypeModule.cac,
  definition: 'A class to describe a secondary hazard associated with a hazardous item.',
  fields: SecondaryHazardFieldMap,
}
