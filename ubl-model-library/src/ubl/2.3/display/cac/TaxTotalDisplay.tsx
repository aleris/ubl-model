import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TaxTotal
  meta: FieldMeta<T>
}

export default function TaxTotalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TaxTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TaxTotalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.TaxAmount} 
          value={value.TaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxTotalFieldMeta.TaxAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.CalculationSequenceNumeric} 
          value={value.CalculationSequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={TaxTotalFieldMeta.CalculationSequenceNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.RoundingAmount} 
          value={value.RoundingAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TaxTotalFieldMeta.RoundingAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.TaxEvidenceIndicator} 
          value={value.TaxEvidenceIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TaxTotalFieldMeta.TaxEvidenceIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TaxTotalFieldMeta.TaxIncludedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxTotalFieldMeta.TaxSubtotal} 
          value={value.TaxSubtotal}
          itemDisplay={ (itemValue: TaxSubtotal, key: string | number) =>
            <TaxSubtotalDisplay key={key} meta={TaxTotalFieldMeta.TaxSubtotal} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
