import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportProgressStatus } from  '../../model/doc/TransportProgressStatus'
import { TransportProgressStatusFieldMeta } from  '../../meta/doc/TransportProgressStatusMeta'
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
import TransportMeansDisplay from '../cac/TransportMeansDisplay'
import { TransportMeans } from '../../model/cac/TransportMeans'
import TransportScheduleDisplay from '../cac/TransportScheduleDisplay'
import { TransportSchedule } from '../../model/cac/TransportSchedule'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportProgressStatus
  meta: FieldMeta<T>
}

export default function TransportProgressStatusDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportProgressStatus ubl-TransportProgressStatusType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportProgressStatus ubl-UBLExtensions"
          meta={TransportProgressStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-UBLVersionID"
          meta={TransportProgressStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-CustomizationID"
          meta={TransportProgressStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-ProfileID"
          meta={TransportProgressStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportProgressStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-ID"
          meta={TransportProgressStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Indicator ubl-CopyIndicator"
          meta={TransportProgressStatusFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Identifier ubl-UUID"
          meta={TransportProgressStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Date ubl-IssueDate"
          meta={TransportProgressStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Time ubl-IssueTime"
          meta={TransportProgressStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Text ubl-Note"
          meta={TransportProgressStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportProgressStatus ubl-Indicator ubl-StatusAvailableIndicator"
          meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator} 
          value={value.StatusAvailableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Status Available Indicator"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-Signature"
          meta={TransportProgressStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-Party ubl-SenderParty"
          meta={TransportProgressStatusFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-Party ubl-ReceiverParty"
          meta={TransportProgressStatusFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-Party ubl-SourceIssuerParty"
          meta={TransportProgressStatusFieldMeta.SourceIssuerParty} 
          value={value.SourceIssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Source Issuer Party"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.SourceIssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-DocumentReference ubl-TransportProgressStatusRequestDocumentReference"
          meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference} 
          value={value.TransportProgressStatusRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Progress Status Request Document Reference"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-TransportMeans"
          meta={TransportProgressStatusFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay
              key={key}
              label="Transport Means"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.TransportMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportProgressStatus ubl-TransportSchedule"
          meta={TransportProgressStatusFieldMeta.TransportSchedule} 
          value={value.TransportSchedule}
          itemDisplay={ (itemValue: TransportSchedule, key: string | number) =>
            <TransportScheduleDisplay
              key={key}
              label="Transport Schedule"
              value={itemValue}
              meta={TransportProgressStatusFieldMeta.TransportSchedule}
            />
          }
        />
        </div>
    </div>
  )
}
