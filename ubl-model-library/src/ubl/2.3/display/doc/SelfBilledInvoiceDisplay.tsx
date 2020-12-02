import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: SelfBilledInvoice
  meta: FieldMeta<T>
}

export default function SelfBilledInvoiceDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SelfBilledInvoiceFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={SelfBilledInvoiceFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledInvoiceFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.DueDate} 
          value={value.DueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.DueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.InvoiceTypeCode} 
          value={value.InvoiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.InvoiceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledInvoiceFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.TaxCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={SelfBilledInvoiceFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.BuyerReference} 
          value={value.BuyerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledInvoiceFieldMeta.BuyerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={SelfBilledInvoiceFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.DespatchDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ReceiptDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.StatementDocumentReference} 
          value={value.StatementDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.StatementDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay key={key} meta={SelfBilledInvoiceFieldMeta.ProjectReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={SelfBilledInvoiceFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SelfBilledInvoiceFieldMeta.TaxRepresentativeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={SelfBilledInvoiceFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={SelfBilledInvoiceFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PrepaidPayment} 
          value={value.PrepaidPayment}
          itemDisplay={ (itemValue: Payment, key: string | number) =>
            <PaymentDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PrepaidPayment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={SelfBilledInvoiceFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.TaxExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledInvoiceFieldMeta.PaymentAlternativeExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={SelfBilledInvoiceFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={SelfBilledInvoiceFieldMeta.WithholdingTaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={SelfBilledInvoiceFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledInvoiceFieldMeta.InvoiceLine} 
          value={value.InvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay key={key} meta={SelfBilledInvoiceFieldMeta.InvoiceLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
