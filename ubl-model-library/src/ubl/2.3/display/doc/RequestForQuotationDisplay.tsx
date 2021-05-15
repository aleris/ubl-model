import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestForQuotation } from  '../../model/doc/RequestForQuotation'
import { RequestForQuotationFieldMeta } from  '../../meta/doc/RequestForQuotationMeta'
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
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import RequestForQuotationLineDisplay from '../cac/RequestForQuotationLineDisplay'
import { RequestForQuotationLine } from '../../model/cac/RequestForQuotationLine'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: RequestForQuotation | undefined
  meta: FieldMeta<T>
}

export default function RequestForQuotationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-RequestForQuotation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RequestForQuotationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={RequestForQuotationFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={RequestForQuotationFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={RequestForQuotationFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={RequestForQuotationFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RequestForQuotationFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={RequestForQuotationFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RequestForQuotationFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={RequestForQuotationFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={RequestForQuotationFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Submission Due Date"
            value={value.SubmissionDueDate?.[0]}
            meta={RequestForQuotationFieldMeta.SubmissionDueDate}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RequestForQuotationFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Pricing Currency Code"
            value={value.PricingCurrencyCode?.[0]}
            meta={RequestForQuotationFieldMeta.PricingCurrencyCode}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={RequestForQuotationFieldMeta.LineCountNumeric}
          />

          <PeriodDisplay
            label="Requested Validity Period"
            value={value.RequestedValidityPeriod?.[0]}
            meta={RequestForQuotationFieldMeta.RequestedValidityPeriod}
          />

          <DocumentReferenceDisplay
            label="Catalogue Document Reference"
            value={value.CatalogueDocumentReference?.[0]}
            meta={RequestForQuotationFieldMeta.CatalogueDocumentReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={RequestForQuotationFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={RequestForQuotationFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.Signature}
              />
            }
          />

          <CustomerPartyDisplay
            label="Originator Customer Party"
            value={value.OriginatorCustomerParty?.[0]}
            meta={RequestForQuotationFieldMeta.OriginatorCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={RequestForQuotationFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={RequestForQuotationFieldMeta.BuyerCustomerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Delivery"
            label="Delivery"
            items={value.Delivery}
            meta={RequestForQuotationFieldMeta.Delivery} 
            itemDisplay={ (itemValue: Delivery, key: string | number) =>
              <DeliveryDisplay
                key={key}
                label="Delivery"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.Delivery}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DeliveryTerms"
            label="Delivery Terms"
            items={value.DeliveryTerms}
            meta={RequestForQuotationFieldMeta.DeliveryTerms} 
            itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
              <DeliveryTermsDisplay
                key={key}
                label="Delivery Terms"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.DeliveryTerms}
              />
            }
          />

          <CountryDisplay
            label="Destination Country"
            value={value.DestinationCountry?.[0]}
            meta={RequestForQuotationFieldMeta.DestinationCountry}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract"
            label="Contract"
            items={value.Contract}
            meta={RequestForQuotationFieldMeta.Contract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Contract"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.Contract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-RequestForQuotationLine"
            label="Request For Quotation Line"
            items={value.RequestForQuotationLine}
            meta={RequestForQuotationFieldMeta.RequestForQuotationLine} 
            itemDisplay={ (itemValue: RequestForQuotationLine, key: string | number) =>
              <RequestForQuotationLineDisplay
                key={key}
                label="Request For Quotation Line"
                value={itemValue}
                meta={RequestForQuotationFieldMeta.RequestForQuotationLine}
              />
            }
          />
        </div>
    </div>
  )
}
