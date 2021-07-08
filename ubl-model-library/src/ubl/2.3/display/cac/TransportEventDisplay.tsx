import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEvent } from  '../../model/cac/TransportEvent'
import { TransportEventField, TransportEventFieldMeta, TransportEventTypeName } from  '../../meta/cac/TransportEventMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { SignatureDisplay } from './SignatureDisplay'
import { StatusDisplay } from './StatusDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportEvent, void>
  transportEvent: TransportEvent[] | undefined
  renderContext: RenderContext
}

export const TransportEventSubElementsMap: SubElementsTemplatesMap<TransportEventField, TransportEvent, void> = new Map([
    [
      TransportEventField.UBLExtensions,
      { meta: TransportEventFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportEventField.UBLExtensions}
          meta={TransportEventFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.IdentificationID,
      { meta: TransportEventFieldMeta.IdentificationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportEventField.IdentificationID}
          meta={TransportEventFieldMeta.IdentificationID}
          fieldConfig={fieldConfig}
          identifier={value?.IdentificationID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.OccurrenceDate,
      { meta: TransportEventFieldMeta.OccurrenceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TransportEventField.OccurrenceDate}
          meta={TransportEventFieldMeta.OccurrenceDate}
          fieldConfig={fieldConfig}
          date={value?.OccurrenceDate}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.OccurrenceTime,
      { meta: TransportEventFieldMeta.OccurrenceTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TransportEventField.OccurrenceTime}
          meta={TransportEventFieldMeta.OccurrenceTime}
          fieldConfig={fieldConfig}
          time={value?.OccurrenceTime}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.TransportEventTypeCode,
      { meta: TransportEventFieldMeta.TransportEventTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEventField.TransportEventTypeCode}
          meta={TransportEventFieldMeta.TransportEventTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportEventTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.Description,
      { meta: TransportEventFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEventField.Description}
          meta={TransportEventFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.CompletionIndicator,
      { meta: TransportEventFieldMeta.CompletionIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEventField.CompletionIndicator}
          meta={TransportEventFieldMeta.CompletionIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CompletionIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.ReportedShipment,
      { meta: TransportEventFieldMeta.ReportedShipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={TransportEventField.ReportedShipment}
          meta={TransportEventFieldMeta.ReportedShipment}
          fieldConfig={fieldConfig}
          shipment={value?.ReportedShipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.CurrentStatus,
      { meta: TransportEventFieldMeta.CurrentStatus,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={TransportEventField.CurrentStatus}
          meta={TransportEventFieldMeta.CurrentStatus}
          fieldConfig={fieldConfig}
          status={value?.CurrentStatus}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.Contact,
      { meta: TransportEventFieldMeta.Contact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={TransportEventField.Contact}
          meta={TransportEventFieldMeta.Contact}
          fieldConfig={fieldConfig}
          contact={value?.Contact}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.Location,
      { meta: TransportEventFieldMeta.Location,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportEventField.Location}
          meta={TransportEventFieldMeta.Location}
          fieldConfig={fieldConfig}
          location={value?.Location}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.Signature,
      { meta: TransportEventFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TransportEventField.Signature}
          meta={TransportEventFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEventField.Period,
      { meta: TransportEventFieldMeta.Period,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TransportEventField.Period}
          meta={TransportEventFieldMeta.Period}
          fieldConfig={fieldConfig}
          period={value?.Period}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportEventDisplay<TFieldMeta>({ meta, fieldConfig, transportEvent, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportEventTypeName,
    meta,
    fieldConfig,
    transportEvent,
    renderContext,
    TransportEventSubElementsMap,
  )
}
