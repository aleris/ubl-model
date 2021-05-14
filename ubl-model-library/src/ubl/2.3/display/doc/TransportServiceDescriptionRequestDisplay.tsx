import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportServiceDescriptionRequest } from  '../../model/doc/TransportServiceDescriptionRequest'
import { TransportServiceDescriptionRequestFieldMeta } from  '../../meta/doc/TransportServiceDescriptionRequestMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
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
import TransportationServiceDisplay from '../cac/TransportationServiceDisplay'
import { TransportationService } from '../../model/cac/TransportationService'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportServiceDescriptionRequest
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionRequestDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-TransportServiceDescriptionRequest ubl-TransportServiceDescriptionRequestType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportServiceDescriptionRequest ubl-UBLExtensions"
          meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-UBLVersionID"
          meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-CustomizationID"
          meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-ProfileID"
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-ProfileExecutionID"
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-ID"
          meta={TransportServiceDescriptionRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Indicator ubl-CopyIndicator"
          meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Copy Indicator"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Identifier ubl-UUID"
          meta={TransportServiceDescriptionRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Date ubl-IssueDate"
          meta={TransportServiceDescriptionRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Time ubl-IssueTime"
          meta={TransportServiceDescriptionRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.IssueTime}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Text ubl-Note"
          meta={TransportServiceDescriptionRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportServiceDescriptionRequest ubl-Code ubl-ServiceInformationPreferenceCode"
          meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode} 
          value={value.ServiceInformationPreferenceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Service Information Preference Code"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportServiceDescriptionRequest ubl-Signature"
          meta={TransportServiceDescriptionRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.Signature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescriptionRequest ubl-Party ubl-SenderParty"
          meta={TransportServiceDescriptionRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Sender Party"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.SenderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescriptionRequest ubl-Party ubl-ReceiverParty"
          meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Receiver Party"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportServiceDescriptionRequest ubl-Party ubl-TransportServiceProviderParty"
          meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Transport Service Provider Party"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportServiceDescriptionRequest ubl-TransportationService"
          meta={TransportServiceDescriptionRequestFieldMeta.TransportationService} 
          value={value.TransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay
              key={key}
              label="Transportation Service"
              value={itemValue}
              meta={TransportServiceDescriptionRequestFieldMeta.TransportationService}
            />
          }
        />
        </div>
    </div>
  )
}
