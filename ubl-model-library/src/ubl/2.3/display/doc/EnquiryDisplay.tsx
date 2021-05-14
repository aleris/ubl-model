import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Enquiry
  meta: FieldMeta<T>
}

export default function EnquiryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Enquiry ubl-EnquiryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Enquiry ubl-UBLExtensions"
          meta={EnquiryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EnquiryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-UBLVersionID"
          meta={EnquiryFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={EnquiryFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-CustomizationID"
          meta={EnquiryFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={EnquiryFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-ProfileID"
          meta={EnquiryFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={EnquiryFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-ProfileExecutionID"
          meta={EnquiryFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={EnquiryFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-ID"
          meta={EnquiryFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={EnquiryFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Indicator ubl-CopyIndicator"
          meta={EnquiryFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={EnquiryFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Identifier ubl-UUID"
          meta={EnquiryFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={EnquiryFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Date ubl-IssueDate"
          meta={EnquiryFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={EnquiryFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Time ubl-IssueTime"
          meta={EnquiryFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={EnquiryFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Date ubl-LatestReplyDate"
          meta={EnquiryFieldMeta.LatestReplyDate} 
          value={value.LatestReplyDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Latest Reply Date"
              value={itemValue}
              meta={EnquiryFieldMeta.LatestReplyDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Enquiry ubl-Time ubl-LatestReplyTime"
          meta={EnquiryFieldMeta.LatestReplyTime} 
          value={value.LatestReplyTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Latest Reply Time"
              value={itemValue}
              meta={EnquiryFieldMeta.LatestReplyTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Enquiry ubl-Text ubl-Description"
          meta={EnquiryFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={EnquiryFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Enquiry ubl-Signature"
          meta={EnquiryFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={EnquiryFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Enquiry ubl-Party ubl-RequestorParty"
          meta={EnquiryFieldMeta.RequestorParty} 
          value={value.RequestorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Requestor Party"
              value={itemValue}
              meta={EnquiryFieldMeta.RequestorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Enquiry ubl-Party ubl-ResponderParty"
          meta={EnquiryFieldMeta.ResponderParty} 
          value={value.ResponderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Responder Party"
              value={itemValue}
              meta={EnquiryFieldMeta.ResponderParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Enquiry ubl-DocumentReference ubl-AdditionalDocumentReference"
          meta={EnquiryFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Additional Document Reference"
              value={itemValue}
              meta={EnquiryFieldMeta.AdditionalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Enquiry ubl-Attachment"
          meta={EnquiryFieldMeta.Attachment} 
          value={value.Attachment}
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
