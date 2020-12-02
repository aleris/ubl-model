import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderResponse } from  '../../model/doc/OrderResponse'
import { OrderResponseFieldMeta } from  '../../meta/doc/OrderResponseMeta'
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
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
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
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
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
  value: OrderResponse
  meta: FieldMeta<T>
}

export default function OrderResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={OrderResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={OrderResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.SalesOrderID} 
          value={value.SalesOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.SalesOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={OrderResponseFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={OrderResponseFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={OrderResponseFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={OrderResponseFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OrderResponseCode} 
          value={value.OrderResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseFieldMeta.OrderResponseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.DocumentCurrencyCode} 
          value={value.DocumentCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseFieldMeta.DocumentCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.TaxCurrencyCode} 
          value={value.TaxCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseFieldMeta.TaxCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.TotalPackagesQuantity} 
          value={value.TotalPackagesQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={OrderResponseFieldMeta.TotalPackagesQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={OrderResponseFieldMeta.GrossWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={OrderResponseFieldMeta.NetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={OrderResponseFieldMeta.NetNetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={OrderResponseFieldMeta.GrossVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={OrderResponseFieldMeta.NetVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.CustomerReference} 
          value={value.CustomerReference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseFieldMeta.CustomerReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AccountingCostCode} 
          value={value.AccountingCostCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={OrderResponseFieldMeta.AccountingCostCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AccountingCost} 
          value={value.AccountingCost}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={OrderResponseFieldMeta.AccountingCost} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={OrderResponseFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={OrderResponseFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OrderReference} 
          value={value.OrderReference}
          itemDisplay={ (itemValue: OrderReference, key: string | number) =>
            <OrderReferenceDisplay key={key} meta={OrderResponseFieldMeta.OrderReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OrderDocumentReference} 
          value={value.OrderDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseFieldMeta.OrderDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OrderChangeDocumentReference} 
          value={value.OrderChangeDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseFieldMeta.OrderChangeDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OriginatorDocumentReference} 
          value={value.OriginatorDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseFieldMeta.OriginatorDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={OrderResponseFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={OrderResponseFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={OrderResponseFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderResponseFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={OrderResponseFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AccountingSupplierParty} 
          value={value.AccountingSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={OrderResponseFieldMeta.AccountingSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AccountingCustomerParty} 
          value={value.AccountingCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={OrderResponseFieldMeta.AccountingCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={OrderResponseFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={OrderResponseFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.PaymentMeans} 
          value={value.PaymentMeans}
          itemDisplay={ (itemValue: PaymentMeans, key: string | number) =>
            <PaymentMeansDisplay key={key} meta={OrderResponseFieldMeta.PaymentMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.PaymentTerms} 
          value={value.PaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={OrderResponseFieldMeta.PaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={OrderResponseFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.TransactionConditions} 
          value={value.TransactionConditions}
          itemDisplay={ (itemValue: TransactionConditions, key: string | number) =>
            <TransactionConditionsDisplay key={key} meta={OrderResponseFieldMeta.TransactionConditions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.TaxExchangeRate} 
          value={value.TaxExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderResponseFieldMeta.TaxExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.PricingExchangeRate} 
          value={value.PricingExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderResponseFieldMeta.PricingExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.PaymentExchangeRate} 
          value={value.PaymentExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={OrderResponseFieldMeta.PaymentExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.DestinationCountry} 
          value={value.DestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={OrderResponseFieldMeta.DestinationCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={OrderResponseFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={OrderResponseFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={OrderResponseFieldMeta.OrderLine} 
          value={value.OrderLine}
          itemDisplay={ (itemValue: OrderLine, key: string | number) =>
            <OrderLineDisplay key={key} meta={OrderResponseFieldMeta.OrderLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
