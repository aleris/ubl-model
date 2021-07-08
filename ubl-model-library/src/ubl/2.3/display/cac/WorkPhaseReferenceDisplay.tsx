import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { WorkPhaseReference } from  '../../model/cac/WorkPhaseReference'
import { WorkPhaseReferenceField, WorkPhaseReferenceFieldMeta, WorkPhaseReferenceTypeName } from  '../../meta/cac/WorkPhaseReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<WorkPhaseReference, void>
  workPhaseReference: WorkPhaseReference[] | undefined
  renderContext: RenderContext
}

export const WorkPhaseReferenceSubElementsMap: SubElementsTemplatesMap<WorkPhaseReferenceField, WorkPhaseReference, void> = new Map([
    [
      WorkPhaseReferenceField.UBLExtensions,
      { meta: WorkPhaseReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={WorkPhaseReferenceField.UBLExtensions}
          meta={WorkPhaseReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.ID,
      { meta: WorkPhaseReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={WorkPhaseReferenceField.ID}
          meta={WorkPhaseReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.WorkPhaseCode,
      { meta: WorkPhaseReferenceFieldMeta.WorkPhaseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={WorkPhaseReferenceField.WorkPhaseCode}
          meta={WorkPhaseReferenceFieldMeta.WorkPhaseCode}
          fieldConfig={fieldConfig}
          code={value?.WorkPhaseCode}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.WorkPhase,
      { meta: WorkPhaseReferenceFieldMeta.WorkPhase,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={WorkPhaseReferenceField.WorkPhase}
          meta={WorkPhaseReferenceFieldMeta.WorkPhase}
          fieldConfig={fieldConfig}
          text={value?.WorkPhase}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.ProgressPercent,
      { meta: WorkPhaseReferenceFieldMeta.ProgressPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={WorkPhaseReferenceField.ProgressPercent}
          meta={WorkPhaseReferenceFieldMeta.ProgressPercent}
          fieldConfig={fieldConfig}
          numeric={value?.ProgressPercent}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.StartDate,
      { meta: WorkPhaseReferenceFieldMeta.StartDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={WorkPhaseReferenceField.StartDate}
          meta={WorkPhaseReferenceFieldMeta.StartDate}
          fieldConfig={fieldConfig}
          date={value?.StartDate}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.EndDate,
      { meta: WorkPhaseReferenceFieldMeta.EndDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={WorkPhaseReferenceField.EndDate}
          meta={WorkPhaseReferenceFieldMeta.EndDate}
          fieldConfig={fieldConfig}
          date={value?.EndDate}
          renderContext={renderContext}
        />}
    ],

    [
      WorkPhaseReferenceField.WorkOrderDocumentReference,
      { meta: WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={WorkPhaseReferenceField.WorkOrderDocumentReference}
          meta={WorkPhaseReferenceFieldMeta.WorkOrderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.WorkOrderDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function WorkPhaseReferenceDisplay<TFieldMeta>({ meta, fieldConfig, workPhaseReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    WorkPhaseReferenceTypeName,
    meta,
    fieldConfig,
    workPhaseReference,
    renderContext,
    WorkPhaseReferenceSubElementsMap,
  )
}
