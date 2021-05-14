import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderingTerms
  meta: FieldMeta<T>
}

export default function TenderingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingTerms ubl-TenderingTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingTerms ubl-UBLExtensions"
          meta={TenderingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-AwardingMethodTypeCode"
          meta={TenderingTermsFieldMeta.AwardingMethodTypeCode} 
          value={value.AwardingMethodTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Awarding Method Type Code"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AwardingMethodTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-PriceEvaluationCode"
          meta={TenderingTermsFieldMeta.PriceEvaluationCode} 
          value={value.PriceEvaluationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Price Evaluation Code"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PriceEvaluationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Quantity ubl-MaximumVariantQuantity"
          meta={TenderingTermsFieldMeta.MaximumVariantQuantity} 
          value={value.MaximumVariantQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Variant Quantity"
              value={itemValue}
              meta={TenderingTermsFieldMeta.MaximumVariantQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Indicator ubl-VariantConstraintIndicator"
          meta={TenderingTermsFieldMeta.VariantConstraintIndicator} 
          value={value.VariantConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Variant Constraint"
              value={itemValue}
              meta={TenderingTermsFieldMeta.VariantConstraintIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-AcceptedVariantsDescription"
          meta={TenderingTermsFieldMeta.AcceptedVariantsDescription} 
          value={value.AcceptedVariantsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accepted Variants Description"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AcceptedVariantsDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-PriceRevisionFormulaDescription"
          meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription} 
          value={value.PriceRevisionFormulaDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Price Revision Formula Description"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-FundingProgramCode"
          meta={TenderingTermsFieldMeta.FundingProgramCode} 
          value={value.FundingProgramCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Funding Program Code"
              value={itemValue}
              meta={TenderingTermsFieldMeta.FundingProgramCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-FundingProgram"
          meta={TenderingTermsFieldMeta.FundingProgram} 
          value={value.FundingProgram}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Funding Program"
              value={itemValue}
              meta={TenderingTermsFieldMeta.FundingProgram}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Amount ubl-MaximumAdvertisementAmount"
          meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount} 
          value={value.MaximumAdvertisementAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Advertisement"
              value={itemValue}
              meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-Note"
          meta={TenderingTermsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TenderingTermsFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-PaymentFrequencyCode"
          meta={TenderingTermsFieldMeta.PaymentFrequencyCode} 
          value={value.PaymentFrequencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Frequency Code"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PaymentFrequencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Identifier ubl-EconomicOperatorRegistryURI"
          meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI} 
          value={value.EconomicOperatorRegistryURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Economic Operator Registry URI"
              value={itemValue}
              meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Indicator ubl-RequiredCurriculaIndicator"
          meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator} 
          value={value.RequiredCurriculaIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Required Curricula"
              value={itemValue}
              meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-RequiredCurriculaCode"
          meta={TenderingTermsFieldMeta.RequiredCurriculaCode} 
          value={value.RequiredCurriculaCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Required Curricula"
              value={itemValue}
              meta={TenderingTermsFieldMeta.RequiredCurriculaCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Indicator ubl-OtherConditionsIndicator"
          meta={TenderingTermsFieldMeta.OtherConditionsIndicator} 
          value={value.OtherConditionsIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Other Conditions"
              value={itemValue}
              meta={TenderingTermsFieldMeta.OtherConditionsIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Indicator ubl-RecurringProcurementIndicator"
          meta={TenderingTermsFieldMeta.RecurringProcurementIndicator} 
          value={value.RecurringProcurementIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Recurring Procurement"
              value={itemValue}
              meta={TenderingTermsFieldMeta.RecurringProcurementIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-RecurringProcurementDescription"
          meta={TenderingTermsFieldMeta.RecurringProcurementDescription} 
          value={value.RecurringProcurementDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Recurring Procurement Description"
              value={itemValue}
              meta={TenderingTermsFieldMeta.RecurringProcurementDescription}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-EstimatedTimingFurtherPublication"
          meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication} 
          value={value.EstimatedTimingFurtherPublication}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Estimated Timing Further Publication"
              value={itemValue}
              meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Text ubl-AdditionalConditions"
          meta={TenderingTermsFieldMeta.AdditionalConditions} 
          value={value.AdditionalConditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Additional Conditions"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AdditionalConditions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Date ubl-LatestSecurityClearanceDate"
          meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate} 
          value={value.LatestSecurityClearanceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Security Clearance Date"
              value={itemValue}
              meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Amount ubl-DocumentationFeeAmount"
          meta={TenderingTermsFieldMeta.DocumentationFeeAmount} 
          value={value.DocumentationFeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Documentation Fee Amount"
              value={itemValue}
              meta={TenderingTermsFieldMeta.DocumentationFeeAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-MultipleTendersCode"
          meta={TenderingTermsFieldMeta.MultipleTendersCode} 
          value={value.MultipleTendersCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Multiple Tenders"
              value={itemValue}
              meta={TenderingTermsFieldMeta.MultipleTendersCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingTerms ubl-Code ubl-VariantConstraintCode"
          meta={TenderingTermsFieldMeta.VariantConstraintCode} 
          value={value.VariantConstraintCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Variant Constraint"
              value={itemValue}
              meta={TenderingTermsFieldMeta.VariantConstraintCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Clause ubl-PenaltyClause"
          meta={TenderingTermsFieldMeta.PenaltyClause} 
          value={value.PenaltyClause}
          itemDisplay={ (itemValue: Clause, key: string | number) =>
            <ClauseDisplay
              key={key}
              label="Penalty Clause"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PenaltyClause}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-FinancialGuarantee ubl-RequiredFinancialGuarantee"
          meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee} 
          value={value.RequiredFinancialGuarantee}
          itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
            <FinancialGuaranteeDisplay
              key={key}
              label="Required Financial Guarantee"
              value={itemValue}
              meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-ProcurementLegislationDocumentReference"
          meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference} 
          value={value.ProcurementLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Procurement Legislation Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-FiscalLegislationDocumentReference"
          meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference} 
          value={value.FiscalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Fiscal Legislation Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-EnvironmentalLegislationDocumentReference"
          meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference} 
          value={value.EnvironmentalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Environmental Legislation Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-EmploymentLegislationDocumentReference"
          meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference} 
          value={value.EmploymentLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Employment Legislation Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-ContractualDocumentReference"
          meta={TenderingTermsFieldMeta.ContractualDocumentReference} 
          value={value.ContractualDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contractual Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ContractualDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-CallForTendersDocumentReference"
          meta={TenderingTermsFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Call For Tenders Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.CallForTendersDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Period ubl-WarrantyValidityPeriod"
          meta={TenderingTermsFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Warranty Validity Period"
              value={itemValue}
              meta={TenderingTermsFieldMeta.WarrantyValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-PaymentTerms"
          meta={TenderingTermsFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-TendererQualificationRequest"
          meta={TenderingTermsFieldMeta.TendererQualificationRequest} 
          value={value.TendererQualificationRequest}
          itemDisplay={ (itemValue: TendererQualificationRequest, key: string | number) =>
            <TendererQualificationRequestDisplay
              key={key}
              label="Tenderer Qualification Request"
              value={itemValue}
              meta={TenderingTermsFieldMeta.TendererQualificationRequest}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-SubcontractTerms ubl-AllowedSubcontractTerms"
          meta={TenderingTermsFieldMeta.AllowedSubcontractTerms} 
          value={value.AllowedSubcontractTerms}
          itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
            <SubcontractTermsDisplay
              key={key}
              label="Allowed Subcontract Terms"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AllowedSubcontractTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-TenderPreparation"
          meta={TenderingTermsFieldMeta.TenderPreparation} 
          value={value.TenderPreparation}
          itemDisplay={ (itemValue: TenderPreparation, key: string | number) =>
            <TenderPreparationDisplay
              key={key}
              label="Tender Preparation"
              value={itemValue}
              meta={TenderingTermsFieldMeta.TenderPreparation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-ContractExecutionRequirement"
          meta={TenderingTermsFieldMeta.ContractExecutionRequirement} 
          value={value.ContractExecutionRequirement}
          itemDisplay={ (itemValue: ContractExecutionRequirement, key: string | number) =>
            <ContractExecutionRequirementDisplay
              key={key}
              label="Contract Execution Requirement"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ContractExecutionRequirement}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-AwardingTerms"
          meta={TenderingTermsFieldMeta.AwardingTerms} 
          value={value.AwardingTerms}
          itemDisplay={ (itemValue: AwardingTerms, key: string | number) =>
            <AwardingTermsDisplay
              key={key}
              label="Awarding Terms"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AwardingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-AdditionalInformationParty"
          meta={TenderingTermsFieldMeta.AdditionalInformationParty} 
          value={value.AdditionalInformationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Additional Information Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AdditionalInformationParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-DocumentProviderParty"
          meta={TenderingTermsFieldMeta.DocumentProviderParty} 
          value={value.DocumentProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Document Provider Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.DocumentProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-TenderRecipientParty"
          meta={TenderingTermsFieldMeta.TenderRecipientParty} 
          value={value.TenderRecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tender Recipient Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.TenderRecipientParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-ContractResponsibleParty"
          meta={TenderingTermsFieldMeta.ContractResponsibleParty} 
          value={value.ContractResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Contract Responsible Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ContractResponsibleParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-TenderEvaluationParty"
          meta={TenderingTermsFieldMeta.TenderEvaluationParty} 
          value={value.TenderEvaluationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tender Evaluation Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.TenderEvaluationParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Party ubl-QualificationRequestRecipientParty"
          meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty} 
          value={value.QualificationRequestRecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Qualification Request Recipient Party"
              value={itemValue}
              meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Period ubl-TenderValidityPeriod"
          meta={TenderingTermsFieldMeta.TenderValidityPeriod} 
          value={value.TenderValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Tender Validity Period"
              value={itemValue}
              meta={TenderingTermsFieldMeta.TenderValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Period ubl-ContractAcceptancePeriod"
          meta={TenderingTermsFieldMeta.ContractAcceptancePeriod} 
          value={value.ContractAcceptancePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Contract Acceptance Period"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ContractAcceptancePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-AppealTerms"
          meta={TenderingTermsFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay
              key={key}
              label="Appeal Terms"
              value={itemValue}
              meta={TenderingTermsFieldMeta.AppealTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Language"
          meta={TenderingTermsFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={TenderingTermsFieldMeta.Language}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-BudgetAccountLine"
          meta={TenderingTermsFieldMeta.BudgetAccountLine} 
          value={value.BudgetAccountLine}
          itemDisplay={ (itemValue: BudgetAccountLine, key: string | number) =>
            <BudgetAccountLineDisplay
              key={key}
              label="Budget Account Line"
              value={itemValue}
              meta={TenderingTermsFieldMeta.BudgetAccountLine}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-DocumentReference ubl-ReplacedNoticeDocumentReference"
          meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference} 
          value={value.ReplacedNoticeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Replaced Notice Document Reference"
              value={itemValue}
              meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-LotDistribution"
          meta={TenderingTermsFieldMeta.LotDistribution} 
          value={value.LotDistribution}
          itemDisplay={ (itemValue: LotDistribution, key: string | number) =>
            <LotDistributionDisplay
              key={key}
              label="Lot Distribution"
              value={itemValue}
              meta={TenderingTermsFieldMeta.LotDistribution}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-PostAwardProcess"
          meta={TenderingTermsFieldMeta.PostAwardProcess} 
          value={value.PostAwardProcess}
          itemDisplay={ (itemValue: PostAwardProcess, key: string | number) =>
            <PostAwardProcessDisplay
              key={key}
              label="Post Award Process"
              value={itemValue}
              meta={TenderingTermsFieldMeta.PostAwardProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingTerms ubl-EconomicOperatorShortList"
          meta={TenderingTermsFieldMeta.EconomicOperatorShortList} 
          value={value.EconomicOperatorShortList}
          itemDisplay={ (itemValue: EconomicOperatorShortList, key: string | number) =>
            <EconomicOperatorShortListDisplay
              key={key}
              label="Economic Operator Short List"
              value={itemValue}
              meta={TenderingTermsFieldMeta.EconomicOperatorShortList}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-Prize"
          meta={TenderingTermsFieldMeta.Prize} 
          value={value.Prize}
          itemDisplay={ (itemValue: Prize, key: string | number) =>
            <PrizeDisplay
              key={key}
              label="Prize"
              value={itemValue}
              meta={TenderingTermsFieldMeta.Prize}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingTerms ubl-SecurityClearanceTerm"
          meta={TenderingTermsFieldMeta.SecurityClearanceTerm} 
          value={value.SecurityClearanceTerm}
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
