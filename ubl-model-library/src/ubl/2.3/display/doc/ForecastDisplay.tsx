import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Forecast } from  '../../model/doc/Forecast'
import { ForecastFieldMeta } from  '../../meta/doc/ForecastMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomerPartyDisplay from '../cac/CustomerPartyDisplay'
import { CustomerParty } from '../../model/cac/CustomerParty'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ForecastLineDisplay from '../cac/ForecastLineDisplay'
import { ForecastLine } from '../../model/cac/ForecastLine'
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
  value: Forecast | undefined
  meta: FieldMeta<T>
}

export default function ForecastDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Forecast">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForecastFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ForecastFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ForecastFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ForecastFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ForecastFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ForecastFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={ForecastFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ForecastFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ForecastFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ForecastFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ForecastFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ForecastFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Version"
            value={value.VersionID?.[0]}
            meta={ForecastFieldMeta.VersionID}
          />

          <IndicatorDisplay
            label="Based On Consensus Indicator"
            value={value.BasedOnConsensusIndicator?.[0]}
            meta={ForecastFieldMeta.BasedOnConsensusIndicator}
          />

          <CodeDisplay
            label="Forecast Purpose Code"
            value={value.ForecastPurposeCode?.[0]}
            meta={ForecastFieldMeta.ForecastPurposeCode}
          />

          <PeriodDisplay
            label="Forecast Period"
            value={value.ForecastPeriod?.[0]}
            meta={ForecastFieldMeta.ForecastPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference ubl-AdditionalDocumentReference"
            label="Additional Document Reference"
            items={value.AdditionalDocumentReference}
            meta={ForecastFieldMeta.AdditionalDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Additional Document Reference"
                value={itemValue}
                meta={ForecastFieldMeta.AdditionalDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ForecastFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ForecastFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={ForecastFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={ForecastFieldMeta.ReceiverParty}
          />

          <CustomerPartyDisplay
            label="Buyer Customer Party"
            value={value.BuyerCustomerParty?.[0]}
            meta={ForecastFieldMeta.BuyerCustomerParty}
          />

          <SupplierPartyDisplay
            label="Seller Supplier Party"
            value={value.SellerSupplierParty?.[0]}
            meta={ForecastFieldMeta.SellerSupplierParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-ForecastLine"
            label="Forecast Line"
            items={value.ForecastLine}
            meta={ForecastFieldMeta.ForecastLine} 
            itemDisplay={ (itemValue: ForecastLine, key: string | number) =>
              <ForecastLineDisplay
                key={key}
                label="Forecast Line"
                value={itemValue}
                meta={ForecastFieldMeta.ForecastLine}
              />
            }
          />
        </div>
    </div>
  )
}
