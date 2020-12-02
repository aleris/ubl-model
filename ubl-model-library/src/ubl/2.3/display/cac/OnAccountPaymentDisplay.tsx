import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OnAccountPayment } from  '../../model/cac/OnAccountPayment'
import { OnAccountPaymentFieldMeta } from  '../../meta/cac/OnAccountPaymentMeta'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: OnAccountPayment
  meta: FieldMeta<T>
}

export default function OnAccountPaymentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OnAccountPaymentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OnAccountPaymentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity} 
          value={value.EstimatedConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OnAccountPaymentFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OnAccountPaymentFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OnAccountPaymentFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={OnAccountPaymentFieldMeta.PaymentTerms} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
