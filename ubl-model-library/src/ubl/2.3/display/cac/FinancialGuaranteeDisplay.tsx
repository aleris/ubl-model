import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: FinancialGuarantee
  meta: FieldMeta<T>
}

export default function FinancialGuaranteeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-FinancialGuarantee ubl-FinancialGuaranteeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-FinancialGuarantee ubl-UBLExtensions"
          meta={FinancialGuaranteeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialGuarantee ubl-Code ubl-GuaranteeTypeCode"
          meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode} 
          value={value.GuaranteeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Guarantee Type Code"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FinancialGuarantee ubl-Text ubl-Description"
          meta={FinancialGuaranteeFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialGuarantee ubl-Amount ubl-LiabilityAmount"
          meta={FinancialGuaranteeFieldMeta.LiabilityAmount} 
          value={value.LiabilityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Liability"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.LiabilityAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FinancialGuarantee ubl-Numeric ubl-AmountRate"
          meta={FinancialGuaranteeFieldMeta.AmountRate} 
          value={value.AmountRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Amount"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.AmountRate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FinancialGuarantee ubl-Period ubl-ConstitutionPeriod"
          meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod} 
          value={value.ConstitutionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Constitution Period"
              value={itemValue}
              meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod}
            />
          }
        />
        </div>
    </div>
  )
}
