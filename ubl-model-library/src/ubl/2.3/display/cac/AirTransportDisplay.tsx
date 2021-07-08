import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AirTransport } from  '../../model/cac/AirTransport'
import { AirTransportField, AirTransportFieldMeta, AirTransportTypeName } from  '../../meta/cac/AirTransportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AirTransport, void>
  airTransport: AirTransport[] | undefined
  renderContext: RenderContext
}

export const AirTransportSubElementsMap: SubElementsTemplatesMap<AirTransportField, AirTransport, void> = new Map([
    [
      AirTransportField.UBLExtensions,
      { meta: AirTransportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AirTransportField.UBLExtensions}
          meta={AirTransportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AirTransportField.AircraftID,
      { meta: AirTransportFieldMeta.AircraftID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AirTransportField.AircraftID}
          meta={AirTransportFieldMeta.AircraftID}
          fieldConfig={fieldConfig}
          identifier={value?.AircraftID}
          renderContext={renderContext}
        />}
    ]
]) 

export function AirTransportDisplay<TFieldMeta>({ meta, fieldConfig, airTransport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AirTransportTypeName,
    meta,
    fieldConfig,
    airTransport,
    renderContext,
    AirTransportSubElementsMap,
  )
}
