import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Attachment } from  '../../model/cac/Attachment'
import { AttachmentField, AttachmentFieldMeta, AttachmentTypeName } from  '../../meta/cac/AttachmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { BinaryObjectDisplay } from '../cbc/BinaryObjectDisplay'
import { ExternalReferenceDisplay } from './ExternalReferenceDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Attachment, void>
  attachment: Attachment[] | undefined
  renderContext: RenderContext
}

export const AttachmentSubElementsMap: SubElementsTemplatesMap<AttachmentField, Attachment, void> = new Map([
    [
      AttachmentField.UBLExtensions,
      { meta: AttachmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AttachmentField.UBLExtensions}
          meta={AttachmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AttachmentField.EmbeddedDocumentBinaryObject,
      { meta: AttachmentFieldMeta.EmbeddedDocumentBinaryObject,
        template: ({value, renderContext, fieldConfig}) => <BinaryObjectDisplay
          key={AttachmentField.EmbeddedDocumentBinaryObject}
          meta={AttachmentFieldMeta.EmbeddedDocumentBinaryObject}
          fieldConfig={fieldConfig}
          binaryObject={value?.EmbeddedDocumentBinaryObject}
          renderContext={renderContext}
        />}
    ],

    [
      AttachmentField.EmbeddedDocument,
      { meta: AttachmentFieldMeta.EmbeddedDocument,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttachmentField.EmbeddedDocument}
          meta={AttachmentFieldMeta.EmbeddedDocument}
          fieldConfig={fieldConfig}
          text={value?.EmbeddedDocument}
          renderContext={renderContext}
        />}
    ],

    [
      AttachmentField.ExternalReference,
      { meta: AttachmentFieldMeta.ExternalReference,
        template: ({value, renderContext, fieldConfig}) => <ExternalReferenceDisplay
          key={AttachmentField.ExternalReference}
          meta={AttachmentFieldMeta.ExternalReference}
          fieldConfig={fieldConfig}
          externalReference={value?.ExternalReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function AttachmentDisplay<TFieldMeta>({ meta, fieldConfig, attachment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AttachmentTypeName,
    meta,
    fieldConfig,
    attachment,
    renderContext,
    AttachmentSubElementsMap,
  )
}
