import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentTerms } from  '../../model/cac/PaymentTerms'
import { PaymentTermsFieldMeta } from  '../../meta/cac/PaymentTermsMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PaymentTerms | undefined
  meta: FieldMeta<T>
}

export default function PaymentTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PaymentTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PaymentTermsFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PaymentTermsFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-PaymentMeansID"
            label="Payment Means Identifier"
            items={value.PaymentMeansID}
            meta={PaymentTermsFieldMeta.PaymentMeansID} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="Payment Means Identifier"
                value={itemValue}
                meta={PaymentTermsFieldMeta.PaymentMeansID}
              />
            }
          />

          <IdentifierDisplay
            label="Prepaid Payment Reference Identifier"
            value={value.PrepaidPaymentReferenceID?.[0]}
            meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={PaymentTermsFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={PaymentTermsFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Reference Event Code"
            value={value.ReferenceEventCode?.[0]}
            meta={PaymentTermsFieldMeta.ReferenceEventCode}
          />

          <NumericDisplay
            label="Settlement Discount Percent"
            value={value.SettlementDiscountPercent?.[0]}
            meta={PaymentTermsFieldMeta.SettlementDiscountPercent}
          />

          <NumericDisplay
            label="Penalty Surcharge Percent"
            value={value.PenaltySurchargePercent?.[0]}
            meta={PaymentTermsFieldMeta.PenaltySurchargePercent}
          />

          <NumericDisplay
            label="Payment Percent"
            value={value.PaymentPercent?.[0]}
            meta={PaymentTermsFieldMeta.PaymentPercent}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={PaymentTermsFieldMeta.Amount}
          />

          <AmountDisplay
            label="Settlement Discount Amount"
            value={value.SettlementDiscountAmount?.[0]}
            meta={PaymentTermsFieldMeta.SettlementDiscountAmount}
          />

          <AmountDisplay
            label="Penalty Amount"
            value={value.PenaltyAmount?.[0]}
            meta={PaymentTermsFieldMeta.PenaltyAmount}
          />

          <IdentifierDisplay
            label="Payment Terms Details URI"
            value={value.PaymentTermsDetailsURI?.[0]}
            meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI}
          />

          <DateDisplay
            label="Payment Due Date"
            value={value.PaymentDueDate?.[0]}
            meta={PaymentTermsFieldMeta.PaymentDueDate}
          />

          <DateDisplay
            label="Installment Due Date"
            value={value.InstallmentDueDate?.[0]}
            meta={PaymentTermsFieldMeta.InstallmentDueDate}
          />

          <TextDisplay
            label="Invoicing Party Reference"
            value={value.InvoicingPartyReference?.[0]}
            meta={PaymentTermsFieldMeta.InvoicingPartyReference}
          />

          <PeriodDisplay
            label="Settlement Period"
            value={value.SettlementPeriod?.[0]}
            meta={PaymentTermsFieldMeta.SettlementPeriod}
          />

          <PeriodDisplay
            label="Penalty Period"
            value={value.PenaltyPeriod?.[0]}
            meta={PaymentTermsFieldMeta.PenaltyPeriod}
          />

          <ExchangeRateDisplay
            label="Exchange Rate"
            value={value.ExchangeRate?.[0]}
            meta={PaymentTermsFieldMeta.ExchangeRate}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={PaymentTermsFieldMeta.ValidityPeriod}
          />
        </div>
    </div>
  )
}
