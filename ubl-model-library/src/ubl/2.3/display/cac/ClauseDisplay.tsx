import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Clause } from  '../../model/cac/Clause'
import { ClauseFieldMeta } from  '../../meta/cac/ClauseMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Clause | undefined
  meta: FieldMeta<T>
}

export default function ClauseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Clause">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ClauseFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ClauseFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Content"
            label="Content"
            items={value.Content}
            meta={ClauseFieldMeta.Content} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Content"
                value={itemValue}
                meta={ClauseFieldMeta.Content}
              />
            }
          />
        </div>
    </div>
  )
}
