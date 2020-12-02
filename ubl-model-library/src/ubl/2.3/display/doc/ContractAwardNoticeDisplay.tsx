import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ContractAwardNotice
  meta: FieldMeta<T>
}

export default function ContractAwardNoticeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractAwardNoticeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ContractAwardNoticeFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ContractAwardNoticeFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ContractAwardNoticeFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractAwardNoticeFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractAwardNoticeFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate} 
          value={value.RequestedPublicationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ContractAwardNoticeFieldMeta.RequestedPublicationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractAwardNoticeFieldMeta.RegulatoryDomain} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.NoticeTypeCode} 
          value={value.NoticeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractAwardNoticeFieldMeta.NoticeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator} 
          value={value.PublishAwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ContractAwardNoticeFieldMeta.PublishAwardIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode} 
          value={value.NoticeLanguageCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ContractAwardNoticeFieldMeta.NoticeLanguageCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage} 
          value={value.AdditionalNoticeLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={ContractAwardNoticeFieldMeta.AdditionalNoticeLanguage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ContractAwardNoticeFieldMeta.PreviousDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ContractAwardNoticeFieldMeta.MinutesDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ContractAwardNoticeFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={ContractAwardNoticeFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ContractAwardNoticeFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ContractAwardNoticeFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay key={key} meta={ContractAwardNoticeFieldMeta.TenderingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay key={key} meta={ContractAwardNoticeFieldMeta.TenderingProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={ContractAwardNoticeFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={ContractAwardNoticeFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractAwardNoticeFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay key={key} meta={ContractAwardNoticeFieldMeta.TenderResult} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
