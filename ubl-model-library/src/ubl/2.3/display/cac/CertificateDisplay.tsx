import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Certificate } from  '../../model/cac/Certificate'
import { CertificateField, CertificateFieldMeta, CertificateTypeName } from  '../../meta/cac/CertificateMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { SignatureDisplay } from './SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Certificate, void>
  certificate: Certificate[] | undefined
  renderContext: RenderContext
}

export const CertificateSubElementsMap: SubElementsTemplatesMap<CertificateField, Certificate, void> = new Map([
    [
      CertificateField.UBLExtensions,
      { meta: CertificateFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CertificateField.UBLExtensions}
          meta={CertificateFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.ID,
      { meta: CertificateFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateField.ID}
          meta={CertificateFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.CertificateTypeCode,
      { meta: CertificateFieldMeta.CertificateTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CertificateField.CertificateTypeCode}
          meta={CertificateFieldMeta.CertificateTypeCode}
          fieldConfig={fieldConfig}
          code={value?.CertificateTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.CertificateType,
      { meta: CertificateFieldMeta.CertificateType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateField.CertificateType}
          meta={CertificateFieldMeta.CertificateType}
          fieldConfig={fieldConfig}
          text={value?.CertificateType}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.Remarks,
      { meta: CertificateFieldMeta.Remarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateField.Remarks}
          meta={CertificateFieldMeta.Remarks}
          fieldConfig={fieldConfig}
          text={value?.Remarks}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.IssuerParty,
      { meta: CertificateFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateField.IssuerParty}
          meta={CertificateFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.DocumentReference,
      { meta: CertificateFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CertificateField.DocumentReference}
          meta={CertificateFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateField.Signature,
      { meta: CertificateFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CertificateField.Signature}
          meta={CertificateFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function CertificateDisplay<TFieldMeta>({ meta, fieldConfig, certificate, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CertificateTypeName,
    meta,
    fieldConfig,
    certificate,
    renderContext,
    CertificateSubElementsMap,
  )
}
