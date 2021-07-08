import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { BudgetAccountLine } from  '../../model/cac/BudgetAccountLine'
import { BudgetAccountLineField, BudgetAccountLineFieldMeta, BudgetAccountLineTypeName } from  '../../meta/cac/BudgetAccountLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { BudgetAccountDisplay } from './BudgetAccountDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<BudgetAccountLine, void>
  budgetAccountLine: BudgetAccountLine[] | undefined
  renderContext: RenderContext
}

export const BudgetAccountLineSubElementsMap: SubElementsTemplatesMap<BudgetAccountLineField, BudgetAccountLine, void> = new Map([
    [
      BudgetAccountLineField.UBLExtensions,
      { meta: BudgetAccountLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={BudgetAccountLineField.UBLExtensions}
          meta={BudgetAccountLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountLineField.ID,
      { meta: BudgetAccountLineFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={BudgetAccountLineField.ID}
          meta={BudgetAccountLineFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountLineField.TotalAmount,
      { meta: BudgetAccountLineFieldMeta.TotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={BudgetAccountLineField.TotalAmount}
          meta={BudgetAccountLineFieldMeta.TotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      BudgetAccountLineField.BudgetAccount,
      { meta: BudgetAccountLineFieldMeta.BudgetAccount,
        template: ({value, renderContext, fieldConfig}) => <BudgetAccountDisplay
          key={BudgetAccountLineField.BudgetAccount}
          meta={BudgetAccountLineFieldMeta.BudgetAccount}
          fieldConfig={fieldConfig}
          budgetAccount={value?.BudgetAccount}
          renderContext={renderContext}
        />}
    ]
]) 

export function BudgetAccountLineDisplay<TFieldMeta>({ meta, fieldConfig, budgetAccountLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    BudgetAccountLineTypeName,
    meta,
    fieldConfig,
    budgetAccountLine,
    renderContext,
    BudgetAccountLineSubElementsMap,
  )
}
