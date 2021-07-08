import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { QualifyingParty } from  '../../model/cac/QualifyingParty'
import { QualifyingPartyField, QualifyingPartyFieldMeta, QualifyingPartyTypeName } from  '../../meta/cac/QualifyingPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CapabilityDisplay } from './CapabilityDisplay'
import { ClassificationSchemeDisplay } from './ClassificationSchemeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CompletedTaskDisplay } from './CompletedTaskDisplay'
import { DeclarationDisplay } from './DeclarationDisplay'
import { EconomicOperatorRoleDisplay } from './EconomicOperatorRoleDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<QualifyingParty, void>
  qualifyingParty: QualifyingParty[] | undefined
  renderContext: RenderContext
}

export const QualifyingPartySubElementsMap: SubElementsTemplatesMap<QualifyingPartyField, QualifyingParty, void> = new Map([
    [
      QualifyingPartyField.UBLExtensions,
      { meta: QualifyingPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={QualifyingPartyField.UBLExtensions}
          meta={QualifyingPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.ParticipationPercent,
      { meta: QualifyingPartyFieldMeta.ParticipationPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={QualifyingPartyField.ParticipationPercent}
          meta={QualifyingPartyFieldMeta.ParticipationPercent}
          fieldConfig={fieldConfig}
          numeric={value?.ParticipationPercent}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.PersonalSituation,
      { meta: QualifyingPartyFieldMeta.PersonalSituation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={QualifyingPartyField.PersonalSituation}
          meta={QualifyingPartyFieldMeta.PersonalSituation}
          fieldConfig={fieldConfig}
          text={value?.PersonalSituation}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.OperatingYearsQuantity,
      { meta: QualifyingPartyFieldMeta.OperatingYearsQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={QualifyingPartyField.OperatingYearsQuantity}
          meta={QualifyingPartyFieldMeta.OperatingYearsQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.OperatingYearsQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.EmployeeQuantity,
      { meta: QualifyingPartyFieldMeta.EmployeeQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={QualifyingPartyField.EmployeeQuantity}
          meta={QualifyingPartyFieldMeta.EmployeeQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.EmployeeQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.BusinessClassificationEvidenceID,
      { meta: QualifyingPartyFieldMeta.BusinessClassificationEvidenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualifyingPartyField.BusinessClassificationEvidenceID}
          meta={QualifyingPartyFieldMeta.BusinessClassificationEvidenceID}
          fieldConfig={fieldConfig}
          identifier={value?.BusinessClassificationEvidenceID}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.BusinessIdentityEvidenceID,
      { meta: QualifyingPartyFieldMeta.BusinessIdentityEvidenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={QualifyingPartyField.BusinessIdentityEvidenceID}
          meta={QualifyingPartyFieldMeta.BusinessIdentityEvidenceID}
          fieldConfig={fieldConfig}
          identifier={value?.BusinessIdentityEvidenceID}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.TendererRoleCode,
      { meta: QualifyingPartyFieldMeta.TendererRoleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={QualifyingPartyField.TendererRoleCode}
          meta={QualifyingPartyFieldMeta.TendererRoleCode}
          fieldConfig={fieldConfig}
          code={value?.TendererRoleCode}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.BusinessClassificationScheme,
      { meta: QualifyingPartyFieldMeta.BusinessClassificationScheme,
        template: ({value, renderContext, fieldConfig}) => <ClassificationSchemeDisplay
          key={QualifyingPartyField.BusinessClassificationScheme}
          meta={QualifyingPartyFieldMeta.BusinessClassificationScheme}
          fieldConfig={fieldConfig}
          classificationScheme={value?.BusinessClassificationScheme}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.TechnicalCapability,
      { meta: QualifyingPartyFieldMeta.TechnicalCapability,
        template: ({value, renderContext, fieldConfig}) => <CapabilityDisplay
          key={QualifyingPartyField.TechnicalCapability}
          meta={QualifyingPartyFieldMeta.TechnicalCapability}
          fieldConfig={fieldConfig}
          capability={value?.TechnicalCapability}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.FinancialCapability,
      { meta: QualifyingPartyFieldMeta.FinancialCapability,
        template: ({value, renderContext, fieldConfig}) => <CapabilityDisplay
          key={QualifyingPartyField.FinancialCapability}
          meta={QualifyingPartyFieldMeta.FinancialCapability}
          fieldConfig={fieldConfig}
          capability={value?.FinancialCapability}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.CompletedTask,
      { meta: QualifyingPartyFieldMeta.CompletedTask,
        template: ({value, renderContext, fieldConfig}) => <CompletedTaskDisplay
          key={QualifyingPartyField.CompletedTask}
          meta={QualifyingPartyFieldMeta.CompletedTask}
          fieldConfig={fieldConfig}
          completedTask={value?.CompletedTask}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.Declaration,
      { meta: QualifyingPartyFieldMeta.Declaration,
        template: ({value, renderContext, fieldConfig}) => <DeclarationDisplay
          key={QualifyingPartyField.Declaration}
          meta={QualifyingPartyFieldMeta.Declaration}
          fieldConfig={fieldConfig}
          declaration={value?.Declaration}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.Party,
      { meta: QualifyingPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={QualifyingPartyField.Party}
          meta={QualifyingPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      QualifyingPartyField.EconomicOperatorRole,
      { meta: QualifyingPartyFieldMeta.EconomicOperatorRole,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorRoleDisplay
          key={QualifyingPartyField.EconomicOperatorRole}
          meta={QualifyingPartyFieldMeta.EconomicOperatorRole}
          fieldConfig={fieldConfig}
          economicOperatorRole={value?.EconomicOperatorRole}
          renderContext={renderContext}
        />}
    ]
]) 

export function QualifyingPartyDisplay<TFieldMeta>({ meta, fieldConfig, qualifyingParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    QualifyingPartyTypeName,
    meta,
    fieldConfig,
    qualifyingParty,
    renderContext,
    QualifyingPartySubElementsMap,
  )
}
