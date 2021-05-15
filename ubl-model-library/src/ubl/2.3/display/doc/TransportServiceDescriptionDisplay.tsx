import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportServiceDescription } from  '../../model/doc/TransportServiceDescription'
import { TransportServiceDescriptionFieldMeta } from  '../../meta/doc/TransportServiceDescriptionMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
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
import PaymentTermsDisplay from '../cac/PaymentTermsDisplay'
import { PaymentTerms } from '../../model/cac/PaymentTerms'
import PeriodDisplay from '../cac/PeriodDisplay'
import { Period } from '../../model/cac/Period'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportationServiceDisplay from '../cac/TransportationServiceDisplay'
import { TransportationService } from '../../model/cac/TransportationService'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportServiceDescription | undefined
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportServiceDescription">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportServiceDescriptionFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TransportServiceDescriptionFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportServiceDescriptionFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportServiceDescriptionFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportServiceDescriptionFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportServiceDescriptionFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportServiceDescriptionFieldMeta.Note}
              />
            }
          />

          <TextDisplay
            label="Service Name"
            value={value.ServiceName?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ServiceName}
          />

          <CodeDisplay
            label="Response Code"
            value={value.ResponseCode?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ResponseCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportServiceDescriptionFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportServiceDescriptionFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportServiceDescriptionFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ReceiverParty}
          />

          <DocumentReferenceDisplay
            label="Transport Service Description Request Document Reference"
            value={value.TransportServiceDescriptionRequestDocumentReference?.[0]}
            meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference}
          />

          <PartyDisplay
            label="Transport Service Provider Party"
            value={value.TransportServiceProviderParty?.[0]}
            meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty}
          />

          <PaymentTermsDisplay
            label="Service Charge Payment Terms"
            value={value.ServiceChargePaymentTerms?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms}
          />

          <PeriodDisplay
            label="Validity Period"
            value={value.ValidityPeriod?.[0]}
            meta={TransportServiceDescriptionFieldMeta.ValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportationService"
            label="Transportation Service"
            items={value.TransportationService}
            meta={TransportServiceDescriptionFieldMeta.TransportationService} 
            itemDisplay={ (itemValue: TransportationService, key: string | number) =>
              <TransportationServiceDisplay
                key={key}
                label="Transportation Service"
                value={itemValue}
                meta={TransportServiceDescriptionFieldMeta.TransportationService}
              />
            }
          />
        </div>
    </div>
  )
}
