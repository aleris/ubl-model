import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FreightInvoice } from  '../../model/doc/FreightInvoice'
import { FreightInvoiceFieldMeta } from  '../../meta/doc/FreightInvoiceMeta'
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
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
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
  value: FreightInvoice | undefined
  meta: FieldMeta<T>
}

export default function FreightInvoiceDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-FreightInvoice">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FreightInvoiceFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={FreightInvoiceFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={FreightInvoiceFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={FreightInvoiceFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={FreightInvoiceFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={FreightInvoiceFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={FreightInvoiceFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={FreightInvoiceFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={FreightInvoiceFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={FreightInvoiceFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Due Date"
            value={value.DueDate?.[0]}
            meta={FreightInvoiceFieldMeta.DueDate}
          />

          <CodeDisplay
            label="Invoice Type Code"
            value={value.InvoiceTypeCode?.[0]}
            meta={FreightInvoiceFieldMeta.InvoiceTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={FreightInvoiceFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.Note}
              />
            }
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={FreightInvoiceFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={FreightInvoiceFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Tax Currency Code"
            value={value.TaxCurrencyCode?.[0]}
            meta={FreightInvoiceFieldMeta.TaxCurrencyCode}
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={FreightInvoiceFieldMeta.PricingCurrencyCode}
          />

          <CodeDisplay
            label="Payment Currency Code"
            value={value.PaymentCurrencyCode?.[0]}
            meta={FreightInvoiceFieldMeta.PaymentCurrencyCode}
          />

          <CodeDisplay
            label="Payment Alternative Currency Code"
            value={value.PaymentAlternativeCurrencyCode?.[0]}
            meta={FreightInvoiceFieldMeta.PaymentAlternativeCurrencyCode}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={FreightInvoiceFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={FreightInvoiceFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={FreightInvoiceFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={FreightInvoiceFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Shipment"
            label="Shipment"
            items={value.Shipment}
            meta={FreightInvoiceFieldMeta.Shipment} 
            itemDisplay={ (itemValue: Shipment, key: string | number) =>
              <ShipmentDisplay
                key={key}
                label="Shipment"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.Shipment}
              />
            }
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={FreightInvoiceFieldMeta.OrderReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={FreightInvoiceFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={FreightInvoiceFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ReceiptDocumentReference"
            label="Receipt Document Reference"
            items={value.ReceiptDocumentReference}
            meta={FreightInvoiceFieldMeta.ReceiptDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Receipt Document Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.ReceiptDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OriginatorDocumentReference"
            label="Originator Document Reference"
            items={value.OriginatorDocumentReference}
            meta={FreightInvoiceFieldMeta.OriginatorDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Originator Document Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.OriginatorDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ContractDocumentReference"
            label="Contract Document Reference"
            items={value.ContractDocumentReference}
            meta={FreightInvoiceFieldMeta.ContractDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contract Document Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.ContractDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={FreightInvoiceFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProjectReference"
            label="Project Reference"
            items={value.ProjectReference}
            meta={FreightInvoiceFieldMeta.ProjectReference} 
            itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
              <ProjectReferenceDisplay
                key={key}
                label="Project Reference"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.ProjectReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={FreightInvoiceFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={FreightInvoiceFieldMeta.AccountingSupplierParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={FreightInvoiceFieldMeta.AccountingCustomerParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={FreightInvoiceFieldMeta.PayeeParty}
          />

          <PartyDisplay
            label="Tax Representative Party"
            value={value.TaxRepresentativeParty?.[0]}
            meta={FreightInvoiceFieldMeta.TaxRepresentativeParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={FreightInvoiceFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.PaymentMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={FreightInvoiceFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Payment ubl-PrepaidPayment"
            label="Prepaid Payment"
            items={value.PrepaidPayment}
            meta={FreightInvoiceFieldMeta.PrepaidPayment} 
            itemDisplay={ (itemValue: Payment, key: string | number) =>
              <PaymentDisplay
                key={key}
                label="Prepaid Payment"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.PrepaidPayment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={FreightInvoiceFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.AllowanceCharge}
              />
            }
          />

          <ExchangeRateDisplay
            label="Tax Exchange Rate"
            value={value.TaxExchangeRate?.[0]}
            meta={FreightInvoiceFieldMeta.TaxExchangeRate}
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={FreightInvoiceFieldMeta.PricingExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Exchange Rate"
            value={value.PaymentExchangeRate?.[0]}
            meta={FreightInvoiceFieldMeta.PaymentExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Alternative Exchange Rate"
            value={value.PaymentAlternativeExchangeRate?.[0]}
            meta={FreightInvoiceFieldMeta.PaymentAlternativeExchangeRate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={FreightInvoiceFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal ubl-WithholdingTaxTotal"
            label="Withholding Tax Total"
            items={value.WithholdingTaxTotal}
            meta={FreightInvoiceFieldMeta.WithholdingTaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Withholding Tax Total"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.WithholdingTaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Legal Monetary Total"
            value={value.LegalMonetaryTotal?.[0]}
            meta={FreightInvoiceFieldMeta.LegalMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-InvoiceLine"
            label="Invoice Line"
            items={value.InvoiceLine}
            meta={FreightInvoiceFieldMeta.InvoiceLine} 
            itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
              <InvoiceLineDisplay
                key={key}
                label="Invoice Line"
                value={itemValue}
                meta={FreightInvoiceFieldMeta.InvoiceLine}
              />
            }
          />
        </div>
    </div>
  )
}
