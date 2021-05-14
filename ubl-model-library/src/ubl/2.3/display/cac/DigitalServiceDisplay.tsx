import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DigitalService
  meta: FieldMeta<T>
}

export default function DigitalServiceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DigitalService ubl-DigitalServiceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalService ubl-UBLExtensions"
          meta={DigitalServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalServiceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalService ubl-Identifier ubl-ID"
          meta={DigitalServiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DigitalServiceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalService ubl-Identifier ubl-CustomizationID"
          meta={DigitalServiceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={DigitalServiceFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalService ubl-DocumentMetadata ubl-DigitalDocumentMetadata"
          meta={DigitalServiceFieldMeta.DigitalDocumentMetadata} 
          value={value.DigitalDocumentMetadata}
          itemDisplay={ (itemValue: DocumentMetadata, key: string | number) =>
            <DocumentMetadataDisplay
              key={key}
              label="Digital Document Metadata"
              value={itemValue}
              meta={DigitalServiceFieldMeta.DigitalDocumentMetadata}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalService ubl-DeliveryChannel ubl-DigitalDeliveryChannel"
          meta={DigitalServiceFieldMeta.DigitalDeliveryChannel} 
          value={value.DigitalDeliveryChannel}
          itemDisplay={ (itemValue: DeliveryChannel, key: string | number) =>
            <DeliveryChannelDisplay
              key={key}
              label="Digital Delivery Channel"
              value={itemValue}
              meta={DigitalServiceFieldMeta.DigitalDeliveryChannel}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalService ubl-DocumentReference ubl-CertificationDocumentReference"
          meta={DigitalServiceFieldMeta.CertificationDocumentReference} 
          value={value.CertificationDocumentReference}
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
