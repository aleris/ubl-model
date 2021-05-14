import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Legislation
  meta: FieldMeta<T>
}

export default function LegislationDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Legislation ubl-LegislationType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Legislation ubl-UBLExtensions"
          meta={LegislationFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={LegislationFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Legislation ubl-Identifier ubl-ID"
          meta={LegislationFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={LegislationFieldMeta.ID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Legislation ubl-Text ubl-Title"
          meta={LegislationFieldMeta.Title} 
          value={value.Title}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Title"
              value={itemValue}
              meta={LegislationFieldMeta.Title}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Legislation ubl-Text ubl-Description"
          meta={LegislationFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={LegislationFieldMeta.Description}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Legislation ubl-Text ubl-JurisdictionLevel"
          meta={LegislationFieldMeta.JurisdictionLevel} 
          value={value.JurisdictionLevel}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Jurisdiction Level"
              value={itemValue}
              meta={LegislationFieldMeta.JurisdictionLevel}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Legislation ubl-Text ubl-Article"
          meta={LegislationFieldMeta.Article} 
          value={value.Article}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Article"
              value={itemValue}
              meta={LegislationFieldMeta.Article}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Legislation ubl-Identifier ubl-URI"
          meta={LegislationFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={LegislationFieldMeta.URI}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Legislation ubl-Language"
          meta={LegislationFieldMeta.Language} 
          value={value.Language}
          itemDisplay={ (itemValue: Language, key: string | number) =>
            <LanguageDisplay
              key={key}
              label="Language"
              value={itemValue}
              meta={LegislationFieldMeta.Language}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Legislation ubl-Address ubl-JurisdictionRegionAddress"
          meta={LegislationFieldMeta.JurisdictionRegionAddress} 
          value={value.JurisdictionRegionAddress}
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
