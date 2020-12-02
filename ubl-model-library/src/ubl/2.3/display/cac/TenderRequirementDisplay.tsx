import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderRequirement } from  '../../model/cac/TenderRequirement'
import { TenderRequirementFieldMeta } from  '../../meta/cac/TenderRequirementMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: TenderRequirement
  meta: FieldMeta<T>
}

export default function TenderRequirementDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={TenderRequirementFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={TenderRequirementFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderRequirementFieldMeta.Name} 
          value={value.Name}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderRequirementFieldMeta.Name} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderRequirementFieldMeta.Description} 
          value={value.Description}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={TenderRequirementFieldMeta.Description} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={TenderRequirementFieldMeta.TemplateDocumentReference} 
          value={value.TemplateDocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={TenderRequirementFieldMeta.TemplateDocumentReference} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
