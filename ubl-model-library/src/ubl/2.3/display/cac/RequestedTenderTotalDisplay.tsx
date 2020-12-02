import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { RequestedTenderTotal } from  '../../model/cac/RequestedTenderTotal'
import { RequestedTenderTotalFieldMeta } from  '../../meta/cac/RequestedTenderTotalMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import TaxCategoryDisplay from './TaxCategoryDisplay'
import { TaxCategory } from '../../model/cac/TaxCategory'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: RequestedTenderTotal
  meta: FieldMeta<T>
}

export default function RequestedTenderTotalDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={RequestedTenderTotalFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount} 
          value={value.EstimatedOverallContractAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount} 
          value={value.EstimatedOverallFrameworkContractsAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.TotalAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.MinimumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.MaximumAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.MonetaryScope} 
          value={value.MonetaryScope}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={RequestedTenderTotalFieldMeta.MonetaryScope} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount} 
          value={value.AverageSubsequentContractAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay key={key} meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory} 
          value={value.ApplicableTaxCategory}
          itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
            <TaxCategoryDisplay key={key} meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
