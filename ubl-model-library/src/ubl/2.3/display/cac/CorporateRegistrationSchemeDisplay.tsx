import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { CorporateRegistrationScheme } from  '../../model/cac/CorporateRegistrationScheme'
import { CorporateRegistrationSchemeFieldMeta } from  '../../meta/cac/CorporateRegistrationSchemeMeta'
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
  value: CorporateRegistrationScheme | undefined
  meta: FieldMeta<T>
}

export default function CorporateRegistrationSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-CorporateRegistrationScheme">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CorporateRegistrationSchemeFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={CorporateRegistrationSchemeFieldMeta.Name}
          />

          <CodeDisplay
            label="Corporate Registration Type Code"
            value={value.CorporateRegistrationTypeCode?.[0]}
            meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Address ubl-JurisdictionRegionAddress"
            label="Jurisdiction Region Address"
            items={value.JurisdictionRegionAddress}
            meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Jurisdiction Region Address"
                value={itemValue}
                meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress}
              />
            }
          />
        </div>
    </div>
  )
}
