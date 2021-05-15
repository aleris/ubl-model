import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: FrameworkAgreement | undefined
  meta: FieldMeta<T>
}

export default function FrameworkAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-FrameworkAgreement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={FrameworkAgreementFieldMeta.UBLExtensions}
          />

          <QuantityDisplay
            label="Expected Operator"
            value={value.ExpectedOperatorQuantity?.[0]}
            meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity}
          />

          <QuantityDisplay
            label="Maximum Operator"
            value={value.MaximumOperatorQuantity?.[0]}
            meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Justification"
            label="Justification"
            items={value.Justification}
            meta={FrameworkAgreementFieldMeta.Justification} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Justification"
                value={itemValue}
                meta={FrameworkAgreementFieldMeta.Justification}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Frequency"
            label="Frequency"
            items={value.Frequency}
            meta={FrameworkAgreementFieldMeta.Frequency} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Frequency"
                value={itemValue}
                meta={FrameworkAgreementFieldMeta.Frequency}
              />
            }
          />

          <AmountDisplay
            label="Estimated Maximum Value"
            value={value.EstimatedMaximumValueAmount?.[0]}
            meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount}
          />

          <AmountDisplay
            label="Maximum Value"
            value={value.MaximumValueAmount?.[0]}
            meta={FrameworkAgreementFieldMeta.MaximumValueAmount}
          />

          <PeriodDisplay
            label="Duration Period"
            value={value.DurationPeriod?.[0]}
            meta={FrameworkAgreementFieldMeta.DurationPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TenderRequirement ubl-SubsequentProcessTenderRequirement"
            label="Subsequent Process Tender Requirement"
            items={value.SubsequentProcessTenderRequirement}
            meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement} 
            itemDisplay={ (itemValue: TenderRequirement, key: string | number) =>
              <TenderRequirementDisplay
                key={key}
                label="Subsequent Process Tender Requirement"
                value={itemValue}
                meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement}
              />
            }
          />
        </div>
    </div>
  )
}
