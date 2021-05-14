import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EconomicOperatorParty
  meta: FieldMeta<T>
}

export default function EconomicOperatorPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EconomicOperatorParty ubl-EconomicOperatorPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EconomicOperatorParty ubl-UBLExtensions"
          meta={EconomicOperatorPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EconomicOperatorPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EconomicOperatorParty ubl-QualifyingParty"
          meta={EconomicOperatorPartyFieldMeta.QualifyingParty} 
          value={value.QualifyingParty}
          itemDisplay={ (itemValue: QualifyingParty, key: string | number) =>
            <QualifyingPartyDisplay
              key={key}
              label="Qualifying Party"
              value={itemValue}
              meta={EconomicOperatorPartyFieldMeta.QualifyingParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EconomicOperatorParty ubl-EconomicOperatorRole"
          meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole} 
          value={value.EconomicOperatorRole}
          itemDisplay={ (itemValue: EconomicOperatorRole, key: string | number) =>
            <EconomicOperatorRoleDisplay
              key={key}
              label="Economic Operator Role"
              value={itemValue}
              meta={EconomicOperatorPartyFieldMeta.EconomicOperatorRole}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EconomicOperatorParty ubl-Party"
          meta={EconomicOperatorPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={EconomicOperatorPartyFieldMeta.Party}
            />
          }
        />
        </div>
    </div>
  )
}
