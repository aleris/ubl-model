import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: SupplierParty
  meta: FieldMeta<T>
}

export default function SupplierPartyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-SupplierParty ubl-SupplierPartyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-SupplierParty ubl-UBLExtensions"
          meta={SupplierPartyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={SupplierPartyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SupplierParty ubl-Identifier ubl-CustomerAssignedAccountID"
          meta={SupplierPartyFieldMeta.CustomerAssignedAccountID} 
          value={value.CustomerAssignedAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customer Assigned Account Identifier"
              value={itemValue}
              meta={SupplierPartyFieldMeta.CustomerAssignedAccountID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-SupplierParty ubl-Identifier ubl-AdditionalAccountID"
          meta={SupplierPartyFieldMeta.AdditionalAccountID} 
          value={value.AdditionalAccountID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Additional Account Identifier"
              value={itemValue}
              meta={SupplierPartyFieldMeta.AdditionalAccountID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-SupplierParty ubl-Text ubl-DataSendingCapability"
          meta={SupplierPartyFieldMeta.DataSendingCapability} 
          value={value.DataSendingCapability}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Data Sending Capability"
              value={itemValue}
              meta={SupplierPartyFieldMeta.DataSendingCapability}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierParty ubl-Party"
          meta={SupplierPartyFieldMeta.Party} 
          value={value.Party}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Party"
              value={itemValue}
              meta={SupplierPartyFieldMeta.Party}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierParty ubl-Contact ubl-DespatchContact"
          meta={SupplierPartyFieldMeta.DespatchContact} 
          value={value.DespatchContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Despatch Contact"
              value={itemValue}
              meta={SupplierPartyFieldMeta.DespatchContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierParty ubl-Contact ubl-AccountingContact"
          meta={SupplierPartyFieldMeta.AccountingContact} 
          value={value.AccountingContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Accounting Contact"
              value={itemValue}
              meta={SupplierPartyFieldMeta.AccountingContact}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-SupplierParty ubl-Contact ubl-SellerContact"
          meta={SupplierPartyFieldMeta.SellerContact} 
          value={value.SellerContact}
          itemDisplay={ (itemValue: Contact, key: string | number) =>
            <ContactDisplay
              key={key}
              label="Seller Contact"
              value={itemValue}
              meta={SupplierPartyFieldMeta.SellerContact}
            />
          }
        />
        </div>
    </div>
  )
}
