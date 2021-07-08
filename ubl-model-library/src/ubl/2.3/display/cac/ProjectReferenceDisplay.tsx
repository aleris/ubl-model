import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ProjectReference } from  '../../model/cac/ProjectReference'
import { ProjectReferenceField, ProjectReferenceFieldMeta, ProjectReferenceTypeName } from  '../../meta/cac/ProjectReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { WorkPhaseReferenceDisplay } from './WorkPhaseReferenceDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ProjectReference, void>
  projectReference: ProjectReference[] | undefined
  renderContext: RenderContext
}

export const ProjectReferenceSubElementsMap: SubElementsTemplatesMap<ProjectReferenceField, ProjectReference, void> = new Map([
    [
      ProjectReferenceField.UBLExtensions,
      { meta: ProjectReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ProjectReferenceField.UBLExtensions}
          meta={ProjectReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ProjectReferenceField.ID,
      { meta: ProjectReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProjectReferenceField.ID}
          meta={ProjectReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ProjectReferenceField.UUID,
      { meta: ProjectReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ProjectReferenceField.UUID}
          meta={ProjectReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ProjectReferenceField.IssueDate,
      { meta: ProjectReferenceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ProjectReferenceField.IssueDate}
          meta={ProjectReferenceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ProjectReferenceField.WorkPhaseReference,
      { meta: ProjectReferenceFieldMeta.WorkPhaseReference,
        template: ({value, renderContext, fieldConfig}) => <WorkPhaseReferenceDisplay
          key={ProjectReferenceField.WorkPhaseReference}
          meta={ProjectReferenceFieldMeta.WorkPhaseReference}
          fieldConfig={fieldConfig}
          workPhaseReference={value?.WorkPhaseReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function ProjectReferenceDisplay<TFieldMeta>({ meta, fieldConfig, projectReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ProjectReferenceTypeName,
    meta,
    fieldConfig,
    projectReference,
    renderContext,
    ProjectReferenceSubElementsMap,
  )
}
