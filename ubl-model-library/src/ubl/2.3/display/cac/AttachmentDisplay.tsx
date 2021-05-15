import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Attachment } from  '../../model/cac/Attachment'
import { AttachmentFieldMeta } from  '../../meta/cac/AttachmentMeta'
import BinaryObjectDisplay from '../cbc/BinaryObjectDisplay'
import { BinaryObject } from '../../model/cbc/BinaryObject'
import ExternalReferenceDisplay from './ExternalReferenceDisplay'
import { ExternalReference } from '../../model/cac/ExternalReference'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Attachment | undefined
  meta: FieldMeta<T>
}

export default function AttachmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Attachment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AttachmentFieldMeta.UBLExtensions}
          />

          <BinaryObjectDisplay
            label="Embedded Document"
            value={value.EmbeddedDocumentBinaryObject?.[0]}
            meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject}
          />

          <TextDisplay
            label="Embedded Document"
            value={value.EmbeddedDocument?.[0]}
            meta={AttachmentFieldMeta.EmbeddedDocument}
          />

          <ExternalReferenceDisplay
            label="External Reference"
            value={value.ExternalReference?.[0]}
            meta={AttachmentFieldMeta.ExternalReference}
          />
        </div>
    </div>
  )
}
