import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: SelfBilledCreditNote
  meta: FieldMeta<T>
}

export default function SelfBilledCreditNoteDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.DueDate} 
          value={value.DueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.DueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.TaxPointDate} 
          value={value.TaxPointDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.TaxPointDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode} 
          value={value.CreditNoteTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.CreditNoteTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.TaxCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode} 
          value={value.PaymentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode} 
          value={value.PaymentAlternativeCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.BuyerReference} 
          value={value.BuyerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.BuyerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod} 
          value={value.InvoicePeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.InvoicePeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse} 
          value={value.DiscrepancyResponse}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.DiscrepancyResponse} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.BillingReference} 
          value={value.BillingReference}
          itemDisplay={ (itemValue: BillingReference, key: string | number) =>
            <BillingReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.BillingReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference} 
          value={value.DespatchDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.DespatchDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference} 
          value={value.ReceiptDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ReceiptDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference} 
          value={value.ContractDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ContractDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference} 
          value={value.StatementDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.StatementDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.ProjectReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PayeeParty} 
          value={value.PayeeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PayeeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty} 
          value={value.TaxRepresentativeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.TaxRepresentativeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.TaxExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate} 
          value={value.PaymentAlternativeExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.PaymentAlternativeExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal} 
          value={value.WithholdingTaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.WithholdingTaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine} 
          value={value.CreditNoteLine}
          itemDisplay={ (itemValue: CreditNoteLine, key: string | number) =>
            <CreditNoteLineDisplay key={key} meta={SelfBilledCreditNoteFieldMeta.CreditNoteLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
