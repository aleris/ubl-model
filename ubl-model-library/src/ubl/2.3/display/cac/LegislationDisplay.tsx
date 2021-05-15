import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: Legislation | undefined
  meta: FieldMeta<T>
}

export default function LegislationDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Legislation">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={LegislationFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={LegislationFieldMeta.ID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Title"
            label="Title"
            items={value.Title}
            meta={LegislationFieldMeta.Title} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Title"
                value={itemValue}
                meta={LegislationFieldMeta.Title}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={LegislationFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={LegislationFieldMeta.Description}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-JurisdictionLevel"
            label="Jurisdiction Level"
            items={value.JurisdictionLevel}
            meta={LegislationFieldMeta.JurisdictionLevel} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Jurisdiction Level"
                value={itemValue}
                meta={LegislationFieldMeta.JurisdictionLevel}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Article"
            label="Article"
            items={value.Article}
            meta={LegislationFieldMeta.Article} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Article"
                value={itemValue}
                meta={LegislationFieldMeta.Article}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Identifier ubl-URI"
            label="URI"
            items={value.URI}
            meta={LegislationFieldMeta.URI} 
            itemDisplay={ (itemValue: Identifier, key: string | number) =>
              <IdentifierDisplay
                key={key}
                label="URI"
                value={itemValue}
                meta={LegislationFieldMeta.URI}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Language"
            label="Language"
            items={value.Language}
            meta={LegislationFieldMeta.Language} 
            itemDisplay={ (itemValue: Language, key: string | number) =>
              <LanguageDisplay
                key={key}
                label="Language"
                value={itemValue}
                meta={LegislationFieldMeta.Language}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Address ubl-JurisdictionRegionAddress"
            label="Jurisdiction Region Address"
            items={value.JurisdictionRegionAddress}
            meta={LegislationFieldMeta.JurisdictionRegionAddress} 
            itemDisplay={ (itemValue: Address, key: string | number) =>
              <AddressDisplay
                key={key}
                label="Jurisdiction Region Address"
                value={itemValue}
                meta={LegislationFieldMeta.JurisdictionRegionAddress}
              />
            }
          />
        </div>
    </div>
  )
}
