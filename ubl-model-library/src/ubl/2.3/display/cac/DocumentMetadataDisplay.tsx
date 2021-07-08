import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentMetadata } from  '../../model/cac/DocumentMetadata'
import { DocumentMetadataField, DocumentMetadataFieldMeta, DocumentMetadataTypeName } from  '../../meta/cac/DocumentMetadataMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentMetadata, void>
  documentMetadata: DocumentMetadata[] | undefined
  renderContext: RenderContext
}

export const DocumentMetadataSubElementsMap: SubElementsTemplatesMap<DocumentMetadataField, DocumentMetadata, void> = new Map([
    [
      DocumentMetadataField.UBLExtensions,
      { meta: DocumentMetadataFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentMetadataField.UBLExtensions}
          meta={DocumentMetadataFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentMetadataField.ID,
      { meta: DocumentMetadataFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentMetadataField.ID}
          meta={DocumentMetadataFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentMetadataField.FormatID,
      { meta: DocumentMetadataFieldMeta.FormatID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentMetadataField.FormatID}
          meta={DocumentMetadataFieldMeta.FormatID}
          fieldConfig={fieldConfig}
          identifier={value?.FormatID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentMetadataField.VersionID,
      { meta: DocumentMetadataFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentMetadataField.VersionID}
          meta={DocumentMetadataFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentMetadataField.SchemaURI,
      { meta: DocumentMetadataFieldMeta.SchemaURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DocumentMetadataField.SchemaURI}
          meta={DocumentMetadataFieldMeta.SchemaURI}
          fieldConfig={fieldConfig}
          identifier={value?.SchemaURI}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentMetadataField.DocumentTypeCode,
      { meta: DocumentMetadataFieldMeta.DocumentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DocumentMetadataField.DocumentTypeCode}
          meta={DocumentMetadataFieldMeta.DocumentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.DocumentTypeCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentMetadataDisplay<TFieldMeta>({ meta, fieldConfig, documentMetadata, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentMetadataTypeName,
    meta,
    fieldConfig,
    documentMetadata,
    renderContext,
    DocumentMetadataSubElementsMap,
  )
}
