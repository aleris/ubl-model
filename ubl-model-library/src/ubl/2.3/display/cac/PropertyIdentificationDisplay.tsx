import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PropertyIdentification } from  '../../model/cac/PropertyIdentification'
import { PropertyIdentificationFieldMeta } from  '../../meta/cac/PropertyIdentificationMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: PropertyIdentification | undefined
  meta: FieldMeta<T>
}

export default function PropertyIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-PropertyIdentification">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={PropertyIdentificationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={PropertyIdentificationFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Issuer Scope Identifier"
            value={value.IssuerScopeID?.[0]}
            meta={PropertyIdentificationFieldMeta.IssuerScopeID}
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={PropertyIdentificationFieldMeta.IssuerParty}
          />
        </div>
    </div>
  )
}
