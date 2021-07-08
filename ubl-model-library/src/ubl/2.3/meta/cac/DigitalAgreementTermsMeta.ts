import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PeriodType } from './PeriodMeta'
import { ServiceLevelAgreementType } from './ServiceLevelAgreementMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaDescription = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the terms and conditions of a digital agreement.',
  FieldCardinality.Multi,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaValidityPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period of time for which this digital agreement is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaAdoptionPeriod = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.AdoptionPeriod,
  'AdoptionPeriod',
  'Adoption Period',
  PeriodType.name,
  'The period during which a digital agreement must be adopted.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementTermsFieldMetaServiceLevelAgreement = new FieldMeta<DigitalAgreementTermsField>(
  DigitalAgreementTermsField.ServiceLevelAgreement,
  'ServiceLevelAgreement',
  'Service Level Agreement',
  ServiceLevelAgreementType.name,
  'The service level agreement which regulates the quality, availability and responsibilities of digital services.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const DigitalAgreementTermsType: Type<DigitalAgreementTermsField> = {
  name: 'DigitalAgreementTerms',
  label: 'Digital Agreement Terms',
  module: TypeModule.cac,
  definition: 'A class to describe the terms and conditions of a digital agreement.',
  fields: DigitalAgreementTermsFieldMap,
}
