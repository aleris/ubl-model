import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyRange } from  '../../model/cac/ItemPropertyRange'
import { ItemPropertyRangeFieldMeta } from  '../../meta/cac/ItemPropertyRangeMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemPropertyRange | undefined
  meta: FieldMeta<T>
}

export default function ItemPropertyRangeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemPropertyRange">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemPropertyRangeFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Minimum Value"
            value={value.MinimumValue?.[0]}
            meta={ItemPropertyRangeFieldMeta.MinimumValue}
          />

          <TextDisplay
            label="Maximum Value"
            value={value.MaximumValue?.[0]}
            meta={ItemPropertyRangeFieldMeta.MaximumValue}
          />
        </div>
    </div>
  )
}
