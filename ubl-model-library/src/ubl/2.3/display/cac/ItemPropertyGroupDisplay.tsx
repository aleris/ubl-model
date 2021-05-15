import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyGroup } from  '../../model/cac/ItemPropertyGroup'
import { ItemPropertyGroupFieldMeta } from  '../../meta/cac/ItemPropertyGroupMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ItemPropertyGroup | undefined
  meta: FieldMeta<T>
}

export default function ItemPropertyGroupDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ItemPropertyGroup">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ItemPropertyGroupFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ItemPropertyGroupFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ItemPropertyGroupFieldMeta.Name}
          />

          <CodeDisplay
            label="Importance Code"
            value={value.ImportanceCode?.[0]}
            meta={ItemPropertyGroupFieldMeta.ImportanceCode}
          />
        </div>
    </div>
  )
}
