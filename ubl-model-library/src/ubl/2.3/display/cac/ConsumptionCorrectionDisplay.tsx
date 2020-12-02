import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ConsumptionCorrection
  meta: FieldMeta<T>
}

export default function ConsumptionCorrectionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionCorrectionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.CorrectionType} 
          value={value.CorrectionType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionCorrectionFieldMeta.CorrectionType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode} 
          value={value.CorrectionTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionCorrectionFieldMeta.CorrectionTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.MeterNumber} 
          value={value.MeterNumber}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionCorrectionFieldMeta.MeterNumber} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity} 
          value={value.GasPressureQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.GasPressureQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity} 
          value={value.ActualTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.ActualTemperatureReductionQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity} 
          value={value.NormalTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.NormalTemperatureReductionQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity} 
          value={value.DifferenceTemperatureReductionQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.DifferenceTemperatureReductionQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ConsumptionCorrectionFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount} 
          value={value.CorrectionUnitAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsumptionCorrectionFieldMeta.CorrectionUnitAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity} 
          value={value.ConsumptionEnergyQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.ConsumptionEnergyQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity} 
          value={value.ConsumptionWaterQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ConsumptionCorrectionFieldMeta.ConsumptionWaterQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionCorrectionFieldMeta.CorrectionAmount} 
          value={value.CorrectionAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={ConsumptionCorrectionFieldMeta.CorrectionAmount} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
