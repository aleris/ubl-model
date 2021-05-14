import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderContract } from  '../../model/doc/TenderContract'
import { TenderContractFieldMeta } from  '../../meta/doc/TenderContractMeta'
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
  value: TenderContract
  meta: FieldMeta<T>
}

export default function TenderContractDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TenderContract ubl-TenderContractType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderContract ubl-UBLExtensions"
          meta={TenderContractFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderContractFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-UBLVersionID"
          meta={TenderContractFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-CustomizationID"
          meta={TenderContractFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-ProfileID"
          meta={TenderContractFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-ProfileExecutionID"
          meta={TenderContractFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-ID"
          meta={TenderContractFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Indicator ubl-CopyIndicator"
          meta={TenderContractFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TenderContractFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-UUID"
          meta={TenderContractFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TenderContractFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Identifier ubl-ContractFolderID"
          meta={TenderContractFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={TenderContractFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Date ubl-IssueDate"
          meta={TenderContractFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TenderContractFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Time ubl-IssueTime"
          meta={TenderContractFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TenderContractFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderContract ubl-Text ubl-ContractName"
          meta={TenderContractFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={TenderContractFieldMeta.ContractName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderContract ubl-Text ubl-Note"
          meta={TenderContractFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TenderContractFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderContract ubl-Text ubl-RegulatoryDomain"
          meta={TenderContractFieldMeta.RegulatoryDomain} 
          value={value.RegulatoryDomain}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Regulatory Domain"
              value={itemValue}
              meta={TenderContractFieldMeta.RegulatoryDomain}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderContract ubl-Indicator ubl-PublishAwardIndicator"
          meta={TenderContractFieldMeta.PublishAwardIndicator} 
          value={value.PublishAwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Publish Award Indicator"
              value={itemValue}
              meta={TenderContractFieldMeta.PublishAwardIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-DocumentReference ubl-PreviousDocumentReference"
          meta={TenderContractFieldMeta.PreviousDocumentReference} 
          value={value.PreviousDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Previous Document Reference"
              value={itemValue}
              meta={TenderContractFieldMeta.PreviousDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-DocumentReference ubl-ContractDocumentReference"
          meta={TenderContractFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={TenderContractFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-Signature"
          meta={TenderContractFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TenderContractFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-ContractingParty"
          meta={TenderContractFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={TenderContractFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-EconomicOperatorParty"
          meta={TenderContractFieldMeta.EconomicOperatorParty} 
          value={value.EconomicOperatorParty}
          itemDisplay={ (itemValue: EconomicOperatorParty, key: string | number) =>
            <EconomicOperatorPartyDisplay
              key={key}
              label="Economic Operator Party"
              value={itemValue}
              meta={TenderContractFieldMeta.EconomicOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderContract ubl-Party ubl-ReceiverParty"
          meta={TenderContractFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TenderContractFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderContract ubl-TenderingTerms"
          meta={TenderContractFieldMeta.TenderingTerms} 
          value={value.TenderingTerms}
          itemDisplay={ (itemValue: TenderingTerms, key: string | number) =>
            <TenderingTermsDisplay
              key={key}
              label="Tendering Terms"
              value={itemValue}
              meta={TenderContractFieldMeta.TenderingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderContract ubl-TenderingProcess"
          meta={TenderContractFieldMeta.TenderingProcess} 
          value={value.TenderingProcess}
          itemDisplay={ (itemValue: TenderingProcess, key: string | number) =>
            <TenderingProcessDisplay
              key={key}
              label="Tendering Process"
              value={itemValue}
              meta={TenderContractFieldMeta.TenderingProcess}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderContract ubl-ProcurementProject"
          meta={TenderContractFieldMeta.ProcurementProject} 
          value={value.ProcurementProject}
          itemDisplay={ (itemValue: ProcurementProject, key: string | number) =>
            <ProcurementProjectDisplay
              key={key}
              label="Procurement Project"
              value={itemValue}
              meta={TenderContractFieldMeta.ProcurementProject}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-ProcurementProjectLot"
          meta={TenderContractFieldMeta.ProcurementProjectLot} 
          value={value.ProcurementProjectLot}
          itemDisplay={ (itemValue: ProcurementProjectLot, key: string | number) =>
            <ProcurementProjectLotDisplay
              key={key}
              label="Procurement Project Lot"
              value={itemValue}
              meta={TenderContractFieldMeta.ProcurementProjectLot}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderContract ubl-TenderResult"
          meta={TenderContractFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay
              key={key}
              label="Tender Result"
              value={itemValue}
              meta={TenderContractFieldMeta.TenderResult}
            />
          }
        />
        </div>
    </div>
  )
}
