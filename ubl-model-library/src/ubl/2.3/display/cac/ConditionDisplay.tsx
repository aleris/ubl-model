import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Condition } from  '../../model/cac/Condition'
import { ConditionField, ConditionFieldMeta, ConditionTypeName } from  '../../meta/cac/ConditionMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Condition, void>
  condition: Condition[] | undefined
  renderContext: RenderContext
}

export const ConditionSubElementsMap: SubElementsTemplatesMap<ConditionField, Condition, void> = new Map([
    [
      ConditionField.UBLExtensions,
      { meta: ConditionFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConditionField.UBLExtensions}
          meta={ConditionFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConditionField.AttributeID,
      { meta: ConditionFieldMeta.AttributeID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConditionField.AttributeID}
          meta={ConditionFieldMeta.AttributeID}
          fieldConfig={fieldConfig}
          identifier={value?.AttributeID}
          renderContext={renderContext}
        />}
    ],

    [
      ConditionField.Measure,
      { meta: ConditionFieldMeta.Measure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConditionField.Measure}
          meta={ConditionFieldMeta.Measure}
          fieldConfig={fieldConfig}
          measure={value?.Measure}
          renderContext={renderContext}
        />}
    ],

    [
      ConditionField.Description,
      { meta: ConditionFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConditionField.Description}
          meta={ConditionFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ConditionField.MinimumMeasure,
      { meta: ConditionFieldMeta.MinimumMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConditionField.MinimumMeasure}
          meta={ConditionFieldMeta.MinimumMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MinimumMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConditionField.MaximumMeasure,
      { meta: ConditionFieldMeta.MaximumMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConditionField.MaximumMeasure}
          meta={ConditionFieldMeta.MaximumMeasure}
          fieldConfig={fieldConfig}
          measure={value?.MaximumMeasure}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConditionDisplay<TFieldMeta>({ meta, fieldConfig, condition, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConditionTypeName,
    meta,
    fieldConfig,
    condition,
    renderContext,
    ConditionSubElementsMap,
  )
}
