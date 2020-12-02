import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PaymentMandate
  meta: FieldMeta<T>
}

export default function PaymentMandateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PaymentMandateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PaymentMandateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentMandateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.MandateTypeCode} 
          value={value.MandateTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PaymentMandateFieldMeta.MandateTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric} 
          value={value.MaximumPaymentInstructionsNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PaymentMandateFieldMeta.MaximumPaymentInstructionsNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.MaximumPaidAmount} 
          value={value.MaximumPaidAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PaymentMandateFieldMeta.MaximumPaidAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.SignatureID} 
          value={value.SignatureID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentMandateFieldMeta.SignatureID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.PayerParty} 
          value={value.PayerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PaymentMandateFieldMeta.PayerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.PayerFinancialAccount} 
          value={value.PayerFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={PaymentMandateFieldMeta.PayerFinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PaymentMandateFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.PaymentReversalPeriod} 
          value={value.PaymentReversalPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PaymentMandateFieldMeta.PaymentReversalPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMandateFieldMeta.Clause} 
          value={value.Clause}
          itemDisplay={ (itemValue: Clause, key: string | number) =>
            <ClauseDisplay key={key} meta={PaymentMandateFieldMeta.Clause} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
