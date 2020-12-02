import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EconomicOperatorParty } from  '../../model/cac/EconomicOperatorParty'
import { EconomicOperatorPartyFieldMeta } from  '../../meta/cac/EconomicOperatorPartyMeta'
import EconomicOperatorRoleDisplay from './EconomicOperatorRoleDisplay'
import { EconomicOperatorRole } from '../../model/cac/EconomicOperatorRole'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import QualifyingPartyDisplay from './QualifyingPartyDisplay'
import { QualifyingParty } from '../../model/cac/QualifyingParty'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EconomicOperatorParty
  meta: FieldMeta<T>
}

export default function EconomicOperatorPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EconomicOperatorPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EconomicOperatorPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorPartyFieldMeta.QualifyingParty} 
          value={value.QualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay key={key} meta={EconomicOperatorPartyFieldMeta.QualifyingParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
          itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
            <EconomicOperatorRoleDisplay key={key} meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EconomicOperatorPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={EconomicOperatorPartyFieldMeta.Party} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
