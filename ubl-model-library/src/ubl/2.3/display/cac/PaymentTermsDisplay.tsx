import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PaymentTerms
  meta: FieldMeta<T>
}

export default function PaymentTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PaymentTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PaymentTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentTermsFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PaymentMeansID} 
          value={value.PaymentMeansID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentTermsFieldMeta.PaymentMeansID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID} 
          value={value.PrepaidPaymentReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PaymentTermsFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.ReferenceEventCode} 
          value={value.ReferenceEventCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PaymentTermsFieldMeta.ReferenceEventCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.SettlementDiscountPercent} 
          value={value.SettlementDiscountPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PaymentTermsFieldMeta.SettlementDiscountPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PenaltySurchargePercent} 
          value={value.PenaltySurchargePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PaymentTermsFieldMeta.PenaltySurchargePercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PaymentPercent} 
          value={value.PaymentPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={PaymentTermsFieldMeta.PaymentPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PaymentTermsFieldMeta.Amount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.SettlementDiscountAmount} 
          value={value.SettlementDiscountAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PaymentTermsFieldMeta.SettlementDiscountAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PenaltyAmount} 
          value={value.PenaltyAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={PaymentTermsFieldMeta.PenaltyAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI} 
          value={value.PaymentTermsDetailsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PaymentDueDate} 
          value={value.PaymentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PaymentTermsFieldMeta.PaymentDueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.InstallmentDueDate} 
          value={value.InstallmentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PaymentTermsFieldMeta.InstallmentDueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PaymentTermsFieldMeta.InvoicingPartyReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.SettlementPeriod} 
          value={value.SettlementPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PaymentTermsFieldMeta.SettlementPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.PenaltyPeriod} 
          value={value.PenaltyPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PaymentTermsFieldMeta.PenaltyPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={PaymentTermsFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentTermsFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={PaymentTermsFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
