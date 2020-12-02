import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportServiceDescriptionRequest
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionRequestDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode} 
          value={value.ServiceInformationPreferenceCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.ServiceInformationPreferenceCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.TransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionRequestFieldMeta.TransportationService} 
          value={value.TransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportServiceDescriptionRequestFieldMeta.TransportationService} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
