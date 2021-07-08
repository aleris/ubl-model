import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DigitalAgreement } from  '../../model/doc/DigitalAgreement'
import { DigitalAgreementField, DigitalAgreementFieldMeta, DigitalAgreementTypeName } from  '../../meta/doc/DigitalAgreementMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CountryDisplay } from '../cac/CountryDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DigitalAgreementTermsDisplay } from '../cac/DigitalAgreementTermsDisplay'
import { DigitalProcessDisplay } from '../cac/DigitalProcessDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ParticipantPartyDisplay } from '../cac/ParticipantPartyDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DigitalAgreement, void>
  digitalAgreement: DigitalAgreement[] | undefined
  renderContext: RenderContext
}

export const DigitalAgreementSubElementsMap: SubElementsTemplatesMap<DigitalAgreementField, DigitalAgreement, void> = new Map([
    [
      DigitalAgreementField.UBLExtensions,
      { meta: DigitalAgreementFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DigitalAgreementField.UBLExtensions}
          meta={DigitalAgreementFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.UBLVersionID,
      { meta: DigitalAgreementFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.UBLVersionID}
          meta={DigitalAgreementFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.CustomizationID,
      { meta: DigitalAgreementFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.CustomizationID}
          meta={DigitalAgreementFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.ProfileID,
      { meta: DigitalAgreementFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.ProfileID}
          meta={DigitalAgreementFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.ProfileExecutionID,
      { meta: DigitalAgreementFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.ProfileExecutionID}
          meta={DigitalAgreementFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.ID,
      { meta: DigitalAgreementFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.ID}
          meta={DigitalAgreementFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.UUID,
      { meta: DigitalAgreementFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.UUID}
          meta={DigitalAgreementFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.IssueDate,
      { meta: DigitalAgreementFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={DigitalAgreementField.IssueDate}
          meta={DigitalAgreementFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.IssueTime,
      { meta: DigitalAgreementFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={DigitalAgreementField.IssueTime}
          meta={DigitalAgreementFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.AgreementTypeCode,
      { meta: DigitalAgreementFieldMeta.AgreementTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DigitalAgreementField.AgreementTypeCode}
          meta={DigitalAgreementFieldMeta.AgreementTypeCode}
          fieldConfig={fieldConfig}
          code={value?.AgreementTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.VersionID,
      { meta: DigitalAgreementFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.VersionID}
          meta={DigitalAgreementFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.PreviousVersionID,
      { meta: DigitalAgreementFieldMeta.PreviousVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DigitalAgreementField.PreviousVersionID}
          meta={DigitalAgreementFieldMeta.PreviousVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.RequiredResponseMessageLevelCode,
      { meta: DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={DigitalAgreementField.RequiredResponseMessageLevelCode}
          meta={DigitalAgreementFieldMeta.RequiredResponseMessageLevelCode}
          fieldConfig={fieldConfig}
          code={value?.RequiredResponseMessageLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.Signature,
      { meta: DigitalAgreementFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={DigitalAgreementField.Signature}
          meta={DigitalAgreementFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.GovernorParty,
      { meta: DigitalAgreementFieldMeta.GovernorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={DigitalAgreementField.GovernorParty}
          meta={DigitalAgreementFieldMeta.GovernorParty}
          fieldConfig={fieldConfig}
          party={value?.GovernorParty}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.ParticipantParty,
      { meta: DigitalAgreementFieldMeta.ParticipantParty,
        template: ({value, renderContext, fieldConfig}) => <ParticipantPartyDisplay
          key={DigitalAgreementField.ParticipantParty}
          meta={DigitalAgreementFieldMeta.ParticipantParty}
          fieldConfig={fieldConfig}
          participantParty={value?.ParticipantParty}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.AgreementCountry,
      { meta: DigitalAgreementFieldMeta.AgreementCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={DigitalAgreementField.AgreementCountry}
          meta={DigitalAgreementFieldMeta.AgreementCountry}
          fieldConfig={fieldConfig}
          country={value?.AgreementCountry}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.RequiredCertificationDocumentReference,
      { meta: DigitalAgreementFieldMeta.RequiredCertificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={DigitalAgreementField.RequiredCertificationDocumentReference}
          meta={DigitalAgreementFieldMeta.RequiredCertificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.RequiredCertificationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.DigitalAgreementTerms,
      { meta: DigitalAgreementFieldMeta.DigitalAgreementTerms,
        template: ({value, renderContext, fieldConfig}) => <DigitalAgreementTermsDisplay
          key={DigitalAgreementField.DigitalAgreementTerms}
          meta={DigitalAgreementFieldMeta.DigitalAgreementTerms}
          fieldConfig={fieldConfig}
          digitalAgreementTerms={value?.DigitalAgreementTerms}
          renderContext={renderContext}
        />}
    ],

    [
      DigitalAgreementField.DigitalProcess,
      { meta: DigitalAgreementFieldMeta.DigitalProcess,
        template: ({value, renderContext, fieldConfig}) => <DigitalProcessDisplay
          key={DigitalAgreementField.DigitalProcess}
          meta={DigitalAgreementFieldMeta.DigitalProcess}
          fieldConfig={fieldConfig}
          digitalProcess={value?.DigitalProcess}
          renderContext={renderContext}
        />}
    ]
]) 

export function DigitalAgreementDisplay<TFieldMeta>({ meta, fieldConfig, digitalAgreement, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DigitalAgreementTypeName,
    meta,
    fieldConfig,
    digitalAgreement,
    renderContext,
    DigitalAgreementSubElementsMap,
  )
}
