import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyRange } from  '../../model/cac/ItemPropertyRange'
import { ItemPropertyRangeFieldMeta } from  '../../meta/cac/ItemPropertyRangeMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ItemPropertyRange
  meta: FieldMeta<T>
}

export default function ItemPropertyRangeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemPropertyRangeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemPropertyRangeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyRangeFieldMeta.MinimumValue} 
          value={value.MinimumValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyRangeFieldMeta.MinimumValue} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyRangeFieldMeta.MaximumValue} 
          value={value.MaximumValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyRangeFieldMeta.MaximumValue} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
