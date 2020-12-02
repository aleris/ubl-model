import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ContractingParty
  meta: FieldMeta<T>
}

export default function ContractingPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractingPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractingPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyFieldMeta.BuyerProfileURI} 
          value={value.BuyerProfileURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ContractingPartyFieldMeta.BuyerProfileURI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyFieldMeta.ContractingPartyType} 
          value={value.ContractingPartyType}
          itemDisplay={ (itemValue: ContractingPartyType, key: string | number) =>
            <ContractingPartyTypeDisplay key={key} meta={ContractingPartyFieldMeta.ContractingPartyType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyFieldMeta.ContractingActivity} 
          value={value.ContractingActivity}
          itemDisplay={ (itemValue: ContractingActivity, key: string | number) =>
            <ContractingActivityDisplay key={key} meta={ContractingPartyFieldMeta.ContractingActivity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyFieldMeta.ContractingRepresentationType} 
          value={value.ContractingRepresentationType}
          itemDisplay={ (itemValue: ContractingRepresentationType, key: string | number) =>
            <ContractingRepresentationTypeDisplay key={key} meta={ContractingPartyFieldMeta.ContractingRepresentationType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractingPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ContractingPartyFieldMeta.Party} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
