import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Attachment
  meta: FieldMeta<T>
}

export default function AttachmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={AttachmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={AttachmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject} 
          value={value.EmbeddedDocumentBinaryObject}
          itemDisplay={ (itemValue: BinaryObject, key: string | number) =>
            <BinaryObjectDisplay key={key} meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachmentFieldMeta.EmbeddedDocument} 
          value={value.EmbeddedDocument}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={AttachmentFieldMeta.EmbeddedDocument} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={AttachmentFieldMeta.ExternalReference} 
          value={value.ExternalReference}
          itemDisplay={ (itemValue: ExternalReference, key: string | number) =>
            <ExternalReferenceDisplay key={key} meta={AttachmentFieldMeta.ExternalReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
