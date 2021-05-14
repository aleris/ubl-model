import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TransportHandlingUnit
  meta: FieldMeta<T>
}

export default function TransportHandlingUnitDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TransportHandlingUnit ubl-TransportHandlingUnitType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TransportHandlingUnit ubl-UBLExtensions"
          meta={TransportHandlingUnitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Identifier ubl-ID"
          meta={TransportHandlingUnitFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Code ubl-TransportHandlingUnitTypeCode"
          meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode} 
          value={value.TransportHandlingUnitTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Handling Unit Type Code"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Code ubl-HandlingCode"
          meta={TransportHandlingUnitFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Handling Code"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.HandlingCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Text ubl-HandlingInstructions"
          meta={TransportHandlingUnitFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Handling Instructions"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.HandlingInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Indicator ubl-HazardousRiskIndicator"
          meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Hazardous Risk Indicator"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Quantity ubl-TotalGoodsItemQuantity"
          meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Goods Item Quantity"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Quantity ubl-TotalPackageQuantity"
          meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity} 
          value={value.TotalPackageQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Total Package Quantity"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Text ubl-DamageRemarks"
          meta={TransportHandlingUnitFieldMeta.DamageRemarks} 
          value={value.DamageRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Damage Remarks"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.DamageRemarks}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Text ubl-ShippingMarks"
          meta={TransportHandlingUnitFieldMeta.ShippingMarks} 
          value={value.ShippingMarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Shipping Marks"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ShippingMarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TransportHandlingUnit ubl-Identifier ubl-TraceID"
          meta={TransportHandlingUnitFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Trace Identifier"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TraceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-DespatchLine ubl-HandlingUnitDespatchLine"
          meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine} 
          value={value.HandlingUnitDespatchLine}
          itemDisplay={ (itemValue: DespatchLine, key: string | number) =>
            <DespatchLineDisplay
              key={key}
              label="Handling Unit Despatch Line"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Package ubl-ActualPackage"
          meta={TransportHandlingUnitFieldMeta.ActualPackage} 
          value={value.ActualPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay
              key={key}
              label="Actual Package"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ActualPackage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-ReceiptLine ubl-ReceivedHandlingUnitReceiptLine"
          meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine} 
          value={value.ReceivedHandlingUnitReceiptLine}
          itemDisplay={ (itemValue: ReceiptLine, key: string | number) =>
            <ReceiptLineDisplay
              key={key}
              label="Received Handling Unit Receipt Line"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-TransportEquipment"
          meta={TransportHandlingUnitFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay
              key={key}
              label="Transport Equipment"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TransportEquipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-TransportMeans"
          meta={TransportHandlingUnitFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay
              key={key}
              label="Transport Means"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.TransportMeans}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-HazardousGoodsTransit"
          meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay
              key={key}
              label="Hazardous Goods Transit"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Dimension ubl-MeasurementDimension"
          meta={TransportHandlingUnitFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Measurement Dimension"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.MeasurementDimension}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Temperature ubl-MinimumTemperature"
          meta={TransportHandlingUnitFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Minimum Temperature"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.MinimumTemperature}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Temperature ubl-MaximumTemperature"
          meta={TransportHandlingUnitFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay
              key={key}
              label="Maximum Temperature"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.MaximumTemperature}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-GoodsItem"
          meta={TransportHandlingUnitFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay
              key={key}
              label="Goods Item"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.GoodsItem}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Dimension ubl-FloorSpaceMeasurementDimension"
          meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension} 
          value={value.FloorSpaceMeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Floor Space Measurement Dimension"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Dimension ubl-PalletSpaceMeasurementDimension"
          meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension} 
          value={value.PalletSpaceMeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay
              key={key}
              label="Pallet Space Measurement Dimension"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-DocumentReference ubl-ShipmentDocumentReference"
          meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Shipment Document Reference"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Status"
          meta={TransportHandlingUnitFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay
              key={key}
              label="Status"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.Status}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-CustomsDeclaration"
          meta={TransportHandlingUnitFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay
              key={key}
              label="Customs Declaration"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.CustomsDeclaration}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Shipment ubl-ReferencedShipment"
          meta={TransportHandlingUnitFieldMeta.ReferencedShipment} 
          value={value.ReferencedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay
              key={key}
              label="Referenced Shipment"
              value={itemValue}
              meta={TransportHandlingUnitFieldMeta.ReferencedShipment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TransportHandlingUnit ubl-Package"
          meta={TransportHandlingUnitFieldMeta.Package} 
          value={value.Package}
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
