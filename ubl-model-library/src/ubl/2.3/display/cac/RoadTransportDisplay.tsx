import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RoadTransport } from  '../../model/cac/RoadTransport'
import { RoadTransportFieldMeta } from  '../../meta/cac/RoadTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RoadTransport | undefined
  meta: FieldMeta<T>
}

export default function RoadTransportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RoadTransport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RoadTransportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="License Plate Identifier"
            value={value.LicensePlateID?.[0]}
            meta={RoadTransportFieldMeta.LicensePlateID}
          />
        </div>
    </div>
  )
}
