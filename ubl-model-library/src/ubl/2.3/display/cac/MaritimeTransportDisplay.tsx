import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MaritimeTransport } from  '../../model/cac/MaritimeTransport'
import { MaritimeTransportField, MaritimeTransportFieldMeta, MaritimeTransportTypeName } from  '../../meta/cac/MaritimeTransportMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { LocationDisplay } from './LocationDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MaritimeTransport, void>
  maritimeTransport: MaritimeTransport[] | undefined
  renderContext: RenderContext
}

export const MaritimeTransportSubElementsMap: SubElementsTemplatesMap<MaritimeTransportField, MaritimeTransport, void> = new Map([
    [
      MaritimeTransportField.UBLExtensions,
      { meta: MaritimeTransportFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MaritimeTransportField.UBLExtensions}
          meta={MaritimeTransportFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.VesselID,
      { meta: MaritimeTransportFieldMeta.VesselID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={MaritimeTransportField.VesselID}
          meta={MaritimeTransportFieldMeta.VesselID}
          fieldConfig={fieldConfig}
          identifier={value?.VesselID}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.VesselName,
      { meta: MaritimeTransportFieldMeta.VesselName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MaritimeTransportField.VesselName}
          meta={MaritimeTransportFieldMeta.VesselName}
          fieldConfig={fieldConfig}
          text={value?.VesselName}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.RadioCallSignID,
      { meta: MaritimeTransportFieldMeta.RadioCallSignID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={MaritimeTransportField.RadioCallSignID}
          meta={MaritimeTransportFieldMeta.RadioCallSignID}
          fieldConfig={fieldConfig}
          identifier={value?.RadioCallSignID}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.ShipsRequirements,
      { meta: MaritimeTransportFieldMeta.ShipsRequirements,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={MaritimeTransportField.ShipsRequirements}
          meta={MaritimeTransportFieldMeta.ShipsRequirements}
          fieldConfig={fieldConfig}
          text={value?.ShipsRequirements}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.GrossTonnageMeasure,
      { meta: MaritimeTransportFieldMeta.GrossTonnageMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={MaritimeTransportField.GrossTonnageMeasure}
          meta={MaritimeTransportFieldMeta.GrossTonnageMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossTonnageMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.NetTonnageMeasure,
      { meta: MaritimeTransportFieldMeta.NetTonnageMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={MaritimeTransportField.NetTonnageMeasure}
          meta={MaritimeTransportFieldMeta.NetTonnageMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetTonnageMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.RegistryCertificateDocumentReference,
      { meta: MaritimeTransportFieldMeta.RegistryCertificateDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={MaritimeTransportField.RegistryCertificateDocumentReference}
          meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RegistryCertificateDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      MaritimeTransportField.RegistryPortLocation,
      { meta: MaritimeTransportFieldMeta.RegistryPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={MaritimeTransportField.RegistryPortLocation}
          meta={MaritimeTransportFieldMeta.RegistryPortLocation}
          fieldConfig={fieldConfig}
          location={value?.RegistryPortLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function MaritimeTransportDisplay<TFieldMeta>({ meta, fieldConfig, maritimeTransport, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MaritimeTransportTypeName,
    meta,
    fieldConfig,
    maritimeTransport,
    renderContext,
    MaritimeTransportSubElementsMap,
  )
}
