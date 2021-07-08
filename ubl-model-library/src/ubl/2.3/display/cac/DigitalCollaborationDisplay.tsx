import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalCollaboration } from  '../../model/cac/DigitalCollaboration'
import { DigitalCollaborationField, DigitalCollaborationFieldMeta, DigitalCollaborationTypeName } from  '../../meta/cac/DigitalCollaborationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DigitalServiceDisplay } from './DigitalServiceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalCollaboration, void>
  digitalCollaboration: DigitalCollaboration[] | undefined
  renderContext: RenderContext
}

export const DigitalCollaborationSubElementsMap: SubElementsTemplatesMap<DigitalCollaborationField, DigitalCollaboration, void> = new Map([
    [
      DigitalCollaborationField.UBLExtensions,
      { meta: DigitalCollaborationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalCollaborationField.UBLExtensions}
          meta={DigitalCollaborationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCollaborationField.ID,
      { meta: DigitalCollaborationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalCollaborationField.ID}
          meta={DigitalCollaborationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCollaborationField.SendingDigitalService,
      { meta: DigitalCollaborationFieldMeta.SendingDigitalService,
        template: ({value, renderContext, fieldConfig}) => <DigitalServiceDisplay
          key={DigitalCollaborationField.SendingDigitalService}
          meta={DigitalCollaborationFieldMeta.SendingDigitalService}
          fieldConfig={fieldConfig}
          digitalService={value?.SendingDigitalService}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalCollaborationField.ReceivingDigitalService,
      { meta: DigitalCollaborationFieldMeta.ReceivingDigitalService,
        template: ({value, renderContext, fieldConfig}) => <DigitalServiceDisplay
          key={DigitalCollaborationField.ReceivingDigitalService}
          meta={DigitalCollaborationFieldMeta.ReceivingDigitalService}
          fieldConfig={fieldConfig}
          digitalService={value?.ReceivingDigitalService}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalCollaborationDisplay<TFieldMeta>({ meta, fieldConfig, digitalCollaboration, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalCollaborationTypeName,
    meta,
    fieldConfig,
    digitalCollaboration,
    renderContext,
    DigitalCollaborationSubElementsMap,
  )
}
