import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TendererQualification } from  '../../model/doc/TendererQualification'
import { TendererQualificationField, TendererQualificationFieldMeta, TendererQualificationTypeName } from  '../../meta/doc/TendererQualificationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EvidenceDisplay } from '../cac/EvidenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TendererPartyQualificationDisplay } from '../cac/TendererPartyQualificationDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TendererQualification, void>
  tendererQualification: TendererQualification[] | undefined
  renderContext: RenderContext
}

export const TendererQualificationSubElementsMap: SubElementsTemplatesMap<TendererQualificationField, TendererQualification, void> = new Map([
    [
      TendererQualificationField.UBLExtensions,
      { meta: TendererQualificationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TendererQualificationField.UBLExtensions}
          meta={TendererQualificationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.UBLVersionID,
      { meta: TendererQualificationFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.UBLVersionID}
          meta={TendererQualificationFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.CustomizationID,
      { meta: TendererQualificationFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.CustomizationID}
          meta={TendererQualificationFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.ProfileID,
      { meta: TendererQualificationFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.ProfileID}
          meta={TendererQualificationFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.ProfileExecutionID,
      { meta: TendererQualificationFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.ProfileExecutionID}
          meta={TendererQualificationFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.ID,
      { meta: TendererQualificationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.ID}
          meta={TendererQualificationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.CopyIndicator,
      { meta: TendererQualificationFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TendererQualificationField.CopyIndicator}
          meta={TendererQualificationFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.UUID,
      { meta: TendererQualificationFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.UUID}
          meta={TendererQualificationFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.ContractFolderID,
      { meta: TendererQualificationFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.ContractFolderID}
          meta={TendererQualificationFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.IssueDate,
      { meta: TendererQualificationFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TendererQualificationField.IssueDate}
          meta={TendererQualificationFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.IssueTime,
      { meta: TendererQualificationFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TendererQualificationField.IssueTime}
          meta={TendererQualificationFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.Note,
      { meta: TendererQualificationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TendererQualificationField.Note}
          meta={TendererQualificationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.VersionID,
      { meta: TendererQualificationFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.VersionID}
          meta={TendererQualificationFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.PreviousVersionID,
      { meta: TendererQualificationFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TendererQualificationField.PreviousVersionID}
          meta={TendererQualificationFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.Signature,
      { meta: TendererQualificationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TendererQualificationField.Signature}
          meta={TendererQualificationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.TendererPartyQualification,
      { meta: TendererQualificationFieldMeta.TendererPartyQualification,
        template: ({value, renderContext, fieldConfig}) => <TendererPartyQualificationDisplay
          key={TendererQualificationField.TendererPartyQualification}
          meta={TendererQualificationFieldMeta.TendererPartyQualification}
          fieldConfig={fieldConfig}
          tendererPartyQualification={value?.TendererPartyQualification}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.ContractingParty,
      { meta: TendererQualificationFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TendererQualificationField.ContractingParty}
          meta={TendererQualificationFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.Evidence,
      { meta: TendererQualificationFieldMeta.Evidence,
        template: ({value, renderContext, fieldConfig}) => <EvidenceDisplay
          key={TendererQualificationField.Evidence}
          meta={TendererQualificationFieldMeta.Evidence}
          fieldConfig={fieldConfig}
          evidence={value?.Evidence}
          renderContext={renderContext}
        />}
    ],

    [
      TendererQualificationField.AdditionalDocumentReference,
      { meta: TendererQualificationFieldMeta.AdditionalDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TendererQualificationField.AdditionalDocumentReference}
          meta={TendererQualificationFieldMeta.AdditionalDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.AdditionalDocumentReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function TendererQualificationDisplay<TFieldMeta>({ meta, fieldConfig, tendererQualification, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TendererQualificationTypeName,
    meta,
    fieldConfig,
    tendererQualification,
    renderContext,
    TendererQualificationSubElementsMap,
  )
}
