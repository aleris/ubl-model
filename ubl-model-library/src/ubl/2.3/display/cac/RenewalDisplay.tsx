import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Renewal } from  '../../model/cac/Renewal'
import { RenewalField, RenewalFieldMeta, RenewalTypeName } from  '../../meta/cac/RenewalMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Renewal, void>
  renewal: Renewal[] | undefined
  renderContext: RenderContext
}

export const RenewalSubElementsMap: SubElementsTemplatesMap<RenewalField, Renewal, void> = new Map([
    [
      RenewalField.UBLExtensions,
      { meta: RenewalFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RenewalField.UBLExtensions}
          meta={RenewalFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RenewalField.Amount,
      { meta: RenewalFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={RenewalField.Amount}
          meta={RenewalFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      RenewalField.Period,
      { meta: RenewalFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={RenewalField.Period}
          meta={RenewalFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function RenewalDisplay<TFieldMeta>({ meta, fieldConfig, renewal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RenewalTypeName,
    meta,
    fieldConfig,
    renewal,
    renderContext,
    RenewalSubElementsMap,
  )
}
