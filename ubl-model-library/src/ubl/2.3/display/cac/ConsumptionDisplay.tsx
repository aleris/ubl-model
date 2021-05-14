import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Consumption
  meta: FieldMeta<T>
}

export default function ConsumptionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Consumption ubl-ConsumptionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Consumption ubl-UBLExtensions"
          meta={ConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ConsumptionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Consumption ubl-Code ubl-UtilityStatementTypeCode"
          meta={ConsumptionFieldMeta.UtilityStatementTypeCode} 
          value={value.UtilityStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Utility Statement Type Code"
              value={itemValue}
              meta={ConsumptionFieldMeta.UtilityStatementTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consumption ubl-Period ubl-MainPeriod"
          meta={ConsumptionFieldMeta.MainPeriod} 
          value={value.MainPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Main Period"
              value={itemValue}
              meta={ConsumptionFieldMeta.MainPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consumption ubl-AllowanceCharge"
          meta={ConsumptionFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Allowance Charge"
              value={itemValue}
              meta={ConsumptionFieldMeta.AllowanceCharge}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Consumption ubl-TaxTotal"
          meta={ConsumptionFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay
              key={key}
              label="Tax Total"
              value={itemValue}
              meta={ConsumptionFieldMeta.TaxTotal}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consumption ubl-EnergyWaterSupply"
          meta={ConsumptionFieldMeta.EnergyWaterSupply} 
          value={value.EnergyWaterSupply}
          itemDisplay={ (itemValue: EnergyWaterSupply, key: string | number) =>
            <EnergyWaterSupplyDisplay
              key={key}
              label="Energy Water Supply"
              value={itemValue}
              meta={ConsumptionFieldMeta.EnergyWaterSupply}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consumption ubl-TelecommunicationsSupply"
          meta={ConsumptionFieldMeta.TelecommunicationsSupply} 
          value={value.TelecommunicationsSupply}
          itemDisplay={ (itemValue: TelecommunicationsSupply, key: string | number) =>
            <TelecommunicationsSupplyDisplay
              key={key}
              label="Telecommunications Supply"
              value={itemValue}
              meta={ConsumptionFieldMeta.TelecommunicationsSupply}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Consumption ubl-MonetaryTotal ubl-LegalMonetaryTotal"
          meta={ConsumptionFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay
              key={key}
              label="Legal Monetary Total"
              value={itemValue}
              meta={ConsumptionFieldMeta.LegalMonetaryTotal}
            />
          }
        />
        </div>
    </div>
  )
}
