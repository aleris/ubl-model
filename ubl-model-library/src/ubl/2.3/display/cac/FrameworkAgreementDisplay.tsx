import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { FrameworkAgreement } from  '../../model/cac/FrameworkAgreement'
import { FrameworkAgreementFieldMeta } from  '../../meta/cac/FrameworkAgreementMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TenderRequirementDisplay from './TenderRequirementDisplay'
import { TenderRequirement } from '../../model/cac/TenderRequirement'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: FrameworkAgreement
  meta: FieldMeta<T>
}

export default function FrameworkAgreementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={FrameworkAgreementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity} 
          value={value.ExpectedOperatorQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity} 
          value={value.MaximumOperatorQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.Justification} 
          value={value.Justification}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FrameworkAgreementFieldMeta.Justification} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.Frequency} 
          value={value.Frequency}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={FrameworkAgreementFieldMeta.Frequency} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount} 
          value={value.EstimatedMaximumValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.MaximumValueAmount} 
          value={value.MaximumValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={FrameworkAgreementFieldMeta.MaximumValueAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.DurationPeriod} 
          value={value.DurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={FrameworkAgreementFieldMeta.DurationPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement} 
          value={value.SubsequentProcessTenderRequirement}
          itemDisplay={ (itemValue: TenderRequirement, key: string | number) =>
            <TenderRequirementDisplay key={key} meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
