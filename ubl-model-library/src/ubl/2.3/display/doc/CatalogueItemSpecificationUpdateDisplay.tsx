import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CatalogueItemSpecificationUpdate
  meta: FieldMeta<T>
}

export default function CatalogueItemSpecificationUpdateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.RevisionTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference} 
          value={value.RelatedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.RelatedCatalogueReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ReferencedContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.TradingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage} 
          value={value.DefaultLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.DefaultLanguage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine} 
          value={value.CatalogueItemSpecificationUpdateLine}
          itemDisplay={ (itemValue: CatalogueItemSpecificationUpdateLine, key: string | number) =>
            <CatalogueItemSpecificationUpdateLineDisplay key={key} meta={CatalogueItemSpecificationUpdateFieldMeta.CatalogueItemSpecificationUpdateLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
