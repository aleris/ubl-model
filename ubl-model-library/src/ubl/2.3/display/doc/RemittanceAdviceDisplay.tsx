import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RemittanceAdvice } from  '../../model/doc/RemittanceAdvice'
import { RemittanceAdviceFieldMeta } from  '../../meta/doc/RemittanceAdviceMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import BillingReferenceDisplay from '../cac/BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import RemittanceAdviceLineDisplay from '../cac/RemittanceAdviceLineDisplay'
import { RemittanceAdviceLine } from '../../model/cac/RemittanceAdviceLine'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TaxTotalDisplay from '../cac/TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RemittanceAdvice | undefined
  meta: FieldMeta<T>
}

export default function RemittanceAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-RemittanceAdvice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RemittanceAdviceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={RemittanceAdviceFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={RemittanceAdviceFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={RemittanceAdviceFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={RemittanceAdviceFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RemittanceAdviceFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={RemittanceAdviceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RemittanceAdviceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={RemittanceAdviceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={RemittanceAdviceFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RemittanceAdviceFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode}
          />

          <AmountDisplay
            label="Total Debit Amount"
            value={value.TotalDebitAmount?.[0]}
            meta={RemittanceAdviceFieldMeta.TotalDebitAmount}
          />

          <AmountDisplay
            label="Total Credit Amount"
            value={value.TotalCreditAmount?.[0]}
            meta={RemittanceAdviceFieldMeta.TotalCreditAmount}
          />

          <AmountDisplay
            label="Total Payment Amount"
            value={value.TotalPaymentAmount?.[0]}
            meta={RemittanceAdviceFieldMeta.TotalPaymentAmount}
          />

          <TextDisplay
            label="Payment Order Reference"
            value={value.PaymentOrderReference?.[0]}
            meta={RemittanceAdviceFieldMeta.PaymentOrderReference}
          />

          <TextDisplay
            label="Payer Reference"
            value={value.PayerReference?.[0]}
            meta={RemittanceAdviceFieldMeta.PayerReference}
          />

          <TextDisplay
            label="Invoicing Party Reference"
            value={value.InvoicingPartyReference?.[0]}
            meta={RemittanceAdviceFieldMeta.InvoicingPartyReference}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={RemittanceAdviceFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={RemittanceAdviceFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.InvoicePeriod}
              />
            }
          />

          <BillingReferenceDisplay
            label="Billing Reference"
            value={value.BillingReference?.[0]}
            meta={RemittanceAdviceFieldMeta.BillingReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={RemittanceAdviceFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={RemittanceAdviceFieldMeta.AccountingCustomerParty}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={RemittanceAdviceFieldMeta.AccountingSupplierParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={RemittanceAdviceFieldMeta.PayeeParty}
          />

          <PaymentMeansDisplay
            label="Payment Means"
            value={value.PaymentMeans?.[0]}
            meta={RemittanceAdviceFieldMeta.PaymentMeans}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={RemittanceAdviceFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-RemittanceAdviceLine"
            label="Remittance Advice Line"
            items={value.RemittanceAdviceLine}
            meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine} 
            itemDisplay={ (itemValue: RemittanceAdviceLine, key: string | number) =>
              <RemittanceAdviceLineDisplay
                key={key}
                label="Remittance Advice Line"
                value={itemValue}
                meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine}
              />
            }
          />
        </div>
    </div>
  )
}
