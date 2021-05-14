import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Order } from  '../../model/doc/Order'
import { OrderFieldMeta } from  '../../meta/doc/OrderMeta'
import AllowanceChargeDisplay from '../cac/AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CatalogueReferenceDisplay from '../cac/CatalogueReferenceDisplay'
import { CatalogueReference } from '../../model/cac/CatalogueReference'
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
  value: Order
  meta: FieldMeta<T>
}

export default function OrderDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Order ubl-OrderType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Order ubl-UBLExtensions"
          meta={OrderFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-UBLVersionID"
          meta={OrderFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={OrderFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-CustomizationID"
          meta={OrderFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={OrderFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-ProfileID"
          meta={OrderFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={OrderFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-ProfileExecutionID"
          meta={OrderFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={OrderFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-ID"
          meta={OrderFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={OrderFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-SalesOrderID"
          meta={OrderFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sales Order Identifier"
              value={itemValue}
              meta={OrderFieldMeta.SalesOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Indicator ubl-CopyIndicator"
          meta={OrderFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={OrderFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Identifier ubl-UUID"
          meta={OrderFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Date ubl-IssueDate"
          meta={OrderFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={OrderFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Time ubl-IssueTime"
          meta={OrderFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={OrderFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-OrderTypeCode"
          meta={OrderFieldMeta.OrderTypeCode} 
          value={value.OrderTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Order Type Code"
              value={itemValue}
              meta={OrderFieldMeta.OrderTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Order ubl-Text ubl-Note"
          meta={OrderFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OrderFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-RequestedInvoiceCurrencyCode"
          meta={OrderFieldMeta.RequestedInvoiceCurrencyCode} 
          value={value.RequestedInvoiceCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Requested Invoice Currency Code"
              value={itemValue}
              meta={OrderFieldMeta.RequestedInvoiceCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-DocumentCurrencyCode"
          meta={OrderFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={OrderFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-PricingCurrencyCode"
          meta={OrderFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={OrderFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-TaxCurrencyCode"
          meta={OrderFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={OrderFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Text ubl-CustomerReference"
          meta={OrderFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Customer Reference"
              value={itemValue}
              meta={OrderFieldMeta.CustomerReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Code ubl-AccountingCostCode"
          meta={OrderFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={OrderFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Text ubl-AccountingCost"
          meta={OrderFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={OrderFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Order ubl-Numeric ubl-LineCountNumeric"
          meta={OrderFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={OrderFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-Period ubl-ValidityPeriod"
          meta={OrderFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={OrderFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-DocumentReference ubl-QuotationDocumentReference"
          meta={OrderFieldMeta.QuotationDocumentReference} 
          value={value.QuotationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Quotation Document Reference"
              value={itemValue}
              meta={OrderFieldMeta.QuotationDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-DocumentReference ubl-OrderDocumentReference"
          meta={OrderFieldMeta.OrderDocumentReference} 
          value={value.OrderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Order Document Reference"
              value={itemValue}
              meta={OrderFieldMeta.OrderDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-DocumentReference ubl-OriginatorDocumentReference"
          meta={OrderFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Originator Document Reference"
              value={itemValue}
              meta={OrderFieldMeta.OriginatorDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-CatalogueReference"
          meta={OrderFieldMeta.CatalogueReference} 
          value={value.CatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Catalogue Reference"
              value={itemValue}
              meta={OrderFieldMeta.CatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={OrderFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={OrderFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-Contract"
          meta={OrderFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={OrderFieldMeta.Contract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-ProjectReference"
          meta={OrderFieldMeta.ProjectReference} 
          value={value.ProjectReference}
          itemDisplay={ (itemValue: ProjectReference, key: string | number) =>
            <ProjectReferenceDisplay
              key={key}
              label="Project Reference"
              value={itemValue}
              meta={OrderFieldMeta.ProjectReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-Signature"
          meta={OrderFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={OrderFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={OrderFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={OrderFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-SupplierParty ubl-SellerSupplierParty"
          meta={OrderFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={OrderFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={OrderFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={OrderFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-Party ubl-FreightForwarderParty"
          meta={OrderFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={OrderFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={OrderFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={OrderFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-Delivery"
          meta={OrderFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={OrderFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-DeliveryTerms"
          meta={OrderFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={OrderFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-PaymentMeans"
          meta={OrderFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={OrderFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-PaymentTerms"
          meta={OrderFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={OrderFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-TransactionConditions"
          meta={OrderFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay
              key={key}
              label="Transaction Conditions"
              value={itemValue}
              meta={OrderFieldMeta.TransactionConditions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-AllowanceCharge"
          meta={OrderFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={OrderFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={OrderFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={OrderFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={OrderFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={OrderFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={OrderFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={OrderFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-Country ubl-DestinationCountry"
          meta={OrderFieldMeta.DestinationCountry} 
          value={value.DestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Destination Country"
              value={itemValue}
              meta={OrderFieldMeta.DestinationCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-TaxTotal"
          meta={OrderFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={OrderFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Order ubl-MonetaryTotal ubl-AnticipatedMonetaryTotal"
          meta={OrderFieldMeta.AnticipatedMonetaryTotal} 
          value={value.AnticipatedMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Anticipated Monetary Total"
              value={itemValue}
              meta={OrderFieldMeta.AnticipatedMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Order ubl-OrderLine"
          meta={OrderFieldMeta.OrderLine} 
          value={value.OrderLine}
          itemDisplay={ (itemValue: OrderLine, key: string | number) =>
            <OrderLineDisplay
              key={key}
              label="Order Line"
              value={itemValue}
              meta={OrderFieldMeta.OrderLine}
            />
          }
        />
        </div>
    </div>
  )
}
