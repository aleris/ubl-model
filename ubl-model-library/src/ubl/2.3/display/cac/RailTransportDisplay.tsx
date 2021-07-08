import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RailTransport } from  '../../model/cac/RailTransport'
import { RailTransportField, RailTransportFieldMeta, RailTransportTypeName } from  '../../meta/cac/RailTransportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RailTransport, void>
  railTransport: RailTransport[] | undefined
  renderContext: RenderContext
}

export const RailTransportSubElementsMap: SubElementsTemplatesMap<RailTransportField, RailTransport, void> = new Map([
    [
      RailTransportField.UBLExtensions,
      { meta: RailTransportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RailTransportField.UBLExtensions}
          meta={RailTransportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RailTransportField.TrainID,
      { meta: RailTransportFieldMeta.TrainID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RailTransportField.TrainID}
          meta={RailTransportFieldMeta.TrainID}
          fieldConfig={fieldConfig}
          identifier={value?.TrainID}
          renderContext={renderContext}
        />}
    ],

    [
      RailTransportField.RailCarID,
      { meta: RailTransportFieldMeta.RailCarID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RailTransportField.RailCarID}
          meta={RailTransportFieldMeta.RailCarID}
          fieldConfig={fieldConfig}
          identifier={value?.RailCarID}
          renderContext={renderContext}
        />}
    ]
]) 

export function RailTransportDisplay<TFieldMeta>({ meta, fieldConfig, railTransport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RailTransportTypeName,
    meta,
    fieldConfig,
    railTransport,
    renderContext,
    RailTransportSubElementsMap,
  )
}
