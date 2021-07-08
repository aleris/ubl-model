import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RoadTransport } from  '../../model/cac/RoadTransport'
import { RoadTransportField, RoadTransportFieldMeta, RoadTransportTypeName } from  '../../meta/cac/RoadTransportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RoadTransport, void>
  roadTransport: RoadTransport[] | undefined
  renderContext: RenderContext
}

export const RoadTransportSubElementsMap: SubElementsTemplatesMap<RoadTransportField, RoadTransport, void> = new Map([
    [
      RoadTransportField.UBLExtensions,
      { meta: RoadTransportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RoadTransportField.UBLExtensions}
          meta={RoadTransportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RoadTransportField.LicensePlateID,
      { meta: RoadTransportFieldMeta.LicensePlateID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RoadTransportField.LicensePlateID}
          meta={RoadTransportFieldMeta.LicensePlateID}
          fieldConfig={fieldConfig}
          identifier={value?.LicensePlateID}
          renderContext={renderContext}
        />}
    ]
]) 

export function RoadTransportDisplay<TFieldMeta>({ meta, fieldConfig, roadTransport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RoadTransportTypeName,
    meta,
    fieldConfig,
    roadTransport,
    renderContext,
    RoadTransportSubElementsMap,
  )
}
