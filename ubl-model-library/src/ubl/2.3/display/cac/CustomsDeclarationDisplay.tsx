import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: CustomsDeclaration | undefined
  meta: FieldMeta<T>
}

export default function CustomsDeclarationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CustomsDeclaration">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CustomsDeclarationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CustomsDeclarationFieldMeta.ID}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={CustomsDeclarationFieldMeta.ValidityPeriod}
          />

          <AddressDisplay
            label="Applicable Territory Address"
            value={value.ApplicableTerritoryAddress?.[0]}
            meta={CustomsDeclarationFieldMeta.ApplicableTerritoryAddress}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={CustomsDeclarationFieldMeta.Shipment}
          />

          <LocationDisplay
            label="Customs Exit Office Location"
            value={value.CustomsExitOfficeLocation?.[0]}
            meta={CustomsDeclarationFieldMeta.CustomsExitOfficeLocation}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={CustomsDeclarationFieldMeta.IssuerParty}
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={CustomsDeclarationFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Consignee Party"
            value={value.ConsigneeParty?.[0]}
            meta={CustomsDeclarationFieldMeta.ConsigneeParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={CustomsDeclarationFieldMeta.FreightForwarderParty}
          />

          <PartyDisplay
            label="Customs Party"
            value={value.CustomsParty?.[0]}
            meta={CustomsDeclarationFieldMeta.CustomsParty}
          />

          <CustomsDeclarationDisplay
            label="Previous Customs Declaration"
            value={value.PreviousCustomsDeclaration?.[0]}
            meta={CustomsDeclarationFieldMeta.PreviousCustomsDeclaration}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={CustomsDeclarationFieldMeta.AdditionalDocumentReference} 
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
