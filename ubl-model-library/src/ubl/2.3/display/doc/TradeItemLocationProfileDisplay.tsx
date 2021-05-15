import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradeItemLocationProfile } from  '../../model/doc/TradeItemLocationProfile'
import { TradeItemLocationProfileFieldMeta } from  '../../meta/doc/TradeItemLocationProfileMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import ItemManagementProfileDisplay from '../cac/ItemManagementProfileDisplay'
import { ItemManagementProfile } from '../../model/cac/ItemManagementProfile'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import SupplierPartyDisplay from '../cac/SupplierPartyDisplay'
import { SupplierParty } from '../../model/cac/SupplierParty'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TradeItemLocationProfile | undefined
  meta: FieldMeta<T>
}

export default function TradeItemLocationProfileDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TradeItemLocationProfile">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TradeItemLocationProfileFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TradeItemLocationProfileFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TradeItemLocationProfileFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TradeItemLocationProfileFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TradeItemLocationProfileFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TradeItemLocationProfileFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TradeItemLocationProfileFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Profile Status Code"
            value={value.ProfileStatusCode?.[0]}
            meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode}
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={TradeItemLocationProfileFieldMeta.Period}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={TradeItemLocationProfileFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={TradeItemLocationProfileFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TradeItemLocationProfileFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TradeItemLocationProfileFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TradeItemLocationProfileFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TradeItemLocationProfileFieldMeta.ReceiverParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ItemManagementProfile"
            label="Item Management Profile"
            items={value.ItemManagementProfile}
            meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile} 
            itemDisplay={ (itemValue: ItemManagementProfile, key: string | number) =>
              <ItemManagementProfileDisplay
                key={key}
                label="Item Management Profile"
                value={itemValue}
                meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile}
              />
            }
          />
        </div>
    </div>
  )
}
