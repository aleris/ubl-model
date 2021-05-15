import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { StatementLine } from  '../../model/cac/StatementLine'
import { StatementLineFieldMeta } from  '../../meta/cac/StatementLineMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
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
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentDisplay from './PaymentDisplay'
import { Payment } from '../../model/cac/Payment'
import PaymentMeansDisplay from './PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PaymentTermsDisplay from './PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
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
  value: StatementLine | undefined
  meta: FieldMeta<T>
}

export default function StatementLineDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-StatementLine">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={StatementLineFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={StatementLineFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={StatementLineFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={StatementLineFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={StatementLineFieldMeta.UUID}
          />

          <IndicatorDisplay
            label="Balance Brought Forward Indicator"
            value={value.BalanceBroughtForwardIndicator?.[0]}
            meta={StatementLineFieldMeta.BalanceBroughtForwardIndicator}
          />

          <AmountDisplay
            label="Debit Line Amount"
            value={value.DebitLineAmount?.[0]}
            meta={StatementLineFieldMeta.DebitLineAmount}
          />

          <AmountDisplay
            label="Credit Line Amount"
            value={value.CreditLineAmount?.[0]}
            meta={StatementLineFieldMeta.CreditLineAmount}
          />

          <AmountDisplay
            label="Balance Amount"
            value={value.BalanceAmount?.[0]}
            meta={StatementLineFieldMeta.BalanceAmount}
          />

          <CodeDisplay
            label="Payment Purpose Code"
            value={value.PaymentPurposeCode?.[0]}
            meta={StatementLineFieldMeta.PaymentPurposeCode}
          />

          <PaymentMeansDisplay
            label="Payment Means"
            value={value.PaymentMeans?.[0]}
            meta={StatementLineFieldMeta.PaymentMeans}
          />

          <ElementListDisplay
            className="ubl-cac ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={StatementLineFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={StatementLineFieldMeta.PaymentTerms}
              />
            }
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={StatementLineFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={StatementLineFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={StatementLineFieldMeta.OriginatorCustomerParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={StatementLineFieldMeta.AccountingCustomerParty}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={StatementLineFieldMeta.AccountingSupplierParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={StatementLineFieldMeta.PayeeParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={StatementLineFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={StatementLineFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={StatementLineFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={StatementLineFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={StatementLineFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={StatementLineFieldMeta.DocumentReference}
              />
            }
          />

          <ExchangeRateDisplay
            label="Exchange Rate"
            value={value.ExchangeRate?.[0]}
            meta={StatementLineFieldMeta.ExchangeRate}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={StatementLineFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={StatementLineFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Payment ubl-CollectedPayment"
            label="Collected Payment"
            items={value.CollectedPayment}
            meta={StatementLineFieldMeta.CollectedPayment} 
            itemDisplay={ (itemValue: Payment, key: string | number) =>
              <PaymentDisplay
                key={key}
                label="Collected Payment"
                value={itemValue}
                meta={StatementLineFieldMeta.CollectedPayment}
              />
            }
          />
        </div>
    </div>
  )
}
