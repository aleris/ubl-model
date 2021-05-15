import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Catalogue | undefined
  meta: FieldMeta<T>
}

export default function CatalogueDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Catalogue">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CatalogueFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={CatalogueFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={CatalogueFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={CatalogueFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={CatalogueFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CatalogueFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={CatalogueFieldMeta.UUID}
          />

          <CodeDisplay
            label="Action Code"
            value={value.ActionCode?.[0]}
            meta={CatalogueFieldMeta.ActionCode}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CatalogueFieldMeta.Name}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={CatalogueFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={CatalogueFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Revision Date"
            value={value.RevisionDate?.[0]}
            meta={CatalogueFieldMeta.RevisionDate}
          />

          <TimeDisplay
            label="Revision Time"
            value={value.RevisionTime?.[0]}
            meta={CatalogueFieldMeta.RevisionTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={CatalogueFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={CatalogueFieldMeta.Note}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={CatalogueFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={CatalogueFieldMeta.Description}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={CatalogueFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version"
            value={value.PreviousVersionID?.[0]}
            meta={CatalogueFieldMeta.PreviousVersionID}
          />

          <NumericDisplay
            label="Line Count"
            value={value.LineCountNumeric?.[0]}
            meta={CatalogueFieldMeta.LineCountNumeric}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Period ubl-ValidityPeriod"
            label="Validity Period"
            items={value.ValidityPeriod}
            meta={CatalogueFieldMeta.ValidityPeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Validity Period"
                value={itemValue}
                meta={CatalogueFieldMeta.ValidityPeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Contract ubl-ReferencedContract"
            label="Referenced Contract"
            items={value.ReferencedContract}
            meta={CatalogueFieldMeta.ReferencedContract} 
            itemDisplay={ (itemValue: Contract, key: string | number) =>
              <ContractDisplay
                key={key}
                label="Referenced Contract"
                value={itemValue}
                meta={CatalogueFieldMeta.ReferencedContract}
              />
            }
          />

          <CatalogueReferenceDisplay
            label="Source Catalogue Reference"
            value={value.SourceCatalogueReference?.[0]}
            meta={CatalogueFieldMeta.SourceCatalogueReference}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={CatalogueFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={CatalogueFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CatalogueFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CatalogueFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Provider Party"
            value={value.ProviderParty?.[0]}
            meta={CatalogueFieldMeta.ProviderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={CatalogueFieldMeta.ReceiverParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={CatalogueFieldMeta.SellerSupplierParty}
          />

          <CustomerPartyDisplay
            label="Contractor Customer Party"
            value={value.ContractorCustomerParty?.[0]}
            meta={CatalogueFieldMeta.ContractorCustomerParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TradingTerms"
            label="Trading Terms"
            items={value.TradingTerms}
            meta={CatalogueFieldMeta.TradingTerms} 
            itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
              <TradingTermsDisplay
                key={key}
                label="Trading Terms"
                value={itemValue}
                meta={CatalogueFieldMeta.TradingTerms}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-CatalogueLine"
            label="Catalogue Line"
            items={value.CatalogueLine}
            meta={CatalogueFieldMeta.CatalogueLine} 
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
