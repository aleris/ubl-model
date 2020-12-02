import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: BudgetAccountLine
  meta: FieldMeta<T>
}

export default function BudgetAccountLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BudgetAccountLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BudgetAccountLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BudgetAccountLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountLineFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={BudgetAccountLineFieldMeta.TotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountLineFieldMeta.BudgetAccount} 
          value={value.BudgetAccount}
          itemDisplay={ (itemValue: BudgetAccount, key: string | number) =>
            <BudgetAccountDisplay key={key} meta={BudgetAccountLineFieldMeta.BudgetAccount} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
