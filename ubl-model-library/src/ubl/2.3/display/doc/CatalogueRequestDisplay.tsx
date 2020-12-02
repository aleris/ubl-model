import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CatalogueRequest } from  '../../model/doc/CatalogueRequest'
import { CatalogueRequestFieldMeta } from  '../../meta/doc/CatalogueRequestMeta'
import AddressDisplay from '../cac/AddressDisplay'
import { Address } from '../../model/cac/Address'
import CatalogueReferenceDisplay from '../cac/CatalogueReferenceDisplay'
import { CatalogueReference } from '../../model/cac/CatalogueReference'
import CatalogueRequestLineDisplay from '../cac/CatalogueRequestLineDisplay'
import { CatalogueRequestLine } from '../../model/cac/CatalogueRequestLine'
import ClassificationSchemeDisplay from '../cac/ClassificationSchemeDisplay'
import { ClassificationScheme } from '../../model/cac/ClassificationScheme'
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
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
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
  value: CatalogueRequest
  meta: FieldMeta<T>
}

export default function CatalogueRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CatalogueRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CatalogueRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueRequestFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={CatalogueRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={CatalogueRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CatalogueRequestFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator} 
          value={value.PricingUpdateRequestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={CatalogueRequestFieldMeta.PricingUpdateRequestIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator} 
          value={value.ItemUpdateRequestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={CatalogueRequestFieldMeta.ItemUpdateRequestIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.LineCountNumeric} 
          value={value.LineCountNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={CatalogueRequestFieldMeta.LineCountNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CatalogueRequestFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CatalogueRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueRequestFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ProviderParty} 
          value={value.ProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CatalogueRequestFieldMeta.ProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={CatalogueRequestFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ContractorCustomerParty} 
          value={value.ContractorCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={CatalogueRequestFieldMeta.ContractorCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.RequestedCatalogueReference} 
          value={value.RequestedCatalogueReference}
          itemDisplay={ (itemValue: CatalogueReference, key: string | number) =>
            <CatalogueReferenceDisplay key={key} meta={CatalogueRequestFieldMeta.RequestedCatalogueReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ReferencedContract} 
          value={value.ReferencedContract}
          itemDisplay={ (itemValue: Contract, key: string | number) =>
            <ContractDisplay key={key} meta={CatalogueRequestFieldMeta.ReferencedContract} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.TradingTerms} 
          value={value.TradingTerms}
          itemDisplay={ (itemValue: TradingTerms, key: string | number) =>
            <TradingTermsDisplay key={key} meta={CatalogueRequestFieldMeta.TradingTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CatalogueRequestFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={CatalogueRequestFieldMeta.ApplicableTerritoryAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.RequestedLanguage} 
          value={value.RequestedLanguage}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={CatalogueRequestFieldMeta.RequestedLanguage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.RequestedClassificationScheme} 
          value={value.RequestedClassificationScheme}
          itemDisplay={ (itemValue: ClassificationScheme, key: string | number) =>
            <ClassificationSchemeDisplay key={key} meta={CatalogueRequestFieldMeta.RequestedClassificationScheme} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CatalogueRequestFieldMeta.CatalogueRequestLine} 
          value={value.CatalogueRequestLine}
          itemDisplay={ (itemValue: CatalogueRequestLine, key: string | number) =>
            <CatalogueRequestLineDisplay key={key} meta={CatalogueRequestFieldMeta.CatalogueRequestLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
