import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ApplicationResponse } from  '../../model/doc/ApplicationResponse'
import { ApplicationResponseField, ApplicationResponseFieldMeta, ApplicationResponseTypeName } from  '../../meta/doc/ApplicationResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentResponseDisplay } from '../cac/DocumentResponseDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ApplicationResponse, void>
  applicationResponse: ApplicationResponse[] | undefined
  renderContext: RenderContext
}

export const ApplicationResponseSubElementsMap: SubElementsTemplatesMap<ApplicationResponseField, ApplicationResponse, void> = new Map([
    [
      ApplicationResponseField.UBLExtensions,
      { meta: ApplicationResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ApplicationResponseField.UBLExtensions}
          meta={ApplicationResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.UBLVersionID,
      { meta: ApplicationResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.UBLVersionID}
          meta={ApplicationResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.CustomizationID,
      { meta: ApplicationResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.CustomizationID}
          meta={ApplicationResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ProfileID,
      { meta: ApplicationResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.ProfileID}
          meta={ApplicationResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ProfileExecutionID,
      { meta: ApplicationResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.ProfileExecutionID}
          meta={ApplicationResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ID,
      { meta: ApplicationResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.ID}
          meta={ApplicationResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.UUID,
      { meta: ApplicationResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.UUID}
          meta={ApplicationResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.IssueDate,
      { meta: ApplicationResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ApplicationResponseField.IssueDate}
          meta={ApplicationResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.IssueTime,
      { meta: ApplicationResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ApplicationResponseField.IssueTime}
          meta={ApplicationResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ResponseDate,
      { meta: ApplicationResponseFieldMeta.ResponseDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ApplicationResponseField.ResponseDate}
          meta={ApplicationResponseFieldMeta.ResponseDate}
          fieldConfig={fieldConfig}
          date={value?.ResponseDate}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ResponseTime,
      { meta: ApplicationResponseFieldMeta.ResponseTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ApplicationResponseField.ResponseTime}
          meta={ApplicationResponseFieldMeta.ResponseTime}
          fieldConfig={fieldConfig}
          time={value?.ResponseTime}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.Note,
      { meta: ApplicationResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ApplicationResponseField.Note}
          meta={ApplicationResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.VersionID,
      { meta: ApplicationResponseFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ApplicationResponseField.VersionID}
          meta={ApplicationResponseFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.Signature,
      { meta: ApplicationResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={ApplicationResponseField.Signature}
          meta={ApplicationResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.SenderParty,
      { meta: ApplicationResponseFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ApplicationResponseField.SenderParty}
          meta={ApplicationResponseFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.ReceiverParty,
      { meta: ApplicationResponseFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ApplicationResponseField.ReceiverParty}
          meta={ApplicationResponseFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      ApplicationResponseField.DocumentResponse,
      { meta: ApplicationResponseFieldMeta.DocumentResponse,
        template: ({value, renderContext, fieldConfig}) => <DocumentResponseDisplay
          key={ApplicationResponseField.DocumentResponse}
          meta={ApplicationResponseFieldMeta.DocumentResponse}
          fieldConfig={fieldConfig}
          documentResponse={value?.DocumentResponse}
          renderContext={renderContext}
        />}
    ]
]) 

export function ApplicationResponseDisplay<TFieldMeta>({ meta, fieldConfig, applicationResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ApplicationResponseTypeName,
    meta,
    fieldConfig,
    applicationResponse,
    renderContext,
    ApplicationResponseSubElementsMap,
  )
}
