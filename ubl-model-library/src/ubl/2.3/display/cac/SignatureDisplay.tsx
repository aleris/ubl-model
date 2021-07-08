import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Signature } from  '../../model/cac/Signature'
import { SignatureField, SignatureFieldMeta, SignatureTypeName } from  '../../meta/cac/SignatureMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from './AttachmentDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Signature, void>
  signature: Signature[] | undefined
  renderContext: RenderContext
}

export const SignatureSubElementsMap: SubElementsTemplatesMap<SignatureField, Signature, void> = new Map([
    [
      SignatureField.UBLExtensions,
      { meta: SignatureFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SignatureField.UBLExtensions}
          meta={SignatureFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.ID,
      { meta: SignatureFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SignatureField.ID}
          meta={SignatureFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.ReasonCode,
      { meta: SignatureFieldMeta.ReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={SignatureField.ReasonCode}
          meta={SignatureFieldMeta.ReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.Note,
      { meta: SignatureFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SignatureField.Note}
          meta={SignatureFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.ValidationDate,
      { meta: SignatureFieldMeta.ValidationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={SignatureField.ValidationDate}
          meta={SignatureFieldMeta.ValidationDate}
          fieldConfig={fieldConfig}
          date={value?.ValidationDate}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.ValidationTime,
      { meta: SignatureFieldMeta.ValidationTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={SignatureField.ValidationTime}
          meta={SignatureFieldMeta.ValidationTime}
          fieldConfig={fieldConfig}
          time={value?.ValidationTime}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.ValidatorID,
      { meta: SignatureFieldMeta.ValidatorID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={SignatureField.ValidatorID}
          meta={SignatureFieldMeta.ValidatorID}
          fieldConfig={fieldConfig}
          identifier={value?.ValidatorID}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.CanonicalizationMethod,
      { meta: SignatureFieldMeta.CanonicalizationMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SignatureField.CanonicalizationMethod}
          meta={SignatureFieldMeta.CanonicalizationMethod}
          fieldConfig={fieldConfig}
          text={value?.CanonicalizationMethod}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.SignatureMethod,
      { meta: SignatureFieldMeta.SignatureMethod,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={SignatureField.SignatureMethod}
          meta={SignatureFieldMeta.SignatureMethod}
          fieldConfig={fieldConfig}
          text={value?.SignatureMethod}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.SignatoryParty,
      { meta: SignatureFieldMeta.SignatoryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={SignatureField.SignatoryParty}
          meta={SignatureFieldMeta.SignatoryParty}
          fieldConfig={fieldConfig}
          party={value?.SignatoryParty}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.DigitalSignatureAttachment,
      { meta: SignatureFieldMeta.DigitalSignatureAttachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={SignatureField.DigitalSignatureAttachment}
          meta={SignatureFieldMeta.DigitalSignatureAttachment}
          fieldConfig={fieldConfig}
          attachment={value?.DigitalSignatureAttachment}
          renderContext={renderContext}
        />}
    ],

    [
      SignatureField.OriginalDocumentReference,
      { meta: SignatureFieldMeta.OriginalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={SignatureField.OriginalDocumentReference}
          meta={SignatureFieldMeta.OriginalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.OriginalDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function SignatureDisplay<TFieldMeta>({ meta, fieldConfig, signature, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SignatureTypeName,
    meta,
    fieldConfig,
    signature,
    renderContext,
    SignatureSubElementsMap,
  )
}
