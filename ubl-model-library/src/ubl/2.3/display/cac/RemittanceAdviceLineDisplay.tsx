import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RemittanceAdviceLine } from  '../../model/cac/RemittanceAdviceLine'
import { RemittanceAdviceLineFieldMeta } from  '../../meta/cac/RemittanceAdviceLineMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from './BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from './CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExchangeRateDisplay from './ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SupplierPartyDisplay from './SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: RemittanceAdviceLine
  meta: FieldMeta<T>
}

export default function RemittanceAdviceLineDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RemittanceAdviceLineFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceLineFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceLineFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RemittanceAdviceLineFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.DebitLineAmount} 
          value={value.DebitLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceLineFieldMeta.DebitLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.CreditLineAmount} 
          value={value.CreditLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceLineFieldMeta.CreditLineAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.BalanceAmount} 
          value={value.BalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RemittanceAdviceLineFieldMeta.BalanceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={RemittanceAdviceLineFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RemittanceAdviceLineFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={RemittanceAdviceLineFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RemittanceAdviceLineFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RemittanceAdviceLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={RemittanceAdviceLineFieldMeta.ExchangeRate} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
