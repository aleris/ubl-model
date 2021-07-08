import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CompletedTask } from  '../../model/cac/CompletedTask'
import { CompletedTaskField, CompletedTaskFieldMeta, CompletedTaskTypeName } from  '../../meta/cac/CompletedTaskMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CustomerPartyDisplay } from './CustomerPartyDisplay'
import { EvidenceSuppliedDisplay } from './EvidenceSuppliedDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CompletedTask, void>
  completedTask: CompletedTask[] | undefined
  renderContext: RenderContext
}

export const CompletedTaskSubElementsMap: SubElementsTemplatesMap<CompletedTaskField, CompletedTask, void> = new Map([
    [
      CompletedTaskField.UBLExtensions,
      { meta: CompletedTaskFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CompletedTaskField.UBLExtensions}
          meta={CompletedTaskFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.AnnualAverageAmount,
      { meta: CompletedTaskFieldMeta.AnnualAverageAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CompletedTaskField.AnnualAverageAmount}
          meta={CompletedTaskFieldMeta.AnnualAverageAmount}
          fieldConfig={fieldConfig}
          amount={value?.AnnualAverageAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.TotalTaskAmount,
      { meta: CompletedTaskFieldMeta.TotalTaskAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CompletedTaskField.TotalTaskAmount}
          meta={CompletedTaskFieldMeta.TotalTaskAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalTaskAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.PartyCapacityAmount,
      { meta: CompletedTaskFieldMeta.PartyCapacityAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={CompletedTaskField.PartyCapacityAmount}
          meta={CompletedTaskFieldMeta.PartyCapacityAmount}
          fieldConfig={fieldConfig}
          amount={value?.PartyCapacityAmount}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.Description,
      { meta: CompletedTaskFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CompletedTaskField.Description}
          meta={CompletedTaskFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.EvidenceSupplied,
      { meta: CompletedTaskFieldMeta.EvidenceSupplied,
        template: ({value, renderContext, fieldConfig}) => <EvidenceSuppliedDisplay
          key={CompletedTaskField.EvidenceSupplied}
          meta={CompletedTaskFieldMeta.EvidenceSupplied}
          fieldConfig={fieldConfig}
          evidenceSupplied={value?.EvidenceSupplied}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.Period,
      { meta: CompletedTaskFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={CompletedTaskField.Period}
          meta={CompletedTaskFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ],

    [
      CompletedTaskField.RecipientCustomerParty,
      { meta: CompletedTaskFieldMeta.RecipientCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={CompletedTaskField.RecipientCustomerParty}
          meta={CompletedTaskFieldMeta.RecipientCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.RecipientCustomerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function CompletedTaskDisplay<TFieldMeta>({ meta, fieldConfig, completedTask, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CompletedTaskTypeName,
    meta,
    fieldConfig,
    completedTask,
    renderContext,
    CompletedTaskSubElementsMap,
  )
}
