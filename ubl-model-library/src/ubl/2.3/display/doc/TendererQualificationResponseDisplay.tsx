import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualificationResponse } from  '../../model/doc/TendererQualificationResponse'
import { TendererQualificationResponseFieldMeta } from  '../../meta/doc/TendererQualificationResponseMeta'
import AppealTermsDisplay from '../cac/AppealTermsDisplay'
import { AppealTerms } from '../../model/cac/AppealTerms'
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
import QualificationResolutionDisplay from '../cac/QualificationResolutionDisplay'
import { QualificationResolution } from '../../model/cac/QualificationResolution'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TendererQualificationResponse | undefined
  meta: FieldMeta<T>
}

export default function TendererQualificationResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TendererQualificationResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TendererQualificationResponseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TendererQualificationResponseFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TendererQualificationResponseFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TendererQualificationResponseFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TendererQualificationResponseFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TendererQualificationResponseFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TendererQualificationResponseFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TendererQualificationResponseFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={TendererQualificationResponseFieldMeta.ContractFolderID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={TendererQualificationResponseFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={TendererQualificationResponseFieldMeta.ContractName}
              />
            }
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TendererQualificationResponseFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TendererQualificationResponseFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TendererQualificationResponseFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TendererQualificationResponseFieldMeta.Note}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TendererQualificationResponseFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TendererQualificationResponseFieldMeta.ReceiverParty}
          />

          <DocumentReferenceDisplay
            label="Resolution Document Reference"
            value={value.ResolutionDocumentReference?.[0]}
            meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-QualificationResolution"
            label="Qualification Resolution"
            items={value.QualificationResolution}
            meta={TendererQualificationResponseFieldMeta.QualificationResolution} 
            itemDisplay={ (itemValue: QualificationResolution, key: string | number) =>
              <QualificationResolutionDisplay
                key={key}
                label="Qualification Resolution"
                value={itemValue}
                meta={TendererQualificationResponseFieldMeta.QualificationResolution}
              />
            }
          />

          <AppealTermsDisplay
            label="Appeal Terms"
            value={value.AppealTerms?.[0]}
            meta={TendererQualificationResponseFieldMeta.AppealTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TendererQualificationResponseFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TendererQualificationResponseFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
