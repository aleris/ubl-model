import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ContractExtension
  meta: FieldMeta<T>
}

export default function ContractExtensionDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ContractExtensionFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ContractExtensionFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.OptionsDescription} 
          value={value.OptionsDescription}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ContractExtensionFieldMeta.OptionsDescription} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.MinimumNumberNumeric} 
          value={value.MinimumNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ContractExtensionFieldMeta.MinimumNumberNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.MaximumNumberNumeric} 
          value={value.MaximumNumberNumeric}
          itemDisplay={ (itemValue: Numeric, key: string | number) =>
            <NumericDisplay key={key} meta={ContractExtensionFieldMeta.MaximumNumberNumeric} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.RenewalsIndicator} 
          value={value.RenewalsIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ContractExtensionFieldMeta.RenewalsIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.OptionValidityPeriod} 
          value={value.OptionValidityPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ContractExtensionFieldMeta.OptionValidityPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ContractExtensionFieldMeta.Renewal} 
          value={value.Renewal}
          itemDisplay={ (itemValue: Renewal, key: string | number) =>
            <RenewalDisplay key={key} meta={ContractExtensionFieldMeta.Renewal} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
