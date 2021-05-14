import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: PropertyIdentification
  meta: FieldMeta<T>
}

export default function PropertyIdentificationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-PropertyIdentification ubl-PropertyIdentificationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-PropertyIdentification ubl-UBLExtensions"
          meta={PropertyIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={PropertyIdentificationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PropertyIdentification ubl-Identifier ubl-ID"
          meta={PropertyIdentificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={PropertyIdentificationFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-PropertyIdentification ubl-Identifier ubl-IssuerScopeID"
          meta={PropertyIdentificationFieldMeta.IssuerScopeID} 
          value={value.IssuerScopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Issuer Scope Identifier"
              value={itemValue}
              meta={PropertyIdentificationFieldMeta.IssuerScopeID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-PropertyIdentification ubl-Party ubl-IssuerParty"
          meta={PropertyIdentificationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={PropertyIdentificationFieldMeta.IssuerParty}
            />
          }
        />
        </div>
    </div>
  )
}
