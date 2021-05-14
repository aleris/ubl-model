import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AirTransport } from  '../../model/cac/AirTransport'
import { AirTransportFieldMeta } from  '../../meta/cac/AirTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AirTransport
  meta: FieldMeta<T>
}

export default function AirTransportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-AirTransport ubl-AirTransportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-AirTransport ubl-UBLExtensions"
          meta={AirTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={AirTransportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-AirTransport ubl-Identifier ubl-AircraftID"
          meta={AirTransportFieldMeta.AircraftID} 
          value={value.AircraftID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Aircraft Identifier"
              value={itemValue}
              meta={AirTransportFieldMeta.AircraftID}
            />
          }
        />
        </div>
    </div>
  )
}
