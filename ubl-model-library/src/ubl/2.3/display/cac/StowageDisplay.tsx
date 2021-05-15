import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Stowage } from  '../../model/cac/Stowage'
import { StowageFieldMeta } from  '../../meta/cac/StowageMeta'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Stowage | undefined
  meta: FieldMeta<T>
}

export default function StowageDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Stowage">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={StowageFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Location Identifier"
            value={value.LocationID?.[0]}
            meta={StowageFieldMeta.LocationID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Location"
            label="Location"
            items={value.Location}
            meta={StowageFieldMeta.Location} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Location"
                value={itemValue}
                meta={StowageFieldMeta.Location}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={StowageFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={StowageFieldMeta.MeasurementDimension}
              />
            }
          />
        </div>
    </div>
  )
}
