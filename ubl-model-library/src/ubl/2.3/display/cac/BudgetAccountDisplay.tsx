import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BudgetAccount } from  '../../model/cac/BudgetAccount'
import { BudgetAccountFieldMeta } from  '../../meta/cac/BudgetAccountMeta'
import ClassificationSchemeDisplay from './ClassificationSchemeDisplay'
import { ClassificationScheme } from '../../model/cac/ClassificationScheme'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: BudgetAccount
  meta: FieldMeta<T>
}

export default function BudgetAccountDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BudgetAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BudgetAccountFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BudgetAccountFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountFieldMeta.BudgetYearNumeric} 
          value={value.BudgetYearNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={BudgetAccountFieldMeta.BudgetYearNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BudgetAccountFieldMeta.RequiredClassificationScheme} 
          value={value.RequiredClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay key={key} meta={BudgetAccountFieldMeta.RequiredClassificationScheme} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
