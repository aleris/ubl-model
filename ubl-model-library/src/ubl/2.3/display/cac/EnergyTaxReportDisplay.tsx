import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EnergyTaxReport } from  '../../model/cac/EnergyTaxReport'
import { EnergyTaxReportFieldMeta } from  '../../meta/cac/EnergyTaxReportMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import TaxSchemeDisplay from './TaxSchemeDisplay'
import { TaxScheme } from '../../model/cac/TaxScheme'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EnergyTaxReport | undefined
  meta: FieldMeta<T>
}

export default function EnergyTaxReportDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EnergyTaxReport">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EnergyTaxReportFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Tax Energy Amount"
            value={value.TaxEnergyAmount?.[0]}
            meta={EnergyTaxReportFieldMeta.TaxEnergyAmount}
          />

          <AmountDisplay
            label="Tax Energy On Account Amount"
            value={value.TaxEnergyOnAccountAmount?.[0]}
            meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount}
          />

          <AmountDisplay
            label="Tax Energy Balance"
            value={value.TaxEnergyBalanceAmount?.[0]}
            meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount}
          />

          <TaxSchemeDisplay
            label="Tax Scheme"
            value={value.TaxScheme?.[0]}
            meta={EnergyTaxReportFieldMeta.TaxScheme}
          />
        </div>
    </div>
  )
}
