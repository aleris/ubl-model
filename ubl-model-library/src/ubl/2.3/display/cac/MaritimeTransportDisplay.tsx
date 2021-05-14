import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: MaritimeTransport
  meta: FieldMeta<T>
}

export default function MaritimeTransportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MaritimeTransport ubl-MaritimeTransportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MaritimeTransport ubl-UBLExtensions"
          meta={MaritimeTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Identifier ubl-VesselID"
          meta={MaritimeTransportFieldMeta.VesselID} 
          value={value.VesselID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Vessel Identifier"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.VesselID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Text ubl-VesselName"
          meta={MaritimeTransportFieldMeta.VesselName} 
          value={value.VesselName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Vessel Name"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.VesselName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Identifier ubl-RadioCallSignID"
          meta={MaritimeTransportFieldMeta.RadioCallSignID} 
          value={value.RadioCallSignID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Radio Call Sign Identifier"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.RadioCallSignID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Text ubl-ShipsRequirements"
          meta={MaritimeTransportFieldMeta.ShipsRequirements} 
          value={value.ShipsRequirements}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Ships Requirements"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.ShipsRequirements}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Measure ubl-GrossTonnageMeasure"
          meta={MaritimeTransportFieldMeta.GrossTonnageMeasure} 
          value={value.GrossTonnageMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Tonnage"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.GrossTonnageMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MaritimeTransport ubl-Measure ubl-NetTonnageMeasure"
          meta={MaritimeTransportFieldMeta.NetTonnageMeasure} 
          value={value.NetTonnageMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Tonnage"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.NetTonnageMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-MaritimeTransport ubl-DocumentReference ubl-RegistryCertificateDocumentReference"
          meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference} 
          value={value.RegistryCertificateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Registry Certificate Document Reference"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-MaritimeTransport ubl-Location ubl-RegistryPortLocation"
          meta={MaritimeTransportFieldMeta.RegistryPortLocation} 
          value={value.RegistryPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Registry Port Location"
              value={itemValue}
              meta={MaritimeTransportFieldMeta.RegistryPortLocation}
            />
          }
        />
        </div>
    </div>
  )
}
