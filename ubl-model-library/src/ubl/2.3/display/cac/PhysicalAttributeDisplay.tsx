import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PhysicalAttribute } from  '../../model/cac/PhysicalAttribute'
import { PhysicalAttributeFieldMeta } from  '../../meta/cac/PhysicalAttributeMeta'
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
  value: PhysicalAttribute | undefined
  meta: FieldMeta<T>
}

export default function PhysicalAttributeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PhysicalAttribute">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PhysicalAttributeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Attribute Identifier"
            value={value.AttributeID?.[0]}
            meta={PhysicalAttributeFieldMeta.AttributeID}
          />

          <CodeDisplay
            label="Position Code"
            value={value.PositionCode?.[0]}
            meta={PhysicalAttributeFieldMeta.PositionCode}
          />

          <CodeDisplay
            label="Description Code"
            value={value.DescriptionCode?.[0]}
            meta={PhysicalAttributeFieldMeta.DescriptionCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={PhysicalAttributeFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={PhysicalAttributeFieldMeta.Description}
              />
            }
          />
        </div>
    </div>
  )
}
