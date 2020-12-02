import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Legislation } from  '../../model/cac/Legislation'
import { LegislationFieldMeta } from  '../../meta/cac/LegislationMeta'
import AddressDisplay from './AddressDisplay'
import { Address } from '../../model/cac/Address'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import LanguageDisplay from './LanguageDisplay'
import { Language } from '../../model/cac/Language'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: Legislation
  meta: FieldMeta<T>
}

export default function LegislationDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={LegislationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={LegislationFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LegislationFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.Title} 
          value={value.Title}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LegislationFieldMeta.Title} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LegislationFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.JurisdictionLevel} 
          value={value.JurisdictionLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LegislationFieldMeta.JurisdictionLevel} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.Article} 
          value={value.Article}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={LegislationFieldMeta.Article} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={LegislationFieldMeta.URI} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay key={key} meta={LegislationFieldMeta.Language} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={LegislationFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
          itemDisplay={ (itemValue: Address, key: string | number) =>
            <AddressDisplay key={key} meta={LegislationFieldMeta.JurisdictionRegionAddress} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
