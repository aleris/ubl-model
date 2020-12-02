import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Consumption
  meta: FieldMeta<T>
}

export default function ConsumptionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ConsumptionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ConsumptionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.UtilityStatementTypeCode} 
          value={value.UtilityStatementTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ConsumptionFieldMeta.UtilityStatementTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.MainPeriod} 
          value={value.MainPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ConsumptionFieldMeta.MainPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.AllowanceCharge} 
          value={value.AllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ConsumptionFieldMeta.AllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.TaxTotal} 
          value={value.TaxTotal}
          itemDisplay={ (itemValue: TaxTotal, key: string | number) =>
            <TaxTotalDisplay key={key} meta={ConsumptionFieldMeta.TaxTotal} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.EnergyWaterSupply} 
          value={value.EnergyWaterSupply}
          itemDisplay={ (itemValue: EnergyWaterSupply, key: string | number) =>
            <EnergyWaterSupplyDisplay key={key} meta={ConsumptionFieldMeta.EnergyWaterSupply} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.TelecommunicationsSupply} 
          value={value.TelecommunicationsSupply}
          itemDisplay={ (itemValue: TelecommunicationsSupply, key: string | number) =>
            <TelecommunicationsSupplyDisplay key={key} meta={ConsumptionFieldMeta.TelecommunicationsSupply} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ConsumptionFieldMeta.LegalMonetaryTotal} 
          value={value.LegalMonetaryTotal}
          itemDisplay={ (itemValue: MonetaryTotal, key: string | number) =>
            <MonetaryTotalDisplay key={key} meta={ConsumptionFieldMeta.LegalMonetaryTotal} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
