import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Catalogue } from  '../../model/doc/Catalogue'
import { CatalogueFieldMeta } from  '../../meta/doc/CatalogueMeta'
import CatalogueLineDisplay from '../cac/CatalogueLineDisplay'
import { CatalogueLine } from '../../model/cac/CatalogueLine'
import CatalogueReferenceDisplay from '../cac/CatalogueReferenceDisplay'
import { CatalogueReference } from '../../model/cac/CatalogueReference'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
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
  value: Catalogue
  meta: FieldMeta<T>
}

export default function CatalogueDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Catalogue ubl-CatalogueType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Catalogue ubl-UBLExtensions"
          meta={CatalogueFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-UBLVersionID"
          meta={CatalogueFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CatalogueFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-CustomizationID"
          meta={CatalogueFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CatalogueFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-ProfileID"
          meta={CatalogueFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CatalogueFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-ProfileExecutionID"
          meta={CatalogueFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CatalogueFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-ID"
          meta={CatalogueFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-UUID"
          meta={CatalogueFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CatalogueFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Code ubl-ActionCode"
          meta={CatalogueFieldMeta.ActionCode} 
          value={value.ActionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Action Code"
              value={itemValue}
              meta={CatalogueFieldMeta.ActionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Text ubl-Name"
          meta={CatalogueFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CatalogueFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Date ubl-IssueDate"
          meta={CatalogueFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CatalogueFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Time ubl-IssueTime"
          meta={CatalogueFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CatalogueFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Date ubl-RevisionDate"
          meta={CatalogueFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Revision Date"
              value={itemValue}
              meta={CatalogueFieldMeta.RevisionDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Time ubl-RevisionTime"
          meta={CatalogueFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Revision Time"
              value={itemValue}
              meta={CatalogueFieldMeta.RevisionTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Catalogue ubl-Text ubl-Note"
          meta={CatalogueFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueFieldMeta.Note}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Catalogue ubl-Text ubl-Description"
          meta={CatalogueFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CatalogueFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-VersionID"
          meta={CatalogueFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CatalogueFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Identifier ubl-PreviousVersionID"
          meta={CatalogueFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version"
              value={itemValue}
              meta={CatalogueFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Catalogue ubl-Numeric ubl-LineCountNumeric"
          meta={CatalogueFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Line Count"
              value={itemValue}
              meta={CatalogueFieldMeta.LineCountNumeric}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-Period ubl-ValidityPeriod"
          meta={CatalogueFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CatalogueFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-Contract ubl-ReferencedContract"
          meta={CatalogueFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Referenced Contract"
              value={itemValue}
              meta={CatalogueFieldMeta.ReferencedContract}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Catalogue ubl-CatalogueReference ubl-SourceCatalogueReference"
          meta={CatalogueFieldMeta.SourceCatalogueReference} 
          value={value.SourceCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Source Catalogue Reference"
              value={itemValue}
              meta={CatalogueFieldMeta.SourceCatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-DocumentReference"
          meta={CatalogueFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={CatalogueFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-Signature"
          meta={CatalogueFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CatalogueFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Catalogue ubl-Party ubl-ProviderParty"
          meta={CatalogueFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={CatalogueFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Catalogue ubl-Party ubl-ReceiverParty"
          meta={CatalogueFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CatalogueFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Catalogue ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Catalogue ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueFieldMeta.ContractorCustomerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-TradingTerms"
          meta={CatalogueFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay
              key={key}
              label="Trading Terms"
              value={itemValue}
              meta={CatalogueFieldMeta.TradingTerms}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Catalogue ubl-CatalogueLine"
          meta={CatalogueFieldMeta.CatalogueLine} 
          value={value.CatalogueLine}
          itemDisplay={ (itemValue: CatalogueLine, key: string | number) =>
            <CatalogueLineDisplay
              key={key}
              label="Catalogue Line"
              value={itemValue}
              meta={CatalogueFieldMeta.CatalogueLine}
            />
          }
        />
        </div>
    </div>
  )
}
