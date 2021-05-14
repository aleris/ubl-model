import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderStatus
  meta: FieldMeta<T>
}

export default function TenderStatusDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TenderStatus ubl-TenderStatusType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderStatus ubl-UBLExtensions"
          meta={TenderStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderStatusFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-UBLVersionID"
          meta={TenderStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-CustomizationID"
          meta={TenderStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-ProfileID"
          meta={TenderStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-ProfileExecutionID"
          meta={TenderStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-ID"
          meta={TenderStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Indicator ubl-CopyIndicator"
          meta={TenderStatusFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TenderStatusFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-UUID"
          meta={TenderStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TenderStatusFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Identifier ubl-ContractFolderID"
          meta={TenderStatusFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={TenderStatusFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Date ubl-IssueDate"
          meta={TenderStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TenderStatusFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Time ubl-IssueTime"
          meta={TenderStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TenderStatusFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Text ubl-ContractName"
          meta={TenderStatusFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={TenderStatusFieldMeta.ContractName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Text ubl-Note"
          meta={TenderStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TenderStatusFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderStatus ubl-Code ubl-ProcedureCode"
          meta={TenderStatusFieldMeta.ProcedureCode} 
          value={value.ProcedureCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Procedure Code"
              value={itemValue}
              meta={TenderStatusFieldMeta.ProcedureCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-Period ubl-TenderSubmissionDeadlinePeriod"
          meta={TenderStatusFieldMeta.TenderSubmissionDeadlinePeriod} 
          value={value.TenderSubmissionDeadlinePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Tender Submission Deadline Period"
              value={itemValue}
              meta={TenderStatusFieldMeta.TenderSubmissionDeadlinePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-Period ubl-InvitationSubmissionPeriod"
          meta={TenderStatusFieldMeta.InvitationSubmissionPeriod} 
          value={value.InvitationSubmissionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invitation Submission Period"
              value={itemValue}
              meta={TenderStatusFieldMeta.InvitationSubmissionPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-Period ubl-ParticipationRequestReceptionPeriod"
          meta={TenderStatusFieldMeta.ParticipationRequestReceptionPeriod} 
          value={value.ParticipationRequestReceptionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Participation Request Reception Period"
              value={itemValue}
              meta={TenderStatusFieldMeta.ParticipationRequestReceptionPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-DocumentReference ubl-ProcurementLegislationDocumentReference"
          meta={TenderStatusFieldMeta.ProcurementLegislationDocumentReference} 
          value={value.ProcurementLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Procurement Legislation Document Reference"
              value={itemValue}
              meta={TenderStatusFieldMeta.ProcurementLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-DocumentReference ubl-FiscalLegislationDocumentReference"
          meta={TenderStatusFieldMeta.FiscalLegislationDocumentReference} 
          value={value.FiscalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Fiscal Legislation Document Reference"
              value={itemValue}
              meta={TenderStatusFieldMeta.FiscalLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-DocumentReference ubl-EnvironmentalLegislationDocumentReference"
          meta={TenderStatusFieldMeta.EnvironmentalLegislationDocumentReference} 
          value={value.EnvironmentalLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Environmental Legislation Document Reference"
              value={itemValue}
              meta={TenderStatusFieldMeta.EnvironmentalLegislationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-DocumentReference ubl-EmploymentLegislationDocumentReference"
          meta={TenderStatusFieldMeta.EmploymentLegislationDocumentReference} 
          value={value.EmploymentLegislationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Employment Legislation Document Reference"
              value={itemValue}
              meta={TenderStatusFieldMeta.EmploymentLegislationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderStatus ubl-DocumentReference ubl-TenderStatusInquiryDocumentReference"
          meta={TenderStatusFieldMeta.TenderStatusInquiryDocumentReference} 
          value={value.TenderStatusInquiryDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Tender Status Inquiry Document Reference"
              value={itemValue}
              meta={TenderStatusFieldMeta.TenderStatusInquiryDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderStatus ubl-Signature"
          meta={TenderStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TenderStatusFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-ContractingParty"
          meta={TenderStatusFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={TenderStatusFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-EconomicOperatorParty"
          meta={TenderStatusFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={TenderStatusFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-Party ubl-DocumentProviderParty"
          meta={TenderStatusFieldMeta.DocumentProviderParty} 
          value={value.DocumentProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Document Provider Party"
              value={itemValue}
              meta={TenderStatusFieldMeta.DocumentProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-Party ubl-TenderRecipientParty"
          meta={TenderStatusFieldMeta.TenderRecipientParty} 
          value={value.TenderRecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tender Recipient Party"
              value={itemValue}
              meta={TenderStatusFieldMeta.TenderRecipientParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderStatus ubl-ProcurementProject"
          meta={TenderStatusFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={TenderStatusFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderStatus ubl-ProcurementProjectLot"
          meta={TenderStatusFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
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
