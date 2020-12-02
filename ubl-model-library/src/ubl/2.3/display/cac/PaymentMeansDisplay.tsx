import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: PaymentMeans
  meta: FieldMeta<T>
}

export default function PaymentMeansDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PaymentMeansFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PaymentMeansFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentMeansFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PaymentMeansCode} 
          value={value.PaymentMeansCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PaymentMeansFieldMeta.PaymentMeansCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PaymentDueDate} 
          value={value.PaymentDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={PaymentMeansFieldMeta.PaymentDueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PaymentChannelCode} 
          value={value.PaymentChannelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={PaymentMeansFieldMeta.PaymentChannelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.InstructionID} 
          value={value.InstructionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentMeansFieldMeta.InstructionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.InstructionNote} 
          value={value.InstructionNote}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={PaymentMeansFieldMeta.InstructionNote} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PaymentID} 
          value={value.PaymentID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PaymentMeansFieldMeta.PaymentID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.CardAccount} 
          value={value.CardAccount}
          itemDisplay={ (itemValue: CardAccount, key: string | number) =>
            <CardAccountDisplay key={key} meta={PaymentMeansFieldMeta.CardAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PayerFinancialAccount} 
          value={value.PayerFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={PaymentMeansFieldMeta.PayerFinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PayeeFinancialAccount} 
          value={value.PayeeFinancialAccount}
          itemDisplay={ (itemValue: FinancialAccount, key: string | number) =>
            <FinancialAccountDisplay key={key} meta={PaymentMeansFieldMeta.PayeeFinancialAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.CreditAccount} 
          value={value.CreditAccount}
          itemDisplay={ (itemValue: CreditAccount, key: string | number) =>
            <CreditAccountDisplay key={key} meta={PaymentMeansFieldMeta.CreditAccount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.PaymentMandate} 
          value={value.PaymentMandate}
          itemDisplay={ (itemValue: PaymentMandate, key: string | number) =>
            <PaymentMandateDisplay key={key} meta={PaymentMeansFieldMeta.PaymentMandate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PaymentMeansFieldMeta.TradeFinancing} 
          value={value.TradeFinancing}
          itemDisplay={ (itemValue: TradeFinancing, key: string | number) =>
            <TradeFinancingDisplay key={key} meta={PaymentMeansFieldMeta.TradeFinancing} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
