import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: FinancialGuarantee
  meta: FieldMeta<T>
}

export default function FinancialGuaranteeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FinancialGuaranteeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode} 
          value={value.GuaranteeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FinancialGuaranteeFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.LiabilityAmount} 
          value={value.LiabilityAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={FinancialGuaranteeFieldMeta.LiabilityAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.AmountRate} 
          value={value.AmountRate}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={FinancialGuaranteeFieldMeta.AmountRate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod} 
          value={value.ConstitutionPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
