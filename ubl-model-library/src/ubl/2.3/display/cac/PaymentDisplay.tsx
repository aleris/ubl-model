import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Payment
  meta: FieldMeta<T>
}

export default function PaymentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PaymentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PaymentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.PaidAmount} 
          value={value.PaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PaymentFieldMeta.PaidAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.ReceivedDate} 
          value={value.ReceivedDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PaymentFieldMeta.ReceivedDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.PaidDate} 
          value={value.PaidDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PaymentFieldMeta.PaidDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.PaidTime} 
          value={value.PaidTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={PaymentFieldMeta.PaidTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentFieldMeta.InstructionID} 
          value={value.InstructionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentFieldMeta.InstructionID} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
