import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ActivityProperty } from  '../../model/cac/ActivityProperty'
import { ActivityPropertyFieldMeta } from  '../../meta/cac/ActivityPropertyMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ActivityProperty
  meta: FieldMeta<T>
}

export default function ActivityPropertyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ActivityPropertyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ActivityPropertyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityPropertyFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ActivityPropertyFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ActivityPropertyFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ActivityPropertyFieldMeta.Value} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
