import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Consumption } from  '../../model/cac/Consumption'
import { ConsumptionFieldMeta } from  '../../meta/cac/ConsumptionMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EnergyWaterSupplyDisplay from './EnergyWaterSupplyDisplay'
import { EnergyWaterSupply } from '../../model/cac/EnergyWaterSupply'
import MonetaryTotalDisplay from './MonetaryTotalDisplay'
import { MonetaryTotal } from '../../model/cac/MonetaryTotal'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TaxTotalDisplay from './TaxTotalDisplay'
import { TaxTotal } from '../../model/cac/TaxTotal'
import TelecommunicationsSupplyDisplay from './TelecommunicationsSupplyDisplay'
import { TelecommunicationsSupply } from '../../model/cac/TelecommunicationsSupply'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Consumption | undefined
  meta: FieldMeta<T>
}

export default function ConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Consumption">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ConsumptionFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Utility Statement Type Code"
            value={value.UtilityStatementTypeCode?.[0]}
            meta={ConsumptionFieldMeta.UtilityStatementTypeCode}
          />

          <PeriodDisplay
            label="Main Period"
            value={value.MainPeriod?.[0]}
            meta={ConsumptionFieldMeta.MainPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge"
            label="Allowance Charge"
            items={value.AllowanceCharge}
            meta={ConsumptionFieldMeta.AllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Allowance Charge"
                value={itemValue}
                meta={ConsumptionFieldMeta.AllowanceCharge}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxTotal"
            label="Tax Total"
            items={value.TaxTotal}
            meta={ConsumptionFieldMeta.TaxTotal} 
            itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
              <TaxTotalDisplay
                key={key}
                label="Tax Total"
                value={itemValue}
                meta={ConsumptionFieldMeta.TaxTotal}
              />
            }
          />

          <EnergyWaterSupplyDisplay
            label="Energy Water Supply"
            value={value.EnergyWaterSupply?.[0]}
            meta={ConsumptionFieldMeta.EnergyWaterSupply}
          />

          <TelecommunicationsSupplyDisplay
            label="Telecommunications Supply"
            value={value.TelecommunicationsSupply?.[0]}
            meta={ConsumptionFieldMeta.TelecommunicationsSupply}
          />

          <MonetaryTotalDisplay
            label="Legal Monetary Total"
            value={value.LegalMonetaryTotal?.[0]}
            meta={ConsumptionFieldMeta.LegalMonetaryTotal}
          />
        </div>
    </div>
  )
}
