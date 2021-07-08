import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { EndorserParty } from  '../../model/cac/EndorserParty'
import { EndorserPartyField, EndorserPartyFieldMeta, EndorserPartyTypeName } from  '../../meta/cac/EndorserPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContactDisplay } from './ContactDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<EndorserParty, void>
  endorserParty: EndorserParty[] | undefined
  renderContext: RenderContext
}

export const EndorserPartySubElementsMap: SubElementsTemplatesMap<EndorserPartyField, EndorserParty, void> = new Map([
    [
      EndorserPartyField.UBLExtensions,
      { meta: EndorserPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={EndorserPartyField.UBLExtensions}
          meta={EndorserPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      EndorserPartyField.RoleCode,
      { meta: EndorserPartyFieldMeta.RoleCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={EndorserPartyField.RoleCode}
          meta={EndorserPartyFieldMeta.RoleCode}
          fieldConfig={fieldConfig}
          code={value?.RoleCode}
          renderContext={renderContext}
        />}
    ],

    [
      EndorserPartyField.SequenceNumeric,
      { meta: EndorserPartyFieldMeta.SequenceNumeric,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={EndorserPartyField.SequenceNumeric}
          meta={EndorserPartyFieldMeta.SequenceNumeric}
          fieldConfig={fieldConfig}
          numeric={value?.SequenceNumeric}
          renderContext={renderContext}
        />}
    ],

    [
      EndorserPartyField.Party,
      { meta: EndorserPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={EndorserPartyField.Party}
          meta={EndorserPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      EndorserPartyField.SignatoryContact,
      { meta: EndorserPartyFieldMeta.SignatoryContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={EndorserPartyField.SignatoryContact}
          meta={EndorserPartyFieldMeta.SignatoryContact}
          fieldConfig={fieldConfig}
          contact={value?.SignatoryContact}
          renderContext={renderContext}
        />}
    ]
]) 

export function EndorserPartyDisplay<TFieldMeta>({ meta, fieldConfig, endorserParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    EndorserPartyTypeName,
    meta,
    fieldConfig,
    endorserParty,
    renderContext,
    EndorserPartySubElementsMap,
  )
}
