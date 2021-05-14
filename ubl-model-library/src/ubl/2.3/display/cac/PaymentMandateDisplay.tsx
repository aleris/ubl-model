import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PaymentMandate
  meta: FieldMeta<T>
}

export default function PaymentMandateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PaymentMandate ubl-PaymentMandateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PaymentMandate ubl-UBLExtensions"
          meta={PaymentMandateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PaymentMandateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMandate ubl-Identifier ubl-ID"
          meta={PaymentMandateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PaymentMandateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMandate ubl-Code ubl-MandateTypeCode"
          meta={PaymentMandateFieldMeta.MandateTypeCode} 
          value={value.MandateTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Mandate Type Code"
              value={itemValue}
              meta={PaymentMandateFieldMeta.MandateTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMandate ubl-Numeric ubl-MaximumPaymentInstructionsNumeric"
          meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric} 
          value={value.MaximumPaymentInstructionsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Payment Instructions"
              value={itemValue}
              meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMandate ubl-Amount ubl-MaximumPaidAmount"
          meta={PaymentMandateFieldMeta.MaximumPaidAmount} 
          value={value.MaximumPaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Paid Amount"
              value={itemValue}
              meta={PaymentMandateFieldMeta.MaximumPaidAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMandate ubl-Identifier ubl-SignatureID"
          meta={PaymentMandateFieldMeta.SignatureID} 
          value={value.SignatureID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Signature Identifier"
              value={itemValue}
              meta={PaymentMandateFieldMeta.SignatureID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMandate ubl-Party ubl-PayerParty"
          meta={PaymentMandateFieldMeta.PayerParty} 
          value={value.PayerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payer Party"
              value={itemValue}
              meta={PaymentMandateFieldMeta.PayerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMandate ubl-FinancialAccount ubl-PayerFinancialAccount"
          meta={PaymentMandateFieldMeta.PayerFinancialAccount} 
          value={value.PayerFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Payer Financial Account"
              value={itemValue}
              meta={PaymentMandateFieldMeta.PayerFinancialAccount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMandate ubl-Period ubl-ValidityPeriod"
          meta={PaymentMandateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={PaymentMandateFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMandate ubl-Period ubl-PaymentReversalPeriod"
          meta={PaymentMandateFieldMeta.PaymentReversalPeriod} 
          value={value.PaymentReversalPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Payment Reversal Period"
              value={itemValue}
              meta={PaymentMandateFieldMeta.PaymentReversalPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PaymentMandate ubl-Clause"
          meta={PaymentMandateFieldMeta.Clause} 
          value={value.Clause}
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
