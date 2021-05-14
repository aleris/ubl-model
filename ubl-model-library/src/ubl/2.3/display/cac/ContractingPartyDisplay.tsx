import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractingParty } from  '../../model/cac/ContractingParty'
import { ContractingPartyFieldMeta } from  '../../meta/cac/ContractingPartyMeta'
import ContractingActivityDisplay from './ContractingActivityDisplay'
import { ContractingActivity } from '../../model/cac/ContractingActivity'
import ContractingPartyTypeDisplay from './ContractingPartyTypeDisplay'
import { ContractingPartyType } from '../../model/cac/ContractingPartyType'
import ContractingRepresentationTypeDisplay from './ContractingRepresentationTypeDisplay'
import { ContractingRepresentationType } from '../../model/cac/ContractingRepresentationType'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractingParty
  meta: FieldMeta<T>
}

export default function ContractingPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractingParty ubl-ContractingPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractingParty ubl-UBLExtensions"
          meta={ContractingPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractingPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractingParty ubl-Identifier ubl-BuyerProfileURI"
          meta={ContractingPartyFieldMeta.BuyerProfileURI} 
          value={value.BuyerProfileURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Buyer Profile URI"
              value={itemValue}
              meta={ContractingPartyFieldMeta.BuyerProfileURI}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractingParty ubl-ContractingPartyType"
          meta={ContractingPartyFieldMeta.ContractingPartyType} 
          value={value.ContractingPartyType}
          itemDisplay={ (itemValue: ContractingPartyType, key: string | number) =>
            <ContractingPartyTypeDisplay
              key={key}
              label="Contracting Party Type"
              value={itemValue}
              meta={ContractingPartyFieldMeta.ContractingPartyType}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractingParty ubl-ContractingActivity"
          meta={ContractingPartyFieldMeta.ContractingActivity} 
          value={value.ContractingActivity}
          itemDisplay={ (itemValue: ContractingActivity, key: string | number) =>
            <ContractingActivityDisplay
              key={key}
              label="Contracting Activity"
              value={itemValue}
              meta={ContractingPartyFieldMeta.ContractingActivity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractingParty ubl-ContractingRepresentationType"
          meta={ContractingPartyFieldMeta.ContractingRepresentationType} 
          value={value.ContractingRepresentationType}
          itemDisplay={ (itemValue: ContractingRepresentationType, key: string | number) =>
            <ContractingRepresentationTypeDisplay
              key={key}
              label="Contracting Representation Type"
              value={itemValue}
              meta={ContractingPartyFieldMeta.ContractingRepresentationType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractingParty ubl-Party"
          meta={ContractingPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={ContractingPartyFieldMeta.Party}
            />
          }
        />
        </div>
    </div>
  )
}
