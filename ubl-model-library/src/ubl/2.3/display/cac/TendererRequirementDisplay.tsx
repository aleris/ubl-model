import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererRequirement } from  '../../model/cac/TendererRequirement'
import { TendererRequirementField, TendererRequirementFieldMeta, TendererRequirementTypeName } from  '../../meta/cac/TendererRequirementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EvidenceDisplay } from './EvidenceDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TendererRequirement, void>
  tendererRequirement: TendererRequirement[] | undefined
  renderContext: RenderContext
}

export const TendererRequirementSubElementsMap: SubElementsTemplatesMap<TendererRequirementField, TendererRequirement, void> = new Map([
    [
      TendererRequirementField.UBLExtensions,
      { meta: TendererRequirementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TendererRequirementField.UBLExtensions}
          meta={TendererRequirementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TendererRequirementField.Name,
      { meta: TendererRequirementFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererRequirementField.Name}
          meta={TendererRequirementFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      TendererRequirementField.TendererRequirementTypeCode,
      { meta: TendererRequirementFieldMeta.TendererRequirementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TendererRequirementField.TendererRequirementTypeCode}
          meta={TendererRequirementFieldMeta.TendererRequirementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TendererRequirementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TendererRequirementField.Description,
      { meta: TendererRequirementFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererRequirementField.Description}
          meta={TendererRequirementFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TendererRequirementField.LegalReference,
      { meta: TendererRequirementFieldMeta.LegalReference,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererRequirementField.LegalReference}
          meta={TendererRequirementFieldMeta.LegalReference}
          fieldConfig={fieldConfig}
          text={value?.LegalReference}
          renderContext={renderContext}
        />}
    ],

    [
      TendererRequirementField.SuggestedEvidence,
      { meta: TendererRequirementFieldMeta.SuggestedEvidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={TendererRequirementField.SuggestedEvidence}
          meta={TendererRequirementFieldMeta.SuggestedEvidence}
          fieldConfig={fieldConfig}
          evidence={value?.SuggestedEvidence}
          renderContext={renderContext}
        />}
    ]
]) 

export function TendererRequirementDisplay<TFieldMeta>({ meta, fieldConfig, tendererRequirement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TendererRequirementTypeName,
    meta,
    fieldConfig,
    tendererRequirement,
    renderContext,
    TendererRequirementSubElementsMap,
  )
}
