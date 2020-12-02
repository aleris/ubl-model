import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: CorporateRegistrationScheme
  meta: FieldMeta<T>
}

export default function CorporateRegistrationSchemeDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CorporateRegistrationSchemeFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CorporateRegistrationSchemeFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CorporateRegistrationSchemeFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CorporateRegistrationSchemeFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CorporateRegistrationSchemeFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode} 
          value={value.CorporateRegistrationTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CorporateRegistrationSchemeFieldMeta.CorporateRegistrationTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={CorporateRegistrationSchemeFieldMeta.JurisdictionRegionAddress} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
