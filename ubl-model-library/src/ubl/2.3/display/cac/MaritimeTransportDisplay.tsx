import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: MaritimeTransport | undefined
  meta: FieldMeta<T>
}

export default function MaritimeTransportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MaritimeTransport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MaritimeTransportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Vessel Identifier"
            value={value.VesselID?.[0]}
            meta={MaritimeTransportFieldMeta.VesselID}
          />

          <TextDisplay
            label="Vessel Name"
            value={value.VesselName?.[0]}
            meta={MaritimeTransportFieldMeta.VesselName}
          />

          <IdentifierDisplay
            label="Radio Call Sign Identifier"
            value={value.RadioCallSignID?.[0]}
            meta={MaritimeTransportFieldMeta.RadioCallSignID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ShipsRequirements"
            label="Ships Requirements"
            items={value.ShipsRequirements}
            meta={MaritimeTransportFieldMeta.ShipsRequirements} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Ships Requirements"
                value={itemValue}
                meta={MaritimeTransportFieldMeta.ShipsRequirements}
              />
            }
          />

          <MeasureDisplay
            label="Gross Tonnage"
            value={value.GrossTonnageMeasure?.[0]}
            meta={MaritimeTransportFieldMeta.GrossTonnageMeasure}
          />

          <MeasureDisplay
            label="Net Tonnage"
            value={value.NetTonnageMeasure?.[0]}
            meta={MaritimeTransportFieldMeta.NetTonnageMeasure}
          />

          <DocumentReferenceDisplay
            label="Registry Certificate Document Reference"
            value={value.RegistryCertificateDocumentReference?.[0]}
            meta={MaritimeTransportFieldMeta.RegistryCertificateDocumentReference}
          />

          <LocationDisplay
            label="Registry Port Location"
            value={value.RegistryPortLocation?.[0]}
            meta={MaritimeTransportFieldMeta.RegistryPortLocation}
          />
        </div>
    </div>
  )
}
