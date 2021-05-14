import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Duty
  meta: FieldMeta<T>
}

export default function DutyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Duty ubl-DutyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Duty ubl-UBLExtensions"
          meta={DutyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DutyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Duty ubl-Amount"
          meta={DutyFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={DutyFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Duty ubl-Text"
          meta={DutyFieldMeta.Duty} 
          value={value.Duty}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Duty"
              value={itemValue}
              meta={DutyFieldMeta.Duty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Duty ubl-Code ubl-DutyCode"
          meta={DutyFieldMeta.DutyCode} 
          value={value.DutyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Duty Code"
              value={itemValue}
              meta={DutyFieldMeta.DutyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Duty ubl-TaxCategory"
          meta={DutyFieldMeta.TaxCategory} 
          value={value.TaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay
              key={key}
              label="Tax Category"
              value={itemValue}
              meta={DutyFieldMeta.TaxCategory}
            />
          }
        />
        </div>
    </div>
  )
}
