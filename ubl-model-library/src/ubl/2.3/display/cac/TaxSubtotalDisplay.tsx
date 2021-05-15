import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxSubtotal } from  '../../model/cac/TaxSubtotal'
import { TaxSubtotalFieldMeta } from  '../../meta/cac/TaxSubtotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TaxSubtotal | undefined
  meta: FieldMeta<T>
}

export default function TaxSubtotalDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TaxSubtotal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TaxSubtotalFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Taxable Amount"
            value={value.TaxableAmount?.[0]}
            meta={TaxSubtotalFieldMeta.TaxableAmount}
          />

          <AmountDisplay
            label="Tax Amount"
            value={value.TaxAmount?.[0]}
            meta={TaxSubtotalFieldMeta.TaxAmount}
          />

          <NumericDisplay
            label="Calculation Sequence"
            value={value.CalculationSequenceNumeric?.[0]}
            meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric}
          />

          <AmountDisplay
            label="Transaction Currency Tax Amount"
            value={value.TransactionCurrencyTaxAmount?.[0]}
            meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount}
          />

          <NumericDisplay
            label="Percent"
            value={value.Percent?.[0]}
            meta={TaxSubtotalFieldMeta.Percent}
          />

          <MeasureDisplay
            label="Base Unit Measure"
            value={value.BaseUnitMeasure?.[0]}
            meta={TaxSubtotalFieldMeta.BaseUnitMeasure}
          />

          <AmountDisplay
            label="Per Unit Amount"
            value={value.PerUnitAmount?.[0]}
            meta={TaxSubtotalFieldMeta.PerUnitAmount}
          />

          <TextDisplay
            label="Tier Range"
            value={value.TierRange?.[0]}
            meta={TaxSubtotalFieldMeta.TierRange}
          />

          <NumericDisplay
            label="Tier Rate"
            value={value.TierRatePercent?.[0]}
            meta={TaxSubtotalFieldMeta.TierRatePercent}
          />

          <TaxCategoryDisplay
            label="Tax Category"
            value={value.TaxCategory?.[0]}
            meta={TaxSubtotalFieldMeta.TaxCategory}
          />
        </div>
    </div>
  )
}
