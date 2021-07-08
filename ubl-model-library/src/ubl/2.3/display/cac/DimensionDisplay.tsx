import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Dimension } from  '../../model/cac/Dimension'
import { DimensionField, DimensionFieldMeta, DimensionTypeName } from  '../../meta/cac/DimensionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Dimension, void>
  dimension: Dimension[] | undefined
  renderContext: RenderContext
}

export const DimensionSubElementsMap: SubElementsTemplatesMap<DimensionField, Dimension, void> = new Map([
    [
      DimensionField.UBLExtensions,
      { meta: DimensionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DimensionField.UBLExtensions}
          meta={DimensionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DimensionField.AttributeID,
      { meta: DimensionFieldMeta.AttributeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DimensionField.AttributeID}
          meta={DimensionFieldMeta.AttributeID}
          fieldConfig={fieldConfig}
          identifier={value?.AttributeID}
          renderContext={renderContext}
        />}
    ],

    [
      DimensionField.Measure,
      { meta: DimensionFieldMeta.Measure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={DimensionField.Measure}
          meta={DimensionFieldMeta.Measure}
          fieldConfig={fieldConfig}
          measure={value?.Measure}
          renderContext={renderContext}
        />}
    ],

    [
      DimensionField.Description,
      { meta: DimensionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DimensionField.Description}
          meta={DimensionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      DimensionField.MinimumMeasure,
      { meta: DimensionFieldMeta.MinimumMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={DimensionField.MinimumMeasure}
          meta={DimensionFieldMeta.MinimumMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MinimumMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      DimensionField.MaximumMeasure,
      { meta: DimensionFieldMeta.MaximumMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={DimensionField.MaximumMeasure}
          meta={DimensionFieldMeta.MaximumMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MaximumMeasure}
          renderContext={renderContext}
        />}
    ]
]) 

export function DimensionDisplay<TFieldMeta>({ meta, fieldConfig, dimension, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DimensionTypeName,
    meta,
    fieldConfig,
    dimension,
    renderContext,
    DimensionSubElementsMap,
  )
}
