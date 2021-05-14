import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderWithdrawal } from  '../../model/doc/TenderWithdrawal'
import { TenderWithdrawalFieldMeta } from  '../../meta/doc/TenderWithdrawalMeta'
import ContractingPartyDisplay from '../cac/ContractingPartyDisplay'
import { ContractingParty } from '../../model/cac/ContractingParty'
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
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderWithdrawal
  meta: FieldMeta<T>
}

export default function TenderWithdrawalDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TenderWithdrawal ubl-TenderWithdrawalType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderWithdrawal ubl-UBLExtensions"
          meta={TenderWithdrawalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-UBLVersionID"
          meta={TenderWithdrawalFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-CustomizationID"
          meta={TenderWithdrawalFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-ProfileID"
          meta={TenderWithdrawalFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-ProfileExecutionID"
          meta={TenderWithdrawalFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-ID"
          meta={TenderWithdrawalFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Indicator ubl-CopyIndicator"
          meta={TenderWithdrawalFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-UUID"
          meta={TenderWithdrawalFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Identifier ubl-ContractFolderID"
          meta={TenderWithdrawalFieldMeta.ContractFolderID} 
          value={value.ContractFolderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Contract Folder Identifier"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ContractFolderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Date ubl-IssueDate"
          meta={TenderWithdrawalFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Time ubl-IssueTime"
          meta={TenderWithdrawalFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Text ubl-ContractName"
          meta={TenderWithdrawalFieldMeta.ContractName} 
          value={value.ContractName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Contract Name"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ContractName}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Text ubl-Note"
          meta={TenderWithdrawalFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderWithdrawal ubl-Indicator ubl-WithdrawOfferIndicator"
          meta={TenderWithdrawalFieldMeta.WithdrawOfferIndicator} 
          value={value.WithdrawOfferIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Withdraw Offer"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.WithdrawOfferIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderWithdrawal ubl-DocumentReference ubl-TenderDocumentReference"
          meta={TenderWithdrawalFieldMeta.TenderDocumentReference} 
          value={value.TenderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Tender Document Reference"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.TenderDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderWithdrawal ubl-DocumentReference ubl-TenderNotificationDocumentReference"
          meta={TenderWithdrawalFieldMeta.TenderNotificationDocumentReference} 
          value={value.TenderNotificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Tender Notification Document Reference"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.TenderNotificationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderWithdrawal ubl-Signature"
          meta={TenderWithdrawalFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.Signature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TenderWithdrawal ubl-ContractingParty"
          meta={TenderWithdrawalFieldMeta.ContractingParty} 
          value={value.ContractingParty}
          itemDisplay={ (itemValue: ContractingParty, key: string | number) =>
            <ContractingPartyDisplay
              key={key}
              label="Contracting Party"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.ContractingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderWithdrawal ubl-Party ubl-TendererParty"
          meta={TenderWithdrawalFieldMeta.TendererParty} 
          value={value.TendererParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tenderer Party"
              value={itemValue}
              meta={TenderWithdrawalFieldMeta.TendererParty}
            />
          }
        />
        </div>
    </div>
  )
}
