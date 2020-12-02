import { FieldMeta } from '../FieldMeta'

export enum MeterReadingField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  MeterReadingType = 'MeterReadingType',
  MeterReadingTypeCode = 'MeterReadingTypeCode',
  PreviousMeterReadingDate = 'PreviousMeterReadingDate',
  PreviousMeterQuantity = 'PreviousMeterQuantity',
  LatestMeterReadingDate = 'LatestMeterReadingDate',
  LatestMeterQuantity = 'LatestMeterQuantity',
  PreviousMeterReadingMethod = 'PreviousMeterReadingMethod',
  PreviousMeterReadingMethodCode = 'PreviousMeterReadingMethodCode',
  LatestMeterReadingMethod = 'LatestMeterReadingMethod',
  LatestMeterReadingMethodCode = 'LatestMeterReadingMethodCode',
  MeterReadingComments = 'MeterReadingComments',
  DeliveredQuantity = 'DeliveredQuantity'
}

export const MeterReadingFieldMetaUBLExtensions = new FieldMeta<MeterReadingField>(
  MeterReadingField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const MeterReadingFieldMetaID = new FieldMeta<MeterReadingField>(
  MeterReadingField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this meter reading.',
  '0..1',
  'cbc',
  undefined,
  '7411013716x'
)

export const MeterReadingFieldMetaMeterReadingType = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingType,
  'MeterReadingType',
  'Meter Reading Type',
  'Text',
  'The type of this meter reading, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Electricity'
)

export const MeterReadingFieldMetaMeterReadingTypeCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingTypeCode,
  'MeterReadingTypeCode',
  'Meter Reading Type Code',
  'Code',
  'The type of this meter reading, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Electricity'
)

export const MeterReadingFieldMetaPreviousMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingDate,
  'PreviousMeterReadingDate',
  'Previous Meter Reading Date',
  'Date',
  'The date of the previous meter reading.',
  '1',
  'cbc',
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaPreviousMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterQuantity,
  'PreviousMeterQuantity',
  'Previous Meter Quantity',
  'Quantity',
  'The quantity of the previous meter reading.',
  '1',
  'cbc',
  undefined,
  '122604.00'
)

export const MeterReadingFieldMetaLatestMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingDate,
  'LatestMeterReadingDate',
  'Latest Meter Reading Date',
  'Date',
  'The date of the latest meter reading.',
  '1',
  'cbc',
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaLatestMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterQuantity,
  'LatestMeterQuantity',
  'Latest Meter Quantity',
  'Quantity',
  'The quantity of the latest meter reading.',
  '1',
  'cbc',
  undefined,
  '128365.00'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethod,
  'PreviousMeterReadingMethod',
  'Previous Meter Reading Method',
  'Text',
  'The method used for the previous meter reading, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethodCode,
  'PreviousMeterReadingMethodCode',
  'Previous Meter Reading Method Code',
  'Code',
  'The method used for the previous meter reading, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaLatestMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethod,
  'LatestMeterReadingMethod',
  'Latest Meter Reading Method',
  'Text',
  'The method used for the latest meter reading, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaLatestMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethodCode,
  'LatestMeterReadingMethodCode',
  'Latest Meter Reading Method Code',
  'Code',
  'The method used for the latest meter reading, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaMeterReadingComments = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingComments,
  'MeterReadingComments',
  'Meter Reading Comments',
  'Text',
  'Text containing comments on this meter reading.',
  '0..n',
  'cbc',
  undefined,
  'The last stated meterstand is estimated'
)

export const MeterReadingFieldMetaDeliveredQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.DeliveredQuantity,
  'DeliveredQuantity',
  'Delivered Quantity',
  'Quantity',
  'Consumption in the period from PreviousMeterReadingDate to LatestMeterReadingDate.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class MeterReadingFieldMeta {
  public static readonly UBLExtensions = MeterReadingFieldMetaUBLExtensions
  public static readonly ID = MeterReadingFieldMetaID
  public static readonly MeterReadingType = MeterReadingFieldMetaMeterReadingType
  public static readonly MeterReadingTypeCode = MeterReadingFieldMetaMeterReadingTypeCode
  public static readonly PreviousMeterReadingDate = MeterReadingFieldMetaPreviousMeterReadingDate
  public static readonly PreviousMeterQuantity = MeterReadingFieldMetaPreviousMeterQuantity
  public static readonly LatestMeterReadingDate = MeterReadingFieldMetaLatestMeterReadingDate
  public static readonly LatestMeterQuantity = MeterReadingFieldMetaLatestMeterQuantity
  public static readonly PreviousMeterReadingMethod = MeterReadingFieldMetaPreviousMeterReadingMethod
  public static readonly PreviousMeterReadingMethodCode = MeterReadingFieldMetaPreviousMeterReadingMethodCode
  public static readonly LatestMeterReadingMethod = MeterReadingFieldMetaLatestMeterReadingMethod
  public static readonly LatestMeterReadingMethodCode = MeterReadingFieldMetaLatestMeterReadingMethodCode
  public static readonly MeterReadingComments = MeterReadingFieldMetaMeterReadingComments
  public static readonly DeliveredQuantity = MeterReadingFieldMetaDeliveredQuantity
}

export const MeterReadingFieldMap = new Map([
  [MeterReadingField.UBLExtensions, MeterReadingFieldMetaUBLExtensions],
  [MeterReadingField.ID, MeterReadingFieldMetaID],
  [MeterReadingField.MeterReadingType, MeterReadingFieldMetaMeterReadingType],
  [MeterReadingField.MeterReadingTypeCode, MeterReadingFieldMetaMeterReadingTypeCode],
  [MeterReadingField.PreviousMeterReadingDate, MeterReadingFieldMetaPreviousMeterReadingDate],
  [MeterReadingField.PreviousMeterQuantity, MeterReadingFieldMetaPreviousMeterQuantity],
  [MeterReadingField.LatestMeterReadingDate, MeterReadingFieldMetaLatestMeterReadingDate],
  [MeterReadingField.LatestMeterQuantity, MeterReadingFieldMetaLatestMeterQuantity],
  [MeterReadingField.PreviousMeterReadingMethod, MeterReadingFieldMetaPreviousMeterReadingMethod],
  [MeterReadingField.PreviousMeterReadingMethodCode, MeterReadingFieldMetaPreviousMeterReadingMethodCode],
  [MeterReadingField.LatestMeterReadingMethod, MeterReadingFieldMetaLatestMeterReadingMethod],
  [MeterReadingField.LatestMeterReadingMethodCode, MeterReadingFieldMetaLatestMeterReadingMethodCode],
  [MeterReadingField.MeterReadingComments, MeterReadingFieldMetaMeterReadingComments],
  [MeterReadingField.DeliveredQuantity, MeterReadingFieldMetaDeliveredQuantity]
])
