import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: FreightInvoice
  meta: FieldMeta<T>
}

export default function FreightInvoiceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FreightInvoiceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={FreightInvoiceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={FreightInvoiceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={FreightInvoiceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={FreightInvoiceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.DueDate} 
          value={value.DueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={FreightInvoiceFieldMeta.DueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.InvoiceTypeCode} 
          value={value.InvoiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.InvoiceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FreightInvoiceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={FreightInvoiceFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.TaxCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentAlternativeCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FreightInvoiceFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FreightInvoiceFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={FreightInvoiceFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={FreightInvoiceFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={FreightInvoiceFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.DespatchDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.ReceiptDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay key={key} meta={FreightInvoiceFieldMeta.ProjectReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={FreightInvoiceFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={FreightInvoiceFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={FreightInvoiceFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={FreightInvoiceFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={FreightInvoiceFieldMeta.TaxRepresentativeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PrepaidPayment} 
          value={value.PrepaidPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay key={key} meta={FreightInvoiceFieldMeta.PrepaidPayment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={FreightInvoiceFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={FreightInvoiceFieldMeta.TaxExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={FreightInvoiceFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={FreightInvoiceFieldMeta.PaymentAlternativeExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={FreightInvoiceFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={FreightInvoiceFieldMeta.WithholdingTaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={FreightInvoiceFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FreightInvoiceFieldMeta.InvoiceLine} 
          value={value.InvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay key={key} meta={FreightInvoiceFieldMeta.InvoiceLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
