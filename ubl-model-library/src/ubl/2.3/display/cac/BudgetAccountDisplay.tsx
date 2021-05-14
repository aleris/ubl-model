import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: BudgetAccount
  meta: FieldMeta<T>
}

export default function BudgetAccountDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-BudgetAccount ubl-BudgetAccountType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-BudgetAccount ubl-UBLExtensions"
          meta={BudgetAccountFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BudgetAccountFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BudgetAccount ubl-Identifier ubl-ID"
          meta={BudgetAccountFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={BudgetAccountFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BudgetAccount ubl-Numeric ubl-BudgetYearNumeric"
          meta={BudgetAccountFieldMeta.BudgetYearNumeric} 
          value={value.BudgetYearNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Budget Year"
              value={itemValue}
              meta={BudgetAccountFieldMeta.BudgetYearNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BudgetAccount ubl-ClassificationScheme ubl-RequiredClassificationScheme"
          meta={BudgetAccountFieldMeta.RequiredClassificationScheme} 
          value={value.RequiredClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay
              key={key}
              label="Required Classification Scheme"
              value={itemValue}
              meta={BudgetAccountFieldMeta.RequiredClassificationScheme}
            />
          }
        />
        </div>
    </div>
  )
}
