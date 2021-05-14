import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: BudgetAccountLine
  meta: FieldMeta<T>
}

export default function BudgetAccountLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-BudgetAccountLine ubl-BudgetAccountLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-BudgetAccountLine ubl-UBLExtensions"
          meta={BudgetAccountLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BudgetAccountLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BudgetAccountLine ubl-Identifier ubl-ID"
          meta={BudgetAccountLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={BudgetAccountLineFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BudgetAccountLine ubl-Amount ubl-TotalAmount"
          meta={BudgetAccountLineFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Amount"
              value={itemValue}
              meta={BudgetAccountLineFieldMeta.TotalAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BudgetAccountLine ubl-BudgetAccount"
          meta={BudgetAccountLineFieldMeta.BudgetAccount} 
          value={value.BudgetAccount}
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
