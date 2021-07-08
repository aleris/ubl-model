import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalProcess } from  '../../model/cac/DigitalProcess'
import { DigitalProcessField, DigitalProcessFieldMeta, DigitalProcessTypeName } from  '../../meta/cac/DigitalProcessMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DigitalCollaborationDisplay } from './DigitalCollaborationDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalProcess, void>
  digitalProcess: DigitalProcess[] | undefined
  renderContext: RenderContext
}

export const DigitalProcessSubElementsMap: SubElementsTemplatesMap<DigitalProcessField, DigitalProcess, void> = new Map([
    [
      DigitalProcessField.UBLExtensions,
      { meta: DigitalProcessFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalProcessField.UBLExtensions}
          meta={DigitalProcessFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalProcessField.ID,
      { meta: DigitalProcessFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalProcessField.ID}
          meta={DigitalProcessFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalProcessField.Description,
      { meta: DigitalProcessFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={DigitalProcessField.Description}
          meta={DigitalProcessFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalProcessField.ProfileID,
      { meta: DigitalProcessFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalProcessField.ProfileID}
          meta={DigitalProcessFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalProcessField.DigitalCollaboration,
      { meta: DigitalProcessFieldMeta.DigitalCollaboration,
        template: ({value, renderContext, fieldConfig}) => <DigitalCollaborationDisplay
          key={DigitalProcessField.DigitalCollaboration}
          meta={DigitalProcessFieldMeta.DigitalCollaboration}
          fieldConfig={fieldConfig}
          digitalCollaboration={value?.DigitalCollaboration}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalProcessField.CertificationDocumentReference,
      { meta: DigitalProcessFieldMeta.CertificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DigitalProcessField.CertificationDocumentReference}
          meta={DigitalProcessFieldMeta.CertificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CertificationDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalProcessDisplay<TFieldMeta>({ meta, fieldConfig, digitalProcess, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalProcessTypeName,
    meta,
    fieldConfig,
    digitalProcess,
    renderContext,
    DigitalProcessSubElementsMap,
  )
}
