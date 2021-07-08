import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Temperature } from  '../../model/cac/Temperature'
import { TemperatureField, TemperatureFieldMeta, TemperatureTypeName } from  '../../meta/cac/TemperatureMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Temperature, void>
  temperature: Temperature[] | undefined
  renderContext: RenderContext
}

export const TemperatureSubElementsMap: SubElementsTemplatesMap<TemperatureField, Temperature, void> = new Map([
    [
      TemperatureField.UBLExtensions,
      { meta: TemperatureFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TemperatureField.UBLExtensions}
          meta={TemperatureFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TemperatureField.AttributeID,
      { meta: TemperatureFieldMeta.AttributeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TemperatureField.AttributeID}
          meta={TemperatureFieldMeta.AttributeID}
          fieldConfig={fieldConfig}
          identifier={value?.AttributeID}
          renderContext={renderContext}
        />}
    ],

    [
      TemperatureField.Measure,
      { meta: TemperatureFieldMeta.Measure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TemperatureField.Measure}
          meta={TemperatureFieldMeta.Measure}
          fieldConfig={fieldConfig}
          measure={value?.Measure}
          renderContext={renderContext}
        />}
    ],

    [
      TemperatureField.Description,
      { meta: TemperatureFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TemperatureField.Description}
          meta={TemperatureFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function TemperatureDisplay<TFieldMeta>({ meta, fieldConfig, temperature, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TemperatureTypeName,
    meta,
    fieldConfig,
    temperature,
    renderContext,
    TemperatureSubElementsMap,
  )
}
