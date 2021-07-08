import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MiscellaneousEvent } from  '../../model/cac/MiscellaneousEvent'
import { MiscellaneousEventField, MiscellaneousEventFieldMeta, MiscellaneousEventTypeName } from  '../../meta/cac/MiscellaneousEventMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EventLineItemDisplay } from './EventLineItemDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MiscellaneousEvent, void>
  miscellaneousEvent: MiscellaneousEvent[] | undefined
  renderContext: RenderContext
}

export const MiscellaneousEventSubElementsMap: SubElementsTemplatesMap<MiscellaneousEventField, MiscellaneousEvent, void> = new Map([
    [
      MiscellaneousEventField.UBLExtensions,
      { meta: MiscellaneousEventFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MiscellaneousEventField.UBLExtensions}
          meta={MiscellaneousEventFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MiscellaneousEventField.MiscellaneousEventTypeCode,
      { meta: MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MiscellaneousEventField.MiscellaneousEventTypeCode}
          meta={MiscellaneousEventFieldMeta.MiscellaneousEventTypeCode}
          fieldConfig={fieldConfig}
          code={value?.MiscellaneousEventTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      MiscellaneousEventField.EventLineItem,
      { meta: MiscellaneousEventFieldMeta.EventLineItem,
        template: ({value, renderContext, fieldConfig}) => <EventLineItemDisplay
          key={MiscellaneousEventField.EventLineItem}
          meta={MiscellaneousEventFieldMeta.EventLineItem}
          fieldConfig={fieldConfig}
          eventLineItem={value?.EventLineItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function MiscellaneousEventDisplay<TFieldMeta>({ meta, fieldConfig, miscellaneousEvent, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MiscellaneousEventTypeName,
    meta,
    fieldConfig,
    miscellaneousEvent,
    renderContext,
    MiscellaneousEventSubElementsMap,
  )
}
