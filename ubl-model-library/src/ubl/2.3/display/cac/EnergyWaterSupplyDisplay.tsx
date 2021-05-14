import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EnergyWaterSupply
  meta: FieldMeta<T>
}

export default function EnergyWaterSupplyDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EnergyWaterSupply ubl-EnergyWaterSupplyType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EnergyWaterSupply ubl-UBLExtensions"
          meta={EnergyWaterSupplyFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EnergyWaterSupplyFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnergyWaterSupply ubl-ConsumptionReport"
          meta={EnergyWaterSupplyFieldMeta.ConsumptionReport} 
          value={value.ConsumptionReport}
          itemDisplay={ (itemValue: ConsumptionReport, key: string | number) =>
            <ConsumptionReportDisplay
              key={key}
              label="Consumption Report"
              value={itemValue}
              meta={EnergyWaterSupplyFieldMeta.ConsumptionReport}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnergyWaterSupply ubl-EnergyTaxReport"
          meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport} 
          value={value.EnergyTaxReport}
          itemDisplay={ (itemValue: EnergyTaxReport, key: string | number) =>
            <EnergyTaxReportDisplay
              key={key}
              label="Energy Tax Report"
              value={itemValue}
              meta={EnergyWaterSupplyFieldMeta.EnergyTaxReport}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnergyWaterSupply ubl-ConsumptionAverage"
          meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage} 
          value={value.ConsumptionAverage}
          itemDisplay={ (itemValue: ConsumptionAverage, key: string | number) =>
            <ConsumptionAverageDisplay
              key={key}
              label="Consumption Average"
              value={itemValue}
              meta={EnergyWaterSupplyFieldMeta.ConsumptionAverage}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EnergyWaterSupply ubl-ConsumptionCorrection ubl-EnergyWaterConsumptionCorrection"
          meta={EnergyWaterSupplyFieldMeta.EnergyWaterConsumptionCorrection} 
          value={value.EnergyWaterConsumptionCorrection}
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
