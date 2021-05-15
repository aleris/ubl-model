import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: EnergyWaterSupply | undefined
  meta: FieldMeta<T>
}

export default function EnergyWaterSupplyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EnergyWaterSupply">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EnergyWaterSupplyFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionReport"
            label="Consumption Report"
            items={value.ConsumptionReport}
            meta={EnergyWaterSupplyFieldMeta.ConsumptionReport} 
            itemDisplay={ (itemValue: ConsumptionReport, key: string | number) =>
              <ConsumptionReportDisplay
                key={key}
                label="Consumption Report"
                value={itemValue}
                meta={EnergyWaterSupplyFieldMeta.ConsumptionReport}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EnergyTaxReport"
            label="Energy Tax Report"
            items={value.EnergyTaxReport}
            meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport} 
            itemDisplay={ (itemValue: EnergyTaxReport, key: string | number) =>
              <EnergyTaxReportDisplay
                key={key}
                label="Energy Tax Report"
                value={itemValue}
                meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionAverage"
            label="Consumption Average"
            items={value.ConsumptionAverage}
            meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage} 
            itemDisplay={ (itemValue: ConsumptionAverage, key: string | number) =>
              <ConsumptionAverageDisplay
                key={key}
                label="Consumption Average"
                value={itemValue}
                meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-ConsumptionCorrection ubl-EnergyWaterConsumptionCorrection"
            label="Energy Water Consumption Correction"
            items={value.EnergyWaterConsumptionCorrection}
            meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection} 
            itemDisplay={ (itemValue: ConsumptionCorrection, key: string | number) =>
              <ConsumptionCorrectionDisplay
                key={key}
                label="Energy Water Consumption Correction"
                value={itemValue}
                meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection}
              />
            }
          />
        </div>
    </div>
  )
}
