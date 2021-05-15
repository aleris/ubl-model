import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderRequirement } from  '../../model/cac/TenderRequirement'
import { TenderRequirementFieldMeta } from  '../../meta/cac/TenderRequirementMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderRequirement | undefined
  meta: FieldMeta<T>
}

export default function TenderRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderRequirement">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderRequirementFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TenderRequirementFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderRequirementFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderRequirementFieldMeta.Description}
              />
            }
          />

          <DocumentReferenceDisplay
            label="Template Document Reference"
            value={value.TemplateDocumentReference?.[0]}
            meta={TenderRequirementFieldMeta.TemplateDocumentReference}
          />
        </div>
    </div>
  )
}
