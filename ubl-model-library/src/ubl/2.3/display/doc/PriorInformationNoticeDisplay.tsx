import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: PriorInformationNotice | undefined
  meta: FieldMeta<T>
}

export default function PriorInformationNoticeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-PriorInformationNotice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PriorInformationNoticeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={PriorInformationNoticeFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={PriorInformationNoticeFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={PriorInformationNoticeFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={PriorInformationNoticeFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PriorInformationNoticeFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={PriorInformationNoticeFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={PriorInformationNoticeFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={PriorInformationNoticeFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={PriorInformationNoticeFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={PriorInformationNoticeFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={PriorInformationNoticeFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={PriorInformationNoticeFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version Identifier"
            value={value.PreviousVersionID?.[0]}
            meta={PriorInformationNoticeFieldMeta.PreviousVersionID}
          />

          <DateDisplay
            label="Requested Publication Date"
            value={value.RequestedPublicationDate?.[0]}
            meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate}
          />

          <DateDisplay
            label="Planned Date"
            value={value.PlannedDate?.[0]}
            meta={PriorInformationNoticeFieldMeta.PlannedDate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-RegulatoryDomain"
            label="Regulatory Domain"
            items={value.RegulatoryDomain}
            meta={PriorInformationNoticeFieldMeta.RegulatoryDomain} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Regulatory Domain"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.RegulatoryDomain}
              />
            }
          />

          <CodeDisplay
            label="Notice Type Code"
            value={value.NoticeTypeCode?.[0]}
            meta={PriorInformationNoticeFieldMeta.NoticeTypeCode}
          />

          <CodeDisplay
            label="Notice Language Code"
            value={value.NoticeLanguageCode?.[0]}
            meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Language ubl-AdditionalNoticeLanguage"
            label="Additional Notice Language"
            items={value.AdditionalNoticeLanguage}
            meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage} 
            itemDisplay={ (itemValue: Language, key: string | number) =>
              <LanguageDisplay
                key={key}
                label="Additional Notice Language"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={PriorInformationNoticeFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={PriorInformationNoticeFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.Signature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ContractingParty"
            label="Contracting Party"
            items={value.ContractingParty}
            meta={PriorInformationNoticeFieldMeta.ContractingParty} 
            itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
              <ContractingPartyDisplay
                key={key}
                label="Contracting Party"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.ContractingParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-CustomerParty ubl-OriginatorCustomerParty"
            label="Originator Customer Party"
            items={value.OriginatorCustomerParty}
            meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty} 
            itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
              <CustomerPartyDisplay
                key={key}
                label="Originator Customer Party"
                value={itemValue}
                meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty}
              />
            }
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={PriorInformationNoticeFieldMeta.ReceiverParty}
          />

          <TenderingTermsDisplay
            label="Tendering Terms"
            value={value.TenderingTerms?.[0]}
            meta={PriorInformationNoticeFieldMeta.TenderingTerms}
          />

          <TenderingProcessDisplay
            label="Tendering Process"
            value={value.TenderingProcess?.[0]}
            meta={PriorInformationNoticeFieldMeta.TenderingProcess}
          />

          <ProcurementProjectDisplay
            label="Procurement Project"
            value={value.ProcurementProject?.[0]}
            meta={PriorInformationNoticeFieldMeta.ProcurementProject}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProcurementProjectLot"
            label="Procurement Project Lot"
            items={value.ProcurementProjectLot}
            meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot} 
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
