import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradingTerms } from  '../../model/cac/TradingTerms'
import { TradingTermsFieldMeta } from  '../../meta/cac/TradingTermsMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TradingTerms | undefined
  meta: FieldMeta<T>
}

export default function TradingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TradingTerms">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TradingTermsFieldMeta.UBLExtensions}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Information"
            label="Information"
            items={value.Information}
            meta={TradingTermsFieldMeta.Information} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Information"
                value={itemValue}
                meta={TradingTermsFieldMeta.Information}
              />
            }
          />

          <TextDisplay
            label="Reference"
            value={value.Reference?.[0]}
            meta={TradingTermsFieldMeta.Reference}
          />

          <AddressDisplay
            label="Applicable Address"
            value={value.ApplicableAddress?.[0]}
            meta={TradingTermsFieldMeta.ApplicableAddress}
          />
        </div>
    </div>
  )
}
