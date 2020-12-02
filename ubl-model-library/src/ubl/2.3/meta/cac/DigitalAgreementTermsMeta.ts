import { FieldMeta } from '../FieldMeta'

export enum DigitalAgreementTermsField {
  UBLExtensions = 'UBLExtensions',
  Description = 'Description',
  ValidityPeriod = 'ValidityPeriod',
  AdoptionPeriod = 'AdoptionPeriod',
  ServiceLevelAgreement = 'ServiceLevelAgreement'
}

export const DigitalAgreementTermsFieldMetaUBLExtensions = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaDescription = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the terms and conditions of a digital agreement.',
  '1..n',
  'cbc',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaValidityPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  'Period',
  'The period of time for which this digital agreement is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaAdoptionPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.AdoptionPeriod,
  'AdoptionPeriod',
  'Adoption Period',
  'Period',
  'The period during which a digital agreement must be adopted.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaServiceLevelAgreement = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.ServiceLevelAgreement,
  'ServiceLevelAgreement',
  'Service Level Agreement',
  'ServiceLevelAgreement',
  'The service level agreement which regulates the quality, availability and responsibilities of digital services.',
  '0..n',
  'cac',
  'SLA',
  undefined
)

export class DigitalAgreementTermsFieldMeta {
  public static readonly UBLExtensions = DigitalAgreementTermsFieldMetaUBLExtensions
  public static readonly Description = DigitalAgreementTermsFieldMetaDescription
  public static readonly ValidityPeriod = DigitalAgreementTermsFieldMetaValidityPeriod
  public static readonly AdoptionPeriod = DigitalAgreementTermsFieldMetaAdoptionPeriod
  public static readonly ServiceLevelAgreement = DigitalAgreementTermsFieldMetaServiceLevelAgreement
}

export const DigitalAgreementTermsFieldMap = new Map([
  [DigitalAgreementTermsField.UBLExtensions, DigitalAgreementTermsFieldMetaUBLExtensions],
  [DigitalAgreementTermsField.Description, DigitalAgreementTermsFieldMetaDescription],
  [DigitalAgreementTermsField.ValidityPeriod, DigitalAgreementTermsFieldMetaValidityPeriod],
  [DigitalAgreementTermsField.AdoptionPeriod, DigitalAgreementTermsFieldMetaAdoptionPeriod],
  [DigitalAgreementTermsField.ServiceLevelAgreement, DigitalAgreementTermsFieldMetaServiceLevelAgreement]
])
