import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { SupplierParty } from  '../../model/cac/SupplierParty'
import { SupplierPartyFieldMeta } from  '../../meta/cac/SupplierPartyMeta'
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
  value: SupplierParty
  meta: FieldMeta<T>
}

export default function SupplierPartyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={SupplierPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={SupplierPartyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.CustomerAssignedAccountID} 
          value={value.CustomerAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SupplierPartyFieldMeta.CustomerAssignedAccountID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.AdditionalAccountID} 
          value={value.AdditionalAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={SupplierPartyFieldMeta.AdditionalAccountID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.DataSendingCapability} 
          value={value.DataSendingCapability}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={SupplierPartyFieldMeta.DataSendingCapability} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={SupplierPartyFieldMeta.Party} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.DespatchContact} 
          value={value.DespatchContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={SupplierPartyFieldMeta.DespatchContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.AccountingContact} 
          value={value.AccountingContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={SupplierPartyFieldMeta.AccountingContact} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={SupplierPartyFieldMeta.SellerContact} 
          value={value.SellerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay key={key} meta={SupplierPartyFieldMeta.SellerContact} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
