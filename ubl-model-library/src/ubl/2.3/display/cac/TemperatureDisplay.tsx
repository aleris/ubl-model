import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Temperature | undefined
  meta: FieldMeta<T>
}

export default function TemperatureDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Temperature">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TemperatureFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Attribute Identifier"
            value={value.AttributeID?.[0]}
            meta={TemperatureFieldMeta.AttributeID}
          />

          <MeasureDisplay
            label="Measure"
            value={value.Measure?.[0]}
            meta={TemperatureFieldMeta.Measure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TemperatureFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TemperatureFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}
