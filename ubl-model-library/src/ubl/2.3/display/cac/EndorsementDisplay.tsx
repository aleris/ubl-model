import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Endorsement } from  '../../model/cac/Endorsement'
import { EndorsementField, EndorsementFieldMeta, EndorsementTypeName } from  '../../meta/cac/EndorsementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { EndorserPartyDisplay } from './EndorserPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { SignatureDisplay } from './SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Endorsement, void>
  endorsement: Endorsement[] | undefined
  renderContext: RenderContext
}

export const EndorsementSubElementsMap: SubElementsTemplatesMap<EndorsementField, Endorsement, void> = new Map([
    [
      EndorsementField.UBLExtensions,
      { meta: EndorsementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EndorsementField.UBLExtensions}
          meta={EndorsementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EndorsementField.DocumentID,
      { meta: EndorsementFieldMeta.DocumentID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={EndorsementField.DocumentID}
          meta={EndorsementFieldMeta.DocumentID}
          fieldConfig={fieldConfig}
          identifier={value?.DocumentID}
          renderContext={renderContext}
        />}
    ],

    [
      EndorsementField.ApprovalStatus,
      { meta: EndorsementFieldMeta.ApprovalStatus,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EndorsementField.ApprovalStatus}
          meta={EndorsementFieldMeta.ApprovalStatus}
          fieldConfig={fieldConfig}
          text={value?.ApprovalStatus}
          renderContext={renderContext}
        />}
    ],

    [
      EndorsementField.Remarks,
      { meta: EndorsementFieldMeta.Remarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={EndorsementField.Remarks}
          meta={EndorsementFieldMeta.Remarks}
          fieldConfig={fieldConfig}
          text={value?.Remarks}
          renderContext={renderContext}
        />}
    ],

    [
      EndorsementField.EndorserParty,
      { meta: EndorsementFieldMeta.EndorserParty,
        template: ({value, renderContext, fieldConfig}) => <EndorserPartyDisplay
          key={EndorsementField.EndorserParty}
          meta={EndorsementFieldMeta.EndorserParty}
          fieldConfig={fieldConfig}
          endorserParty={value?.EndorserParty}
          renderContext={renderContext}
        />}
    ],

    [
      EndorsementField.Signature,
      { meta: EndorsementFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={EndorsementField.Signature}
          meta={EndorsementFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function EndorsementDisplay<TFieldMeta>({ meta, fieldConfig, endorsement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EndorsementTypeName,
    meta,
    fieldConfig,
    endorsement,
    renderContext,
    EndorsementSubElementsMap,
  )
}
