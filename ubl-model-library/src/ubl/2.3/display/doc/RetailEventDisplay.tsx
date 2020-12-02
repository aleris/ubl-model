import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: RetailEvent
  meta: FieldMeta<T>
}

export default function RetailEventDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RetailEventFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RetailEventFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RetailEventFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={RetailEventFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={RetailEventFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RetailEventFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.RetailEventName} 
          value={value.RetailEventName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RetailEventFieldMeta.RetailEventName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.RetailEventStatusCode} 
          value={value.RetailEventStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={RetailEventFieldMeta.RetailEventStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.SellerEventID} 
          value={value.SellerEventID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.SellerEventID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.BuyerEventID} 
          value={value.BuyerEventID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={RetailEventFieldMeta.BuyerEventID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RetailEventFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.Period} 
          value={value.Period}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={RetailEventFieldMeta.Period} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.OriginalDocumentReference} 
          value={value.OriginalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={RetailEventFieldMeta.OriginalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={RetailEventFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={RetailEventFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={RetailEventFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={RetailEventFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={RetailEventFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.EventComment} 
          value={value.EventComment}
          itemDisplay={ (itemValue: EventComment, key: string | number) =>
            <EventCommentDisplay key={key} meta={RetailEventFieldMeta.EventComment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.PromotionalEvent} 
          value={value.PromotionalEvent}
          itemDisplay={ (itemValue: PromotionalEvent, key: string | number) =>
            <PromotionalEventDisplay key={key} meta={RetailEventFieldMeta.PromotionalEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RetailEventFieldMeta.MiscellaneousEvent} 
          value={value.MiscellaneousEvent}
          itemDisplay={ (itemValue: MiscellaneousEvent, key: string | number) =>
            <MiscellaneousEventDisplay key={key} meta={RetailEventFieldMeta.MiscellaneousEvent} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
