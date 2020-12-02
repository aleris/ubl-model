import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TaxSubtotal
  meta: FieldMeta<T>
}

export default function TaxSubtotalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TaxSubtotalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TaxableAmount} 
          value={value.TaxableAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxSubtotalFieldMeta.TaxableAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TaxAmount} 
          value={value.TaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxSubtotalFieldMeta.TaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric} 
          value={value.CalculationSequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxSubtotalFieldMeta.CalculationSequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount} 
          value={value.TransactionCurrencyTaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxSubtotalFieldMeta.TransactionCurrencyTaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.Percent} 
          value={value.Percent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxSubtotalFieldMeta.Percent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.BaseUnitMeasure} 
          value={value.BaseUnitMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TaxSubtotalFieldMeta.BaseUnitMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.PerUnitAmount} 
          value={value.PerUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxSubtotalFieldMeta.PerUnitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TierRange} 
          value={value.TierRange}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TaxSubtotalFieldMeta.TierRange} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TierRatePercent} 
          value={value.TierRatePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxSubtotalFieldMeta.TierRatePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSubtotalFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={TaxSubtotalFieldMeta.TaxCategory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
