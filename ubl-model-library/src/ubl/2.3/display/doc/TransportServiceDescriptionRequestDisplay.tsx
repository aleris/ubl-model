import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: TransportServiceDescriptionRequest | undefined
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionRequestDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-TransportServiceDescriptionRequest">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.ID}
          />

          <IndicatorDisplay
            label="Copy Indicator"
            value={value.CopyIndicator?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.IssueTime}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={TransportServiceDescriptionRequestFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={TransportServiceDescriptionRequestFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Service Information Preference Code"
            value={value.ServiceInformationPreferenceCode?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={TransportServiceDescriptionRequestFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={TransportServiceDescriptionRequestFieldMeta.Signature}
              />
            }
          />

          <PartyDisplay
            label="Sender Party"
            value={value.SenderParty?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.SenderParty}
          />

          <PartyDisplay
            label="Receiver Party"
            value={value.ReceiverParty?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty}
          />

          <PartyDisplay
            label="Transport Service Provider Party"
            value={value.TransportServiceProviderParty?.[0]}
            meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty}
          />

          <ElementListDisplay
            className="ubl-doc ubl-TransportationService"
            label="Transportation Service"
            items={value.TransportationService}
            meta={TransportServiceDescriptionRequestFieldMeta.TransportationService} 
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
