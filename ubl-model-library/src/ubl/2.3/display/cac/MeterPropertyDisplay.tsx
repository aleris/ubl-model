import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MeterProperty } from  '../../model/cac/MeterProperty'
import { MeterPropertyFieldMeta } from  '../../meta/cac/MeterPropertyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MeterProperty
  meta: FieldMeta<T>
}

export default function MeterPropertyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MeterPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MeterPropertyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterPropertyFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterPropertyFieldMeta.NameCode} 
          value={value.NameCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MeterPropertyFieldMeta.NameCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterPropertyFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterPropertyFieldMeta.Value} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterPropertyFieldMeta.ValueQuantity} 
          value={value.ValueQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={MeterPropertyFieldMeta.ValueQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MeterPropertyFieldMeta.ValueQualifier} 
          value={value.ValueQualifier}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={MeterPropertyFieldMeta.ValueQualifier} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
