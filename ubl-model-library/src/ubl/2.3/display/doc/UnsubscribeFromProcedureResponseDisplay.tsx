import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UnsubscribeFromProcedureResponse } from  '../../model/doc/UnsubscribeFromProcedureResponse'
import { UnsubscribeFromProcedureResponseField, UnsubscribeFromProcedureResponseFieldMeta, UnsubscribeFromProcedureResponseTypeName } from  '../../meta/doc/UnsubscribeFromProcedureResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DocumentReferenceDisplay } from '../cac/DocumentReferenceDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotReferenceDisplay } from '../cac/ProcurementProjectLotReferenceDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UnsubscribeFromProcedureResponse, void>
  unsubscribeFromProcedureResponse: UnsubscribeFromProcedureResponse[] | undefined
  renderContext: RenderContext
}

export const UnsubscribeFromProcedureResponseSubElementsMap: SubElementsTemplatesMap<UnsubscribeFromProcedureResponseField, UnsubscribeFromProcedureResponse, void> = new Map([
    [
      UnsubscribeFromProcedureResponseField.UBLExtensions,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={UnsubscribeFromProcedureResponseField.UBLExtensions}
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.UBLVersionID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.UBLVersionID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.CustomizationID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.CustomizationID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ProfileID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.ProfileID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ProfileExecutionID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.ProfileExecutionID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.ID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.CopyIndicator,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={UnsubscribeFromProcedureResponseField.CopyIndicator}
          meta={UnsubscribeFromProcedureResponseFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.UUID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.UUID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ContractFolderID,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={UnsubscribeFromProcedureResponseField.ContractFolderID}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.IssueDate,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={UnsubscribeFromProcedureResponseField.IssueDate}
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.IssueTime,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={UnsubscribeFromProcedureResponseField.IssueTime}
          meta={UnsubscribeFromProcedureResponseFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.Note,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={UnsubscribeFromProcedureResponseField.Note}
          meta={UnsubscribeFromProcedureResponseFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.UnsubscribeToProcedureDocumentReference,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={UnsubscribeFromProcedureResponseField.UnsubscribeToProcedureDocumentReference}
          meta={UnsubscribeFromProcedureResponseFieldMeta.UnsubscribeToProcedureDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.UnsubscribeToProcedureDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.Signature,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={UnsubscribeFromProcedureResponseField.Signature}
          meta={UnsubscribeFromProcedureResponseFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.EconomicOperatorParty,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={UnsubscribeFromProcedureResponseField.EconomicOperatorParty}
          meta={UnsubscribeFromProcedureResponseFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ContractingParty,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={UnsubscribeFromProcedureResponseField.ContractingParty}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ProcurementProject,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={UnsubscribeFromProcedureResponseField.ProcurementProject}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      UnsubscribeFromProcedureResponseField.ProcurementProjectLotReference,
      { meta: UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotReferenceDisplay
          key={UnsubscribeFromProcedureResponseField.ProcurementProjectLotReference}
          meta={UnsubscribeFromProcedureResponseFieldMeta.ProcurementProjectLotReference}
          fieldConfig={fieldConfig}
          procurementProjectLotReference={value?.ProcurementProjectLotReference}
          renderContext={renderContext}
        />}
    ]
]) 

export function UnsubscribeFromProcedureResponseDisplay<TFieldMeta>({ meta, fieldConfig, unsubscribeFromProcedureResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UnsubscribeFromProcedureResponseTypeName,
    meta,
    fieldConfig,
    unsubscribeFromProcedureResponse,
    renderContext,
    UnsubscribeFromProcedureResponseSubElementsMap,
  )
}
