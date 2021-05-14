import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RailTransport } from  '../../model/cac/RailTransport'
import { RailTransportFieldMeta } from  '../../meta/cac/RailTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RailTransport
  meta: FieldMeta<T>
}

export default function RailTransportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RailTransport ubl-RailTransportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RailTransport ubl-UBLExtensions"
          meta={RailTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RailTransportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RailTransport ubl-Identifier ubl-TrainID"
          meta={RailTransportFieldMeta.TrainID} 
          value={value.TrainID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Train Identifier"
              value={itemValue}
              meta={RailTransportFieldMeta.TrainID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RailTransport ubl-Identifier ubl-RailCarID"
          meta={RailTransportFieldMeta.RailCarID} 
          value={value.RailCarID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Rail Car Identifier"
              value={itemValue}
              meta={RailTransportFieldMeta.RailCarID}
            />
          }
        />
        </div>
    </div>
  )
}
