import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: EconomicOperatorParty | undefined
  meta: FieldMeta<T>
}

export default function EconomicOperatorPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EconomicOperatorParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EconomicOperatorPartyFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-QualifyingParty"
            label="Qualifying Party"
            items={value.QualifyingParty}
            meta={EconomicOperatorPartyFieldMeta.QualifyingParty} 
            itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
              <QualifyingPartyDisplay
                key={key}
                label="Qualifying Party"
                value={itemValue}
                meta={EconomicOperatorPartyFieldMeta.QualifyingParty}
              />
            }
          />

          <EconomicOperatorRoleDisplay
            label="Economic Operator Role"
            value={value.EconomicOperatorRole?.[0]}
            meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={EconomicOperatorPartyFieldMeta.Party}
          />
        </div>
    </div>
  )
}
