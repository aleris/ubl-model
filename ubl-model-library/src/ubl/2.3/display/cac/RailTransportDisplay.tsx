import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RailTransport } from  '../../model/cac/RailTransport'
import { RailTransportFieldMeta } from  '../../meta/cac/RailTransportMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: RailTransport
  meta: FieldMeta<T>
}

export default function RailTransportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RailTransportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RailTransportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RailTransportFieldMeta.TrainID} 
          value={value.TrainID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RailTransportFieldMeta.TrainID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RailTransportFieldMeta.RailCarID} 
          value={value.RailCarID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RailTransportFieldMeta.RailCarID} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
