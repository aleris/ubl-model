import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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

type Props<T> = {
  label: string
  value: BillOfLading
  meta: FieldMeta<T>
}

export default function BillOfLadingDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-doc ubl-BillOfLading ubl-BillOfLadingType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-BillOfLading ubl-UBLExtensions"
          meta={BillOfLadingFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={BillOfLadingFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-UBLVersionID"
          meta={BillOfLadingFieldMeta.UBLVersionID} 
          value={value.UBLVersionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UBL Version Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.UBLVersionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-CustomizationID"
          meta={BillOfLadingFieldMeta.CustomizationID} 
          value={value.CustomizationID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Customization Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.CustomizationID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-ProfileID"
          meta={BillOfLadingFieldMeta.ProfileID} 
          value={value.ProfileID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ProfileID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-ProfileExecutionID"
          meta={BillOfLadingFieldMeta.ProfileExecutionID} 
          value={value.ProfileExecutionID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Profile Execution Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ProfileExecutionID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-ID"
          meta={BillOfLadingFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-CarrierAssignedID"
          meta={BillOfLadingFieldMeta.CarrierAssignedID} 
          value={value.CarrierAssignedID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Carrier Assigned Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.CarrierAssignedID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-UUID"
          meta={BillOfLadingFieldMeta.UUID} 
          value={value.UUID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="UUID"
              value={itemValue}
              meta={BillOfLadingFieldMeta.UUID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Date ubl-IssueDate"
          meta={BillOfLadingFieldMeta.IssueDate} 
          value={value.IssueDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Issue Date"
              value={itemValue}
              meta={BillOfLadingFieldMeta.IssueDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Time ubl-IssueTime"
          meta={BillOfLadingFieldMeta.IssueTime} 
          value={value.IssueTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Issue Time"
              value={itemValue}
              meta={BillOfLadingFieldMeta.IssueTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Text ubl-Name"
          meta={BillOfLadingFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={BillOfLadingFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Text ubl-Description"
          meta={BillOfLadingFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={BillOfLadingFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Text ubl-Note"
          meta={BillOfLadingFieldMeta.Note} 
          value={value.Note}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Note"
              value={itemValue}
              meta={BillOfLadingFieldMeta.Note}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Code ubl-DocumentStatusCode"
          meta={BillOfLadingFieldMeta.DocumentStatusCode} 
          value={value.DocumentStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Document Status Code"
              value={itemValue}
              meta={BillOfLadingFieldMeta.DocumentStatusCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Identifier ubl-ShippingOrderID"
          meta={BillOfLadingFieldMeta.ShippingOrderID} 
          value={value.ShippingOrderID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Shipping Order Identifier"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ShippingOrderID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Indicator ubl-ToOrderIndicator"
          meta={BillOfLadingFieldMeta.ToOrderIndicator} 
          value={value.ToOrderIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="To Order Indicator"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ToOrderIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Indicator ubl-AdValoremIndicator"
          meta={BillOfLadingFieldMeta.AdValoremIndicator} 
          value={value.AdValoremIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Ad Valorem Indicator"
              value={itemValue}
              meta={BillOfLadingFieldMeta.AdValoremIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Amount ubl-DeclaredCarriageValueAmount"
          meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount} 
          value={value.DeclaredCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Carriage Value"
              value={itemValue}
              meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-BillOfLading ubl-Text ubl-OtherInstruction"
          meta={BillOfLadingFieldMeta.OtherInstruction} 
          value={value.OtherInstruction}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Other Instruction"
              value={itemValue}
              meta={BillOfLadingFieldMeta.OtherInstruction}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillOfLading ubl-Party ubl-ConsignorParty"
          meta={BillOfLadingFieldMeta.ConsignorParty} 
          value={value.ConsignorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Consignor Party"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ConsignorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillOfLading ubl-Party ubl-CarrierParty"
          meta={BillOfLadingFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={BillOfLadingFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillOfLading ubl-Party ubl-FreightForwarderParty"
          meta={BillOfLadingFieldMeta.FreightForwarderParty} 
          value={value.FreightForwarderParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Freight Forwarder Party"
              value={itemValue}
              meta={BillOfLadingFieldMeta.FreightForwarderParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-BillOfLading ubl-Shipment"
          meta={BillOfLadingFieldMeta.Shipment} 
          value={value.Shipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Shipment"
              value={itemValue}
              meta={BillOfLadingFieldMeta.Shipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BillOfLading ubl-DocumentReference"
          meta={BillOfLadingFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={BillOfLadingFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BillOfLading ubl-ExchangeRate"
          meta={BillOfLadingFieldMeta.ExchangeRate} 
          value={value.ExchangeRate}
          itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
            <ExchangeRateDisplay
              key={key}
              label="Exchange Rate"
              value={itemValue}
              meta={BillOfLadingFieldMeta.ExchangeRate}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BillOfLading ubl-DocumentDistribution"
          meta={BillOfLadingFieldMeta.DocumentDistribution} 
          value={value.DocumentDistribution}
          itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
            <DocumentDistributionDisplay
              key={key}
              label="Document Distribution"
              value={itemValue}
              meta={BillOfLadingFieldMeta.DocumentDistribution}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-BillOfLading ubl-Signature"
          meta={BillOfLadingFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay
              key={key}
              label="Signature"
              value={itemValue}
              meta={BillOfLadingFieldMeta.Signature}
            />
          }
        />
        </div>
    </div>
  )
}
