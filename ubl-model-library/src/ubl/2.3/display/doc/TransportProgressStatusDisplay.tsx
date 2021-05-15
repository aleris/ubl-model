import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportProgressStatus | undefined
  meta: FieldMeta<T>
}

export default function TransportProgressStatusDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportProgressStatus">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportProgressStatusFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportProgressStatusFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportProgressStatusFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportProgressStatusFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportProgressStatusFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportProgressStatusFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TransportProgressStatusFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportProgressStatusFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportProgressStatusFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportProgressStatusFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportProgressStatusFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportProgressStatusFieldMeta.Note}
              />
            }
          />

          <IndicatorDisplay
            label="Status Available Indicator"
            value={value.StatusAvailableIndicator?.[0]}
            meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportProgressStatusFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportProgressStatusFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportProgressStatusFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportProgressStatusFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Source Issuer Party"
            value={value.SourceIssuerParty?.[0]}
            meta={TransportProgressStatusFieldMeta.SourceIssuerParty}
          />

          <DocumentReferenceDisplay
            label="Transport Progress Status Request Document Reference"
            value={value.TransportProgressStatusRequestDocumentReference?.[0]}
            meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference}
          />

          <TransportMeansDisplay
            label="Transport Means"
            value={value.TransportMeans?.[0]}
            meta={TransportProgressStatusFieldMeta.TransportMeans}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportSchedule"
            label="Transport Schedule"
            items={value.TransportSchedule}
            meta={TransportProgressStatusFieldMeta.TransportSchedule} 
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
