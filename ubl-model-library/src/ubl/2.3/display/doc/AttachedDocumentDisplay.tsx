import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: AttachedDocument | undefined
  meta: FieldMeta<T>
}

export default function AttachedDocumentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-AttachedDocument">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AttachedDocumentFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={AttachedDocumentFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={AttachedDocumentFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={AttachedDocumentFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={AttachedDocumentFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={AttachedDocumentFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={AttachedDocumentFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={AttachedDocumentFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={AttachedDocumentFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={AttachedDocumentFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={AttachedDocumentFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Type Code"
            value={value.DocumentTypeCode?.[0]}
            meta={AttachedDocumentFieldMeta.DocumentTypeCode}
          />

          <TextDisplay
            label="Document Type"
            value={value.DocumentType?.[0]}
            meta={AttachedDocumentFieldMeta.DocumentType}
          />

          <IdentifierDisplay
            label="Parent Document Identifier"
            value={value.ParentDocumentID?.[0]}
            meta={AttachedDocumentFieldMeta.ParentDocumentID}
          />

          <CodeDisplay
            label="Parent Document Type Code"
            value={value.ParentDocumentTypeCode?.[0]}
            meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode}
          />

          <IdentifierDisplay
            label="Parent Document Version"
            value={value.ParentDocumentVersionID?.[0]}
            meta={AttachedDocumentFieldMeta.ParentDocumentVersionID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={AttachedDocumentFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={AttachedDocumentFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={AttachedDocumentFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={AttachedDocumentFieldMeta.ReceiverParty}
          />

          <AttachmentDisplay
            label="Attachment"
            value={value.Attachment?.[0]}
            meta={AttachedDocumentFieldMeta.Attachment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-LineReference ubl-ParentDocumentLineReference"
            label="Parent Document Line Reference"
            items={value.ParentDocumentLineReference}
            meta={AttachedDocumentFieldMeta.ParentDocumentLineReference} 
            itemDisplay={ (itemValue: LineReference, key: string | number) =>
              <LineReferenceDisplay
                key={key}
                label="Parent Document Line Reference"
                value={itemValue}
                meta={AttachedDocumentFieldMeta.ParentDocumentLineReference}
              />
            }
          />
        </div>
    </div>
  )
}
