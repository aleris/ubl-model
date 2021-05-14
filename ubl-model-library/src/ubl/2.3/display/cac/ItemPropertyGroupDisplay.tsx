import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ItemPropertyGroup
  meta: FieldMeta<T>
}

export default function ItemPropertyGroupDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ItemPropertyGroup ubl-ItemPropertyGroupType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ItemPropertyGroup ubl-UBLExtensions"
          meta={ItemPropertyGroupFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ItemPropertyGroupFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemPropertyGroup ubl-Identifier ubl-ID"
          meta={ItemPropertyGroupFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ItemPropertyGroupFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemPropertyGroup ubl-Text ubl-Name"
          meta={ItemPropertyGroupFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={ItemPropertyGroupFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ItemPropertyGroup ubl-Code ubl-ImportanceCode"
          meta={ItemPropertyGroupFieldMeta.ImportanceCode} 
          value={value.ImportanceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Importance Code"
              value={itemValue}
              meta={ItemPropertyGroupFieldMeta.ImportanceCode}
            />
          }
        />
        </div>
    </div>
  )
}
