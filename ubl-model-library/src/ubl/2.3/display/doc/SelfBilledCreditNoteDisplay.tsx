import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: SelfBilledCreditNote | undefined
  meta: FieldMeta<T>
}

export default function SelfBilledCreditNoteDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-SelfBilledCreditNote">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Due Date"
            value={value.DueDate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.DueDate}
          />

          <DateDisplay
            label="Tax Point Date"
            value={value.TaxPointDate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.TaxPointDate}
          />

          <CodeDisplay
            label="Credit Note Type Code"
            value={value.CreditNoteTypeCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={SelfBilledCreditNoteFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Tax Currency Code"
            value={value.TaxCurrencyCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode}
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode}
          />

          <CodeDisplay
            label="Payment Currency Code"
            value={value.PaymentCurrencyCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode}
          />

          <CodeDisplay
            label="Payment Alternative Currency Code"
            value={value.PaymentAlternativeCurrencyCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric}
          />

          <TextDisplay
            label="Buyer Reference"
            value={value.BuyerReference?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.BuyerReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-InvoicePeriod"
            label="Invoice Period"
            items={value.InvoicePeriod}
            meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Invoice Period"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Response ubl-DiscrepancyResponse"
            label="Discrepancy Response"
            items={value.DiscrepancyResponse}
            meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse} 
            itemDisplay={ (itemValue: Response, key: string | number) =>
              <ResponseDisplay
                key={key}
                label="Discrepancy Response"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse}
              />
            }
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.OrderReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-BillingReference"
            label="Billing Reference"
            items={value.BillingReference}
            meta={SelfBilledCreditNoteFieldMeta.BillingReference} 
            itemDisplay={ (itemValue: BillingReference, key: string | number) =>
              <BillingReferenceDisplay
                key={key}
                label="Billing Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.BillingReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-DespatchDocumentReference"
            label="Despatch Document Reference"
            items={value.DespatchDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Despatch Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ReceiptDocumentReference"
            label="Receipt Document Reference"
            items={value.ReceiptDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Receipt Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-ContractDocumentReference"
            label="Contract Document Reference"
            items={value.ContractDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Contract Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-StatementDocumentReference"
            label="Statement Document Reference"
            items={value.StatementDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Statement Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OriginatorDocumentReference"
            label="Originator Document Reference"
            items={value.OriginatorDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Originator Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ProjectReference"
            label="Project Reference"
            items={value.ProjectReference}
            meta={SelfBilledCreditNoteFieldMeta.ProjectReference} 
            itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
              <ProjectReferenceDisplay
                key={key}
                label="Project Reference"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.ProjectReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={SelfBilledCreditNoteFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty}
          />

          <PartyDisplay
            label="Payee Party"
            value={value.PayeeParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PayeeParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty}
          />

          <PartyDisplay
            label="Tax Representative Party"
            value={value.TaxRepresentativeParty?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={SelfBilledCreditNoteFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={SelfBilledCreditNoteFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.PaymentMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={SelfBilledCreditNoteFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.PaymentTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge}
              />
            }
          />

          <ExchangeRateDisplay
            label="Tax Exchange Rate"
            value={value.TaxExchangeRate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate}
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Exchange Rate"
            value={value.PaymentExchangeRate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Alternative Exchange Rate"
            value={value.PaymentAlternativeExchangeRate?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={SelfBilledCreditNoteFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.TaxTotal}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal ubl-WithholdingTaxTotal"
            label="Withholding Tax Total"
            items={value.WithholdingTaxTotal}
            meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Withholding Tax Total"
                value={itemValue}
                meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Legal Monetary Total"
            value={value.LegalMonetaryTotal?.[0]}
            meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-CreditNoteLine"
            label="Credit Note Line"
            items={value.CreditNoteLine}
            meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine} 
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
