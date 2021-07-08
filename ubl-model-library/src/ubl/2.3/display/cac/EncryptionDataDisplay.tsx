import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionData } from  '../../model/cac/EncryptionData'
import { EncryptionDataField, EncryptionDataFieldMeta, EncryptionDataTypeName } from  '../../meta/cac/EncryptionDataMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttachmentDisplay } from './AttachmentDisplay'
import { EncryptionCertificatePathChainDisplay } from './EncryptionCertificatePathChainDisplay'
import { EncryptionSymmetricAlgorithmDisplay } from './EncryptionSymmetricAlgorithmDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EncryptionData, void>
  encryptionData: EncryptionData[] | undefined
  renderContext: RenderContext
}

export const EncryptionDataSubElementsMap: SubElementsTemplatesMap<EncryptionDataField, EncryptionData, void> = new Map([
    [
      EncryptionDataField.UBLExtensions,
      { meta: EncryptionDataFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EncryptionDataField.UBLExtensions}
          meta={EncryptionDataFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionDataField.MessageFormat,
      { meta: EncryptionDataFieldMeta.MessageFormat,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EncryptionDataField.MessageFormat}
          meta={EncryptionDataFieldMeta.MessageFormat}
          fieldConfig={fieldConfig}
          text={value?.MessageFormat}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionDataField.EncryptionCertificateAttachment,
      { meta: EncryptionDataFieldMeta.EncryptionCertificateAttachment,
        template: ({value, renderContext, fieldConfig}) => <AttachmentDisplay
          key={EncryptionDataField.EncryptionCertificateAttachment}
          meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment}
          fieldConfig={fieldConfig}
          attachment={value?.EncryptionCertificateAttachment}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionDataField.EncryptionCertificatePathChain,
      { meta: EncryptionDataFieldMeta.EncryptionCertificatePathChain,
        template: ({value, renderContext, fieldConfig}) => <EncryptionCertificatePathChainDisplay
          key={EncryptionDataField.EncryptionCertificatePathChain}
          meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain}
          fieldConfig={fieldConfig}
          encryptionCertificatePathChain={value?.EncryptionCertificatePathChain}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionDataField.EncryptionSymmetricAlgorithm,
      { meta: EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm,
        template: ({value, renderContext, fieldConfig}) => <EncryptionSymmetricAlgorithmDisplay
          key={EncryptionDataField.EncryptionSymmetricAlgorithm}
          meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm}
          fieldConfig={fieldConfig}
          encryptionSymmetricAlgorithm={value?.EncryptionSymmetricAlgorithm}
          renderContext={renderContext}
        />}
    ]
]) 

export function EncryptionDataDisplay<TFieldMeta>({ meta, fieldConfig, encryptionData, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EncryptionDataTypeName,
    meta,
    fieldConfig,
    encryptionData,
    renderContext,
    EncryptionDataSubElementsMap,
  )
}
