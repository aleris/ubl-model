import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Duty } from  '../../model/cac/Duty'
import { DutyFieldMeta } from  '../../meta/cac/DutyMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Duty
  meta: FieldMeta<T>
}

export default function DutyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DutyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DutyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DutyFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={DutyFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DutyFieldMeta.Duty} 
          value={value.Duty}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={DutyFieldMeta.Duty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DutyFieldMeta.DutyCode} 
          value={value.DutyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={DutyFieldMeta.DutyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DutyFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={DutyFieldMeta.TaxCategory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
