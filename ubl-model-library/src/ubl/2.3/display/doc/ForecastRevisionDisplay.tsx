import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForecastRevision } from  '../../model/doc/ForecastRevision'
import { ForecastRevisionFieldMeta } from  '../../meta/doc/ForecastRevisionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ForecastRevisionLineDisplay from '../cac/ForecastRevisionLineDisplay'
import { ForecastRevisionLine } from '../../model/cac/ForecastRevisionLine'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
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
  value: ForecastRevision | undefined
  meta: FieldMeta<T>
}

export default function ForecastRevisionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ForecastRevision">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastRevisionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ForecastRevisionFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ForecastRevisionFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ForecastRevisionFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ForecastRevisionFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ForecastRevisionFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={ForecastRevisionFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ForecastRevisionFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ForecastRevisionFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ForecastRevisionFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ForecastRevisionFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ForecastRevisionFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Sequence Number"
            value={value.SequenceNumberID?.[0]}
            meta={ForecastRevisionFieldMeta.SequenceNumberID}
          />

          <CodeDisplay
            label="Revision Status Code"
            value={value.RevisionStatusCode?.[0]}
            meta={ForecastRevisionFieldMeta.RevisionStatusCode}
          />

          <CodeDisplay
            label="Purpose Code"
            value={value.PurposeCode?.[0]}
            meta={ForecastRevisionFieldMeta.PurposeCode}
          />

          <PeriodDisplay
            label="Forecast Period"
            value={value.ForecastPeriod?.[0]}
            meta={ForecastRevisionFieldMeta.ForecastPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-OriginalDocumentReference"
            label="Original Document Reference"
            items={value.OriginalDocumentReference}
            meta={ForecastRevisionFieldMeta.OriginalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Original Document Reference"
                value={itemValue}
                meta={ForecastRevisionFieldMeta.OriginalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ForecastRevisionFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ForecastRevisionFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={ForecastRevisionFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={ForecastRevisionFieldMeta.ReceiverParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={ForecastRevisionFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={ForecastRevisionFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ForecastRevisionLine"
            label="Forecast Revision Line"
            items={value.ForecastRevisionLine}
            meta={ForecastRevisionFieldMeta.ForecastRevisionLine} 
            itemDisplay={ (itemValue: ForecastRevisionLine, key: string | number) =>
              <ForecastRevisionLineDisplay
                key={key}
                label="Forecast Revision Line"
                value={itemValue}
                meta={ForecastRevisionFieldMeta.ForecastRevisionLine}
              />
            }
          />
        </div>
    </div>
  )
}
