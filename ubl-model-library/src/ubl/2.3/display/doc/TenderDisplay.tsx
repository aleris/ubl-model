import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Tender } from  '../../model/doc/Tender'
import { TenderFieldMeta } from  '../../meta/doc/TenderMeta'
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
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TenderedProjectDisplay from '../cac/TenderedProjectDisplay'
import { TenderedProject } from '../../model/cac/TenderedProject'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Tender | undefined
  meta: FieldMeta<T>
}

export default function TenderDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Tender">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TenderFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TenderFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TenderFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TenderFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TenderFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TenderFieldMeta.UUID}
          />

          <CodeDisplay
            label="Tender Type Code"
            value={value.TenderTypeCode?.[0]}
            meta={TenderFieldMeta.TenderTypeCode}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={TenderFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TenderFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TenderFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={TenderFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={TenderFieldMeta.ContractName}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TenderFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TenderFieldMeta.Note}
              />
            }
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={TenderFieldMeta.ValidityPeriod}
          />

          <DocumentReferenceDisplay
            label="Call For Tender Document Reference"
            value={value.CallForTenderDocumentReference?.[0]}
            meta={TenderFieldMeta.CallForTenderDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TenderFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TenderFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TenderFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TenderFieldMeta.Signature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Party ubl-TendererParty"
            label="Tenderer Party"
            items={value.TendererParty}
            meta={TenderFieldMeta.TendererParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Tenderer Party"
                value={itemValue}
                meta={TenderFieldMeta.TendererParty}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Tenderer Qualification Document Reference"
            value={value.TendererQualificationDocumentReference?.[0]}
            meta={TenderFieldMeta.TendererQualificationDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Party ubl-SubcontractorParty"
            label="Subcontractor Party"
            items={value.SubcontractorParty}
            meta={TenderFieldMeta.SubcontractorParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Subcontractor Party"
                value={itemValue}
                meta={TenderFieldMeta.SubcontractorParty}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ContractingParty"
            label="Contracting Party"
            items={value.ContractingParty}
            meta={TenderFieldMeta.ContractingParty} 
            itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
              <ContractingPartyDisplay
                key={key}
                label="Contracting Party"
                value={itemValue}
                meta={TenderFieldMeta.ContractingParty}
              />
            }
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={TenderFieldMeta.OriginatorCustomerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TenderedProject"
            label="Tendered Project"
            items={value.TenderedProject}
            meta={TenderFieldMeta.TenderedProject} 
            itemDisplay={ (itemValue: TenderedProject, key: string | number) =>
              <TenderedProjectDisplay
                key={key}
                label="Tendered Project"
                value={itemValue}
                meta={TenderFieldMeta.TenderedProject}
              />
            }
          />
        </div>
    </div>
  )
}
