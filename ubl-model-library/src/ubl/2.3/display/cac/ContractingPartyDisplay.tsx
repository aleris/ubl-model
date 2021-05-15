import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ContractingParty | undefined
  meta: FieldMeta<T>
}

export default function ContractingPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractingParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractingPartyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Buyer Profile URI"
            value={value.BuyerProfileURI?.[0]}
            meta={ContractingPartyFieldMeta.BuyerProfileURI}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ContractingPartyType"
            label="Contracting Party Type"
            items={value.ContractingPartyType}
            meta={ContractingPartyFieldMeta.ContractingPartyType} 
            itemDisplay={ (itemValue: ContractingPartyType, key: string | number) =>
              <ContractingPartyTypeDisplay
                key={key}
                label="Contracting Party Type"
                value={itemValue}
                meta={ContractingPartyFieldMeta.ContractingPartyType}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ContractingActivity"
            label="Contracting Activity"
            items={value.ContractingActivity}
            meta={ContractingPartyFieldMeta.ContractingActivity} 
            itemDisplay={ (itemValue: ContractingActivity, key: string | number) =>
              <ContractingActivityDisplay
                key={key}
                label="Contracting Activity"
                value={itemValue}
                meta={ContractingPartyFieldMeta.ContractingActivity}
              />
            }
          />

          <ContractingRepresentationTypeDisplay
            label="Contracting Representation Type"
            value={value.ContractingRepresentationType?.[0]}
            meta={ContractingPartyFieldMeta.ContractingRepresentationType}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={ContractingPartyFieldMeta.Party}
          />
        </div>
    </div>
  )
}
