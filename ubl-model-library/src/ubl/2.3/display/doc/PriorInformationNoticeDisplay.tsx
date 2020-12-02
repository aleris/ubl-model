import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PriorInformationNotice
  meta: FieldMeta<T>
}

export default function PriorInformationNoticeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PriorInformationNoticeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={PriorInformationNoticeFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PriorInformationNoticeFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PriorInformationNoticeFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PriorInformationNoticeFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PriorInformationNoticeFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate} 
          value={value.RequestedPublicationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PriorInformationNoticeFieldMeta.RequestedPublicationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.PlannedDate} 
          value={value.PlannedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PriorInformationNoticeFieldMeta.PlannedDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PriorInformationNoticeFieldMeta.RegulatoryDomain} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.NoticeTypeCode} 
          value={value.NoticeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PriorInformationNoticeFieldMeta.NoticeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode} 
          value={value.NoticeLanguageCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PriorInformationNoticeFieldMeta.NoticeLanguageCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage} 
          value={value.AdditionalNoticeLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={PriorInformationNoticeFieldMeta.AdditionalNoticeLanguage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={PriorInformationNoticeFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={PriorInformationNoticeFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={PriorInformationNoticeFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={PriorInformationNoticeFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PriorInformationNoticeFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay key={key} meta={PriorInformationNoticeFieldMeta.TenderingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay key={key} meta={PriorInformationNoticeFieldMeta.TenderingProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={PriorInformationNoticeFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={PriorInformationNoticeFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
