import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ConsumptionCorrection } from  '../../model/cac/ConsumptionCorrection'
import { ConsumptionCorrectionFieldMeta } from  '../../meta/cac/ConsumptionCorrectionMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ConsumptionCorrection
  meta: FieldMeta<T>
}

export default function ConsumptionCorrectionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ConsumptionCorrection ubl-ConsumptionCorrectionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ConsumptionCorrection ubl-UBLExtensions"
          meta={ConsumptionCorrectionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Text ubl-CorrectionType"
          meta={ConsumptionCorrectionFieldMeta.CorrectionType} 
          value={value.CorrectionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Correction Type"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.CorrectionType}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Code ubl-CorrectionTypeCode"
          meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode} 
          value={value.CorrectionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Correction Type Code"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Text ubl-MeterNumber"
          meta={ConsumptionCorrectionFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Meter Number"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.MeterNumber}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-GasPressureQuantity"
          meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity} 
          value={value.GasPressureQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Gas Pressure"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-ActualTemperatureReductionQuantity"
          meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity} 
          value={value.ActualTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Actual Temperature Reduction"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-NormalTemperatureReductionQuantity"
          meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity} 
          value={value.NormalTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Normal Temperature Reduction"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-DifferenceTemperatureReductionQuantity"
          meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity} 
          value={value.DifferenceTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Difference Temperature Reduction"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Text ubl-Description"
          meta={ConsumptionCorrectionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Amount ubl-CorrectionUnitAmount"
          meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount} 
          value={value.CorrectionUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Correction Unit Amount"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-ConsumptionEnergyQuantity"
          meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity} 
          value={value.ConsumptionEnergyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Consumption Energy"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Quantity ubl-ConsumptionWaterQuantity"
          meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity} 
          value={value.ConsumptionWaterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Consumption Water"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ConsumptionCorrection ubl-Amount ubl-CorrectionAmount"
          meta={ConsumptionCorrectionFieldMeta.CorrectionAmount} 
          value={value.CorrectionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Correction Amount"
              value={itemValue}
              meta={ConsumptionCorrectionFieldMeta.CorrectionAmount}
            />
          }
        />
        </div>
    </div>
  )
}
