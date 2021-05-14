import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DebitNote
  meta: FieldMeta<T>
}

export default function DebitNoteDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-DebitNote ubl-DebitNoteType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DebitNote ubl-UBLExtensions"
          meta={DebitNoteFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DebitNoteFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-UBLVersionID"
          meta={DebitNoteFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={DebitNoteFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-CustomizationID"
          meta={DebitNoteFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={DebitNoteFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-ProfileID"
          meta={DebitNoteFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={DebitNoteFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-ProfileExecutionID"
          meta={DebitNoteFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={DebitNoteFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-ID"
          meta={DebitNoteFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DebitNoteFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Indicator ubl-CopyIndicator"
          meta={DebitNoteFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={DebitNoteFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Identifier ubl-UUID"
          meta={DebitNoteFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DebitNoteFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Date ubl-IssueDate"
          meta={DebitNoteFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={DebitNoteFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Time ubl-IssueTime"
          meta={DebitNoteFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={DebitNoteFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-DebitNote ubl-Text ubl-Note"
          meta={DebitNoteFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={DebitNoteFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Date ubl-TaxPointDate"
          meta={DebitNoteFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={DebitNoteFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-DocumentCurrencyCode"
          meta={DebitNoteFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-TaxCurrencyCode"
          meta={DebitNoteFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-PricingCurrencyCode"
          meta={DebitNoteFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-PaymentCurrencyCode"
          meta={DebitNoteFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Currency Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-PaymentAlternativeCurrencyCode"
          meta={DebitNoteFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Alternative Currency Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentAlternativeCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Code ubl-AccountingCostCode"
          meta={DebitNoteFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={DebitNoteFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Text ubl-AccountingCost"
          meta={DebitNoteFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={DebitNoteFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DebitNote ubl-Numeric ubl-LineCountNumeric"
          meta={DebitNoteFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={DebitNoteFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-Period ubl-InvoicePeriod"
          meta={DebitNoteFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={DebitNoteFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-Response ubl-DiscrepancyResponse"
          meta={DebitNoteFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay
              key={key}
              label="Discrepancy Response"
              value={itemValue}
              meta={DebitNoteFieldMeta.DiscrepancyResponse}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-OrderReference"
          meta={DebitNoteFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-BillingReference"
          meta={DebitNoteFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DocumentReference ubl-DespatchDocumentReference"
          meta={DebitNoteFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Despatch Document Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.DespatchDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DocumentReference ubl-ReceiptDocumentReference"
          meta={DebitNoteFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Receipt Document Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.ReceiptDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DocumentReference ubl-StatementDocumentReference"
          meta={DebitNoteFieldMeta.StatementDocumentReference} 
          value={value.StatementDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Statement Document Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.StatementDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DocumentReference ubl-ContractDocumentReference"
          meta={DebitNoteFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={DebitNoteFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={DebitNoteFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-Signature"
          meta={DebitNoteFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={DebitNoteFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={DebitNoteFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={DebitNoteFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-Party ubl-PayeeParty"
          meta={DebitNoteFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={DebitNoteFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-SupplierParty ubl-SellerSupplierParty"
          meta={DebitNoteFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-Party ubl-TaxRepresentativeParty"
          meta={DebitNoteFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tax Representative Party"
              value={itemValue}
              meta={DebitNoteFieldMeta.TaxRepresentativeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-Payment ubl-PrepaidPayment"
          meta={DebitNoteFieldMeta.PrepaidPayment} 
          value={value.PrepaidPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay
              key={key}
              label="Prepaid Payment"
              value={itemValue}
              meta={DebitNoteFieldMeta.PrepaidPayment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-AllowanceCharge"
          meta={DebitNoteFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={DebitNoteFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-Delivery"
          meta={DebitNoteFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={DebitNoteFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DeliveryTerms"
          meta={DebitNoteFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={DebitNoteFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-PaymentMeans"
          meta={DebitNoteFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-PaymentTerms"
          meta={DebitNoteFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={DebitNoteFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={DebitNoteFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={DebitNoteFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={DebitNoteFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={DebitNoteFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-ExchangeRate ubl-PaymentAlternativeExchangeRate"
          meta={DebitNoteFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Alternative Exchange Rate"
              value={itemValue}
              meta={DebitNoteFieldMeta.PaymentAlternativeExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-TaxTotal"
          meta={DebitNoteFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={DebitNoteFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-TaxTotal ubl-WithholdingTaxTotal"
          meta={DebitNoteFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Withholding Tax Total"
              value={itemValue}
              meta={DebitNoteFieldMeta.WithholdingTaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DebitNote ubl-MonetaryTotal ubl-RequestedMonetaryTotal"
          meta={DebitNoteFieldMeta.RequestedMonetaryTotal} 
          value={value.RequestedMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Requested Monetary Total"
              value={itemValue}
              meta={DebitNoteFieldMeta.RequestedMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DebitNote ubl-DebitNoteLine"
          meta={DebitNoteFieldMeta.DebitNoteLine} 
          value={value.DebitNoteLine}
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
