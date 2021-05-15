import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueItemSpecificationUpdate } from  '../../model/doc/CatalogueItemSpecificationUpdate'
import { CatalogueItemSpecificationUpdateFieldMeta } from  '../../meta/doc/CatalogueItemSpecificationUpdateMeta'
import CatalogueItemSpecificationUpdateLineDisplay from '../cac/CatalogueItemSpecificationUpdateLineDisplay'
import { CatalogueItemSpecificationUpdateLine } from '../../model/cac/CatalogueItemSpecificationUpdateLine'
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
  value: CatalogueItemSpecificationUpdate | undefined
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-CatalogueItemSpecificationUpdate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.UUID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.Name}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Revision Date"
            value={value.RevisionDate?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate}
          />

          <TimeDisplay
            label="Revision Time"
            value={value.RevisionTime?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueItemSpecificationUpdateFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CatalogueItemSpecificationUpdateFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod}
              />
            }
          />

          <CatalogueReferenceDisplay
            label="Related Catalogue Reference"
            value={value.RelatedCatalogueReference?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract ubl-ReferencedContract"
            label="Referenced Contract"
            items={value.ReferencedContract}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Referenced Contract"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CatalogueItemSpecificationUpdateFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Provider Party"
            value={value.ProviderParty?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty}
          />

          <TradingTermsDisplay
            label="Trading Terms"
            value={value.TradingTerms?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms}
          />

          <LanguageDisplay
            label="Default Language"
            value={value.DefaultLanguage?.[0]}
            meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage}
          />

          <ElementListDisplay
            className="ubl-doc ubl-CatalogueItemSpecificationUpdateLine"
            label="Catalogue Item Specification Update Line"
            items={value.CatalogueItemSpecificationUpdateLine}
            meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine} 
            itemDisplay={ (itemValue: CatalogueItemSpecificationUpdateLine, key: string | number) =>
              <CatalogueItemSpecificationUpdateLineDisplay
                key={key}
                label="Catalogue Item Specification Update Line"
                value={itemValue}
                meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine}
              />
            }
          />
        </div>
    </div>
  )
}
