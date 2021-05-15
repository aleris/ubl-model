import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: ForwardingInstructions | undefined
  meta: FieldMeta<T>
}

export default function ForwardingInstructionsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-ForwardingInstructions">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ForwardingInstructionsFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={ForwardingInstructionsFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={ForwardingInstructionsFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={ForwardingInstructionsFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={ForwardingInstructionsFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ForwardingInstructionsFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={ForwardingInstructionsFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={ForwardingInstructionsFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={ForwardingInstructionsFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={ForwardingInstructionsFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={ForwardingInstructionsFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ForwardingInstructionsFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={ForwardingInstructionsFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={ForwardingInstructionsFieldMeta.DocumentStatusCode}
          />

          <IdentifierDisplay
            label="Shipping Order Identifier"
            value={value.ShippingOrderID?.[0]}
            meta={ForwardingInstructionsFieldMeta.ShippingOrderID}
          />

          <IndicatorDisplay
            label="To Order Indicator"
            value={value.ToOrderIndicator?.[0]}
            meta={ForwardingInstructionsFieldMeta.ToOrderIndicator}
          />

          <IndicatorDisplay
            label="Ad Valorem Indicator"
            value={value.AdValoremIndicator?.[0]}
            meta={ForwardingInstructionsFieldMeta.AdValoremIndicator}
          />

          <AmountDisplay
            label="Declared Carriage Value"
            value={value.DeclaredCarriageValueAmount?.[0]}
            meta={ForwardingInstructionsFieldMeta.DeclaredCarriageValueAmount}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-OtherInstruction"
            label="Other Instruction"
            items={value.OtherInstruction}
            meta={ForwardingInstructionsFieldMeta.OtherInstruction} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Other Instruction"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.OtherInstruction}
              />
            }
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={ForwardingInstructionsFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={ForwardingInstructionsFieldMeta.CarrierParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={ForwardingInstructionsFieldMeta.FreightForwarderParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={ForwardingInstructionsFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={ForwardingInstructionsFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ExchangeRate"
            label="Exchange Rate"
            items={value.ExchangeRate}
            meta={ForwardingInstructionsFieldMeta.ExchangeRate} 
            itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
              <ExchangeRateDisplay
                key={key}
                label="Exchange Rate"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.ExchangeRate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentDistribution"
            label="Document Distribution"
            items={value.DocumentDistribution}
            meta={ForwardingInstructionsFieldMeta.DocumentDistribution} 
            itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
              <DocumentDistributionDisplay
                key={key}
                label="Document Distribution"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.DocumentDistribution}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={ForwardingInstructionsFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={ForwardingInstructionsFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
