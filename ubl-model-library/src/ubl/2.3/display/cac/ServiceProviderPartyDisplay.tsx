import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ServiceProviderParty
  meta: FieldMeta<T>
}

export default function ServiceProviderPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ServiceProviderParty ubl-ServiceProviderPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ServiceProviderParty ubl-UBLExtensions"
          meta={ServiceProviderPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceProviderParty ubl-Identifier ubl-ID"
          meta={ServiceProviderPartyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ServiceProviderParty ubl-Code ubl-ServiceTypeCode"
          meta={ServiceProviderPartyFieldMeta.ServiceTypeCode} 
          value={value.ServiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Service Type Code"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.ServiceTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ServiceProviderParty ubl-Text ubl-ServiceType"
          meta={ServiceProviderPartyFieldMeta.ServiceType} 
          value={value.ServiceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Service Type"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.ServiceType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ServiceProviderParty ubl-Party"
          meta={ServiceProviderPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ServiceProviderParty ubl-Contact ubl-SellerContact"
          meta={ServiceProviderPartyFieldMeta.SellerContact} 
          value={value.SellerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Seller Contact"
              value={itemValue}
              meta={ServiceProviderPartyFieldMeta.SellerContact}
            />
          }
        />
        </div>
    </div>
  )
}
