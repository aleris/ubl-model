import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PaymentTerms
  meta: FieldMeta<T>
}

export default function PaymentTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PaymentTerms ubl-PaymentTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PaymentTerms ubl-UBLExtensions"
          meta={PaymentTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PaymentTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Identifier ubl-ID"
          meta={PaymentTermsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PaymentTermsFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Identifier ubl-PaymentMeansID"
          meta={PaymentTermsFieldMeta.PaymentMeansID} 
          value={value.PaymentMeansID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Payment Means Identifier"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PaymentMeansID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Identifier ubl-PrepaidPaymentReferenceID"
          meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID} 
          value={value.PrepaidPaymentReferenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Prepaid Payment Reference Identifier"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PrepaidPaymentReferenceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Text ubl-Note"
          meta={PaymentTermsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={PaymentTermsFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Code ubl-ReferenceEventCode"
          meta={PaymentTermsFieldMeta.ReferenceEventCode} 
          value={value.ReferenceEventCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Reference Event Code"
              value={itemValue}
              meta={PaymentTermsFieldMeta.ReferenceEventCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Numeric ubl-SettlementDiscountPercent"
          meta={PaymentTermsFieldMeta.SettlementDiscountPercent} 
          value={value.SettlementDiscountPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Settlement Discount Percent"
              value={itemValue}
              meta={PaymentTermsFieldMeta.SettlementDiscountPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Numeric ubl-PenaltySurchargePercent"
          meta={PaymentTermsFieldMeta.PenaltySurchargePercent} 
          value={value.PenaltySurchargePercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Penalty Surcharge Percent"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PenaltySurchargePercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Numeric ubl-PaymentPercent"
          meta={PaymentTermsFieldMeta.PaymentPercent} 
          value={value.PaymentPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Payment Percent"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PaymentPercent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Amount"
          meta={PaymentTermsFieldMeta.Amount} 
          value={value.Amount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={PaymentTermsFieldMeta.Amount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Amount ubl-SettlementDiscountAmount"
          meta={PaymentTermsFieldMeta.SettlementDiscountAmount} 
          value={value.SettlementDiscountAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Settlement Discount Amount"
              value={itemValue}
              meta={PaymentTermsFieldMeta.SettlementDiscountAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Amount ubl-PenaltyAmount"
          meta={PaymentTermsFieldMeta.PenaltyAmount} 
          value={value.PenaltyAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Penalty Amount"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PenaltyAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Identifier ubl-PaymentTermsDetailsURI"
          meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI} 
          value={value.PaymentTermsDetailsURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Payment Terms Details URI"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PaymentTermsDetailsURI}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Date ubl-PaymentDueDate"
          meta={PaymentTermsFieldMeta.PaymentDueDate} 
          value={value.PaymentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Payment Due Date"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PaymentDueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Date ubl-InstallmentDueDate"
          meta={PaymentTermsFieldMeta.InstallmentDueDate} 
          value={value.InstallmentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Installment Due Date"
              value={itemValue}
              meta={PaymentTermsFieldMeta.InstallmentDueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentTerms ubl-Text ubl-InvoicingPartyReference"
          meta={PaymentTermsFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Invoicing Party Reference"
              value={itemValue}
              meta={PaymentTermsFieldMeta.InvoicingPartyReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentTerms ubl-Period ubl-SettlementPeriod"
          meta={PaymentTermsFieldMeta.SettlementPeriod} 
          value={value.SettlementPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Settlement Period"
              value={itemValue}
              meta={PaymentTermsFieldMeta.SettlementPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentTerms ubl-Period ubl-PenaltyPeriod"
          meta={PaymentTermsFieldMeta.PenaltyPeriod} 
          value={value.PenaltyPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Penalty Period"
              value={itemValue}
              meta={PaymentTermsFieldMeta.PenaltyPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentTerms ubl-ExchangeRate"
          meta={PaymentTermsFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={PaymentTermsFieldMeta.ExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentTerms ubl-Period ubl-ValidityPeriod"
          meta={PaymentTermsFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={PaymentTermsFieldMeta.ValidityPeriod}
            />
          }
        />
        </div>
    </div>
  )
}
