import { FieldMeta } from '../../FieldMeta'

export enum VerifiedGrossMassField {
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

export const VerifiedGrossMassFieldMetaID = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this mass measure.',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingDate = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDate,
  'WeighingDate',
  'Weighing Date',
  'Date',
  'The weighing date.',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingTime = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingTime,
  'WeighingTime',
  'Weighing Time',
  'Time',
  'The weighing time.',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingMethodCode = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingMethodCode,
  'WeighingMethodCode',
  'Weighing Method Code',
  'Code',
  'A code signifying the weighing method used (e.g. according the SOLAS Convention).',
  '1',
  undefined,
  '1, 2'
)

export const VerifiedGrossMassFieldMetaWeighingDeviceID = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDeviceID,
  'WeighingDeviceID',
  'Weighing Device Identifier',
  'Identifier',
  'An identifier for the weighing device used for executing the weight measurement.',
  '0..1',
  undefined,
  'WeighScale-01'
)

export const VerifiedGrossMassFieldMetaWeighingDeviceType = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingDeviceType,
  'WeighingDeviceType',
  'Weighing Device Type',
  'Text',
  'Text describing the weighing device type used for executing the weight measurement.',
  '0..1',
  undefined,
  'Truck Scale, Weighbridge'
)

export const VerifiedGrossMassFieldMetaGrossMassMeasure = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.GrossMassMeasure,
  'GrossMassMeasure',
  'Mass',
  'Measure',
  'The total verified gross mass of a packed container which includes the cargo weight, block and bracing materials and container tare.',
  '1',
  'VGM',
  undefined
)

export const VerifiedGrossMassFieldMetaWeighingParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.WeighingParty,
  'WeighingParty',
  'Party',
  'Party',
  'The party executing the weight measure.',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaShipperParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ShipperParty,
  'ShipperParty',
  'Party',
  'Party',
  'The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the SOLAS Convention).',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaResponsibleParty = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.ResponsibleParty,
  'ResponsibleParty',
  'Party',
  'Party',
  'The party responsible for signing the VGM on behalf of the Shipper.',
  '0..1',
  undefined,
  undefined
)

export const VerifiedGrossMassFieldMetaDocumentReference = new FieldMeta<VerifiedGrossMassField>(
  VerifiedGrossMassField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the VGM documentary evidence.',
  '1..n',
  undefined,
  undefined
)

export class VerifiedGrossMassFieldMeta {
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
