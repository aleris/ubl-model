import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Signature | undefined
  meta: FieldMeta<T>
}

export default function SignatureDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Signature">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SignatureFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={SignatureFieldMeta.ID}
          />

          <CodeDisplay
            label="Reason"
            value={value.ReasonCode?.[0]}
            meta={SignatureFieldMeta.ReasonCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={SignatureFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={SignatureFieldMeta.Note}
              />
            }
          />

          <DateDisplay
            label="Validation Date"
            value={value.ValidationDate?.[0]}
            meta={SignatureFieldMeta.ValidationDate}
          />

          <TimeDisplay
            label="Validation Time"
            value={value.ValidationTime?.[0]}
            meta={SignatureFieldMeta.ValidationTime}
          />

          <IdentifierDisplay
            label="Validator"
            value={value.ValidatorID?.[0]}
            meta={SignatureFieldMeta.ValidatorID}
          />

          <TextDisplay
            label="Canonicalization Method"
            value={value.CanonicalizationMethod?.[0]}
            meta={SignatureFieldMeta.CanonicalizationMethod}
          />

          <TextDisplay
            label="Signature Method"
            value={value.SignatureMethod?.[0]}
            meta={SignatureFieldMeta.SignatureMethod}
          />

          <PartyDisplay
            label="Signatory Party"
            value={value.SignatoryParty?.[0]}
            meta={SignatureFieldMeta.SignatoryParty}
          />

          <AttachmentDisplay
            label="Digital Signature Attachment"
            value={value.DigitalSignatureAttachment?.[0]}
            meta={SignatureFieldMeta.DigitalSignatureAttachment}
          />

          <DocumentReferenceDisplay
            label="Original Document Reference"
            value={value.OriginalDocumentReference?.[0]}
            meta={SignatureFieldMeta.OriginalDocumentReference}
          />
        </div>
    </div>
  )
}
