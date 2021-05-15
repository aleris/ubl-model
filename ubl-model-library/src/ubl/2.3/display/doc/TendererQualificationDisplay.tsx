import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TendererQualification | undefined
  meta: FieldMeta<T>
}

export default function TendererQualificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TendererQualification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TendererQualificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TendererQualificationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TendererQualificationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TendererQualificationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TendererQualificationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TendererQualificationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TendererQualificationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TendererQualificationFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={TendererQualificationFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TendererQualificationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TendererQualificationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TendererQualificationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TendererQualificationFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={TendererQualificationFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version"
            value={value.PreviousVersionID?.[0]}
            meta={TendererQualificationFieldMeta.PreviousVersionID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TendererQualificationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TendererQualificationFieldMeta.Signature}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TendererPartyQualification"
            label="Tenderer Party Qualification"
            items={value.TendererPartyQualification}
            meta={TendererQualificationFieldMeta.TendererPartyQualification} 
            itemDisplay={ (itemValue: TendererPartyQualification, key: string | number) =>
              <TendererPartyQualificationDisplay
                key={key}
                label="Tenderer Party Qualification"
                value={itemValue}
                meta={TendererQualificationFieldMeta.TendererPartyQualification}
              />
            }
          />

          <ContractingPartyDisplay
            label="Contracting Party"
            value={value.ContractingParty?.[0]}
            meta={TendererQualificationFieldMeta.ContractingParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Evidence"
            label="Evidence"
            items={value.Evidence}
            meta={TendererQualificationFieldMeta.Evidence} 
            itemDisplay={ (itemValue: Evidence, key: string | number) =>
              <EvidenceDisplay
                key={key}
                label="Evidence"
                value={itemValue}
                meta={TendererQualificationFieldMeta.Evidence}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={TendererQualificationFieldMeta.AdditionalDocumentReference} 
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
