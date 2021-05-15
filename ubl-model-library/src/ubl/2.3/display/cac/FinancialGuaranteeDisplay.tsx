import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialGuarantee } from  '../../model/cac/FinancialGuarantee'
import { FinancialGuaranteeFieldMeta } from  '../../meta/cac/FinancialGuaranteeMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: FinancialGuarantee | undefined
  meta: FieldMeta<T>
}

export default function FinancialGuaranteeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-FinancialGuarantee">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FinancialGuaranteeFieldMeta.UBLExtensions}
          />

          <CodeDisplay
            label="Guarantee Type Code"
            value={value.GuaranteeTypeCode?.[0]}
            meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={FinancialGuaranteeFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={FinancialGuaranteeFieldMeta.Description}
              />
            }
          />

          <AmountDisplay
            label="Liability"
            value={value.LiabilityAmount?.[0]}
            meta={FinancialGuaranteeFieldMeta.LiabilityAmount}
          />

          <NumericDisplay
            label="Amount"
            value={value.AmountRate?.[0]}
            meta={FinancialGuaranteeFieldMeta.AmountRate}
          />

          <PeriodDisplay
            label="Constitution Period"
            value={value.ConstitutionPeriod?.[0]}
            meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod}
          />
        </div>
    </div>
  )
}
