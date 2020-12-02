import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DigitalService
  meta: FieldMeta<T>
}

export default function DigitalServiceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DigitalServiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DigitalServiceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalServiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalServiceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalServiceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DigitalServiceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalServiceFieldMeta.DigitalDocumentMetadata} 
          value={value.DigitalDocumentMetadata}
          itemDisplay={ (itemValue: DocumentMetadata, key: string | number) =>
            <DocumentMetadataDisplay key={key} meta={DigitalServiceFieldMeta.DigitalDocumentMetadata} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalServiceFieldMeta.DigitalDeliveryChannel} 
          value={value.DigitalDeliveryChannel}
          itemDisplay={ (itemValue: DeliveryChannel, key: string | number) =>
            <DeliveryChannelDisplay key={key} meta={DigitalServiceFieldMeta.DigitalDeliveryChannel} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DigitalServiceFieldMeta.CertificationDocumentReference} 
          value={value.CertificationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DigitalServiceFieldMeta.CertificationDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
