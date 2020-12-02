import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CatalogueDeletion
  meta: FieldMeta<T>
}

export default function CatalogueDeletionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueDeletionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueDeletionFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueDeletionFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueDeletionFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.EffectiveDate} 
          value={value.EffectiveDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueDeletionFieldMeta.EffectiveDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.EffectiveTime} 
          value={value.EffectiveTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueDeletionFieldMeta.EffectiveTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueDeletionFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueDeletionFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueDeletionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueDeletionFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.DeletedCatalogueReference} 
          value={value.DeletedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay key={key} meta={CatalogueDeletionFieldMeta.DeletedCatalogueReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={CatalogueDeletionFieldMeta.ReferencedContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CatalogueDeletionFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueDeletionFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueDeletionFieldMeta.ProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CatalogueDeletionFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueDeletionFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CatalogueDeletionFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
