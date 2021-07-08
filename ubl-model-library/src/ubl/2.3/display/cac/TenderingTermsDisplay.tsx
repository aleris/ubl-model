import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingTerms } from  '../../model/cac/TenderingTerms'
import { TenderingTermsField, TenderingTermsFieldMeta, TenderingTermsTypeName } from  '../../meta/cac/TenderingTermsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { AppealTermsDisplay } from './AppealTermsDisplay'
import { AwardingTermsDisplay } from './AwardingTermsDisplay'
import { BudgetAccountLineDisplay } from './BudgetAccountLineDisplay'
import { ClauseDisplay } from './ClauseDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractExecutionRequirementDisplay } from './ContractExecutionRequirementDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { EconomicOperatorShortListDisplay } from './EconomicOperatorShortListDisplay'
import { FinancialGuaranteeDisplay } from './FinancialGuaranteeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LanguageDisplay } from './LanguageDisplay'
import { LotDistributionDisplay } from './LotDistributionDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PostAwardProcessDisplay } from './PostAwardProcessDisplay'
import { PrizeDisplay } from './PrizeDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { SecurityClearanceTermDisplay } from './SecurityClearanceTermDisplay'
import { SubcontractTermsDisplay } from './SubcontractTermsDisplay'
import { TendererQualificationRequestDisplay } from './TendererQualificationRequestDisplay'
import { TenderPreparationDisplay } from './TenderPreparationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderingTerms, void>
  tenderingTerms: TenderingTerms[] | undefined
  renderContext: RenderContext
}

export const TenderingTermsSubElementsMap: SubElementsTemplatesMap<TenderingTermsField, TenderingTerms, void> = new Map([
    [
      TenderingTermsField.UBLExtensions,
      { meta: TenderingTermsFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderingTermsField.UBLExtensions}
          meta={TenderingTermsFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AwardingMethodTypeCode,
      { meta: TenderingTermsFieldMeta.AwardingMethodTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.AwardingMethodTypeCode}
          meta={TenderingTermsFieldMeta.AwardingMethodTypeCode}
          fieldConfig={fieldConfig}
          code={value?.AwardingMethodTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PriceEvaluationCode,
      { meta: TenderingTermsFieldMeta.PriceEvaluationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.PriceEvaluationCode}
          meta={TenderingTermsFieldMeta.PriceEvaluationCode}
          fieldConfig={fieldConfig}
          code={value?.PriceEvaluationCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.MaximumVariantQuantity,
      { meta: TenderingTermsFieldMeta.MaximumVariantQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TenderingTermsField.MaximumVariantQuantity}
          meta={TenderingTermsFieldMeta.MaximumVariantQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.MaximumVariantQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.VariantConstraintIndicator,
      { meta: TenderingTermsFieldMeta.VariantConstraintIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingTermsField.VariantConstraintIndicator}
          meta={TenderingTermsFieldMeta.VariantConstraintIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.VariantConstraintIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AcceptedVariantsDescription,
      { meta: TenderingTermsFieldMeta.AcceptedVariantsDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.AcceptedVariantsDescription}
          meta={TenderingTermsFieldMeta.AcceptedVariantsDescription}
          fieldConfig={fieldConfig}
          text={value?.AcceptedVariantsDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PriceRevisionFormulaDescription,
      { meta: TenderingTermsFieldMeta.PriceRevisionFormulaDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.PriceRevisionFormulaDescription}
          meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription}
          fieldConfig={fieldConfig}
          text={value?.PriceRevisionFormulaDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.FundingProgramCode,
      { meta: TenderingTermsFieldMeta.FundingProgramCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.FundingProgramCode}
          meta={TenderingTermsFieldMeta.FundingProgramCode}
          fieldConfig={fieldConfig}
          code={value?.FundingProgramCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.FundingProgram,
      { meta: TenderingTermsFieldMeta.FundingProgram,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.FundingProgram}
          meta={TenderingTermsFieldMeta.FundingProgram}
          fieldConfig={fieldConfig}
          text={value?.FundingProgram}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.MaximumAdvertisementAmount,
      { meta: TenderingTermsFieldMeta.MaximumAdvertisementAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderingTermsField.MaximumAdvertisementAmount}
          meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount}
          fieldConfig={fieldConfig}
          amount={value?.MaximumAdvertisementAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.Note,
      { meta: TenderingTermsFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.Note}
          meta={TenderingTermsFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PaymentFrequencyCode,
      { meta: TenderingTermsFieldMeta.PaymentFrequencyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.PaymentFrequencyCode}
          meta={TenderingTermsFieldMeta.PaymentFrequencyCode}
          fieldConfig={fieldConfig}
          code={value?.PaymentFrequencyCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.EconomicOperatorRegistryURI,
      { meta: TenderingTermsFieldMeta.EconomicOperatorRegistryURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderingTermsField.EconomicOperatorRegistryURI}
          meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI}
          fieldConfig={fieldConfig}
          identifier={value?.EconomicOperatorRegistryURI}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.RequiredCurriculaIndicator,
      { meta: TenderingTermsFieldMeta.RequiredCurriculaIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingTermsField.RequiredCurriculaIndicator}
          meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.RequiredCurriculaIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.RequiredCurriculaCode,
      { meta: TenderingTermsFieldMeta.RequiredCurriculaCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.RequiredCurriculaCode}
          meta={TenderingTermsFieldMeta.RequiredCurriculaCode}
          fieldConfig={fieldConfig}
          code={value?.RequiredCurriculaCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.OtherConditionsIndicator,
      { meta: TenderingTermsFieldMeta.OtherConditionsIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingTermsField.OtherConditionsIndicator}
          meta={TenderingTermsFieldMeta.OtherConditionsIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.OtherConditionsIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.RecurringProcurementIndicator,
      { meta: TenderingTermsFieldMeta.RecurringProcurementIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderingTermsField.RecurringProcurementIndicator}
          meta={TenderingTermsFieldMeta.RecurringProcurementIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.RecurringProcurementIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.RecurringProcurementDescription,
      { meta: TenderingTermsFieldMeta.RecurringProcurementDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.RecurringProcurementDescription}
          meta={TenderingTermsFieldMeta.RecurringProcurementDescription}
          fieldConfig={fieldConfig}
          text={value?.RecurringProcurementDescription}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.EstimatedTimingFurtherPublication,
      { meta: TenderingTermsFieldMeta.EstimatedTimingFurtherPublication,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.EstimatedTimingFurtherPublication}
          meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication}
          fieldConfig={fieldConfig}
          text={value?.EstimatedTimingFurtherPublication}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AdditionalConditions,
      { meta: TenderingTermsFieldMeta.AdditionalConditions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderingTermsField.AdditionalConditions}
          meta={TenderingTermsFieldMeta.AdditionalConditions}
          fieldConfig={fieldConfig}
          text={value?.AdditionalConditions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.LatestSecurityClearanceDate,
      { meta: TenderingTermsFieldMeta.LatestSecurityClearanceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderingTermsField.LatestSecurityClearanceDate}
          meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate}
          fieldConfig={fieldConfig}
          date={value?.LatestSecurityClearanceDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.DocumentationFeeAmount,
      { meta: TenderingTermsFieldMeta.DocumentationFeeAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TenderingTermsField.DocumentationFeeAmount}
          meta={TenderingTermsFieldMeta.DocumentationFeeAmount}
          fieldConfig={fieldConfig}
          amount={value?.DocumentationFeeAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.MultipleTendersCode,
      { meta: TenderingTermsFieldMeta.MultipleTendersCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.MultipleTendersCode}
          meta={TenderingTermsFieldMeta.MultipleTendersCode}
          fieldConfig={fieldConfig}
          code={value?.MultipleTendersCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.VariantConstraintCode,
      { meta: TenderingTermsFieldMeta.VariantConstraintCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderingTermsField.VariantConstraintCode}
          meta={TenderingTermsFieldMeta.VariantConstraintCode}
          fieldConfig={fieldConfig}
          code={value?.VariantConstraintCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PenaltyClause,
      { meta: TenderingTermsFieldMeta.PenaltyClause,
        template: ({value, renderContext, fieldConfig}) => <ClauseDisplay
          key={TenderingTermsField.PenaltyClause}
          meta={TenderingTermsFieldMeta.PenaltyClause}
          fieldConfig={fieldConfig}
          clause={value?.PenaltyClause}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.RequiredFinancialGuarantee,
      { meta: TenderingTermsFieldMeta.RequiredFinancialGuarantee,
        template: ({value, renderContext, fieldConfig}) => <FinancialGuaranteeDisplay
          key={TenderingTermsField.RequiredFinancialGuarantee}
          meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee}
          fieldConfig={fieldConfig}
          financialGuarantee={value?.RequiredFinancialGuarantee}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ProcurementLegislationDocumentReference,
      { meta: TenderingTermsFieldMeta.ProcurementLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.ProcurementLegislationDocumentReference}
          meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ProcurementLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.FiscalLegislationDocumentReference,
      { meta: TenderingTermsFieldMeta.FiscalLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.FiscalLegislationDocumentReference}
          meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.FiscalLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.EnvironmentalLegislationDocumentReference,
      { meta: TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.EnvironmentalLegislationDocumentReference}
          meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.EnvironmentalLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.EmploymentLegislationDocumentReference,
      { meta: TenderingTermsFieldMeta.EmploymentLegislationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.EmploymentLegislationDocumentReference}
          meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.EmploymentLegislationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ContractualDocumentReference,
      { meta: TenderingTermsFieldMeta.ContractualDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.ContractualDocumentReference}
          meta={TenderingTermsFieldMeta.ContractualDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractualDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.CallForTendersDocumentReference,
      { meta: TenderingTermsFieldMeta.CallForTendersDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.CallForTendersDocumentReference}
          meta={TenderingTermsFieldMeta.CallForTendersDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CallForTendersDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.WarrantyValidityPeriod,
      { meta: TenderingTermsFieldMeta.WarrantyValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingTermsField.WarrantyValidityPeriod}
          meta={TenderingTermsFieldMeta.WarrantyValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.WarrantyValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PaymentTerms,
      { meta: TenderingTermsFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={TenderingTermsField.PaymentTerms}
          meta={TenderingTermsFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.TendererQualificationRequest,
      { meta: TenderingTermsFieldMeta.TendererQualificationRequest,
        template: ({value, renderContext, fieldConfig}) => <TendererQualificationRequestDisplay
          key={TenderingTermsField.TendererQualificationRequest}
          meta={TenderingTermsFieldMeta.TendererQualificationRequest}
          fieldConfig={fieldConfig}
          tendererQualificationRequest={value?.TendererQualificationRequest}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AllowedSubcontractTerms,
      { meta: TenderingTermsFieldMeta.AllowedSubcontractTerms,
        template: ({value, renderContext, fieldConfig}) => <SubcontractTermsDisplay
          key={TenderingTermsField.AllowedSubcontractTerms}
          meta={TenderingTermsFieldMeta.AllowedSubcontractTerms}
          fieldConfig={fieldConfig}
          subcontractTerms={value?.AllowedSubcontractTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.TenderPreparation,
      { meta: TenderingTermsFieldMeta.TenderPreparation,
        template: ({value, renderContext, fieldConfig}) => <TenderPreparationDisplay
          key={TenderingTermsField.TenderPreparation}
          meta={TenderingTermsFieldMeta.TenderPreparation}
          fieldConfig={fieldConfig}
          tenderPreparation={value?.TenderPreparation}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ContractExecutionRequirement,
      { meta: TenderingTermsFieldMeta.ContractExecutionRequirement,
        template: ({value, renderContext, fieldConfig}) => <ContractExecutionRequirementDisplay
          key={TenderingTermsField.ContractExecutionRequirement}
          meta={TenderingTermsFieldMeta.ContractExecutionRequirement}
          fieldConfig={fieldConfig}
          contractExecutionRequirement={value?.ContractExecutionRequirement}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AwardingTerms,
      { meta: TenderingTermsFieldMeta.AwardingTerms,
        template: ({value, renderContext, fieldConfig}) => <AwardingTermsDisplay
          key={TenderingTermsField.AwardingTerms}
          meta={TenderingTermsFieldMeta.AwardingTerms}
          fieldConfig={fieldConfig}
          awardingTerms={value?.AwardingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AdditionalInformationParty,
      { meta: TenderingTermsFieldMeta.AdditionalInformationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.AdditionalInformationParty}
          meta={TenderingTermsFieldMeta.AdditionalInformationParty}
          fieldConfig={fieldConfig}
          party={value?.AdditionalInformationParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.DocumentProviderParty,
      { meta: TenderingTermsFieldMeta.DocumentProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.DocumentProviderParty}
          meta={TenderingTermsFieldMeta.DocumentProviderParty}
          fieldConfig={fieldConfig}
          party={value?.DocumentProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.TenderRecipientParty,
      { meta: TenderingTermsFieldMeta.TenderRecipientParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.TenderRecipientParty}
          meta={TenderingTermsFieldMeta.TenderRecipientParty}
          fieldConfig={fieldConfig}
          party={value?.TenderRecipientParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ContractResponsibleParty,
      { meta: TenderingTermsFieldMeta.ContractResponsibleParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.ContractResponsibleParty}
          meta={TenderingTermsFieldMeta.ContractResponsibleParty}
          fieldConfig={fieldConfig}
          party={value?.ContractResponsibleParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.TenderEvaluationParty,
      { meta: TenderingTermsFieldMeta.TenderEvaluationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.TenderEvaluationParty}
          meta={TenderingTermsFieldMeta.TenderEvaluationParty}
          fieldConfig={fieldConfig}
          party={value?.TenderEvaluationParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.QualificationRequestRecipientParty,
      { meta: TenderingTermsFieldMeta.QualificationRequestRecipientParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderingTermsField.QualificationRequestRecipientParty}
          meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty}
          fieldConfig={fieldConfig}
          party={value?.QualificationRequestRecipientParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.TenderValidityPeriod,
      { meta: TenderingTermsFieldMeta.TenderValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingTermsField.TenderValidityPeriod}
          meta={TenderingTermsFieldMeta.TenderValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.TenderValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ContractAcceptancePeriod,
      { meta: TenderingTermsFieldMeta.ContractAcceptancePeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderingTermsField.ContractAcceptancePeriod}
          meta={TenderingTermsFieldMeta.ContractAcceptancePeriod}
          fieldConfig={fieldConfig}
          period={value?.ContractAcceptancePeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.AppealTerms,
      { meta: TenderingTermsFieldMeta.AppealTerms,
        template: ({value, renderContext, fieldConfig}) => <AppealTermsDisplay
          key={TenderingTermsField.AppealTerms}
          meta={TenderingTermsFieldMeta.AppealTerms}
          fieldConfig={fieldConfig}
          appealTerms={value?.AppealTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.Language,
      { meta: TenderingTermsFieldMeta.Language,
        template: ({value, renderContext, fieldConfig}) => <LanguageDisplay
          key={TenderingTermsField.Language}
          meta={TenderingTermsFieldMeta.Language}
          fieldConfig={fieldConfig}
          language={value?.Language}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.BudgetAccountLine,
      { meta: TenderingTermsFieldMeta.BudgetAccountLine,
        template: ({value, renderContext, fieldConfig}) => <BudgetAccountLineDisplay
          key={TenderingTermsField.BudgetAccountLine}
          meta={TenderingTermsFieldMeta.BudgetAccountLine}
          fieldConfig={fieldConfig}
          budgetAccountLine={value?.BudgetAccountLine}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.ReplacedNoticeDocumentReference,
      { meta: TenderingTermsFieldMeta.ReplacedNoticeDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderingTermsField.ReplacedNoticeDocumentReference}
          meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ReplacedNoticeDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.LotDistribution,
      { meta: TenderingTermsFieldMeta.LotDistribution,
        template: ({value, renderContext, fieldConfig}) => <LotDistributionDisplay
          key={TenderingTermsField.LotDistribution}
          meta={TenderingTermsFieldMeta.LotDistribution}
          fieldConfig={fieldConfig}
          lotDistribution={value?.LotDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.PostAwardProcess,
      { meta: TenderingTermsFieldMeta.PostAwardProcess,
        template: ({value, renderContext, fieldConfig}) => <PostAwardProcessDisplay
          key={TenderingTermsField.PostAwardProcess}
          meta={TenderingTermsFieldMeta.PostAwardProcess}
          fieldConfig={fieldConfig}
          postAwardProcess={value?.PostAwardProcess}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.EconomicOperatorShortList,
      { meta: TenderingTermsFieldMeta.EconomicOperatorShortList,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorShortListDisplay
          key={TenderingTermsField.EconomicOperatorShortList}
          meta={TenderingTermsFieldMeta.EconomicOperatorShortList}
          fieldConfig={fieldConfig}
          economicOperatorShortList={value?.EconomicOperatorShortList}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.Prize,
      { meta: TenderingTermsFieldMeta.Prize,
        template: ({value, renderContext, fieldConfig}) => <PrizeDisplay
          key={TenderingTermsField.Prize}
          meta={TenderingTermsFieldMeta.Prize}
          fieldConfig={fieldConfig}
          prize={value?.Prize}
          renderContext={renderContext}
        />}
    ],

    [
      TenderingTermsField.SecurityClearanceTerm,
      { meta: TenderingTermsFieldMeta.SecurityClearanceTerm,
        template: ({value, renderContext, fieldConfig}) => <SecurityClearanceTermDisplay
          key={TenderingTermsField.SecurityClearanceTerm}
          meta={TenderingTermsFieldMeta.SecurityClearanceTerm}
          fieldConfig={fieldConfig}
          securityClearanceTerm={value?.SecurityClearanceTerm}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderingTermsDisplay<TFieldMeta>({ meta, fieldConfig, tenderingTerms, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderingTermsTypeName,
    meta,
    fieldConfig,
    tenderingTerms,
    renderContext,
    TenderingTermsSubElementsMap,
  )
}
