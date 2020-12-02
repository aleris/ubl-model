import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TaxScheme } from  '../../model/cac/TaxScheme'
import { TaxSchemeFieldMeta } from  '../../meta/cac/TaxSchemeMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TaxScheme
  meta: FieldMeta<T>
}

export default function TaxSchemeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TaxSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TaxSchemeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={TaxSchemeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TaxSchemeFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSchemeFieldMeta.TaxTypeCode} 
          value={value.TaxTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TaxSchemeFieldMeta.TaxTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSchemeFieldMeta.CurrencyCode} 
          value={value.CurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={TaxSchemeFieldMeta.CurrencyCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TaxSchemeFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={TaxSchemeFieldMeta.JurisdictionRegionAddress} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
