import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueRequest } from  '../../model/doc/CatalogueRequest'
import { CatalogueRequestFieldMeta } from  '../../meta/doc/CatalogueRequestMeta'
import AddressDisplay from '../cac/AddressDisplay'
import { Address } from '../../model/cac/Address'
import CatalogueReferenceDisplay from '../cac/CatalogueReferenceDisplay'
import { CatalogueReference } from '../../model/cac/CatalogueReference'
import CatalogueRequestLineDisplay from '../cac/CatalogueRequestLineDisplay'
import { CatalogueRequestLine } from '../../model/cac/CatalogueRequestLine'
import ClassificationSchemeDisplay from '../cac/ClassificationSchemeDisplay'
import { ClassificationScheme } from '../../model/cac/ClassificationScheme'
import ContractDisplay from '../cac/ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LanguageDisplay from '../cac/LanguageDisplay'
import { Language } from '../../model/cac/Language'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TradingTermsDisplay from '../cac/TradingTermsDisplay'
import { TradingTerms } from '../../model/cac/TradingTerms'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CatalogueRequest | undefined
  meta: FieldMeta<T>
}

export default function CatalogueRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-CatalogueRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CatalogueRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CatalogueRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CatalogueRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CatalogueRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueRequestFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CatalogueRequestFieldMeta.UUID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CatalogueRequestFieldMeta.Name}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CatalogueRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CatalogueRequestFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CatalogueRequestFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.Description}
              />
            }
          />

          <IndicatorDisplay
            label="Pricing Update Request Indicator"
            value={value.PricingUpdateRequestIndicator?.[0]}
            meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator}
          />

          <IndicatorDisplay
            label="Item Update Request Indicator"
            value={value.ItemUpdateRequestIndicator?.[0]}
            meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={CatalogueRequestFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={CatalogueRequestFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.ValidityPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CatalogueRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={CatalogueRequestFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Provider Party"
            value={value.ProviderParty?.[0]}
            meta={CatalogueRequestFieldMeta.ProviderParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CatalogueRequestFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CatalogueRequestFieldMeta.ContractorCustomerParty}
          />

          <CatalogueReferenceDisplay
            label="Requested Catalogue Reference"
            value={value.RequestedCatalogueReference?.[0]}
            meta={CatalogueRequestFieldMeta.RequestedCatalogueReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract ubl-ReferencedContract"
            label="Referenced Contract"
            items={value.ReferencedContract}
            meta={CatalogueRequestFieldMeta.ReferencedContract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Referenced Contract"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.ReferencedContract}
              />
            }
          />

          <TradingTermsDisplay
            label="Trading Terms"
            value={value.TradingTerms?.[0]}
            meta={CatalogueRequestFieldMeta.TradingTerms}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={CatalogueRequestFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Address ubl-ApplicableTerritoryAddress"
            label="Applicable Territory Address"
            items={value.ApplicableTerritoryAddress}
            meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Applicable Territory Address"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress}
              />
            }
          />

          <LanguageDisplay
            label="Requested Language"
            value={value.RequestedLanguage?.[0]}
            meta={CatalogueRequestFieldMeta.RequestedLanguage}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ClassificationScheme ubl-RequestedClassificationScheme"
            label="Requested Classification Scheme"
            items={value.RequestedClassificationScheme}
            meta={CatalogueRequestFieldMeta.RequestedClassificationScheme} 
            itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
              <ClassificationSchemeDisplay
                key={key}
                label="Requested Classification Scheme"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.RequestedClassificationScheme}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-CatalogueRequestLine"
            label="Catalogue Request Line"
            items={value.CatalogueRequestLine}
            meta={CatalogueRequestFieldMeta.CatalogueRequestLine} 
            itemDisplay={ (itemValue: CatalogueRequestLine, key: string | number) =>
              <CatalogueRequestLineDisplay
                key={key}
                label="Catalogue Request Line"
                value={itemValue}
                meta={CatalogueRequestFieldMeta.CatalogueRequestLine}
              />
            }
          />
        </div>
    </div>
  )
}
