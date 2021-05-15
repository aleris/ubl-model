import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Duty | undefined
  meta: FieldMeta<T>
}

export default function DutyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Duty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DutyFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={DutyFieldMeta.Amount}
          />

          <TextDisplay
            label="Duty"
            value={value.Duty?.[0]}
            meta={DutyFieldMeta.Duty}
          />

          <CodeDisplay
            label="Duty Code"
            value={value.DutyCode?.[0]}
            meta={DutyFieldMeta.DutyCode}
          />

          <TaxCategoryDisplay
            label="Tax Category"
            value={value.TaxCategory?.[0]}
            meta={DutyFieldMeta.TaxCategory}
          />
        </div>
    </div>
  )
}
