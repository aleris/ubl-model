import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ContractExtension } from  '../../model/cac/ContractExtension'
import { ContractExtensionFieldMeta } from  '../../meta/cac/ContractExtensionMeta'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import RenewalDisplay from './RenewalDisplay'
import { Renewal } from '../../model/cac/Renewal'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ContractExtension | undefined
  meta: FieldMeta<T>
}

export default function ContractExtensionDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ContractExtension">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ContractExtensionFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-OptionsDescription"
            label="Options Description"
            items={value.OptionsDescription}
            meta={ContractExtensionFieldMeta.OptionsDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Options Description"
                value={itemValue}
                meta={ContractExtensionFieldMeta.OptionsDescription}
              />
            }
          />

          <NumericDisplay
            label="Minimum Number"
            value={value.MinimumNumberNumeric?.[0]}
            meta={ContractExtensionFieldMeta.MinimumNumberNumeric}
          />

          <NumericDisplay
            label="Maximum Number"
            value={value.MaximumNumberNumeric?.[0]}
            meta={ContractExtensionFieldMeta.MaximumNumberNumeric}
          />

          <IndicatorDisplay
            label="Renewals"
            value={value.RenewalsIndicator?.[0]}
            meta={ContractExtensionFieldMeta.RenewalsIndicator}
          />

          <PeriodDisplay
            label="Option Validity Period"
            value={value.OptionValidityPeriod?.[0]}
            meta={ContractExtensionFieldMeta.OptionValidityPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Renewal"
            label="Renewal"
            items={value.Renewal}
            meta={ContractExtensionFieldMeta.Renewal} 
            itemDisplay={ (itemValue: Renewal, key: string | number) =>
              <RenewalDisplay
                key={key}
                label="Renewal"
                value={itemValue}
                meta={ContractExtensionFieldMeta.Renewal}
              />
            }
          />
        </div>
    </div>
  )
}
