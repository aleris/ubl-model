import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingProcess } from  '../../model/cac/TenderingProcess'
import { TenderingProcessFieldMeta } from  '../../meta/cac/TenderingProcessMeta'
import AuctionTermsDisplay from './AuctionTermsDisplay'
import { AuctionTerms } from '../../model/cac/AuctionTerms'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractingSystemDisplay from './ContractingSystemDisplay'
import { ContractingSystem } from '../../model/cac/ContractingSystem'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EconomicOperatorShortListDisplay from './EconomicOperatorShortListDisplay'
import { EconomicOperatorShortList } from '../../model/cac/EconomicOperatorShortList'
import EventDisplay from './EventDisplay'
import { Event } from '../../model/cac/Event'
import FrameworkAgreementDisplay from './FrameworkAgreementDisplay'
import { FrameworkAgreement } from '../../model/cac/FrameworkAgreement'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ProcessJustificationDisplay from './ProcessJustificationDisplay'
import { ProcessJustification } from '../../model/cac/ProcessJustification'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderingProcess
  meta: FieldMeta<T>
}

export default function TenderingProcessDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderingProcess ubl-TenderingProcessType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderingProcess ubl-UBLExtensions"
          meta={TenderingProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderingProcessFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Identifier ubl-ID"
          meta={TenderingProcessFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Identifier ubl-OriginalContractingSystemID"
          meta={TenderingProcessFieldMeta.OriginalContractingSystemID} 
          value={value.OriginalContractingSystemID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Original Contracting System"
              value={itemValue}
              meta={TenderingProcessFieldMeta.OriginalContractingSystemID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Text ubl-Description"
          meta={TenderingProcessFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderingProcessFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Text ubl-NegotiationDescription"
          meta={TenderingProcessFieldMeta.NegotiationDescription} 
          value={value.NegotiationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Negotiation Description"
              value={itemValue}
              meta={TenderingProcessFieldMeta.NegotiationDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-ProcedureCode"
          meta={TenderingProcessFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procedure Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ProcedureCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-UrgencyCode"
          meta={TenderingProcessFieldMeta.UrgencyCode} 
          value={value.UrgencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Urgency Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.UrgencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-ExpenseCode"
          meta={TenderingProcessFieldMeta.ExpenseCode} 
          value={value.ExpenseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Expense Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ExpenseCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-PartPresentationCode"
          meta={TenderingProcessFieldMeta.PartPresentationCode} 
          value={value.PartPresentationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Part Presentation Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.PartPresentationCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-ContractingSystemCode"
          meta={TenderingProcessFieldMeta.ContractingSystemCode} 
          value={value.ContractingSystemCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Contracting System Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ContractingSystemCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Code ubl-SubmissionMethodCode"
          meta={TenderingProcessFieldMeta.SubmissionMethodCode} 
          value={value.SubmissionMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Submission Method Code"
              value={itemValue}
              meta={TenderingProcessFieldMeta.SubmissionMethodCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Indicator ubl-CandidateReductionConstraintIndicator"
          meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator} 
          value={value.CandidateReductionConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Candidate Reduction Constraint"
              value={itemValue}
              meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Indicator ubl-GovernmentAgreementConstraintIndicator"
          meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator} 
          value={value.GovernmentAgreementConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Government Agreement Constraint"
              value={itemValue}
              meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Identifier ubl-AccessToolsURI"
          meta={TenderingProcessFieldMeta.AccessToolsURI} 
          value={value.AccessToolsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Access Tools URI"
              value={itemValue}
              meta={TenderingProcessFieldMeta.AccessToolsURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderingProcess ubl-Indicator ubl-TerminatedIndicator"
          meta={TenderingProcessFieldMeta.TerminatedIndicator} 
          value={value.TerminatedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Terminated"
              value={itemValue}
              meta={TenderingProcessFieldMeta.TerminatedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-DocumentAvailabilityPeriod"
          meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod} 
          value={value.DocumentAvailabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Document Availability Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-TenderSubmissionDeadlinePeriod"
          meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod} 
          value={value.TenderSubmissionDeadlinePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Tender Submission Deadline Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-InvitationSubmissionPeriod"
          meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod} 
          value={value.InvitationSubmissionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invitation Submission Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-ParticipationInvitationPeriod"
          meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod} 
          value={value.ParticipationInvitationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Participation Invitation Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-ParticipationRequestReceptionPeriod"
          meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod} 
          value={value.ParticipationRequestReceptionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Participation Request Reception Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Period ubl-AdditionalInformationRequestPeriod"
          meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod} 
          value={value.AdditionalInformationRequestPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Additional Information Request Period"
              value={itemValue}
              meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-DocumentReference ubl-NoticeDocumentReference"
          meta={TenderingProcessFieldMeta.NoticeDocumentReference} 
          value={value.NoticeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Notice Document Reference"
              value={itemValue}
              meta={TenderingProcessFieldMeta.NoticeDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={TenderingProcessFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={TenderingProcessFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-ProcessJustification"
          meta={TenderingProcessFieldMeta.ProcessJustification} 
          value={value.ProcessJustification}
          itemDisplay={ (itemValue: ProcessJustification, key: string | number) =>
            <ProcessJustificationDisplay
              key={key}
              label="Process Justification"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ProcessJustification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-EconomicOperatorShortList"
          meta={TenderingProcessFieldMeta.EconomicOperatorShortList} 
          value={value.EconomicOperatorShortList}
          itemDisplay={ (itemValue: EconomicOperatorShortList, key: string | number) =>
            <EconomicOperatorShortListDisplay
              key={key}
              label="Economic Operator Short List"
              value={itemValue}
              meta={TenderingProcessFieldMeta.EconomicOperatorShortList}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-Event ubl-OpenTenderEvent"
          meta={TenderingProcessFieldMeta.OpenTenderEvent} 
          value={value.OpenTenderEvent}
          itemDisplay={ (itemValue: Event, key: string | number) =>
            <EventDisplay
              key={key}
              label="Open Tender Event"
              value={itemValue}
              meta={TenderingProcessFieldMeta.OpenTenderEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-AuctionTerms"
          meta={TenderingProcessFieldMeta.AuctionTerms} 
          value={value.AuctionTerms}
          itemDisplay={ (itemValue: AuctionTerms, key: string | number) =>
            <AuctionTermsDisplay
              key={key}
              label="Auction Terms"
              value={itemValue}
              meta={TenderingProcessFieldMeta.AuctionTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderingProcess ubl-FrameworkAgreement"
          meta={TenderingProcessFieldMeta.FrameworkAgreement} 
          value={value.FrameworkAgreement}
          itemDisplay={ (itemValue: FrameworkAgreement, key: string | number) =>
            <FrameworkAgreementDisplay
              key={key}
              label="Framework Agreement"
              value={itemValue}
              meta={TenderingProcessFieldMeta.FrameworkAgreement}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderingProcess ubl-ContractingSystem"
          meta={TenderingProcessFieldMeta.ContractingSystem} 
          value={value.ContractingSystem}
          itemDisplay={ (itemValue: ContractingSystem, key: string | number) =>
            <ContractingSystemDisplay
              key={key}
              label="Contracting System"
              value={itemValue}
              meta={TenderingProcessFieldMeta.ContractingSystem}
            />
          }
        />
        </div>
    </div>
  )
}
