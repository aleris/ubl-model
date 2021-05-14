import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EnergyTaxReport
  meta: FieldMeta<T>
}

export default function EnergyTaxReportDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EnergyTaxReport ubl-EnergyTaxReportType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EnergyTaxReport ubl-UBLExtensions"
          meta={EnergyTaxReportFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EnergyTaxReportFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnergyTaxReport ubl-Amount ubl-TaxEnergyAmount"
          meta={EnergyTaxReportFieldMeta.TaxEnergyAmount} 
          value={value.TaxEnergyAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Energy Amount"
              value={itemValue}
              meta={EnergyTaxReportFieldMeta.TaxEnergyAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnergyTaxReport ubl-Amount ubl-TaxEnergyOnAccountAmount"
          meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount} 
          value={value.TaxEnergyOnAccountAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Energy On Account Amount"
              value={itemValue}
              meta={EnergyTaxReportFieldMeta.TaxEnergyOnAccountAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EnergyTaxReport ubl-Amount ubl-TaxEnergyBalanceAmount"
          meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount} 
          value={value.TaxEnergyBalanceAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Tax Energy Balance"
              value={itemValue}
              meta={EnergyTaxReportFieldMeta.TaxEnergyBalanceAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EnergyTaxReport ubl-TaxScheme"
          meta={EnergyTaxReportFieldMeta.TaxScheme} 
          value={value.TaxScheme}
          itemDisplay={ (itemValue: TaxScheme, key: string | number) =>
            <TaxSchemeDisplay
              key={key}
              label="Tax Scheme"
              value={itemValue}
              meta={EnergyTaxReportFieldMeta.TaxScheme}
            />
          }
        />
        </div>
    </div>
  )
}
