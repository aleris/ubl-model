import { FieldMeta } from '../../FieldMeta'

export enum TendererPartyQualificationField {
  InterestedProcurementProjectLot = 'InterestedProcurementProjectLot',
  MainQualifyingParty = 'MainQualifyingParty',
  AdditionalQualifyingParty = 'AdditionalQualifyingParty'
}

export const TendererPartyQualificationFieldMetaInterestedProcurementProjectLot = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.InterestedProcurementProjectLot,
  'InterestedProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'The procurement project lot the party is interested in.',
  '0..n',
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaMainQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.MainQualifyingParty,
  'MainQualifyingParty',
  'Qualifying Party',
  'QualifyingParty',
  'The qualifications of the main tenderer party.',
  '1',
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaAdditionalQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.AdditionalQualifyingParty,
  'AdditionalQualifyingParty',
  'Qualifying Party',
  'QualifyingParty',
  'The qualifications of a tenderer party other than the main tenderer party when bidding as a consortium.',
  '0..n',
  undefined,
  undefined
)

export class TendererPartyQualificationFieldMeta {
  public static readonly InterestedProcurementProjectLot = TendererPartyQualificationFieldMetaInterestedProcurementProjectLot
  public static readonly MainQualifyingParty = TendererPartyQualificationFieldMetaMainQualifyingParty
  public static readonly AdditionalQualifyingParty = TendererPartyQualificationFieldMetaAdditionalQualifyingParty
}

export const TendererPartyQualificationFieldMap = new Map([
  [TendererPartyQualificationField.InterestedProcurementProjectLot, TendererPartyQualificationFieldMetaInterestedProcurementProjectLot],
  [TendererPartyQualificationField.MainQualifyingParty, TendererPartyQualificationFieldMetaMainQualifyingParty],
  [TendererPartyQualificationField.AdditionalQualifyingParty, TendererPartyQualificationFieldMetaAdditionalQualifyingParty]
])
