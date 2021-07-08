import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CertificateOfOrigin } from  '../../model/doc/CertificateOfOrigin'
import { CertificateOfOriginField, CertificateOfOriginFieldMeta, CertificateOfOriginTypeName } from  '../../meta/doc/CertificateOfOriginMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CertificateOfOriginApplicationDisplay } from '../cac/CertificateOfOriginApplicationDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { EndorsementDisplay } from '../cac/EndorsementDisplay'
import { EndorserPartyDisplay } from '../cac/EndorserPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CertificateOfOrigin, void>
  certificateOfOrigin: CertificateOfOrigin[] | undefined
  renderContext: RenderContext
}

export const CertificateOfOriginSubElementsMap: SubElementsTemplatesMap<CertificateOfOriginField, CertificateOfOrigin, void> = new Map([
    [
      CertificateOfOriginField.UBLExtensions,
      { meta: CertificateOfOriginFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CertificateOfOriginField.UBLExtensions}
          meta={CertificateOfOriginFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.UBLVersionID,
      { meta: CertificateOfOriginFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.UBLVersionID}
          meta={CertificateOfOriginFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.CustomizationID,
      { meta: CertificateOfOriginFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.CustomizationID}
          meta={CertificateOfOriginFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.ProfileID,
      { meta: CertificateOfOriginFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.ProfileID}
          meta={CertificateOfOriginFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.ProfileExecutionID,
      { meta: CertificateOfOriginFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.ProfileExecutionID}
          meta={CertificateOfOriginFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.ID,
      { meta: CertificateOfOriginFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.ID}
          meta={CertificateOfOriginFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.UUID,
      { meta: CertificateOfOriginFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.UUID}
          meta={CertificateOfOriginFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.IssueDate,
      { meta: CertificateOfOriginFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={CertificateOfOriginField.IssueDate}
          meta={CertificateOfOriginFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.IssueTime,
      { meta: CertificateOfOriginFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={CertificateOfOriginField.IssueTime}
          meta={CertificateOfOriginFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.Description,
      { meta: CertificateOfOriginFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateOfOriginField.Description}
          meta={CertificateOfOriginFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.Note,
      { meta: CertificateOfOriginFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateOfOriginField.Note}
          meta={CertificateOfOriginFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.VersionID,
      { meta: CertificateOfOriginFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginField.VersionID}
          meta={CertificateOfOriginFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.Signature,
      { meta: CertificateOfOriginFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CertificateOfOriginField.Signature}
          meta={CertificateOfOriginFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.ExporterParty,
      { meta: CertificateOfOriginFieldMeta.ExporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginField.ExporterParty}
          meta={CertificateOfOriginFieldMeta.ExporterParty}
          fieldConfig={fieldConfig}
          party={value?.ExporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.ImporterParty,
      { meta: CertificateOfOriginFieldMeta.ImporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginField.ImporterParty}
          meta={CertificateOfOriginFieldMeta.ImporterParty}
          fieldConfig={fieldConfig}
          party={value?.ImporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.EndorserParty,
      { meta: CertificateOfOriginFieldMeta.EndorserParty,
        template: ({value, renderContext, fieldConfig}) => <EndorserPartyDisplay
          key={CertificateOfOriginField.EndorserParty}
          meta={CertificateOfOriginFieldMeta.EndorserParty}
          fieldConfig={fieldConfig}
          endorserParty={value?.EndorserParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.CertificateOfOriginApplication,
      { meta: CertificateOfOriginFieldMeta.CertificateOfOriginApplication,
        template: ({value, renderContext, fieldConfig}) => <CertificateOfOriginApplicationDisplay
          key={CertificateOfOriginField.CertificateOfOriginApplication}
          meta={CertificateOfOriginFieldMeta.CertificateOfOriginApplication}
          fieldConfig={fieldConfig}
          certificateOfOriginApplication={value?.CertificateOfOriginApplication}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.IssuerEndorsement,
      { meta: CertificateOfOriginFieldMeta.IssuerEndorsement,
        template: ({value, renderContext, fieldConfig}) => <EndorsementDisplay
          key={CertificateOfOriginField.IssuerEndorsement}
          meta={CertificateOfOriginFieldMeta.IssuerEndorsement}
          fieldConfig={fieldConfig}
          endorsement={value?.IssuerEndorsement}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.EmbassyEndorsement,
      { meta: CertificateOfOriginFieldMeta.EmbassyEndorsement,
        template: ({value, renderContext, fieldConfig}) => <EndorsementDisplay
          key={CertificateOfOriginField.EmbassyEndorsement}
          meta={CertificateOfOriginFieldMeta.EmbassyEndorsement}
          fieldConfig={fieldConfig}
          endorsement={value?.EmbassyEndorsement}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginField.InsuranceEndorsement,
      { meta: CertificateOfOriginFieldMeta.InsuranceEndorsement,
        template: ({value, renderContext, fieldConfig}) => <EndorsementDisplay
          key={CertificateOfOriginField.InsuranceEndorsement}
          meta={CertificateOfOriginFieldMeta.InsuranceEndorsement}
          fieldConfig={fieldConfig}
          endorsement={value?.InsuranceEndorsement}
          renderContext={renderContext}
        />}
    ]
]) 

export function CertificateOfOriginDisplay<TFieldMeta>({ meta, fieldConfig, certificateOfOrigin, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CertificateOfOriginTypeName,
    meta,
    fieldConfig,
    certificateOfOrigin,
    renderContext,
    CertificateOfOriginSubElementsMap,
  )
}
