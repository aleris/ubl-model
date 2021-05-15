import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ActivityProperty } from  '../../model/cac/ActivityProperty'
import { ActivityPropertyFieldMeta } from  '../../meta/cac/ActivityPropertyMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ActivityProperty | undefined
  meta: FieldMeta<T>
}

export default function ActivityPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ActivityProperty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ActivityPropertyFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ActivityPropertyFieldMeta.Name}
          />

          <TextDisplay
            label="Value"
            value={value.Value?.[0]}
            meta={ActivityPropertyFieldMeta.Value}
          />
        </div>
    </div>
  )
}
