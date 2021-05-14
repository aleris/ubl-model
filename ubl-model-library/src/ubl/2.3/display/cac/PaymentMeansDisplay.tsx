import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PaymentMeans
  meta: FieldMeta<T>
}

export default function PaymentMeansDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PaymentMeans ubl-PaymentMeansType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PaymentMeans ubl-UBLExtensions"
          meta={PaymentMeansFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PaymentMeansFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Identifier ubl-ID"
          meta={PaymentMeansFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PaymentMeansFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Code ubl-PaymentMeansCode"
          meta={PaymentMeansFieldMeta.PaymentMeansCode} 
          value={value.PaymentMeansCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Means Code"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PaymentMeansCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Date ubl-PaymentDueDate"
          meta={PaymentMeansFieldMeta.PaymentDueDate} 
          value={value.PaymentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Payment Due Date"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PaymentDueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Code ubl-PaymentChannelCode"
          meta={PaymentMeansFieldMeta.PaymentChannelCode} 
          value={value.PaymentChannelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Channel Code"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PaymentChannelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Identifier ubl-InstructionID"
          meta={PaymentMeansFieldMeta.InstructionID} 
          value={value.InstructionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Instruction Identifier"
              value={itemValue}
              meta={PaymentMeansFieldMeta.InstructionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Text ubl-InstructionNote"
          meta={PaymentMeansFieldMeta.InstructionNote} 
          value={value.InstructionNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Instruction Note"
              value={itemValue}
              meta={PaymentMeansFieldMeta.InstructionNote}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-PaymentMeans ubl-Identifier ubl-PaymentID"
          meta={PaymentMeansFieldMeta.PaymentID} 
          value={value.PaymentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Payment Identifier"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PaymentID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-PaymentMeans ubl-CardAccount"
          meta={PaymentMeansFieldMeta.CardAccount} 
          value={value.CardAccount}
          itemDisplay={ (itemValue: CardAccount, key: string | number) =>
            <CardAccountDisplay
              key={key}
              label="Card Account"
              value={itemValue}
              meta={PaymentMeansFieldMeta.CardAccount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMeans ubl-FinancialAccount ubl-PayerFinancialAccount"
          meta={PaymentMeansFieldMeta.PayerFinancialAccount} 
          value={value.PayerFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Payer Financial Account"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PayerFinancialAccount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMeans ubl-FinancialAccount ubl-PayeeFinancialAccount"
          meta={PaymentMeansFieldMeta.PayeeFinancialAccount} 
          value={value.PayeeFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay
              key={key}
              label="Payee Financial Account"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PayeeFinancialAccount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMeans ubl-CreditAccount"
          meta={PaymentMeansFieldMeta.CreditAccount} 
          value={value.CreditAccount}
          itemDisplay={ (itemValue: CreditAccount, key: string | number) =>
            <CreditAccountDisplay
              key={key}
              label="Credit Account"
              value={itemValue}
              meta={PaymentMeansFieldMeta.CreditAccount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMeans ubl-PaymentMandate"
          meta={PaymentMeansFieldMeta.PaymentMandate} 
          value={value.PaymentMandate}
          itemDisplay={ (itemValue: PaymentMandate, key: string | number) =>
            <PaymentMandateDisplay
              key={key}
              label="Payment Mandate"
              value={itemValue}
              meta={PaymentMeansFieldMeta.PaymentMandate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PaymentMeans ubl-TradeFinancing"
          meta={PaymentMeansFieldMeta.TradeFinancing} 
          value={value.TradeFinancing}
          itemDisplay={ (itemValue: TradeFinancing, key: string | number) =>
            <TradeFinancingDisplay
              key={key}
              label="Trade Financing"
              value={itemValue}
              meta={PaymentMeansFieldMeta.TradeFinancing}
            />
          }
        />
        </div>
    </div>
  )
}
