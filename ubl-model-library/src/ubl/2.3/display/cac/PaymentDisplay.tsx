import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Payment } from  '../../model/cac/Payment'
import { PaymentFieldMeta } from  '../../meta/cac/PaymentMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Payment | undefined
  meta: FieldMeta<T>
}

export default function PaymentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Payment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PaymentFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PaymentFieldMeta.ID}
          />

          <AmountDisplay
            label="Paid Amount"
            value={value.PaidAmount?.[0]}
            meta={PaymentFieldMeta.PaidAmount}
          />

          <DateDisplay
            label="Received Date"
            value={value.ReceivedDate?.[0]}
            meta={PaymentFieldMeta.ReceivedDate}
          />

          <DateDisplay
            label="Paid Date"
            value={value.PaidDate?.[0]}
            meta={PaymentFieldMeta.PaidDate}
          />

          <TimeDisplay
            label="Paid Time"
            value={value.PaidTime?.[0]}
            meta={PaymentFieldMeta.PaidTime}
          />

          <IdentifierDisplay
            label="Instruction Identifier"
            value={value.InstructionID?.[0]}
            meta={PaymentFieldMeta.InstructionID}
          />
        </div>
    </div>
  )
}
