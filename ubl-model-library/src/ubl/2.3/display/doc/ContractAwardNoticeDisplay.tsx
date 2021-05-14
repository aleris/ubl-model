import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractAwardNotice } from  '../../model/doc/ContractAwardNotice'
import { ContractAwardNoticeFieldMeta } from  '../../meta/doc/ContractAwardNoticeMeta'
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
import TenderResultDisplay from '../cac/TenderResultDisplay'
import { TenderResult } from '../../model/cac/TenderResult'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractAwardNotice
  meta: FieldMeta<T>
}

export default function ContractAwardNoticeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-ContractAwardNotice ubl-ContractAwardNoticeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractAwardNotice ubl-UBLExtensions"
          meta={ContractAwardNoticeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-UBLVersionID"
          meta={ContractAwardNoticeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-CustomizationID"
          meta={ContractAwardNoticeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-ProfileID"
          meta={ContractAwardNoticeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-ProfileExecutionID"
          meta={ContractAwardNoticeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-ID"
          meta={ContractAwardNoticeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Indicator ubl-CopyIndicator"
          meta={ContractAwardNoticeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-UUID"
          meta={ContractAwardNoticeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-ContractFolderID"
          meta={ContractAwardNoticeFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Date ubl-IssueDate"
          meta={ContractAwardNoticeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Time ubl-IssueTime"
          meta={ContractAwardNoticeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Text ubl-Note"
          meta={ContractAwardNoticeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-VersionID"
          meta={ContractAwardNoticeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Identifier ubl-PreviousVersionID"
          meta={ContractAwardNoticeFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version Identifier"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Date ubl-RequestedPublicationDate"
          meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate} 
          value={value.RequestedPublicationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Requested Publication Date"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Text ubl-RegulatoryDomain"
          meta={ContractAwardNoticeFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Regulatory Domain"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.RegulatoryDomain}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Code ubl-NoticeTypeCode"
          meta={ContractAwardNoticeFieldMeta.NoticeTypeCode} 
          value={value.NoticeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Notice Type Code"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.NoticeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Indicator ubl-PublishAwardIndicator"
          meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator} 
          value={value.PublishAwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Publish Award Indicator"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractAwardNotice ubl-Code ubl-NoticeLanguageCode"
          meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode} 
          value={value.NoticeLanguageCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Notice Language Code"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-Language ubl-AdditionalNoticeLanguage"
          meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage} 
          value={value.AdditionalNoticeLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Additional Notice Language"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-DocumentReference ubl-PreviousDocumentReference"
          meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Previous Document Reference"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-DocumentReference ubl-MinutesDocumentReference"
          meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Minutes Document Reference"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-Signature"
          meta={ContractAwardNoticeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-ContractingParty"
          meta={ContractAwardNoticeFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-Party ubl-ReceiverParty"
          meta={ContractAwardNoticeFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-TenderingTerms"
          meta={ContractAwardNoticeFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay
              key={key}
              label="Tendering Terms"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.TenderingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-TenderingProcess"
          meta={ContractAwardNoticeFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay
              key={key}
              label="Tendering Process"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.TenderingProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-ProcurementProject"
          meta={ContractAwardNoticeFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-ProcurementProjectLot"
          meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractAwardNotice ubl-TenderResult"
          meta={ContractAwardNoticeFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay
              key={key}
              label="Tender Result"
              value={itemValue}
              meta={ContractAwardNoticeFieldMeta.TenderResult}
            />
          }
        />
        </div>
    </div>
  )
}
