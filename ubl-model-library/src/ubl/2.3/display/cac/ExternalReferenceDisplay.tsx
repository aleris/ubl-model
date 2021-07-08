import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExternalReference } from  '../../model/cac/ExternalReference'
import { ExternalReferenceField, ExternalReferenceFieldMeta, ExternalReferenceTypeName } from  '../../meta/cac/ExternalReferenceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExternalReference, void>
  externalReference: ExternalReference[] | undefined
  renderContext: RenderContext
}

export const ExternalReferenceSubElementsMap: SubElementsTemplatesMap<ExternalReferenceField, ExternalReference, void> = new Map([
    [
      ExternalReferenceField.UBLExtensions,
      { meta: ExternalReferenceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ExternalReferenceField.UBLExtensions}
          meta={ExternalReferenceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.URI,
      { meta: ExternalReferenceFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ExternalReferenceField.URI}
          meta={ExternalReferenceFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.DocumentHash,
      { meta: ExternalReferenceFieldMeta.DocumentHash,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExternalReferenceField.DocumentHash}
          meta={ExternalReferenceFieldMeta.DocumentHash}
          fieldConfig={fieldConfig}
          text={value?.DocumentHash}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.HashAlgorithmMethod,
      { meta: ExternalReferenceFieldMeta.HashAlgorithmMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExternalReferenceField.HashAlgorithmMethod}
          meta={ExternalReferenceFieldMeta.HashAlgorithmMethod}
          fieldConfig={fieldConfig}
          text={value?.HashAlgorithmMethod}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.ExpiryDate,
      { meta: ExternalReferenceFieldMeta.ExpiryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ExternalReferenceField.ExpiryDate}
          meta={ExternalReferenceFieldMeta.ExpiryDate}
          fieldConfig={fieldConfig}
          date={value?.ExpiryDate}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.ExpiryTime,
      { meta: ExternalReferenceFieldMeta.ExpiryTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ExternalReferenceField.ExpiryTime}
          meta={ExternalReferenceFieldMeta.ExpiryTime}
          fieldConfig={fieldConfig}
          time={value?.ExpiryTime}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.MimeCode,
      { meta: ExternalReferenceFieldMeta.MimeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExternalReferenceField.MimeCode}
          meta={ExternalReferenceFieldMeta.MimeCode}
          fieldConfig={fieldConfig}
          code={value?.MimeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.FormatCode,
      { meta: ExternalReferenceFieldMeta.FormatCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExternalReferenceField.FormatCode}
          meta={ExternalReferenceFieldMeta.FormatCode}
          fieldConfig={fieldConfig}
          code={value?.FormatCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.EncodingCode,
      { meta: ExternalReferenceFieldMeta.EncodingCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExternalReferenceField.EncodingCode}
          meta={ExternalReferenceFieldMeta.EncodingCode}
          fieldConfig={fieldConfig}
          code={value?.EncodingCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.CharacterSetCode,
      { meta: ExternalReferenceFieldMeta.CharacterSetCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ExternalReferenceField.CharacterSetCode}
          meta={ExternalReferenceFieldMeta.CharacterSetCode}
          fieldConfig={fieldConfig}
          code={value?.CharacterSetCode}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.FileName,
      { meta: ExternalReferenceFieldMeta.FileName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExternalReferenceField.FileName}
          meta={ExternalReferenceFieldMeta.FileName}
          fieldConfig={fieldConfig}
          text={value?.FileName}
          renderContext={renderContext}
        />}
    ],

    [
      ExternalReferenceField.Description,
      { meta: ExternalReferenceFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ExternalReferenceField.Description}
          meta={ExternalReferenceFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function ExternalReferenceDisplay<TFieldMeta>({ meta, fieldConfig, externalReference, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExternalReferenceTypeName,
    meta,
    fieldConfig,
    externalReference,
    renderContext,
    ExternalReferenceSubElementsMap,
  )
}
