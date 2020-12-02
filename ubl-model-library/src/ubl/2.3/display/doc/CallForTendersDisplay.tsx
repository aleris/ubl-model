import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CallForTenders
  meta: FieldMeta<T>
}

export default function CallForTendersDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CallForTendersFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CallForTendersFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={CallForTendersFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.ContractFolderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ApprovalDate} 
          value={value.ApprovalDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CallForTendersFieldMeta.ApprovalDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CallForTendersFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CallForTendersFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CallForTendersFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CallForTendersFieldMeta.PreviousVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.LegalDocumentReference} 
          value={value.LegalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CallForTendersFieldMeta.LegalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.TechnicalDocumentReference} 
          value={value.TechnicalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CallForTendersFieldMeta.TechnicalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.RequiredDocumentReference} 
          value={value.RequiredDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CallForTendersFieldMeta.RequiredDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ProvidedDocumentReference} 
          value={value.ProvidedDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CallForTendersFieldMeta.ProvidedDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CallForTendersFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CallForTendersFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay key={key} meta={CallForTendersFieldMeta.ContractingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CallForTendersFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CallForTendersFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay key={key} meta={CallForTendersFieldMeta.TenderingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay key={key} meta={CallForTendersFieldMeta.TenderingProcess} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay key={key} meta={CallForTendersFieldMeta.ProcurementProject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CallForTendersFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay key={key} meta={CallForTendersFieldMeta.ProcurementProjectLot} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
