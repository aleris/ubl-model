import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventLineItem } from  '../../model/cac/EventLineItem'
import { EventLineItemField, EventLineItemFieldMeta, EventLineItemTypeName } from  '../../meta/cac/EventLineItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ItemDisplay } from './ItemDisplay'
import { LocationDisplay } from './LocationDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { RetailPlannedImpactDisplay } from './RetailPlannedImpactDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EventLineItem, void>
  eventLineItem: EventLineItem[] | undefined
  renderContext: RenderContext
}

export const EventLineItemSubElementsMap: SubElementsTemplatesMap<EventLineItemField, EventLineItem, void> = new Map([
    [
      EventLineItemField.UBLExtensions,
      { meta: EventLineItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EventLineItemField.UBLExtensions}
          meta={EventLineItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EventLineItemField.LineNumberNumeric,
      { meta: EventLineItemFieldMeta.LineNumberNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={EventLineItemField.LineNumberNumeric}
          meta={EventLineItemFieldMeta.LineNumberNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.LineNumberNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      EventLineItemField.ParticipatingLocationsLocation,
      { meta: EventLineItemFieldMeta.ParticipatingLocationsLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={EventLineItemField.ParticipatingLocationsLocation}
          meta={EventLineItemFieldMeta.ParticipatingLocationsLocation}
          fieldConfig={fieldConfig}
          location={value?.ParticipatingLocationsLocation}
          renderContext={renderContext}
        />}
    ],

    [
      EventLineItemField.RetailPlannedImpact,
      { meta: EventLineItemFieldMeta.RetailPlannedImpact,
        template: ({value, renderContext, fieldConfig}) => <RetailPlannedImpactDisplay
          key={EventLineItemField.RetailPlannedImpact}
          meta={EventLineItemFieldMeta.RetailPlannedImpact}
          fieldConfig={fieldConfig}
          retailPlannedImpact={value?.RetailPlannedImpact}
          renderContext={renderContext}
        />}
    ],

    [
      EventLineItemField.SupplyItem,
      { meta: EventLineItemFieldMeta.SupplyItem,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={EventLineItemField.SupplyItem}
          meta={EventLineItemFieldMeta.SupplyItem}
          fieldConfig={fieldConfig}
          item={value?.SupplyItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function EventLineItemDisplay<TFieldMeta>({ meta, fieldConfig, eventLineItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EventLineItemTypeName,
    meta,
    fieldConfig,
    eventLineItem,
    renderContext,
    EventLineItemSubElementsMap,
  )
}
