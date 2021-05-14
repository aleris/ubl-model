import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: CorporateRegistrationScheme
  meta: FieldMeta<T>
}

export default function CorporateRegistrationSchemeDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-CorporateRegistrationScheme ubl-CorporateRegistrationSchemeType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-CorporateRegistrationScheme ubl-UBLExtensions"
          meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CorporateRegistrationScheme ubl-Identifier ubl-ID"
          meta={CorporateRegistrationSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CorporateRegistrationSchemeFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CorporateRegistrationScheme ubl-Text ubl-Name"
          meta={CorporateRegistrationSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={CorporateRegistrationSchemeFieldMeta.Name}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-CorporateRegistrationScheme ubl-Code ubl-CorporateRegistrationTypeCode"
          meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode} 
          value={value.CorporateRegistrationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Corporate Registration Type Code"
              value={itemValue}
              meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-CorporateRegistrationScheme ubl-Address ubl-JurisdictionRegionAddress"
          meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
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
