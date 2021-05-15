import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PaymentMeans } from  '../../model/cac/PaymentMeans'
import { PaymentMeansFieldMeta } from  '../../meta/cac/PaymentMeansMeta'
import CardAccountDisplay from './CardAccountDisplay'
import { CardAccount } from '../../model/cac/CardAccount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CreditAccountDisplay from './CreditAccountDisplay'
import { CreditAccount } from '../../model/cac/CreditAccount'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import FinancialAccountDisplay from './FinancialAccountDisplay'
import { FinancialAccount } from '../../model/cac/FinancialAccount'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PaymentMandateDisplay from './PaymentMandateDisplay'
import { PaymentMandate } from '../../model/cac/PaymentMandate'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TradeFinancingDisplay from './TradeFinancingDisplay'
import { TradeFinancing } from '../../model/cac/TradeFinancing'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PaymentMeans | undefined
  meta: FieldMeta<T>
}

export default function PaymentMeansDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PaymentMeans">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PaymentMeansFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PaymentMeansFieldMeta.ID}
          />

          <CodeDisplay
            label="Payment Means Code"
            value={value.PaymentMeansCode?.[0]}
            meta={PaymentMeansFieldMeta.PaymentMeansCode}
          />

          <DateDisplay
            label="Payment Due Date"
            value={value.PaymentDueDate?.[0]}
            meta={PaymentMeansFieldMeta.PaymentDueDate}
          />

          <CodeDisplay
            label="Payment Channel Code"
            value={value.PaymentChannelCode?.[0]}
            meta={PaymentMeansFieldMeta.PaymentChannelCode}
          />

          <IdentifierDisplay
            label="Instruction Identifier"
            value={value.InstructionID?.[0]}
            meta={PaymentMeansFieldMeta.InstructionID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-InstructionNote"
            label="Instruction Note"
            items={value.InstructionNote}
            meta={PaymentMeansFieldMeta.InstructionNote} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Instruction Note"
                value={itemValue}
                meta={PaymentMeansFieldMeta.InstructionNote}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-PaymentID"
            label="Payment Identifier"
            items={value.PaymentID}
            meta={PaymentMeansFieldMeta.PaymentID} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="Payment Identifier"
                value={itemValue}
                meta={PaymentMeansFieldMeta.PaymentID}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CardAccount"
            label="Card Account"
            items={value.CardAccount}
            meta={PaymentMeansFieldMeta.CardAccount} 
            itemDisplay={ (itemValue: CardAccount, key: string | number) =>
              <CardAccountDisplay
                key={key}
                label="Card Account"
                value={itemValue}
                meta={PaymentMeansFieldMeta.CardAccount}
              />
            }
          />

          <FinancialAccountDisplay
            label="Payer Financial Account"
            value={value.PayerFinancialAccount?.[0]}
            meta={PaymentMeansFieldMeta.PayerFinancialAccount}
          />

          <FinancialAccountDisplay
            label="Payee Financial Account"
            value={value.PayeeFinancialAccount?.[0]}
            meta={PaymentMeansFieldMeta.PayeeFinancialAccount}
          />

          <CreditAccountDisplay
            label="Credit Account"
            value={value.CreditAccount?.[0]}
            meta={PaymentMeansFieldMeta.CreditAccount}
          />

          <PaymentMandateDisplay
            label="Payment Mandate"
            value={value.PaymentMandate?.[0]}
            meta={PaymentMeansFieldMeta.PaymentMandate}
          />

          <TradeFinancingDisplay
            label="Trade Financing"
            value={value.TradeFinancing?.[0]}
            meta={PaymentMeansFieldMeta.TradeFinancing}
          />
        </div>
    </div>
  )
}
