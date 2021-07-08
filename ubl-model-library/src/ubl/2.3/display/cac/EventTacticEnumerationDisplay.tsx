import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTacticEnumeration } from  '../../model/cac/EventTacticEnumeration'
import { EventTacticEnumerationField, EventTacticEnumerationFieldMeta, EventTacticEnumerationTypeName } from  '../../meta/cac/EventTacticEnumerationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EventTacticEnumeration, void>
  eventTacticEnumeration: EventTacticEnumeration[] | undefined
  renderContext: RenderContext
}

export const EventTacticEnumerationSubElementsMap: SubElementsTemplatesMap<EventTacticEnumerationField, EventTacticEnumeration, void> = new Map([
    [
      EventTacticEnumerationField.UBLExtensions,
      { meta: EventTacticEnumerationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EventTacticEnumerationField.UBLExtensions}
          meta={EventTacticEnumerationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticEnumerationField.ConsumerIncentiveTacticTypeCode,
      { meta: EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EventTacticEnumerationField.ConsumerIncentiveTacticTypeCode}
          meta={EventTacticEnumerationFieldMeta.ConsumerIncentiveTacticTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ConsumerIncentiveTacticTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticEnumerationField.DisplayTacticTypeCode,
      { meta: EventTacticEnumerationFieldMeta.DisplayTacticTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EventTacticEnumerationField.DisplayTacticTypeCode}
          meta={EventTacticEnumerationFieldMeta.DisplayTacticTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DisplayTacticTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticEnumerationField.FeatureTacticTypeCode,
      { meta: EventTacticEnumerationFieldMeta.FeatureTacticTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EventTacticEnumerationField.FeatureTacticTypeCode}
          meta={EventTacticEnumerationFieldMeta.FeatureTacticTypeCode}
          fieldConfig={fieldConfig}
          code={value?.FeatureTacticTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticEnumerationField.TradeItemPackingLabelingTypeCode,
      { meta: EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EventTacticEnumerationField.TradeItemPackingLabelingTypeCode}
          meta={EventTacticEnumerationFieldMeta.TradeItemPackingLabelingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TradeItemPackingLabelingTypeCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function EventTacticEnumerationDisplay<TFieldMeta>({ meta, fieldConfig, eventTacticEnumeration, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EventTacticEnumerationTypeName,
    meta,
    fieldConfig,
    eventTacticEnumeration,
    renderContext,
    EventTacticEnumerationSubElementsMap,
  )
}
