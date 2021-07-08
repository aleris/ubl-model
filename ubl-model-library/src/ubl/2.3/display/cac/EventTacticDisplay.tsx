import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventTactic } from  '../../model/cac/EventTactic'
import { EventTacticField, EventTacticFieldMeta, EventTacticTypeName } from  '../../meta/cac/EventTacticMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { EventTacticEnumerationDisplay } from './EventTacticEnumerationDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EventTactic, void>
  eventTactic: EventTactic[] | undefined
  renderContext: RenderContext
}

export const EventTacticSubElementsMap: SubElementsTemplatesMap<EventTacticField, EventTactic, void> = new Map([
    [
      EventTacticField.UBLExtensions,
      { meta: EventTacticFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EventTacticField.UBLExtensions}
          meta={EventTacticFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticField.Comment,
      { meta: EventTacticFieldMeta.Comment,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EventTacticField.Comment}
          meta={EventTacticFieldMeta.Comment}
          fieldConfig={fieldConfig}
          text={value?.Comment}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticField.Quantity,
      { meta: EventTacticFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={EventTacticField.Quantity}
          meta={EventTacticFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticField.EventTacticEnumeration,
      { meta: EventTacticFieldMeta.EventTacticEnumeration,
        template: ({value, renderContext, fieldConfig}) => <EventTacticEnumerationDisplay
          key={EventTacticField.EventTacticEnumeration}
          meta={EventTacticFieldMeta.EventTacticEnumeration}
          fieldConfig={fieldConfig}
          eventTacticEnumeration={value?.EventTacticEnumeration}
          renderContext={renderContext}
        />}
    ],

    [
      EventTacticField.Period,
      { meta: EventTacticFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={EventTacticField.Period}
          meta={EventTacticFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function EventTacticDisplay<TFieldMeta>({ meta, fieldConfig, eventTactic, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EventTacticTypeName,
    meta,
    fieldConfig,
    eventTactic,
    renderContext,
    EventTacticSubElementsMap,
  )
}
