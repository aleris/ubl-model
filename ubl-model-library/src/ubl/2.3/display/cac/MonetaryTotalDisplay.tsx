import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MonetaryTotal } from  '../../model/cac/MonetaryTotal'
import { MonetaryTotalFieldMeta } from  '../../meta/cac/MonetaryTotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: MonetaryTotal
  meta: FieldMeta<T>
}

export default function MonetaryTotalDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MonetaryTotal ubl-MonetaryTotalType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MonetaryTotal ubl-UBLExtensions"
          meta={MonetaryTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-LineExtensionAmount"
          meta={MonetaryTotalFieldMeta.LineExtensionAmount} 
          value={value.LineExtensionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Line Extension Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.LineExtensionAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-TaxExclusiveAmount"
          meta={MonetaryTotalFieldMeta.TaxExclusiveAmount} 
          value={value.TaxExclusiveAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Exclusive Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.TaxExclusiveAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-TaxInclusiveAmount"
          meta={MonetaryTotalFieldMeta.TaxInclusiveAmount} 
          value={value.TaxInclusiveAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Inclusive Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.TaxInclusiveAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-AllowanceTotalAmount"
          meta={MonetaryTotalFieldMeta.AllowanceTotalAmount} 
          value={value.AllowanceTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Allowance Total Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.AllowanceTotalAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-ChargeTotalAmount"
          meta={MonetaryTotalFieldMeta.ChargeTotalAmount} 
          value={value.ChargeTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Charge Total Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.ChargeTotalAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-WithholdingTaxTotalAmount"
          meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount} 
          value={value.WithholdingTaxTotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Withholding Tax Total Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.WithholdingTaxTotalAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-PrepaidAmount"
          meta={MonetaryTotalFieldMeta.PrepaidAmount} 
          value={value.PrepaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Prepaid Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.PrepaidAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-PayableRoundingAmount"
          meta={MonetaryTotalFieldMeta.PayableRoundingAmount} 
          value={value.PayableRoundingAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Payable Rounding Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.PayableRoundingAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-PayableAmount"
          meta={MonetaryTotalFieldMeta.PayableAmount} 
          value={value.PayableAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Payable Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.PayableAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MonetaryTotal ubl-Amount ubl-PayableAlternativeAmount"
          meta={MonetaryTotalFieldMeta.PayableAlternativeAmount} 
          value={value.PayableAlternativeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Payable Alternative Amount"
              value={itemValue}
              meta={MonetaryTotalFieldMeta.PayableAlternativeAmount}
            />
          }
        />
        </div>
    </div>
  )
}
