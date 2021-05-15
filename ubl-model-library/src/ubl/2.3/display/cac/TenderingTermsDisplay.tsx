import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingTerms } from  '../../model/cac/TenderingTerms'
import { TenderingTermsFieldMeta } from  '../../meta/cac/TenderingTermsMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import AppealTermsDisplay from './AppealTermsDisplay'
import { AppealTerms } from '../../model/cac/AppealTerms'
import AwardingTermsDisplay from './AwardingTermsDisplay'
import { AwardingTerms } from '../../model/cac/AwardingTerms'
import BudgetAccountLineDisplay from './BudgetAccountLineDisplay'
import { BudgetAccountLine } from '../../model/cac/BudgetAccountLine'
import ClauseDisplay from './ClauseDisplay'
import { Clause } from '../../model/cac/Clause'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractExecutionRequirementDisplay from './ContractExecutionRequirementDisplay'
import { ContractExecutionRequirement } from '../../model/cac/ContractExecutionRequirement'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EconomicOperatorShortListDisplay from './EconomicOperatorShortListDisplay'
import { EconomicOperatorShortList } from '../../model/cac/EconomicOperatorShortList'
import FinancialGuaranteeDisplay from './FinancialGuaranteeDisplay'
import { FinancialGuarantee } from '../../model/cac/FinancialGuarantee'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LanguageDisplay from './LanguageDisplay'
import { Language } from '../../model/cac/Language'
import LotDistributionDisplay from './LotDistributionDisplay'
import { LotDistribution } from '../../model/cac/LotDistribution'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PostAwardProcessDisplay from './PostAwardProcessDisplay'
import { PostAwardProcess } from '../../model/cac/PostAwardProcess'
import PrizeDisplay from './PrizeDisplay'
import { Prize } from '../../model/cac/Prize'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import SecurityClearanceTermDisplay from './SecurityClearanceTermDisplay'
import { SecurityClearanceTerm } from '../../model/cac/SecurityClearanceTerm'
import SubcontractTermsDisplay from './SubcontractTermsDisplay'
import { SubcontractTerms } from '../../model/cac/SubcontractTerms'
import TendererQualificationRequestDisplay from './TendererQualificationRequestDisplay'
import { TendererQualificationRequest } from '../../model/cac/TendererQualificationRequest'
import TenderPreparationDisplay from './TenderPreparationDisplay'
import { TenderPreparation } from '../../model/cac/TenderPreparation'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderingTerms | undefined
  meta: FieldMeta<T>
}

export default function TenderingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingTermsFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Awarding Method Type Code"
            value={value.AwardingMethodTypeCode?.[0]}
            meta={TenderingTermsFieldMeta.AwardingMethodTypeCode}
          />

          <CodeDisplay
            label="Price Evaluation Code"
            value={value.PriceEvaluationCode?.[0]}
            meta={TenderingTermsFieldMeta.PriceEvaluationCode}
          />

          <QuantityDisplay
            label="Maximum Variant Quantity"
            value={value.MaximumVariantQuantity?.[0]}
            meta={TenderingTermsFieldMeta.MaximumVariantQuantity}
          />

          <IndicatorDisplay
            label="Variant Constraint"
            value={value.VariantConstraintIndicator?.[0]}
            meta={TenderingTermsFieldMeta.VariantConstraintIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AcceptedVariantsDescription"
            label="Accepted Variants Description"
            items={value.AcceptedVariantsDescription}
            meta={TenderingTermsFieldMeta.AcceptedVariantsDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Accepted Variants Description"
                value={itemValue}
                meta={TenderingTermsFieldMeta.AcceptedVariantsDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-PriceRevisionFormulaDescription"
            label="Price Revision Formula Description"
            items={value.PriceRevisionFormulaDescription}
            meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Price Revision Formula Description"
                value={itemValue}
                meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription}
              />
            }
          />

          <CodeDisplay
            label="Funding Program Code"
            value={value.FundingProgramCode?.[0]}
            meta={TenderingTermsFieldMeta.FundingProgramCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-FundingProgram"
            label="Funding Program"
            items={value.FundingProgram}
            meta={TenderingTermsFieldMeta.FundingProgram} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Funding Program"
                value={itemValue}
                meta={TenderingTermsFieldMeta.FundingProgram}
              />
            }
          />

          <AmountDisplay
            label="Maximum Advertisement"
            value={value.MaximumAdvertisementAmount?.[0]}
            meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TenderingTermsFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TenderingTermsFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Payment Frequency Code"
            value={value.PaymentFrequencyCode?.[0]}
            meta={TenderingTermsFieldMeta.PaymentFrequencyCode}
          />

          <IdentifierDisplay
            label="Economic Operator Registry URI"
            value={value.EconomicOperatorRegistryURI?.[0]}
            meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI}
          />

          <IndicatorDisplay
            label="Required Curricula"
            value={value.RequiredCurriculaIndicator?.[0]}
            meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator}
          />

          <CodeDisplay
            label="Required Curricula"
            value={value.RequiredCurriculaCode?.[0]}
            meta={TenderingTermsFieldMeta.RequiredCurriculaCode}
          />

          <IndicatorDisplay
            label="Other Conditions"
            value={value.OtherConditionsIndicator?.[0]}
            meta={TenderingTermsFieldMeta.OtherConditionsIndicator}
          />

          <IndicatorDisplay
            label="Recurring Procurement"
            value={value.RecurringProcurementIndicator?.[0]}
            meta={TenderingTermsFieldMeta.RecurringProcurementIndicator}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-RecurringProcurementDescription"
            label="Recurring Procurement Description"
            items={value.RecurringProcurementDescription}
            meta={TenderingTermsFieldMeta.RecurringProcurementDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Recurring Procurement Description"
                value={itemValue}
                meta={TenderingTermsFieldMeta.RecurringProcurementDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-EstimatedTimingFurtherPublication"
            label="Estimated Timing Further Publication"
            items={value.EstimatedTimingFurtherPublication}
            meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Estimated Timing Further Publication"
                value={itemValue}
                meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-AdditionalConditions"
            label="Additional Conditions"
            items={value.AdditionalConditions}
            meta={TenderingTermsFieldMeta.AdditionalConditions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Additional Conditions"
                value={itemValue}
                meta={TenderingTermsFieldMeta.AdditionalConditions}
              />
            }
          />

          <DateDisplay
            label="Latest Security Clearance Date"
            value={value.LatestSecurityClearanceDate?.[0]}
            meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate}
          />

          <AmountDisplay
            label="Documentation Fee Amount"
            value={value.DocumentationFeeAmount?.[0]}
            meta={TenderingTermsFieldMeta.DocumentationFeeAmount}
          />

          <CodeDisplay
            label="Multiple Tenders"
            value={value.MultipleTendersCode?.[0]}
            meta={TenderingTermsFieldMeta.MultipleTendersCode}
          />

          <CodeDisplay
            label="Variant Constraint"
            value={value.VariantConstraintCode?.[0]}
            meta={TenderingTermsFieldMeta.VariantConstraintCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Clause ubl-PenaltyClause"
            label="Penalty Clause"
            items={value.PenaltyClause}
            meta={TenderingTermsFieldMeta.PenaltyClause} 
            itemDisplay={ (itemValue: Clause, key: string | number) =>
              <ClauseDisplay
                key={key}
                label="Penalty Clause"
                value={itemValue}
                meta={TenderingTermsFieldMeta.PenaltyClause}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-FinancialGuarantee ubl-RequiredFinancialGuarantee"
            label="Required Financial Guarantee"
            items={value.RequiredFinancialGuarantee}
            meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee} 
            itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
              <FinancialGuaranteeDisplay
                key={key}
                label="Required Financial Guarantee"
                value={itemValue}
                meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Procurement Legislation Document Reference"
            value={value.ProcurementLegislationDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Fiscal Legislation Document Reference"
            value={value.FiscalLegislationDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Environmental Legislation Document Reference"
            value={value.EnvironmentalLegislationDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Employment Legislation Document Reference"
            value={value.EmploymentLegislationDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ContractualDocumentReference"
            label="Contractual Document Reference"
            items={value.ContractualDocumentReference}
            meta={TenderingTermsFieldMeta.ContractualDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contractual Document Reference"
                value={itemValue}
                meta={TenderingTermsFieldMeta.ContractualDocumentReference}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Call For Tenders Document Reference"
            value={value.CallForTendersDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.CallForTendersDocumentReference}
          />

          <PeriodDisplay
            label="Warranty Validity Period"
            value={value.WarrantyValidityPeriod?.[0]}
            meta={TenderingTermsFieldMeta.WarrantyValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={TenderingTermsFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={TenderingTermsFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TendererQualificationRequest"
            label="Tenderer Qualification Request"
            items={value.TendererQualificationRequest}
            meta={TenderingTermsFieldMeta.TendererQualificationRequest} 
            itemDisplay={ (itemValue: TendererQualificationRequest, key: string | number) =>
              <TendererQualificationRequestDisplay
                key={key}
                label="Tenderer Qualification Request"
                value={itemValue}
                meta={TenderingTermsFieldMeta.TendererQualificationRequest}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-SubcontractTerms ubl-AllowedSubcontractTerms"
            label="Allowed Subcontract Terms"
            items={value.AllowedSubcontractTerms}
            meta={TenderingTermsFieldMeta.AllowedSubcontractTerms} 
            itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
              <SubcontractTermsDisplay
                key={key}
                label="Allowed Subcontract Terms"
                value={itemValue}
                meta={TenderingTermsFieldMeta.AllowedSubcontractTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderPreparation"
            label="Tender Preparation"
            items={value.TenderPreparation}
            meta={TenderingTermsFieldMeta.TenderPreparation} 
            itemDisplay={ (itemValue: TenderPreparation, key: string | number) =>
              <TenderPreparationDisplay
                key={key}
                label="Tender Preparation"
                value={itemValue}
                meta={TenderingTermsFieldMeta.TenderPreparation}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ContractExecutionRequirement"
            label="Contract Execution Requirement"
            items={value.ContractExecutionRequirement}
            meta={TenderingTermsFieldMeta.ContractExecutionRequirement} 
            itemDisplay={ (itemValue: ContractExecutionRequirement, key: string | number) =>
              <ContractExecutionRequirementDisplay
                key={key}
                label="Contract Execution Requirement"
                value={itemValue}
                meta={TenderingTermsFieldMeta.ContractExecutionRequirement}
              />
            }
          />

          <AwardingTermsDisplay
            label="Awarding Terms"
            value={value.AwardingTerms?.[0]}
            meta={TenderingTermsFieldMeta.AwardingTerms}
          />

          <PartyDisplay
            label="Additional Information Party"
            value={value.AdditionalInformationParty?.[0]}
            meta={TenderingTermsFieldMeta.AdditionalInformationParty}
          />

          <PartyDisplay
            label="Document Provider Party"
            value={value.DocumentProviderParty?.[0]}
            meta={TenderingTermsFieldMeta.DocumentProviderParty}
          />

          <PartyDisplay
            label="Tender Recipient Party"
            value={value.TenderRecipientParty?.[0]}
            meta={TenderingTermsFieldMeta.TenderRecipientParty}
          />

          <PartyDisplay
            label="Contract Responsible Party"
            value={value.ContractResponsibleParty?.[0]}
            meta={TenderingTermsFieldMeta.ContractResponsibleParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-TenderEvaluationParty"
            label="Tender Evaluation Party"
            items={value.TenderEvaluationParty}
            meta={TenderingTermsFieldMeta.TenderEvaluationParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Tender Evaluation Party"
                value={itemValue}
                meta={TenderingTermsFieldMeta.TenderEvaluationParty}
              />
            }
          />

          <PartyDisplay
            label="Qualification Request Recipient Party"
            value={value.QualificationRequestRecipientParty?.[0]}
            meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty}
          />

          <PeriodDisplay
            label="Tender Validity Period"
            value={value.TenderValidityPeriod?.[0]}
            meta={TenderingTermsFieldMeta.TenderValidityPeriod}
          />

          <PeriodDisplay
            label="Contract Acceptance Period"
            value={value.ContractAcceptancePeriod?.[0]}
            meta={TenderingTermsFieldMeta.ContractAcceptancePeriod}
          />

          <AppealTermsDisplay
            label="Appeal Terms"
            value={value.AppealTerms?.[0]}
            meta={TenderingTermsFieldMeta.AppealTerms}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Language"
            label="Language"
            items={value.Language}
            meta={TenderingTermsFieldMeta.Language} 
            itemDisplay={ (itemValue: Language, key: string | number) =>
              <LanguageDisplay
                key={key}
                label="Language"
                value={itemValue}
                meta={TenderingTermsFieldMeta.Language}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BudgetAccountLine"
            label="Budget Account Line"
            items={value.BudgetAccountLine}
            meta={TenderingTermsFieldMeta.BudgetAccountLine} 
            itemDisplay={ (itemValue: BudgetAccountLine, key: string | number) =>
              <BudgetAccountLineDisplay
                key={key}
                label="Budget Account Line"
                value={itemValue}
                meta={TenderingTermsFieldMeta.BudgetAccountLine}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Replaced Notice Document Reference"
            value={value.ReplacedNoticeDocumentReference?.[0]}
            meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference}
          />

          <LotDistributionDisplay
            label="Lot Distribution"
            value={value.LotDistribution?.[0]}
            meta={TenderingTermsFieldMeta.LotDistribution}
          />

          <PostAwardProcessDisplay
            label="Post Award Process"
            value={value.PostAwardProcess?.[0]}
            meta={TenderingTermsFieldMeta.PostAwardProcess}
          />

          <EconomicOperatorShortListDisplay
            label="Economic Operator Short List"
            value={value.EconomicOperatorShortList?.[0]}
            meta={TenderingTermsFieldMeta.EconomicOperatorShortList}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Prize"
            label="Prize"
            items={value.Prize}
            meta={TenderingTermsFieldMeta.Prize} 
            itemDisplay={ (itemValue: Prize, key: string | number) =>
              <PrizeDisplay
                key={key}
                label="Prize"
                value={itemValue}
                meta={TenderingTermsFieldMeta.Prize}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-SecurityClearanceTerm"
            label="Security Clearance Term"
            items={value.SecurityClearanceTerm}
            meta={TenderingTermsFieldMeta.SecurityClearanceTerm} 
            itemDisplay={ (itemValue: SecurityClearanceTerm, key: string | number) =>
              <SecurityClearanceTermDisplay
                key={key}
                label="Security Clearance Term"
                value={itemValue}
                meta={TenderingTermsFieldMeta.SecurityClearanceTerm}
              />
            }
          />
        </div>
    </div>
  )
}
