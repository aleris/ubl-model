import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Quotation } from  '../../model/doc/Quotation'
import { QuotationFieldMeta } from  '../../meta/doc/QuotationMeta'
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
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MonetaryTotalDisplay from '../cac/MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PaymentMeansDisplay from '../cac/PaymentMeansDisplay'
import { PaymentMeans } from '../../model/cac/PaymentMeans'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuotationLineDisplay from '../cac/QuotationLineDisplay'
import { QuotationLine } from '../../model/cac/QuotationLine'
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
  value: Quotation | undefined
  meta: FieldMeta<T>
}

export default function QuotationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Quotation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={QuotationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={QuotationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={QuotationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={QuotationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={QuotationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={QuotationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={QuotationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={QuotationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={QuotationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={QuotationFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={QuotationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={QuotationFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={QuotationFieldMeta.PricingCurrencyCode}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={QuotationFieldMeta.LineCountNumeric}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={QuotationFieldMeta.ValidityPeriod}
          />

          <DocumentReferenceDisplay
            label="Request For Quotation Document Reference"
            value={value.RequestForQuotationDocumentReference?.[0]}
            meta={QuotationFieldMeta.RequestForQuotationDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={QuotationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={QuotationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract"
            label="Contract"
            items={value.Contract}
            meta={QuotationFieldMeta.Contract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Contract"
                value={itemValue}
                meta={QuotationFieldMeta.Contract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={QuotationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={QuotationFieldMeta.Signature}
              />
            }
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={QuotationFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={QuotationFieldMeta.BuyerCustomerParty}
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={QuotationFieldMeta.OriginatorCustomerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={QuotationFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={QuotationFieldMeta.Delivery}
              />
            }
          />

          <DeliveryTermsDisplay
            label="Delivery Terms"
            value={value.DeliveryTerms?.[0]}
            meta={QuotationFieldMeta.DeliveryTerms}
          />

          <PaymentMeansDisplay
            label="Payment Means"
            value={value.PaymentMeans?.[0]}
            meta={QuotationFieldMeta.PaymentMeans}
          />

          <TransactionConditionsDisplay
            label="Transaction Conditions"
            value={value.TransactionConditions?.[0]}
            meta={QuotationFieldMeta.TransactionConditions}
          />

          <ElementListDisplay
            className="ubl-doc ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={QuotationFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={QuotationFieldMeta.AllowanceCharge}
              />
            }
          />

          <CountryDisplay
            label="Destination Country"
            value={value.DestinationCountry?.[0]}
            meta={QuotationFieldMeta.DestinationCountry}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={QuotationFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={QuotationFieldMeta.TaxTotal}
              />
            }
          />

          <MonetaryTotalDisplay
            label="Quoted Monetary Total"
            value={value.QuotedMonetaryTotal?.[0]}
            meta={QuotationFieldMeta.QuotedMonetaryTotal}
          />

          <ElementListDisplay
            className="ubl-doc ubl-QuotationLine"
            label="Quotation Line"
            items={value.QuotationLine}
            meta={QuotationFieldMeta.QuotationLine} 
            itemDisplay={ (itemValue: QuotationLine, key: string | number) =>
              <QuotationLineDisplay
                key={key}
                label="Quotation Line"
                value={itemValue}
                meta={QuotationFieldMeta.QuotationLine}
              />
            }
          />
        </div>
    </div>
  )
}
