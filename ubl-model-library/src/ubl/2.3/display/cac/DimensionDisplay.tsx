import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Dimension
  meta: FieldMeta<T>
}

export default function DimensionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DimensionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DimensionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DimensionFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DimensionFieldMeta.AttributeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DimensionFieldMeta.Measure} 
          value={value.Measure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={DimensionFieldMeta.Measure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DimensionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DimensionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DimensionFieldMeta.MinimumMeasure} 
          value={value.MinimumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={DimensionFieldMeta.MinimumMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DimensionFieldMeta.MaximumMeasure} 
          value={value.MaximumMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={DimensionFieldMeta.MaximumMeasure} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
