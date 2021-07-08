import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Pickup } from  '../../model/cac/Pickup'
import { PickupField, PickupFieldMeta, PickupTypeName } from  '../../meta/cac/PickupMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Pickup, void>
  pickup: Pickup[] | undefined
  renderContext: RenderContext
}

export const PickupSubElementsMap: SubElementsTemplatesMap<PickupField, Pickup, void> = new Map([
    [
      PickupField.UBLExtensions,
      { meta: PickupFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PickupField.UBLExtensions}
          meta={PickupFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.ID,
      { meta: PickupFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PickupField.ID}
          meta={PickupFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.ActualPickupDate,
      { meta: PickupFieldMeta.ActualPickupDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PickupField.ActualPickupDate}
          meta={PickupFieldMeta.ActualPickupDate}
          fieldConfig={fieldConfig}
          date={value?.ActualPickupDate}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.ActualPickupTime,
      { meta: PickupFieldMeta.ActualPickupTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PickupField.ActualPickupTime}
          meta={PickupFieldMeta.ActualPickupTime}
          fieldConfig={fieldConfig}
          time={value?.ActualPickupTime}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.EarliestPickupDate,
      { meta: PickupFieldMeta.EarliestPickupDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PickupField.EarliestPickupDate}
          meta={PickupFieldMeta.EarliestPickupDate}
          fieldConfig={fieldConfig}
          date={value?.EarliestPickupDate}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.EarliestPickupTime,
      { meta: PickupFieldMeta.EarliestPickupTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PickupField.EarliestPickupTime}
          meta={PickupFieldMeta.EarliestPickupTime}
          fieldConfig={fieldConfig}
          time={value?.EarliestPickupTime}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.LatestPickupDate,
      { meta: PickupFieldMeta.LatestPickupDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PickupField.LatestPickupDate}
          meta={PickupFieldMeta.LatestPickupDate}
          fieldConfig={fieldConfig}
          date={value?.LatestPickupDate}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.LatestPickupTime,
      { meta: PickupFieldMeta.LatestPickupTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PickupField.LatestPickupTime}
          meta={PickupFieldMeta.LatestPickupTime}
          fieldConfig={fieldConfig}
          time={value?.LatestPickupTime}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.PickupLocation,
      { meta: PickupFieldMeta.PickupLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={PickupField.PickupLocation}
          meta={PickupFieldMeta.PickupLocation}
          fieldConfig={fieldConfig}
          location={value?.PickupLocation}
          renderContext={renderContext}
        />}
    ],

    [
      PickupField.PickupParty,
      { meta: PickupFieldMeta.PickupParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PickupField.PickupParty}
          meta={PickupFieldMeta.PickupParty}
          fieldConfig={fieldConfig}
          party={value?.PickupParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function PickupDisplay<TFieldMeta>({ meta, fieldConfig, pickup, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PickupTypeName,
    meta,
    fieldConfig,
    pickup,
    renderContext,
    PickupSubElementsMap,
  )
}
