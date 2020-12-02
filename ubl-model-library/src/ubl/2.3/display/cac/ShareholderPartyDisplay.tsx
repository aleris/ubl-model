import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ShareholderParty } from  '../../model/cac/ShareholderParty'
import { ShareholderPartyFieldMeta } from  '../../meta/cac/ShareholderPartyMeta'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: ShareholderParty
  meta: FieldMeta<T>
}

export default function ShareholderPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ShareholderPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ShareholderPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShareholderPartyFieldMeta.PartecipationPercent} 
          value={value.PartecipationPercent}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ShareholderPartyFieldMeta.PartecipationPercent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShareholderPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ShareholderPartyFieldMeta.Party} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
