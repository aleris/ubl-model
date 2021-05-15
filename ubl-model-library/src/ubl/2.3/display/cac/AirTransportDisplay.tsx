import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { AirTransport } from  '../../model/cac/AirTransport'
import { AirTransportFieldMeta } from  '../../meta/cac/AirTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: AirTransport | undefined
  meta: FieldMeta<T>
}

export default function AirTransportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-AirTransport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={AirTransportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Aircraft Identifier"
            value={value.AircraftID?.[0]}
            meta={AirTransportFieldMeta.AircraftID}
          />
        </div>
    </div>
  )
}
