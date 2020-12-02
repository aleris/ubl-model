import { FieldMeta } from '../FieldMeta'

export enum TendererPartyQualificationField {
  UBLExtensions = 'UBLExtensions',
  InterestedProcurementProjectLot = 'InterestedProcurementProjectLot',
  MainQualifyingParty = 'MainQualifyingParty',
  AdditionalQualifyingParty = 'AdditionalQualifyingParty'
}

export const TendererPartyQualificationFieldMetaUBLExtensions = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaInterestedProcurementProjectLot = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.InterestedProcurementProjectLot,
  'InterestedProcurementProjectLot',
  'Interested Procurement Project Lot',
  'ProcurementProjectLot',
  'The procurement project lot the party is interested in.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaMainQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.MainQualifyingParty,
  'MainQualifyingParty',
  'Main Qualifying Party',
  'QualifyingParty',
  'The qualifications of the main tenderer party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaAdditionalQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.AdditionalQualifyingParty,
  'AdditionalQualifyingParty',
  'Additional Qualifying Party',
  'QualifyingParty',
  'The qualifications of a tenderer party other than the main tenderer party when bidding as a consortium.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TendererPartyQualificationFieldMeta {
  public static readonly UBLExtensions = TendererPartyQualificationFieldMetaUBLExtensions
  public static readonly InterestedProcurementProjectLot = TendererPartyQualificationFieldMetaInterestedProcurementProjectLot
  public static readonly MainQualifyingParty = TendererPartyQualificationFieldMetaMainQualifyingParty
  public static readonly AdditionalQualifyingParty = TendererPartyQualificationFieldMetaAdditionalQualifyingParty
}

export const TendererPartyQualificationFieldMap = new Map([
  [TendererPartyQualificationField.UBLExtensions, TendererPartyQualificationFieldMetaUBLExtensions],
  [TendererPartyQualificationField.InterestedProcurementProjectLot, TendererPartyQualificationFieldMetaInterestedProcurementProjectLot],
  [TendererPartyQualificationField.MainQualifyingParty, TendererPartyQualificationFieldMetaMainQualifyingParty],
  [TendererPartyQualificationField.AdditionalQualifyingParty, TendererPartyQualificationFieldMetaAdditionalQualifyingParty]
])
