import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RetailEvent } from  '../../model/doc/RetailEvent'
import { RetailEventFieldMeta } from  '../../meta/doc/RetailEventMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import EventCommentDisplay from '../cac/EventCommentDisplay'
import { EventComment } from '../../model/cac/EventComment'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MiscellaneousEventDisplay from '../cac/MiscellaneousEventDisplay'
import { MiscellaneousEvent } from '../../model/cac/MiscellaneousEvent'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PromotionalEventDisplay from '../cac/PromotionalEventDisplay'
import { PromotionalEvent } from '../../model/cac/PromotionalEvent'
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
  value: RetailEvent | undefined
  meta: FieldMeta<T>
}

export default function RetailEventDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-RetailEvent">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RetailEventFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={RetailEventFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={RetailEventFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={RetailEventFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={RetailEventFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={RetailEventFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={RetailEventFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={RetailEventFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={RetailEventFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={RetailEventFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={RetailEventFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={RetailEventFieldMeta.Note}
              />
            }
          />

          <TextDisplay
            label="Retail Event Name"
            value={value.RetailEventName?.[0]}
            meta={RetailEventFieldMeta.RetailEventName}
          />

          <CodeDisplay
            label="Retail Event Status Code"
            value={value.RetailEventStatusCode?.[0]}
            meta={RetailEventFieldMeta.RetailEventStatusCode}
          />

          <IdentifierDisplay
            label="Seller Event Identifier"
            value={value.SellerEventID?.[0]}
            meta={RetailEventFieldMeta.SellerEventID}
          />

          <IdentifierDisplay
            label="Buyer Event Identifier"
            value={value.BuyerEventID?.[0]}
            meta={RetailEventFieldMeta.BuyerEventID}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={RetailEventFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={RetailEventFieldMeta.Description}
              />
            }
          />

          <PeriodDisplay
            label="Period"
            value={value.Period?.[0]}
            meta={RetailEventFieldMeta.Period}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OriginalDocumentReference"
            label="Original Document Reference"
            items={value.OriginalDocumentReference}
            meta={RetailEventFieldMeta.OriginalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Original Document Reference"
                value={itemValue}
                meta={RetailEventFieldMeta.OriginalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={RetailEventFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={RetailEventFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={RetailEventFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={RetailEventFieldMeta.ReceiverParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={RetailEventFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={RetailEventFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-EventComment"
            label="Event Comment"
            items={value.EventComment}
            meta={RetailEventFieldMeta.EventComment} 
            itemDisplay={ (itemValue: EventComment, key: string | number) =>
              <EventCommentDisplay
                key={key}
                label="Event Comment"
                value={itemValue}
                meta={RetailEventFieldMeta.EventComment}
              />
            }
          />

          <PromotionalEventDisplay
            label="Promotional Event"
            value={value.PromotionalEvent?.[0]}
            meta={RetailEventFieldMeta.PromotionalEvent}
          />

          <MiscellaneousEventDisplay
            label="Miscellaneous Event"
            value={value.MiscellaneousEvent?.[0]}
            meta={RetailEventFieldMeta.MiscellaneousEvent}
          />
        </div>
    </div>
  )
}
