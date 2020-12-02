import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CataloguePricingUpdate
  meta: FieldMeta<T>
}

export default function CataloguePricingUpdateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CataloguePricingUpdateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CataloguePricingUpdateFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CataloguePricingUpdateFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CataloguePricingUpdateFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.RevisionDate} 
          value={value.RevisionDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CataloguePricingUpdateFieldMeta.RevisionDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.RevisionTime} 
          value={value.RevisionTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CataloguePricingUpdateFieldMeta.RevisionTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CataloguePricingUpdateFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CataloguePricingUpdateFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CataloguePricingUpdateFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={CataloguePricingUpdateFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference} 
          value={value.RelatedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay key={key} meta={CataloguePricingUpdateFieldMeta.RelatedCatalogueReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ReferencedContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CataloguePricingUpdateFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CataloguePricingUpdateFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CataloguePricingUpdateFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay key={key} meta={CataloguePricingUpdateFieldMeta.TradingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.DefaultLanguage} 
          value={value.DefaultLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={CataloguePricingUpdateFieldMeta.DefaultLanguage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine} 
          value={value.CataloguePricingUpdateLine}
          itemDisplay={ (itemValue: CataloguePricingUpdateLine, key: string | number) =>
            <CataloguePricingUpdateLineDisplay key={key} meta={CataloguePricingUpdateFieldMeta.CataloguePricingUpdateLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
