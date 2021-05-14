import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: FrameworkAgreement
  meta: FieldMeta<T>
}

export default function FrameworkAgreementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-FrameworkAgreement ubl-FrameworkAgreementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-FrameworkAgreement ubl-UBLExtensions"
          meta={FrameworkAgreementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Quantity ubl-ExpectedOperatorQuantity"
          meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity} 
          value={value.ExpectedOperatorQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Expected Operator"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.ExpectedOperatorQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Quantity ubl-MaximumOperatorQuantity"
          meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity} 
          value={value.MaximumOperatorQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Maximum Operator"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.MaximumOperatorQuantity}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Text ubl-Justification"
          meta={FrameworkAgreementFieldMeta.Justification} 
          value={value.Justification}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Justification"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.Justification}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Text ubl-Frequency"
          meta={FrameworkAgreementFieldMeta.Frequency} 
          value={value.Frequency}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Frequency"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.Frequency}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Amount ubl-EstimatedMaximumValueAmount"
          meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount} 
          value={value.EstimatedMaximumValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Estimated Maximum Value"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.EstimatedMaximumValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-FrameworkAgreement ubl-Amount ubl-MaximumValueAmount"
          meta={FrameworkAgreementFieldMeta.MaximumValueAmount} 
          value={value.MaximumValueAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Value"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.MaximumValueAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-FrameworkAgreement ubl-Period ubl-DurationPeriod"
          meta={FrameworkAgreementFieldMeta.DurationPeriod} 
          value={value.DurationPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Duration Period"
              value={itemValue}
              meta={FrameworkAgreementFieldMeta.DurationPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-FrameworkAgreement ubl-TenderRequirement ubl-SubsequentProcessTenderRequirement"
          meta={FrameworkAgreementFieldMeta.SubsequentProcessTenderRequirement} 
          value={value.SubsequentProcessTenderRequirement}
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
