import { FieldMeta } from '../../FieldMeta'

export enum DigitalAgreementTermsField {
  Description = 'Description',
  ValidityPeriod = 'ValidityPeriod',
  AdoptionPeriod = 'AdoptionPeriod',
  ServiceLevelAgreement = 'ServiceLevelAgreement'
}

export const DigitalAgreementTermsFieldMetaDescription = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the terms and conditions of a digital agreement.',
  '1..n',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaValidityPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period of time for which this digital agreement is valid.',
  '0..1',
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaAdoptionPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.AdoptionPeriod,
  'AdoptionPeriod',
  'Period',
  'Period',
  'The period during which a digital agreement must be adopted.',
  '0..1',
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
  'SLA',
  undefined
)

export class DigitalAgreementTermsFieldMeta {
  public static readonly Description = DigitalAgreementTermsFieldMetaDescription
  public static readonly ValidityPeriod = DigitalAgreementTermsFieldMetaValidityPeriod
  public static readonly AdoptionPeriod = DigitalAgreementTermsFieldMetaAdoptionPeriod
  public static readonly ServiceLevelAgreement = DigitalAgreementTermsFieldMetaServiceLevelAgreement
}

export const DigitalAgreementTermsFieldMap = new Map([
  [DigitalAgreementTermsField.Description, DigitalAgreementTermsFieldMetaDescription],
  [DigitalAgreementTermsField.ValidityPeriod, DigitalAgreementTermsFieldMetaValidityPeriod],
  [DigitalAgreementTermsField.AdoptionPeriod, DigitalAgreementTermsFieldMetaAdoptionPeriod],
  [DigitalAgreementTermsField.ServiceLevelAgreement, DigitalAgreementTermsFieldMetaServiceLevelAgreement]
])
