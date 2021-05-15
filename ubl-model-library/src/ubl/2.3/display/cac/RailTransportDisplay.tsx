import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RailTransport } from  '../../model/cac/RailTransport'
import { RailTransportFieldMeta } from  '../../meta/cac/RailTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RailTransport | undefined
  meta: FieldMeta<T>
}

export default function RailTransportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RailTransport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RailTransportFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Train Identifier"
            value={value.TrainID?.[0]}
            meta={RailTransportFieldMeta.TrainID}
          />

          <IdentifierDisplay
            label="Rail Car Identifier"
            value={value.RailCarID?.[0]}
            meta={RailTransportFieldMeta.RailCarID}
          />
        </div>
    </div>
  )
}
