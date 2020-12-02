import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CriterionItem
  meta: FieldMeta<T>
}

export default function CriterionItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CriterionItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CriterionItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CriterionItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CriterionItemFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CriterionItemFieldMeta.TypeCode} 
          value={value.TypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CriterionItemFieldMeta.TypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CriterionItemFieldMeta.CriterionDescription} 
          value={value.CriterionDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CriterionItemFieldMeta.CriterionDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CriterionItemFieldMeta.DeclaredPropertyItem} 
          value={value.DeclaredPropertyItem}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={CriterionItemFieldMeta.DeclaredPropertyItem} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
