import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CatalogueItemSpecificationUpdate
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CatalogueItemSpecificationUpdate ubl-CatalogueItemSpecificationUpdateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueItemSpecificationUpdate ubl-UBLExtensions"
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-UBLVersionID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-CustomizationID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-ProfileID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-ProfileExecutionID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-ID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-UUID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Text ubl-Name"
          meta={CatalogueItemSpecificationUpdateFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Date ubl-IssueDate"
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Time ubl-IssueTime"
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Date ubl-RevisionDate"
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Revision Date"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Time ubl-RevisionTime"
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Revision Time"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Text ubl-Note"
          meta={CatalogueItemSpecificationUpdateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Text ubl-Description"
          meta={CatalogueItemSpecificationUpdateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Identifier ubl-VersionID"
          meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueItemSpecificationUpdate ubl-Numeric ubl-LineCountNumeric"
          meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Period ubl-ValidityPeriod"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-CatalogueReference ubl-RelatedCatalogueReference"
          meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference} 
          value={value.RelatedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Related Catalogue Reference"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Contract ubl-ReferencedContract"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Referenced Contract"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Signature"
          meta={CatalogueItemSpecificationUpdateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Party ubl-ProviderParty"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Party ubl-ReceiverParty"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-TradingTerms"
          meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay
              key={key}
              label="Trading Terms"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-Language ubl-DefaultLanguage"
          meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage} 
          value={value.DefaultLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Default Language"
              value={itemValue}
              meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueItemSpecificationUpdate ubl-CatalogueItemSpecificationUpdateLine"
          meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine} 
          value={value.CatalogueItemSpecificationUpdateLine}
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
