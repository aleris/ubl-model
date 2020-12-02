import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ReminderLine
  meta: FieldMeta<T>
}

export default function ReminderLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ReminderLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ReminderLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReminderLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReminderLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ReminderLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator} 
          value={value.BalanceBroughtForwardIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ReminderLineFieldMeta.BalanceBroughtForwardIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.DebitLineAmount} 
          value={value.DebitLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ReminderLineFieldMeta.DebitLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.CreditLineAmount} 
          value={value.CreditLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ReminderLineFieldMeta.CreditLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReminderLineFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ReminderLineFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.PenaltySurchargePercent} 
          value={value.PenaltySurchargePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ReminderLineFieldMeta.PenaltySurchargePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ReminderLineFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ReminderLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.ReminderPeriod} 
          value={value.ReminderPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ReminderLineFieldMeta.ReminderPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={ReminderLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ReminderLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={ReminderLineFieldMeta.ExchangeRate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
