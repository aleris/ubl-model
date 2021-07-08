import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DeliveryTermsField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  SpecialTerms = 'SpecialTerms',
  LossRiskResponsibilityCode = 'LossRiskResponsibilityCode',
  LossRisk = 'LossRisk',
  Amount = 'Amount',
  DeliveryLocation = 'DeliveryLocation',
  AllowanceCharge = 'AllowanceCharge'
}

export const DeliveryTermsFieldMetaUBLExtensions = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaID = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this description of delivery terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'CIF, FOB, or EXW from the INCOTERMS Terms of Delivery. (2000 version preferred.)'
)

export const DeliveryTermsFieldMetaSpecialTerms = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.SpecialTerms,
  'SpecialTerms',
  'Special Terms',
  TextType.name,
  'A description of any terms or conditions relating to the delivery items.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaLossRiskResponsibilityCode = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.LossRiskResponsibilityCode,
  'LossRiskResponsibilityCode',
  'Loss Risk Responsibility Code',
  CodeType.name,
  'A code that identifies one of various responsibilities for loss risk in the execution of the delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaLossRisk = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.LossRisk,
  'LossRisk',
  'Loss Risk',
  TextType.name,
  'A description of responsibility for risk of loss in execution of the delivery, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaAmount = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount covered by these delivery terms.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaDeliveryLocation = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.DeliveryLocation,
  'DeliveryLocation',
  'Delivery Location',
  LocationType.name,
  'The location for the contracted delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaAllowanceCharge = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge covered by these delivery terms.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DeliveryTermsFieldMeta {
  public static readonly UBLExtensions = DeliveryTermsFieldMetaUBLExtensions
  public static readonly ID = DeliveryTermsFieldMetaID
  public static readonly SpecialTerms = DeliveryTermsFieldMetaSpecialTerms
  public static readonly LossRiskResponsibilityCode = DeliveryTermsFieldMetaLossRiskResponsibilityCode
  public static readonly LossRisk = DeliveryTermsFieldMetaLossRisk
  public static readonly Amount = DeliveryTermsFieldMetaAmount
  public static readonly DeliveryLocation = DeliveryTermsFieldMetaDeliveryLocation
  public static readonly AllowanceCharge = DeliveryTermsFieldMetaAllowanceCharge
}

export const DeliveryTermsFieldMap = new Map([
  [DeliveryTermsField.UBLExtensions, DeliveryTermsFieldMetaUBLExtensions],
  [DeliveryTermsField.ID, DeliveryTermsFieldMetaID],
  [DeliveryTermsField.SpecialTerms, DeliveryTermsFieldMetaSpecialTerms],
  [DeliveryTermsField.LossRiskResponsibilityCode, DeliveryTermsFieldMetaLossRiskResponsibilityCode],
  [DeliveryTermsField.LossRisk, DeliveryTermsFieldMetaLossRisk],
  [DeliveryTermsField.Amount, DeliveryTermsFieldMetaAmount],
  [DeliveryTermsField.DeliveryLocation, DeliveryTermsFieldMetaDeliveryLocation],
  [DeliveryTermsField.AllowanceCharge, DeliveryTermsFieldMetaAllowanceCharge]
])

export const DeliveryTermsType: Type<DeliveryTermsField> = {
  name: 'DeliveryTerms',
  label: 'Delivery Terms',
  module: TypeModule.cac,
  definition: 'A class for describing the terms and conditions applying to the delivery of goods.',
  fields: DeliveryTermsFieldMap,
}
