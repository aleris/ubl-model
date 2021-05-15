import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CreditNote } from  '../../model/doc/CreditNote'
import { CreditNoteFieldMeta } from  '../../meta/doc/CreditNoteMeta'
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
  value: CreditNote | undefined
  meta: FieldMeta<T>
}

export default function CreditNoteDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-CreditNote">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CreditNoteFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CreditNoteFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CreditNoteFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CreditNoteFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CreditNoteFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CreditNoteFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={CreditNoteFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CreditNoteFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CreditNoteFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CreditNoteFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Due Date"
            value={value.DueDate?.[0]}
            meta={CreditNoteFieldMeta.DueDate}
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={CreditNoteFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Credit Note Type Code"
            value={value.CreditNoteTypeCode?.[0]}
            meta={CreditNoteFieldMeta.CreditNoteTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CreditNoteFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CreditNoteFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={CreditNoteFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Tax Currency Code"
            value={value.TaxCurrencyCode?.[0]}
            meta={CreditNoteFieldMeta.TaxCurrencyCode}
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={CreditNoteFieldMeta.PricingCurrencyCode}
          />

          <CodeDisplay
            label="Payment Currency Code"
            value={value.PaymentCurrencyCode?.[0]}
            meta={CreditNoteFieldMeta.PaymentCurrencyCode}
          />

          <CodeDisplay
            label="Payment Alternative Currency Code"
            value={value.PaymentAlternativeCurrencyCode?.[0]}
            meta={CreditNoteFieldMeta.PaymentAlternativeCurrencyCode}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={CreditNoteFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={CreditNoteFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={CreditNoteFieldMeta.LineCountNumeric}
          />

          <TextDisplay
            label="Buyer Reference"
            value={value.BuyerReference?.[0]}
            meta={CreditNoteFieldMeta.BuyerReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={CreditNoteFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={CreditNoteFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Response ubl-DiscrepancyResponse"
            label="Discrepancy Response"
            items={value.DiscrepancyResponse}
            meta={CreditNoteFieldMeta.DiscrepancyResponse} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Discrepancy Response"
                value={itemValue}
                meta={CreditNoteFieldMeta.DiscrepancyResponse}
              />
            }
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={CreditNoteFieldMeta.OrderReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={CreditNoteFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={CreditNoteFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ReceiptDocumentReference"
            label="Receipt Document Reference"
            items={value.ReceiptDocumentReference}
            meta={CreditNoteFieldMeta.ReceiptDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Receipt Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.ReceiptDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ContractDocumentReference"
            label="Contract Document Reference"
            items={value.ContractDocumentReference}
            meta={CreditNoteFieldMeta.ContractDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contract Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.ContractDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={CreditNoteFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-StatementDocumentReference"
            label="Statement Document Reference"
            items={value.StatementDocumentReference}
            meta={CreditNoteFieldMeta.StatementDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Statement Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.StatementDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OriginatorDocumentReference"
            label="Originator Document Reference"
            items={value.OriginatorDocumentReference}
            meta={CreditNoteFieldMeta.OriginatorDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Originator Document Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.OriginatorDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProjectReference"
            label="Project Reference"
            items={value.ProjectReference}
            meta={CreditNoteFieldMeta.ProjectReference} 
            itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
              <ProjectReferenceDisplay
                key={key}
                label="Project Reference"
                value={itemValue}
                meta={CreditNoteFieldMeta.ProjectReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CreditNoteFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CreditNoteFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={CreditNoteFieldMeta.AccountingSupplierParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={CreditNoteFieldMeta.AccountingCustomerParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={CreditNoteFieldMeta.PayeeParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={CreditNoteFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CreditNoteFieldMeta.SellerSupplierParty}
          />

          <PartyDisplay
            label="Tax Representative Party"
            value={value.TaxRepresentativeParty?.[0]}
            meta={CreditNoteFieldMeta.TaxRepresentativeParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={CreditNoteFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={CreditNoteFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={CreditNoteFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={CreditNoteFieldMeta.DeliveryTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={CreditNoteFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={CreditNoteFieldMeta.PaymentMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={CreditNoteFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={CreditNoteFieldMeta.PaymentTerms}
              />
            }
          />

          <ExchangeRateDisplay
            label="Tax Exchange Rate"
            value={value.TaxExchangeRate?.[0]}
            meta={CreditNoteFieldMeta.TaxExchangeRate}
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={CreditNoteFieldMeta.PricingExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Exchange Rate"
            value={value.PaymentExchangeRate?.[0]}
            meta={CreditNoteFieldMeta.PaymentExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Alternative Exchange Rate"
            value={value.PaymentAlternativeExchangeRate?.[0]}
            meta={CreditNoteFieldMeta.PaymentAlternativeExchangeRate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={CreditNoteFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={CreditNoteFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={CreditNoteFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={CreditNoteFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal ubl-WithholdingTaxTotal"
            label="Withholding Tax Total"
            items={value.WithholdingTaxTotal}
            meta={CreditNoteFieldMeta.WithholdingTaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Withholding Tax Total"
                value={itemValue}
                meta={CreditNoteFieldMeta.WithholdingTaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Legal Monetary Total"
            value={value.LegalMonetaryTotal?.[0]}
            meta={CreditNoteFieldMeta.LegalMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-CreditNoteLine"
            label="Credit Note Line"
            items={value.CreditNoteLine}
            meta={CreditNoteFieldMeta.CreditNoteLine} 
            itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
              <CreditNoteLineDisplay
                key={key}
                label="Credit Note Line"
                value={itemValue}
                meta={CreditNoteFieldMeta.CreditNoteLine}
              />
            }
          />
        </div>
    </div>
  )
}
