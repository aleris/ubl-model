import { FieldMeta } from '../FieldMeta'

export enum ActivityDataLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SupplyChainActivityTypeCode = 'SupplyChainActivityTypeCode',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ActivityPeriod = 'ActivityPeriod',
  ActivityOriginLocation = 'ActivityOriginLocation',
  ActivityFinalLocation = 'ActivityFinalLocation',
  SalesItem = 'SalesItem'
}

export const ActivityDataLineFieldMetaUBLExtensions = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaID = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this activity data line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  'Code',
  'A code signifying the type of supply chain activity.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaBuyerCustomerParty = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer of the item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSellerSupplierParty = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller of the item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityPeriod = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityPeriod,
  'ActivityPeriod',
  'Activity Period',
  'Period',
  'The period during which the activity is realized.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityOriginLocation = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityOriginLocation,
  'ActivityOriginLocation',
  'Activity Origin Location',
  'Location',
  'Either the location where the movement of goods is observed or the location from which the goods are moved.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityFinalLocation = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityFinalLocation,
  'ActivityFinalLocation',
  'Activity Final Location',
  'Location',
  'The location to which the goods are moved.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSalesItem = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  'SalesItem',
  'Sales information for an item to which this line applies.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class ActivityDataLineFieldMeta {
  public static readonly UBLExtensions = ActivityDataLineFieldMetaUBLExtensions
  public static readonly ID = ActivityDataLineFieldMetaID
  public static readonly SupplyChainActivityTypeCode = ActivityDataLineFieldMetaSupplyChainActivityTypeCode
  public static readonly BuyerCustomerParty = ActivityDataLineFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ActivityDataLineFieldMetaSellerSupplierParty
  public static readonly ActivityPeriod = ActivityDataLineFieldMetaActivityPeriod
  public static readonly ActivityOriginLocation = ActivityDataLineFieldMetaActivityOriginLocation
  public static readonly ActivityFinalLocation = ActivityDataLineFieldMetaActivityFinalLocation
  public static readonly SalesItem = ActivityDataLineFieldMetaSalesItem
}

export const ActivityDataLineFieldMap = new Map([
  [ActivityDataLineField.UBLExtensions, ActivityDataLineFieldMetaUBLExtensions],
  [ActivityDataLineField.ID, ActivityDataLineFieldMetaID],
  [ActivityDataLineField.SupplyChainActivityTypeCode, ActivityDataLineFieldMetaSupplyChainActivityTypeCode],
  [ActivityDataLineField.BuyerCustomerParty, ActivityDataLineFieldMetaBuyerCustomerParty],
  [ActivityDataLineField.SellerSupplierParty, ActivityDataLineFieldMetaSellerSupplierParty],
  [ActivityDataLineField.ActivityPeriod, ActivityDataLineFieldMetaActivityPeriod],
  [ActivityDataLineField.ActivityOriginLocation, ActivityDataLineFieldMetaActivityOriginLocation],
  [ActivityDataLineField.ActivityFinalLocation, ActivityDataLineFieldMetaActivityFinalLocation],
  [ActivityDataLineField.SalesItem, ActivityDataLineFieldMetaSalesItem]
])
