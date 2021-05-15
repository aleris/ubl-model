import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BusinessCard } from  '../../model/doc/BusinessCard'
import { BusinessCardFieldMeta } from  '../../meta/doc/BusinessCardMeta'
import CapabilityDisplay from '../cac/CapabilityDisplay'
import { Capability } from '../../model/cac/Capability'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: BusinessCard | undefined
  meta: FieldMeta<T>
}

export default function BusinessCardDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-BusinessCard">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BusinessCardFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={BusinessCardFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={BusinessCardFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={BusinessCardFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={BusinessCardFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BusinessCardFieldMeta.ID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={BusinessCardFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={BusinessCardFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={BusinessCardFieldMeta.IssueTime}
          />

          <IdentifierDisplay
            label="Version Identifier"
            value={value.VersionID?.[0]}
            meta={BusinessCardFieldMeta.VersionID}
          />

          <IdentifierDisplay
            label="Previous Version Identifier"
            value={value.PreviousVersionID?.[0]}
            meta={BusinessCardFieldMeta.PreviousVersionID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-BriefDescription"
            label="Brief Description"
            items={value.BriefDescription}
            meta={BusinessCardFieldMeta.BriefDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Brief Description"
                value={itemValue}
                meta={BusinessCardFieldMeta.BriefDescription}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={BusinessCardFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={BusinessCardFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={BusinessCardFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={BusinessCardFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Business Party"
            value={value.BusinessParty?.[0]}
            meta={BusinessCardFieldMeta.BusinessParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-BrochureDocumentReference"
            label="Brochure Document Reference"
            items={value.BrochureDocumentReference}
            meta={BusinessCardFieldMeta.BrochureDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Brochure Document Reference"
                value={itemValue}
                meta={BusinessCardFieldMeta.BrochureDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={BusinessCardFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={BusinessCardFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Capability ubl-BusinessCapability"
            label="Business Capability"
            items={value.BusinessCapability}
            meta={BusinessCardFieldMeta.BusinessCapability} 
            itemDisplay={ (itemValue: Capability, key: string | number) =>
              <CapabilityDisplay
                key={key}
                label="Business Capability"
                value={itemValue}
                meta={BusinessCardFieldMeta.BusinessCapability}
              />
            }
          />
        </div>
    </div>
  )
}
