import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CatalogueRequest
  meta: FieldMeta<T>
}

export default function CatalogueRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CatalogueRequest ubl-CatalogueRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueRequest ubl-UBLExtensions"
          meta={CatalogueRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-UBLVersionID"
          meta={CatalogueRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-CustomizationID"
          meta={CatalogueRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-ProfileID"
          meta={CatalogueRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={CatalogueRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-ID"
          meta={CatalogueRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Identifier ubl-UUID"
          meta={CatalogueRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Text ubl-Name"
          meta={CatalogueRequestFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Date ubl-IssueDate"
          meta={CatalogueRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Time ubl-IssueTime"
          meta={CatalogueRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Text ubl-Note"
          meta={CatalogueRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Text ubl-Description"
          meta={CatalogueRequestFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Indicator ubl-PricingUpdateRequestIndicator"
          meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator} 
          value={value.PricingUpdateRequestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Pricing Update Request Indicator"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Indicator ubl-ItemUpdateRequestIndicator"
          meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator} 
          value={value.ItemUpdateRequestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Item Update Request Indicator"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueRequest ubl-Numeric ubl-LineCountNumeric"
          meta={CatalogueRequestFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Period ubl-ValidityPeriod"
          meta={CatalogueRequestFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Signature"
          meta={CatalogueRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Party ubl-ReceiverParty"
          meta={CatalogueRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Party ubl-ProviderParty"
          meta={CatalogueRequestFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueRequestFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueRequestFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-CatalogueReference ubl-RequestedCatalogueReference"
          meta={CatalogueRequestFieldMeta.RequestedCatalogueReference} 
          value={value.RequestedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Requested Catalogue Reference"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.RequestedCatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Contract ubl-ReferencedContract"
          meta={CatalogueRequestFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Referenced Contract"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ReferencedContract}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-TradingTerms"
          meta={CatalogueRequestFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay
              key={key}
              label="Trading Terms"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.TradingTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-DocumentReference"
          meta={CatalogueRequestFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Address ubl-ApplicableTerritoryAddress"
          meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Applicable Territory Address"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-Language ubl-RequestedLanguage"
          meta={CatalogueRequestFieldMeta.RequestedLanguage} 
          value={value.RequestedLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Requested Language"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.RequestedLanguage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-ClassificationScheme ubl-RequestedClassificationScheme"
          meta={CatalogueRequestFieldMeta.RequestedClassificationScheme} 
          value={value.RequestedClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay
              key={key}
              label="Requested Classification Scheme"
              value={itemValue}
              meta={CatalogueRequestFieldMeta.RequestedClassificationScheme}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueRequest ubl-CatalogueRequestLine"
          meta={CatalogueRequestFieldMeta.CatalogueRequestLine} 
          value={value.CatalogueRequestLine}
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
