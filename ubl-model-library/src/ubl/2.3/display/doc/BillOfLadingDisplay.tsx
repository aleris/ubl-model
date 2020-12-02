import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { BillOfLading } from  '../../model/doc/BillOfLading'
import { BillOfLadingFieldMeta } from  '../../meta/doc/BillOfLadingMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import DocumentDistributionDisplay from '../cac/DocumentDistributionDisplay'
import { DocumentDistribution } from '../../model/cac/DocumentDistribution'
import DocumentReferenceDisplay from '../cac/DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import ExchangeRateDisplay from '../cac/ExchangeRateDisplay'
import { ExchangeRate } from '../../model/cac/ExchangeRate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PartyDisplay from '../cac/PartyDisplay'
import { Party } from '../../model/cac/Party'
import ShipmentDisplay from '../cac/ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import SignatureDisplay from '../cac/SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: BillOfLading
  meta: FieldMeta<T>
}

export default function BillOfLadingDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={BillOfLadingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={BillOfLadingFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.CarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={BillOfLadingFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={BillOfLadingFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BillOfLadingFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BillOfLadingFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BillOfLadingFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={BillOfLadingFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={BillOfLadingFieldMeta.ShippingOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ToOrderIndicator} 
          value={value.ToOrderIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={BillOfLadingFieldMeta.ToOrderIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.AdValoremIndicator} 
          value={value.AdValoremIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={BillOfLadingFieldMeta.AdValoremIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount} 
          value={value.DeclaredCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={BillOfLadingFieldMeta.OtherInstruction} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BillOfLadingFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BillOfLadingFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={BillOfLadingFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={BillOfLadingFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={BillOfLadingFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={BillOfLadingFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={BillOfLadingFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={BillOfLadingFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={BillOfLadingFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
