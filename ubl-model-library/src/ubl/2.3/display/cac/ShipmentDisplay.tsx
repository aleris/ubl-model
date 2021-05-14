import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Shipment
  meta: FieldMeta<T>
}

export default function ShipmentDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Shipment ubl-ShipmentType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Shipment ubl-UBLExtensions"
          meta={ShipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ShipmentFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Identifier ubl-ID"
          meta={ShipmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ShipmentFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Code ubl-ShippingPriorityLevelCode"
          meta={ShipmentFieldMeta.ShippingPriorityLevelCode} 
          value={value.ShippingPriorityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Shipping Priority Level Code"
              value={itemValue}
              meta={ShipmentFieldMeta.ShippingPriorityLevelCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Code ubl-HandlingCode"
          meta={ShipmentFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Handling Code"
              value={itemValue}
              meta={ShipmentFieldMeta.HandlingCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Shipment ubl-Text ubl-HandlingInstructions"
          meta={ShipmentFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Handling Instructions"
              value={itemValue}
              meta={ShipmentFieldMeta.HandlingInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Shipment ubl-Text ubl-Information"
          meta={ShipmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Information"
              value={itemValue}
              meta={ShipmentFieldMeta.Information}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Measure ubl-GrossWeightMeasure"
          meta={ShipmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Weight"
              value={itemValue}
              meta={ShipmentFieldMeta.GrossWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Measure ubl-NetWeightMeasure"
          meta={ShipmentFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Weight"
              value={itemValue}
              meta={ShipmentFieldMeta.NetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Measure ubl-NetNetWeightMeasure"
          meta={ShipmentFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Net Weight"
              value={itemValue}
              meta={ShipmentFieldMeta.NetNetWeightMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Measure ubl-GrossVolumeMeasure"
          meta={ShipmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Gross Volume"
              value={itemValue}
              meta={ShipmentFieldMeta.GrossVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Measure ubl-NetVolumeMeasure"
          meta={ShipmentFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay
              key={key}
              label="Net Volume"
              value={itemValue}
              meta={ShipmentFieldMeta.NetVolumeMeasure}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Quantity ubl-TotalGoodsItemQuantity"
          meta={ShipmentFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Goods Item Quantity"
              value={itemValue}
              meta={ShipmentFieldMeta.TotalGoodsItemQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Quantity ubl-TotalTransportHandlingUnitQuantity"
          meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity} 
          value={value.TotalTransportHandlingUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Transport Handling Unit Quantity"
              value={itemValue}
              meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Amount ubl-InsuranceValueAmount"
          meta={ShipmentFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Insurance Value"
              value={itemValue}
              meta={ShipmentFieldMeta.InsuranceValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Amount ubl-DeclaredCustomsValueAmount"
          meta={ShipmentFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Customs Value"
              value={itemValue}
              meta={ShipmentFieldMeta.DeclaredCustomsValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Amount ubl-DeclaredForCarriageValueAmount"
          meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared For Carriage Value"
              value={itemValue}
              meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Amount ubl-DeclaredStatisticsValueAmount"
          meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Declared Statistics Value"
              value={itemValue}
              meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Amount ubl-FreeOnBoardValueAmount"
          meta={ShipmentFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Free On Board Value"
              value={itemValue}
              meta={ShipmentFieldMeta.FreeOnBoardValueAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Shipment ubl-Text ubl-SpecialInstructions"
          meta={ShipmentFieldMeta.SpecialInstructions} 
          value={value.SpecialInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Special Instructions"
              value={itemValue}
              meta={ShipmentFieldMeta.SpecialInstructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Shipment ubl-Text ubl-DeliveryInstructions"
          meta={ShipmentFieldMeta.DeliveryInstructions} 
          value={value.DeliveryInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Delivery Instructions"
              value={itemValue}
              meta={ShipmentFieldMeta.DeliveryInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Indicator ubl-SplitConsignmentIndicator"
          meta={ShipmentFieldMeta.SplitConsignmentIndicator} 
          value={value.SplitConsignmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Split Consignment Indicator"
              value={itemValue}
              meta={ShipmentFieldMeta.SplitConsignmentIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Shipment ubl-Quantity ubl-ConsignmentQuantity"
          meta={ShipmentFieldMeta.ConsignmentQuantity} 
          value={value.ConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Consignment Quantity"
              value={itemValue}
              meta={ShipmentFieldMeta.ConsignmentQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Shipment ubl-Consignment"
          meta={ShipmentFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay
              key={key}
              label="Consignment"
              value={itemValue}
              meta={ShipmentFieldMeta.Consignment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Shipment ubl-GoodsItem"
          meta={ShipmentFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Goods Item"
              value={itemValue}
              meta={ShipmentFieldMeta.GoodsItem}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Shipment ubl-ShipmentStage"
          meta={ShipmentFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay
              key={key}
              label="Shipment Stage"
              value={itemValue}
              meta={ShipmentFieldMeta.ShipmentStage}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Delivery"
          meta={ShipmentFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay
              key={key}
              label="Delivery"
              value={itemValue}
              meta={ShipmentFieldMeta.Delivery}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Shipment ubl-TransportHandlingUnit"
          meta={ShipmentFieldMeta.TransportHandlingUnit} 
          value={value.TransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay
              key={key}
              label="Transport Handling Unit"
              value={itemValue}
              meta={ShipmentFieldMeta.TransportHandlingUnit}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Address ubl-ReturnAddress"
          meta={ShipmentFieldMeta.ReturnAddress} 
          value={value.ReturnAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Return Address"
              value={itemValue}
              meta={ShipmentFieldMeta.ReturnAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Address ubl-OriginAddress"
          meta={ShipmentFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Origin Address"
              value={itemValue}
              meta={ShipmentFieldMeta.OriginAddress}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Location ubl-FirstArrivalPortLocation"
          meta={ShipmentFieldMeta.FirstArrivalPortLocation} 
          value={value.FirstArrivalPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="First Arrival Port Location"
              value={itemValue}
              meta={ShipmentFieldMeta.FirstArrivalPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Location ubl-LastExitPortLocation"
          meta={ShipmentFieldMeta.LastExitPortLocation} 
          value={value.LastExitPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Last Exit Port Location"
              value={itemValue}
              meta={ShipmentFieldMeta.LastExitPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Shipment ubl-Country ubl-ExportCountry"
          meta={ShipmentFieldMeta.ExportCountry} 
          value={value.ExportCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay
              key={key}
              label="Export Country"
              value={itemValue}
              meta={ShipmentFieldMeta.ExportCountry}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Shipment ubl-AllowanceCharge ubl-FreightAllowanceCharge"
          meta={ShipmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
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
