import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Fee | undefined
  meta: FieldMeta<T>
}

export default function FeeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Fee">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FeeFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Fee Type Code"
            value={value.FeeTypeCode?.[0]}
            meta={FeeFieldMeta.FeeTypeCode}
          />

          <AmountDisplay
            label="Fee Amount"
            value={value.FeeAmount?.[0]}
            meta={FeeFieldMeta.FeeAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-FeeDescription"
            label="Fee Description"
            items={value.FeeDescription}
            meta={FeeFieldMeta.FeeDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Fee Description"
                value={itemValue}
                meta={FeeFieldMeta.FeeDescription}
              />
            }
          />
        </div>
    </div>
  )
}
