import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationScheme } from  '../../model/cac/ClassificationScheme'
import { ClassificationSchemeField, ClassificationSchemeFieldMeta, ClassificationSchemeTypeName } from  '../../meta/cac/ClassificationSchemeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ClassificationCategoryDisplay } from './ClassificationCategoryDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ClassificationScheme, void>
  classificationScheme: ClassificationScheme[] | undefined
  renderContext: RenderContext
}

export const ClassificationSchemeSubElementsMap: SubElementsTemplatesMap<ClassificationSchemeField, ClassificationScheme, void> = new Map([
    [
      ClassificationSchemeField.UBLExtensions,
      { meta: ClassificationSchemeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ClassificationSchemeField.UBLExtensions}
          meta={ClassificationSchemeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.ID,
      { meta: ClassificationSchemeFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.ID}
          meta={ClassificationSchemeFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.UUID,
      { meta: ClassificationSchemeFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.UUID}
          meta={ClassificationSchemeFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.LastRevisionDate,
      { meta: ClassificationSchemeFieldMeta.LastRevisionDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ClassificationSchemeField.LastRevisionDate}
          meta={ClassificationSchemeFieldMeta.LastRevisionDate}
          fieldConfig={fieldConfig}
          date={value?.LastRevisionDate}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.LastRevisionTime,
      { meta: ClassificationSchemeFieldMeta.LastRevisionTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ClassificationSchemeField.LastRevisionTime}
          meta={ClassificationSchemeFieldMeta.LastRevisionTime}
          fieldConfig={fieldConfig}
          time={value?.LastRevisionTime}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.Note,
      { meta: ClassificationSchemeFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationSchemeField.Note}
          meta={ClassificationSchemeFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.Name,
      { meta: ClassificationSchemeFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationSchemeField.Name}
          meta={ClassificationSchemeFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.Description,
      { meta: ClassificationSchemeFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationSchemeField.Description}
          meta={ClassificationSchemeFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.AgencyID,
      { meta: ClassificationSchemeFieldMeta.AgencyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.AgencyID}
          meta={ClassificationSchemeFieldMeta.AgencyID}
          fieldConfig={fieldConfig}
          identifier={value?.AgencyID}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.AgencyName,
      { meta: ClassificationSchemeFieldMeta.AgencyName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationSchemeField.AgencyName}
          meta={ClassificationSchemeFieldMeta.AgencyName}
          fieldConfig={fieldConfig}
          text={value?.AgencyName}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.VersionID,
      { meta: ClassificationSchemeFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.VersionID}
          meta={ClassificationSchemeFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.URI,
      { meta: ClassificationSchemeFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.URI}
          meta={ClassificationSchemeFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.SchemeURI,
      { meta: ClassificationSchemeFieldMeta.SchemeURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.SchemeURI}
          meta={ClassificationSchemeFieldMeta.SchemeURI}
          fieldConfig={fieldConfig}
          identifier={value?.SchemeURI}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.LanguageID,
      { meta: ClassificationSchemeFieldMeta.LanguageID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ClassificationSchemeField.LanguageID}
          meta={ClassificationSchemeFieldMeta.LanguageID}
          fieldConfig={fieldConfig}
          identifier={value?.LanguageID}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationSchemeField.ClassificationCategory,
      { meta: ClassificationSchemeFieldMeta.ClassificationCategory,
        template: ({value, renderContext, fieldConfig}) => <ClassificationCategoryDisplay
          key={ClassificationSchemeField.ClassificationCategory}
          meta={ClassificationSchemeFieldMeta.ClassificationCategory}
          fieldConfig={fieldConfig}
          classificationCategory={value?.ClassificationCategory}
          renderContext={renderContext}
        />}
    ]
]) 

export function ClassificationSchemeDisplay<TFieldMeta>({ meta, fieldConfig, classificationScheme, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ClassificationSchemeTypeName,
    meta,
    fieldConfig,
    classificationScheme,
    renderContext,
    ClassificationSchemeSubElementsMap,
  )
}
