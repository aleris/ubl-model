import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderRequirement } from  '../../model/cac/TenderRequirement'
import { TenderRequirementField, TenderRequirementFieldMeta, TenderRequirementTypeName } from  '../../meta/cac/TenderRequirementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderRequirement, void>
  tenderRequirement: TenderRequirement[] | undefined
  renderContext: RenderContext
}

export const TenderRequirementSubElementsMap: SubElementsTemplatesMap<TenderRequirementField, TenderRequirement, void> = new Map([
    [
      TenderRequirementField.UBLExtensions,
      { meta: TenderRequirementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderRequirementField.UBLExtensions}
          meta={TenderRequirementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderRequirementField.Name,
      { meta: TenderRequirementFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderRequirementField.Name}
          meta={TenderRequirementFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TenderRequirementField.Description,
      { meta: TenderRequirementFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderRequirementField.Description}
          meta={TenderRequirementFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TenderRequirementField.TemplateDocumentReference,
      { meta: TenderRequirementFieldMeta.TemplateDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderRequirementField.TemplateDocumentReference}
          meta={TenderRequirementFieldMeta.TemplateDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TemplateDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderRequirementDisplay<TFieldMeta>({ meta, fieldConfig, tenderRequirement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderRequirementTypeName,
    meta,
    fieldConfig,
    tenderRequirement,
    renderContext,
    TenderRequirementSubElementsMap,
  )
}
