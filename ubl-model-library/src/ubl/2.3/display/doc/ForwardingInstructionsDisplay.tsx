import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ForwardingInstructions } from  '../../model/doc/ForwardingInstructions'
import { ForwardingInstructionsFieldMeta } from  '../../meta/doc/ForwardingInstructionsMeta'
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
  value: ForwardingInstructions
  meta: FieldMeta<T>
}

export default function ForwardingInstructionsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ForwardingInstructionsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.CarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ForwardingInstructionsFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ForwardingInstructionsFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForwardingInstructionsFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForwardingInstructionsFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForwardingInstructionsFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ForwardingInstructionsFieldMeta.DocumentStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ForwardingInstructionsFieldMeta.ShippingOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ToOrderIndicator} 
          value={value.ToOrderIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForwardingInstructionsFieldMeta.ToOrderIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.AdValoremIndicator} 
          value={value.AdValoremIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ForwardingInstructionsFieldMeta.AdValoremIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.DeclaredCarriageValueAmount} 
          value={value.DeclaredCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ForwardingInstructionsFieldMeta.DeclaredCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ForwardingInstructionsFieldMeta.OtherInstruction} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForwardingInstructionsFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForwardingInstructionsFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ForwardingInstructionsFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={ForwardingInstructionsFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={ForwardingInstructionsFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={ForwardingInstructionsFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={ForwardingInstructionsFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ForwardingInstructionsFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={ForwardingInstructionsFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
