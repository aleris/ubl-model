import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxTotal } from  '../../model/cac/TaxTotal'
import { TaxTotalFieldMeta } from  '../../meta/cac/TaxTotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TaxSubtotalDisplay from './TaxSubtotalDisplay'
import { TaxSubtotal } from '../../model/cac/TaxSubtotal'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TaxTotal | undefined
  meta: FieldMeta<T>
}

export default function TaxTotalDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TaxTotal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TaxTotalFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Tax Amount"
            value={value.TaxAmount?.[0]}
            meta={TaxTotalFieldMeta.TaxAmount}
          />

          <NumericDisplay
            label="Calculation Sequence"
            value={value.CalculationSequenceNumeric?.[0]}
            meta={TaxTotalFieldMeta.CalculationSequenceNumeric}
          />

          <AmountDisplay
            label="Rounding Amount"
            value={value.RoundingAmount?.[0]}
            meta={TaxTotalFieldMeta.RoundingAmount}
          />

          <IndicatorDisplay
            label="Tax Evidence Indicator"
            value={value.TaxEvidenceIndicator?.[0]}
            meta={TaxTotalFieldMeta.TaxEvidenceIndicator}
          />

          <IndicatorDisplay
            label="Tax Included Indicator"
            value={value.TaxIncludedIndicator?.[0]}
            meta={TaxTotalFieldMeta.TaxIncludedIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxSubtotal"
            label="Tax Subtotal"
            items={value.TaxSubtotal}
            meta={TaxTotalFieldMeta.TaxSubtotal} 
            itemDisplay={ (itemValue: TaxSubtotal, key: string | number) =>
              <TaxSubtotalDisplay
                key={key}
                label="Tax Subtotal"
                value={itemValue}
                meta={TaxTotalFieldMeta.TaxSubtotal}
              />
            }
          />
        </div>
    </div>
  )
}
