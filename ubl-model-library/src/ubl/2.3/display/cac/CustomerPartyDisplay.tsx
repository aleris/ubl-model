import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: CustomerParty | undefined
  meta: FieldMeta<T>
}

export default function CustomerPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CustomerParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CustomerPartyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Customer Assigned Account Identifier"
            value={value.CustomerAssignedAccountID?.[0]}
            meta={CustomerPartyFieldMeta.CustomerAssignedAccountID}
          />

          <IdentifierDisplay
            label="Supplier Assigned Account Identifier"
            value={value.SupplierAssignedAccountID?.[0]}
            meta={CustomerPartyFieldMeta.SupplierAssignedAccountID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-AdditionalAccountID"
            label="Additional Account Identifier"
            items={value.AdditionalAccountID}
            meta={CustomerPartyFieldMeta.AdditionalAccountID} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="Additional Account Identifier"
                value={itemValue}
                meta={CustomerPartyFieldMeta.AdditionalAccountID}
              />
            }
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={CustomerPartyFieldMeta.Party}
          />

          <ContactDisplay
            label="Delivery Contact"
            value={value.DeliveryContact?.[0]}
            meta={CustomerPartyFieldMeta.DeliveryContact}
          />

          <ContactDisplay
            label="Accounting Contact"
            value={value.AccountingContact?.[0]}
            meta={CustomerPartyFieldMeta.AccountingContact}
          />

          <ContactDisplay
            label="Buyer Contact"
            value={value.BuyerContact?.[0]}
            meta={CustomerPartyFieldMeta.BuyerContact}
          />
        </div>
    </div>
  )
}
