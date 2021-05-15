import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: RemittanceAdviceLine | undefined
  meta: FieldMeta<T>
}

export default function RemittanceAdviceLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RemittanceAdviceLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RemittanceAdviceLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RemittanceAdviceLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RemittanceAdviceLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RemittanceAdviceLineFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RemittanceAdviceLineFieldMeta.UUID}
          />

          <AmountDisplay
            label="Debit Line Amount"
            value={value.DebitLineAmount?.[0]}
            meta={RemittanceAdviceLineFieldMeta.DebitLineAmount}
          />

          <AmountDisplay
            label="Credit Line Amount"
            value={value.CreditLineAmount?.[0]}
            meta={RemittanceAdviceLineFieldMeta.CreditLineAmount}
          />

          <AmountDisplay
            label="Balance Amount"
            value={value.BalanceAmount?.[0]}
            meta={RemittanceAdviceLineFieldMeta.BalanceAmount}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={RemittanceAdviceLineFieldMeta.PaymentPurposeCode}
          />

          <TextDisplay
            label="Invoicing Party Reference"
            value={value.InvoicingPartyReference?.[0]}
            meta={RemittanceAdviceLineFieldMeta.InvoicingPartyReference}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.AccountingSupplierParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.AccountingCustomerParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.OriginatorCustomerParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={RemittanceAdviceLineFieldMeta.PayeeParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={RemittanceAdviceLineFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={RemittanceAdviceLineFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={RemittanceAdviceLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={RemittanceAdviceLineFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={RemittanceAdviceLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={RemittanceAdviceLineFieldMeta.DocumentReference}
              />
            }
          />

          <ExchangeRateDisplay
            label="Exchange Rate"
            value={value.ExchangeRate?.[0]}
            meta={RemittanceAdviceLineFieldMeta.ExchangeRate}
          />
        </div>
    </div>
  )
}
