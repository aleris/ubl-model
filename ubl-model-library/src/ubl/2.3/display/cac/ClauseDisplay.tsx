import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Clause } from  '../../model/cac/Clause'
import { ClauseFieldMeta } from  '../../meta/cac/ClauseMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Clause
  meta: FieldMeta<T>
}

export default function ClauseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ClauseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ClauseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClauseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ClauseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ClauseFieldMeta.Content} 
          value={value.Content}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ClauseFieldMeta.Content} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
