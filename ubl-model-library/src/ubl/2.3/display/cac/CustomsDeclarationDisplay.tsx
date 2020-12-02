import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CustomsDeclaration } from  '../../model/cac/CustomsDeclaration'
import { CustomsDeclarationFieldMeta } from  '../../meta/cac/CustomsDeclarationMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CustomsDeclaration
  meta: FieldMeta<T>
}

export default function CustomsDeclarationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CustomsDeclarationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CustomsDeclarationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={CustomsDeclarationFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={CustomsDeclarationFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation} 
          value={value.CustomsExitOfficeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomsDeclarationFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomsDeclarationFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomsDeclarationFieldMeta.ConsigneeParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomsDeclarationFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.CustomsParty} 
          value={value.CustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomsDeclarationFieldMeta.CustomsParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration} 
          value={value.PreviousCustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay key={key} meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
