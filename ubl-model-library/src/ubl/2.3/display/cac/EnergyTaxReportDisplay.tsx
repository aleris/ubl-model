import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnergyTaxReport } from  '../../model/cac/EnergyTaxReport'
import { EnergyTaxReportFieldMeta } from  '../../meta/cac/EnergyTaxReportMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TaxSchemeDisplay from './TaxSchemeDisplay'
import { TaxScheme } from '../../model/cac/TaxScheme'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EnergyTaxReport
  meta: FieldMeta<T>
}

export default function EnergyTaxReportDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EnergyTaxReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EnergyTaxReportFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyTaxReportFieldMeta.TaxEnergyAmount} 
          value={value.TaxEnergyAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={EnergyTaxReportFieldMeta.TaxEnergyAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount} 
          value={value.TaxEnergyOnAccountAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount} 
          value={value.TaxEnergyBalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EnergyTaxReportFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay key={key} meta={EnergyTaxReportFieldMeta.TaxScheme} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
