import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: Waybill
  meta: FieldMeta<T>
}

export default function WaybillDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-Waybill ubl-WaybillType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Waybill ubl-UBLExtensions"
          meta={WaybillFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={WaybillFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-UBLVersionID"
          meta={WaybillFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-CustomizationID"
          meta={WaybillFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-ProfileID"
          meta={WaybillFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-ProfileExecutionID"
          meta={WaybillFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-ID"
          meta={WaybillFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-CarrierAssignedID"
          meta={WaybillFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Carrier Assigned Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.CarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-UUID"
          meta={WaybillFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={WaybillFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Date ubl-IssueDate"
          meta={WaybillFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={WaybillFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Time ubl-IssueTime"
          meta={WaybillFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={WaybillFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Text ubl-Name"
          meta={WaybillFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={WaybillFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Waybill ubl-Text ubl-Description"
          meta={WaybillFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={WaybillFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Waybill ubl-Text ubl-Note"
          meta={WaybillFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={WaybillFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Identifier ubl-ShippingOrderID"
          meta={WaybillFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Shipping Order Identifier"
              value={itemValue}
              meta={WaybillFieldMeta.ShippingOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Indicator ubl-AdValoremIndicator"
          meta={WaybillFieldMeta.AdValoremIndicator} 
          value={value.AdValoremIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Ad Valorem Indicator"
              value={itemValue}
              meta={WaybillFieldMeta.AdValoremIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Waybill ubl-Amount ubl-DeclaredCarriageValueAmount"
          meta={WaybillFieldMeta.DeclaredCarriageValueAmount} 
          value={value.DeclaredCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Carriage Value"
              value={itemValue}
              meta={WaybillFieldMeta.DeclaredCarriageValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Waybill ubl-Text ubl-OtherInstruction"
          meta={WaybillFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Other Instruction"
              value={itemValue}
              meta={WaybillFieldMeta.OtherInstruction}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Waybill ubl-Party ubl-ConsignorParty"
          meta={WaybillFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignor Party"
              value={itemValue}
              meta={WaybillFieldMeta.ConsignorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Waybill ubl-Party ubl-CarrierParty"
          meta={WaybillFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={WaybillFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Waybill ubl-Party ubl-FreightForwarderParty"
          meta={WaybillFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={WaybillFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Waybill ubl-Shipment"
          meta={WaybillFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={WaybillFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Waybill ubl-DocumentReference"
          meta={WaybillFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={WaybillFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Waybill ubl-ExchangeRate"
          meta={WaybillFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={WaybillFieldMeta.ExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Waybill ubl-DocumentDistribution"
          meta={WaybillFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay
              key={key}
              label="Document Distribution"
              value={itemValue}
              meta={WaybillFieldMeta.DocumentDistribution}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Waybill ubl-Signature"
          meta={WaybillFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={WaybillFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}
