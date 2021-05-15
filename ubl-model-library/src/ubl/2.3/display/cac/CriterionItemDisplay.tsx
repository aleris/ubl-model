import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CriterionItem } from  '../../model/cac/CriterionItem'
import { CriterionItemFieldMeta } from  '../../meta/cac/CriterionItemMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CriterionItem | undefined
  meta: FieldMeta<T>
}

export default function CriterionItemDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CriterionItem">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CriterionItemFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CriterionItemFieldMeta.ID}
          />

          <CodeDisplay
            label="Type Code"
            value={value.TypeCode?.[0]}
            meta={CriterionItemFieldMeta.TypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CriterionDescription"
            label="Criterion Description"
            items={value.CriterionDescription}
            meta={CriterionItemFieldMeta.CriterionDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Criterion Description"
                value={itemValue}
                meta={CriterionItemFieldMeta.CriterionDescription}
              />
            }
          />

          <ItemDisplay
            label="Declared Property Item"
            value={value.DeclaredPropertyItem?.[0]}
            meta={CriterionItemFieldMeta.DeclaredPropertyItem}
          />
        </div>
    </div>
  )
}
