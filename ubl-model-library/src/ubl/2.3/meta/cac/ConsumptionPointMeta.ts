import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaID = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this point of consumption.',
  '1',
  'cbc',
  undefined,
  '7411013716x'
)

export const ConsumptionPointFieldMetaDescription = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this consumption point.',
  '0..n',
  'cbc',
  undefined,
  'Additional informations concerning the consumption point'
)

export const ConsumptionPointFieldMetaSubscriberID = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberID,
  'SubscriberID',
  'Subscriber Identifier',
  'Identifier',
  'An identifier for the subscriber responsible for the consumption at this consumption point.',
  '0..1',
  'cbc',
  undefined,
  '98143211'
)

export const ConsumptionPointFieldMetaSubscriberType = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberType,
  'SubscriberType',
  'Subscriber Type',
  'Text',
  'The type of subscriber, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaSubscriberTypeCode = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.SubscriberTypeCode,
  'SubscriberTypeCode',
  'Subscriber Type Code',
  'Code',
  'The type of subscriber, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'APL'
)

export const ConsumptionPointFieldMetaTotalDeliveredQuantity = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.TotalDeliveredQuantity,
  'TotalDeliveredQuantity',
  'Total Delivered Quantity',
  'Quantity',
  'The total quantity delivered, calculated at this consumption point.',
  '0..1',
  'cbc',
  undefined,
  '5761.00'
)

export const ConsumptionPointFieldMetaAddress = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.Address,
  'Address',
  'Address',
  'Address',
  'The address of this consumption point.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaWebSiteAccess = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.WebSiteAccess,
  'WebSiteAccess',
  'Web Site Access',
  'WebSiteAccess',
  'Access information for the website of this consumption point.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ConsumptionPointFieldMetaUtilityMeter = new FieldMeta<ConsumptionPointField>(
  ConsumptionPointField.UtilityMeter,
  'UtilityMeter',
  'Utility Meter',
  'Meter',
  'A meter at this consumption point.',
  '0..n',
  'cac',
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
