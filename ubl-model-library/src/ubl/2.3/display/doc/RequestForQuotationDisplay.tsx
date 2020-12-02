import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: RequestForQuotation
  meta: FieldMeta<T>
}

export default function RequestForQuotationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RequestForQuotationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RequestForQuotationFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RequestForQuotationFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={RequestForQuotationFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={RequestForQuotationFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.SubmissionDueDate} 
          value={value.SubmissionDueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={RequestForQuotationFieldMeta.SubmissionDueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RequestForQuotationFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.PricingCurrencyCode} 
          value={value.PricingCurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RequestForQuotationFieldMeta.PricingCurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={RequestForQuotationFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.RequestedValidityPeriod} 
          value={value.RequestedValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RequestForQuotationFieldMeta.RequestedValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.CatalogueDocumentReference} 
          value={value.CatalogueDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RequestForQuotationFieldMeta.CatalogueDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RequestForQuotationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={RequestForQuotationFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.OriginatorCustomerParty} 
          value={value.OriginatorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RequestForQuotationFieldMeta.OriginatorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={RequestForQuotationFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RequestForQuotationFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={RequestForQuotationFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.DeliveryTerms} 
          value={value.DeliveryTerms}
          itemDisplay={ (itemValue: DeliveryTerms, key: string | number) =>
            <DeliveryTermsDisplay key={key} meta={RequestForQuotationFieldMeta.DeliveryTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.DestinationCountry} 
          value={value.DestinationCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={RequestForQuotationFieldMeta.DestinationCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.Contract} 
          value={value.Contract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={RequestForQuotationFieldMeta.Contract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestForQuotationFieldMeta.RequestForQuotationLine} 
          value={value.RequestForQuotationLine}
          itemDisplay={ (itemValue: RequestForQuotationLine, key: string | number) =>
            <RequestForQuotationLineDisplay key={key} meta={RequestForQuotationFieldMeta.RequestForQuotationLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
