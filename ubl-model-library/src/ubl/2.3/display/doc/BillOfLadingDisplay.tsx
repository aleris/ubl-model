import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: BillOfLading | undefined
  meta: FieldMeta<T>
}

export default function BillOfLadingDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-BillOfLading">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={BillOfLadingFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={BillOfLadingFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={BillOfLadingFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={BillOfLadingFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={BillOfLadingFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={BillOfLadingFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={BillOfLadingFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={BillOfLadingFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={BillOfLadingFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={BillOfLadingFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={BillOfLadingFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={BillOfLadingFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={BillOfLadingFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={BillOfLadingFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={BillOfLadingFieldMeta.Note}
              />
            }
          />

          <CodeDisplay
            label="Document Status Code"
            value={value.DocumentStatusCode?.[0]}
            meta={BillOfLadingFieldMeta.DocumentStatusCode}
          />

          <IdentifierDisplay
            label="Shipping Order Identifier"
            value={value.ShippingOrderID?.[0]}
            meta={BillOfLadingFieldMeta.ShippingOrderID}
          />

          <IndicatorDisplay
            label="To Order Indicator"
            value={value.ToOrderIndicator?.[0]}
            meta={BillOfLadingFieldMeta.ToOrderIndicator}
          />

          <IndicatorDisplay
            label="Ad Valorem Indicator"
            value={value.AdValoremIndicator?.[0]}
            meta={BillOfLadingFieldMeta.AdValoremIndicator}
          />

          <AmountDisplay
            label="Declared Carriage Value"
            value={value.DeclaredCarriageValueAmount?.[0]}
            meta={BillOfLadingFieldMeta.DeclaredCarriageValueAmount}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-OtherInstruction"
            label="Other Instruction"
            items={value.OtherInstruction}
            meta={BillOfLadingFieldMeta.OtherInstruction} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Other Instruction"
                value={itemValue}
                meta={BillOfLadingFieldMeta.OtherInstruction}
              />
            }
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={BillOfLadingFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={BillOfLadingFieldMeta.CarrierParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={BillOfLadingFieldMeta.FreightForwarderParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={BillOfLadingFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={BillOfLadingFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={BillOfLadingFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ExchangeRate"
            label="Exchange Rate"
            items={value.ExchangeRate}
            meta={BillOfLadingFieldMeta.ExchangeRate} 
            itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
              <ExchangeRateDisplay
                key={key}
                label="Exchange Rate"
                value={itemValue}
                meta={BillOfLadingFieldMeta.ExchangeRate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentDistribution"
            label="Document Distribution"
            items={value.DocumentDistribution}
            meta={BillOfLadingFieldMeta.DocumentDistribution} 
            itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
              <DocumentDistributionDisplay
                key={key}
                label="Document Distribution"
                value={itemValue}
                meta={BillOfLadingFieldMeta.DocumentDistribution}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={BillOfLadingFieldMeta.Signature} 
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
