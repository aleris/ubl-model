import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ConsumptionCorrection | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionCorrectionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ConsumptionCorrection">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionCorrectionFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Correction Type"
            value={value.CorrectionType?.[0]}
            meta={ConsumptionCorrectionFieldMeta.CorrectionType}
          />

          <CodeDisplay
            label="Correction Type Code"
            value={value.CorrectionTypeCode?.[0]}
            meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode}
          />

          <TextDisplay
            label="Meter Number"
            value={value.MeterNumber?.[0]}
            meta={ConsumptionCorrectionFieldMeta.MeterNumber}
          />

          <QuantityDisplay
            label="Gas Pressure"
            value={value.GasPressureQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity}
          />

          <QuantityDisplay
            label="Actual Temperature Reduction"
            value={value.ActualTemperatureReductionQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity}
          />

          <QuantityDisplay
            label="Normal Temperature Reduction"
            value={value.NormalTemperatureReductionQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity}
          />

          <QuantityDisplay
            label="Difference Temperature Reduction"
            value={value.DifferenceTemperatureReductionQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={ConsumptionCorrectionFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={ConsumptionCorrectionFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Correction Unit Amount"
            value={value.CorrectionUnitAmount?.[0]}
            meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount}
          />

          <QuantityDisplay
            label="Consumption Energy"
            value={value.ConsumptionEnergyQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity}
          />

          <QuantityDisplay
            label="Consumption Water"
            value={value.ConsumptionWaterQuantity?.[0]}
            meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity}
          />

          <AmountDisplay
            label="Correction Amount"
            value={value.CorrectionAmount?.[0]}
            meta={ConsumptionCorrectionFieldMeta.CorrectionAmount}
          />
        </div>
    </div>
  )
}
