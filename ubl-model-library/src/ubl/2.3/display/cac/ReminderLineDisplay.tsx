import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ReminderLine } from  '../../model/cac/ReminderLine'
import { ReminderLineFieldMeta } from  '../../meta/cac/ReminderLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from './BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
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
  value: ReminderLine | undefined
  meta: FieldMeta<T>
}

export default function ReminderLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ReminderLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ReminderLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ReminderLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ReminderLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ReminderLineFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ReminderLineFieldMeta.UUID}
          />

          <IndicatorDisplay
            label="Balance Brought Forward Indicator"
            value={value.BalanceBroughtForwardIndicator?.[0]}
            meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator}
          />

          <AmountDisplay
            label="Debit Line Amount"
            value={value.DebitLineAmount?.[0]}
            meta={ReminderLineFieldMeta.DebitLineAmount}
          />

          <AmountDisplay
            label="Credit Line Amount"
            value={value.CreditLineAmount?.[0]}
            meta={ReminderLineFieldMeta.CreditLineAmount}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={ReminderLineFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={ReminderLineFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Penalty Surcharge Percent"
            value={value.PenaltySurchargePercent?.[0]}
            meta={ReminderLineFieldMeta.PenaltySurchargePercent}
          />

          <AmountDisplay
            label="Amount"
            value={value.Amount?.[0]}
            meta={ReminderLineFieldMeta.Amount}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={ReminderLineFieldMeta.PaymentPurposeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ReminderPeriod"
            label="Reminder Period"
            items={value.ReminderPeriod}
            meta={ReminderLineFieldMeta.ReminderPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Reminder Period"
                value={itemValue}
                meta={ReminderLineFieldMeta.ReminderPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={ReminderLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={ReminderLineFieldMeta.BillingReference}
              />
            }
          />

          <ExchangeRateDisplay
            label="Exchange Rate"
            value={value.ExchangeRate?.[0]}
            meta={ReminderLineFieldMeta.ExchangeRate}
          />
        </div>
    </div>
  )
}
