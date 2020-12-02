import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentStatusRequest } from  '../../model/doc/DocumentStatusRequest'
import { DocumentStatusRequestFieldMeta } from  '../../meta/doc/DocumentStatusRequestMeta'
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

type Params<T> = {
  value: DocumentStatusRequest
  meta: FieldMeta<T>
}

export default function DocumentStatusRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentStatusRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DocumentStatusRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DocumentStatusRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DocumentStatusRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentStatusRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.TrackingID} 
          value={value.TrackingID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusRequestFieldMeta.TrackingID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.RequestedDocumentReference} 
          value={value.RequestedDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DocumentStatusRequestFieldMeta.RequestedDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={DocumentStatusRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentStatusRequestFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentStatusRequestFieldMeta.ReceiverParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
