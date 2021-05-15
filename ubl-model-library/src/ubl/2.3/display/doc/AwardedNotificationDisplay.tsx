import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: AwardedNotification | undefined
  meta: FieldMeta<T>
}

export default function AwardedNotificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-AwardedNotification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AwardedNotificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={AwardedNotificationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={AwardedNotificationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={AwardedNotificationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={AwardedNotificationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AwardedNotificationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={AwardedNotificationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={AwardedNotificationFieldMeta.UUID}
          />

          <IdentifierDisplay
            label="Contract Folder Identifier"
            value={value.ContractFolderID?.[0]}
            meta={AwardedNotificationFieldMeta.ContractFolderID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={AwardedNotificationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={AwardedNotificationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-ContractName"
            label="Contract Name"
            items={value.ContractName}
            meta={AwardedNotificationFieldMeta.ContractName} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Contract Name"
                value={itemValue}
                meta={AwardedNotificationFieldMeta.ContractName}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={AwardedNotificationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={AwardedNotificationFieldMeta.Note}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={AwardedNotificationFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={AwardedNotificationFieldMeta.ReceiverParty}
          />

          <DocumentReferenceDisplay
            label="Minutes Document Reference"
            value={value.MinutesDocumentReference?.[0]}
            meta={AwardedNotificationFieldMeta.MinutesDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={AwardedNotificationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={AwardedNotificationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TenderResult"
            label="Tender Result"
            items={value.TenderResult}
            meta={AwardedNotificationFieldMeta.TenderResult} 
            itemDisplay={ (itemValue: TenderResult, key: string | number) =>
              <TenderResultDisplay
                key={key}
                label="Tender Result"
                value={itemValue}
                meta={AwardedNotificationFieldMeta.TenderResult}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-FinancialGuarantee ubl-FinalFinancialGuarantee"
            label="Final Financial Guarantee"
            items={value.FinalFinancialGuarantee}
            meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee} 
            itemDisplay={ (itemValue: FinancialGuarantee, key: string | number) =>
              <FinancialGuaranteeDisplay
                key={key}
                label="Final Financial Guarantee"
                value={itemValue}
                meta={AwardedNotificationFieldMeta.FinalFinancialGuarantee}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={AwardedNotificationFieldMeta.Signature} 
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
