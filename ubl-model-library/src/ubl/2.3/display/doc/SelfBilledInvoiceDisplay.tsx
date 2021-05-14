import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SelfBilledInvoice } from  '../../model/doc/SelfBilledInvoice'
import { SelfBilledInvoiceFieldMeta } from  '../../meta/doc/SelfBilledInvoiceMeta'
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
import InvoiceLineDisplay from '../cac/InvoiceLineDisplay'
import { InvoiceLine } from '../../model/cac/InvoiceLine'
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
import ProjectReferenceDisplay from '../cac/ProjectReferenceDisplay'
import { ProjectReference } from '../../model/cac/ProjectReference'
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
  value: SelfBilledInvoice
  meta: FieldMeta<T>
}

export default function SelfBilledInvoiceDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-SelfBilledInvoice ubl-SelfBilledInvoiceType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SelfBilledInvoice ubl-UBLExtensions"
          meta={SelfBilledInvoiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-UBLVersionID"
          meta={SelfBilledInvoiceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-CustomizationID"
          meta={SelfBilledInvoiceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-ProfileID"
          meta={SelfBilledInvoiceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-ProfileExecutionID"
          meta={SelfBilledInvoiceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-ID"
          meta={SelfBilledInvoiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Indicator ubl-CopyIndicator"
          meta={SelfBilledInvoiceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Identifier ubl-UUID"
          meta={SelfBilledInvoiceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Date ubl-IssueDate"
          meta={SelfBilledInvoiceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Time ubl-IssueTime"
          meta={SelfBilledInvoiceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Date ubl-DueDate"
          meta={SelfBilledInvoiceFieldMeta.DueDate} 
          value={value.DueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Due Date"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.DueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Date ubl-TaxPointDate"
          meta={SelfBilledInvoiceFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-InvoiceTypeCode"
          meta={SelfBilledInvoiceFieldMeta.InvoiceTypeCode} 
          value={value.InvoiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Invoice Type Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.InvoiceTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Text ubl-Note"
          meta={SelfBilledInvoiceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-DocumentCurrencyCode"
          meta={SelfBilledInvoiceFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-TaxCurrencyCode"
          meta={SelfBilledInvoiceFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-PricingCurrencyCode"
          meta={SelfBilledInvoiceFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-PaymentCurrencyCode"
          meta={SelfBilledInvoiceFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Currency Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-PaymentAlternativeCurrencyCode"
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Alternative Currency Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Code ubl-AccountingCostCode"
          meta={SelfBilledInvoiceFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Text ubl-AccountingCost"
          meta={SelfBilledInvoiceFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Numeric ubl-LineCountNumeric"
          meta={SelfBilledInvoiceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledInvoice ubl-Text ubl-BuyerReference"
          meta={SelfBilledInvoiceFieldMeta.BuyerReference} 
          value={value.BuyerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Buyer Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.BuyerReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Period ubl-InvoicePeriod"
          meta={SelfBilledInvoiceFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-OrderReference"
          meta={SelfBilledInvoiceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-BillingReference"
          meta={SelfBilledInvoiceFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-ContractDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-DespatchDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Despatch Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.DespatchDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-ReceiptDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Receipt Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ReceiptDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-StatementDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.StatementDocumentReference} 
          value={value.StatementDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Statement Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.StatementDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-OriginatorDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Originator Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.OriginatorDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={SelfBilledInvoiceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-ProjectReference"
          meta={SelfBilledInvoiceFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay
              key={key}
              label="Project Reference"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.ProjectReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Signature"
          meta={SelfBilledInvoiceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={SelfBilledInvoiceFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={SelfBilledInvoiceFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={SelfBilledInvoiceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-SupplierParty ubl-SellerSupplierParty"
          meta={SelfBilledInvoiceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Party ubl-PayeeParty"
          meta={SelfBilledInvoiceFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Party ubl-TaxRepresentativeParty"
          meta={SelfBilledInvoiceFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tax Representative Party"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.TaxRepresentativeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Delivery"
          meta={SelfBilledInvoiceFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-DeliveryTerms"
          meta={SelfBilledInvoiceFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-PaymentMeans"
          meta={SelfBilledInvoiceFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-PaymentTerms"
          meta={SelfBilledInvoiceFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-Payment ubl-PrepaidPayment"
          meta={SelfBilledInvoiceFieldMeta.PrepaidPayment} 
          value={value.PrepaidPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay
              key={key}
              label="Prepaid Payment"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PrepaidPayment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-AllowanceCharge"
          meta={SelfBilledInvoiceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={SelfBilledInvoiceFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={SelfBilledInvoiceFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={SelfBilledInvoiceFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-ExchangeRate ubl-PaymentAlternativeExchangeRate"
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Alternative Exchange Rate"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-TaxTotal"
          meta={SelfBilledInvoiceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-TaxTotal ubl-WithholdingTaxTotal"
          meta={SelfBilledInvoiceFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Withholding Tax Total"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.WithholdingTaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-MonetaryTotal ubl-LegalMonetaryTotal"
          meta={SelfBilledInvoiceFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Legal Monetary Total"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.LegalMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledInvoice ubl-InvoiceLine"
          meta={SelfBilledInvoiceFieldMeta.InvoiceLine} 
          value={value.InvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay
              key={key}
              label="Invoice Line"
              value={itemValue}
              meta={SelfBilledInvoiceFieldMeta.InvoiceLine}
            />
          }
        />
        </div>
    </div>
  )
}
