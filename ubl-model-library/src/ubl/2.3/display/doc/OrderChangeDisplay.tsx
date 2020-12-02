import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: OrderChange
  meta: FieldMeta<T>
}

export default function OrderChangeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderChangeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderChangeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.SalesOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={OrderChangeFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={OrderChangeFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={OrderChangeFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderChangeFieldMeta.SequenceNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderChangeFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode} 
          value={value.RequestedInvoiceCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderChangeFieldMeta.RequestedInvoiceCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderChangeFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderChangeFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderChangeFieldMeta.TaxCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderChangeFieldMeta.CustomerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderChangeFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderChangeFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={OrderChangeFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={OrderChangeFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={OrderChangeFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.QuotationDocumentReference} 
          value={value.QuotationDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderChangeFieldMeta.QuotationDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderChangeFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderChangeFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={OrderChangeFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={OrderChangeFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderChangeFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderChangeFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderChangeFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={OrderChangeFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderChangeFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderChangeFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={OrderChangeFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={OrderChangeFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={OrderChangeFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={OrderChangeFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay key={key} meta={OrderChangeFieldMeta.TransactionConditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={OrderChangeFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderChangeFieldMeta.TaxExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderChangeFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderChangeFieldMeta.PaymentExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.DestinationCountry} 
          value={value.DestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={OrderChangeFieldMeta.DestinationCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={OrderChangeFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal} 
          value={value.AnticipatedMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={OrderChangeFieldMeta.AnticipatedMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderChangeFieldMeta.OrderLine} 
          value={value.OrderLine}
          itemDisplay={ (itemValue: OrderLine, key: string | number) =>
            <OrderLineDisplay key={key} meta={OrderChangeFieldMeta.OrderLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
