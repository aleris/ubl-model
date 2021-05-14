import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: RemittanceAdvice
  meta: FieldMeta<T>
}

export default function RemittanceAdviceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-RemittanceAdvice ubl-RemittanceAdviceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RemittanceAdvice ubl-UBLExtensions"
          meta={RemittanceAdviceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-UBLVersionID"
          meta={RemittanceAdviceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-CustomizationID"
          meta={RemittanceAdviceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-ProfileID"
          meta={RemittanceAdviceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-ProfileExecutionID"
          meta={RemittanceAdviceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-ID"
          meta={RemittanceAdviceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Indicator ubl-CopyIndicator"
          meta={RemittanceAdviceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Identifier ubl-UUID"
          meta={RemittanceAdviceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Date ubl-IssueDate"
          meta={RemittanceAdviceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Time ubl-IssueTime"
          meta={RemittanceAdviceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Text ubl-Note"
          meta={RemittanceAdviceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Code ubl-DocumentCurrencyCode"
          meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Amount ubl-TotalDebitAmount"
          meta={RemittanceAdviceFieldMeta.TotalDebitAmount} 
          value={value.TotalDebitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Debit Amount"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.TotalDebitAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Amount ubl-TotalCreditAmount"
          meta={RemittanceAdviceFieldMeta.TotalCreditAmount} 
          value={value.TotalCreditAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Credit Amount"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.TotalCreditAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Amount ubl-TotalPaymentAmount"
          meta={RemittanceAdviceFieldMeta.TotalPaymentAmount} 
          value={value.TotalPaymentAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Payment Amount"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.TotalPaymentAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Text ubl-PaymentOrderReference"
          meta={RemittanceAdviceFieldMeta.PaymentOrderReference} 
          value={value.PaymentOrderReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Payment Order Reference"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.PaymentOrderReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Text ubl-PayerReference"
          meta={RemittanceAdviceFieldMeta.PayerReference} 
          value={value.PayerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Payer Reference"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.PayerReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Text ubl-InvoicingPartyReference"
          meta={RemittanceAdviceFieldMeta.InvoicingPartyReference} 
          value={value.InvoicingPartyReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Invoicing Party Reference"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.InvoicingPartyReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RemittanceAdvice ubl-Numeric ubl-LineCountNumeric"
          meta={RemittanceAdviceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-Period ubl-InvoicePeriod"
          meta={RemittanceAdviceFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-BillingReference"
          meta={RemittanceAdviceFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-Signature"
          meta={RemittanceAdviceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={RemittanceAdviceFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={RemittanceAdviceFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-Party ubl-PayeeParty"
          meta={RemittanceAdviceFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-PaymentMeans"
          meta={RemittanceAdviceFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-TaxTotal"
          meta={RemittanceAdviceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={RemittanceAdviceFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RemittanceAdvice ubl-RemittanceAdviceLine"
          meta={RemittanceAdviceFieldMeta.RemittanceAdviceLine} 
          value={value.RemittanceAdviceLine}
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
