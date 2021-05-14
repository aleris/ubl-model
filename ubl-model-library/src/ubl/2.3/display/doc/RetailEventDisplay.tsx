import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: RetailEvent
  meta: FieldMeta<T>
}

export default function RetailEventDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-RetailEvent ubl-RetailEventType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RetailEvent ubl-UBLExtensions"
          meta={RetailEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RetailEventFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-UBLVersionID"
          meta={RetailEventFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-CustomizationID"
          meta={RetailEventFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-ProfileID"
          meta={RetailEventFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-ProfileExecutionID"
          meta={RetailEventFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-ID"
          meta={RetailEventFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Indicator ubl-CopyIndicator"
          meta={RetailEventFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={RetailEventFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-UUID"
          meta={RetailEventFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={RetailEventFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Date ubl-IssueDate"
          meta={RetailEventFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={RetailEventFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Time ubl-IssueTime"
          meta={RetailEventFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={RetailEventFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Text ubl-Note"
          meta={RetailEventFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={RetailEventFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Text ubl-RetailEventName"
          meta={RetailEventFieldMeta.RetailEventName} 
          value={value.RetailEventName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Retail Event Name"
              value={itemValue}
              meta={RetailEventFieldMeta.RetailEventName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Code ubl-RetailEventStatusCode"
          meta={RetailEventFieldMeta.RetailEventStatusCode} 
          value={value.RetailEventStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Retail Event Status Code"
              value={itemValue}
              meta={RetailEventFieldMeta.RetailEventStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-SellerEventID"
          meta={RetailEventFieldMeta.SellerEventID} 
          value={value.SellerEventID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Seller Event Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.SellerEventID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Identifier ubl-BuyerEventID"
          meta={RetailEventFieldMeta.BuyerEventID} 
          value={value.BuyerEventID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Buyer Event Identifier"
              value={itemValue}
              meta={RetailEventFieldMeta.BuyerEventID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RetailEvent ubl-Text ubl-Description"
          meta={RetailEventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={RetailEventFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-Period"
          meta={RetailEventFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Period"
              value={itemValue}
              meta={RetailEventFieldMeta.Period}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RetailEvent ubl-DocumentReference ubl-OriginalDocumentReference"
          meta={RetailEventFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Original Document Reference"
              value={itemValue}
              meta={RetailEventFieldMeta.OriginalDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RetailEvent ubl-Signature"
          meta={RetailEventFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={RetailEventFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-Party ubl-SenderParty"
          meta={RetailEventFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={RetailEventFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-Party ubl-ReceiverParty"
          meta={RetailEventFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={RetailEventFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-CustomerParty ubl-BuyerCustomerParty"
          meta={RetailEventFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay
              key={key}
              label="Buyer Customer Party"
              value={itemValue}
              meta={RetailEventFieldMeta.BuyerCustomerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-SupplierParty ubl-SellerSupplierParty"
          meta={RetailEventFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay
              key={key}
              label="Seller Supplier Party"
              value={itemValue}
              meta={RetailEventFieldMeta.SellerSupplierParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RetailEvent ubl-EventComment"
          meta={RetailEventFieldMeta.EventComment} 
          value={value.EventComment}
          itemDisplay={ (itemValue: EventComment, key: string | number) =>
            <EventCommentDisplay
              key={key}
              label="Event Comment"
              value={itemValue}
              meta={RetailEventFieldMeta.EventComment}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-PromotionalEvent"
          meta={RetailEventFieldMeta.PromotionalEvent} 
          value={value.PromotionalEvent}
          itemDisplay={ (itemValue: PromotionalEvent, key: string | number) =>
            <PromotionalEventDisplay
              key={key}
              label="Promotional Event"
              value={itemValue}
              meta={RetailEventFieldMeta.PromotionalEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-RetailEvent ubl-MiscellaneousEvent"
          meta={RetailEventFieldMeta.MiscellaneousEvent} 
          value={value.MiscellaneousEvent}
          itemDisplay={ (itemValue: MiscellaneousEvent, key: string | number) =>
            <MiscellaneousEventDisplay
              key={key}
              label="Miscellaneous Event"
              value={itemValue}
              meta={RetailEventFieldMeta.MiscellaneousEvent}
            />
          }
        />
        </div>
    </div>
  )
}
