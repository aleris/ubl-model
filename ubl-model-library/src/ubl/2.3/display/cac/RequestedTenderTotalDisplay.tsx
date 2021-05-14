import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: RequestedTenderTotal
  meta: FieldMeta<T>
}

export default function RequestedTenderTotalDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-RequestedTenderTotal ubl-RequestedTenderTotalType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-RequestedTenderTotal ubl-UBLExtensions"
          meta={RequestedTenderTotalFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-EstimatedOverallContractAmount"
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount} 
          value={value.EstimatedOverallContractAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Estimated Overall Contract"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.EstimatedOverallContractAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-EstimatedOverallFrameworkContractsAmount"
          meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount} 
          value={value.EstimatedOverallFrameworkContractsAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Estimated Overall Framework Contracts"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.EstimatedOverallFrameworkContractsAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-TotalAmount"
          meta={RequestedTenderTotalFieldMeta.TotalAmount} 
          value={value.TotalAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Total Amount"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.TotalAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Indicator ubl-TaxIncludedIndicator"
          meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator} 
          value={value.TaxIncludedIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Tax Included Indicator"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.TaxIncludedIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-MinimumAmount"
          meta={RequestedTenderTotalFieldMeta.MinimumAmount} 
          value={value.MinimumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Minimum Amount"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.MinimumAmount}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-MaximumAmount"
          meta={RequestedTenderTotalFieldMeta.MaximumAmount} 
          value={value.MaximumAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Maximum Amount"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.MaximumAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Text ubl-MonetaryScope"
          meta={RequestedTenderTotalFieldMeta.MonetaryScope} 
          value={value.MonetaryScope}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Monetary Scope"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.MonetaryScope}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-RequestedTenderTotal ubl-Amount ubl-AverageSubsequentContractAmount"
          meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount} 
          value={value.AverageSubsequentContractAmount}
          itemDisplay={ (itemValue: Amount, key: string | number) =>
            <AmountDisplay
              key={key}
              label="Average Subsequent Contract"
              value={itemValue}
              meta={RequestedTenderTotalFieldMeta.AverageSubsequentContractAmount}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-RequestedTenderTotal ubl-TaxCategory ubl-ApplicableTaxCategory"
          meta={RequestedTenderTotalFieldMeta.ApplicableTaxCategory} 
          value={value.ApplicableTaxCategory}
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
