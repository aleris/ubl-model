import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: DigitalCapability | undefined
  meta: FieldMeta<T>
}

export default function DigitalCapabilityDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-DigitalCapability">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DigitalCapabilityFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={DigitalCapabilityFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={DigitalCapabilityFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={DigitalCapabilityFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={DigitalCapabilityFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={DigitalCapabilityFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={DigitalCapabilityFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={DigitalCapabilityFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={DigitalCapabilityFieldMeta.IssueTime}
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={DigitalCapabilityFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version Identifier"
            value={value.PreviousVersionID?.[0]}
            meta={DigitalCapabilityFieldMeta.PreviousVersionID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={DigitalCapabilityFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={DigitalCapabilityFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={DigitalCapabilityFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={DigitalCapabilityFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Business Party"
            value={value.BusinessParty?.[0]}
            meta={DigitalCapabilityFieldMeta.BusinessParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DigitalProcess"
            label="Digital Process"
            items={value.DigitalProcess}
            meta={DigitalCapabilityFieldMeta.DigitalProcess} 
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
