import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ContractAwardNotice | undefined
  meta: FieldMeta<T>
}

export default function ContractAwardNoticeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ContractAwardNotice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractAwardNoticeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ContractAwardNoticeFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ContractAwardNoticeFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ContractAwardNoticeFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ContractAwardNoticeFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ContractAwardNoticeFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={ContractAwardNoticeFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ContractAwardNoticeFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={ContractAwardNoticeFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ContractAwardNoticeFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ContractAwardNoticeFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ContractAwardNoticeFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={ContractAwardNoticeFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version Identifier"
            value={value.PreviousVersionID?.[0]}
            meta={ContractAwardNoticeFieldMeta.PreviousVersionID}
          />

          <DateDisplay
            label="Requested Publication Date"
            value={value.RequestedPublicationDate?.[0]}
            meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-RegulatoryDomain"
            label="Regulatory Domain"
            items={value.RegulatoryDomain}
            meta={ContractAwardNoticeFieldMeta.RegulatoryDomain} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Regulatory Domain"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.RegulatoryDomain}
              />
            }
          />

          <CodeDisplay
            label="Notice Type Code"
            value={value.NoticeTypeCode?.[0]}
            meta={ContractAwardNoticeFieldMeta.NoticeTypeCode}
          />

          <IndicatorDisplay
            label="Publish Award Indicator"
            value={value.PublishAwardIndicator?.[0]}
            meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator}
          />

          <CodeDisplay
            label="Notice Language Code"
            value={value.NoticeLanguageCode?.[0]}
            meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Language ubl-AdditionalNoticeLanguage"
            label="Additional Notice Language"
            items={value.AdditionalNoticeLanguage}
            meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage} 
            itemDisplay={ (itemValue: Language, key: string | number) =>
              <LanguageDisplay
                key={key}
                label="Additional Notice Language"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-PreviousDocumentReference"
            label="Previous Document Reference"
            items={value.PreviousDocumentReference}
            meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Previous Document Reference"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-MinutesDocumentReference"
            label="Minutes Document Reference"
            items={value.MinutesDocumentReference}
            meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Minutes Document Reference"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ContractAwardNoticeFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.Signature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ContractingParty"
            label="Contracting Party"
            items={value.ContractingParty}
            meta={ContractAwardNoticeFieldMeta.ContractingParty} 
            itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
              <ContractingPartyDisplay
                key={key}
                label="Contracting Party"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.ContractingParty}
              />
            }
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={ContractAwardNoticeFieldMeta.ReceiverParty}
          />

          <TenderingTermsDisplay
            label="Tendering Terms"
            value={value.TenderingTerms?.[0]}
            meta={ContractAwardNoticeFieldMeta.TenderingTerms}
          />

          <TenderingProcessDisplay
            label="Tendering Process"
            value={value.TenderingProcess?.[0]}
            meta={ContractAwardNoticeFieldMeta.TenderingProcess}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={ContractAwardNoticeFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot} 
            itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
              <ProcurementProjectLotDisplay
                key={key}
                label="Procurement Project Lot"
                value={itemValue}
                meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TenderResult"
            label="Tender Result"
            items={value.TenderResult}
            meta={ContractAwardNoticeFieldMeta.TenderResult} 
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
