import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AwardedNotification } from  '../../model/doc/AwardedNotification'
import { AwardedNotificationFieldMeta } from  '../../meta/doc/AwardedNotificationMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import FinancialGuaranteeDisplay from '../cac/FinancialGuaranteeDisplay'
import { FinancialGuarantee } from '../../model/cac/FinancialGuarantee'
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
  value: AwardedNotification
  meta: FieldMeta<T>
}

export default function AwardedNotificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-AwardedNotification ubl-AwardedNotificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AwardedNotification ubl-UBLExtensions"
          meta={AwardedNotificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-UBLVersionID"
          meta={AwardedNotificationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-CustomizationID"
          meta={AwardedNotificationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-ProfileID"
          meta={AwardedNotificationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-ProfileExecutionID"
          meta={AwardedNotificationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-ID"
          meta={AwardedNotificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Indicator ubl-CopyIndicator"
          meta={AwardedNotificationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-UUID"
          meta={AwardedNotificationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Identifier ubl-ContractFolderID"
          meta={AwardedNotificationFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Date ubl-IssueDate"
          meta={AwardedNotificationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Time ubl-IssueTime"
          meta={AwardedNotificationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Text ubl-ContractName"
          meta={AwardedNotificationFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ContractName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AwardedNotification ubl-Text ubl-Note"
          meta={AwardedNotificationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AwardedNotification ubl-Party ubl-SenderParty"
          meta={AwardedNotificationFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AwardedNotification ubl-Party ubl-ReceiverParty"
          meta={AwardedNotificationFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AwardedNotification ubl-DocumentReference ubl-MinutesDocumentReference"
          meta={AwardedNotificationFieldMeta.MinutesDocumentReference} 
          value={value.MinutesDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Minutes Document Reference"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.MinutesDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardedNotification ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={AwardedNotificationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardedNotification ubl-TenderResult"
          meta={AwardedNotificationFieldMeta.TenderResult} 
          value={value.TenderResult}
          itemDisplay={ (itemValue: TenderResult, key: string | number) =>
            <TenderResultDisplay
              key={key}
              label="Tender Result"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.TenderResult}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardedNotification ubl-FinancialGuarantee ubl-FinalFinancialGuarantee"
          meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee} 
          value={value.FinalFinancialGuarantee}
          itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
            <FinancialGuaranteeDisplay
              key={key}
              label="Final Financial Guarantee"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AwardedNotification ubl-Signature"
          meta={AwardedNotificationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={AwardedNotificationFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}
