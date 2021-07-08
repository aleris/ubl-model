import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeterType } from './MeterMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'
import { WebSiteAccessType } from './WebSiteAccessMeta'

export enum ConsumptionPointField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Description = 'Description',
  SubscriberID = 'SubscriberID',
  SubscriberType = 'SubscriberType',
  SubscriberTypeCode = 'SubscriberTypeCode',
  TotalDeliveredQuantity = 'TotalDeliveredQuantity',
  Address = 'Address',
  WebSiteAccess = 'WebSiteAccess',
  UtilityMeter = 'UtilityMeter'
}

export const ConsumptionPointFieldMetaUBLExtensions = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaID = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this point of consumption.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '7411013716x'
)

export const ConsumptionPointFieldMetaDescription = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this consumption point.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Additional informations concerning the consumption point'
)

export const ConsumptionPointFieldMetaSubscriberID = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberID,
  'SubscriberID',
  'Subscriber Identifier',
  IdentifierType.name,
  'An identifier for the subscriber responsible for the consumption at this consumption point.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '98143211'
)

export const ConsumptionPointFieldMetaSubscriberType = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberType,
  'SubscriberType',
  'Subscriber Type',
  TextType.name,
  'The type of subscriber, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaSubscriberTypeCode = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberTypeCode,
  'SubscriberTypeCode',
  'Subscriber Type Code',
  CodeType.name,
  'The type of subscriber, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'APL'
)

export const ConsumptionPointFieldMetaTotalDeliveredQuantity = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.TotalDeliveredQuantity,
  'TotalDeliveredQuantity',
  'Total Delivered Quantity',
  QuantityType.name,
  'The total quantity delivered, calculated at this consumption point.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '5761.00'
)

export const ConsumptionPointFieldMetaAddress = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.Address,
  'Address',
  'Address',
  AddressType.name,
  'The address of this consumption point.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaWebSiteAccess = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.WebSiteAccess,
  'WebSiteAccess',
  'Web Site Access',
  WebSiteAccessType.name,
  'Access information for the website of this consumption point.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaUtilityMeter = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.UtilityMeter,
  'UtilityMeter',
  'Utility Meter',
  MeterType.name,
  'A meter at this consumption point.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ConsumptionPointFieldMeta {
  public static readonly UBLExtensions = ConsumptionPointFieldMetaUBLExtensions
  public static readonly ID = ConsumptionPointFieldMetaID
  public static readonly Description = ConsumptionPointFieldMetaDescription
  public static readonly SubscriberID = ConsumptionPointFieldMetaSubscriberID
  public static readonly SubscriberType = ConsumptionPointFieldMetaSubscriberType
  public static readonly SubscriberTypeCode = ConsumptionPointFieldMetaSubscriberTypeCode
  public static readonly TotalDeliveredQuantity = ConsumptionPointFieldMetaTotalDeliveredQuantity
  public static readonly Address = ConsumptionPointFieldMetaAddress
  public static readonly WebSiteAccess = ConsumptionPointFieldMetaWebSiteAccess
  public static readonly UtilityMeter = ConsumptionPointFieldMetaUtilityMeter
}

export const ConsumptionPointFieldMap = new Map([
  [ConsumptionPointField.UBLExtensions, ConsumptionPointFieldMetaUBLExtensions],
  [ConsumptionPointField.ID, ConsumptionPointFieldMetaID],
  [ConsumptionPointField.Description, ConsumptionPointFieldMetaDescription],
  [ConsumptionPointField.SubscriberID, ConsumptionPointFieldMetaSubscriberID],
  [ConsumptionPointField.SubscriberType, ConsumptionPointFieldMetaSubscriberType],
  [ConsumptionPointField.SubscriberTypeCode, ConsumptionPointFieldMetaSubscriberTypeCode],
  [ConsumptionPointField.TotalDeliveredQuantity, ConsumptionPointFieldMetaTotalDeliveredQuantity],
  [ConsumptionPointField.Address, ConsumptionPointFieldMetaAddress],
  [ConsumptionPointField.WebSiteAccess, ConsumptionPointFieldMetaWebSiteAccess],
  [ConsumptionPointField.UtilityMeter, ConsumptionPointFieldMetaUtilityMeter]
])

export const ConsumptionPointType: Type<ConsumptionPointField> = {
  name: 'ConsumptionPoint',
  label: 'Consumption Point',
  module: TypeModule.cac,
  definition: 'A class to define the point of consumption for a utility, such as a meter.',
  fields: ConsumptionPointFieldMap,
}
