import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyName } from  '../../model/cac/PartyName'
import { PartyNameFieldMeta } from  '../../meta/cac/PartyNameMeta'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PartyName
  meta: FieldMeta<T>
}

export default function PartyNameDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PartyNameFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PartyNameFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PartyNameFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PartyNameFieldMeta.Name} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
