import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentStatus } from  '../../model/doc/DocumentStatus'
import { DocumentStatusFieldMeta } from  '../../meta/doc/DocumentStatusMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentResponseDisplay from '../cac/DocumentResponseDisplay'
import { DocumentResponse } from '../../model/cac/DocumentResponse'
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
  value: DocumentStatus
  meta: FieldMeta<T>
}

export default function DocumentStatusDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentStatusFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentStatusFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DocumentStatusFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DocumentStatusFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={DocumentStatusFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={DocumentStatusFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DocumentStatusFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={DocumentStatusFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentStatusFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentStatusFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.DocumentResponse} 
          value={value.DocumentResponse}
          itemDisplay={ (itemValue: DocumentResponse, key: string | number) =>
            <DocumentResponseDisplay key={key} meta={DocumentStatusFieldMeta.DocumentResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentStatusFieldMeta.AdditionalDocumentResponse} 
          value={value.AdditionalDocumentResponse}
          itemDisplay={ (itemValue: DocumentResponse, key: string | number) =>
            <DocumentResponseDisplay key={key} meta={DocumentStatusFieldMeta.AdditionalDocumentResponse} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
