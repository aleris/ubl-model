import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: SupplierParty | undefined
  meta: FieldMeta<T>
}

export default function SupplierPartyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-SupplierParty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={SupplierPartyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Customer Assigned Account Identifier"
            value={value.CustomerAssignedAccountID?.[0]}
            meta={SupplierPartyFieldMeta.CustomerAssignedAccountID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-AdditionalAccountID"
            label="Additional Account Identifier"
            items={value.AdditionalAccountID}
            meta={SupplierPartyFieldMeta.AdditionalAccountID} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="Additional Account Identifier"
                value={itemValue}
                meta={SupplierPartyFieldMeta.AdditionalAccountID}
              />
            }
          />

          <TextDisplay
            label="Data Sending Capability"
            value={value.DataSendingCapability?.[0]}
            meta={SupplierPartyFieldMeta.DataSendingCapability}
          />

          <PartyDisplay
            label="Party"
            value={value.Party?.[0]}
            meta={SupplierPartyFieldMeta.Party}
          />

          <ContactDisplay
            label="Despatch Contact"
            value={value.DespatchContact?.[0]}
            meta={SupplierPartyFieldMeta.DespatchContact}
          />

          <ContactDisplay
            label="Accounting Contact"
            value={value.AccountingContact?.[0]}
            meta={SupplierPartyFieldMeta.AccountingContact}
          />

          <ContactDisplay
            label="Seller Contact"
            value={value.SellerContact?.[0]}
            meta={SupplierPartyFieldMeta.SellerContact}
          />
        </div>
    </div>
  )
}
