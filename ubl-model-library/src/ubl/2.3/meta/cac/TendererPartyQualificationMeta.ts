import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ProcurementProjectLotType } from './ProcurementProjectLotMeta'
import { QualifyingPartyType } from './QualifyingPartyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TendererPartyQualificationField {
  UBLExtensions = 'UBLExtensions',
  InterestedProcurementProjectLot = 'InterestedProcurementProjectLot',
  MainQualifyingParty = 'MainQualifyingParty',
  AdditionalQualifyingParty = 'AdditionalQualifyingParty'
}

export const TendererPartyQualificationFieldMetaUBLExtensions = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaInterestedProcurementProjectLot = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.InterestedProcurementProjectLot,
  'InterestedProcurementProjectLot',
  'Interested Procurement Project Lot',
  ProcurementProjectLotType.name,
  'The procurement project lot the party is interested in.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaMainQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.MainQualifyingParty,
  'MainQualifyingParty',
  'Main Qualifying Party',
  QualifyingPartyType.name,
  'The qualifications of the main tenderer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererPartyQualificationFieldMetaAdditionalQualifyingParty = new FieldMeta<TendererPartyQualificationField>(
  TendererPartyQualificationField.AdditionalQualifyingParty,
  'AdditionalQualifyingParty',
  'Additional Qualifying Party',
  QualifyingPartyType.name,
  'The qualifications of a tenderer party other than the main tenderer party when bidding as a consortium.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TendererPartyQualificationType: Type<TendererPartyQualificationField> = {
  name: 'TendererPartyQualification',
  label: 'Tenderer Party Qualification',
  module: TypeModule.cac,
  definition: 'A class to describe the qualifications of a tenderer party.',
  fields: TendererPartyQualificationFieldMap,
}
