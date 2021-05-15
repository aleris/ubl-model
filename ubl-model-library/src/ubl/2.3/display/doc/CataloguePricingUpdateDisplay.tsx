import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CataloguePricingUpdate } from  '../../model/doc/CataloguePricingUpdate'
import { CataloguePricingUpdateFieldMeta } from  '../../meta/doc/CataloguePricingUpdateMeta'
import CataloguePricingUpdateLineDisplay from '../cac/CataloguePricingUpdateLineDisplay'
import { CataloguePricingUpdateLine } from '../../model/cac/CataloguePricingUpdateLine'
import CatalogueReferenceDisplay from '../cac/CatalogueReferenceDisplay'
import { CatalogueReference } from '../../model/cac/CatalogueReference'
import ContractDisplay from '../cac/ContractDisplay'
import { Contract } from '../../model/cac/Contract'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
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
  value: CataloguePricingUpdate | undefined
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-CataloguePricingUpdate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CataloguePricingUpdateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.UUID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CataloguePricingUpdateFieldMeta.Name}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CataloguePricingUpdateFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CataloguePricingUpdateFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Revision Date"
            value={value.RevisionDate?.[0]}
            meta={CataloguePricingUpdateFieldMeta.RevisionDate}
          />

          <TimeDisplay
            label="Revision Time"
            value={value.RevisionTime?.[0]}
            meta={CataloguePricingUpdateFieldMeta.RevisionTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CataloguePricingUpdateFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CataloguePricingUpdateFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={CataloguePricingUpdateFieldMeta.VersionID}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={CataloguePricingUpdateFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={CataloguePricingUpdateFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.ValidityPeriod}
              />
            }
          />

          <CatalogueReferenceDisplay
            label="Related Catalogue Reference"
            value={value.RelatedCatalogueReference?.[0]}
            meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract ubl-ReferencedContract"
            label="Referenced Contract"
            items={value.ReferencedContract}
            meta={CataloguePricingUpdateFieldMeta.ReferencedContract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Referenced Contract"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.ReferencedContract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CataloguePricingUpdateFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Provider Party"
            value={value.ProviderParty?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ProviderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ReceiverParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty}
          />

          <TradingTermsDisplay
            label="Trading Terms"
            value={value.TradingTerms?.[0]}
            meta={CataloguePricingUpdateFieldMeta.TradingTerms}
          />

          <LanguageDisplay
            label="Default Language"
            value={value.DefaultLanguage?.[0]}
            meta={CataloguePricingUpdateFieldMeta.DefaultLanguage}
          />

          <ElementListDisplay
            className="ubl-doc ubl-CataloguePricingUpdateLine"
            label="Catalogue Pricing Update Line"
            items={value.CataloguePricingUpdateLine}
            meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine} 
            itemDisplay={ (itemValue: CataloguePricingUpdateLine, key: string | number) =>
              <CataloguePricingUpdateLineDisplay
                key={key}
                label="Catalogue Pricing Update Line"
                value={itemValue}
                meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine}
              />
            }
          />
        </div>
    </div>
  )
}
