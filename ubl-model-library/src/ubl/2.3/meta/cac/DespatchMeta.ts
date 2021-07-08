import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { ContactType } from './ContactMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DespatchField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  RequestedDespatchDate = 'RequestedDespatchDate',
  RequestedDespatchTime = 'RequestedDespatchTime',
  EstimatedDespatchDate = 'EstimatedDespatchDate',
  EstimatedDespatchTime = 'EstimatedDespatchTime',
  ActualDespatchDate = 'ActualDespatchDate',
  ActualDespatchTime = 'ActualDespatchTime',
  GuaranteedDespatchDate = 'GuaranteedDespatchDate',
  GuaranteedDespatchTime = 'GuaranteedDespatchTime',
  ReleaseID = 'ReleaseID',
  Instructions = 'Instructions',
  DespatchAddress = 'DespatchAddress',
  DespatchLocation = 'DespatchLocation',
  DespatchParty = 'DespatchParty',
  CarrierParty = 'CarrierParty',
  NotifyParty = 'NotifyParty',
  Contact = 'Contact',
  EstimatedDespatchPeriod = 'EstimatedDespatchPeriod',
  RequestedDespatchPeriod = 'RequestedDespatchPeriod'
}

export const DespatchFieldMetaUBLExtensions = new FieldMeta<DespatchField>(
  DespatchField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DespatchFieldMetaID = new FieldMeta<DespatchField>(
  DespatchField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this despatch event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchDate,
  'RequestedDespatchDate',
  'Requested Despatch Date',
  DateType.name,
  'The despatch (pickup) date requested, normally by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchTime,
  'RequestedDespatchTime',
  'Requested Despatch Time',
  TimeType.name,
  'The despatch (pickup) time requested, normally by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchDate,
  'EstimatedDespatchDate',
  'Estimated Despatch Date',
  DateType.name,
  'The estimated despatch (pickup) date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchTime,
  'EstimatedDespatchTime',
  'Estimated Despatch Time',
  TimeType.name,
  'The estimated despatch (pickup) time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaActualDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.ActualDespatchDate,
  'ActualDespatchDate',
  'Actual Despatch Date',
  DateType.name,
  'The actual despatch (pickup) date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaActualDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.ActualDespatchTime,
  'ActualDespatchTime',
  'Actual Despatch Time',
  TimeType.name,
  'The actual despatch (pickup) time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaGuaranteedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.GuaranteedDespatchDate,
  'GuaranteedDespatchDate',
  'Guaranteed Despatch Date',
  DateType.name,
  'The date guaranteed for the despatch (pickup).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaGuaranteedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.GuaranteedDespatchTime,
  'GuaranteedDespatchTime',
  'Guaranteed Despatch Time',
  TimeType.name,
  'The time guaranteed for the despatch (pickup).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaReleaseID = new FieldMeta<DespatchField>(
  DespatchField.ReleaseID,
  'ReleaseID',
  'Release',
  IdentifierType.name,
  'An identifier for the release of the despatch used as security control or cargo control (pick-up).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaInstructions = new FieldMeta<DespatchField>(
  DespatchField.Instructions,
  'Instructions',
  'Instructions',
  TextType.name,
  'Text describing any special instructions applying to the despatch (pickup).',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchAddress = new FieldMeta<DespatchField>(
  DespatchField.DespatchAddress,
  'DespatchAddress',
  'Despatch Address',
  AddressType.name,
  'The address of the despatch (pickup).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchLocation = new FieldMeta<DespatchField>(
  DespatchField.DespatchLocation,
  'DespatchLocation',
  'Despatch Location',
  LocationType.name,
  'The location of the despatch (pickup).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchParty = new FieldMeta<DespatchField>(
  DespatchField.DespatchParty,
  'DespatchParty',
  'Despatch Party',
  PartyType.name,
  'The party despatching the goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaCarrierParty = new FieldMeta<DespatchField>(
  DespatchField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'The party carrying the goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaNotifyParty = new FieldMeta<DespatchField>(
  DespatchField.NotifyParty,
  'NotifyParty',
  'Notify Party',
  PartyType.name,
  'A party to be notified of this despatch (pickup).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaContact = new FieldMeta<DespatchField>(
  DespatchField.Contact,
  'Contact',
  'Contact',
  ContactType.name,
  'The primary contact for this despatch (pickup).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchPeriod = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchPeriod,
  'EstimatedDespatchPeriod',
  'Estimated Despatch Period',
  PeriodType.name,
  'The period estimated for the despatch (pickup) of goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchPeriod = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchPeriod,
  'RequestedDespatchPeriod',
  'Requested Despatch Period',
  PeriodType.name,
  'The period requested for the despatch (pickup) of goods.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DespatchFieldMeta {
  public static readonly UBLExtensions = DespatchFieldMetaUBLExtensions
  public static readonly ID = DespatchFieldMetaID
  public static readonly RequestedDespatchDate = DespatchFieldMetaRequestedDespatchDate
  public static readonly RequestedDespatchTime = DespatchFieldMetaRequestedDespatchTime
  public static readonly EstimatedDespatchDate = DespatchFieldMetaEstimatedDespatchDate
  public static readonly EstimatedDespatchTime = DespatchFieldMetaEstimatedDespatchTime
  public static readonly ActualDespatchDate = DespatchFieldMetaActualDespatchDate
  public static readonly ActualDespatchTime = DespatchFieldMetaActualDespatchTime
  public static readonly GuaranteedDespatchDate = DespatchFieldMetaGuaranteedDespatchDate
  public static readonly GuaranteedDespatchTime = DespatchFieldMetaGuaranteedDespatchTime
  public static readonly ReleaseID = DespatchFieldMetaReleaseID
  public static readonly Instructions = DespatchFieldMetaInstructions
  public static readonly DespatchAddress = DespatchFieldMetaDespatchAddress
  public static readonly DespatchLocation = DespatchFieldMetaDespatchLocation
  public static readonly DespatchParty = DespatchFieldMetaDespatchParty
  public static readonly CarrierParty = DespatchFieldMetaCarrierParty
  public static readonly NotifyParty = DespatchFieldMetaNotifyParty
  public static readonly Contact = DespatchFieldMetaContact
  public static readonly EstimatedDespatchPeriod = DespatchFieldMetaEstimatedDespatchPeriod
  public static readonly RequestedDespatchPeriod = DespatchFieldMetaRequestedDespatchPeriod
}

export const DespatchFieldMap = new Map([
  [DespatchField.UBLExtensions, DespatchFieldMetaUBLExtensions],
  [DespatchField.ID, DespatchFieldMetaID],
  [DespatchField.RequestedDespatchDate, DespatchFieldMetaRequestedDespatchDate],
  [DespatchField.RequestedDespatchTime, DespatchFieldMetaRequestedDespatchTime],
  [DespatchField.EstimatedDespatchDate, DespatchFieldMetaEstimatedDespatchDate],
  [DespatchField.EstimatedDespatchTime, DespatchFieldMetaEstimatedDespatchTime],
  [DespatchField.ActualDespatchDate, DespatchFieldMetaActualDespatchDate],
  [DespatchField.ActualDespatchTime, DespatchFieldMetaActualDespatchTime],
  [DespatchField.GuaranteedDespatchDate, DespatchFieldMetaGuaranteedDespatchDate],
  [DespatchField.GuaranteedDespatchTime, DespatchFieldMetaGuaranteedDespatchTime],
  [DespatchField.ReleaseID, DespatchFieldMetaReleaseID],
  [DespatchField.Instructions, DespatchFieldMetaInstructions],
  [DespatchField.DespatchAddress, DespatchFieldMetaDespatchAddress],
  [DespatchField.DespatchLocation, DespatchFieldMetaDespatchLocation],
  [DespatchField.DespatchParty, DespatchFieldMetaDespatchParty],
  [DespatchField.CarrierParty, DespatchFieldMetaCarrierParty],
  [DespatchField.NotifyParty, DespatchFieldMetaNotifyParty],
  [DespatchField.Contact, DespatchFieldMetaContact],
  [DespatchField.EstimatedDespatchPeriod, DespatchFieldMetaEstimatedDespatchPeriod],
  [DespatchField.RequestedDespatchPeriod, DespatchFieldMetaRequestedDespatchPeriod]
])

export const DespatchType: Type<DespatchField> = {
  name: 'Despatch',
  label: 'Despatch',
  module: TypeModule.cac,
  definition: 'A class to describe the despatching of goods (their pickup for delivery).',
  fields: DespatchFieldMap,
}
