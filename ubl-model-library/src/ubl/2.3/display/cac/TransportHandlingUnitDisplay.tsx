import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportHandlingUnit } from  '../../model/cac/TransportHandlingUnit'
import { TransportHandlingUnitFieldMeta } from  '../../meta/cac/TransportHandlingUnitMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import CustomsDeclarationDisplay from './CustomsDeclarationDisplay'
import { CustomsDeclaration } from '../../model/cac/CustomsDeclaration'
import DespatchLineDisplay from './DespatchLineDisplay'
import { DespatchLine } from '../../model/cac/DespatchLine'
import DimensionDisplay from './DimensionDisplay'
import { Dimension } from '../../model/cac/Dimension'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import GoodsItemDisplay from './GoodsItemDisplay'
import { GoodsItem } from '../../model/cac/GoodsItem'
import HazardousGoodsTransitDisplay from './HazardousGoodsTransitDisplay'
import { HazardousGoodsTransit } from '../../model/cac/HazardousGoodsTransit'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import PackageDisplay from './PackageDisplay'
import { Package } from '../../model/cac/Package'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import ReceiptLineDisplay from './ReceiptLineDisplay'
import { ReceiptLine } from '../../model/cac/ReceiptLine'
import ShipmentDisplay from './ShipmentDisplay'
import { Shipment } from '../../model/cac/Shipment'
import StatusDisplay from './StatusDisplay'
import { Status } from '../../model/cac/Status'
import TemperatureDisplay from './TemperatureDisplay'
import { Temperature } from '../../model/cac/Temperature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TransportEquipmentDisplay from './TransportEquipmentDisplay'
import { TransportEquipment } from '../../model/cac/TransportEquipment'
import TransportMeansDisplay from './TransportMeansDisplay'
import { TransportMeans } from '../../model/cac/TransportMeans'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TransportHandlingUnit | undefined
  meta: FieldMeta<T>
}

export default function TransportHandlingUnitDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TransportHandlingUnit">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TransportHandlingUnitFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TransportHandlingUnitFieldMeta.ID}
          />

          <CodeDisplay
            label="Transport Handling Unit Type Code"
            value={value.TransportHandlingUnitTypeCode?.[0]}
            meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode}
          />

          <CodeDisplay
            label="Handling Code"
            value={value.HandlingCode?.[0]}
            meta={TransportHandlingUnitFieldMeta.HandlingCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-HandlingInstructions"
            label="Handling Instructions"
            items={value.HandlingInstructions}
            meta={TransportHandlingUnitFieldMeta.HandlingInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Handling Instructions"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.HandlingInstructions}
              />
            }
          />

          <IndicatorDisplay
            label="Hazardous Risk Indicator"
            value={value.HazardousRiskIndicator?.[0]}
            meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator}
          />

          <QuantityDisplay
            label="Total Goods Item Quantity"
            value={value.TotalGoodsItemQuantity?.[0]}
            meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity}
          />

          <QuantityDisplay
            label="Total Package Quantity"
            value={value.TotalPackageQuantity?.[0]}
            meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DamageRemarks"
            label="Damage Remarks"
            items={value.DamageRemarks}
            meta={TransportHandlingUnitFieldMeta.DamageRemarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Damage Remarks"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.DamageRemarks}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-ShippingMarks"
            label="Shipping Marks"
            items={value.ShippingMarks}
            meta={TransportHandlingUnitFieldMeta.ShippingMarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Shipping Marks"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.ShippingMarks}
              />
            }
          />

          <IdentifierDisplay
            label="Trace Identifier"
            value={value.TraceID?.[0]}
            meta={TransportHandlingUnitFieldMeta.TraceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DespatchLine ubl-HandlingUnitDespatchLine"
            label="Handling Unit Despatch Line"
            items={value.HandlingUnitDespatchLine}
            meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine} 
            itemDisplay={ (itemValue: DespatchLine, key: string | number) =>
              <DespatchLineDisplay
                key={key}
                label="Handling Unit Despatch Line"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package ubl-ActualPackage"
            label="Actual Package"
            items={value.ActualPackage}
            meta={TransportHandlingUnitFieldMeta.ActualPackage} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Actual Package"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.ActualPackage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ReceiptLine ubl-ReceivedHandlingUnitReceiptLine"
            label="Received Handling Unit Receipt Line"
            items={value.ReceivedHandlingUnitReceiptLine}
            meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine} 
            itemDisplay={ (itemValue: ReceiptLine, key: string | number) =>
              <ReceiptLineDisplay
                key={key}
                label="Received Handling Unit Receipt Line"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEquipment"
            label="Transport Equipment"
            items={value.TransportEquipment}
            meta={TransportHandlingUnitFieldMeta.TransportEquipment} 
            itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
              <TransportEquipmentDisplay
                key={key}
                label="Transport Equipment"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.TransportEquipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportMeans"
            label="Transport Means"
            items={value.TransportMeans}
            meta={TransportHandlingUnitFieldMeta.TransportMeans} 
            itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
              <TransportMeansDisplay
                key={key}
                label="Transport Means"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.TransportMeans}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-HazardousGoodsTransit"
            label="Hazardous Goods Transit"
            items={value.HazardousGoodsTransit}
            meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit} 
            itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
              <HazardousGoodsTransitDisplay
                key={key}
                label="Hazardous Goods Transit"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Dimension ubl-MeasurementDimension"
            label="Measurement Dimension"
            items={value.MeasurementDimension}
            meta={TransportHandlingUnitFieldMeta.MeasurementDimension} 
            itemDisplay={ (itemValue: Dimension, key: string | number) =>
              <DimensionDisplay
                key={key}
                label="Measurement Dimension"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.MeasurementDimension}
              />
            }
          />

          <TemperatureDisplay
            label="Minimum Temperature"
            value={value.MinimumTemperature?.[0]}
            meta={TransportHandlingUnitFieldMeta.MinimumTemperature}
          />

          <TemperatureDisplay
            label="Maximum Temperature"
            value={value.MaximumTemperature?.[0]}
            meta={TransportHandlingUnitFieldMeta.MaximumTemperature}
          />

          <ElementListDisplay
            className="ubl-cac ubl-GoodsItem"
            label="Goods Item"
            items={value.GoodsItem}
            meta={TransportHandlingUnitFieldMeta.GoodsItem} 
            itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
              <GoodsItemDisplay
                key={key}
                label="Goods Item"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.GoodsItem}
              />
            }
          />

          <DimensionDisplay
            label="Floor Space Measurement Dimension"
            value={value.FloorSpaceMeasurementDimension?.[0]}
            meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension}
          />

          <DimensionDisplay
            label="Pallet Space Measurement Dimension"
            value={value.PalletSpaceMeasurementDimension?.[0]}
            meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference ubl-ShipmentDocumentReference"
            label="Shipment Document Reference"
            items={value.ShipmentDocumentReference}
            meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Shipment Document Reference"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Status"
            label="Status"
            items={value.Status}
            meta={TransportHandlingUnitFieldMeta.Status} 
            itemDisplay={ (itemValue: Status, key: string | number) =>
              <StatusDisplay
                key={key}
                label="Status"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.Status}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-CustomsDeclaration"
            label="Customs Declaration"
            items={value.CustomsDeclaration}
            meta={TransportHandlingUnitFieldMeta.CustomsDeclaration} 
            itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
              <CustomsDeclarationDisplay
                key={key}
                label="Customs Declaration"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.CustomsDeclaration}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Shipment ubl-ReferencedShipment"
            label="Referenced Shipment"
            items={value.ReferencedShipment}
            meta={TransportHandlingUnitFieldMeta.ReferencedShipment} 
            itemDisplay={ (itemValue: Shipment, key: string | number) =>
              <ShipmentDisplay
                key={key}
                label="Referenced Shipment"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.ReferencedShipment}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Package"
            label="Package"
            items={value.Package}
            meta={TransportHandlingUnitFieldMeta.Package} 
            itemDisplay={ (itemValue: Package, key: string | number) =>
              <PackageDisplay
                key={key}
                label="Package"
                value={itemValue}
                meta={TransportHandlingUnitFieldMeta.Package}
              />
            }
          />
        </div>
    </div>
  )
}
