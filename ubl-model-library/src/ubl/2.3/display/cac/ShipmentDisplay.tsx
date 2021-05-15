import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Shipment } from  '../../model/cac/Shipment'
import { ShipmentFieldMeta } from  '../../meta/cac/ShipmentMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import ConsignmentDisplay from './ConsignmentDisplay'
import { Consignment } from '../../model/cac/Consignment'
import CountryDisplay from './CountryDisplay'
import { Country } from '../../model/cac/Country'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ShipmentStageDisplay from './ShipmentStageDisplay'
import { ShipmentStage } from '../../model/cac/ShipmentStage'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TransportHandlingUnitDisplay from './TransportHandlingUnitDisplay'
import { TransportHandlingUnit } from '../../model/cac/TransportHandlingUnit'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Shipment | undefined
  meta: FieldMeta<T>
}

export default function ShipmentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Shipment">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ShipmentFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ShipmentFieldMeta.ID}
          />

          <CodeDisplay
            label="Shipping Priority Level Code"
            value={value.ShippingPriorityLevelCode?.[0]}
            meta={ShipmentFieldMeta.ShippingPriorityLevelCode}
          />

          <CodeDisplay
            label="Handling Code"
            value={value.HandlingCode?.[0]}
            meta={ShipmentFieldMeta.HandlingCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-HandlingInstructions"
            label="Handling Instructions"
            items={value.HandlingInstructions}
            meta={ShipmentFieldMeta.HandlingInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Handling Instructions"
                value={itemValue}
                meta={ShipmentFieldMeta.HandlingInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Information"
            label="Information"
            items={value.Information}
            meta={ShipmentFieldMeta.Information} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Information"
                value={itemValue}
                meta={ShipmentFieldMeta.Information}
              />
            }
          />

          <MeasureDisplay
            label="Gross Weight"
            value={value.GrossWeightMeasure?.[0]}
            meta={ShipmentFieldMeta.GrossWeightMeasure}
          />

          <MeasureDisplay
            label="Net Weight"
            value={value.NetWeightMeasure?.[0]}
            meta={ShipmentFieldMeta.NetWeightMeasure}
          />

          <MeasureDisplay
            label="Net Net Weight"
            value={value.NetNetWeightMeasure?.[0]}
            meta={ShipmentFieldMeta.NetNetWeightMeasure}
          />

          <MeasureDisplay
            label="Gross Volume"
            value={value.GrossVolumeMeasure?.[0]}
            meta={ShipmentFieldMeta.GrossVolumeMeasure}
          />

          <MeasureDisplay
            label="Net Volume"
            value={value.NetVolumeMeasure?.[0]}
            meta={ShipmentFieldMeta.NetVolumeMeasure}
          />

          <QuantityDisplay
            label="Total Goods Item Quantity"
            value={value.TotalGoodsItemQuantity?.[0]}
            meta={ShipmentFieldMeta.TotalGoodsItemQuantity}
          />

          <QuantityDisplay
            label="Total Transport Handling Unit Quantity"
            value={value.TotalTransportHandlingUnitQuantity?.[0]}
            meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity}
          />

          <AmountDisplay
            label="Insurance Value"
            value={value.InsuranceValueAmount?.[0]}
            meta={ShipmentFieldMeta.InsuranceValueAmount}
          />

          <AmountDisplay
            label="Declared Customs Value"
            value={value.DeclaredCustomsValueAmount?.[0]}
            meta={ShipmentFieldMeta.DeclaredCustomsValueAmount}
          />

          <AmountDisplay
            label="Declared For Carriage Value"
            value={value.DeclaredForCarriageValueAmount?.[0]}
            meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount}
          />

          <AmountDisplay
            label="Declared Statistics Value"
            value={value.DeclaredStatisticsValueAmount?.[0]}
            meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount}
          />

          <AmountDisplay
            label="Free On Board Value"
            value={value.FreeOnBoardValueAmount?.[0]}
            meta={ShipmentFieldMeta.FreeOnBoardValueAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-SpecialInstructions"
            label="Special Instructions"
            items={value.SpecialInstructions}
            meta={ShipmentFieldMeta.SpecialInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Special Instructions"
                value={itemValue}
                meta={ShipmentFieldMeta.SpecialInstructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DeliveryInstructions"
            label="Delivery Instructions"
            items={value.DeliveryInstructions}
            meta={ShipmentFieldMeta.DeliveryInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Delivery Instructions"
                value={itemValue}
                meta={ShipmentFieldMeta.DeliveryInstructions}
              />
            }
          />

          <IndicatorDisplay
            label="Split Consignment Indicator"
            value={value.SplitConsignmentIndicator?.[0]}
            meta={ShipmentFieldMeta.SplitConsignmentIndicator}
          />

          <QuantityDisplay
            label="Consignment Quantity"
            value={value.ConsignmentQuantity?.[0]}
            meta={ShipmentFieldMeta.ConsignmentQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Consignment"
            label="Consignment"
            items={value.Consignment}
            meta={ShipmentFieldMeta.Consignment} 
            itemDisplay={ (itemValue: Consignment, key: string | number) =>
              <ConsignmentDisplay
                key={key}
                label="Consignment"
                value={itemValue}
                meta={ShipmentFieldMeta.Consignment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItem"
            label="Goods Item"
            items={value.GoodsItem}
            meta={ShipmentFieldMeta.GoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Goods Item"
                value={itemValue}
                meta={ShipmentFieldMeta.GoodsItem}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ShipmentStage"
            label="Shipment Stage"
            items={value.ShipmentStage}
            meta={ShipmentFieldMeta.ShipmentStage} 
            itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
              <ShipmentStageDisplay
                key={key}
                label="Shipment Stage"
                value={itemValue}
                meta={ShipmentFieldMeta.ShipmentStage}
              />
            }
          />

          <DeliveryDisplay
            label="Delivery"
            value={value.Delivery?.[0]}
            meta={ShipmentFieldMeta.Delivery}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportHandlingUnit"
            label="Transport Handling Unit"
            items={value.TransportHandlingUnit}
            meta={ShipmentFieldMeta.TransportHandlingUnit} 
            itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
              <TransportHandlingUnitDisplay
                key={key}
                label="Transport Handling Unit"
                value={itemValue}
                meta={ShipmentFieldMeta.TransportHandlingUnit}
              />
            }
          />

          <AddressDisplay
            label="Return Address"
            value={value.ReturnAddress?.[0]}
            meta={ShipmentFieldMeta.ReturnAddress}
          />

          <AddressDisplay
            label="Origin Address"
            value={value.OriginAddress?.[0]}
            meta={ShipmentFieldMeta.OriginAddress}
          />

          <LocationDisplay
            label="First Arrival Port Location"
            value={value.FirstArrivalPortLocation?.[0]}
            meta={ShipmentFieldMeta.FirstArrivalPortLocation}
          />

          <LocationDisplay
            label="Last Exit Port Location"
            value={value.LastExitPortLocation?.[0]}
            meta={ShipmentFieldMeta.LastExitPortLocation}
          />

          <CountryDisplay
            label="Export Country"
            value={value.ExportCountry?.[0]}
            meta={ShipmentFieldMeta.ExportCountry}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-FreightAllowanceCharge"
            label="Freight Allowance Charge"
            items={value.FreightAllowanceCharge}
            meta={ShipmentFieldMeta.FreightAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Freight Allowance Charge"
                value={itemValue}
                meta={ShipmentFieldMeta.FreightAllowanceCharge}
              />
            }
          />
        </div>
    </div>
  )
}
