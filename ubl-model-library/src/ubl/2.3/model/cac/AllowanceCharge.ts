import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { PaymentMeans } from './PaymentMeans'
import { TaxCategory } from './TaxCategory'
import { TaxTotal } from './TaxTotal'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe information about a charge or discount as applied to a price component.
 */
export interface AllowanceCharge {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this allowance or charge.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * An indicator that this AllowanceCharge describes a charge (true) or a discount (false).
   * Indicator
   * Cardinality: 1
   */
  ChargeIndicator: Array<Indicator>

  /**
   * A mutually agreed code signifying the reason for this allowance or charge.
   * Code
   * Cardinality: 0..1
   */
  AllowanceChargeReasonCode?: Array<Code> | undefined

  /**
   * The reason for this allowance or charge.
   * Text
   * Cardinality: 0..n
   */
  AllowanceChargeReason?: Array<Text> | undefined

  /**
   * A number by which the base amount is multiplied to calculate the actual amount of this allowance or charge.
   * Numeric
   * Cardinality: 0..1
   * Examples: 0.20
   */
  MultiplierFactorNumeric?: Array<Numeric> | undefined

  /**
   * An indicator that this allowance or charge is prepaid (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PrepaidIndicator?: Array<Indicator> | undefined

  /**
   * A number indicating the order of this allowance or charge in the sequence of calculations applied when there are
   * multiple allowances or charges.
   * Numeric
   * Cardinality: 0..1
   * Examples: 1, 2, 3, 4, etc.
   */
  SequenceNumeric?: Array<Numeric> | undefined

  /**
   * The monetary amount of this allowance or charge to be applied.
   * Amount
   * Cardinality: 1
   * Examples: 35,23
   */
  Amount: Array<Amount>

  /**
   * The monetary amount to which the multiplier factor is applied in calculating the amount of this allowance or
   * charge.
   * Amount
   * Cardinality: 0..1
   */
  BaseAmount?: Array<Amount> | undefined

  /**
   * The accounting cost centre used by the buyer to account for this allowance or charge, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: Array<Code> | undefined

  /**
   * The accounting cost centre used by the buyer to account for this allowance or charge, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: Array<Text> | undefined

  /**
   * The allowance or charge per item; the total allowance or charge is calculated by multiplying the per unit amount by
   * the quantity of items, either at the level of the individual transaction line or for the total number of items in
   * the document, depending on the context in which it appears.
   * Amount
   * Cardinality: 0..1
   */
  PerUnitAmount?: Array<Amount> | undefined

  /**
   * A tax category applicable to this allowance or charge.
   * Tax Category
   * Cardinality: 0..n
   */
  TaxCategory?: Array<TaxCategory> | undefined

  /**
   * The total of all the taxes applicable to this allowance or charge.
   * Tax Total
   * Cardinality: 0..1
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * A means of payment for this allowance or charge.
   * Payment Means
   * Cardinality: 0..n
   */
  PaymentMeans?: Array<PaymentMeans> | undefined
}
