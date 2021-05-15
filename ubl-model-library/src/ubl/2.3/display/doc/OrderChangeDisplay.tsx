import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderChange } from  '../../model/doc/OrderChange'
import { OrderChangeFieldMeta } from  '../../meta/doc/OrderChangeMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContractDisplay from '../cac/ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import CountryDisplay from '../cac/CountryDisplay'
import { Country } from '../../model/cac/Country'
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
import OrderLineDisplay from '../cac/OrderLineDisplay'
import { OrderLine } from '../../model/cac/OrderLine'
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
import TransactionConditionsDisplay from '../cac/TransactionConditionsDisplay'
import { TransactionConditions } from '../../model/cac/TransactionConditions'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: OrderChange | undefined
  meta: FieldMeta<T>
}

export default function OrderChangeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-OrderChange">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={OrderChangeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={OrderChangeFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={OrderChangeFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={OrderChangeFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={OrderChangeFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={OrderChangeFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Sales Order Identifier"
            value={value.SalesOrderID?.[0]}
            meta={OrderChangeFieldMeta.SalesOrderID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={OrderChangeFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={OrderChangeFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={OrderChangeFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={OrderChangeFieldMeta.IssueTime}
          />

          <IdentifierDisplay
            label="Sequence Number"
            value={value.SequenceNumberID?.[0]}
            meta={OrderChangeFieldMeta.SequenceNumberID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={OrderChangeFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={OrderChangeFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Requested Invoice Currency Code"
            value={value.RequestedInvoiceCurrencyCode?.[0]}
            meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode}
          />

          <CodeDisplay
            label="Document Currency Code"
            value={value.DocumentCurrencyCode?.[0]}
            meta={OrderChangeFieldMeta.DocumentCurrencyCode}
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={OrderChangeFieldMeta.PricingCurrencyCode}
          />

          <CodeDisplay
            label="Tax Currency Code"
            value={value.TaxCurrencyCode?.[0]}
            meta={OrderChangeFieldMeta.TaxCurrencyCode}
          />

          <TextDisplay
            label="Customer Reference"
            value={value.CustomerReference?.[0]}
            meta={OrderChangeFieldMeta.CustomerReference}
          />

          <CodeDisplay
            label="Accounting Cost Code"
            value={value.AccountingCostCode?.[0]}
            meta={OrderChangeFieldMeta.AccountingCostCode}
          />

          <TextDisplay
            label="Accounting Cost"
            value={value.AccountingCost?.[0]}
            meta={OrderChangeFieldMeta.AccountingCost}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={OrderChangeFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={OrderChangeFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={OrderChangeFieldMeta.ValidityPeriod}
              />
            }
          />

          <OrderReferenceDisplay
            label="Order Reference"
            value={value.OrderReference?.[0]}
            meta={OrderChangeFieldMeta.OrderReference}
          />

          <DocumentReferenceDisplay
            label="Quotation Document Reference"
            value={value.QuotationDocumentReference?.[0]}
            meta={OrderChangeFieldMeta.QuotationDocumentReference}
          />

          <DocumentReferenceDisplay
            label="Originator Document Reference"
            value={value.OriginatorDocumentReference?.[0]}
            meta={OrderChangeFieldMeta.OriginatorDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={OrderChangeFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={OrderChangeFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract"
            label="Contract"
            items={value.Contract}
            meta={OrderChangeFieldMeta.Contract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Contract"
                value={itemValue}
                meta={OrderChangeFieldMeta.Contract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={OrderChangeFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={OrderChangeFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={OrderChangeFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={OrderChangeFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={OrderChangeFieldMeta.OriginatorCustomerParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={OrderChangeFieldMeta.FreightForwarderParty}
          />

          <CustomerPartyDisplay
            label="Accounting Customer Party"
            value={value.AccountingCustomerParty?.[0]}
            meta={OrderChangeFieldMeta.AccountingCustomerParty}
          />

          <SupplierPartyDisplay
            label="Accounting Supplier Party"
            value={value.AccountingSupplierParty?.[0]}
            meta={OrderChangeFieldMeta.AccountingSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={OrderChangeFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={OrderChangeFieldMeta.Delivery}
              />
            }
          />

          <DeliveryTermsDisplay
            label="Delivery Terms"
            value={value.DeliveryTerms?.[0]}
            meta={OrderChangeFieldMeta.DeliveryTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentMeans"
            label="Payment Means"
            items={value.PaymentMeans}
            meta={OrderChangeFieldMeta.PaymentMeans} 
            itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
              <PaymentMeansDisplay
                key={key}
                label="Payment Means"
                value={itemValue}
                meta={OrderChangeFieldMeta.PaymentMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-PaymentTerms"
            label="Payment Terms"
            items={value.PaymentTerms}
            meta={OrderChangeFieldMeta.PaymentTerms} 
            itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
              <PaymentTermsDisplay
                key={key}
                label="Payment Terms"
                value={itemValue}
                meta={OrderChangeFieldMeta.PaymentTerms}
              />
            }
          />

          <TransactionConditionsDisplay
            label="Transaction Conditions"
            value={value.TransactionConditions?.[0]}
            meta={OrderChangeFieldMeta.TransactionConditions}
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={OrderChangeFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={OrderChangeFieldMeta.AllowanceCharge}
              />
            }
          />

          <ExchangeRateDisplay
            label="Tax Exchange Rate"
            value={value.TaxExchangeRate?.[0]}
            meta={OrderChangeFieldMeta.TaxExchangeRate}
          />

          <ExchangeRateDisplay
            label="Pricing Exchange Rate"
            value={value.PricingExchangeRate?.[0]}
            meta={OrderChangeFieldMeta.PricingExchangeRate}
          />

          <ExchangeRateDisplay
            label="Payment Exchange Rate"
            value={value.PaymentExchangeRate?.[0]}
            meta={OrderChangeFieldMeta.PaymentExchangeRate}
          />

          <CountryDisplay
            label="Destination Country"
            value={value.DestinationCountry?.[0]}
            meta={OrderChangeFieldMeta.DestinationCountry}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={OrderChangeFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={OrderChangeFieldMeta.TaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Anticipated Monetary Total"
            value={value.AnticipatedMonetaryTotal?.[0]}
            meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-OrderLine"
            label="Order Line"
            items={value.OrderLine}
            meta={OrderChangeFieldMeta.OrderLine} 
            itemDisplay={ (itemValue: OrderLine, key: string | number) =>
              <OrderLineDisplay
                key={key}
                label="Order Line"
                value={itemValue}
                meta={OrderChangeFieldMeta.OrderLine}
              />
            }
          />
        </div>
    </div>
  )
}
