import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from './ContractMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum UtilityItemField {
  UBLExtensions = 'UBLExtensions',
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

export const UtilityItemFieldMetaUBLExtensions = new FieldMeta<UtilityItemField>(
  UtilityItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UtilityItemFieldMetaID = new FieldMeta<UtilityItemField>(
  UtilityItemField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this utility item.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1'
)

export const UtilityItemFieldMetaSubscriberID = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberID,
  'SubscriberID',
  'Subscriber Identifier',
  IdentifierType.name,
  'An identifier for the subscriber to the utility.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '98143211'
)

export const UtilityItemFieldMetaSubscriberType = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberType,
  'SubscriberType',
  'Subscriber Type',
  TextType.name,
  'Identification of the subscriber type, expressed as text..',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaSubscriberTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.SubscriberTypeCode,
  'SubscriberTypeCode',
  'Subscriber Type Code',
  CodeType.name,
  'The code identifying for the service type.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaDescription = new FieldMeta<UtilityItemField>(
  UtilityItemField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the consumption product.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Basis price quarter (5.761 kWh per 35,58 cents), Transport of electricity, etc.'
)

export const UtilityItemFieldMetaPackQuantity = new FieldMeta<UtilityItemField>(
  UtilityItemField.PackQuantity,
  'PackQuantity',
  'Pack Quantity',
  QuantityType.name,
  'The unit packaging quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1'
)

export const UtilityItemFieldMetaPackSizeNumeric = new FieldMeta<UtilityItemField>(
  UtilityItemField.PackSizeNumeric,
  'PackSizeNumeric',
  'Pack Size',
  NumericType.name,
  'The number of items in a pack.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaConsumptionType = new FieldMeta<UtilityItemField>(
  UtilityItemField.ConsumptionType,
  'ConsumptionType',
  'Consumption Type',
  TextType.name,
  'The type of product consumed, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption'
)

export const UtilityItemFieldMetaConsumptionTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.ConsumptionTypeCode,
  'ConsumptionTypeCode',
  'Consumption Type Code',
  CodeType.name,
  'The type of product consumed, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Consumption'
)

export const UtilityItemFieldMetaCurrentChargeType = new FieldMeta<UtilityItemField>(
  UtilityItemField.CurrentChargeType,
  'CurrentChargeType',
  'Current Charge Type',
  TextType.name,
  'Information of the actual payments type for the utility Item',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaCurrentChargeTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.CurrentChargeTypeCode,
  'CurrentChargeTypeCode',
  'Current Charge Type Code',
  CodeType.name,
  'Information of the actual payments type code expressed as a code',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaOneTimeChargeType = new FieldMeta<UtilityItemField>(
  UtilityItemField.OneTimeChargeType,
  'OneTimeChargeType',
  'One Time Charge Type',
  TextType.name,
  'Information about the one-time payment type in case everything is paid One time',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaOneTimeChargeTypeCode = new FieldMeta<UtilityItemField>(
  UtilityItemField.OneTimeChargeTypeCode,
  'OneTimeChargeTypeCode',
  'One Time Charge Type Code',
  CodeType.name,
  'Information about the one-time payment type code',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UtilityItemFieldMetaTaxCategory = new FieldMeta<UtilityItemField>(
  UtilityItemField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  TaxCategoryType.name,
  'The tax category applicable to this utility item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UtilityItemFieldMetaContract = new FieldMeta<UtilityItemField>(
  UtilityItemField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract setting forth conditions applicable to this utility item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class UtilityItemFieldMeta {
  public static readonly UBLExtensions = UtilityItemFieldMetaUBLExtensions
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
  [UtilityItemField.UBLExtensions, UtilityItemFieldMetaUBLExtensions],
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

export const UtilityItemType: Type<UtilityItemField> = {
  name: 'UtilityItem',
  label: 'Utility Item',
  module: TypeModule.cac,
  definition: 'A class to describe the consumption of a utility product.',
  fields: UtilityItemFieldMap,
}
