import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TaxTotal
  meta: FieldMeta<T>
}

export default function TaxTotalDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TaxTotal ubl-TaxTotalType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TaxTotal ubl-UBLExtensions"
          meta={TaxTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TaxTotalFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxTotal ubl-Amount ubl-TaxAmount"
          meta={TaxTotalFieldMeta.TaxAmount} 
          value={value.TaxAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Amount"
              value={itemValue}
              meta={TaxTotalFieldMeta.TaxAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxTotal ubl-Numeric ubl-CalculationSequenceNumeric"
          meta={TaxTotalFieldMeta.CalculationSequenceNumeric} 
          value={value.CalculationSequenceNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Calculation Sequence"
              value={itemValue}
              meta={TaxTotalFieldMeta.CalculationSequenceNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxTotal ubl-Amount ubl-RoundingAmount"
          meta={TaxTotalFieldMeta.RoundingAmount} 
          value={value.RoundingAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Rounding Amount"
              value={itemValue}
              meta={TaxTotalFieldMeta.RoundingAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxTotal ubl-Indicator ubl-TaxEvidenceIndicator"
          meta={TaxTotalFieldMeta.TaxEvidenceIndicator} 
          value={value.TaxEvidenceIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Tax Evidence Indicator"
              value={itemValue}
              meta={TaxTotalFieldMeta.TaxEvidenceIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxTotal ubl-Indicator ubl-TaxIncludedIndicator"
          meta={TaxTotalFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Tax Included Indicator"
              value={itemValue}
              meta={TaxTotalFieldMeta.TaxIncludedIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TaxTotal ubl-TaxSubtotal"
          meta={TaxTotalFieldMeta.TaxSubtotal} 
          value={value.TaxSubtotal}
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
