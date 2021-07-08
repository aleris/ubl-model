import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BudgetAccount } from  '../../model/cac/BudgetAccount'
import { BudgetAccountField, BudgetAccountFieldMeta, BudgetAccountTypeName } from  '../../meta/cac/BudgetAccountMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ClassificationSchemeDisplay } from './ClassificationSchemeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<BudgetAccount, void>
  budgetAccount: BudgetAccount[] | undefined
  renderContext: RenderContext
}

export const BudgetAccountSubElementsMap: SubElementsTemplatesMap<BudgetAccountField, BudgetAccount, void> = new Map([
    [
      BudgetAccountField.UBLExtensions,
      { meta: BudgetAccountFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BudgetAccountField.UBLExtensions}
          meta={BudgetAccountFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountField.ID,
      { meta: BudgetAccountFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BudgetAccountField.ID}
          meta={BudgetAccountFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountField.BudgetYearNumeric,
      { meta: BudgetAccountFieldMeta.BudgetYearNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={BudgetAccountField.BudgetYearNumeric}
          meta={BudgetAccountFieldMeta.BudgetYearNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.BudgetYearNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountField.RequiredClassificationScheme,
      { meta: BudgetAccountFieldMeta.RequiredClassificationScheme,
        template: ({value, renderContext, fieldConfig}) => <ClassificationSchemeDisplay
          key={BudgetAccountField.RequiredClassificationScheme}
          meta={BudgetAccountFieldMeta.RequiredClassificationScheme}
          fieldConfig={fieldConfig}
          classificationScheme={value?.RequiredClassificationScheme}
          renderContext={renderContext}
        />}
    ]
]) 

export function BudgetAccountDisplay<TFieldMeta>({ meta, fieldConfig, budgetAccount, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BudgetAccountTypeName,
    meta,
    fieldConfig,
    budgetAccount,
    renderContext,
    BudgetAccountSubElementsMap,
  )
}
