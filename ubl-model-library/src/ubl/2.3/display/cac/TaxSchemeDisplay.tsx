import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TaxScheme
  meta: FieldMeta<T>
}

export default function TaxSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TaxScheme ubl-TaxSchemeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TaxScheme ubl-UBLExtensions"
          meta={TaxSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TaxSchemeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxScheme ubl-Identifier ubl-ID"
          meta={TaxSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={TaxSchemeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxScheme ubl-Text ubl-Name"
          meta={TaxSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TaxSchemeFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxScheme ubl-Code ubl-TaxTypeCode"
          meta={TaxSchemeFieldMeta.TaxTypeCode} 
          value={value.TaxTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Tax Type Code"
              value={itemValue}
              meta={TaxSchemeFieldMeta.TaxTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TaxScheme ubl-Code ubl-CurrencyCode"
          meta={TaxSchemeFieldMeta.CurrencyCode} 
          value={value.CurrencyCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Currency Code"
              value={itemValue}
              meta={TaxSchemeFieldMeta.CurrencyCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-TaxScheme ubl-Address ubl-JurisdictionRegionAddress"
          meta={TaxSchemeFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
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
