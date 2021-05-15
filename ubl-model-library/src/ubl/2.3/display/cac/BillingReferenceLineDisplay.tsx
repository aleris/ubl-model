import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillingReferenceLine } from  '../../model/cac/BillingReferenceLine'
import { BillingReferenceLineFieldMeta } from  '../../meta/cac/BillingReferenceLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: BillingReferenceLine | undefined
  meta: FieldMeta<T>
}

export default function BillingReferenceLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-BillingReferenceLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BillingReferenceLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BillingReferenceLineFieldMeta.ID}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={BillingReferenceLineFieldMeta.Amount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={BillingReferenceLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={BillingReferenceLineFieldMeta.AllowanceCharge}
              />
            }
          />
        </div>
    </div>
  )
}
