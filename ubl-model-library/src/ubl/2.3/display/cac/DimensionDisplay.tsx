import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Dimension } from  '../../model/cac/Dimension'
import { DimensionFieldMeta } from  '../../meta/cac/DimensionMeta'
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
  value: Dimension
  meta: FieldMeta<T>
}

export default function DimensionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Dimension ubl-DimensionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Dimension ubl-UBLExtensions"
          meta={DimensionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DimensionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Dimension ubl-Identifier ubl-AttributeID"
          meta={DimensionFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Attribute Identifier"
              value={itemValue}
              meta={DimensionFieldMeta.AttributeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Dimension ubl-Measure"
          meta={DimensionFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Measure"
              value={itemValue}
              meta={DimensionFieldMeta.Measure}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Dimension ubl-Text ubl-Description"
          meta={DimensionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={DimensionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Dimension ubl-Measure ubl-MinimumMeasure"
          meta={DimensionFieldMeta.MinimumMeasure} 
          value={value.MinimumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Minimum Measure"
              value={itemValue}
              meta={DimensionFieldMeta.MinimumMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Dimension ubl-Measure ubl-MaximumMeasure"
          meta={DimensionFieldMeta.MaximumMeasure} 
          value={value.MaximumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Maximum Measure"
              value={itemValue}
              meta={DimensionFieldMeta.MaximumMeasure}
            />
          }
        />
        </div>
    </div>
  )
}
