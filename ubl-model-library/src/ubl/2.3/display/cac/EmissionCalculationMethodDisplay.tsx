import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EmissionCalculationMethod } from  '../../model/cac/EmissionCalculationMethod'
import { EmissionCalculationMethodField, EmissionCalculationMethodFieldMeta, EmissionCalculationMethodTypeName } from  '../../meta/cac/EmissionCalculationMethodMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { LocationDisplay } from './LocationDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EmissionCalculationMethod, void>
  emissionCalculationMethod: EmissionCalculationMethod[] | undefined
  renderContext: RenderContext
}

export const EmissionCalculationMethodSubElementsMap: SubElementsTemplatesMap<EmissionCalculationMethodField, EmissionCalculationMethod, void> = new Map([
    [
      EmissionCalculationMethodField.UBLExtensions,
      { meta: EmissionCalculationMethodFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EmissionCalculationMethodField.UBLExtensions}
          meta={EmissionCalculationMethodFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EmissionCalculationMethodField.CalculationMethodCode,
      { meta: EmissionCalculationMethodFieldMeta.CalculationMethodCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EmissionCalculationMethodField.CalculationMethodCode}
          meta={EmissionCalculationMethodFieldMeta.CalculationMethodCode}
          fieldConfig={fieldConfig}
          code={value?.CalculationMethodCode}
          renderContext={renderContext}
        />}
    ],

    [
      EmissionCalculationMethodField.FullnessIndicationCode,
      { meta: EmissionCalculationMethodFieldMeta.FullnessIndicationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EmissionCalculationMethodField.FullnessIndicationCode}
          meta={EmissionCalculationMethodFieldMeta.FullnessIndicationCode}
          fieldConfig={fieldConfig}
          code={value?.FullnessIndicationCode}
          renderContext={renderContext}
        />}
    ],

    [
      EmissionCalculationMethodField.MeasurementFromLocation,
      { meta: EmissionCalculationMethodFieldMeta.MeasurementFromLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={EmissionCalculationMethodField.MeasurementFromLocation}
          meta={EmissionCalculationMethodFieldMeta.MeasurementFromLocation}
          fieldConfig={fieldConfig}
          location={value?.MeasurementFromLocation}
          renderContext={renderContext}
        />}
    ],

    [
      EmissionCalculationMethodField.MeasurementToLocation,
      { meta: EmissionCalculationMethodFieldMeta.MeasurementToLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={EmissionCalculationMethodField.MeasurementToLocation}
          meta={EmissionCalculationMethodFieldMeta.MeasurementToLocation}
          fieldConfig={fieldConfig}
          location={value?.MeasurementToLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function EmissionCalculationMethodDisplay<TFieldMeta>({ meta, fieldConfig, emissionCalculationMethod, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EmissionCalculationMethodTypeName,
    meta,
    fieldConfig,
    emissionCalculationMethod,
    renderContext,
    EmissionCalculationMethodSubElementsMap,
  )
}
