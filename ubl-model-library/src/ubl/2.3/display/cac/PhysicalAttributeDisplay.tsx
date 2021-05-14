import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PhysicalAttribute
  meta: FieldMeta<T>
}

export default function PhysicalAttributeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PhysicalAttribute ubl-PhysicalAttributeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PhysicalAttribute ubl-UBLExtensions"
          meta={PhysicalAttributeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PhysicalAttributeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PhysicalAttribute ubl-Identifier ubl-AttributeID"
          meta={PhysicalAttributeFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Attribute Identifier"
              value={itemValue}
              meta={PhysicalAttributeFieldMeta.AttributeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PhysicalAttribute ubl-Code ubl-PositionCode"
          meta={PhysicalAttributeFieldMeta.PositionCode} 
          value={value.PositionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Position Code"
              value={itemValue}
              meta={PhysicalAttributeFieldMeta.PositionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PhysicalAttribute ubl-Code ubl-DescriptionCode"
          meta={PhysicalAttributeFieldMeta.DescriptionCode} 
          value={value.DescriptionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Description Code"
              value={itemValue}
              meta={PhysicalAttributeFieldMeta.DescriptionCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PhysicalAttribute ubl-Text ubl-Description"
          meta={PhysicalAttributeFieldMeta.Description} 
          value={value.Description}
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
