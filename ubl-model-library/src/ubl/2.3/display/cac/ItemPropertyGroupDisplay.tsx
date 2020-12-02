import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ItemPropertyGroup
  meta: FieldMeta<T>
}

export default function ItemPropertyGroupDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ItemPropertyGroupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ItemPropertyGroupFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyGroupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ItemPropertyGroupFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyGroupFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ItemPropertyGroupFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ItemPropertyGroupFieldMeta.ImportanceCode} 
          value={value.ImportanceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ItemPropertyGroupFieldMeta.ImportanceCode} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
