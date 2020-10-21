import { FieldMeta } from '../../FieldMeta'

export enum MeterReadingField {
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

export const MeterReadingFieldMetaID = new FieldMeta<MeterReadingField>(
  MeterReadingField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this meter reading.',
  '0..1',
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
  undefined,
  'Electricity'
)

export const MeterReadingFieldMetaPreviousMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingDate,
  'PreviousMeterReadingDate',
  'Meter Reading Date',
  'Date',
  'The date of the previous meter reading.',
  '1',
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaPreviousMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterQuantity,
  'PreviousMeterQuantity',
  'Meter Quantity',
  'Quantity',
  'The quantity of the previous meter reading.',
  '1',
  undefined,
  '122604.00'
)

export const MeterReadingFieldMetaLatestMeterReadingDate = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingDate,
  'LatestMeterReadingDate',
  'Meter Reading Date',
  'Date',
  'The date of the latest meter reading.',
  '1',
  undefined,
  '2006-09-01'
)

export const MeterReadingFieldMetaLatestMeterQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterQuantity,
  'LatestMeterQuantity',
  'Meter Quantity',
  'Quantity',
  'The quantity of the latest meter reading.',
  '1',
  undefined,
  '128365.00'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethod,
  'PreviousMeterReadingMethod',
  'Method',
  'Text',
  'The method used for the previous meter reading, expressed as text.',
  '0..1',
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaPreviousMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.PreviousMeterReadingMethodCode,
  'PreviousMeterReadingMethodCode',
  'Method Code',
  'Code',
  'The method used for the previous meter reading, expressed as a code.',
  '0..1',
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaLatestMeterReadingMethod = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethod,
  'LatestMeterReadingMethod',
  'Method',
  'Text',
  'The method used for the latest meter reading, expressed as text.',
  '0..1',
  undefined,
  'Manuel'
)

export const MeterReadingFieldMetaLatestMeterReadingMethodCode = new FieldMeta<MeterReadingField>(
  MeterReadingField.LatestMeterReadingMethodCode,
  'LatestMeterReadingMethodCode',
  'Method Code',
  'Code',
  'The method used for the latest meter reading, expressed as a code.',
  '0..1',
  undefined,
  'Estimated'
)

export const MeterReadingFieldMetaMeterReadingComments = new FieldMeta<MeterReadingField>(
  MeterReadingField.MeterReadingComments,
  'MeterReadingComments',
  'Comments',
  'Text',
  'Text containing comments on this meter reading.',
  '0..n',
  undefined,
  'The last stated meterstand is estimated'
)

export const MeterReadingFieldMetaDeliveredQuantity = new FieldMeta<MeterReadingField>(
  MeterReadingField.DeliveredQuantity,
  'DeliveredQuantity',
  'Quantity',
  'Quantity',
  'Consumption in the period from PreviousMeterReadingDate to LatestMeterReadingDate.',
  '1',
  undefined,
  undefined
)

export class MeterReadingFieldMeta {
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
