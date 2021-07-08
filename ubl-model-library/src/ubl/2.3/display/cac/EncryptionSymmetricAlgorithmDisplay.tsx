import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionSymmetricAlgorithm } from  '../../model/cac/EncryptionSymmetricAlgorithm'
import { EncryptionSymmetricAlgorithmField, EncryptionSymmetricAlgorithmFieldMeta, EncryptionSymmetricAlgorithmTypeName } from  '../../meta/cac/EncryptionSymmetricAlgorithmMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EncryptionSymmetricAlgorithm, void>
  encryptionSymmetricAlgorithm: EncryptionSymmetricAlgorithm[] | undefined
  renderContext: RenderContext
}

export const EncryptionSymmetricAlgorithmSubElementsMap: SubElementsTemplatesMap<EncryptionSymmetricAlgorithmField, EncryptionSymmetricAlgorithm, void> = new Map([
    [
      EncryptionSymmetricAlgorithmField.UBLExtensions,
      { meta: EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EncryptionSymmetricAlgorithmField.UBLExtensions}
          meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionSymmetricAlgorithmField.ID,
      { meta: EncryptionSymmetricAlgorithmFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EncryptionSymmetricAlgorithmField.ID}
          meta={EncryptionSymmetricAlgorithmFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      EncryptionSymmetricAlgorithmField.OID,
      { meta: EncryptionSymmetricAlgorithmFieldMeta.OID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EncryptionSymmetricAlgorithmField.OID}
          meta={EncryptionSymmetricAlgorithmFieldMeta.OID}
          fieldConfig={fieldConfig}
          identifier={value?.OID}
          renderContext={renderContext}
        />}
    ]
]) 

export function EncryptionSymmetricAlgorithmDisplay<TFieldMeta>({ meta, fieldConfig, encryptionSymmetricAlgorithm, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EncryptionSymmetricAlgorithmTypeName,
    meta,
    fieldConfig,
    encryptionSymmetricAlgorithm,
    renderContext,
    EncryptionSymmetricAlgorithmSubElementsMap,
  )
}
