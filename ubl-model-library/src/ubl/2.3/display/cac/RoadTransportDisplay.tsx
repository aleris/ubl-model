import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RoadTransport } from  '../../model/cac/RoadTransport'
import { RoadTransportFieldMeta } from  '../../meta/cac/RoadTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RoadTransport
  meta: FieldMeta<T>
}

export default function RoadTransportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RoadTransport ubl-RoadTransportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RoadTransport ubl-UBLExtensions"
          meta={RoadTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RoadTransportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RoadTransport ubl-Identifier ubl-LicensePlateID"
          meta={RoadTransportFieldMeta.LicensePlateID} 
          value={value.LicensePlateID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="License Plate Identifier"
              value={itemValue}
              meta={RoadTransportFieldMeta.LicensePlateID}
            />
          }
        />
        </div>
    </div>
  )
}
