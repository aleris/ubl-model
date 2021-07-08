import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualificationResponse } from  '../../model/doc/TendererQualificationResponse'
import { TendererQualificationResponseField, TendererQualificationResponseFieldMeta, TendererQualificationResponseTypeName } from  '../../meta/doc/TendererQualificationResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AppealTermsDisplay } from '../cac/AppealTermsDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { QualificationResolutionDisplay } from '../cac/QualificationResolutionDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TendererQualificationResponse, void>
  tendererQualificationResponse: TendererQualificationResponse[] | undefined
  renderContext: RenderContext
}

export const TendererQualificationResponseSubElementsMap: SubElementsTemplatesMap<TendererQualificationResponseField, TendererQualificationResponse, void> = new Map([
    [
      TendererQualificationResponseField.UBLExtensions,
      { meta: TendererQualificationResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TendererQualificationResponseField.UBLExtensions}
          meta={TendererQualificationResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.UBLVersionID,
      { meta: TendererQualificationResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.UBLVersionID}
          meta={TendererQualificationResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.CustomizationID,
      { meta: TendererQualificationResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.CustomizationID}
          meta={TendererQualificationResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ProfileID,
      { meta: TendererQualificationResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.ProfileID}
          meta={TendererQualificationResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ProfileExecutionID,
      { meta: TendererQualificationResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.ProfileExecutionID}
          meta={TendererQualificationResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ID,
      { meta: TendererQualificationResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.ID}
          meta={TendererQualificationResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.CopyIndicator,
      { meta: TendererQualificationResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TendererQualificationResponseField.CopyIndicator}
          meta={TendererQualificationResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.UUID,
      { meta: TendererQualificationResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.UUID}
          meta={TendererQualificationResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ContractFolderID,
      { meta: TendererQualificationResponseFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationResponseField.ContractFolderID}
          meta={TendererQualificationResponseFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ContractName,
      { meta: TendererQualificationResponseFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationResponseField.ContractName}
          meta={TendererQualificationResponseFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.IssueDate,
      { meta: TendererQualificationResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TendererQualificationResponseField.IssueDate}
          meta={TendererQualificationResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.IssueTime,
      { meta: TendererQualificationResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TendererQualificationResponseField.IssueTime}
          meta={TendererQualificationResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.Note,
      { meta: TendererQualificationResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationResponseField.Note}
          meta={TendererQualificationResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.SenderParty,
      { meta: TendererQualificationResponseFieldMeta.SenderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TendererQualificationResponseField.SenderParty}
          meta={TendererQualificationResponseFieldMeta.SenderParty}
          fieldConfig={fieldConfig}
          party={value?.SenderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ReceiverParty,
      { meta: TendererQualificationResponseFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TendererQualificationResponseField.ReceiverParty}
          meta={TendererQualificationResponseFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.ResolutionDocumentReference,
      { meta: TendererQualificationResponseFieldMeta.ResolutionDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TendererQualificationResponseField.ResolutionDocumentReference}
          meta={TendererQualificationResponseFieldMeta.ResolutionDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ResolutionDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.QualificationResolution,
      { meta: TendererQualificationResponseFieldMeta.QualificationResolution,
        template: ({value, renderContext, fieldConfig}) => <QualificationResolutionDisplay
          key={TendererQualificationResponseField.QualificationResolution}
          meta={TendererQualificationResponseFieldMeta.QualificationResolution}
          fieldConfig={fieldConfig}
          qualificationResolution={value?.QualificationResolution}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.AppealTerms,
      { meta: TendererQualificationResponseFieldMeta.AppealTerms,
        template: ({value, renderContext, fieldConfig}) => <AppealTermsDisplay
          key={TendererQualificationResponseField.AppealTerms}
          meta={TendererQualificationResponseFieldMeta.AppealTerms}
          fieldConfig={fieldConfig}
          appealTerms={value?.AppealTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationResponseField.Signature,
      { meta: TendererQualificationResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TendererQualificationResponseField.Signature}
          meta={TendererQualificationResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function TendererQualificationResponseDisplay<TFieldMeta>({ meta, fieldConfig, tendererQualificationResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TendererQualificationResponseTypeName,
    meta,
    fieldConfig,
    tendererQualificationResponse,
    renderContext,
    TendererQualificationResponseSubElementsMap,
  )
}
