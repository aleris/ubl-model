import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Stowage
  meta: FieldMeta<T>
}

export default function StowageDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={StowageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={StowageFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StowageFieldMeta.LocationID} 
          value={value.LocationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={StowageFieldMeta.LocationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StowageFieldMeta.Location} 
          value={value.Location}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={StowageFieldMeta.Location} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={StowageFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={StowageFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
