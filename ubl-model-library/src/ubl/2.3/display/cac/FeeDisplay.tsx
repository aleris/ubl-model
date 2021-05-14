import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Fee
  meta: FieldMeta<T>
}

export default function FeeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Fee ubl-FeeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Fee ubl-UBLExtensions"
          meta={FeeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FeeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Fee ubl-Code ubl-FeeTypeCode"
          meta={FeeFieldMeta.FeeTypeCode} 
          value={value.FeeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Fee Type Code"
              value={itemValue}
              meta={FeeFieldMeta.FeeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Fee ubl-Amount ubl-FeeAmount"
          meta={FeeFieldMeta.FeeAmount} 
          value={value.FeeAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Fee Amount"
              value={itemValue}
              meta={FeeFieldMeta.FeeAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Fee ubl-Text ubl-FeeDescription"
          meta={FeeFieldMeta.FeeDescription} 
          value={value.FeeDescription}
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
