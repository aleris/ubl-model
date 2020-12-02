import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Forecast
  meta: FieldMeta<T>
}

export default function ForecastDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForecastFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForecastFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.CopyIndicator} 
          value={value.CopyIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForecastFieldMeta.CopyIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForecastFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForecastFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForecastFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.VersionID} 
          value={value.VersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForecastFieldMeta.VersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.BasedOnConsensusIndicator} 
          value={value.BasedOnConsensusIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForecastFieldMeta.BasedOnConsensusIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ForecastPurposeCode} 
          value={value.ForecastPurposeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForecastFieldMeta.ForecastPurposeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ForecastPeriod} 
          value={value.ForecastPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ForecastFieldMeta.ForecastPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.AdditionalDocumentReference} 
          value={value.AdditionalDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ForecastFieldMeta.AdditionalDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ForecastFieldMeta.Signature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.SenderParty} 
          value={value.SenderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForecastFieldMeta.SenderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ReceiverParty} 
          value={value.ReceiverParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForecastFieldMeta.ReceiverParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.BuyerCustomerParty} 
          value={value.BuyerCustomerParty}
          itemDisplay={ (itemValue: CustomerParty, key: string | number) =>
            <CustomerPartyDisplay key={key} meta={ForecastFieldMeta.BuyerCustomerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.SellerSupplierParty} 
          value={value.SellerSupplierParty}
          itemDisplay={ (itemValue: SupplierParty, key: string | number) =>
            <SupplierPartyDisplay key={key} meta={ForecastFieldMeta.SellerSupplierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForecastFieldMeta.ForecastLine} 
          value={value.ForecastLine}
          itemDisplay={ (itemValue: ForecastLine, key: string | number) =>
            <ForecastLineDisplay key={key} meta={ForecastFieldMeta.ForecastLine} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
