import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: RequestedTenderTotal | undefined
  meta: FieldMeta<T>
}

export default function RequestedTenderTotalDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-RequestedTenderTotal">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={RequestedTenderTotalFieldMeta.UBLExtensions}
          />

          <AmountDisplay
            label="Estimated Overall Contract"
            value={value.EstimatedOverallContractAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount}
          />

          <AmountDisplay
            label="Estimated Overall Framework Contracts"
            value={value.EstimatedOverallFrameworkContractsAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount}
          />

          <AmountDisplay
            label="Total Amount"
            value={value.TotalAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.TotalAmount}
          />

          <IndicatorDisplay
            label="Tax Included Indicator"
            value={value.TaxIncludedIndicator?.[0]}
            meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator}
          />

          <AmountDisplay
            label="Minimum Amount"
            value={value.MinimumAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.MinimumAmount}
          />

          <AmountDisplay
            label="Maximum Amount"
            value={value.MaximumAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.MaximumAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-MonetaryScope"
            label="Monetary Scope"
            items={value.MonetaryScope}
            meta={RequestedTenderTotalFieldMeta.MonetaryScope} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Monetary Scope"
                value={itemValue}
                meta={RequestedTenderTotalFieldMeta.MonetaryScope}
              />
            }
          />

          <AmountDisplay
            label="Average Subsequent Contract"
            value={value.AverageSubsequentContractAmount?.[0]}
            meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TaxCategory ubl-ApplicableTaxCategory"
            label="Applicable Tax Category"
            items={value.ApplicableTaxCategory}
            meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory} 
            itemDisplay={ (itemValue: TaxCategory, key: string | number) =>
              <TaxCategoryDisplay
                key={key}
                label="Applicable Tax Category"
                value={itemValue}
                meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory}
              />
            }
          />
        </div>
    </div>
  )
}
