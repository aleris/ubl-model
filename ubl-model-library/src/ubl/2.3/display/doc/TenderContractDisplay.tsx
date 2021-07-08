import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderContract } from  '../../model/doc/TenderContract'
import { TenderContractField, TenderContractFieldMeta, TenderContractTypeName } from  '../../meta/doc/TenderContractMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PartyDisplay } from '../cac/PartyDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TenderingProcessDisplay } from '../cac/TenderingProcessDisplay'
import { TenderingTermsDisplay } from '../cac/TenderingTermsDisplay'
import { TenderResultDisplay } from '../cac/TenderResultDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderContract, void>
  tenderContract: TenderContract[] | undefined
  renderContext: RenderContext
}

export const TenderContractSubElementsMap: SubElementsTemplatesMap<TenderContractField, TenderContract, void> = new Map([
    [
      TenderContractField.UBLExtensions,
      { meta: TenderContractFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderContractField.UBLExtensions}
          meta={TenderContractFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.UBLVersionID,
      { meta: TenderContractFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.UBLVersionID}
          meta={TenderContractFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.CustomizationID,
      { meta: TenderContractFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.CustomizationID}
          meta={TenderContractFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ProfileID,
      { meta: TenderContractFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.ProfileID}
          meta={TenderContractFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ProfileExecutionID,
      { meta: TenderContractFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.ProfileExecutionID}
          meta={TenderContractFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ID,
      { meta: TenderContractFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.ID}
          meta={TenderContractFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.CopyIndicator,
      { meta: TenderContractFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderContractField.CopyIndicator}
          meta={TenderContractFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.UUID,
      { meta: TenderContractFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.UUID}
          meta={TenderContractFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ContractFolderID,
      { meta: TenderContractFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderContractField.ContractFolderID}
          meta={TenderContractFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.IssueDate,
      { meta: TenderContractFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderContractField.IssueDate}
          meta={TenderContractFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.IssueTime,
      { meta: TenderContractFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderContractField.IssueTime}
          meta={TenderContractFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ContractName,
      { meta: TenderContractFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderContractField.ContractName}
          meta={TenderContractFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.Note,
      { meta: TenderContractFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderContractField.Note}
          meta={TenderContractFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.RegulatoryDomain,
      { meta: TenderContractFieldMeta.RegulatoryDomain,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderContractField.RegulatoryDomain}
          meta={TenderContractFieldMeta.RegulatoryDomain}
          fieldConfig={fieldConfig}
          text={value?.RegulatoryDomain}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.PublishAwardIndicator,
      { meta: TenderContractFieldMeta.PublishAwardIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderContractField.PublishAwardIndicator}
          meta={TenderContractFieldMeta.PublishAwardIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PublishAwardIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.PreviousDocumentReference,
      { meta: TenderContractFieldMeta.PreviousDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderContractField.PreviousDocumentReference}
          meta={TenderContractFieldMeta.PreviousDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.PreviousDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ContractDocumentReference,
      { meta: TenderContractFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TenderContractField.ContractDocumentReference}
          meta={TenderContractFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.Signature,
      { meta: TenderContractFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderContractField.Signature}
          meta={TenderContractFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ContractingParty,
      { meta: TenderContractFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TenderContractField.ContractingParty}
          meta={TenderContractFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.EconomicOperatorParty,
      { meta: TenderContractFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={TenderContractField.EconomicOperatorParty}
          meta={TenderContractFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ReceiverParty,
      { meta: TenderContractFieldMeta.ReceiverParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TenderContractField.ReceiverParty}
          meta={TenderContractFieldMeta.ReceiverParty}
          fieldConfig={fieldConfig}
          party={value?.ReceiverParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.TenderingTerms,
      { meta: TenderContractFieldMeta.TenderingTerms,
        template: ({value, renderContext, fieldConfig}) => <TenderingTermsDisplay
          key={TenderContractField.TenderingTerms}
          meta={TenderContractFieldMeta.TenderingTerms}
          fieldConfig={fieldConfig}
          tenderingTerms={value?.TenderingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.TenderingProcess,
      { meta: TenderContractFieldMeta.TenderingProcess,
        template: ({value, renderContext, fieldConfig}) => <TenderingProcessDisplay
          key={TenderContractField.TenderingProcess}
          meta={TenderContractFieldMeta.TenderingProcess}
          fieldConfig={fieldConfig}
          tenderingProcess={value?.TenderingProcess}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ProcurementProject,
      { meta: TenderContractFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={TenderContractField.ProcurementProject}
          meta={TenderContractFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.ProcurementProjectLot,
      { meta: TenderContractFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TenderContractField.ProcurementProjectLot}
          meta={TenderContractFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ],

    [
      TenderContractField.TenderResult,
      { meta: TenderContractFieldMeta.TenderResult,
        template: ({value, renderContext, fieldConfig}) => <TenderResultDisplay
          key={TenderContractField.TenderResult}
          meta={TenderContractFieldMeta.TenderResult}
          fieldConfig={fieldConfig}
          tenderResult={value?.TenderResult}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderContractDisplay<TFieldMeta>({ meta, fieldConfig, tenderContract, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderContractTypeName,
    meta,
    fieldConfig,
    tenderContract,
    renderContext,
    TenderContractSubElementsMap,
  )
}
