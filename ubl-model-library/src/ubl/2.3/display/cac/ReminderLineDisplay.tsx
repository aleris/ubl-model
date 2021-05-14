import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ReminderLine
  meta: FieldMeta<T>
}

export default function ReminderLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ReminderLine ubl-ReminderLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ReminderLine ubl-UBLExtensions"
          meta={ReminderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ReminderLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Identifier ubl-ID"
          meta={ReminderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ReminderLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Text ubl-Note"
          meta={ReminderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={ReminderLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Identifier ubl-UUID"
          meta={ReminderLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={ReminderLineFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Indicator ubl-BalanceBroughtForwardIndicator"
          meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator} 
          value={value.BalanceBroughtForwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Balance Brought Forward Indicator"
              value={itemValue}
              meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Amount ubl-DebitLineAmount"
          meta={ReminderLineFieldMeta.DebitLineAmount} 
          value={value.DebitLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Debit Line Amount"
              value={itemValue}
              meta={ReminderLineFieldMeta.DebitLineAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Amount ubl-CreditLineAmount"
          meta={ReminderLineFieldMeta.CreditLineAmount} 
          value={value.CreditLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Credit Line Amount"
              value={itemValue}
              meta={ReminderLineFieldMeta.CreditLineAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Code ubl-AccountingCostCode"
          meta={ReminderLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={ReminderLineFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Text ubl-AccountingCost"
          meta={ReminderLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={ReminderLineFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Numeric ubl-PenaltySurchargePercent"
          meta={ReminderLineFieldMeta.PenaltySurchargePercent} 
          value={value.PenaltySurchargePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Penalty Surcharge Percent"
              value={itemValue}
              meta={ReminderLineFieldMeta.PenaltySurchargePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Amount"
          meta={ReminderLineFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={ReminderLineFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ReminderLine ubl-Code ubl-PaymentPurposeCode"
          meta={ReminderLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Purpose Code"
              value={itemValue}
              meta={ReminderLineFieldMeta.PaymentPurposeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReminderLine ubl-Period ubl-ReminderPeriod"
          meta={ReminderLineFieldMeta.ReminderPeriod} 
          value={value.ReminderPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Reminder Period"
              value={itemValue}
              meta={ReminderLineFieldMeta.ReminderPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ReminderLine ubl-BillingReference"
          meta={ReminderLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={ReminderLineFieldMeta.BillingReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ReminderLine ubl-ExchangeRate"
          meta={ReminderLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={ReminderLineFieldMeta.ExchangeRate}
            />
          }
        />
        </div>
    </div>
  )
}
