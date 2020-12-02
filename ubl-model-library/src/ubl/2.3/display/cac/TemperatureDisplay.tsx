import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Temperature } from  '../../model/cac/Temperature'
import { TemperatureFieldMeta } from  '../../meta/cac/TemperatureMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Temperature
  meta: FieldMeta<T>
}

export default function TemperatureDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TemperatureFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TemperatureFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TemperatureFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TemperatureFieldMeta.AttributeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TemperatureFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={TemperatureFieldMeta.Measure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TemperatureFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TemperatureFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
