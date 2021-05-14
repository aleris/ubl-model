import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Attachment
  meta: FieldMeta<T>
}

export default function AttachmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Attachment ubl-AttachmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Attachment ubl-UBLExtensions"
          meta={AttachmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AttachmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Attachment ubl-BinaryObject ubl-EmbeddedDocumentBinaryObject"
          meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject} 
          value={value.EmbeddedDocumentBinaryObject}
          itemDisplay={ (itemValue: BinaryObject, key: string | number) =>
            <BinaryObjectDisplay
              key={key}
              label="Embedded Document"
              value={itemValue}
              meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Attachment ubl-Text ubl-EmbeddedDocument"
          meta={AttachmentFieldMeta.EmbeddedDocument} 
          value={value.EmbeddedDocument}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Embedded Document"
              value={itemValue}
              meta={AttachmentFieldMeta.EmbeddedDocument}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Attachment ubl-ExternalReference"
          meta={AttachmentFieldMeta.ExternalReference} 
          value={value.ExternalReference}
          itemDisplay={ (itemValue: ExternalReference, key: string | number) =>
            <ExternalReferenceDisplay
              key={key}
              label="External Reference"
              value={itemValue}
              meta={AttachmentFieldMeta.ExternalReference}
            />
          }
        />
        </div>
    </div>
  )
}
