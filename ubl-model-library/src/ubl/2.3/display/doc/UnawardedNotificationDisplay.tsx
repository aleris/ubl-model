import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnawardedNotification } from  '../../model/doc/UnawardedNotification'
import { UnawardedNotificationFieldMeta } from  '../../meta/doc/UnawardedNotificationMeta'
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
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
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
  value: UnawardedNotification
  meta: FieldMeta<T>
}

export default function UnawardedNotificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-UnawardedNotification ubl-UnawardedNotificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-UnawardedNotification ubl-UBLExtensions"
          meta={UnawardedNotificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-UBLVersionID"
          meta={UnawardedNotificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-CustomizationID"
          meta={UnawardedNotificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-ProfileID"
          meta={UnawardedNotificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-ProfileExecutionID"
          meta={UnawardedNotificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-ID"
          meta={UnawardedNotificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Indicator ubl-CopyIndicator"
          meta={UnawardedNotificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-UUID"
          meta={UnawardedNotificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Identifier ubl-ContractFolderID"
          meta={UnawardedNotificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Date ubl-IssueDate"
          meta={UnawardedNotificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Time ubl-IssueTime"
          meta={UnawardedNotificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Text ubl-ContractName"
          meta={UnawardedNotificationFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ContractName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-UnawardedNotification ubl-Text ubl-Note"
          meta={UnawardedNotificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-Signature"
          meta={UnawardedNotificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-Party ubl-SenderParty"
          meta={UnawardedNotificationFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-Party ubl-ReceiverParty"
          meta={UnawardedNotificationFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-DocumentReference ubl-MinutesDocumentReference"
          meta={UnawardedNotificationFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Minutes Document Reference"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.MinutesDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={UnawardedNotificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-TenderResult"
          meta={UnawardedNotificationFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay
              key={key}
              label="Tender Result"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.TenderResult}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-UnawardedNotification ubl-AppealTerms"
          meta={UnawardedNotificationFieldMeta.AppealTerms} 
          value={value.AppealTerms}
          itemDisplay={ (itemValue: AppealTerms, key: string | number) =>
            <AppealTermsDisplay
              key={key}
              label="Appeal Terms"
              value={itemValue}
              meta={UnawardedNotificationFieldMeta.AppealTerms}
            />
          }
        />
        </div>
    </div>
  )
}
