import { FieldMeta } from '../../FieldMeta'

export enum DespatchField {
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

export const DespatchFieldMetaID = new FieldMeta<DespatchField>(
  DespatchField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this despatch event.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchDate,
  'RequestedDespatchDate',
  'Despatch Date',
  'Date',
  'The despatch (pickup) date requested, normally by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchTime,
  'RequestedDespatchTime',
  'Despatch Time',
  'Time',
  'The despatch (pickup) time requested, normally by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchDate,
  'EstimatedDespatchDate',
  'Despatch Date',
  'Date',
  'The estimated despatch (pickup) date.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchTime,
  'EstimatedDespatchTime',
  'Despatch Time',
  'Time',
  'The estimated despatch (pickup) time.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaActualDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.ActualDespatchDate,
  'ActualDespatchDate',
  'Despatch Date',
  'Date',
  'The actual despatch (pickup) date.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaActualDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.ActualDespatchTime,
  'ActualDespatchTime',
  'Despatch Time',
  'Time',
  'The actual despatch (pickup) time.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaGuaranteedDespatchDate = new FieldMeta<DespatchField>(
  DespatchField.GuaranteedDespatchDate,
  'GuaranteedDespatchDate',
  'Despatch Date',
  'Date',
  'The date guaranteed for the despatch (pickup).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaGuaranteedDespatchTime = new FieldMeta<DespatchField>(
  DespatchField.GuaranteedDespatchTime,
  'GuaranteedDespatchTime',
  'Despatch Time',
  'Time',
  'The time guaranteed for the despatch (pickup).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaReleaseID = new FieldMeta<DespatchField>(
  DespatchField.ReleaseID,
  'ReleaseID',
  'Release',
  'Identifier',
  'An identifier for the release of the despatch used as security control or cargo control (pick-up).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaInstructions = new FieldMeta<DespatchField>(
  DespatchField.Instructions,
  'Instructions',
  'Instructions',
  'Text',
  'Text describing any special instructions applying to the despatch (pickup).',
  '0..n',
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchAddress = new FieldMeta<DespatchField>(
  DespatchField.DespatchAddress,
  'DespatchAddress',
  'Address',
  'Address',
  'The address of the despatch (pickup).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchLocation = new FieldMeta<DespatchField>(
  DespatchField.DespatchLocation,
  'DespatchLocation',
  'Location',
  'Location',
  'The location of the despatch (pickup).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaDespatchParty = new FieldMeta<DespatchField>(
  DespatchField.DespatchParty,
  'DespatchParty',
  'Party',
  'Party',
  'The party despatching the goods.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaCarrierParty = new FieldMeta<DespatchField>(
  DespatchField.CarrierParty,
  'CarrierParty',
  'Party',
  'Party',
  'The party carrying the goods.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaNotifyParty = new FieldMeta<DespatchField>(
  DespatchField.NotifyParty,
  'NotifyParty',
  'Party',
  'Party',
  'A party to be notified of this despatch (pickup).',
  '0..n',
  undefined,
  undefined
)

export const DespatchFieldMetaContact = new FieldMeta<DespatchField>(
  DespatchField.Contact,
  'Contact',
  'Contact',
  'Contact',
  'The primary contact for this despatch (pickup).',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaEstimatedDespatchPeriod = new FieldMeta<DespatchField>(
  DespatchField.EstimatedDespatchPeriod,
  'EstimatedDespatchPeriod',
  'Period',
  'Period',
  'The period estimated for the despatch (pickup) of goods.',
  '0..1',
  undefined,
  undefined
)

export const DespatchFieldMetaRequestedDespatchPeriod = new FieldMeta<DespatchField>(
  DespatchField.RequestedDespatchPeriod,
  'RequestedDespatchPeriod',
  'Period',
  'Period',
  'The period requested for the despatch (pickup) of goods.',
  '0..1',
  undefined,
  undefined
)

export class DespatchFieldMeta {
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
