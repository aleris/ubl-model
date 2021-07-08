import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PartyType } from './PartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum VerifiedGrossMassField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  WeighingDate = 'WeighingDate',
  WeighingTime = 'WeighingTime',
  WeighingMethodCode = 'WeighingMethodCode',
  WeighingDeviceID = 'WeighingDeviceID',
  WeighingDeviceType = 'WeighingDeviceType',
  GrossMassMeasure = 'GrossMassMeasure',
  WeighingParty = 'WeighingParty',
  ShipperParty = 'ShipperParty',
  ResponsibleParty = 'ResponsibleParty',
  DocumentReference = 'DocumentReference'
}

export const VerifiedGrossMassFieldMetaUBLExtensions = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaID = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this mass measure.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingDate = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDate,
  'WeighingDate',
  'Weighing Date',
  DateType.name,
  'The weighing date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingTime = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingTime,
  'WeighingTime',
  'Weighing Time',
  TimeType.name,
  'The weighing time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingMethodCode = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingMethodCode,
  'WeighingMethodCode',
  'Weighing Method Code',
  CodeType.name,
  'A code signifying the weighing method used (e.g. according the SOLAS Convention).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1, 2'
)

export const VerifiedGrossMassFieldMetaWeighingDeviceID = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDeviceID,
  'WeighingDeviceID',
  'Weighing Device Identifier',
  IdentifierType.name,
  'An identifier for the weighing device used for executing the weight measurement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'WeighScale-01'
)

export const VerifiedGrossMassFieldMetaWeighingDeviceType = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDeviceType,
  'WeighingDeviceType',
  'Weighing Device Type',
  TextType.name,
  'Text describing the weighing device type used for executing the weight measurement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Truck Scale, Weighbridge'
)

export const VerifiedGrossMassFieldMetaGrossMassMeasure = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.GrossMassMeasure,
  'GrossMassMeasure',
  'Gross Mass',
  MeasureType.name,
  'The total verified gross mass of a packed container which includes the cargo weight, block and bracing materials and container tare.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'VGM',
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingParty,
  'WeighingParty',
  'Weighing Party',
  PartyType.name,
  'The party executing the weight measure.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaShipperParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ShipperParty,
  'ShipperParty',
  'Shipper Party',
  PartyType.name,
  'The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the SOLAS Convention).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaResponsibleParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ResponsibleParty,
  'ResponsibleParty',
  'Responsible Party',
  PartyType.name,
  'The party responsible for signing the VGM on behalf of the Shipper.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaDocumentReference = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to the VGM documentary evidence.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class VerifiedGrossMassFieldMeta {
  public static readonly UBLExtensions = VerifiedGrossMassFieldMetaUBLExtensions
  public static readonly ID = VerifiedGrossMassFieldMetaID
  public static readonly WeighingDate = VerifiedGrossMassFieldMetaWeighingDate
  public static readonly WeighingTime = VerifiedGrossMassFieldMetaWeighingTime
  public static readonly WeighingMethodCode = VerifiedGrossMassFieldMetaWeighingMethodCode
  public static readonly WeighingDeviceID = VerifiedGrossMassFieldMetaWeighingDeviceID
  public static readonly WeighingDeviceType = VerifiedGrossMassFieldMetaWeighingDeviceType
  public static readonly GrossMassMeasure = VerifiedGrossMassFieldMetaGrossMassMeasure
  public static readonly WeighingParty = VerifiedGrossMassFieldMetaWeighingParty
  public static readonly ShipperParty = VerifiedGrossMassFieldMetaShipperParty
  public static readonly ResponsibleParty = VerifiedGrossMassFieldMetaResponsibleParty
  public static readonly DocumentReference = VerifiedGrossMassFieldMetaDocumentReference
}

export const VerifiedGrossMassFieldMap = new Map([
  [VerifiedGrossMassField.UBLExtensions, VerifiedGrossMassFieldMetaUBLExtensions],
  [VerifiedGrossMassField.ID, VerifiedGrossMassFieldMetaID],
  [VerifiedGrossMassField.WeighingDate, VerifiedGrossMassFieldMetaWeighingDate],
  [VerifiedGrossMassField.WeighingTime, VerifiedGrossMassFieldMetaWeighingTime],
  [VerifiedGrossMassField.WeighingMethodCode, VerifiedGrossMassFieldMetaWeighingMethodCode],
  [VerifiedGrossMassField.WeighingDeviceID, VerifiedGrossMassFieldMetaWeighingDeviceID],
  [VerifiedGrossMassField.WeighingDeviceType, VerifiedGrossMassFieldMetaWeighingDeviceType],
  [VerifiedGrossMassField.GrossMassMeasure, VerifiedGrossMassFieldMetaGrossMassMeasure],
  [VerifiedGrossMassField.WeighingParty, VerifiedGrossMassFieldMetaWeighingParty],
  [VerifiedGrossMassField.ShipperParty, VerifiedGrossMassFieldMetaShipperParty],
  [VerifiedGrossMassField.ResponsibleParty, VerifiedGrossMassFieldMetaResponsibleParty],
  [VerifiedGrossMassField.DocumentReference, VerifiedGrossMassFieldMetaDocumentReference]
])

export const VerifiedGrossMassType: Type<VerifiedGrossMassField> = {
  name: 'VerifiedGrossMass',
  label: 'Verified Gross Mass',
  module: TypeModule.cac,
  definition: 'A class to describe a verified gross mass (VGM) measure and its documentation.',
  fields: VerifiedGrossMassFieldMap,
}
