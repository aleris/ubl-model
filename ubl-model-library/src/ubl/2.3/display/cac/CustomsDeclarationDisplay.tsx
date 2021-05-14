import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: CustomsDeclaration
  meta: FieldMeta<T>
}

export default function CustomsDeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CustomsDeclaration ubl-CustomsDeclarationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CustomsDeclaration ubl-UBLExtensions"
          meta={CustomsDeclarationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CustomsDeclaration ubl-Identifier ubl-ID"
          meta={CustomsDeclarationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Period ubl-ValidityPeriod"
          meta={CustomsDeclarationFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Address ubl-ApplicableTerritoryAddress"
          meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress} 
          value={value.ApplicableTerritoryAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Applicable Territory Address"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Shipment"
          meta={CustomsDeclarationFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.Shipment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Location ubl-CustomsExitOfficeLocation"
          meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation} 
          value={value.CustomsExitOfficeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Customs Exit Office Location"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Party ubl-IssuerParty"
          meta={CustomsDeclarationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Party ubl-ConsignorParty"
          meta={CustomsDeclarationFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignor Party"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.ConsignorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Party ubl-ConsigneeParty"
          meta={CustomsDeclarationFieldMeta.ConsigneeParty} 
          value={value.ConsigneeParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignee Party"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.ConsigneeParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Party ubl-FreightForwarderParty"
          meta={CustomsDeclarationFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-Party ubl-CustomsParty"
          meta={CustomsDeclarationFieldMeta.CustomsParty} 
          value={value.CustomsParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Customs Party"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.CustomsParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-PreviousCustomsDeclaration"
          meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration} 
          value={value.PreviousCustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay
              key={key}
              label="Previous Customs Declaration"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CustomsDeclaration ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
