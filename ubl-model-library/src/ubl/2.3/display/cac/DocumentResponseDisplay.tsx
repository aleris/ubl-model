import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentResponse } from  '../../model/cac/DocumentResponse'
import { DocumentResponseField, DocumentResponseFieldMeta, DocumentResponseTypeName } from  '../../meta/cac/DocumentResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { LineResponseDisplay } from './LineResponseDisplay'
import { PartyDisplay } from './PartyDisplay'
import { ResponseDisplay } from './ResponseDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DocumentResponse, void>
  documentResponse: DocumentResponse[] | undefined
  renderContext: RenderContext
}

export const DocumentResponseSubElementsMap: SubElementsTemplatesMap<DocumentResponseField, DocumentResponse, void> = new Map([
    [
      DocumentResponseField.UBLExtensions,
      { meta: DocumentResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DocumentResponseField.UBLExtensions}
          meta={DocumentResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentResponseField.Response,
      { meta: DocumentResponseFieldMeta.Response,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={DocumentResponseField.Response}
          meta={DocumentResponseFieldMeta.Response}
          fieldConfig={fieldConfig}
          response={value?.Response}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentResponseField.DocumentReference,
      { meta: DocumentResponseFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DocumentResponseField.DocumentReference}
          meta={DocumentResponseFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentResponseField.IssuerParty,
      { meta: DocumentResponseFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentResponseField.IssuerParty}
          meta={DocumentResponseFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentResponseField.RecipientParty,
      { meta: DocumentResponseFieldMeta.RecipientParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DocumentResponseField.RecipientParty}
          meta={DocumentResponseFieldMeta.RecipientParty}
          fieldConfig={fieldConfig}
          party={value?.RecipientParty}
          renderContext={renderContext}
        />}
    ],

    [
      DocumentResponseField.LineResponse,
      { meta: DocumentResponseFieldMeta.LineResponse,
        template: ({value, renderContext, fieldConfig}) => <LineResponseDisplay
          key={DocumentResponseField.LineResponse}
          meta={DocumentResponseFieldMeta.LineResponse}
          fieldConfig={fieldConfig}
          lineResponse={value?.LineResponse}
          renderContext={renderContext}
        />}
    ]
]) 

export function DocumentResponseDisplay<TFieldMeta>({ meta, fieldConfig, documentResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DocumentResponseTypeName,
    meta,
    fieldConfig,
    documentResponse,
    renderContext,
    DocumentResponseSubElementsMap,
  )
}
