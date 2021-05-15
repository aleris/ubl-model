import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: OnAccountPayment | undefined
  meta: FieldMeta<T>
}

export default function OnAccountPaymentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-OnAccountPayment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OnAccountPaymentFieldMeta.UBLExtensions}
          />

          <QuantityDisplay
            label="Estimated Consumed Quantity"
            value={value.EstimatedConsumedQuantity?.[0]}
            meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={OnAccountPaymentFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={OnAccountPaymentFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={OnAccountPaymentFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={OnAccountPaymentFieldMeta.PaymentTerms}
              />
            }
          />
        </div>
    </div>
  )
}
