import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Fee } from  '../../model/cac/Fee'
import { FeeFieldMeta } from  '../../meta/cac/FeeMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Fee
  meta: FieldMeta<T>
}

export default function FeeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FeeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FeeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FeeFieldMeta.FeeTypeCode} 
          value={value.FeeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FeeFieldMeta.FeeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FeeFieldMeta.FeeAmount} 
          value={value.FeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={FeeFieldMeta.FeeAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FeeFieldMeta.FeeDescription} 
          value={value.FeeDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FeeFieldMeta.FeeDescription} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
