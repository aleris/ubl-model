import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ServiceProviderParty } from  '../../model/cac/ServiceProviderParty'
import { ServiceProviderPartyFieldMeta } from  '../../meta/cac/ServiceProviderPartyMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ServiceProviderParty | undefined
  meta: FieldMeta<T>
}

export default function ServiceProviderPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ServiceProviderParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ServiceProviderPartyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ServiceProviderPartyFieldMeta.ID}
          />

          <CodeDisplay
            label="Service Type Code"
            value={value.ServiceTypeCode?.[0]}
            meta={ServiceProviderPartyFieldMeta.ServiceTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ServiceType"
            label="Service Type"
            items={value.ServiceType}
            meta={ServiceProviderPartyFieldMeta.ServiceType} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Service Type"
                value={itemValue}
                meta={ServiceProviderPartyFieldMeta.ServiceType}
              />
            }
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={ServiceProviderPartyFieldMeta.Party}
          />

          <ContactDisplay
            label="Seller Contact"
            value={value.SellerContact?.[0]}
            meta={ServiceProviderPartyFieldMeta.SellerContact}
          />
        </div>
    </div>
  )
}
