import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PriorInformationNotice } from  '../../model/doc/PriorInformationNotice'
import { PriorInformationNoticeFieldMeta } from  '../../meta/doc/PriorInformationNoticeMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
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
import LanguageDisplay from '../cac/LanguageDisplay'
import { Language } from '../../model/cac/Language'
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
  value: PriorInformationNotice
  meta: FieldMeta<T>
}

export default function PriorInformationNoticeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-PriorInformationNotice ubl-PriorInformationNoticeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PriorInformationNotice ubl-UBLExtensions"
          meta={PriorInformationNoticeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-UBLVersionID"
          meta={PriorInformationNoticeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-CustomizationID"
          meta={PriorInformationNoticeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-ProfileID"
          meta={PriorInformationNoticeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-ProfileExecutionID"
          meta={PriorInformationNoticeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-ID"
          meta={PriorInformationNoticeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Indicator ubl-CopyIndicator"
          meta={PriorInformationNoticeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-UUID"
          meta={PriorInformationNoticeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-ContractFolderID"
          meta={PriorInformationNoticeFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Date ubl-IssueDate"
          meta={PriorInformationNoticeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Time ubl-IssueTime"
          meta={PriorInformationNoticeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Text ubl-Note"
          meta={PriorInformationNoticeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-VersionID"
          meta={PriorInformationNoticeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Identifier ubl-PreviousVersionID"
          meta={PriorInformationNoticeFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version Identifier"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Date ubl-RequestedPublicationDate"
          meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate} 
          value={value.RequestedPublicationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Requested Publication Date"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Date ubl-PlannedDate"
          meta={PriorInformationNoticeFieldMeta.PlannedDate} 
          value={value.PlannedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Planned Date"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.PlannedDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Text ubl-RegulatoryDomain"
          meta={PriorInformationNoticeFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Regulatory Domain"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.RegulatoryDomain}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Code ubl-NoticeTypeCode"
          meta={PriorInformationNoticeFieldMeta.NoticeTypeCode} 
          value={value.NoticeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Notice Type Code"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.NoticeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PriorInformationNotice ubl-Code ubl-NoticeLanguageCode"
          meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode} 
          value={value.NoticeLanguageCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Notice Language Code"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-Language ubl-AdditionalNoticeLanguage"
          meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage} 
          value={value.AdditionalNoticeLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Additional Notice Language"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-DocumentReference"
          meta={PriorInformationNoticeFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-Signature"
          meta={PriorInformationNoticeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-ContractingParty"
          meta={PriorInformationNoticeFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-Party ubl-ReceiverParty"
          meta={PriorInformationNoticeFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-TenderingTerms"
          meta={PriorInformationNoticeFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay
              key={key}
              label="Tendering Terms"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.TenderingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-TenderingProcess"
          meta={PriorInformationNoticeFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay
              key={key}
              label="Tendering Process"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.TenderingProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-ProcurementProject"
          meta={PriorInformationNoticeFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PriorInformationNotice ubl-ProcurementProjectLot"
          meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot}
            />
          }
        />
        </div>
    </div>
  )
}
