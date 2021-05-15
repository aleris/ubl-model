import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AllowanceCharge } from  '../../model/cac/AllowanceCharge'
import { AllowanceChargeFieldMeta } from  '../../meta/cac/AllowanceChargeMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PaymentMeansDisplay from './PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AllowanceCharge | undefined
  meta: FieldMeta<T>
}

export default function AllowanceChargeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AllowanceCharge">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AllowanceChargeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AllowanceChargeFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Charge Indicator"
            value={value.ChargeIndicator?.[0]}
            meta={AllowanceChargeFieldMeta.ChargeIndicator}
          />

          <CodeDisplay
            label="Allowance Charge Reason Code"
            value={value.AllowanceChargeReasonCode?.[0]}
            meta={AllowanceChargeFieldMeta.AllowanceChargeReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AllowanceChargeReason"
            label="Allowance Charge Reason"
            items={value.AllowanceChargeReason}
            meta={AllowanceChargeFieldMeta.AllowanceChargeReason} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Allowance Charge Reason"
                value={itemValue}
                meta={AllowanceChargeFieldMeta.AllowanceChargeReason}
              />
            }
          />

          <NumericDisplay
            label="Multiplier Factor"
            value={value.MultiplierFactorNumeric?.[0]}
            meta={AllowanceChargeFieldMeta.MultiplierFactorNumeric}
          />

          <IndicatorDisplay
            label="Prepaid Indicator"
            value={value.PrepaidIndicator?.[0]}
            meta={AllowanceChargeFieldMeta.PrepaidIndicator}
          />

          <NumericDisplay
            label="Sequence"
            value={value.SequenceNumeric?.[0]}
            meta={AllowanceChargeFieldMeta.SequenceNumeric}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={AllowanceChargeFieldMeta.Amount}
          />

          <AmountDisplay
            label="Base Amount"
            value={value.BaseAmount?.[0]}
            meta={AllowanceChargeFieldMeta.BaseAmount}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={AllowanceChargeFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={AllowanceChargeFieldMeta.AccountingCost}
          />

          <AmountDisplay
            label="Per Unit Amount"
            value={value.PerUnitAmount?.[0]}
            meta={AllowanceChargeFieldMeta.PerUnitAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxCategory"
            label="Tax Category"
            items={value.TaxCategory}
            meta={AllowanceChargeFieldMeta.TaxCategory} 
            itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
              <TaxCategoryDisplay
                key={key}
                label="Tax Category"
                value={itemValue}
                meta={AllowanceChargeFieldMeta.TaxCategory}
              />
            }
          />

          <TaxTotalDisplay
            label="Tax Total"
            value={value.TaxTotal?.[0]}
            meta={AllowanceChargeFieldMeta.TaxTotal}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={AllowanceChargeFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={AllowanceChargeFieldMeta.PaymentMeans}
              />
            }
          />
        </div>
    </div>
  )
}
