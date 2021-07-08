import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineReference } from  '../../model/cac/LineReference'
import { LineReferenceField, LineReferenceFieldMeta, LineReferenceTypeName } from  '../../meta/cac/LineReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LineReference, void>
  lineReference: LineReference[] | undefined
  renderContext: RenderContext
}

export const LineReferenceSubElementsMap: SubElementsTemplatesMap<LineReferenceField, LineReference, void> = new Map([
    [
      LineReferenceField.UBLExtensions,
      { meta: LineReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LineReferenceField.UBLExtensions}
          meta={LineReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LineReferenceField.LineID,
      { meta: LineReferenceFieldMeta.LineID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LineReferenceField.LineID}
          meta={LineReferenceFieldMeta.LineID}
          fieldConfig={fieldConfig}
          identifier={value?.LineID}
          renderContext={renderContext}
        />}
    ],

    [
      LineReferenceField.UUID,
      { meta: LineReferenceFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={LineReferenceField.UUID}
          meta={LineReferenceFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      LineReferenceField.LineStatusCode,
      { meta: LineReferenceFieldMeta.LineStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={LineReferenceField.LineStatusCode}
          meta={LineReferenceFieldMeta.LineStatusCode}
          fieldConfig={fieldConfig}
          code={value?.LineStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      LineReferenceField.DocumentReference,
      { meta: LineReferenceFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={LineReferenceField.DocumentReference}
          meta={LineReferenceFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function LineReferenceDisplay<TFieldMeta>({ meta, fieldConfig, lineReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LineReferenceTypeName,
    meta,
    fieldConfig,
    lineReference,
    renderContext,
    LineReferenceSubElementsMap,
  )
}
