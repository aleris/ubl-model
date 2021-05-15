import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentMandate } from  '../../model/cac/PaymentMandate'
import { PaymentMandateFieldMeta } from  '../../meta/cac/PaymentMandateMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import ClauseDisplay from './ClauseDisplay'
import { Clause } from '../../model/cac/Clause'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import FinancialAccountDisplay from './FinancialAccountDisplay'
import { FinancialAccount } from '../../model/cac/FinancialAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PaymentMandate | undefined
  meta: FieldMeta<T>
}

export default function PaymentMandateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PaymentMandate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PaymentMandateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PaymentMandateFieldMeta.ID}
          />

          <CodeDisplay
            label="Mandate Type Code"
            value={value.MandateTypeCode?.[0]}
            meta={PaymentMandateFieldMeta.MandateTypeCode}
          />

          <NumericDisplay
            label="Maximum Payment Instructions"
            value={value.MaximumPaymentInstructionsNumeric?.[0]}
            meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric}
          />

          <AmountDisplay
            label="Maximum Paid Amount"
            value={value.MaximumPaidAmount?.[0]}
            meta={PaymentMandateFieldMeta.MaximumPaidAmount}
          />

          <IdentifierDisplay
            label="Signature Identifier"
            value={value.SignatureID?.[0]}
            meta={PaymentMandateFieldMeta.SignatureID}
          />

          <PartyDisplay
            label="Payer Party"
            value={value.PayerParty?.[0]}
            meta={PaymentMandateFieldMeta.PayerParty}
          />

          <FinancialAccountDisplay
            label="Payer Financial Account"
            value={value.PayerFinancialAccount?.[0]}
            meta={PaymentMandateFieldMeta.PayerFinancialAccount}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={PaymentMandateFieldMeta.ValidityPeriod}
          />

          <PeriodDisplay
            label="Payment Reversal Period"
            value={value.PaymentReversalPeriod?.[0]}
            meta={PaymentMandateFieldMeta.PaymentReversalPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Clause"
            label="Clause"
            items={value.Clause}
            meta={PaymentMandateFieldMeta.Clause} 
            itemDisplay={ (itemValue: Clause, key: string | number) =>
              <ClauseDisplay
                key={key}
                label="Clause"
                value={itemValue}
                meta={PaymentMandateFieldMeta.Clause}
              />
            }
          />
        </div>
    </div>
  )
}
