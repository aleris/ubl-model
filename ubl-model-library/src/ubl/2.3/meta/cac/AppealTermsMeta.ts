import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AppealTermsFieldMetaDescription = new FieldMeta<AppealTermsField>(
  AppealTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the terms of an appeal.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AppealTermsFieldMetaPresentationPeriod = new FieldMeta<AppealTermsField>(
  AppealTermsField.PresentationPeriod,
  'PresentationPeriod',
  'Presentation Period',
  'Period',
  'The period during which an appeal can be presented.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealInformationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealInformationParty,
  'AppealInformationParty',
  'Appeal Information Party',
  'Party',
  'The party presenting the information for an appeal.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AppealTermsFieldMetaAppealReceiverParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.AppealReceiverParty,
  'AppealReceiverParty',
  'Appeal Receiver Party',
  'Party',
  'The party to whom an appeal should be presented.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AppealTermsFieldMetaMediationParty = new FieldMeta<AppealTermsField>(
  AppealTermsField.MediationParty,
  'MediationParty',
  'Mediation Party',
  'Party',
  'The party that has been appointed to mediate any appeal.',
  '0..1',
  'cac',
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
