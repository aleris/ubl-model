import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { NotificationRequirement } from  '../../model/cac/NotificationRequirement'
import { NotificationRequirementField, NotificationRequirementFieldMeta, NotificationRequirementTypeName } from  '../../meta/cac/NotificationRequirementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { LocationDisplay } from './LocationDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<NotificationRequirement, void>
  notificationRequirement: NotificationRequirement[] | undefined
  renderContext: RenderContext
}

export const NotificationRequirementSubElementsMap: SubElementsTemplatesMap<NotificationRequirementField, NotificationRequirement, void> = new Map([
    [
      NotificationRequirementField.UBLExtensions,
      { meta: NotificationRequirementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={NotificationRequirementField.UBLExtensions}
          meta={NotificationRequirementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.NotificationTypeCode,
      { meta: NotificationRequirementFieldMeta.NotificationTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={NotificationRequirementField.NotificationTypeCode}
          meta={NotificationRequirementFieldMeta.NotificationTypeCode}
          fieldConfig={fieldConfig}
          code={value?.NotificationTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.PostEventNotificationDurationMeasure,
      { meta: NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={NotificationRequirementField.PostEventNotificationDurationMeasure}
          meta={NotificationRequirementFieldMeta.PostEventNotificationDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.PostEventNotificationDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.PreEventNotificationDurationMeasure,
      { meta: NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={NotificationRequirementField.PreEventNotificationDurationMeasure}
          meta={NotificationRequirementFieldMeta.PreEventNotificationDurationMeasure}
          fieldConfig={fieldConfig}
          measure={value?.PreEventNotificationDurationMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.NotifyParty,
      { meta: NotificationRequirementFieldMeta.NotifyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={NotificationRequirementField.NotifyParty}
          meta={NotificationRequirementFieldMeta.NotifyParty}
          fieldConfig={fieldConfig}
          party={value?.NotifyParty}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.NotificationPeriod,
      { meta: NotificationRequirementFieldMeta.NotificationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={NotificationRequirementField.NotificationPeriod}
          meta={NotificationRequirementFieldMeta.NotificationPeriod}
          fieldConfig={fieldConfig}
          period={value?.NotificationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      NotificationRequirementField.NotificationLocation,
      { meta: NotificationRequirementFieldMeta.NotificationLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={NotificationRequirementField.NotificationLocation}
          meta={NotificationRequirementFieldMeta.NotificationLocation}
          fieldConfig={fieldConfig}
          location={value?.NotificationLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function NotificationRequirementDisplay<TFieldMeta>({ meta, fieldConfig, notificationRequirement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    NotificationRequirementTypeName,
    meta,
    fieldConfig,
    notificationRequirement,
    renderContext,
    NotificationRequirementSubElementsMap,
  )
}
