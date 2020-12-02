import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Signature
  meta: FieldMeta<T>
}

export default function SignatureDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SignatureFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SignatureFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SignatureFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.ReasonCode} 
          value={value.ReasonCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SignatureFieldMeta.ReasonCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SignatureFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.ValidationDate} 
          value={value.ValidationDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SignatureFieldMeta.ValidationDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.ValidationTime} 
          value={value.ValidationTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={SignatureFieldMeta.ValidationTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.ValidatorID} 
          value={value.ValidatorID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SignatureFieldMeta.ValidatorID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.CanonicalizationMethod} 
          value={value.CanonicalizationMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SignatureFieldMeta.CanonicalizationMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.SignatureMethod} 
          value={value.SignatureMethod}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SignatureFieldMeta.SignatureMethod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.SignatoryParty} 
          value={value.SignatoryParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SignatureFieldMeta.SignatoryParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.DigitalSignatureAttachment} 
          value={value.DigitalSignatureAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={SignatureFieldMeta.DigitalSignatureAttachment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SignatureFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SignatureFieldMeta.OriginalDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
