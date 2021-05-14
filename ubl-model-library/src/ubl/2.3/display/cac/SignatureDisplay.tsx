import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Signature } from  '../../model/cac/Signature'
import { SignatureFieldMeta } from  '../../meta/cac/SignatureMeta'
import AttachmentDisplay from './AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Signature
  meta: FieldMeta<T>
}

export default function SignatureDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Signature ubl-SignatureType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Signature ubl-UBLExtensions"
          meta={SignatureFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SignatureFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Identifier ubl-ID"
          meta={SignatureFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={SignatureFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Code ubl-ReasonCode"
          meta={SignatureFieldMeta.ReasonCode} 
          value={value.ReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Reason"
              value={itemValue}
              meta={SignatureFieldMeta.ReasonCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Signature ubl-Text ubl-Note"
          meta={SignatureFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={SignatureFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Date ubl-ValidationDate"
          meta={SignatureFieldMeta.ValidationDate} 
          value={value.ValidationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Validation Date"
              value={itemValue}
              meta={SignatureFieldMeta.ValidationDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Time ubl-ValidationTime"
          meta={SignatureFieldMeta.ValidationTime} 
          value={value.ValidationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Validation Time"
              value={itemValue}
              meta={SignatureFieldMeta.ValidationTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Identifier ubl-ValidatorID"
          meta={SignatureFieldMeta.ValidatorID} 
          value={value.ValidatorID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Validator"
              value={itemValue}
              meta={SignatureFieldMeta.ValidatorID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Text ubl-CanonicalizationMethod"
          meta={SignatureFieldMeta.CanonicalizationMethod} 
          value={value.CanonicalizationMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Canonicalization Method"
              value={itemValue}
              meta={SignatureFieldMeta.CanonicalizationMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Signature ubl-Text ubl-SignatureMethod"
          meta={SignatureFieldMeta.SignatureMethod} 
          value={value.SignatureMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Signature Method"
              value={itemValue}
              meta={SignatureFieldMeta.SignatureMethod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Signature ubl-Party ubl-SignatoryParty"
          meta={SignatureFieldMeta.SignatoryParty} 
          value={value.SignatoryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Signatory Party"
              value={itemValue}
              meta={SignatureFieldMeta.SignatoryParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Signature ubl-Attachment ubl-DigitalSignatureAttachment"
          meta={SignatureFieldMeta.DigitalSignatureAttachment} 
          value={value.DigitalSignatureAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Digital Signature Attachment"
              value={itemValue}
              meta={SignatureFieldMeta.DigitalSignatureAttachment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Signature ubl-DocumentReference ubl-OriginalDocumentReference"
          meta={SignatureFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Original Document Reference"
              value={itemValue}
              meta={SignatureFieldMeta.OriginalDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
