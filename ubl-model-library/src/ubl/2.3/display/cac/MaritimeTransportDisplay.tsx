import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MaritimeTransport } from  '../../model/cac/MaritimeTransport'
import { MaritimeTransportFieldMeta } from  '../../meta/cac/MaritimeTransportMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MaritimeTransport
  meta: FieldMeta<T>
}

export default function MaritimeTransportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MaritimeTransportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.VesselID} 
          value={value.VesselID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={MaritimeTransportFieldMeta.VesselID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.VesselName} 
          value={value.VesselName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MaritimeTransportFieldMeta.VesselName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.RadioCallSignID} 
          value={value.RadioCallSignID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={MaritimeTransportFieldMeta.RadioCallSignID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.ShipsRequirements} 
          value={value.ShipsRequirements}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MaritimeTransportFieldMeta.ShipsRequirements} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.GrossTonnageMeasure} 
          value={value.GrossTonnageMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={MaritimeTransportFieldMeta.GrossTonnageMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.NetTonnageMeasure} 
          value={value.NetTonnageMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={MaritimeTransportFieldMeta.NetTonnageMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference} 
          value={value.RegistryCertificateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MaritimeTransportFieldMeta.RegistryPortLocation} 
          value={value.RegistryPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={MaritimeTransportFieldMeta.RegistryPortLocation} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
