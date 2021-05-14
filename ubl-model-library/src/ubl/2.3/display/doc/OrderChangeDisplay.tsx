import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: OrderChange
  meta: FieldMeta<T>
}

export default function OrderChangeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-OrderChange ubl-OrderChangeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-OrderChange ubl-UBLExtensions"
          meta={OrderChangeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={OrderChangeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-UBLVersionID"
          meta={OrderChangeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-CustomizationID"
          meta={OrderChangeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-ProfileID"
          meta={OrderChangeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-ProfileExecutionID"
          meta={OrderChangeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-ID"
          meta={OrderChangeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-SalesOrderID"
          meta={OrderChangeFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sales Order Identifier"
              value={itemValue}
              meta={OrderChangeFieldMeta.SalesOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Indicator ubl-CopyIndicator"
          meta={OrderChangeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={OrderChangeFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-UUID"
          meta={OrderChangeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={OrderChangeFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Date ubl-IssueDate"
          meta={OrderChangeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={OrderChangeFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Time ubl-IssueTime"
          meta={OrderChangeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={OrderChangeFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Identifier ubl-SequenceNumberID"
          meta={OrderChangeFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Sequence Number"
              value={itemValue}
              meta={OrderChangeFieldMeta.SequenceNumberID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-OrderChange ubl-Text ubl-Note"
          meta={OrderChangeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={OrderChangeFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Code ubl-RequestedInvoiceCurrencyCode"
          meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode} 
          value={value.RequestedInvoiceCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Requested Invoice Currency Code"
              value={itemValue}
              meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Code ubl-DocumentCurrencyCode"
          meta={OrderChangeFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Currency Code"
              value={itemValue}
              meta={OrderChangeFieldMeta.DocumentCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Code ubl-PricingCurrencyCode"
          meta={OrderChangeFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Pricing Currency Code"
              value={itemValue}
              meta={OrderChangeFieldMeta.PricingCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Code ubl-TaxCurrencyCode"
          meta={OrderChangeFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Currency Code"
              value={itemValue}
              meta={OrderChangeFieldMeta.TaxCurrencyCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Text ubl-CustomerReference"
          meta={OrderChangeFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Customer Reference"
              value={itemValue}
              meta={OrderChangeFieldMeta.CustomerReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Code ubl-AccountingCostCode"
          meta={OrderChangeFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Accounting Cost Code"
              value={itemValue}
              meta={OrderChangeFieldMeta.AccountingCostCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Text ubl-AccountingCost"
          meta={OrderChangeFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Accounting Cost"
              value={itemValue}
              meta={OrderChangeFieldMeta.AccountingCost}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-OrderChange ubl-Numeric ubl-LineCountNumeric"
          meta={OrderChangeFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={OrderChangeFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-Period ubl-ValidityPeriod"
          meta={OrderChangeFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={OrderChangeFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-OrderReference"
          meta={OrderChangeFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay
              key={key}
              label="Order Reference"
              value={itemValue}
              meta={OrderChangeFieldMeta.OrderReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-DocumentReference ubl-QuotationDocumentReference"
          meta={OrderChangeFieldMeta.QuotationDocumentReference} 
          value={value.QuotationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Quotation Document Reference"
              value={itemValue}
              meta={OrderChangeFieldMeta.QuotationDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-DocumentReference ubl-OriginatorDocumentReference"
          meta={OrderChangeFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Originator Document Reference"
              value={itemValue}
              meta={OrderChangeFieldMeta.OriginatorDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={OrderChangeFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={OrderChangeFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-Contract"
          meta={OrderChangeFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Contract"
              value={itemValue}
              meta={OrderChangeFieldMeta.Contract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-Signature"
          meta={OrderChangeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={OrderChangeFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={OrderChangeFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-SupplierParty ubl-SellerSupplierParty"
          meta={OrderChangeFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-CustomerParty ubl-OriginatorCustomerParty"
          meta={OrderChangeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Originator Customer Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.OriginatorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-Party ubl-FreightForwarderParty"
          meta={OrderChangeFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-CustomerParty ubl-AccountingCustomerParty"
          meta={OrderChangeFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Accounting Customer Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.AccountingCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-SupplierParty ubl-AccountingSupplierParty"
          meta={OrderChangeFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Accounting Supplier Party"
              value={itemValue}
              meta={OrderChangeFieldMeta.AccountingSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-Delivery"
          meta={OrderChangeFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={OrderChangeFieldMeta.Delivery}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-DeliveryTerms"
          meta={OrderChangeFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay
              key={key}
              label="Delivery Terms"
              value={itemValue}
              meta={OrderChangeFieldMeta.DeliveryTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-PaymentMeans"
          meta={OrderChangeFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay
              key={key}
              label="Payment Means"
              value={itemValue}
              meta={OrderChangeFieldMeta.PaymentMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-PaymentTerms"
          meta={OrderChangeFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Payment Terms"
              value={itemValue}
              meta={OrderChangeFieldMeta.PaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-TransactionConditions"
          meta={OrderChangeFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay
              key={key}
              label="Transaction Conditions"
              value={itemValue}
              meta={OrderChangeFieldMeta.TransactionConditions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-AllowanceCharge"
          meta={OrderChangeFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={OrderChangeFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-ExchangeRate ubl-TaxExchangeRate"
          meta={OrderChangeFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Tax Exchange Rate"
              value={itemValue}
              meta={OrderChangeFieldMeta.TaxExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-ExchangeRate ubl-PricingExchangeRate"
          meta={OrderChangeFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Pricing Exchange Rate"
              value={itemValue}
              meta={OrderChangeFieldMeta.PricingExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-ExchangeRate ubl-PaymentExchangeRate"
          meta={OrderChangeFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Payment Exchange Rate"
              value={itemValue}
              meta={OrderChangeFieldMeta.PaymentExchangeRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-Country ubl-DestinationCountry"
          meta={OrderChangeFieldMeta.DestinationCountry} 
          value={value.DestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Destination Country"
              value={itemValue}
              meta={OrderChangeFieldMeta.DestinationCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-TaxTotal"
          meta={OrderChangeFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={OrderChangeFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-OrderChange ubl-MonetaryTotal ubl-AnticipatedMonetaryTotal"
          meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal} 
          value={value.AnticipatedMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Anticipated Monetary Total"
              value={itemValue}
              meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-OrderChange ubl-OrderLine"
          meta={OrderChangeFieldMeta.OrderLine} 
          value={value.OrderLine}
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
