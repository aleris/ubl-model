import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportServiceDescription
  meta: FieldMeta<T>
}

export default function TransportServiceDescriptionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportServiceDescriptionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportServiceDescriptionFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportServiceDescriptionFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={TransportServiceDescriptionFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={TransportServiceDescriptionFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportServiceDescriptionFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ServiceName} 
          value={value.ServiceName}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ServiceName} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ResponseCode} 
          value={value.ResponseCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ResponseCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={TransportServiceDescriptionFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference} 
          value={value.TransportServiceDescriptionRequestDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportServiceDescriptionFieldMeta.TransportServiceDescriptionRequestDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty} 
          value={value.TransportServiceProviderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={TransportServiceDescriptionFieldMeta.TransportServiceProviderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms} 
          value={value.ServiceChargePaymentTerms}
          itemDisplay={ (itemValue: PaymentTerms, key: string | number) =>
            <PaymentTermsDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ServiceChargePaymentTerms} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.ValidityPeriod} 
          value={value.ValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={TransportServiceDescriptionFieldMeta.ValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportServiceDescriptionFieldMeta.TransportationService} 
          value={value.TransportationService}
          itemDisplay={ (itemValue: TransportationService, key: string | number) =>
            <TransportationServiceDisplay key={key} meta={TransportServiceDescriptionFieldMeta.TransportationService} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
