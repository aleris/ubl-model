import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderStatus } from  '../../model/doc/TenderStatus'
import { TenderStatusFieldMeta } from  '../../meta/doc/TenderStatusMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EconomicOperatorPartyDisplay from '../cac/EconomicOperatorPartyDisplay'
import { EconomicOperatorParty } from '../../model/cac/EconomicOperatorParty'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ProcurementProjectDisplay from '../cac/ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import ProcurementProjectLotDisplay from '../cac/ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderStatus | undefined
  meta: FieldMeta<T>
}

export default function TenderStatusDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TenderStatus">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderStatusFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TenderStatusFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TenderStatusFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TenderStatusFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TenderStatusFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderStatusFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TenderStatusFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TenderStatusFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={TenderStatusFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TenderStatusFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TenderStatusFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={TenderStatusFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={TenderStatusFieldMeta.ContractName}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TenderStatusFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TenderStatusFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Procedure Code"
            value={value.ProcedureCode?.[0]}
            meta={TenderStatusFieldMeta.ProcedureCode}
          />

          <PeriodDisplay
            label="Tender Submission Deadline Period"
            value={value.TenderSubmissionDeadlinePeriod?.[0]}
            meta={TenderStatusFieldMeta.TenderSubmissionDeadlinePeriod}
          />

          <PeriodDisplay
            label="Invitation Submission Period"
            value={value.InvitationSubmissionPeriod?.[0]}
            meta={TenderStatusFieldMeta.InvitationSubmissionPeriod}
          />

          <PeriodDisplay
            label="Participation Request Reception Period"
            value={value.ParticipationRequestReceptionPeriod?.[0]}
            meta={TenderStatusFieldMeta.ParticipationRequestReceptionPeriod}
          />

          <DocumentReferenceDisplay
            label="Procurement Legislation Document Reference"
            value={value.ProcurementLegislationDocumentReference?.[0]}
            meta={TenderStatusFieldMeta.ProcurementLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Fiscal Legislation Document Reference"
            value={value.FiscalLegislationDocumentReference?.[0]}
            meta={TenderStatusFieldMeta.FiscalLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Environmental Legislation Document Reference"
            value={value.EnvironmentalLegislationDocumentReference?.[0]}
            meta={TenderStatusFieldMeta.EnvironmentalLegislationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Employment Legislation Document Reference"
            value={value.EmploymentLegislationDocumentReference?.[0]}
            meta={TenderStatusFieldMeta.EmploymentLegislationDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-TenderStatusInquiryDocumentReference"
            label="Tender Status Inquiry Document Reference"
            items={value.TenderStatusInquiryDocumentReference}
            meta={TenderStatusFieldMeta.TenderStatusInquiryDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Tender Status Inquiry Document Reference"
                value={itemValue}
                meta={TenderStatusFieldMeta.TenderStatusInquiryDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TenderStatusFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TenderStatusFieldMeta.Signature}
              />
            }
          />

          <ContractingPartyDisplay
            label="Contracting Party"
            value={value.ContractingParty?.[0]}
            meta={TenderStatusFieldMeta.ContractingParty}
          />

          <EconomicOperatorPartyDisplay
            label="Economic Operator Party"
            value={value.EconomicOperatorParty?.[0]}
            meta={TenderStatusFieldMeta.EconomicOperatorParty}
          />

          <PartyDisplay
            label="Document Provider Party"
            value={value.DocumentProviderParty?.[0]}
            meta={TenderStatusFieldMeta.DocumentProviderParty}
          />

          <PartyDisplay
            label="Tender Recipient Party"
            value={value.TenderRecipientParty?.[0]}
            meta={TenderStatusFieldMeta.TenderRecipientParty}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={TenderStatusFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={TenderStatusFieldMeta.ProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Procurement Project Lot"
                value={itemValue}
                meta={TenderStatusFieldMeta.ProcurementProjectLot}
              />
            }
          />
        </div>
    </div>
  )
}
