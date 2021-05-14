import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: ContractExtension
  meta: FieldMeta<T>
}

export default function ContractExtensionDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ContractExtension ubl-ContractExtensionType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ContractExtension ubl-UBLExtensions"
          meta={ContractExtensionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ContractExtensionFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ContractExtension ubl-Text ubl-OptionsDescription"
          meta={ContractExtensionFieldMeta.OptionsDescription} 
          value={value.OptionsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Options Description"
              value={itemValue}
              meta={ContractExtensionFieldMeta.OptionsDescription}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractExtension ubl-Numeric ubl-MinimumNumberNumeric"
          meta={ContractExtensionFieldMeta.MinimumNumberNumeric} 
          value={value.MinimumNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Minimum Number"
              value={itemValue}
              meta={ContractExtensionFieldMeta.MinimumNumberNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractExtension ubl-Numeric ubl-MaximumNumberNumeric"
          meta={ContractExtensionFieldMeta.MaximumNumberNumeric} 
          value={value.MaximumNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay
              key={key}
              label="Maximum Number"
              value={itemValue}
              meta={ContractExtensionFieldMeta.MaximumNumberNumeric}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ContractExtension ubl-Indicator ubl-RenewalsIndicator"
          meta={ContractExtensionFieldMeta.RenewalsIndicator} 
          value={value.RenewalsIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Renewals"
              value={itemValue}
              meta={ContractExtensionFieldMeta.RenewalsIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ContractExtension ubl-Period ubl-OptionValidityPeriod"
          meta={ContractExtensionFieldMeta.OptionValidityPeriod} 
          value={value.OptionValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Option Validity Period"
              value={itemValue}
              meta={ContractExtensionFieldMeta.OptionValidityPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ContractExtension ubl-Renewal"
          meta={ContractExtensionFieldMeta.Renewal} 
          value={value.Renewal}
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
