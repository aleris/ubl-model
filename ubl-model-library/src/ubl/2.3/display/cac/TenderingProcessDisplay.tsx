import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TenderingProcess | undefined
  meta: FieldMeta<T>
}

export default function TenderingProcessDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingProcess">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingProcessFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderingProcessFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Original Contracting System"
            value={value.OriginalContractingSystemID?.[0]}
            meta={TenderingProcessFieldMeta.OriginalContractingSystemID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderingProcessFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderingProcessFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-NegotiationDescription"
            label="Negotiation Description"
            items={value.NegotiationDescription}
            meta={TenderingProcessFieldMeta.NegotiationDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Negotiation Description"
                value={itemValue}
                meta={TenderingProcessFieldMeta.NegotiationDescription}
              />
            }
          />

          <CodeDisplay
            label="Procedure Code"
            value={value.ProcedureCode?.[0]}
            meta={TenderingProcessFieldMeta.ProcedureCode}
          />

          <CodeDisplay
            label="Urgency Code"
            value={value.UrgencyCode?.[0]}
            meta={TenderingProcessFieldMeta.UrgencyCode}
          />

          <CodeDisplay
            label="Expense Code"
            value={value.ExpenseCode?.[0]}
            meta={TenderingProcessFieldMeta.ExpenseCode}
          />

          <CodeDisplay
            label="Part Presentation Code"
            value={value.PartPresentationCode?.[0]}
            meta={TenderingProcessFieldMeta.PartPresentationCode}
          />

          <CodeDisplay
            label="Contracting System Code"
            value={value.ContractingSystemCode?.[0]}
            meta={TenderingProcessFieldMeta.ContractingSystemCode}
          />

          <CodeDisplay
            label="Submission Method Code"
            value={value.SubmissionMethodCode?.[0]}
            meta={TenderingProcessFieldMeta.SubmissionMethodCode}
          />

          <IndicatorDisplay
            label="Candidate Reduction Constraint"
            value={value.CandidateReductionConstraintIndicator?.[0]}
            meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator}
          />

          <IndicatorDisplay
            label="Government Agreement Constraint"
            value={value.GovernmentAgreementConstraintIndicator?.[0]}
            meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator}
          />

          <IdentifierDisplay
            label="Access Tools URI"
            value={value.AccessToolsURI?.[0]}
            meta={TenderingProcessFieldMeta.AccessToolsURI}
          />

          <IndicatorDisplay
            label="Terminated"
            value={value.TerminatedIndicator?.[0]}
            meta={TenderingProcessFieldMeta.TerminatedIndicator}
          />

          <PeriodDisplay
            label="Document Availability Period"
            value={value.DocumentAvailabilityPeriod?.[0]}
            meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod}
          />

          <PeriodDisplay
            label="Tender Submission Deadline Period"
            value={value.TenderSubmissionDeadlinePeriod?.[0]}
            meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod}
          />

          <PeriodDisplay
            label="Invitation Submission Period"
            value={value.InvitationSubmissionPeriod?.[0]}
            meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod}
          />

          <PeriodDisplay
            label="Participation Invitation Period"
            value={value.ParticipationInvitationPeriod?.[0]}
            meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod}
          />

          <PeriodDisplay
            label="Participation Request Reception Period"
            value={value.ParticipationRequestReceptionPeriod?.[0]}
            meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod}
          />

          <PeriodDisplay
            label="Additional Information Request Period"
            value={value.AdditionalInformationRequestPeriod?.[0]}
            meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-NoticeDocumentReference"
            label="Notice Document Reference"
            items={value.NoticeDocumentReference}
            meta={TenderingProcessFieldMeta.NoticeDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Notice Document Reference"
                value={itemValue}
                meta={TenderingProcessFieldMeta.NoticeDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={TenderingProcessFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={TenderingProcessFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ProcessJustification"
            label="Process Justification"
            items={value.ProcessJustification}
            meta={TenderingProcessFieldMeta.ProcessJustification} 
            itemDisplay={ (itemValue: ProcessJustification, key: string | number) =>
              <ProcessJustificationDisplay
                key={key}
                label="Process Justification"
                value={itemValue}
                meta={TenderingProcessFieldMeta.ProcessJustification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EconomicOperatorShortList"
            label="Economic Operator Short List"
            items={value.EconomicOperatorShortList}
            meta={TenderingProcessFieldMeta.EconomicOperatorShortList} 
            itemDisplay={ (itemValue: EconomicOperatorShortList, key: string | number) =>
              <EconomicOperatorShortListDisplay
                key={key}
                label="Economic Operator Short List"
                value={itemValue}
                meta={TenderingProcessFieldMeta.EconomicOperatorShortList}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Event ubl-OpenTenderEvent"
            label="Open Tender Event"
            items={value.OpenTenderEvent}
            meta={TenderingProcessFieldMeta.OpenTenderEvent} 
            itemDisplay={ (itemValue: Event, key: string | number) =>
              <EventDisplay
                key={key}
                label="Open Tender Event"
                value={itemValue}
                meta={TenderingProcessFieldMeta.OpenTenderEvent}
              />
            }
          />

          <AuctionTermsDisplay
            label="Auction Terms"
            value={value.AuctionTerms?.[0]}
            meta={TenderingProcessFieldMeta.AuctionTerms}
          />

          <FrameworkAgreementDisplay
            label="Framework Agreement"
            value={value.FrameworkAgreement?.[0]}
            meta={TenderingProcessFieldMeta.FrameworkAgreement}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ContractingSystem"
            label="Contracting System"
            items={value.ContractingSystem}
            meta={TenderingProcessFieldMeta.ContractingSystem} 
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
