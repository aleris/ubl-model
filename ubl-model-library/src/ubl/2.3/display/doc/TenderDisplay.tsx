import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Tender } from  '../../model/doc/Tender'
import { TenderField, TenderFieldMeta, TenderTypeName } from  '../../meta/doc/TenderMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { CustomerPartyDisplay } from '../cac/CustomerPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { PeriodDisplay } from '../cac/PeriodDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderedProjectDisplay } from '../cac/TenderedProjectDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Tender, void>
  tender: Tender[] | undefined
  renderContext: RenderContext
}

export const TenderSubElementsMap: SubElementsTemplatesMap<TenderField, Tender, void> = new Map([
    [
      TenderField.UBLExtensions,
      { meta: TenderFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderField.UBLExtensions}
          meta={TenderFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.UBLVersionID,
      { meta: TenderFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.UBLVersionID}
          meta={TenderFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.CustomizationID,
      { meta: TenderFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.CustomizationID}
          meta={TenderFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ProfileID,
      { meta: TenderFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.ProfileID}
          meta={TenderFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ProfileExecutionID,
      { meta: TenderFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.ProfileExecutionID}
          meta={TenderFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ID,
      { meta: TenderFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.ID}
          meta={TenderFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.CopyIndicator,
      { meta: TenderFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderField.CopyIndicator}
          meta={TenderFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.UUID,
      { meta: TenderFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.UUID}
          meta={TenderFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.TenderTypeCode,
      { meta: TenderFieldMeta.TenderTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TenderField.TenderTypeCode}
          meta={TenderFieldMeta.TenderTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TenderTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ContractFolderID,
      { meta: TenderFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderField.ContractFolderID}
          meta={TenderFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.IssueDate,
      { meta: TenderFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderField.IssueDate}
          meta={TenderFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.IssueTime,
      { meta: TenderFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderField.IssueTime}
          meta={TenderFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ContractName,
      { meta: TenderFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderField.ContractName}
          meta={TenderFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.Note,
      { meta: TenderFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderField.Note}
          meta={TenderFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ValidityPeriod,
      { meta: TenderFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={TenderField.ValidityPeriod}
          meta={TenderFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.CallForTenderDocumentReference,
      { meta: TenderFieldMeta.CallForTenderDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderField.CallForTenderDocumentReference}
          meta={TenderFieldMeta.CallForTenderDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.CallForTenderDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.DocumentReference,
      { meta: TenderFieldMeta.DocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderField.DocumentReference}
          meta={TenderFieldMeta.DocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.DocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.Signature,
      { meta: TenderFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderField.Signature}
          meta={TenderFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.TendererParty,
      { meta: TenderFieldMeta.TendererParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderField.TendererParty}
          meta={TenderFieldMeta.TendererParty}
          fieldConfig={fieldConfig}
          party={value?.TendererParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.TendererQualificationDocumentReference,
      { meta: TenderFieldMeta.TendererQualificationDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderField.TendererQualificationDocumentReference}
          meta={TenderFieldMeta.TendererQualificationDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.TendererQualificationDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.SubcontractorParty,
      { meta: TenderFieldMeta.SubcontractorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderField.SubcontractorParty}
          meta={TenderFieldMeta.SubcontractorParty}
          fieldConfig={fieldConfig}
          party={value?.SubcontractorParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.ContractingParty,
      { meta: TenderFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TenderField.ContractingParty}
          meta={TenderFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.OriginatorCustomerParty,
      { meta: TenderFieldMeta.OriginatorCustomerParty,
        template: ({value, renderContext, fieldConfig}) => <CustomerPartyDisplay
          key={TenderField.OriginatorCustomerParty}
          meta={TenderFieldMeta.OriginatorCustomerParty}
          fieldConfig={fieldConfig}
          customerParty={value?.OriginatorCustomerParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderField.TenderedProject,
      { meta: TenderFieldMeta.TenderedProject,
        template: ({value, renderContext, fieldConfig}) => <TenderedProjectDisplay
          key={TenderField.TenderedProject}
          meta={TenderFieldMeta.TenderedProject}
          fieldConfig={fieldConfig}
          tenderedProject={value?.TenderedProject}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderDisplay<TFieldMeta>({ meta, fieldConfig, tender, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderTypeName,
    meta,
    fieldConfig,
    tender,
    renderContext,
    TenderSubElementsMap,
  )
}
