import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BudgetAccountLine } from  '../../model/cac/BudgetAccountLine'
import { BudgetAccountLineFieldMeta } from  '../../meta/cac/BudgetAccountLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BudgetAccountDisplay from './BudgetAccountDisplay'
import { BudgetAccount } from '../../model/cac/BudgetAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: BudgetAccountLine | undefined
  meta: FieldMeta<T>
}

export default function BudgetAccountLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-BudgetAccountLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BudgetAccountLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BudgetAccountLineFieldMeta.ID}
          />

          <AmountDisplay
            label="Total Amount"
            value={value.TotalAmount?.[0]}
            meta={BudgetAccountLineFieldMeta.TotalAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-BudgetAccount"
            label="Budget Account"
            items={value.BudgetAccount}
            meta={BudgetAccountLineFieldMeta.BudgetAccount} 
            itemDisplay={ (itemValue: BudgetAccount, key: string | number) =>
              <BudgetAccountDisplay
                key={key}
                label="Budget Account"
                value={itemValue}
                meta={BudgetAccountLineFieldMeta.BudgetAccount}
              />
            }
          />
        </div>
    </div>
  )
}
