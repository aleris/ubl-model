import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PowerOfAttorney } from  '../../model/cac/PowerOfAttorney'
import { PowerOfAttorneyField, PowerOfAttorneyFieldMeta, PowerOfAttorneyTypeName } from  '../../meta/cac/PowerOfAttorneyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PowerOfAttorney, void>
  powerOfAttorney: PowerOfAttorney[] | undefined
  renderContext: RenderContext
}

export const PowerOfAttorneySubElementsMap: SubElementsTemplatesMap<PowerOfAttorneyField, PowerOfAttorney, void> = new Map([
    [
      PowerOfAttorneyField.UBLExtensions,
      { meta: PowerOfAttorneyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PowerOfAttorneyField.UBLExtensions}
          meta={PowerOfAttorneyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.ID,
      { meta: PowerOfAttorneyFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PowerOfAttorneyField.ID}
          meta={PowerOfAttorneyFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.IssueDate,
      { meta: PowerOfAttorneyFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={PowerOfAttorneyField.IssueDate}
          meta={PowerOfAttorneyFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.IssueTime,
      { meta: PowerOfAttorneyFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={PowerOfAttorneyField.IssueTime}
          meta={PowerOfAttorneyFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.Description,
      { meta: PowerOfAttorneyFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PowerOfAttorneyField.Description}
          meta={PowerOfAttorneyFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.NotaryParty,
      { meta: PowerOfAttorneyFieldMeta.NotaryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PowerOfAttorneyField.NotaryParty}
          meta={PowerOfAttorneyFieldMeta.NotaryParty}
          fieldConfig={fieldConfig}
          party={value?.NotaryParty}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.AgentParty,
      { meta: PowerOfAttorneyFieldMeta.AgentParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PowerOfAttorneyField.AgentParty}
          meta={PowerOfAttorneyFieldMeta.AgentParty}
          fieldConfig={fieldConfig}
          party={value?.AgentParty}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.WitnessParty,
      { meta: PowerOfAttorneyFieldMeta.WitnessParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={PowerOfAttorneyField.WitnessParty}
          meta={PowerOfAttorneyFieldMeta.WitnessParty}
          fieldConfig={fieldConfig}
          party={value?.WitnessParty}
          renderContext={renderContext}
        />}
    ],

    [
      PowerOfAttorneyField.MandateDocumentReference,
      { meta: PowerOfAttorneyFieldMeta.MandateDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={PowerOfAttorneyField.MandateDocumentReference}
          meta={PowerOfAttorneyFieldMeta.MandateDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.MandateDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function PowerOfAttorneyDisplay<TFieldMeta>({ meta, fieldConfig, powerOfAttorney, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PowerOfAttorneyTypeName,
    meta,
    fieldConfig,
    powerOfAttorney,
    renderContext,
    PowerOfAttorneySubElementsMap,
  )
}
