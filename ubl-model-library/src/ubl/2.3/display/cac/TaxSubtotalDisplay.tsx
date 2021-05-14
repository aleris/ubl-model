import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TaxSubtotal
  meta: FieldMeta<T>
}

export default function TaxSubtotalDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TaxSubtotal ubl-TaxSubtotalType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TaxSubtotal ubl-UBLExtensions"
          meta={TaxSubtotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Amount ubl-TaxableAmount"
          meta={TaxSubtotalFieldMeta.TaxableAmount} 
          value={value.TaxableAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Taxable Amount"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TaxableAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Amount ubl-TaxAmount"
          meta={TaxSubtotalFieldMeta.TaxAmount} 
          value={value.TaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Amount"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Numeric ubl-CalculationSequenceNumeric"
          meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric} 
          value={value.CalculationSequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Calculation Sequence"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Amount ubl-TransactionCurrencyTaxAmount"
          meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount} 
          value={value.TransactionCurrencyTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Transaction Currency Tax Amount"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Numeric ubl-Percent"
          meta={TaxSubtotalFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Percent"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.Percent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Measure ubl-BaseUnitMeasure"
          meta={TaxSubtotalFieldMeta.BaseUnitMeasure} 
          value={value.BaseUnitMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Base Unit Measure"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.BaseUnitMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Amount ubl-PerUnitAmount"
          meta={TaxSubtotalFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Per Unit Amount"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.PerUnitAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Text ubl-TierRange"
          meta={TaxSubtotalFieldMeta.TierRange} 
          value={value.TierRange}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Tier Range"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TierRange}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxSubtotal ubl-Numeric ubl-TierRatePercent"
          meta={TaxSubtotalFieldMeta.TierRatePercent} 
          value={value.TierRatePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Tier Rate"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TierRatePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TaxSubtotal ubl-TaxCategory"
          meta={TaxSubtotalFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Tax Category"
              value={itemValue}
              meta={TaxSubtotalFieldMeta.TaxCategory}
            />
          }
        />
        </div>
    </div>
  )
}
