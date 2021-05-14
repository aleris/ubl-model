import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CallForTenders } from  '../../model/doc/CallForTenders'
import { CallForTendersFieldMeta } from  '../../meta/doc/CallForTendersMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ProcurementProjectDisplay from '../cac/ProcurementProjectDisplay'
import { ProcurementProject } from '../../model/cac/ProcurementProject'
import ProcurementProjectLotDisplay from '../cac/ProcurementProjectLotDisplay'
import { ProcurementProjectLot } from '../../model/cac/ProcurementProjectLot'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TenderingProcessDisplay from '../cac/TenderingProcessDisplay'
import { TenderingProcess } from '../../model/cac/TenderingProcess'
import TenderingTermsDisplay from '../cac/TenderingTermsDisplay'
import { TenderingTerms } from '../../model/cac/TenderingTerms'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CallForTenders
  meta: FieldMeta<T>
}

export default function CallForTendersDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CallForTenders ubl-CallForTendersType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CallForTenders ubl-UBLExtensions"
          meta={CallForTendersFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CallForTendersFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-UBLVersionID"
          meta={CallForTendersFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-CustomizationID"
          meta={CallForTendersFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-ProfileID"
          meta={CallForTendersFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-ProfileExecutionID"
          meta={CallForTendersFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-ID"
          meta={CallForTendersFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Indicator ubl-CopyIndicator"
          meta={CallForTendersFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={CallForTendersFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-UUID"
          meta={CallForTendersFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CallForTendersFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-ContractFolderID"
          meta={CallForTendersFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={CallForTendersFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Date ubl-ApprovalDate"
          meta={CallForTendersFieldMeta.ApprovalDate} 
          value={value.ApprovalDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Approval Date"
              value={itemValue}
              meta={CallForTendersFieldMeta.ApprovalDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Date ubl-IssueDate"
          meta={CallForTendersFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CallForTendersFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Time ubl-IssueTime"
          meta={CallForTendersFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CallForTendersFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Text ubl-Note"
          meta={CallForTendersFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CallForTendersFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-VersionID"
          meta={CallForTendersFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CallForTendersFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CallForTenders ubl-Identifier ubl-PreviousVersionID"
          meta={CallForTendersFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={CallForTendersFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-DocumentReference ubl-LegalDocumentReference"
          meta={CallForTendersFieldMeta.LegalDocumentReference} 
          value={value.LegalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Legal Document Reference"
              value={itemValue}
              meta={CallForTendersFieldMeta.LegalDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-DocumentReference ubl-TechnicalDocumentReference"
          meta={CallForTendersFieldMeta.TechnicalDocumentReference} 
          value={value.TechnicalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Technical Document Reference"
              value={itemValue}
              meta={CallForTendersFieldMeta.TechnicalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-DocumentReference ubl-RequiredDocumentReference"
          meta={CallForTendersFieldMeta.RequiredDocumentReference} 
          value={value.RequiredDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Required Document Reference"
              value={itemValue}
              meta={CallForTendersFieldMeta.RequiredDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-DocumentReference ubl-ProvidedDocumentReference"
          meta={CallForTendersFieldMeta.ProvidedDocumentReference} 
          value={value.ProvidedDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Provided Document Reference"
              value={itemValue}
              meta={CallForTendersFieldMeta.ProvidedDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={CallForTendersFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={CallForTendersFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-Signature"
          meta={CallForTendersFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CallForTendersFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-ContractingParty"
          meta={CallForTendersFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={CallForTendersFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={CallForTendersFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={CallForTendersFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-Party ubl-ReceiverParty"
          meta={CallForTendersFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CallForTendersFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-TenderingTerms"
          meta={CallForTendersFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay
              key={key}
              label="Tendering Terms"
              value={itemValue}
              meta={CallForTendersFieldMeta.TenderingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-TenderingProcess"
          meta={CallForTendersFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay
              key={key}
              label="Tendering Process"
              value={itemValue}
              meta={CallForTendersFieldMeta.TenderingProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CallForTenders ubl-ProcurementProject"
          meta={CallForTendersFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={CallForTendersFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CallForTenders ubl-ProcurementProjectLot"
          meta={CallForTendersFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={CallForTendersFieldMeta.ProcurementProjectLot}
            />
          }
        />
        </div>
    </div>
  )
}
