import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProcessJustification } from  '../../model/cac/ProcessJustification'
import { ProcessJustificationField, ProcessJustificationFieldMeta, ProcessJustificationTypeName } from  '../../meta/cac/ProcessJustificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProcessJustification, void>
  processJustification: ProcessJustification[] | undefined
  renderContext: RenderContext
}

export const ProcessJustificationSubElementsMap: SubElementsTemplatesMap<ProcessJustificationField, ProcessJustification, void> = new Map([
    [
      ProcessJustificationField.UBLExtensions,
      { meta: ProcessJustificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProcessJustificationField.UBLExtensions}
          meta={ProcessJustificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProcessJustificationField.PreviousCancellationReasonCode,
      { meta: ProcessJustificationFieldMeta.PreviousCancellationReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcessJustificationField.PreviousCancellationReasonCode}
          meta={ProcessJustificationFieldMeta.PreviousCancellationReasonCode}
          fieldConfig={fieldConfig}
          code={value?.PreviousCancellationReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProcessJustificationField.ProcessReasonCode,
      { meta: ProcessJustificationFieldMeta.ProcessReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ProcessJustificationField.ProcessReasonCode}
          meta={ProcessJustificationFieldMeta.ProcessReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ProcessReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ProcessJustificationField.ProcessReason,
      { meta: ProcessJustificationFieldMeta.ProcessReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcessJustificationField.ProcessReason}
          meta={ProcessJustificationFieldMeta.ProcessReason}
          fieldConfig={fieldConfig}
          text={value?.ProcessReason}
          renderContext={renderContext}
        />}
    ],

    [
      ProcessJustificationField.Description,
      { meta: ProcessJustificationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ProcessJustificationField.Description}
          meta={ProcessJustificationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProcessJustificationDisplay<TFieldMeta>({ meta, fieldConfig, processJustification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProcessJustificationTypeName,
    meta,
    fieldConfig,
    processJustification,
    renderContext,
    ProcessJustificationSubElementsMap,
  )
}
