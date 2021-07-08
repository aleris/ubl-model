import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CertificateOfOriginApplication } from  '../../model/cac/CertificateOfOriginApplication'
import { CertificateOfOriginApplicationField, CertificateOfOriginApplicationFieldMeta, CertificateOfOriginApplicationTypeName } from  '../../meta/cac/CertificateOfOriginApplicationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CountryDisplay } from './CountryDisplay'
import { DocumentDistributionDisplay } from './DocumentDistributionDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { EndorserPartyDisplay } from './EndorserPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { SignatureDisplay } from './SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CertificateOfOriginApplication, void>
  certificateOfOriginApplication: CertificateOfOriginApplication[] | undefined
  renderContext: RenderContext
}

export const CertificateOfOriginApplicationSubElementsMap: SubElementsTemplatesMap<CertificateOfOriginApplicationField, CertificateOfOriginApplication, void> = new Map([
    [
      CertificateOfOriginApplicationField.UBLExtensions,
      { meta: CertificateOfOriginApplicationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CertificateOfOriginApplicationField.UBLExtensions}
          meta={CertificateOfOriginApplicationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.ReferenceID,
      { meta: CertificateOfOriginApplicationFieldMeta.ReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginApplicationField.ReferenceID}
          meta={CertificateOfOriginApplicationFieldMeta.ReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.ReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.CertificateType,
      { meta: CertificateOfOriginApplicationFieldMeta.CertificateType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateOfOriginApplicationField.CertificateType}
          meta={CertificateOfOriginApplicationFieldMeta.CertificateType}
          fieldConfig={fieldConfig}
          text={value?.CertificateType}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.ApplicationStatusCode,
      { meta: CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CertificateOfOriginApplicationField.ApplicationStatusCode}
          meta={CertificateOfOriginApplicationFieldMeta.ApplicationStatusCode}
          fieldConfig={fieldConfig}
          code={value?.ApplicationStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.OriginalJobID,
      { meta: CertificateOfOriginApplicationFieldMeta.OriginalJobID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginApplicationField.OriginalJobID}
          meta={CertificateOfOriginApplicationFieldMeta.OriginalJobID}
          fieldConfig={fieldConfig}
          identifier={value?.OriginalJobID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.PreviousJobID,
      { meta: CertificateOfOriginApplicationFieldMeta.PreviousJobID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CertificateOfOriginApplicationField.PreviousJobID}
          meta={CertificateOfOriginApplicationFieldMeta.PreviousJobID}
          fieldConfig={fieldConfig}
          identifier={value?.PreviousJobID}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.Remarks,
      { meta: CertificateOfOriginApplicationFieldMeta.Remarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CertificateOfOriginApplicationField.Remarks}
          meta={CertificateOfOriginApplicationFieldMeta.Remarks}
          fieldConfig={fieldConfig}
          text={value?.Remarks}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.Shipment,
      { meta: CertificateOfOriginApplicationFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={CertificateOfOriginApplicationField.Shipment}
          meta={CertificateOfOriginApplicationFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.EndorserParty,
      { meta: CertificateOfOriginApplicationFieldMeta.EndorserParty,
        template: ({value, renderContext, fieldConfig}) => <EndorserPartyDisplay
          key={CertificateOfOriginApplicationField.EndorserParty}
          meta={CertificateOfOriginApplicationFieldMeta.EndorserParty}
          fieldConfig={fieldConfig}
          endorserParty={value?.EndorserParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.PreparationParty,
      { meta: CertificateOfOriginApplicationFieldMeta.PreparationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginApplicationField.PreparationParty}
          meta={CertificateOfOriginApplicationFieldMeta.PreparationParty}
          fieldConfig={fieldConfig}
          party={value?.PreparationParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.IssuerParty,
      { meta: CertificateOfOriginApplicationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginApplicationField.IssuerParty}
          meta={CertificateOfOriginApplicationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.ExporterParty,
      { meta: CertificateOfOriginApplicationFieldMeta.ExporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginApplicationField.ExporterParty}
          meta={CertificateOfOriginApplicationFieldMeta.ExporterParty}
          fieldConfig={fieldConfig}
          party={value?.ExporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.ImporterParty,
      { meta: CertificateOfOriginApplicationFieldMeta.ImporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={CertificateOfOriginApplicationField.ImporterParty}
          meta={CertificateOfOriginApplicationFieldMeta.ImporterParty}
          fieldConfig={fieldConfig}
          party={value?.ImporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.IssuingCountry,
      { meta: CertificateOfOriginApplicationFieldMeta.IssuingCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={CertificateOfOriginApplicationField.IssuingCountry}
          meta={CertificateOfOriginApplicationFieldMeta.IssuingCountry}
          fieldConfig={fieldConfig}
          country={value?.IssuingCountry}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.DocumentDistribution,
      { meta: CertificateOfOriginApplicationFieldMeta.DocumentDistribution,
        template: ({value, renderContext, fieldConfig}) => <DocumentDistributionDisplay
          key={CertificateOfOriginApplicationField.DocumentDistribution}
          meta={CertificateOfOriginApplicationFieldMeta.DocumentDistribution}
          fieldConfig={fieldConfig}
          documentDistribution={value?.DocumentDistribution}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.SupportingDocumentReference,
      { meta: CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={CertificateOfOriginApplicationField.SupportingDocumentReference}
          meta={CertificateOfOriginApplicationFieldMeta.SupportingDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.SupportingDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      CertificateOfOriginApplicationField.Signature,
      { meta: CertificateOfOriginApplicationFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={CertificateOfOriginApplicationField.Signature}
          meta={CertificateOfOriginApplicationFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ]
]) 

export function CertificateOfOriginApplicationDisplay<TFieldMeta>({ meta, fieldConfig, certificateOfOriginApplication, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CertificateOfOriginApplicationTypeName,
    meta,
    fieldConfig,
    certificateOfOriginApplication,
    renderContext,
    CertificateOfOriginApplicationSubElementsMap,
  )
}
