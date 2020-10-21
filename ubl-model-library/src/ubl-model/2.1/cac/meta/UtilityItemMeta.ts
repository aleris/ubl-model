import { FieldMeta } from '../../FieldMeta'

export enum UtilityItemField {
  ID = 'ID',
  SubscriberID = 'SubscriberID',
  SubscriberType = 'SubscriberType',
  SubscriberTypeCode = 'SubscriberTypeCode',
  Description = 'Description',
  PackQuantity = 'PackQuantity',
  PackSizeNumeric = 'PackSizeNumeric',
  ConsumptionType = 'ConsumptionType',
  ConsumptionTypeCode = 'ConsumptionTypeCode',
  CurrentChargeType = 'CurrentChargeType',
  CurrentChargeTypeCode = 'CurrentChargeTypeCode',
  OneTimeChargeType = 'OneTimeChargeType',
  OneTimeChargeTypeCode = 'OneTimeChargeTypeCode',
  TaxCategory = 'TaxCategory',
  Contract = 'Contract'
}

export const UtilityItemFieldMetaID = new FieldMeta<UtilityItemField>(
  UtilityItemField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this utility item.',
  '1',
  undefined,
  '1'
)

export const UtilityItemFieldMetaSubscriberID = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberID,
  'SubscriberID',
  'Subscriber Identifier',
  'Identifier',
  'An identifier for the subscriber to the utility.',
  '0..1',
  undefined,
  '98143211'
)

export const UtilityItemFieldMetaSubscriberType = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberType,
  'SubscriberType',
  'Subscriber Type',
  'Text',
  'Identification of the subscriber type, expressed as text..',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaSubscriberTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberTypeCode,
  'SubscriberTypeCode',
  'Subscriber Type Code',
  'Code',
  'The code identifying for the service type.',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaDescription = new FieldMeta<UtilityItemField>(
  UtilityItemField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the consumption product.',
  '0..n',
  undefined,
  'Basis price quarter (5.761 kWh per 35,58 cents), Transport of electricity, etc.'
)

export const UtilityItemFieldMetaPackQuantity = new FieldMeta<UtilityItemField>(
  UtilityItemField.PackQuantity,
  'PackQuantity',
  'Pack Quantity',
  'Quantity',
  'The unit packaging quantity.',
  '0..1',
  undefined,
  '1'
)

export const UtilityItemFieldMetaPackSizeNumeric = new FieldMeta<UtilityItemField>(
  UtilityItemField.PackSizeNumeric,
  'PackSizeNumeric',
  'Pack Size',
  'Numeric',
  'The number of items in a pack.',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaConsumptionType = new FieldMeta<UtilityItemField>(
  UtilityItemField.ConsumptionType,
  'ConsumptionType',
  'Consumption Type',
  'Text',
  'The type of product consumed, expressed as text.',
  '0..1',
  undefined,
  'Consumption'
)

export const UtilityItemFieldMetaConsumptionTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.ConsumptionTypeCode,
  'ConsumptionTypeCode',
  'Consumption Type Code',
  'Code',
  'The type of product consumed, expressed as a code.',
  '0..1',
  undefined,
  'Consumption'
)

export const UtilityItemFieldMetaCurrentChargeType = new FieldMeta<UtilityItemField>(
  UtilityItemField.CurrentChargeType,
  'CurrentChargeType',
  'Charge Type',
  'Text',
  'Information of the actual payments type for the utility Item',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaCurrentChargeTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.CurrentChargeTypeCode,
  'CurrentChargeTypeCode',
  'Charge Type Code',
  'Code',
  'Information of the actual payments type code expressed as a code',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaOneTimeChargeType = new FieldMeta<UtilityItemField>(
  UtilityItemField.OneTimeChargeType,
  'OneTimeChargeType',
  'Charge Type',
  'Text',
  'Information about the one-time payment type in case everything is paid One time',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaOneTimeChargeTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.OneTimeChargeTypeCode,
  'OneTimeChargeTypeCode',
  'Charge Type Code',
  'Code',
  'Information about the one-time payment type code',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaTaxCategory = new FieldMeta<UtilityItemField>(
  UtilityItemField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  'TaxCategory',
  'The tax category applicable to this utility item.',
  '0..1',
  undefined,
  undefined
)

export const UtilityItemFieldMetaContract = new FieldMeta<UtilityItemField>(
  UtilityItemField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract setting forth conditions applicable to this utility item.',
  '0..1',
  undefined,
  undefined
)

export class UtilityItemFieldMeta {
  public static readonly ID = UtilityItemFieldMetaID
  public static readonly SubscriberID = UtilityItemFieldMetaSubscriberID
  public static readonly SubscriberType = UtilityItemFieldMetaSubscriberType
  public static readonly SubscriberTypeCode = UtilityItemFieldMetaSubscriberTypeCode
  public static readonly Description = UtilityItemFieldMetaDescription
  public static readonly PackQuantity = UtilityItemFieldMetaPackQuantity
  public static readonly PackSizeNumeric = UtilityItemFieldMetaPackSizeNumeric
  public static readonly ConsumptionType = UtilityItemFieldMetaConsumptionType
  public static readonly ConsumptionTypeCode = UtilityItemFieldMetaConsumptionTypeCode
  public static readonly CurrentChargeType = UtilityItemFieldMetaCurrentChargeType
  public static readonly CurrentChargeTypeCode = UtilityItemFieldMetaCurrentChargeTypeCode
  public static readonly OneTimeChargeType = UtilityItemFieldMetaOneTimeChargeType
  public static readonly OneTimeChargeTypeCode = UtilityItemFieldMetaOneTimeChargeTypeCode
  public static readonly TaxCategory = UtilityItemFieldMetaTaxCategory
  public static readonly Contract = UtilityItemFieldMetaContract
}

export const UtilityItemFieldMap = new Map([
  [UtilityItemField.ID, UtilityItemFieldMetaID],
  [UtilityItemField.SubscriberID, UtilityItemFieldMetaSubscriberID],
  [UtilityItemField.SubscriberType, UtilityItemFieldMetaSubscriberType],
  [UtilityItemField.SubscriberTypeCode, UtilityItemFieldMetaSubscriberTypeCode],
  [UtilityItemField.Description, UtilityItemFieldMetaDescription],
  [UtilityItemField.PackQuantity, UtilityItemFieldMetaPackQuantity],
  [UtilityItemField.PackSizeNumeric, UtilityItemFieldMetaPackSizeNumeric],
  [UtilityItemField.ConsumptionType, UtilityItemFieldMetaConsumptionType],
  [UtilityItemField.ConsumptionTypeCode, UtilityItemFieldMetaConsumptionTypeCode],
  [UtilityItemField.CurrentChargeType, UtilityItemFieldMetaCurrentChargeType],
  [UtilityItemField.CurrentChargeTypeCode, UtilityItemFieldMetaCurrentChargeTypeCode],
  [UtilityItemField.OneTimeChargeType, UtilityItemFieldMetaOneTimeChargeType],
  [UtilityItemField.OneTimeChargeTypeCode, UtilityItemFieldMetaOneTimeChargeTypeCode],
  [UtilityItemField.TaxCategory, UtilityItemFieldMetaTaxCategory],
  [UtilityItemField.Contract, UtilityItemFieldMetaContract]
])
