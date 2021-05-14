import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OnAccountPayment
  meta: FieldMeta<T>
}

export default function OnAccountPaymentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-OnAccountPayment ubl-OnAccountPaymentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OnAccountPayment ubl-UBLExtensions"
          meta={OnAccountPaymentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OnAccountPaymentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OnAccountPayment ubl-Quantity ubl-EstimatedConsumedQuantity"
          meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity} 
          value={value.EstimatedConsumedQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Estimated Consumed Quantity"
              value={itemValue}
              meta={OnAccountPaymentFieldMeta.EstimatedConsumedQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OnAccountPayment ubl-Text ubl-Note"
          meta={OnAccountPaymentFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OnAccountPaymentFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OnAccountPayment ubl-PaymentTerms"
          meta={OnAccountPaymentFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
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
