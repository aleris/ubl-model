import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TradingTerms } from  '../../model/cac/TradingTerms'
import { TradingTermsFieldMeta } from  '../../meta/cac/TradingTermsMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TradingTerms
  meta: FieldMeta<T>
}

export default function TradingTermsDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TradingTermsFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TradingTermsFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradingTermsFieldMeta.Information} 
          value={value.Information}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TradingTermsFieldMeta.Information} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradingTermsFieldMeta.Reference} 
          value={value.Reference}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TradingTermsFieldMeta.Reference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TradingTermsFieldMeta.ApplicableAddress} 
          value={value.ApplicableAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={TradingTermsFieldMeta.ApplicableAddress} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
