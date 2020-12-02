import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TenderingTerms
  meta: FieldMeta<T>
}

export default function TenderingTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AwardingMethodTypeCode} 
          value={value.AwardingMethodTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.AwardingMethodTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PriceEvaluationCode} 
          value={value.PriceEvaluationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.PriceEvaluationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.MaximumVariantQuantity} 
          value={value.MaximumVariantQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TenderingTermsFieldMeta.MaximumVariantQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.VariantConstraintIndicator} 
          value={value.VariantConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingTermsFieldMeta.VariantConstraintIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AcceptedVariantsDescription} 
          value={value.AcceptedVariantsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.AcceptedVariantsDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription} 
          value={value.PriceRevisionFormulaDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.PriceRevisionFormulaDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.FundingProgramCode} 
          value={value.FundingProgramCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.FundingProgramCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.FundingProgram} 
          value={value.FundingProgram}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.FundingProgram} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount} 
          value={value.MaximumAdvertisementAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderingTermsFieldMeta.MaximumAdvertisementAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PaymentFrequencyCode} 
          value={value.PaymentFrequencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.PaymentFrequencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI} 
          value={value.EconomicOperatorRegistryURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingTermsFieldMeta.EconomicOperatorRegistryURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator} 
          value={value.RequiredCurriculaIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingTermsFieldMeta.RequiredCurriculaIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.RequiredCurriculaCode} 
          value={value.RequiredCurriculaCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.RequiredCurriculaCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.OtherConditionsIndicator} 
          value={value.OtherConditionsIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingTermsFieldMeta.OtherConditionsIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.RecurringProcurementIndicator} 
          value={value.RecurringProcurementIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingTermsFieldMeta.RecurringProcurementIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.RecurringProcurementDescription} 
          value={value.RecurringProcurementDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.RecurringProcurementDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication} 
          value={value.EstimatedTimingFurtherPublication}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.EstimatedTimingFurtherPublication} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AdditionalConditions} 
          value={value.AdditionalConditions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingTermsFieldMeta.AdditionalConditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate} 
          value={value.LatestSecurityClearanceDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TenderingTermsFieldMeta.LatestSecurityClearanceDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.DocumentationFeeAmount} 
          value={value.DocumentationFeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={TenderingTermsFieldMeta.DocumentationFeeAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.MultipleTendersCode} 
          value={value.MultipleTendersCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.MultipleTendersCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.VariantConstraintCode} 
          value={value.VariantConstraintCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingTermsFieldMeta.VariantConstraintCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PenaltyClause} 
          value={value.PenaltyClause}
          itemDisplay={ (itemValue: Clause, key: string | number) =>
            <ClauseDisplay key={key} meta={TenderingTermsFieldMeta.PenaltyClause} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee} 
          value={value.RequiredFinancialGuarantee}
          itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
            <FinancialGuaranteeDisplay key={key} meta={TenderingTermsFieldMeta.RequiredFinancialGuarantee} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference} 
          value={value.ProcurementLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.ProcurementLegislationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference} 
          value={value.FiscalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.FiscalLegislationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference} 
          value={value.EnvironmentalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.EnvironmentalLegislationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference} 
          value={value.EmploymentLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.EmploymentLegislationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ContractualDocumentReference} 
          value={value.ContractualDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.ContractualDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.CallForTendersDocumentReference} 
          value={value.CallForTendersDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.CallForTendersDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.WarrantyValidityPeriod} 
          value={value.WarrantyValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingTermsFieldMeta.WarrantyValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TenderingTermsFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.TendererQualificationRequest} 
          value={value.TendererQualificationRequest}
          itemDisplay={ (itemValue: TendererQualificationRequest, key: string | number) =>
            <TendererQualificationRequestDisplay key={key} meta={TenderingTermsFieldMeta.TendererQualificationRequest} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AllowedSubcontractTerms} 
          value={value.AllowedSubcontractTerms}
          itemDisplay={ (itemValue: SubcontractTerms, key: string | number) =>
            <SubcontractTermsDisplay key={key} meta={TenderingTermsFieldMeta.AllowedSubcontractTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.TenderPreparation} 
          value={value.TenderPreparation}
          itemDisplay={ (itemValue: TenderPreparation, key: string | number) =>
            <TenderPreparationDisplay key={key} meta={TenderingTermsFieldMeta.TenderPreparation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ContractExecutionRequirement} 
          value={value.ContractExecutionRequirement}
          itemDisplay={ (itemValue: ContractExecutionRequirement, key: string | number) =>
            <ContractExecutionRequirementDisplay key={key} meta={TenderingTermsFieldMeta.ContractExecutionRequirement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AwardingTerms} 
          value={value.AwardingTerms}
          itemDisplay={ (itemValue: AwardingTerms, key: string | number) =>
            <AwardingTermsDisplay key={key} meta={TenderingTermsFieldMeta.AwardingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AdditionalInformationParty} 
          value={value.AdditionalInformationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.AdditionalInformationParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.DocumentProviderParty} 
          value={value.DocumentProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.DocumentProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.TenderRecipientParty} 
          value={value.TenderRecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.TenderRecipientParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ContractResponsibleParty} 
          value={value.ContractResponsibleParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.ContractResponsibleParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.TenderEvaluationParty} 
          value={value.TenderEvaluationParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.TenderEvaluationParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty} 
          value={value.QualificationRequestRecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TenderingTermsFieldMeta.QualificationRequestRecipientParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.TenderValidityPeriod} 
          value={value.TenderValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingTermsFieldMeta.TenderValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ContractAcceptancePeriod} 
          value={value.ContractAcceptancePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingTermsFieldMeta.ContractAcceptancePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay key={key} meta={TenderingTermsFieldMeta.AppealTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={TenderingTermsFieldMeta.Language} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.BudgetAccountLine} 
          value={value.BudgetAccountLine}
          itemDisplay={ (itemValue: BudgetAccountLine, key: string | number) =>
            <BudgetAccountLineDisplay key={key} meta={TenderingTermsFieldMeta.BudgetAccountLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference} 
          value={value.ReplacedNoticeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingTermsFieldMeta.ReplacedNoticeDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.LotDistribution} 
          value={value.LotDistribution}
          itemDisplay={ (itemValue: LotDistribution, key: string | number) =>
            <LotDistributionDisplay key={key} meta={TenderingTermsFieldMeta.LotDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.PostAwardProcess} 
          value={value.PostAwardProcess}
          itemDisplay={ (itemValue: PostAwardProcess, key: string | number) =>
            <PostAwardProcessDisplay key={key} meta={TenderingTermsFieldMeta.PostAwardProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.EconomicOperatorShortList} 
          value={value.EconomicOperatorShortList}
          itemDisplay={ (itemValue: EconomicOperatorShortList, key: string | number) =>
            <EconomicOperatorShortListDisplay key={key} meta={TenderingTermsFieldMeta.EconomicOperatorShortList} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.Prize} 
          value={value.Prize}
          itemDisplay={ (itemValue: Prize, key: string | number) =>
            <PrizeDisplay key={key} meta={TenderingTermsFieldMeta.Prize} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingTermsFieldMeta.SecurityClearanceTerm} 
          value={value.SecurityClearanceTerm}
          itemDisplay={ (itemValue: SecurityClearanceTerm, key: string | number) =>
            <SecurityClearanceTermDisplay key={key} meta={TenderingTermsFieldMeta.SecurityClearanceTerm} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
