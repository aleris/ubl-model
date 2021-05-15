import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DebitNote } from  '../../model/doc/DebitNote'
import { DebitNoteFieldMeta } from  '../../meta/doc/DebitNoteMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import BillingReferenceDisplay from '../cac/BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DebitNoteLineDisplay from '../cac/DebitNoteLineDisplay'
import { DebitNoteLine } from '../../model/cac/DebitNoteLine'
import DeliveryDisplay from '../cac/DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DeliveryTermsDisplay from '../cac/DeliveryTermsDisplay'
import { DeliveryTerms } from '../../model/cac/DeliveryTerms'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExchangeRateDisplay from '../cac/ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MonetaryTotalDisplay from '../cac/MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import OrderReferenceDisplay from '../cac/OrderReferenceDisplay'
import { OrderReference } from '../../model/cac/OrderReference'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentDisplay from '../cac/PaymentDisplay'
import { Payment } from '../../model/cac/Payment'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PaymentTermsDisplay from '../cac/PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ResponseDisplay from '../cac/ResponseDisplay'
import { Response } from '../../model/cac/Response'
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
  value: DebitNote | undefined
  meta: FieldMeta<T>
}

export default function DebitNoteDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-DebitNote">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DebitNoteFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={DebitNoteFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={DebitNoteFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={DebitNoteFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={DebitNoteFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DebitNoteFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={DebitNoteFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DebitNoteFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={DebitNoteFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={DebitNoteFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={DebitNoteFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={DebitNoteFieldMeta.Note}
              />
            }
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={DebitNoteFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={DebitNoteFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Tax Currency Code"
            value={value.TaxCurrencyCode?.[0]}
            meta={DebitNoteFieldMeta.TaxCurrencyCode}
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={DebitNoteFieldMeta.PricingCurrencyCode}
          />

          <CodeDisplay
            label="Payment Currency Code"
            value={value.PaymentCurrencyCode?.[0]}
            meta={DebitNoteFieldMeta.PaymentCurrencyCode}
          />

          <CodeDisplay
            label="Payment Alternative Currency Code"
            value={value.PaymentAlternativeCurrencyCode?.[0]}
            meta={DebitNoteFieldMeta.PaymentAlternativeCurrencyCode}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={DebitNoteFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={DebitNoteFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={DebitNoteFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={DebitNoteFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={DebitNoteFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Response ubl-DiscrepancyResponse"
            label="Discrepancy Response"
            items={value.DiscrepancyResponse}
            meta={DebitNoteFieldMeta.DiscrepancyResponse} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Discrepancy Response"
                value={itemValue}
                meta={DebitNoteFieldMeta.DiscrepancyResponse}
              />
            }
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={DebitNoteFieldMeta.OrderReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={DebitNoteFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={DebitNoteFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ReceiptDocumentReference"
            label="Receipt Document Reference"
            items={value.ReceiptDocumentReference}
            meta={DebitNoteFieldMeta.ReceiptDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Receipt Document Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.ReceiptDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-StatementDocumentReference"
            label="Statement Document Reference"
            items={value.StatementDocumentReference}
            meta={DebitNoteFieldMeta.StatementDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Statement Document Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.StatementDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ContractDocumentReference"
            label="Contract Document Reference"
            items={value.ContractDocumentReference}
            meta={DebitNoteFieldMeta.ContractDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contract Document Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.ContractDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={DebitNoteFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={DebitNoteFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={DebitNoteFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={DebitNoteFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={DebitNoteFieldMeta.AccountingSupplierParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={DebitNoteFieldMeta.AccountingCustomerParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={DebitNoteFieldMeta.PayeeParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={DebitNoteFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={DebitNoteFieldMeta.SellerSupplierParty}
          />

          <PartyDisplay
            label="Tax Representative Party"
            value={value.TaxRepresentativeParty?.[0]}
            meta={DebitNoteFieldMeta.TaxRepresentativeParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Payment ubl-PrepaidPayment"
            label="Prepaid Payment"
            items={value.PrepaidPayment}
            meta={DebitNoteFieldMeta.PrepaidPayment} 
            itemDisplay={ (itemValue: Payment, key: string | number) =>
              <PaymentDisplay
                key={key}
                label="Prepaid Payment"
                value={itemValue}
                meta={DebitNoteFieldMeta.PrepaidPayment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={DebitNoteFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={DebitNoteFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={DebitNoteFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={DebitNoteFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={DebitNoteFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={DebitNoteFieldMeta.DeliveryTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={DebitNoteFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={DebitNoteFieldMeta.PaymentMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={DebitNoteFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={DebitNoteFieldMeta.PaymentTerms}
              />
            }
          />

          <ExchangeRateDisplay
            label="Tax Exchange Rate"
            value={value.TaxExchangeRate?.[0]}
            meta={DebitNoteFieldMeta.TaxExchangeRate}
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={DebitNoteFieldMeta.PricingExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Exchange Rate"
            value={value.PaymentExchangeRate?.[0]}
            meta={DebitNoteFieldMeta.PaymentExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Alternative Exchange Rate"
            value={value.PaymentAlternativeExchangeRate?.[0]}
            meta={DebitNoteFieldMeta.PaymentAlternativeExchangeRate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={DebitNoteFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={DebitNoteFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal ubl-WithholdingTaxTotal"
            label="Withholding Tax Total"
            items={value.WithholdingTaxTotal}
            meta={DebitNoteFieldMeta.WithholdingTaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Withholding Tax Total"
                value={itemValue}
                meta={DebitNoteFieldMeta.WithholdingTaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Requested Monetary Total"
            value={value.RequestedMonetaryTotal?.[0]}
            meta={DebitNoteFieldMeta.RequestedMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DebitNoteLine"
            label="Debit Note Line"
            items={value.DebitNoteLine}
            meta={DebitNoteFieldMeta.DebitNoteLine} 
            itemDisplay={ (itemValue: DebitNoteLine, key: string | number) =>
              <DebitNoteLineDisplay
                key={key}
                label="Debit Note Line"
                value={itemValue}
                meta={DebitNoteFieldMeta.DebitNoteLine}
              />
            }
          />
        </div>
    </div>
  )
}
