import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueDeletion } from  '../../model/doc/CatalogueDeletion'
import { CatalogueDeletionFieldMeta } from  '../../meta/doc/CatalogueDeletionMeta'
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
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: CatalogueDeletion
  meta: FieldMeta<T>
}

export default function CatalogueDeletionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-CatalogueDeletion ubl-CatalogueDeletionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CatalogueDeletion ubl-UBLExtensions"
          meta={CatalogueDeletionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-UBLVersionID"
          meta={CatalogueDeletionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-CustomizationID"
          meta={CatalogueDeletionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-ProfileID"
          meta={CatalogueDeletionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-ProfileExecutionID"
          meta={CatalogueDeletionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-ID"
          meta={CatalogueDeletionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-UUID"
          meta={CatalogueDeletionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Text ubl-Name"
          meta={CatalogueDeletionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Date ubl-IssueDate"
          meta={CatalogueDeletionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Time ubl-IssueTime"
          meta={CatalogueDeletionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Date ubl-EffectiveDate"
          meta={CatalogueDeletionFieldMeta.EffectiveDate} 
          value={value.EffectiveDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Effective Date"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.EffectiveDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Time ubl-EffectiveTime"
          meta={CatalogueDeletionFieldMeta.EffectiveTime} 
          value={value.EffectiveTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Effective Time"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.EffectiveTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Text ubl-Note"
          meta={CatalogueDeletionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Identifier ubl-VersionID"
          meta={CatalogueDeletionFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.VersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CatalogueDeletion ubl-Text ubl-Description"
          meta={CatalogueDeletionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-Period ubl-ValidityPeriod"
          meta={CatalogueDeletionFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-CatalogueReference ubl-DeletedCatalogueReference"
          meta={CatalogueDeletionFieldMeta.DeletedCatalogueReference} 
          value={value.DeletedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay
              key={key}
              label="Deleted Catalogue Reference"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.DeletedCatalogueReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-Contract ubl-ReferencedContract"
          meta={CatalogueDeletionFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay
              key={key}
              label="Referenced Contract"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ReferencedContract}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-Signature"
          meta={CatalogueDeletionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-Party ubl-ReceiverParty"
          meta={CatalogueDeletionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-Party ubl-ProviderParty"
          meta={CatalogueDeletionFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Provider Party"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-SupplierParty ubl-SellerSupplierParty"
          meta={CatalogueDeletionFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CatalogueDeletion ubl-CustomerParty ubl-ContractorCustomerParty"
          meta={CatalogueDeletionFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Contractor Customer Party"
              value={itemValue}
              meta={CatalogueDeletionFieldMeta.ContractorCustomerParty}
            />
          }
        />
        </div>
    </div>
  )
}
