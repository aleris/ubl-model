import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: BudgetAccount | undefined
  meta: FieldMeta<T>
}

export default function BudgetAccountDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-BudgetAccount">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BudgetAccountFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BudgetAccountFieldMeta.ID}
          />

          <NumericDisplay
            label="Budget Year"
            value={value.BudgetYearNumeric?.[0]}
            meta={BudgetAccountFieldMeta.BudgetYearNumeric}
          />

          <ClassificationSchemeDisplay
            label="Required Classification Scheme"
            value={value.RequiredClassificationScheme?.[0]}
            meta={BudgetAccountFieldMeta.RequiredClassificationScheme}
          />
        </div>
    </div>
  )
}
