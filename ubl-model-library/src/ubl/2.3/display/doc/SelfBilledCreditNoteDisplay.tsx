import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SelfBilledCreditNote } from  '../../model/doc/SelfBilledCreditNote'
import { SelfBilledCreditNoteFieldMeta } from  '../../meta/doc/SelfBilledCreditNoteMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import BillingReferenceDisplay from '../cac/BillingReferenceDisplay'
import { BillingReference } from '../../model/cac/BillingReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CreditNoteLineDisplay from '../cac/CreditNoteLineDisplay'
import { CreditNoteLine } from '../../model/cac/CreditNoteLine'
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
import MonetaryTotalDisplay from '../cac/MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import OrderReferenceDisplay from '../cac/OrderReferenceDisplay'
import { OrderReference } from '../../model/cac/OrderReference'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PaymentTermsDisplay from '../cac/PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ProjectReferenceDisplay from '../cac/ProjectReferenceDisplay'
import { ProjectReference } from '../../model/cac/ProjectReference'
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
  value: SelfBilledCreditNote
  meta: FieldMeta<T>
}

export default function SelfBilledCreditNoteDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-SelfBilledCreditNote ubl-SelfBilledCreditNoteType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SelfBilledCreditNote ubl-UBLExtensions"
          meta={SelfBilledCreditNoteFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-UBLVersionID"
          meta={SelfBilledCreditNoteFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-CustomizationID"
          meta={SelfBilledCreditNoteFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-ProfileID"
          meta={SelfBilledCreditNoteFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-ProfileExecutionID"
          meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-ID"
          meta={SelfBilledCreditNoteFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Indicator ubl-CopyIndicator"
          meta={SelfBilledCreditNoteFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Identifier ubl-UUID"
          meta={SelfBilledCreditNoteFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Date ubl-IssueDate"
          meta={SelfBilledCreditNoteFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Time ubl-IssueTime"
          meta={SelfBilledCreditNoteFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Date ubl-DueDate"
          meta={SelfBilledCreditNoteFieldMeta.DueDate} 
          value={value.DueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Due Date"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.DueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Date ubl-TaxPointDate"
          meta={SelfBilledCreditNoteFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Tax Point Date"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.TaxPointDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-CreditNoteTypeCode"
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode} 
          value={value.CreditNoteTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Credit Note Type Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Text ubl-Note"
          meta={SelfBilledCreditNoteFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-DocumentCurrencyCode"
          meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-TaxCurrencyCode"
          meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-PricingCurrencyCode"
          meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-PaymentCurrencyCode"
          meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Currency Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-PaymentAlternativeCurrencyCode"
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Payment Alternative Currency Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Code ubl-AccountingCostCode"
          meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Text ubl-AccountingCost"
          meta={SelfBilledCreditNoteFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Numeric ubl-LineCountNumeric"
          meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SelfBilledCreditNote ubl-Text ubl-BuyerReference"
          meta={SelfBilledCreditNoteFieldMeta.BuyerReference} 
          value={value.BuyerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Buyer Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.BuyerReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Period ubl-InvoicePeriod"
          meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Invoice Period"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Response ubl-DiscrepancyResponse"
          meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay
              key={key}
              label="Discrepancy Response"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-OrderReference"
          meta={SelfBilledCreditNoteFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.OrderReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-BillingReference"
          meta={SelfBilledCreditNoteFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay
              key={key}
              label="Billing Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.BillingReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-DespatchDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Despatch Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-ReceiptDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Receipt Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-ContractDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Contract Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-StatementDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference} 
          value={value.StatementDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Statement Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-OriginatorDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Originator Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-ProjectReference"
          meta={SelfBilledCreditNoteFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay
              key={key}
              label="Project Reference"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.ProjectReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Signature"
          meta={SelfBilledCreditNoteFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Party ubl-PayeeParty"
          meta={SelfBilledCreditNoteFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Payee Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PayeeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-SupplierParty ubl-SellerSupplierParty"
          meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Party ubl-TaxRepresentativeParty"
          meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Tax Representative Party"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-Delivery"
          meta={SelfBilledCreditNoteFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-DeliveryTerms"
          meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-PaymentMeans"
          meta={SelfBilledCreditNoteFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-PaymentTerms"
          meta={SelfBilledCreditNoteFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-AllowanceCharge"
          meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-ExchangeRate ubl-PaymentAlternativeExchangeRate"
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Alternative Exchange Rate"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-TaxTotal"
          meta={SelfBilledCreditNoteFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-TaxTotal ubl-WithholdingTaxTotal"
          meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Withholding Tax Total"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-MonetaryTotal ubl-LegalMonetaryTotal"
          meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Legal Monetary Total"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-SelfBilledCreditNote ubl-CreditNoteLine"
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine} 
          value={value.CreditNoteLine}
          itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
            <CreditNoteLineDisplay
              key={key}
              label="Credit Note Line"
              value={itemValue}
              meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine}
            />
          }
        />
        </div>
    </div>
  )
}
