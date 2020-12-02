import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ServiceProviderParty
  meta: FieldMeta<T>
}

export default function ServiceProviderPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ServiceProviderPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ServiceProviderPartyFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.ServiceTypeCode} 
          value={value.ServiceTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ServiceProviderPartyFieldMeta.ServiceTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.ServiceType} 
          value={value.ServiceType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ServiceProviderPartyFieldMeta.ServiceType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ServiceProviderPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ServiceProviderPartyFieldMeta.SellerContact} 
          value={value.SellerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={ServiceProviderPartyFieldMeta.SellerContact} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
