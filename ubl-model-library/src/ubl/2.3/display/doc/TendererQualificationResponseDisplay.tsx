import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TendererQualificationResponse
  meta: FieldMeta<T>
}

export default function TendererQualificationResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TendererQualificationResponse ubl-TendererQualificationResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TendererQualificationResponse ubl-UBLExtensions"
          meta={TendererQualificationResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-UBLVersionID"
          meta={TendererQualificationResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-CustomizationID"
          meta={TendererQualificationResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-ProfileID"
          meta={TendererQualificationResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-ProfileExecutionID"
          meta={TendererQualificationResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-ID"
          meta={TendererQualificationResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Indicator ubl-CopyIndicator"
          meta={TendererQualificationResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-UUID"
          meta={TendererQualificationResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Identifier ubl-ContractFolderID"
          meta={TendererQualificationResponseFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Text ubl-ContractName"
          meta={TendererQualificationResponseFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ContractName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Date ubl-IssueDate"
          meta={TendererQualificationResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Time ubl-IssueTime"
          meta={TendererQualificationResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TendererQualificationResponse ubl-Text ubl-Note"
          meta={TendererQualificationResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-Party ubl-SenderParty"
          meta={TendererQualificationResponseFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-Party ubl-ReceiverParty"
          meta={TendererQualificationResponseFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-DocumentReference ubl-ResolutionDocumentReference"
          meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference} 
          value={value.ResolutionDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Resolution Document Reference"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-QualificationResolution"
          meta={TendererQualificationResponseFieldMeta.QualificationResolution} 
          value={value.QualificationResolution}
          itemDisplay={ (itemValue: QualificationResolution, key: string | number) =>
            <QualificationResolutionDisplay
              key={key}
              label="Qualification Resolution"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.QualificationResolution}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-AppealTerms"
          meta={TendererQualificationResponseFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay
              key={key}
              label="Appeal Terms"
              value={itemValue}
              meta={TendererQualificationResponseFieldMeta.AppealTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TendererQualificationResponse ubl-Signature"
          meta={TendererQualificationResponseFieldMeta.Signature} 
          value={value.Signature}
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
