import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalService } from  '../../model/cac/DigitalService'
import { DigitalServiceFieldMeta } from  '../../meta/cac/DigitalServiceMeta'
import DeliveryChannelDisplay from './DeliveryChannelDisplay'
import { DeliveryChannel } from '../../model/cac/DeliveryChannel'
import DocumentMetadataDisplay from './DocumentMetadataDisplay'
import { DocumentMetadata } from '../../model/cac/DocumentMetadata'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DigitalService | undefined
  meta: FieldMeta<T>
}

export default function DigitalServiceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DigitalService">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalServiceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DigitalServiceFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={DigitalServiceFieldMeta.CustomizationID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentMetadata ubl-DigitalDocumentMetadata"
            label="Digital Document Metadata"
            items={value.DigitalDocumentMetadata}
            meta={DigitalServiceFieldMeta.DigitalDocumentMetadata} 
            itemDisplay={ (itemValue: DocumentMetadata, key: string | number) =>
              <DocumentMetadataDisplay
                key={key}
                label="Digital Document Metadata"
                value={itemValue}
                meta={DigitalServiceFieldMeta.DigitalDocumentMetadata}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DeliveryChannel ubl-DigitalDeliveryChannel"
            label="Digital Delivery Channel"
            items={value.DigitalDeliveryChannel}
            meta={DigitalServiceFieldMeta.DigitalDeliveryChannel} 
            itemDisplay={ (itemValue: DeliveryChannel, key: string | number) =>
              <DeliveryChannelDisplay
                key={key}
                label="Digital Delivery Channel"
                value={itemValue}
                meta={DigitalServiceFieldMeta.DigitalDeliveryChannel}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-CertificationDocumentReference"
            label="Certification Document Reference"
            items={value.CertificationDocumentReference}
            meta={DigitalServiceFieldMeta.CertificationDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Certification Document Reference"
                value={itemValue}
                meta={DigitalServiceFieldMeta.CertificationDocumentReference}
              />
            }
          />
        </div>
    </div>
  )
}
