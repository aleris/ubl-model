import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: TaxScheme | undefined
  meta: FieldMeta<T>
}

export default function TaxSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TaxScheme">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TaxSchemeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TaxSchemeFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TaxSchemeFieldMeta.Name}
          />

          <CodeDisplay
            label="Tax Type Code"
            value={value.TaxTypeCode?.[0]}
            meta={TaxSchemeFieldMeta.TaxTypeCode}
          />

          <CodeDisplay
            label="Currency Code"
            value={value.CurrencyCode?.[0]}
            meta={TaxSchemeFieldMeta.CurrencyCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Address ubl-JurisdictionRegionAddress"
            label="Jurisdiction Region Address"
            items={value.JurisdictionRegionAddress}
            meta={TaxSchemeFieldMeta.JurisdictionRegionAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Jurisdiction Region Address"
                value={itemValue}
                meta={TaxSchemeFieldMeta.JurisdictionRegionAddress}
              />
            }
          />
        </div>
    </div>
  )
}
