import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: RemittanceAdviceLine
  meta: FieldMeta<T>
}

export default function RemittanceAdviceLineDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RemittanceAdviceLine ubl-RemittanceAdviceLineType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RemittanceAdviceLine ubl-UBLExtensions"
          meta={RemittanceAdviceLineFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Identifier ubl-ID"
          meta={RemittanceAdviceLineFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Text ubl-Note"
          meta={RemittanceAdviceLineFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Identifier ubl-UUID"
          meta={RemittanceAdviceLineFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Amount ubl-DebitLineAmount"
          meta={RemittanceAdviceLineFieldMeta.DebitLineAmount} 
          value={value.DebitLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Debit Line Amount"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.DebitLineAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Amount ubl-CreditLineAmount"
          meta={RemittanceAdviceLineFieldMeta.CreditLineAmount} 
          value={value.CreditLineAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Credit Line Amount"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.CreditLineAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Amount ubl-BalanceAmount"
          meta={RemittanceAdviceLineFieldMeta.BalanceAmount} 
          value={value.BalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Balance Amount"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.BalanceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Code ubl-PaymentPurposeCode"
          meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode} 
          value={value.PaymentPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Purpose Code"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdviceLine ubl-Text ubl-InvoicingPartyReference"
          meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Invoicing Party Reference"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-SupplierParty ubl-SellerSupplierParty"
          meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-Party ubl-PayeeParty"
          meta={RemittanceAdviceLineFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-Period ubl-InvoicePeriod"
          meta={RemittanceAdviceLineFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-BillingReference"
          meta={RemittanceAdviceLineFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-DocumentReference"
          meta={RemittanceAdviceLineFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdviceLine ubl-ExchangeRate"
          meta={RemittanceAdviceLineFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={RemittanceAdviceLineFieldMeta.ExchangeRate}
            />
          }
        />
        </div>
    </div>
  )
}
