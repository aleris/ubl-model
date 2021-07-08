import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Event } from  '../../model/cac/Event'
import { EventField, EventFieldMeta, EventTypeName } from  '../../meta/cac/EventMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { StatusDisplay } from './StatusDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Event, void>
  event: Event[] | undefined
  renderContext: RenderContext
}

export const EventSubElementsMap: SubElementsTemplatesMap<EventField, Event, void> = new Map([
    [
      EventField.UBLExtensions,
      { meta: EventFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EventField.UBLExtensions}
          meta={EventFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.IdentificationID,
      { meta: EventFieldMeta.IdentificationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EventField.IdentificationID}
          meta={EventFieldMeta.IdentificationID}
          fieldConfig={fieldConfig}
          identifier={value?.IdentificationID}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.OccurrenceDate,
      { meta: EventFieldMeta.OccurrenceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={EventField.OccurrenceDate}
          meta={EventFieldMeta.OccurrenceDate}
          fieldConfig={fieldConfig}
          date={value?.OccurrenceDate}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.OccurrenceTime,
      { meta: EventFieldMeta.OccurrenceTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={EventField.OccurrenceTime}
          meta={EventFieldMeta.OccurrenceTime}
          fieldConfig={fieldConfig}
          time={value?.OccurrenceTime}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.TypeCode,
      { meta: EventFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EventField.TypeCode}
          meta={EventFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.Description,
      { meta: EventFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EventField.Description}
          meta={EventFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.CompletionIndicator,
      { meta: EventFieldMeta.CompletionIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={EventField.CompletionIndicator}
          meta={EventFieldMeta.CompletionIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CompletionIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.CurrentStatus,
      { meta: EventFieldMeta.CurrentStatus,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={EventField.CurrentStatus}
          meta={EventFieldMeta.CurrentStatus}
          fieldConfig={fieldConfig}
          status={value?.CurrentStatus}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.Contact,
      { meta: EventFieldMeta.Contact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={EventField.Contact}
          meta={EventFieldMeta.Contact}
          fieldConfig={fieldConfig}
          contact={value?.Contact}
          renderContext={renderContext}
        />}
    ],

    [
      EventField.OccurenceLocation,
      { meta: EventFieldMeta.OccurenceLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={EventField.OccurenceLocation}
          meta={EventFieldMeta.OccurenceLocation}
          fieldConfig={fieldConfig}
          location={value?.OccurenceLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function EventDisplay<TFieldMeta>({ meta, fieldConfig, event, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EventTypeName,
    meta,
    fieldConfig,
    event,
    renderContext,
    EventSubElementsMap,
  )
}
