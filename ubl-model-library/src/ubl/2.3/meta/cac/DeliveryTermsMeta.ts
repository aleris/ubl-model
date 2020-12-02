import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaID = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this description of delivery terms.',
  '0..1',
  'cbc',
  undefined,
  'CIF, FOB, or EXW from the INCOTERMS Terms of Delivery. (2000 version preferred.)'
)

export const DeliveryTermsFieldMetaSpecialTerms = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.SpecialTerms,
  'SpecialTerms',
  'Special Terms',
  'Text',
  'A description of any terms or conditions relating to the delivery items.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaLossRiskResponsibilityCode = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.LossRiskResponsibilityCode,
  'LossRiskResponsibilityCode',
  'Loss Risk Responsibility Code',
  'Code',
  'A code that identifies one of various responsibilities for loss risk in the execution of the delivery.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaLossRisk = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.LossRisk,
  'LossRisk',
  'Loss Risk',
  'Text',
  'A description of responsibility for risk of loss in execution of the delivery, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaAmount = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount covered by these delivery terms.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaDeliveryLocation = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.DeliveryLocation,
  'DeliveryLocation',
  'Delivery Location',
  'Location',
  'The location for the contracted delivery.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DeliveryTermsFieldMetaAllowanceCharge = new FieldMeta<DeliveryTermsField>(
  DeliveryTermsField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge covered by these delivery terms.',
  '0..1',
  'cac',
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
