import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportProgressStatus
  meta: FieldMeta<T>
}

export default function TransportProgressStatusDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportProgressStatusFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportProgressStatusFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportProgressStatusFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportProgressStatusFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportProgressStatusFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportProgressStatusFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator} 
          value={value.StatusAvailableIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportProgressStatusFieldMeta.StatusAvailableIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportProgressStatusFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportProgressStatusFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportProgressStatusFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.SourceIssuerParty} 
          value={value.SourceIssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportProgressStatusFieldMeta.SourceIssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference} 
          value={value.TransportProgressStatusRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportProgressStatusFieldMeta.TransportProgressStatusRequestDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay key={key} meta={TransportProgressStatusFieldMeta.TransportMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportProgressStatusFieldMeta.TransportSchedule} 
          value={value.TransportSchedule}
          itemDisplay={ (itemValue: TransportSchedule, key: string | number) =>
            <TransportScheduleDisplay key={key} meta={TransportProgressStatusFieldMeta.TransportSchedule} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
