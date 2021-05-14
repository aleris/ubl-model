import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CriterionItem
  meta: FieldMeta<T>
}

export default function CriterionItemDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CriterionItem ubl-CriterionItemType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CriterionItem ubl-UBLExtensions"
          meta={CriterionItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CriterionItemFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CriterionItem ubl-Identifier ubl-ID"
          meta={CriterionItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CriterionItemFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CriterionItem ubl-Code ubl-TypeCode"
          meta={CriterionItemFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Type Code"
              value={itemValue}
              meta={CriterionItemFieldMeta.TypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CriterionItem ubl-Text ubl-CriterionDescription"
          meta={CriterionItemFieldMeta.CriterionDescription} 
          value={value.CriterionDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Criterion Description"
              value={itemValue}
              meta={CriterionItemFieldMeta.CriterionDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CriterionItem ubl-Item ubl-DeclaredPropertyItem"
          meta={CriterionItemFieldMeta.DeclaredPropertyItem} 
          value={value.DeclaredPropertyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay
              key={key}
              label="Declared Property Item"
              value={itemValue}
              meta={CriterionItemFieldMeta.DeclaredPropertyItem}
            />
          }
        />
        </div>
    </div>
  )
}
