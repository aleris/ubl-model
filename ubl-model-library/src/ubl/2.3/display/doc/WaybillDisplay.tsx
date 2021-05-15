import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: Waybill | undefined
  meta: FieldMeta<T>
}

export default function WaybillDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-doc ubl-Waybill">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={WaybillFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="UBL Version Identifier"
            value={value.UBLVersionID?.[0]}
            meta={WaybillFieldMeta.UBLVersionID}
          />

          <IdentifierDisplay
            label="Customization Identifier"
            value={value.CustomizationID?.[0]}
            meta={WaybillFieldMeta.CustomizationID}
          />

          <IdentifierDisplay
            label="Profile Identifier"
            value={value.ProfileID?.[0]}
            meta={WaybillFieldMeta.ProfileID}
          />

          <IdentifierDisplay
            label="Profile Execution Identifier"
            value={value.ProfileExecutionID?.[0]}
            meta={WaybillFieldMeta.ProfileExecutionID}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={WaybillFieldMeta.ID}
          />

          <IdentifierDisplay
            label="Carrier Assigned Identifier"
            value={value.CarrierAssignedID?.[0]}
            meta={WaybillFieldMeta.CarrierAssignedID}
          />

          <IdentifierDisplay
            label="UUID"
            value={value.UUID?.[0]}
            meta={WaybillFieldMeta.UUID}
          />

          <DateDisplay
            label="Issue Date"
            value={value.IssueDate?.[0]}
            meta={WaybillFieldMeta.IssueDate}
          />

          <TimeDisplay
            label="Issue Time"
            value={value.IssueTime?.[0]}
            meta={WaybillFieldMeta.IssueTime}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={WaybillFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={WaybillFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={WaybillFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-Note"
            label="Note"
            items={value.Note}
            meta={WaybillFieldMeta.Note} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Note"
                value={itemValue}
                meta={WaybillFieldMeta.Note}
              />
            }
          />

          <IdentifierDisplay
            label="Shipping Order Identifier"
            value={value.ShippingOrderID?.[0]}
            meta={WaybillFieldMeta.ShippingOrderID}
          />

          <IndicatorDisplay
            label="Ad Valorem Indicator"
            value={value.AdValoremIndicator?.[0]}
            meta={WaybillFieldMeta.AdValoremIndicator}
          />

          <AmountDisplay
            label="Declared Carriage Value"
            value={value.DeclaredCarriageValueAmount?.[0]}
            meta={WaybillFieldMeta.DeclaredCarriageValueAmount}
          />

          <ElementListDisplay
            className="ubl-doc ubl-Text ubl-OtherInstruction"
            label="Other Instruction"
            items={value.OtherInstruction}
            meta={WaybillFieldMeta.OtherInstruction} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Other Instruction"
                value={itemValue}
                meta={WaybillFieldMeta.OtherInstruction}
              />
            }
          />

          <PartyDisplay
            label="Consignor Party"
            value={value.ConsignorParty?.[0]}
            meta={WaybillFieldMeta.ConsignorParty}
          />

          <PartyDisplay
            label="Carrier Party"
            value={value.CarrierParty?.[0]}
            meta={WaybillFieldMeta.CarrierParty}
          />

          <PartyDisplay
            label="Freight Forwarder Party"
            value={value.FreightForwarderParty?.[0]}
            meta={WaybillFieldMeta.FreightForwarderParty}
          />

          <ShipmentDisplay
            label="Shipment"
            value={value.Shipment?.[0]}
            meta={WaybillFieldMeta.Shipment}
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={WaybillFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={WaybillFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-ExchangeRate"
            label="Exchange Rate"
            items={value.ExchangeRate}
            meta={WaybillFieldMeta.ExchangeRate} 
            itemDisplay={ (itemValue: ExchangeRate, key: string | number) =>
              <ExchangeRateDisplay
                key={key}
                label="Exchange Rate"
                value={itemValue}
                meta={WaybillFieldMeta.ExchangeRate}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-DocumentDistribution"
            label="Document Distribution"
            items={value.DocumentDistribution}
            meta={WaybillFieldMeta.DocumentDistribution} 
            itemDisplay={ (itemValue: DocumentDistribution, key: string | number) =>
              <DocumentDistributionDisplay
                key={key}
                label="Document Distribution"
                value={itemValue}
                meta={WaybillFieldMeta.DocumentDistribution}
              />
            }
          />

          <ElementListDisplay
            className="ubl-doc ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={WaybillFieldMeta.Signature} 
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
