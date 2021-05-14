import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: CustomerParty
  meta: FieldMeta<T>
}

export default function CustomerPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CustomerParty ubl-CustomerPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CustomerParty ubl-UBLExtensions"
          meta={CustomerPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CustomerPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CustomerParty ubl-Identifier ubl-CustomerAssignedAccountID"
          meta={CustomerPartyFieldMeta.CustomerAssignedAccountID} 
          value={value.CustomerAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customer Assigned Account Identifier"
              value={itemValue}
              meta={CustomerPartyFieldMeta.CustomerAssignedAccountID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CustomerParty ubl-Identifier ubl-SupplierAssignedAccountID"
          meta={CustomerPartyFieldMeta.SupplierAssignedAccountID} 
          value={value.SupplierAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Supplier Assigned Account Identifier"
              value={itemValue}
              meta={CustomerPartyFieldMeta.SupplierAssignedAccountID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-CustomerParty ubl-Identifier ubl-AdditionalAccountID"
          meta={CustomerPartyFieldMeta.AdditionalAccountID} 
          value={value.AdditionalAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Additional Account Identifier"
              value={itemValue}
              meta={CustomerPartyFieldMeta.AdditionalAccountID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomerParty ubl-Party"
          meta={CustomerPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={CustomerPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomerParty ubl-Contact ubl-DeliveryContact"
          meta={CustomerPartyFieldMeta.DeliveryContact} 
          value={value.DeliveryContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Delivery Contact"
              value={itemValue}
              meta={CustomerPartyFieldMeta.DeliveryContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomerParty ubl-Contact ubl-AccountingContact"
          meta={CustomerPartyFieldMeta.AccountingContact} 
          value={value.AccountingContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Accounting Contact"
              value={itemValue}
              meta={CustomerPartyFieldMeta.AccountingContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-CustomerParty ubl-Contact ubl-BuyerContact"
          meta={CustomerPartyFieldMeta.BuyerContact} 
          value={value.BuyerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Buyer Contact"
              value={itemValue}
              meta={CustomerPartyFieldMeta.BuyerContact}
            />
          }
        />
        </div>
    </div>
  )
}
