import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Shipment
  meta: FieldMeta<T>
}

export default function ShipmentDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ShipmentFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ShipmentFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ShipmentFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ShippingPriorityLevelCode} 
          value={value.ShippingPriorityLevelCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ShipmentFieldMeta.ShippingPriorityLevelCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ShipmentFieldMeta.HandlingCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentFieldMeta.HandlingInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentFieldMeta.Information} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ShipmentFieldMeta.GrossWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ShipmentFieldMeta.NetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ShipmentFieldMeta.NetNetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ShipmentFieldMeta.GrossVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={ShipmentFieldMeta.NetVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ShipmentFieldMeta.TotalGoodsItemQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity} 
          value={value.TotalTransportHandlingUnitQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ShipmentFieldMeta.InsuranceValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ShipmentFieldMeta.DeclaredCustomsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ShipmentFieldMeta.FreeOnBoardValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.SpecialInstructions} 
          value={value.SpecialInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentFieldMeta.SpecialInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.DeliveryInstructions} 
          value={value.DeliveryInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentFieldMeta.DeliveryInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.SplitConsignmentIndicator} 
          value={value.SplitConsignmentIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ShipmentFieldMeta.SplitConsignmentIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ConsignmentQuantity} 
          value={value.ConsignmentQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ShipmentFieldMeta.ConsignmentQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.Consignment} 
          value={value.Consignment}
          itemDisplay={ (itemValue: Consignment, key: string | number) =>
            <ConsignmentDisplay key={key} meta={ShipmentFieldMeta.Consignment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={ShipmentFieldMeta.GoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ShipmentStage} 
          value={value.ShipmentStage}
          itemDisplay={ (itemValue: ShipmentStage, key: string | number) =>
            <ShipmentStageDisplay key={key} meta={ShipmentFieldMeta.ShipmentStage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={ShipmentFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.TransportHandlingUnit} 
          value={value.TransportHandlingUnit}
          itemDisplay={ (itemValue: TransportHandlingUnit, key: string | number) =>
            <TransportHandlingUnitDisplay key={key} meta={ShipmentFieldMeta.TransportHandlingUnit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ReturnAddress} 
          value={value.ReturnAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={ShipmentFieldMeta.ReturnAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={ShipmentFieldMeta.OriginAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.FirstArrivalPortLocation} 
          value={value.FirstArrivalPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentFieldMeta.FirstArrivalPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.LastExitPortLocation} 
          value={value.LastExitPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentFieldMeta.LastExitPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.ExportCountry} 
          value={value.ExportCountry}
          itemDisplay={ (itemValue: Country, key: string | number) =>
            <CountryDisplay key={key} meta={ShipmentFieldMeta.ExportCountry} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ShipmentFieldMeta.FreightAllowanceCharge} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
