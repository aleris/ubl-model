import { FieldMeta } from '../../FieldMeta'

export enum AppealTermsField {
  Description = 'Description',
  PresentationPeriod = 'PresentationPeriod',
  AppealInformationParty = 'AppealInformationParty',
  AppealReceiverParty = 'AppealReceiverParty',
  MediationParty = 'MediationParty'
}

export const AppealTermsFieldMetaDescription = new FieldMeta<AppealTermsField>(
  AppealTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the terms of an appeal.',
  '0..n',
  undefined,
  undefined
)

export const AppealTermsFieldMetaPresentationPeriod = new FieldMeta<AppealTermsField>(
  AppealTermsField.PresentationPeriod,
  'PresentationPeriod',
  'Period',
  'Period',
  'The period during which an appeal can be presented.',
  '0..1',
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealInformationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealInformationParty,
  'AppealInformationParty',
  'Party',
  'Party',
  'The party presenting the information for an appeal.',
  '0..1',
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealReceiverParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealReceiverParty,
  'AppealReceiverParty',
  'Party',
  'Party',
  'The party to whom an appeal should be presented.',
  '0..1',
  undefined,
  undefined
)

export const AppealTermsFieldMetaMediationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.MediationParty,
  'MediationParty',
  'Party',
  'Party',
  'The party that has been appointed to mediate any appeal.',
  '0..1',
  undefined,
  undefined
)

export class AppealTermsFieldMeta {
  public static readonly Description = AppealTermsFieldMetaDescription
  public static readonly PresentationPeriod = AppealTermsFieldMetaPresentationPeriod
  public static readonly AppealInformationParty = AppealTermsFieldMetaAppealInformationParty
  public static readonly AppealReceiverParty = AppealTermsFieldMetaAppealReceiverParty
  public static readonly MediationParty = AppealTermsFieldMetaMediationParty
}

export const AppealTermsFieldMap = new Map([
  [AppealTermsField.Description, AppealTermsFieldMetaDescription],
  [AppealTermsField.PresentationPeriod, AppealTermsFieldMetaPresentationPeriod],
  [AppealTermsField.AppealInformationParty, AppealTermsFieldMetaAppealInformationParty],
  [AppealTermsField.AppealReceiverParty, AppealTermsFieldMetaAppealReceiverParty],
  [AppealTermsField.MediationParty, AppealTermsFieldMetaMediationParty]
])
