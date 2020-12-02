import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AttachedDocument } from  '../../model/doc/AttachedDocument'
import { AttachedDocumentFieldMeta } from  '../../meta/doc/AttachedDocumentMeta'
import AttachmentDisplay from '../cac/AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LineReferenceDisplay from '../cac/LineReferenceDisplay'
import { LineReference } from '../../model/cac/LineReference'
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
  value: AttachedDocument
  meta: FieldMeta<T>
}

export default function AttachedDocumentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AttachedDocumentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={AttachedDocumentFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={AttachedDocumentFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttachedDocumentFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AttachedDocumentFieldMeta.DocumentTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.DocumentType} 
          value={value.DocumentType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttachedDocumentFieldMeta.DocumentType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ParentDocumentID} 
          value={value.ParentDocumentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.ParentDocumentID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode} 
          value={value.ParentDocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ParentDocumentVersionID} 
          value={value.ParentDocumentVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={AttachedDocumentFieldMeta.ParentDocumentVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={AttachedDocumentFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AttachedDocumentFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={AttachedDocumentFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={AttachedDocumentFieldMeta.Attachment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachedDocumentFieldMeta.ParentDocumentLineReference} 
          value={value.ParentDocumentLineReference}
          itemDisplay={ (itemValue: LineReference, key: string | number) =>
            <LineReferenceDisplay key={key} meta={AttachedDocumentFieldMeta.ParentDocumentLineReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
