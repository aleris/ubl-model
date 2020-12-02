import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: TransportHandlingUnit
  meta: FieldMeta<T>
}

export default function TransportHandlingUnitDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TransportHandlingUnitFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportHandlingUnitFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode} 
          value={value.TransportHandlingUnitTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.HandlingCode} 
          value={value.HandlingCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TransportHandlingUnitFieldMeta.HandlingCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.HandlingInstructions} 
          value={value.HandlingInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportHandlingUnitFieldMeta.HandlingInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator} 
          value={value.HazardousRiskIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity} 
          value={value.TotalGoodsItemQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity} 
          value={value.TotalPackageQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.DamageRemarks} 
          value={value.DamageRemarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportHandlingUnitFieldMeta.DamageRemarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ShippingMarks} 
          value={value.ShippingMarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TransportHandlingUnitFieldMeta.ShippingMarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TraceID} 
          value={value.TraceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TransportHandlingUnitFieldMeta.TraceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine} 
          value={value.HandlingUnitDespatchLine}
          itemDisplay={ (itemValue: DespatchLine, key: string | number) =>
            <DespatchLineDisplay key={key} meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ActualPackage} 
          value={value.ActualPackage}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={TransportHandlingUnitFieldMeta.ActualPackage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine} 
          value={value.ReceivedHandlingUnitReceiptLine}
          itemDisplay={ (itemValue: ReceiptLine, key: string | number) =>
            <ReceiptLineDisplay key={key} meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TransportEquipment} 
          value={value.TransportEquipment}
          itemDisplay={ (itemValue: TransportEquipment, key: string | number) =>
            <TransportEquipmentDisplay key={key} meta={TransportHandlingUnitFieldMeta.TransportEquipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay key={key} meta={TransportHandlingUnitFieldMeta.TransportMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit} 
          value={value.HazardousGoodsTransit}
          itemDisplay={ (itemValue: HazardousGoodsTransit, key: string | number) =>
            <HazardousGoodsTransitDisplay key={key} meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.MeasurementDimension} 
          value={value.MeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportHandlingUnitFieldMeta.MeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.MinimumTemperature} 
          value={value.MinimumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={TransportHandlingUnitFieldMeta.MinimumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.MaximumTemperature} 
          value={value.MaximumTemperature}
          itemDisplay={ (itemValue: Temperature, key: string | number) =>
            <TemperatureDisplay key={key} meta={TransportHandlingUnitFieldMeta.MaximumTemperature} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.GoodsItem} 
          value={value.GoodsItem}
          itemDisplay={ (itemValue: GoodsItem, key: string | number) =>
            <GoodsItemDisplay key={key} meta={TransportHandlingUnitFieldMeta.GoodsItem} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension} 
          value={value.FloorSpaceMeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension} 
          value={value.PalletSpaceMeasurementDimension}
          itemDisplay={ (itemValue: Dimension, key: string | number) =>
            <DimensionDisplay key={key} meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference} 
          value={value.ShipmentDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.Status} 
          value={value.Status}
          itemDisplay={ (itemValue: Status, key: string | number) =>
            <StatusDisplay key={key} meta={TransportHandlingUnitFieldMeta.Status} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.CustomsDeclaration} 
          value={value.CustomsDeclaration}
          itemDisplay={ (itemValue: CustomsDeclaration, key: string | number) =>
            <CustomsDeclarationDisplay key={key} meta={TransportHandlingUnitFieldMeta.CustomsDeclaration} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.ReferencedShipment} 
          value={value.ReferencedShipment}
          itemDisplay={ (itemValue: Shipment, key: string | number) =>
            <ShipmentDisplay key={key} meta={TransportHandlingUnitFieldMeta.ReferencedShipment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TransportHandlingUnitFieldMeta.Package} 
          value={value.Package}
          itemDisplay={ (itemValue: Package, key: string | number) =>
            <PackageDisplay key={key} meta={TransportHandlingUnitFieldMeta.Package} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
