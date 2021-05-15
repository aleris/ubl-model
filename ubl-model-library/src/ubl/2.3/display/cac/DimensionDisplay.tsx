import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Dimension | undefined
  meta: FieldMeta<T>
}

export default function DimensionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Dimension">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DimensionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Attribute Identifier"
            value={value.AttributeID?.[0]}
            meta={DimensionFieldMeta.AttributeID}
          />

          <MeasureDisplay
            label="Measure"
            value={value.Measure?.[0]}
            meta={DimensionFieldMeta.Measure}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={DimensionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={DimensionFieldMeta.Description}
              />
            }
          />

          <MeasureDisplay
            label="Minimum Measure"
            value={value.MinimumMeasure?.[0]}
            meta={DimensionFieldMeta.MinimumMeasure}
          />

          <MeasureDisplay
            label="Maximum Measure"
            value={value.MaximumMeasure?.[0]}
            meta={DimensionFieldMeta.MaximumMeasure}
          />
        </div>
    </div>
  )
}
