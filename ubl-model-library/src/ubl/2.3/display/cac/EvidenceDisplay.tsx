import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Evidence } from  '../../model/cac/Evidence'
import { EvidenceField, EvidenceFieldMeta, EvidenceTypeName } from  '../../meta/cac/EvidenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LanguageDisplay } from './LanguageDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Evidence, void>
  evidence: Evidence[] | undefined
  renderContext: RenderContext
}

export const EvidenceSubElementsMap: SubElementsTemplatesMap<EvidenceField, Evidence, void> = new Map([
    [
      EvidenceField.UBLExtensions,
      { meta: EvidenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EvidenceField.UBLExtensions}
          meta={EvidenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.ID,
      { meta: EvidenceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EvidenceField.ID}
          meta={EvidenceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.EvidenceTypeCode,
      { meta: EvidenceFieldMeta.EvidenceTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EvidenceField.EvidenceTypeCode}
          meta={EvidenceFieldMeta.EvidenceTypeCode}
          fieldConfig={fieldConfig}
          code={value?.EvidenceTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.Name,
      { meta: EvidenceFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EvidenceField.Name}
          meta={EvidenceFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.Description,
      { meta: EvidenceFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EvidenceField.Description}
          meta={EvidenceFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.CandidateStatement,
      { meta: EvidenceFieldMeta.CandidateStatement,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EvidenceField.CandidateStatement}
          meta={EvidenceFieldMeta.CandidateStatement}
          fieldConfig={fieldConfig}
          text={value?.CandidateStatement}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.ConfidentialityLevelCode,
      { meta: EvidenceFieldMeta.ConfidentialityLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EvidenceField.ConfidentialityLevelCode}
          meta={EvidenceFieldMeta.ConfidentialityLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ConfidentialityLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.EvidenceIssuingParty,
      { meta: EvidenceFieldMeta.EvidenceIssuingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EvidenceField.EvidenceIssuingParty}
          meta={EvidenceFieldMeta.EvidenceIssuingParty}
          fieldConfig={fieldConfig}
          party={value?.EvidenceIssuingParty}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.DocumentReference,
      { meta: EvidenceFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={EvidenceField.DocumentReference}
          meta={EvidenceFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      EvidenceField.Language,
      { meta: EvidenceFieldMeta.Language,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={EvidenceField.Language}
          meta={EvidenceFieldMeta.Language}
          fieldConfig={fieldConfig}
          language={value?.Language}
          renderContext={renderContext}
        />}
    ]
]) 

export function EvidenceDisplay<TFieldMeta>({ meta, fieldConfig, evidence, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EvidenceTypeName,
    meta,
    fieldConfig,
    evidence,
    renderContext,
    EvidenceSubElementsMap,
  )
}
