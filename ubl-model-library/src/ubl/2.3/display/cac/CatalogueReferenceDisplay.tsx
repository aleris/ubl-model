import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueReference } from  '../../model/cac/CatalogueReference'
import { CatalogueReferenceField, CatalogueReferenceFieldMeta, CatalogueReferenceTypeName } from  '../../meta/cac/CatalogueReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CatalogueReference, void>
  catalogueReference: CatalogueReference[] | undefined
  renderContext: RenderContext
}

export const CatalogueReferenceSubElementsMap: SubElementsTemplatesMap<CatalogueReferenceField, CatalogueReference, void> = new Map([
    [
      CatalogueReferenceField.UBLExtensions,
      { meta: CatalogueReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CatalogueReferenceField.UBLExtensions}
          meta={CatalogueReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.ID,
      { meta: CatalogueReferenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueReferenceField.ID}
          meta={CatalogueReferenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.UUID,
      { meta: CatalogueReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueReferenceField.UUID}
          meta={CatalogueReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.IssueDate,
      { meta: CatalogueReferenceFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueReferenceField.IssueDate}
          meta={CatalogueReferenceFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.IssueTime,
      { meta: CatalogueReferenceFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueReferenceField.IssueTime}
          meta={CatalogueReferenceFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.RevisionDate,
      { meta: CatalogueReferenceFieldMeta.RevisionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CatalogueReferenceField.RevisionDate}
          meta={CatalogueReferenceFieldMeta.RevisionDate}
          fieldConfig={fieldConfig}
          date={value?.RevisionDate}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.RevisionTime,
      { meta: CatalogueReferenceFieldMeta.RevisionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CatalogueReferenceField.RevisionTime}
          meta={CatalogueReferenceFieldMeta.RevisionTime}
          fieldConfig={fieldConfig}
          time={value?.RevisionTime}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.Note,
      { meta: CatalogueReferenceFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueReferenceField.Note}
          meta={CatalogueReferenceFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.Description,
      { meta: CatalogueReferenceFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CatalogueReferenceField.Description}
          meta={CatalogueReferenceFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.VersionID,
      { meta: CatalogueReferenceFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueReferenceField.VersionID}
          meta={CatalogueReferenceFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CatalogueReferenceField.PreviousVersionID,
      { meta: CatalogueReferenceFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CatalogueReferenceField.PreviousVersionID}
          meta={CatalogueReferenceFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ]
]) 

export function CatalogueReferenceDisplay<TFieldMeta>({ meta, fieldConfig, catalogueReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CatalogueReferenceTypeName,
    meta,
    fieldConfig,
    catalogueReference,
    renderContext,
    CatalogueReferenceSubElementsMap,
  )
}
