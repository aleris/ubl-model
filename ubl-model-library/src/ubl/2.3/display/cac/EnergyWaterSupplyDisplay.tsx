import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnergyWaterSupply } from  '../../model/cac/EnergyWaterSupply'
import { EnergyWaterSupplyFieldMeta } from  '../../meta/cac/EnergyWaterSupplyMeta'
import ConsumptionAverageDisplay from './ConsumptionAverageDisplay'
import { ConsumptionAverage } from '../../model/cac/ConsumptionAverage'
import ConsumptionCorrectionDisplay from './ConsumptionCorrectionDisplay'
import { ConsumptionCorrection } from '../../model/cac/ConsumptionCorrection'
import ConsumptionReportDisplay from './ConsumptionReportDisplay'
import { ConsumptionReport } from '../../model/cac/ConsumptionReport'
import EnergyTaxReportDisplay from './EnergyTaxReportDisplay'
import { EnergyTaxReport } from '../../model/cac/EnergyTaxReport'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EnergyWaterSupply
  meta: FieldMeta<T>
}

export default function EnergyWaterSupplyDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EnergyWaterSupplyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EnergyWaterSupplyFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyWaterSupplyFieldMeta.ConsumptionReport} 
          value={value.ConsumptionReport}
          itemDisplay={ (itemValue: ConsumptionReport, key: string | number) =>
            <ConsumptionReportDisplay key={key} meta={EnergyWaterSupplyFieldMeta.ConsumptionReport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport} 
          value={value.EnergyTaxReport}
          itemDisplay={ (itemValue: EnergyTaxReport, key: string | number) =>
            <EnergyTaxReportDisplay key={key} meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage} 
          value={value.ConsumptionAverage}
          itemDisplay={ (itemValue: ConsumptionAverage, key: string | number) =>
            <ConsumptionAverageDisplay key={key} meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection} 
          value={value.EnergyWaterConsumptionCorrection}
          itemDisplay={ (itemValue: ConsumptionCorrection, key: string | number) =>
            <ConsumptionCorrectionDisplay key={key} meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
