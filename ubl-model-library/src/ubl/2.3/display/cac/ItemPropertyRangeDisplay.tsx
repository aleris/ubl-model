import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyRange } from  '../../model/cac/ItemPropertyRange'
import { ItemPropertyRangeFieldMeta } from  '../../meta/cac/ItemPropertyRangeMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemPropertyRange
  meta: FieldMeta<T>
}

export default function ItemPropertyRangeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemPropertyRange ubl-ItemPropertyRangeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemPropertyRange ubl-UBLExtensions"
          meta={ItemPropertyRangeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemPropertyRangeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemPropertyRange ubl-Text ubl-MinimumValue"
          meta={ItemPropertyRangeFieldMeta.MinimumValue} 
          value={value.MinimumValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Minimum Value"
              value={itemValue}
              meta={ItemPropertyRangeFieldMeta.MinimumValue}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemPropertyRange ubl-Text ubl-MaximumValue"
          meta={ItemPropertyRangeFieldMeta.MaximumValue} 
          value={value.MaximumValue}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Maximum Value"
              value={itemValue}
              meta={ItemPropertyRangeFieldMeta.MaximumValue}
            />
          }
        />
        </div>
    </div>
  )
}
