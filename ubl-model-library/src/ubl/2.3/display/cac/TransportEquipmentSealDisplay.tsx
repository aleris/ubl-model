import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEquipmentSeal } from  '../../model/cac/TransportEquipmentSeal'
import { TransportEquipmentSealField, TransportEquipmentSealFieldMeta, TransportEquipmentSealTypeName } from  '../../meta/cac/TransportEquipmentSealMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportEquipmentSeal, void>
  transportEquipmentSeal: TransportEquipmentSeal[] | undefined
  renderContext: RenderContext
}

export const TransportEquipmentSealSubElementsMap: SubElementsTemplatesMap<TransportEquipmentSealField, TransportEquipmentSeal, void> = new Map([
    [
      TransportEquipmentSealField.UBLExtensions,
      { meta: TransportEquipmentSealFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportEquipmentSealField.UBLExtensions}
          meta={TransportEquipmentSealFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentSealField.ID,
      { meta: TransportEquipmentSealFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportEquipmentSealField.ID}
          meta={TransportEquipmentSealFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentSealField.SealIssuerTypeCode,
      { meta: TransportEquipmentSealFieldMeta.SealIssuerTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentSealField.SealIssuerTypeCode}
          meta={TransportEquipmentSealFieldMeta.SealIssuerTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SealIssuerTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentSealField.Condition,
      { meta: TransportEquipmentSealFieldMeta.Condition,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentSealField.Condition}
          meta={TransportEquipmentSealFieldMeta.Condition}
          fieldConfig={fieldConfig}
          text={value?.Condition}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentSealField.SealStatusCode,
      { meta: TransportEquipmentSealFieldMeta.SealStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentSealField.SealStatusCode}
          meta={TransportEquipmentSealFieldMeta.SealStatusCode}
          fieldConfig={fieldConfig}
          code={value?.SealStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentSealField.SealingPartyType,
      { meta: TransportEquipmentSealFieldMeta.SealingPartyType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentSealField.SealingPartyType}
          meta={TransportEquipmentSealFieldMeta.SealingPartyType}
          fieldConfig={fieldConfig}
          text={value?.SealingPartyType}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportEquipmentSealDisplay<TFieldMeta>({ meta, fieldConfig, transportEquipmentSeal, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportEquipmentSealTypeName,
    meta,
    fieldConfig,
    transportEquipmentSeal,
    renderContext,
    TransportEquipmentSealSubElementsMap,
  )
}
