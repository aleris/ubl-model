import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Waybill } from  '../../model/doc/Waybill'
import { WaybillFieldMeta } from  '../../meta/doc/WaybillMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
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
  value: Waybill
  meta: FieldMeta<T>
}

export default function WaybillDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={WaybillFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={WaybillFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.UBLVersionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.CustomizationID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.ProfileID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.ProfileExecutionID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.CarrierAssignedID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.UUID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={WaybillFieldMeta.IssueDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={WaybillFieldMeta.IssueTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WaybillFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WaybillFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WaybillFieldMeta.Note} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={WaybillFieldMeta.ShippingOrderID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.AdValoremIndicator} 
          value={value.AdValoremIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={WaybillFieldMeta.AdValoremIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.DeclaredCarriageValueAmount} 
          value={value.DeclaredCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={WaybillFieldMeta.DeclaredCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={WaybillFieldMeta.OtherInstruction} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WaybillFieldMeta.ConsignorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WaybillFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={WaybillFieldMeta.FreightForwarderParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={WaybillFieldMeta.Shipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={WaybillFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay key={key} meta={WaybillFieldMeta.ExchangeRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay key={key} meta={WaybillFieldMeta.DocumentDistribution} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={WaybillFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={WaybillFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
