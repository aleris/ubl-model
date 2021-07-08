import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ParticipantParty } from  '../../model/cac/ParticipantParty'
import { ParticipantPartyField, ParticipantPartyFieldMeta, ParticipantPartyTypeName } from  '../../meta/cac/ParticipantPartyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContactDisplay } from './ContactDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from './PartyDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ParticipantParty, void>
  participantParty: ParticipantParty[] | undefined
  renderContext: RenderContext
}

export const ParticipantPartySubElementsMap: SubElementsTemplatesMap<ParticipantPartyField, ParticipantParty, void> = new Map([
    [
      ParticipantPartyField.UBLExtensions,
      { meta: ParticipantPartyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ParticipantPartyField.UBLExtensions}
          meta={ParticipantPartyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.InitiatingPartyIndicator,
      { meta: ParticipantPartyFieldMeta.InitiatingPartyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ParticipantPartyField.InitiatingPartyIndicator}
          meta={ParticipantPartyFieldMeta.InitiatingPartyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.InitiatingPartyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.PrivatePartyIndicator,
      { meta: ParticipantPartyFieldMeta.PrivatePartyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ParticipantPartyField.PrivatePartyIndicator}
          meta={ParticipantPartyFieldMeta.PrivatePartyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PrivatePartyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.PublicPartyIndicator,
      { meta: ParticipantPartyFieldMeta.PublicPartyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ParticipantPartyField.PublicPartyIndicator}
          meta={ParticipantPartyFieldMeta.PublicPartyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PublicPartyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.ServiceProviderPartyIndicator,
      { meta: ParticipantPartyFieldMeta.ServiceProviderPartyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ParticipantPartyField.ServiceProviderPartyIndicator}
          meta={ParticipantPartyFieldMeta.ServiceProviderPartyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ServiceProviderPartyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.Party,
      { meta: ParticipantPartyFieldMeta.Party,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ParticipantPartyField.Party}
          meta={ParticipantPartyFieldMeta.Party}
          fieldConfig={fieldConfig}
          party={value?.Party}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.LegalContact,
      { meta: ParticipantPartyFieldMeta.LegalContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={ParticipantPartyField.LegalContact}
          meta={ParticipantPartyFieldMeta.LegalContact}
          fieldConfig={fieldConfig}
          contact={value?.LegalContact}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.TechnicalContact,
      { meta: ParticipantPartyFieldMeta.TechnicalContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={ParticipantPartyField.TechnicalContact}
          meta={ParticipantPartyFieldMeta.TechnicalContact}
          fieldConfig={fieldConfig}
          contact={value?.TechnicalContact}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.SupportContact,
      { meta: ParticipantPartyFieldMeta.SupportContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={ParticipantPartyField.SupportContact}
          meta={ParticipantPartyFieldMeta.SupportContact}
          fieldConfig={fieldConfig}
          contact={value?.SupportContact}
          renderContext={renderContext}
        />}
    ],

    [
      ParticipantPartyField.CommercialContact,
      { meta: ParticipantPartyFieldMeta.CommercialContact,
        template: ({value, renderContext, fieldConfig}) => <ContactDisplay
          key={ParticipantPartyField.CommercialContact}
          meta={ParticipantPartyFieldMeta.CommercialContact}
          fieldConfig={fieldConfig}
          contact={value?.CommercialContact}
          renderContext={renderContext}
        />}
    ]
]) 

export function ParticipantPartyDisplay<TFieldMeta>({ meta, fieldConfig, participantParty, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ParticipantPartyTypeName,
    meta,
    fieldConfig,
    participantParty,
    renderContext,
    ParticipantPartySubElementsMap,
  )
}
