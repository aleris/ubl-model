import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Temperature
  meta: FieldMeta<T>
}

export default function TemperatureDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Temperature ubl-TemperatureType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Temperature ubl-UBLExtensions"
          meta={TemperatureFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TemperatureFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Temperature ubl-Identifier ubl-AttributeID"
          meta={TemperatureFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Attribute Identifier"
              value={itemValue}
              meta={TemperatureFieldMeta.AttributeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Temperature ubl-Measure"
          meta={TemperatureFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Measure"
              value={itemValue}
              meta={TemperatureFieldMeta.Measure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Temperature ubl-Text ubl-Description"
          meta={TemperatureFieldMeta.Description} 
          value={value.Description}
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
