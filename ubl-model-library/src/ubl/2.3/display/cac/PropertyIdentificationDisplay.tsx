import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { PropertyIdentification } from  '../../model/cac/PropertyIdentification'
import { PropertyIdentificationFieldMeta } from  '../../meta/cac/PropertyIdentificationMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: PropertyIdentification
  meta: FieldMeta<T>
}

export default function PropertyIdentificationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={PropertyIdentificationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={PropertyIdentificationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PropertyIdentificationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PropertyIdentificationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PropertyIdentificationFieldMeta.IssuerScopeID} 
          value={value.IssuerScopeID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={PropertyIdentificationFieldMeta.IssuerScopeID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={PropertyIdentificationFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={PropertyIdentificationFieldMeta.IssuerParty} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
