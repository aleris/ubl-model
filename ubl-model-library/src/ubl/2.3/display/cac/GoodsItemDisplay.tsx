import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItem } from  '../../model/cac/GoodsItem'
import { GoodsItemFieldMeta } from  '../../meta/cac/GoodsItemMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DeliveryDisplay from './DeliveryDisplay'
import { Delivery } from '../../model/cac/Delivery'
import DespatchDisplay from './DespatchDisplay'
import { Despatch } from '../../model/cac/Despatch'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsItemContainerDisplay from './GoodsItemContainerDisplay'
import { GoodsItemContainer } from '../../model/cac/GoodsItemContainer'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import InvoiceLineDisplay from './InvoiceLineDisplay'
import { InvoiceLine } from '../../model/cac/InvoiceLine'
import ItemDisplay from './ItemDisplay'
import { Item } from '../../model/cac/Item'
import MeasureDisplay from '../cbc/MeasureDisplay'
import { Measure } from '../../model/cbc/Measure'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import PickupDisplay from './PickupDisplay'
import { Pickup } from '../../model/cac/Pickup'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: GoodsItem
  meta: FieldMeta<T>
}

export default function GoodsItemDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={GoodsItemFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={GoodsItemFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.SequenceNumberID} 
          value={value.SequenceNumberID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemFieldMeta.SequenceNumberID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={GoodsItemFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={GoodsItemFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount} 
          value={value.DeclaredCustomsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount} 
          value={value.DeclaredForCarriageValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount} 
          value={value.DeclaredStatisticsValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.FreeOnBoardValueAmount} 
          value={value.FreeOnBoardValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.FreeOnBoardValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.InsuranceValueAmount} 
          value={value.InsuranceValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.InsuranceValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ValueAmount} 
          value={value.ValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={GoodsItemFieldMeta.ValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.GrossWeightMeasure} 
          value={value.GrossWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.GrossWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.NetWeightMeasure} 
          value={value.NetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.NetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.NetNetWeightMeasure} 
          value={value.NetNetWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.NetNetWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ChargeableWeightMeasure} 
          value={value.ChargeableWeightMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.ChargeableWeightMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.GrossVolumeMeasure} 
          value={value.GrossVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.GrossVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.NetVolumeMeasure} 
          value={value.NetVolumeMeasure}
          itemDisplay={ (itemValue: Measure, key: string | number) =>
            <MeasureDisplay key={key} meta={GoodsItemFieldMeta.NetVolumeMeasure} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Quantity} 
          value={value.Quantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={GoodsItemFieldMeta.Quantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.PreferenceCriterionCode} 
          value={value.PreferenceCriterionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GoodsItemFieldMeta.PreferenceCriterionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.RequiredCustomsID} 
          value={value.RequiredCustomsID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemFieldMeta.RequiredCustomsID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.CustomsStatusCode} 
          value={value.CustomsStatusCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={GoodsItemFieldMeta.CustomsStatusCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.CustomsTariffQuantity} 
          value={value.CustomsTariffQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={GoodsItemFieldMeta.CustomsTariffQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator} 
          value={value.CustomsImportClassifiedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ChargeableQuantity} 
          value={value.ChargeableQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={GoodsItemFieldMeta.ChargeableQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ReturnableQuantity} 
          value={value.ReturnableQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={GoodsItemFieldMeta.ReturnableQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={GoodsItemFieldMeta.TraceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Item} 
          value={value.Item}
          itemDisplay={ (itemValue: Item, key: string | number) =>
            <ItemDisplay key={key} meta={GoodsItemFieldMeta.Item} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.GoodsItemContainer} 
          value={value.GoodsItemContainer}
          itemDisplay={ (itemValue: GoodsItemContainer, key: string | number) =>
            <GoodsItemContainerDisplay key={key} meta={GoodsItemFieldMeta.GoodsItemContainer} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={GoodsItemFieldMeta.FreightAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.InvoiceLine} 
          value={value.InvoiceLine}
          itemDisplay={ (itemValue: InvoiceLine, key: string | number) =>
            <InvoiceLineDisplay key={key} meta={GoodsItemFieldMeta.InvoiceLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Temperature} 
          value={value.Temperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={GoodsItemFieldMeta.Temperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ContainedGoodsItem} 
          value={value.ContainedGoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={GoodsItemFieldMeta.ContainedGoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.OriginAddress} 
          value={value.OriginAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={GoodsItemFieldMeta.OriginAddress} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Delivery} 
          value={value.Delivery}
          itemDisplay={ (itemValue: Delivery, key: string | number) =>
            <DeliveryDisplay key={key} meta={GoodsItemFieldMeta.Delivery} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Pickup} 
          value={value.Pickup}
          itemDisplay={ (itemValue: Pickup, key: string | number) =>
            <PickupDisplay key={key} meta={GoodsItemFieldMeta.Pickup} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.Despatch} 
          value={value.Despatch}
          itemDisplay={ (itemValue: Despatch, key: string | number) =>
            <DespatchDisplay key={key} meta={GoodsItemFieldMeta.Despatch} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={GoodsItemFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ContainingPackage} 
          value={value.ContainingPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={GoodsItemFieldMeta.ContainingPackage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={GoodsItemFieldMeta.ShipmentDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={GoodsItemFieldMeta.MinimumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={GoodsItemFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={GoodsItemFieldMeta.MaximumTemperature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
