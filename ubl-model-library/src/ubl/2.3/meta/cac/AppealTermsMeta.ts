import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AppealTermsField {
  UBLExtensions = 'UBLExtensions',
  Description = 'Description',
  PresentationPeriod = 'PresentationPeriod',
  AppealInformationParty = 'AppealInformationParty',
  AppealReceiverParty = 'AppealReceiverParty',
  MediationParty = 'MediationParty'
}

export const AppealTermsFieldMetaUBLExtensions = new FieldMeta<AppealTermsField>(
  AppealTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AppealTermsFieldMetaDescription = new FieldMeta<AppealTermsField>(
  AppealTermsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the terms of an appeal.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AppealTermsFieldMetaPresentationPeriod = new FieldMeta<AppealTermsField>(
  AppealTermsField.PresentationPeriod,
  'PresentationPeriod',
  'Presentation Period',
  PeriodType.name,
  'The period during which an appeal can be presented.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealInformationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealInformationParty,
  'AppealInformationParty',
  'Appeal Information Party',
  PartyType.name,
  'The party presenting the information for an appeal.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealReceiverParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealReceiverParty,
  'AppealReceiverParty',
  'Appeal Receiver Party',
  PartyType.name,
  'The party to whom an appeal should be presented.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AppealTermsFieldMetaMediationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.MediationParty,
  'MediationParty',
  'Mediation Party',
  PartyType.name,
  'The party that has been appointed to mediate any appeal.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AppealTermsFieldMeta {
  public static readonly UBLExtensions = AppealTermsFieldMetaUBLExtensions
  public static readonly Description = AppealTermsFieldMetaDescription
  public static readonly PresentationPeriod = AppealTermsFieldMetaPresentationPeriod
  public static readonly AppealInformationParty = AppealTermsFieldMetaAppealInformationParty
  public static readonly AppealReceiverParty = AppealTermsFieldMetaAppealReceiverParty
  public static readonly MediationParty = AppealTermsFieldMetaMediationParty
}

export const AppealTermsFieldMap = new Map([
  [AppealTermsField.UBLExtensions, AppealTermsFieldMetaUBLExtensions],
  [AppealTermsField.Description, AppealTermsFieldMetaDescription],
  [AppealTermsField.PresentationPeriod, AppealTermsFieldMetaPresentationPeriod],
  [AppealTermsField.AppealInformationParty, AppealTermsFieldMetaAppealInformationParty],
  [AppealTermsField.AppealReceiverParty, AppealTermsFieldMetaAppealReceiverParty],
  [AppealTermsField.MediationParty, AppealTermsFieldMetaMediationParty]
])

export const AppealTermsType: Type<AppealTermsField> = {
  name: 'AppealTerms',
  label: 'Appeal Terms',
  module: TypeModule.cac,
  definition: 'A class to describe the terms and conditions, set by the contracting authority, under which an appeal can be lodged for a tender award.',
  fields: AppealTermsFieldMap,
}
