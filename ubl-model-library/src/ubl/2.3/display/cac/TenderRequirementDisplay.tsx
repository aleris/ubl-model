import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: TenderRequirement
  meta: FieldMeta<T>
}

export default function TenderRequirementDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-TenderRequirement ubl-TenderRequirementType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-TenderRequirement ubl-UBLExtensions"
          meta={TenderRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={TenderRequirementFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-TenderRequirement ubl-Text ubl-Name"
          meta={TenderRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Name"
              value={itemValue}
              meta={TenderRequirementFieldMeta.Name}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-TenderRequirement ubl-Text ubl-Description"
          meta={TenderRequirementFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Description"
              value={itemValue}
              meta={TenderRequirementFieldMeta.Description}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-TenderRequirement ubl-DocumentReference ubl-TemplateDocumentReference"
          meta={TenderRequirementFieldMeta.TemplateDocumentReference} 
          value={value.TemplateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Template Document Reference"
              value={itemValue}
              meta={TenderRequirementFieldMeta.TemplateDocumentReference}
            />
          }
        />
        </div>
    </div>
  )
}
