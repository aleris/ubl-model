import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ClassificationCategory } from  '../../model/cac/ClassificationCategory'
import { ClassificationCategoryField, ClassificationCategoryFieldMeta, ClassificationCategoryTypeName } from  '../../meta/cac/ClassificationCategoryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ClassificationCategory, void>
  classificationCategory: ClassificationCategory[] | undefined
  renderContext: RenderContext
}

export const ClassificationCategorySubElementsMap: SubElementsTemplatesMap<ClassificationCategoryField, ClassificationCategory, void> = new Map([
    [
      ClassificationCategoryField.UBLExtensions,
      { meta: ClassificationCategoryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ClassificationCategoryField.UBLExtensions}
          meta={ClassificationCategoryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationCategoryField.Name,
      { meta: ClassificationCategoryFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationCategoryField.Name}
          meta={ClassificationCategoryFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationCategoryField.CodeValue,
      { meta: ClassificationCategoryFieldMeta.CodeValue,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationCategoryField.CodeValue}
          meta={ClassificationCategoryFieldMeta.CodeValue}
          fieldConfig={fieldConfig}
          text={value?.CodeValue}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationCategoryField.Description,
      { meta: ClassificationCategoryFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ClassificationCategoryField.Description}
          meta={ClassificationCategoryFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ClassificationCategoryField.CategorizesClassificationCategory,
      { meta: ClassificationCategoryFieldMeta.CategorizesClassificationCategory,
        template: ({value, renderContext, fieldConfig}) => <ClassificationCategoryDisplay
          key={ClassificationCategoryField.CategorizesClassificationCategory}
          meta={ClassificationCategoryFieldMeta.CategorizesClassificationCategory}
          fieldConfig={fieldConfig}
          classificationCategory={value?.CategorizesClassificationCategory}
          renderContext={renderContext}
        />}
    ]
]) 

export function ClassificationCategoryDisplay<TFieldMeta>({ meta, fieldConfig, classificationCategory, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ClassificationCategoryTypeName,
    meta,
    fieldConfig,
    classificationCategory,
    renderContext,
    ClassificationCategorySubElementsMap,
  )
}
