import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCapability } from  '../../model/doc/DigitalCapability'
import { DigitalCapabilityFieldMeta } from  '../../meta/doc/DigitalCapabilityMeta'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DigitalProcessDisplay from '../cac/DigitalProcessDisplay'
import { DigitalProcess } from '../../model/cac/DigitalProcess'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DigitalCapability
  meta: FieldMeta<T>
}

export default function DigitalCapabilityDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-DigitalCapability ubl-DigitalCapabilityType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DigitalCapability ubl-UBLExtensions"
          meta={DigitalCapabilityFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-UBLVersionID"
          meta={DigitalCapabilityFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-CustomizationID"
          meta={DigitalCapabilityFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-ProfileID"
          meta={DigitalCapabilityFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-ProfileExecutionID"
          meta={DigitalCapabilityFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-ID"
          meta={DigitalCapabilityFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-UUID"
          meta={DigitalCapabilityFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Date ubl-IssueDate"
          meta={DigitalCapabilityFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Time ubl-IssueTime"
          meta={DigitalCapabilityFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-VersionID"
          meta={DigitalCapabilityFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Version Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.VersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DigitalCapability ubl-Identifier ubl-PreviousVersionID"
          meta={DigitalCapabilityFieldMeta.PreviousVersionID} 
          value={value.PreviousVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Previous Version Identifier"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.PreviousVersionID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalCapability ubl-Signature"
          meta={DigitalCapabilityFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalCapability ubl-Party ubl-SenderParty"
          meta={DigitalCapabilityFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalCapability ubl-Party ubl-ReceiverParty"
          meta={DigitalCapabilityFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DigitalCapability ubl-Party ubl-BusinessParty"
          meta={DigitalCapabilityFieldMeta.BusinessParty} 
          value={value.BusinessParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Business Party"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.BusinessParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DigitalCapability ubl-DigitalProcess"
          meta={DigitalCapabilityFieldMeta.DigitalProcess} 
          value={value.DigitalProcess}
          itemDisplay={ (itemValue: DigitalProcess, key: string | number) =>
            <DigitalProcessDisplay
              key={key}
              label="Digital Process"
              value={itemValue}
              meta={DigitalCapabilityFieldMeta.DigitalProcess}
            />
          }
        />
        </div>
    </div>
  )
}
