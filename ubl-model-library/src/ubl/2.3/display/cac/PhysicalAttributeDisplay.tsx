import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PhysicalAttribute
  meta: FieldMeta<T>
}

export default function PhysicalAttributeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PhysicalAttributeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PhysicalAttributeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PhysicalAttributeFieldMeta.AttributeID} 
          value={value.AttributeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PhysicalAttributeFieldMeta.AttributeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PhysicalAttributeFieldMeta.PositionCode} 
          value={value.PositionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PhysicalAttributeFieldMeta.PositionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PhysicalAttributeFieldMeta.DescriptionCode} 
          value={value.DescriptionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PhysicalAttributeFieldMeta.DescriptionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PhysicalAttributeFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PhysicalAttributeFieldMeta.Description} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
