import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualification } from  '../../model/doc/TendererQualification'
import { TendererQualificationFieldMeta } from  '../../meta/doc/TendererQualificationMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EvidenceDisplay from '../cac/EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TendererPartyQualificationDisplay from '../cac/TendererPartyQualificationDisplay'
import { TendererPartyQualification } from '../../model/cac/TendererPartyQualification'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TendererQualification
  meta: FieldMeta<T>
}

export default function TendererQualificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TendererQualification ubl-TendererQualificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TendererQualification ubl-UBLExtensions"
          meta={TendererQualificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TendererQualificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-UBLVersionID"
          meta={TendererQualificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-CustomizationID"
          meta={TendererQualificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-ProfileID"
          meta={TendererQualificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-ProfileExecutionID"
          meta={TendererQualificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-ID"
          meta={TendererQualificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Indicator ubl-CopyIndicator"
          meta={TendererQualificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TendererQualificationFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-UUID"
          meta={TendererQualificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TendererQualificationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-ContractFolderID"
          meta={TendererQualificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={TendererQualificationFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Date ubl-IssueDate"
          meta={TendererQualificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TendererQualificationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Time ubl-IssueTime"
          meta={TendererQualificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TendererQualificationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Text ubl-Note"
          meta={TendererQualificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TendererQualificationFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-VersionID"
          meta={TendererQualificationFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={TendererQualificationFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualification ubl-Identifier ubl-PreviousVersionID"
          meta={TendererQualificationFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={TendererQualificationFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualification ubl-Signature"
          meta={TendererQualificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TendererQualificationFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualification ubl-TendererPartyQualification"
          meta={TendererQualificationFieldMeta.TendererPartyQualification} 
          value={value.TendererPartyQualification}
          itemDisplay={ (itemValue: TendererPartyQualification, key: string | number) =>
            <TendererPartyQualificationDisplay
              key={key}
              label="Tenderer Party Qualification"
              value={itemValue}
              meta={TendererQualificationFieldMeta.TendererPartyQualification}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererQualification ubl-ContractingParty"
          meta={TendererQualificationFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={TendererQualificationFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualification ubl-Evidence"
          meta={TendererQualificationFieldMeta.Evidence} 
          value={value.Evidence}
          itemDisplay={ (itemValue: Evidence, key: string | number) =>
            <EvidenceDisplay
              key={key}
              label="Evidence"
              value={itemValue}
              meta={TendererQualificationFieldMeta.Evidence}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualification ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={TendererQualificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={TendererQualificationFieldMeta.AdditionalDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
