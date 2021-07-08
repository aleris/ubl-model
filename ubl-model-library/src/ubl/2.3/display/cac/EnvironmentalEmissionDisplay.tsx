import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnvironmentalEmission } from  '../../model/cac/EnvironmentalEmission'
import { EnvironmentalEmissionField, EnvironmentalEmissionFieldMeta, EnvironmentalEmissionTypeName } from  '../../meta/cac/EnvironmentalEmissionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EmissionCalculationMethodDisplay } from './EmissionCalculationMethodDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EnvironmentalEmission, void>
  environmentalEmission: EnvironmentalEmission[] | undefined
  renderContext: RenderContext
}

export const EnvironmentalEmissionSubElementsMap: SubElementsTemplatesMap<EnvironmentalEmissionField, EnvironmentalEmission, void> = new Map([
    [
      EnvironmentalEmissionField.UBLExtensions,
      { meta: EnvironmentalEmissionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EnvironmentalEmissionField.UBLExtensions}
          meta={EnvironmentalEmissionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EnvironmentalEmissionField.EnvironmentalEmissionTypeCode,
      { meta: EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EnvironmentalEmissionField.EnvironmentalEmissionTypeCode}
          meta={EnvironmentalEmissionFieldMeta.EnvironmentalEmissionTypeCode}
          fieldConfig={fieldConfig}
          code={value?.EnvironmentalEmissionTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EnvironmentalEmissionField.ValueMeasure,
      { meta: EnvironmentalEmissionFieldMeta.ValueMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={EnvironmentalEmissionField.ValueMeasure}
          meta={EnvironmentalEmissionFieldMeta.ValueMeasure}
          fieldConfig={fieldConfig}
          measure={value?.ValueMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      EnvironmentalEmissionField.Description,
      { meta: EnvironmentalEmissionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EnvironmentalEmissionField.Description}
          meta={EnvironmentalEmissionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EnvironmentalEmissionField.EmissionCalculationMethod,
      { meta: EnvironmentalEmissionFieldMeta.EmissionCalculationMethod,
        template: ({value, renderContext, fieldConfig}) => <EmissionCalculationMethodDisplay
          key={EnvironmentalEmissionField.EmissionCalculationMethod}
          meta={EnvironmentalEmissionFieldMeta.EmissionCalculationMethod}
          fieldConfig={fieldConfig}
          emissionCalculationMethod={value?.EmissionCalculationMethod}
          renderContext={renderContext}
        />}
    ]
]) 

export function EnvironmentalEmissionDisplay<TFieldMeta>({ meta, fieldConfig, environmentalEmission, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EnvironmentalEmissionTypeName,
    meta,
    fieldConfig,
    environmentalEmission,
    renderContext,
    EnvironmentalEmissionSubElementsMap,
  )
}
