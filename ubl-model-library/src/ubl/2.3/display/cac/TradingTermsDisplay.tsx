import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TradingTerms
  meta: FieldMeta<T>
}

export default function TradingTermsDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TradingTerms ubl-TradingTermsType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TradingTerms ubl-UBLExtensions"
          meta={TradingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TradingTermsFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TradingTerms ubl-Text ubl-Information"
          meta={TradingTermsFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Information"
              value={itemValue}
              meta={TradingTermsFieldMeta.Information}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TradingTerms ubl-Text ubl-Reference"
          meta={TradingTermsFieldMeta.Reference} 
          value={value.Reference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Reference"
              value={itemValue}
              meta={TradingTermsFieldMeta.Reference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TradingTerms ubl-Address ubl-ApplicableAddress"
          meta={TradingTermsFieldMeta.ApplicableAddress} 
          value={value.ApplicableAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay
              key={key}
              label="Applicable Address"
              value={itemValue}
              meta={TradingTermsFieldMeta.ApplicableAddress}
            />
          }
        />
        </div>
    </div>
  )
}
