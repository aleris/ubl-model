import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Enquiry } from  '../../model/doc/Enquiry'
import { EnquiryFieldMeta } from  '../../meta/doc/EnquiryMeta'
import AttachmentDisplay from '../cac/AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
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
  value: Enquiry | undefined
  meta: FieldMeta<T>
}

export default function EnquiryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Enquiry">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EnquiryFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={EnquiryFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={EnquiryFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={EnquiryFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={EnquiryFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={EnquiryFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={EnquiryFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={EnquiryFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={EnquiryFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={EnquiryFieldMeta.IssueTime}
          />

          <DateDisplay
            label="Latest Reply Date"
            value={value.LatestReplyDate?.[0]}
            meta={EnquiryFieldMeta.LatestReplyDate}
          />

          <TimeDisplay
            label="Latest Reply Time"
            value={value.LatestReplyTime?.[0]}
            meta={EnquiryFieldMeta.LatestReplyTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={EnquiryFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={EnquiryFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={EnquiryFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={EnquiryFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Requestor Party"
            value={value.RequestorParty?.[0]}
            meta={EnquiryFieldMeta.RequestorParty}
          />

          <PartyDisplay
            label="Responder Party"
            value={value.ResponderParty?.[0]}
            meta={EnquiryFieldMeta.ResponderParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={EnquiryFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={EnquiryFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Attachment"
            label="Attachment"
            items={value.Attachment}
            meta={EnquiryFieldMeta.Attachment} 
            itemDisplay={ (itemValue: Attachment, key: string | number) =>
              <AttachmentDisplay
                key={key}
                label="Attachment"
                value={itemValue}
                meta={EnquiryFieldMeta.Attachment}
              />
            }
          />
        </div>
    </div>
  )
}
