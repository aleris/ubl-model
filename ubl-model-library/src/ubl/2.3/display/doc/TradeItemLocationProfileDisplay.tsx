import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TradeItemLocationProfile
  meta: FieldMeta<T>
}

export default function TradeItemLocationProfileDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TradeItemLocationProfile ubl-TradeItemLocationProfileType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TradeItemLocationProfile ubl-UBLExtensions"
          meta={TradeItemLocationProfileFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-UBLVersionID"
          meta={TradeItemLocationProfileFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-CustomizationID"
          meta={TradeItemLocationProfileFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-ProfileID"
          meta={TradeItemLocationProfileFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-ProfileExecutionID"
          meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-ID"
          meta={TradeItemLocationProfileFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Indicator ubl-CopyIndicator"
          meta={TradeItemLocationProfileFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Identifier ubl-UUID"
          meta={TradeItemLocationProfileFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Date ubl-IssueDate"
          meta={TradeItemLocationProfileFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Time ubl-IssueTime"
          meta={TradeItemLocationProfileFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Text ubl-Note"
          meta={TradeItemLocationProfileFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradeItemLocationProfile ubl-Code ubl-ProfileStatusCode"
          meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode} 
          value={value.ProfileStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Profile Status Code"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.ProfileStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-Period"
          meta={TradeItemLocationProfileFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.Period}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-DocumentReference"
          meta={TradeItemLocationProfileFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-Signature"
          meta={TradeItemLocationProfileFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-Party ubl-SenderParty"
          meta={TradeItemLocationProfileFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-Party ubl-ReceiverParty"
          meta={TradeItemLocationProfileFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-SupplierParty ubl-SellerSupplierParty"
          meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={TradeItemLocationProfileFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TradeItemLocationProfile ubl-ItemManagementProfile"
          meta={TradeItemLocationProfileFieldMeta.ItemManagementProfile} 
          value={value.ItemManagementProfile}
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
