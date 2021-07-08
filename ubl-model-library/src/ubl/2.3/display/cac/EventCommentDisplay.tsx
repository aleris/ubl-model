import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EventComment } from  '../../model/cac/EventComment'
import { EventCommentField, EventCommentFieldMeta, EventCommentTypeName } from  '../../meta/cac/EventCommentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EventComment, void>
  eventComment: EventComment[] | undefined
  renderContext: RenderContext
}

export const EventCommentSubElementsMap: SubElementsTemplatesMap<EventCommentField, EventComment, void> = new Map([
    [
      EventCommentField.UBLExtensions,
      { meta: EventCommentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EventCommentField.UBLExtensions}
          meta={EventCommentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EventCommentField.Comment,
      { meta: EventCommentFieldMeta.Comment,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EventCommentField.Comment}
          meta={EventCommentFieldMeta.Comment}
          fieldConfig={fieldConfig}
          text={value?.Comment}
          renderContext={renderContext}
        />}
    ],

    [
      EventCommentField.IssueDate,
      { meta: EventCommentFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={EventCommentField.IssueDate}
          meta={EventCommentFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      EventCommentField.IssueTime,
      { meta: EventCommentFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={EventCommentField.IssueTime}
          meta={EventCommentFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ]
]) 

export function EventCommentDisplay<TFieldMeta>({ meta, fieldConfig, eventComment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EventCommentTypeName,
    meta,
    fieldConfig,
    eventComment,
    renderContext,
    EventCommentSubElementsMap,
  )
}
