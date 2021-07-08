import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { AmountType } from '../cbc/AmountMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum BillingReferenceLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Amount = 'Amount',
  AllowanceCharge = 'AllowanceCharge'
}

export const BillingReferenceLineFieldMetaUBLExtensions = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const BillingReferenceLineFieldMetaID = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this transaction line in a billing document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillingReferenceLineFieldMetaAmount = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount of the transaction line, including any allowances and charges but excluding taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const BillingReferenceLineFieldMetaAllowanceCharge = new FieldMeta<BillingReferenceLineField>(
  BillingReferenceLineField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge applicable to the transaction line.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class BillingReferenceLineFieldMeta {
  public static readonly UBLExtensions = BillingReferenceLineFieldMetaUBLExtensions
  public static readonly ID = BillingReferenceLineFieldMetaID
  public static readonly Amount = BillingReferenceLineFieldMetaAmount
  public static readonly AllowanceCharge = BillingReferenceLineFieldMetaAllowanceCharge
}

export const BillingReferenceLineFieldMap = new Map([
  [BillingReferenceLineField.UBLExtensions, BillingReferenceLineFieldMetaUBLExtensions],
  [BillingReferenceLineField.ID, BillingReferenceLineFieldMetaID],
  [BillingReferenceLineField.Amount, BillingReferenceLineFieldMetaAmount],
  [BillingReferenceLineField.AllowanceCharge, BillingReferenceLineFieldMetaAllowanceCharge]
])

export const BillingReferenceLineType: Type<BillingReferenceLineField> = {
  name: 'BillingReferenceLine',
  label: 'Billing Reference Line',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a transaction line in a billing document.',
  fields: BillingReferenceLineFieldMap,
}
