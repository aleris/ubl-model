import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ActivityProperty } from  '../../model/cac/ActivityProperty'
import { ActivityPropertyField, ActivityPropertyFieldMeta, ActivityPropertyTypeName } from  '../../meta/cac/ActivityPropertyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ActivityProperty, void>
  activityProperty: ActivityProperty[] | undefined
  renderContext: RenderContext
}

export const ActivityPropertySubElementsMap: SubElementsTemplatesMap<ActivityPropertyField, ActivityProperty, void> = new Map([
    [
      ActivityPropertyField.UBLExtensions,
      { meta: ActivityPropertyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ActivityPropertyField.UBLExtensions}
          meta={ActivityPropertyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityPropertyField.Name,
      { meta: ActivityPropertyFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ActivityPropertyField.Name}
          meta={ActivityPropertyFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ActivityPropertyField.Value,
      { meta: ActivityPropertyFieldMeta.Value,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ActivityPropertyField.Value}
          meta={ActivityPropertyFieldMeta.Value}
          fieldConfig={fieldConfig}
          text={value?.Value}
          renderContext={renderContext}
        />}
    ]
]) 

export function ActivityPropertyDisplay<TFieldMeta>({ meta, fieldConfig, activityProperty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ActivityPropertyTypeName,
    meta,
    fieldConfig,
    activityProperty,
    renderContext,
    ActivityPropertySubElementsMap,
  )
}
