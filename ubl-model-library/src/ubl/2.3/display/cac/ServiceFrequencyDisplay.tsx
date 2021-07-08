import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceFrequency } from  '../../model/cac/ServiceFrequency'
import { ServiceFrequencyField, ServiceFrequencyFieldMeta, ServiceFrequencyTypeName } from  '../../meta/cac/ServiceFrequencyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ServiceFrequency, void>
  serviceFrequency: ServiceFrequency[] | undefined
  renderContext: RenderContext
}

export const ServiceFrequencySubElementsMap: SubElementsTemplatesMap<ServiceFrequencyField, ServiceFrequency, void> = new Map([
    [
      ServiceFrequencyField.UBLExtensions,
      { meta: ServiceFrequencyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ServiceFrequencyField.UBLExtensions}
          meta={ServiceFrequencyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ServiceFrequencyField.WeekDayCode,
      { meta: ServiceFrequencyFieldMeta.WeekDayCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ServiceFrequencyField.WeekDayCode}
          meta={ServiceFrequencyFieldMeta.WeekDayCode}
          fieldConfig={fieldConfig}
          code={value?.WeekDayCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function ServiceFrequencyDisplay<TFieldMeta>({ meta, fieldConfig, serviceFrequency, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ServiceFrequencyTypeName,
    meta,
    fieldConfig,
    serviceFrequency,
    renderContext,
    ServiceFrequencySubElementsMap,
  )
}
