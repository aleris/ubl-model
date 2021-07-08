import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PaymentMeansType } from './PaymentMeansMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AllowanceChargeField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ChargeIndicator = 'ChargeIndicator',
  AllowanceChargeReasonCode = 'AllowanceChargeReasonCode',
  AllowanceChargeReason = 'AllowanceChargeReason',
  MultiplierFactorNumeric = 'MultiplierFactorNumeric',
  PrepaidIndicator = 'PrepaidIndicator',
  SequenceNumeric = 'SequenceNumeric',
  Amount = 'Amount',
  BaseAmount = 'BaseAmount',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  PerUnitAmount = 'PerUnitAmount',
  TaxCategory = 'TaxCategory',
  TaxTotal = 'TaxTotal',
  PaymentMeans = 'PaymentMeans'
}

export const AllowanceChargeFieldMetaUBLExtensions = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaID = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this allowance or charge.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaChargeIndicator = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.ChargeIndicator,
  'ChargeIndicator',
  'Charge Indicator',
  IndicatorType.name,
  'An indicator that this AllowanceCharge describes a charge (true) or a discount (false).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaAllowanceChargeReasonCode = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.AllowanceChargeReasonCode,
  'AllowanceChargeReasonCode',
  'Allowance Charge Reason Code',
  CodeType.name,
  'A mutually agreed code signifying the reason for this allowance or charge.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaAllowanceChargeReason = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.AllowanceChargeReason,
  'AllowanceChargeReason',
  'Allowance Charge Reason',
  TextType.name,
  'The reason for this allowance or charge.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaMultiplierFactorNumeric = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.MultiplierFactorNumeric,
  'MultiplierFactorNumeric',
  'Multiplier Factor',
  NumericType.name,
  'A number by which the base amount is multiplied to calculate the actual amount of this allowance or charge.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '0.20'
)

export const AllowanceChargeFieldMetaPrepaidIndicator = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.PrepaidIndicator,
  'PrepaidIndicator',
  'Prepaid Indicator',
  IndicatorType.name,
  'An indicator that this allowance or charge is prepaid (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaSequenceNumeric = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.SequenceNumeric,
  'SequenceNumeric',
  'Sequence',
  NumericType.name,
  'A number indicating the order of this allowance or charge in the sequence of calculations applied when there are multiple allowances or charges.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1, 2, 3, 4, etc.'
)

export const AllowanceChargeFieldMetaAmount = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount of this allowance or charge to be applied.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '35,23'
)

export const AllowanceChargeFieldMetaBaseAmount = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.BaseAmount,
  'BaseAmount',
  'Base Amount',
  AmountType.name,
  'The monetary amount to which the multiplier factor is applied in calculating the amount of this allowance or charge.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaAccountingCostCode = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The accounting cost centre used by the buyer to account for this allowance or charge, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaAccountingCost = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The accounting cost centre used by the buyer to account for this allowance or charge, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaPerUnitAmount = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.PerUnitAmount,
  'PerUnitAmount',
  'Per Unit Amount',
  AmountType.name,
  'The allowance or charge per item; the total allowance or charge is calculated by multiplying the per unit amount by the quantity of items, either at the level of the individual transaction line or for the total number of items in the document, depending on the context in which it appears.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaTaxCategory = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  TaxCategoryType.name,
  'A tax category applicable to this allowance or charge.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaTaxTotal = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total of all the taxes applicable to this allowance or charge.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AllowanceChargeFieldMetaPaymentMeans = new FieldMeta<AllowanceChargeField>(
  AllowanceChargeField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'A means of payment for this allowance or charge.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AllowanceChargeFieldMeta {
  public static readonly UBLExtensions = AllowanceChargeFieldMetaUBLExtensions
  public static readonly ID = AllowanceChargeFieldMetaID
  public static readonly ChargeIndicator = AllowanceChargeFieldMetaChargeIndicator
  public static readonly AllowanceChargeReasonCode = AllowanceChargeFieldMetaAllowanceChargeReasonCode
  public static readonly AllowanceChargeReason = AllowanceChargeFieldMetaAllowanceChargeReason
  public static readonly MultiplierFactorNumeric = AllowanceChargeFieldMetaMultiplierFactorNumeric
  public static readonly PrepaidIndicator = AllowanceChargeFieldMetaPrepaidIndicator
  public static readonly SequenceNumeric = AllowanceChargeFieldMetaSequenceNumeric
  public static readonly Amount = AllowanceChargeFieldMetaAmount
  public static readonly BaseAmount = AllowanceChargeFieldMetaBaseAmount
  public static readonly AccountingCostCode = AllowanceChargeFieldMetaAccountingCostCode
  public static readonly AccountingCost = AllowanceChargeFieldMetaAccountingCost
  public static readonly PerUnitAmount = AllowanceChargeFieldMetaPerUnitAmount
  public static readonly TaxCategory = AllowanceChargeFieldMetaTaxCategory
  public static readonly TaxTotal = AllowanceChargeFieldMetaTaxTotal
  public static readonly PaymentMeans = AllowanceChargeFieldMetaPaymentMeans
}

export const AllowanceChargeFieldMap = new Map([
  [AllowanceChargeField.UBLExtensions, AllowanceChargeFieldMetaUBLExtensions],
  [AllowanceChargeField.ID, AllowanceChargeFieldMetaID],
  [AllowanceChargeField.ChargeIndicator, AllowanceChargeFieldMetaChargeIndicator],
  [AllowanceChargeField.AllowanceChargeReasonCode, AllowanceChargeFieldMetaAllowanceChargeReasonCode],
  [AllowanceChargeField.AllowanceChargeReason, AllowanceChargeFieldMetaAllowanceChargeReason],
  [AllowanceChargeField.MultiplierFactorNumeric, AllowanceChargeFieldMetaMultiplierFactorNumeric],
  [AllowanceChargeField.PrepaidIndicator, AllowanceChargeFieldMetaPrepaidIndicator],
  [AllowanceChargeField.SequenceNumeric, AllowanceChargeFieldMetaSequenceNumeric],
  [AllowanceChargeField.Amount, AllowanceChargeFieldMetaAmount],
  [AllowanceChargeField.BaseAmount, AllowanceChargeFieldMetaBaseAmount],
  [AllowanceChargeField.AccountingCostCode, AllowanceChargeFieldMetaAccountingCostCode],
  [AllowanceChargeField.AccountingCost, AllowanceChargeFieldMetaAccountingCost],
  [AllowanceChargeField.PerUnitAmount, AllowanceChargeFieldMetaPerUnitAmount],
  [AllowanceChargeField.TaxCategory, AllowanceChargeFieldMetaTaxCategory],
  [AllowanceChargeField.TaxTotal, AllowanceChargeFieldMetaTaxTotal],
  [AllowanceChargeField.PaymentMeans, AllowanceChargeFieldMetaPaymentMeans]
])

export const AllowanceChargeType: Type<AllowanceChargeField> = {
  name: 'AllowanceCharge',
  label: 'Allowance Charge',
  module: TypeModule.cac,
  definition: 'A class to describe information about a charge or discount as applied to a price component.',
  fields: AllowanceChargeFieldMap,
}
