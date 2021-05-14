import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Stowage
  meta: FieldMeta<T>
}

export default function StowageDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Stowage ubl-StowageType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Stowage ubl-UBLExtensions"
          meta={StowageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={StowageFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Stowage ubl-Identifier ubl-LocationID"
          meta={StowageFieldMeta.LocationID} 
          value={value.LocationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Location Identifier"
              value={itemValue}
              meta={StowageFieldMeta.LocationID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Stowage ubl-Text ubl-Location"
          meta={StowageFieldMeta.Location} 
          value={value.Location}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Location"
              value={itemValue}
              meta={StowageFieldMeta.Location}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Stowage ubl-Dimension ubl-MeasurementDimension"
          meta={StowageFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
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
