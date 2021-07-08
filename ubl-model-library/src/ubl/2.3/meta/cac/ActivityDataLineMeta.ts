import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from './CustomerPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { PeriodType } from './PeriodMeta'
import { SalesItemType } from './SalesItemMeta'
import { SupplierPartyType } from './SupplierPartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaID = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this activity data line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  CodeType.name,
  'A code signifying the type of supply chain activity.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaBuyerCustomerParty = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer of the item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSellerSupplierParty = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller of the item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityPeriod = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityPeriod,
  'ActivityPeriod',
  'Activity Period',
  PeriodType.name,
  'The period during which the activity is realized.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityOriginLocation = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityOriginLocation,
  'ActivityOriginLocation',
  'Activity Origin Location',
  LocationType.name,
  'Either the location where the movement of goods is observed or the location from which the goods are moved.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaActivityFinalLocation = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.ActivityFinalLocation,
  'ActivityFinalLocation',
  'Activity Final Location',
  LocationType.name,
  'The location to which the goods are moved.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ActivityDataLineFieldMetaSalesItem = new FieldMeta<ActivityDataLineField>(
  ActivityDataLineField.SalesItem,
  'SalesItem',
  'Sales Item',
  SalesItemType.name,
  'Sales information for an item to which this line applies.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const ActivityDataLineType: Type<ActivityDataLineField> = {
  name: 'ActivityDataLine',
  label: 'Activity Data Line',
  module: TypeModule.cac,
  definition: 'A class to associate a time period and locations (activity data) with an item for inventory planning purposes.',
  fields: ActivityDataLineFieldMap,
}
