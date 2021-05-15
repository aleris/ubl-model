import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MonetaryTotal } from  '../../model/cac/MonetaryTotal'
import { MonetaryTotalFieldMeta } from  '../../meta/cac/MonetaryTotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: MonetaryTotal | undefined
  meta: FieldMeta<T>
}

export default function MonetaryTotalDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MonetaryTotal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MonetaryTotalFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Line Extension Amount"
            value={value.LineExtensionAmount?.[0]}
            meta={MonetaryTotalFieldMeta.LineExtensionAmount}
          />

          <AmountDisplay
            label="Tax Exclusive Amount"
            value={value.TaxExclusiveAmount?.[0]}
            meta={MonetaryTotalFieldMeta.TaxExclusiveAmount}
          />

          <AmountDisplay
            label="Tax Inclusive Amount"
            value={value.TaxInclusiveAmount?.[0]}
            meta={MonetaryTotalFieldMeta.TaxInclusiveAmount}
          />

          <AmountDisplay
            label="Allowance Total Amount"
            value={value.AllowanceTotalAmount?.[0]}
            meta={MonetaryTotalFieldMeta.AllowanceTotalAmount}
          />

          <AmountDisplay
            label="Charge Total Amount"
            value={value.ChargeTotalAmount?.[0]}
            meta={MonetaryTotalFieldMeta.ChargeTotalAmount}
          />

          <AmountDisplay
            label="Withholding Tax Total Amount"
            value={value.WithholdingTaxTotalAmount?.[0]}
            meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount}
          />

          <AmountDisplay
            label="Prepaid Amount"
            value={value.PrepaidAmount?.[0]}
            meta={MonetaryTotalFieldMeta.PrepaidAmount}
          />

          <AmountDisplay
            label="Payable Rounding Amount"
            value={value.PayableRoundingAmount?.[0]}
            meta={MonetaryTotalFieldMeta.PayableRoundingAmount}
          />

          <AmountDisplay
            label="Payable Amount"
            value={value.PayableAmount?.[0]}
            meta={MonetaryTotalFieldMeta.PayableAmount}
          />

          <AmountDisplay
            label="Payable Alternative Amount"
            value={value.PayableAlternativeAmount?.[0]}
            meta={MonetaryTotalFieldMeta.PayableAlternativeAmount}
          />
        </div>
    </div>
  )
}
