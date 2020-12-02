import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CustomerParty } from  '../../model/cac/CustomerParty'
import { CustomerPartyFieldMeta } from  '../../meta/cac/CustomerPartyMeta'
import ContactDisplay from './ContactDisplay'
import { Contact } from '../../model/cac/Contact'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: CustomerParty
  meta: FieldMeta<T>
}

export default function CustomerPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CustomerPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CustomerPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.CustomerAssignedAccountID} 
          value={value.CustomerAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CustomerPartyFieldMeta.CustomerAssignedAccountID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.SupplierAssignedAccountID} 
          value={value.SupplierAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CustomerPartyFieldMeta.SupplierAssignedAccountID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.AdditionalAccountID} 
          value={value.AdditionalAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CustomerPartyFieldMeta.AdditionalAccountID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CustomerPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.DeliveryContact} 
          value={value.DeliveryContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={CustomerPartyFieldMeta.DeliveryContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.AccountingContact} 
          value={value.AccountingContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={CustomerPartyFieldMeta.AccountingContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CustomerPartyFieldMeta.BuyerContact} 
          value={value.BuyerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={CustomerPartyFieldMeta.BuyerContact} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
