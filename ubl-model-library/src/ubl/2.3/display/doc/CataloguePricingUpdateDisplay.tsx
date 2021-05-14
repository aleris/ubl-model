import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CataloguePricingUpdate
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CataloguePricingUpdate ubl-CataloguePricingUpdateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CataloguePricingUpdate ubl-UBLExtensions"
          meta={CataloguePricingUpdateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-UBLVersionID"
          meta={CataloguePricingUpdateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-CustomizationID"
          meta={CataloguePricingUpdateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-ProfileID"
          meta={CataloguePricingUpdateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-ProfileExecutionID"
          meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-ID"
          meta={CataloguePricingUpdateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-UUID"
          meta={CataloguePricingUpdateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Text ubl-Name"
          meta={CataloguePricingUpdateFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Date ubl-IssueDate"
          meta={CataloguePricingUpdateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Time ubl-IssueTime"
          meta={CataloguePricingUpdateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Date ubl-RevisionDate"
          meta={CataloguePricingUpdateFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Revision Date"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.RevisionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Time ubl-RevisionTime"
          meta={CataloguePricingUpdateFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Revision Time"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.RevisionTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Text ubl-Note"
          meta={CataloguePricingUpdateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Text ubl-Description"
          meta={CataloguePricingUpdateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Identifier ubl-VersionID"
          meta={CataloguePricingUpdateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CataloguePricingUpdate ubl-Numeric ubl-LineCountNumeric"
          meta={CataloguePricingUpdateFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Period ubl-ValidityPeriod"
          meta={CataloguePricingUpdateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-CatalogueReference ubl-RelatedCatalogueReference"
          meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference} 
          value={value.RelatedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Related Catalogue Reference"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Contract ubl-ReferencedContract"
          meta={CataloguePricingUpdateFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Referenced Contract"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ReferencedContract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Signature"
          meta={CataloguePricingUpdateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Party ubl-ProviderParty"
          meta={CataloguePricingUpdateFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Party ubl-ReceiverParty"
          meta={CataloguePricingUpdateFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-TradingTerms"
          meta={CataloguePricingUpdateFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay
              key={key}
              label="Trading Terms"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.TradingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-Language ubl-DefaultLanguage"
          meta={CataloguePricingUpdateFieldMeta.DefaultLanguage} 
          value={value.DefaultLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Default Language"
              value={itemValue}
              meta={CataloguePricingUpdateFieldMeta.DefaultLanguage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CataloguePricingUpdate ubl-CataloguePricingUpdateLine"
          meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine} 
          value={value.CataloguePricingUpdateLine}
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
