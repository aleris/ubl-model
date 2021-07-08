import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportSchedule } from  '../../model/cac/TransportSchedule'
import { TransportScheduleField, TransportScheduleFieldMeta, TransportScheduleTypeName } from  '../../meta/cac/TransportScheduleMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { LocationDisplay } from './LocationDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportEventDisplay } from './TransportEventDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportSchedule, void>
  transportSchedule: TransportSchedule[] | undefined
  renderContext: RenderContext
}

export const TransportScheduleSubElementsMap: SubElementsTemplatesMap<TransportScheduleField, TransportSchedule, void> = new Map([
    [
      TransportScheduleField.UBLExtensions,
      { meta: TransportScheduleFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportScheduleField.UBLExtensions}
          meta={TransportScheduleFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.SequenceNumeric,
      { meta: TransportScheduleFieldMeta.SequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportScheduleField.SequenceNumeric}
          meta={TransportScheduleFieldMeta.SequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.SequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.ReferenceDate,
      { meta: TransportScheduleFieldMeta.ReferenceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportScheduleField.ReferenceDate}
          meta={TransportScheduleFieldMeta.ReferenceDate}
          fieldConfig={fieldConfig}
          date={value?.ReferenceDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.ReferenceTime,
      { meta: TransportScheduleFieldMeta.ReferenceTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportScheduleField.ReferenceTime}
          meta={TransportScheduleFieldMeta.ReferenceTime}
          fieldConfig={fieldConfig}
          time={value?.ReferenceTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.ReliabilityPercent,
      { meta: TransportScheduleFieldMeta.ReliabilityPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportScheduleField.ReliabilityPercent}
          meta={TransportScheduleFieldMeta.ReliabilityPercent}
          fieldConfig={fieldConfig}
          numeric={value?.ReliabilityPercent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.Remarks,
      { meta: TransportScheduleFieldMeta.Remarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportScheduleField.Remarks}
          meta={TransportScheduleFieldMeta.Remarks}
          fieldConfig={fieldConfig}
          text={value?.Remarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.StatusLocation,
      { meta: TransportScheduleFieldMeta.StatusLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportScheduleField.StatusLocation}
          meta={TransportScheduleFieldMeta.StatusLocation}
          fieldConfig={fieldConfig}
          location={value?.StatusLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.ActualArrivalTransportEvent,
      { meta: TransportScheduleFieldMeta.ActualArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.ActualArrivalTransportEvent}
          meta={TransportScheduleFieldMeta.ActualArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.ActualDepartureTransportEvent,
      { meta: TransportScheduleFieldMeta.ActualDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.ActualDepartureTransportEvent}
          meta={TransportScheduleFieldMeta.ActualDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.EstimatedDepartureTransportEvent,
      { meta: TransportScheduleFieldMeta.EstimatedDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.EstimatedDepartureTransportEvent}
          meta={TransportScheduleFieldMeta.EstimatedDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.EstimatedDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.EstimatedArrivalTransportEvent,
      { meta: TransportScheduleFieldMeta.EstimatedArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.EstimatedArrivalTransportEvent}
          meta={TransportScheduleFieldMeta.EstimatedArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.EstimatedArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.PlannedDepartureTransportEvent,
      { meta: TransportScheduleFieldMeta.PlannedDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.PlannedDepartureTransportEvent}
          meta={TransportScheduleFieldMeta.PlannedDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportScheduleField.PlannedArrivalTransportEvent,
      { meta: TransportScheduleFieldMeta.PlannedArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportScheduleField.PlannedArrivalTransportEvent}
          meta={TransportScheduleFieldMeta.PlannedArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportScheduleDisplay<TFieldMeta>({ meta, fieldConfig, transportSchedule, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportScheduleTypeName,
    meta,
    fieldConfig,
    transportSchedule,
    renderContext,
    TransportScheduleSubElementsMap,
  )
}
