import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Payment
  meta: FieldMeta<T>
}

export default function PaymentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Payment ubl-PaymentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Payment ubl-UBLExtensions"
          meta={PaymentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PaymentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Identifier ubl-ID"
          meta={PaymentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PaymentFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Amount ubl-PaidAmount"
          meta={PaymentFieldMeta.PaidAmount} 
          value={value.PaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Paid Amount"
              value={itemValue}
              meta={PaymentFieldMeta.PaidAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Date ubl-ReceivedDate"
          meta={PaymentFieldMeta.ReceivedDate} 
          value={value.ReceivedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Received Date"
              value={itemValue}
              meta={PaymentFieldMeta.ReceivedDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Date ubl-PaidDate"
          meta={PaymentFieldMeta.PaidDate} 
          value={value.PaidDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Paid Date"
              value={itemValue}
              meta={PaymentFieldMeta.PaidDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Time ubl-PaidTime"
          meta={PaymentFieldMeta.PaidTime} 
          value={value.PaidTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Paid Time"
              value={itemValue}
              meta={PaymentFieldMeta.PaidTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Payment ubl-Identifier ubl-InstructionID"
          meta={PaymentFieldMeta.InstructionID} 
          value={value.InstructionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Instruction Identifier"
              value={itemValue}
              meta={PaymentFieldMeta.InstructionID}
            />
          }
        />
        </div>
    </div>
  )
}
