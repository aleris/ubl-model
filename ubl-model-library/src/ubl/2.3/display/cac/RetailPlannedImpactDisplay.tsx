import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RetailPlannedImpact } from  '../../model/cac/RetailPlannedImpact'
import { RetailPlannedImpactField, RetailPlannedImpactFieldMeta, RetailPlannedImpactTypeName } from  '../../meta/cac/RetailPlannedImpactMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RetailPlannedImpact, void>
  retailPlannedImpact: RetailPlannedImpact[] | undefined
  renderContext: RenderContext
}

export const RetailPlannedImpactSubElementsMap: SubElementsTemplatesMap<RetailPlannedImpactField, RetailPlannedImpact, void> = new Map([
    [
      RetailPlannedImpactField.UBLExtensions,
      { meta: RetailPlannedImpactFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RetailPlannedImpactField.UBLExtensions}
          meta={RetailPlannedImpactFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RetailPlannedImpactField.Amount,
      { meta: RetailPlannedImpactFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RetailPlannedImpactField.Amount}
          meta={RetailPlannedImpactFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      RetailPlannedImpactField.ForecastPurposeCode,
      { meta: RetailPlannedImpactFieldMeta.ForecastPurposeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RetailPlannedImpactField.ForecastPurposeCode}
          meta={RetailPlannedImpactFieldMeta.ForecastPurposeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastPurposeCode}
          renderContext={renderContext}
        />}
    ],

    [
      RetailPlannedImpactField.ForecastTypeCode,
      { meta: RetailPlannedImpactFieldMeta.ForecastTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={RetailPlannedImpactField.ForecastTypeCode}
          meta={RetailPlannedImpactFieldMeta.ForecastTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ForecastTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      RetailPlannedImpactField.Period,
      { meta: RetailPlannedImpactFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RetailPlannedImpactField.Period}
          meta={RetailPlannedImpactFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function RetailPlannedImpactDisplay<TFieldMeta>({ meta, fieldConfig, retailPlannedImpact, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RetailPlannedImpactTypeName,
    meta,
    fieldConfig,
    retailPlannedImpact,
    renderContext,
    RetailPlannedImpactSubElementsMap,
  )
}
