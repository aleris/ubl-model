import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionCertificatePathChain } from  '../../model/cac/EncryptionCertificatePathChain'
import { EncryptionCertificatePathChainField, EncryptionCertificatePathChainFieldMeta, EncryptionCertificatePathChainTypeName } from  '../../meta/cac/EncryptionCertificatePathChainMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EncryptionCertificatePathChain, void>
  encryptionCertificatePathChain: EncryptionCertificatePathChain[] | undefined
  renderContext: RenderContext
}

export const EncryptionCertificatePathChainSubElementsMap: SubElementsTemplatesMap<EncryptionCertificatePathChainField, EncryptionCertificatePathChain, void> = new Map([
    [
      EncryptionCertificatePathChainField.UBLExtensions,
      { meta: EncryptionCertificatePathChainFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EncryptionCertificatePathChainField.UBLExtensions}
          meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionCertificatePathChainField.Value,
      { meta: EncryptionCertificatePathChainFieldMeta.Value,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EncryptionCertificatePathChainField.Value}
          meta={EncryptionCertificatePathChainFieldMeta.Value}
          fieldConfig={fieldConfig}
          text={value?.Value}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionCertificatePathChainField.URI,
      { meta: EncryptionCertificatePathChainFieldMeta.URI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EncryptionCertificatePathChainField.URI}
          meta={EncryptionCertificatePathChainFieldMeta.URI}
          fieldConfig={fieldConfig}
          identifier={value?.URI}
          renderContext={renderContext}
        />}
    ]
]) 

export function EncryptionCertificatePathChainDisplay<TFieldMeta>({ meta, fieldConfig, encryptionCertificatePathChain, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EncryptionCertificatePathChainTypeName,
    meta,
    fieldConfig,
    encryptionCertificatePathChain,
    renderContext,
    EncryptionCertificatePathChainSubElementsMap,
  )
}
