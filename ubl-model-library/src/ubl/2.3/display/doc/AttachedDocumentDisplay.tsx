import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: AttachedDocument
  meta: FieldMeta<T>
}

export default function AttachedDocumentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-AttachedDocument ubl-AttachedDocumentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AttachedDocument ubl-UBLExtensions"
          meta={AttachedDocumentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-UBLVersionID"
          meta={AttachedDocumentFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-CustomizationID"
          meta={AttachedDocumentFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-ProfileID"
          meta={AttachedDocumentFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-ProfileExecutionID"
          meta={AttachedDocumentFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-ID"
          meta={AttachedDocumentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-UUID"
          meta={AttachedDocumentFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Date ubl-IssueDate"
          meta={AttachedDocumentFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Time ubl-IssueTime"
          meta={AttachedDocumentFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Text ubl-Note"
          meta={AttachedDocumentFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Code ubl-DocumentTypeCode"
          meta={AttachedDocumentFieldMeta.DocumentTypeCode} 
          value={value.DocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Type Code"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.DocumentTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Text ubl-DocumentType"
          meta={AttachedDocumentFieldMeta.DocumentType} 
          value={value.DocumentType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Document Type"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.DocumentType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-ParentDocumentID"
          meta={AttachedDocumentFieldMeta.ParentDocumentID} 
          value={value.ParentDocumentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Parent Document Identifier"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ParentDocumentID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Code ubl-ParentDocumentTypeCode"
          meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode} 
          value={value.ParentDocumentTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Parent Document Type Code"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ParentDocumentTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AttachedDocument ubl-Identifier ubl-ParentDocumentVersionID"
          meta={AttachedDocumentFieldMeta.ParentDocumentVersionID} 
          value={value.ParentDocumentVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Parent Document Version"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ParentDocumentVersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AttachedDocument ubl-Signature"
          meta={AttachedDocumentFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AttachedDocument ubl-Party ubl-SenderParty"
          meta={AttachedDocumentFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AttachedDocument ubl-Party ubl-ReceiverParty"
          meta={AttachedDocumentFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-AttachedDocument ubl-Attachment"
          meta={AttachedDocumentFieldMeta.Attachment} 
          value={value.Attachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Attachment"
              value={itemValue}
              meta={AttachedDocumentFieldMeta.Attachment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-AttachedDocument ubl-LineReference ubl-ParentDocumentLineReference"
          meta={AttachedDocumentFieldMeta.ParentDocumentLineReference} 
          value={value.ParentDocumentLineReference}
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
