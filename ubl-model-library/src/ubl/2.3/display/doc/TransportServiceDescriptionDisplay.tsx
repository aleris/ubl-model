import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportServiceDescription
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportServiceDescription ubl-TransportServiceDescriptionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportServiceDescription ubl-UBLExtensions"
          meta={TransportServiceDescriptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-UBLVersionID"
          meta={TransportServiceDescriptionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-CustomizationID"
          meta={TransportServiceDescriptionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-ProfileID"
          meta={TransportServiceDescriptionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-ID"
          meta={TransportServiceDescriptionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Indicator ubl-CopyIndicator"
          meta={TransportServiceDescriptionFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Identifier ubl-UUID"
          meta={TransportServiceDescriptionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Date ubl-IssueDate"
          meta={TransportServiceDescriptionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Time ubl-IssueTime"
          meta={TransportServiceDescriptionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Text ubl-Note"
          meta={TransportServiceDescriptionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Text ubl-ServiceName"
          meta={TransportServiceDescriptionFieldMeta.ServiceName} 
          value={value.ServiceName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Service Name"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ServiceName}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescription ubl-Code ubl-ResponseCode"
          meta={TransportServiceDescriptionFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Response Code"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ResponseCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-Signature"
          meta={TransportServiceDescriptionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-Party ubl-SenderParty"
          meta={TransportServiceDescriptionFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-Party ubl-ReceiverParty"
          meta={TransportServiceDescriptionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-DocumentReference ubl-TransportServiceDescriptionRequestDocumentReference"
          meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference} 
          value={value.TransportServiceDescriptionRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Transport Service Description Request Document Reference"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-Party ubl-TransportServiceProviderParty"
          meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Service Provider Party"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-PaymentTerms ubl-ServiceChargePaymentTerms"
          meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms} 
          value={value.ServiceChargePaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay
              key={key}
              label="Service Charge Payment Terms"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-Period ubl-ValidityPeriod"
          meta={TransportServiceDescriptionFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Validity Period"
              value={itemValue}
              meta={TransportServiceDescriptionFieldMeta.ValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportServiceDescription ubl-TransportationService"
          meta={TransportServiceDescriptionFieldMeta.TransportationService} 
          value={value.TransportationService}
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
