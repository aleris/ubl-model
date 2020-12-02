import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MonetaryTotal } from  '../../model/cac/MonetaryTotal'
import { MonetaryTotalFieldMeta } from  '../../meta/cac/MonetaryTotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MonetaryTotal
  meta: FieldMeta<T>
}

export default function MonetaryTotalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MonetaryTotalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.LineExtensionAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.TaxExclusiveAmount} 
          value={value.TaxExclusiveAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.TaxExclusiveAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.TaxInclusiveAmount} 
          value={value.TaxInclusiveAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.TaxInclusiveAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.AllowanceTotalAmount} 
          value={value.AllowanceTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.AllowanceTotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.ChargeTotalAmount} 
          value={value.ChargeTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.ChargeTotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount} 
          value={value.WithholdingTaxTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.PrepaidAmount} 
          value={value.PrepaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.PrepaidAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.PayableRoundingAmount} 
          value={value.PayableRoundingAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.PayableRoundingAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.PayableAmount} 
          value={value.PayableAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.PayableAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MonetaryTotalFieldMeta.PayableAlternativeAmount} 
          value={value.PayableAlternativeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={MonetaryTotalFieldMeta.PayableAlternativeAmount} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
