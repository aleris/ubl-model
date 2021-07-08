import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualificationRequest } from  '../../model/cac/TendererQualificationRequest'
import { TendererQualificationRequestField, TendererQualificationRequestFieldMeta, TendererQualificationRequestTypeName } from  '../../meta/cac/TendererQualificationRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ClassificationSchemeDisplay } from './ClassificationSchemeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { EconomicOperatorRoleDisplay } from './EconomicOperatorRoleDisplay'
import { EvaluationCriterionDisplay } from './EvaluationCriterionDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TendererRequirementDisplay } from './TendererRequirementDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TendererQualificationRequest, void>
  tendererQualificationRequest: TendererQualificationRequest[] | undefined
  renderContext: RenderContext
}

export const TendererQualificationRequestSubElementsMap: SubElementsTemplatesMap<TendererQualificationRequestField, TendererQualificationRequest, void> = new Map([
    [
      TendererQualificationRequestField.UBLExtensions,
      { meta: TendererQualificationRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TendererQualificationRequestField.UBLExtensions}
          meta={TendererQualificationRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.CompanyLegalFormCode,
      { meta: TendererQualificationRequestFieldMeta.CompanyLegalFormCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TendererQualificationRequestField.CompanyLegalFormCode}
          meta={TendererQualificationRequestFieldMeta.CompanyLegalFormCode}
          fieldConfig={fieldConfig}
          code={value?.CompanyLegalFormCode}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.CompanyLegalForm,
      { meta: TendererQualificationRequestFieldMeta.CompanyLegalForm,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationRequestField.CompanyLegalForm}
          meta={TendererQualificationRequestFieldMeta.CompanyLegalForm}
          fieldConfig={fieldConfig}
          text={value?.CompanyLegalForm}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.PersonalSituation,
      { meta: TendererQualificationRequestFieldMeta.PersonalSituation,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationRequestField.PersonalSituation}
          meta={TendererQualificationRequestFieldMeta.PersonalSituation}
          fieldConfig={fieldConfig}
          text={value?.PersonalSituation}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.OperatingYearsQuantity,
      { meta: TendererQualificationRequestFieldMeta.OperatingYearsQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TendererQualificationRequestField.OperatingYearsQuantity}
          meta={TendererQualificationRequestFieldMeta.OperatingYearsQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.OperatingYearsQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.EmployeeQuantity,
      { meta: TendererQualificationRequestFieldMeta.EmployeeQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TendererQualificationRequestField.EmployeeQuantity}
          meta={TendererQualificationRequestFieldMeta.EmployeeQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.EmployeeQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.Description,
      { meta: TendererQualificationRequestFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationRequestField.Description}
          meta={TendererQualificationRequestFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.RequiredBusinessClassificationScheme,
      { meta: TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme,
        template: ({value, renderContext, fieldConfig}) => <ClassificationSchemeDisplay
          key={TendererQualificationRequestField.RequiredBusinessClassificationScheme}
          meta={TendererQualificationRequestFieldMeta.RequiredBusinessClassificationScheme}
          fieldConfig={fieldConfig}
          classificationScheme={value?.RequiredBusinessClassificationScheme}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.TechnicalEvaluationCriterion,
      { meta: TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion,
        template: ({value, renderContext, fieldConfig}) => <EvaluationCriterionDisplay
          key={TendererQualificationRequestField.TechnicalEvaluationCriterion}
          meta={TendererQualificationRequestFieldMeta.TechnicalEvaluationCriterion}
          fieldConfig={fieldConfig}
          evaluationCriterion={value?.TechnicalEvaluationCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.FinancialEvaluationCriterion,
      { meta: TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion,
        template: ({value, renderContext, fieldConfig}) => <EvaluationCriterionDisplay
          key={TendererQualificationRequestField.FinancialEvaluationCriterion}
          meta={TendererQualificationRequestFieldMeta.FinancialEvaluationCriterion}
          fieldConfig={fieldConfig}
          evaluationCriterion={value?.FinancialEvaluationCriterion}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.SpecificTendererRequirement,
      { meta: TendererQualificationRequestFieldMeta.SpecificTendererRequirement,
        template: ({value, renderContext, fieldConfig}) => <TendererRequirementDisplay
          key={TendererQualificationRequestField.SpecificTendererRequirement}
          meta={TendererQualificationRequestFieldMeta.SpecificTendererRequirement}
          fieldConfig={fieldConfig}
          tendererRequirement={value?.SpecificTendererRequirement}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationRequestField.EconomicOperatorRole,
      { meta: TendererQualificationRequestFieldMeta.EconomicOperatorRole,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorRoleDisplay
          key={TendererQualificationRequestField.EconomicOperatorRole}
          meta={TendererQualificationRequestFieldMeta.EconomicOperatorRole}
          fieldConfig={fieldConfig}
          economicOperatorRole={value?.EconomicOperatorRole}
          renderContext={renderContext}
        />}
    ]
]) 

export function TendererQualificationRequestDisplay<TFieldMeta>({ meta, fieldConfig, tendererQualificationRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TendererQualificationRequestTypeName,
    meta,
    fieldConfig,
    tendererQualificationRequest,
    renderContext,
    TendererQualificationRequestSubElementsMap,
  )
}
