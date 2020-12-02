import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TenderingProcess
  meta: FieldMeta<T>
}

export default function TenderingProcessDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderingProcessFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderingProcessFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingProcessFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.OriginalContractingSystemID} 
          value={value.OriginalContractingSystemID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingProcessFieldMeta.OriginalContractingSystemID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingProcessFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.NegotiationDescription} 
          value={value.NegotiationDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderingProcessFieldMeta.NegotiationDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.ProcedureCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.UrgencyCode} 
          value={value.UrgencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.UrgencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ExpenseCode} 
          value={value.ExpenseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.ExpenseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.PartPresentationCode} 
          value={value.PartPresentationCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.PartPresentationCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ContractingSystemCode} 
          value={value.ContractingSystemCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.ContractingSystemCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.SubmissionMethodCode} 
          value={value.SubmissionMethodCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TenderingProcessFieldMeta.SubmissionMethodCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator} 
          value={value.CandidateReductionConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingProcessFieldMeta.CandidateReductionConstraintIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator} 
          value={value.GovernmentAgreementConstraintIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingProcessFieldMeta.GovernmentAgreementConstraintIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.AccessToolsURI} 
          value={value.AccessToolsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TenderingProcessFieldMeta.AccessToolsURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.TerminatedIndicator} 
          value={value.TerminatedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TenderingProcessFieldMeta.TerminatedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod} 
          value={value.DocumentAvailabilityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.DocumentAvailabilityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod} 
          value={value.TenderSubmissionDeadlinePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.TenderSubmissionDeadlinePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod} 
          value={value.InvitationSubmissionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.InvitationSubmissionPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod} 
          value={value.ParticipationInvitationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.ParticipationInvitationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod} 
          value={value.ParticipationRequestReceptionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.ParticipationRequestReceptionPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod} 
          value={value.AdditionalInformationRequestPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TenderingProcessFieldMeta.AdditionalInformationRequestPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.NoticeDocumentReference} 
          value={value.NoticeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingProcessFieldMeta.NoticeDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderingProcessFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ProcessJustification} 
          value={value.ProcessJustification}
          itemDisplay={ (itemValue: ProcessJustification, key: string | number) =>
            <ProcessJustificationDisplay key={key} meta={TenderingProcessFieldMeta.ProcessJustification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.EconomicOperatorShortList} 
          value={value.EconomicOperatorShortList}
          itemDisplay={ (itemValue: EconomicOperatorShortList, key: string | number) =>
            <EconomicOperatorShortListDisplay key={key} meta={TenderingProcessFieldMeta.EconomicOperatorShortList} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.OpenTenderEvent} 
          value={value.OpenTenderEvent}
          itemDisplay={ (itemValue: Event, key: string | number) =>
            <EventDisplay key={key} meta={TenderingProcessFieldMeta.OpenTenderEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.AuctionTerms} 
          value={value.AuctionTerms}
          itemDisplay={ (itemValue: AuctionTerms, key: string | number) =>
            <AuctionTermsDisplay key={key} meta={TenderingProcessFieldMeta.AuctionTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.FrameworkAgreement} 
          value={value.FrameworkAgreement}
          itemDisplay={ (itemValue: FrameworkAgreement, key: string | number) =>
            <FrameworkAgreementDisplay key={key} meta={TenderingProcessFieldMeta.FrameworkAgreement} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderingProcessFieldMeta.ContractingSystem} 
          value={value.ContractingSystem}
          itemDisplay={ (itemValue: ContractingSystem, key: string | number) =>
            <ContractingSystemDisplay key={key} meta={TenderingProcessFieldMeta.ContractingSystem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
