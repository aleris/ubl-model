import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalService } from  '../../model/cac/DigitalService'
import { DigitalServiceField, DigitalServiceFieldMeta, DigitalServiceTypeName } from  '../../meta/cac/DigitalServiceMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DeliveryChannelDisplay } from './DeliveryChannelDisplay'
import { DocumentMetadataDisplay } from './DocumentMetadataDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalService, void>
  digitalService: DigitalService[] | undefined
  renderContext: RenderContext
}

export const DigitalServiceSubElementsMap: SubElementsTemplatesMap<DigitalServiceField, DigitalService, void> = new Map([
    [
      DigitalServiceField.UBLExtensions,
      { meta: DigitalServiceFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalServiceField.UBLExtensions}
          meta={DigitalServiceFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalServiceField.ID,
      { meta: DigitalServiceFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalServiceField.ID}
          meta={DigitalServiceFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalServiceField.CustomizationID,
      { meta: DigitalServiceFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalServiceField.CustomizationID}
          meta={DigitalServiceFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalServiceField.DigitalDocumentMetadata,
      { meta: DigitalServiceFieldMeta.DigitalDocumentMetadata,
        template: ({value, renderContext, fieldConfig}) => <DocumentMetadataDisplay
          key={DigitalServiceField.DigitalDocumentMetadata}
          meta={DigitalServiceFieldMeta.DigitalDocumentMetadata}
          fieldConfig={fieldConfig}
          documentMetadata={value?.DigitalDocumentMetadata}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalServiceField.DigitalDeliveryChannel,
      { meta: DigitalServiceFieldMeta.DigitalDeliveryChannel,
        template: ({value, renderContext, fieldConfig}) => <DeliveryChannelDisplay
          key={DigitalServiceField.DigitalDeliveryChannel}
          meta={DigitalServiceFieldMeta.DigitalDeliveryChannel}
          fieldConfig={fieldConfig}
          deliveryChannel={value?.DigitalDeliveryChannel}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalServiceField.CertificationDocumentReference,
      { meta: DigitalServiceFieldMeta.CertificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DigitalServiceField.CertificationDocumentReference}
          meta={DigitalServiceFieldMeta.CertificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CertificationDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalServiceDisplay<TFieldMeta>({ meta, fieldConfig, digitalService, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalServiceTypeName,
    meta,
    fieldConfig,
    digitalService,
    renderContext,
    DigitalServiceSubElementsMap,
  )
}
