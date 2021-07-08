import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderStatusRequest } from  '../../model/doc/TenderStatusRequest'
import { TenderStatusRequestField, TenderStatusRequestFieldMeta, TenderStatusRequestTypeName } from  '../../meta/doc/TenderStatusRequestMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ContractingPartyDisplay } from '../cac/ContractingPartyDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { EconomicOperatorPartyDisplay } from '../cac/EconomicOperatorPartyDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { ProcurementProjectDisplay } from '../cac/ProcurementProjectDisplay'
import { ProcurementProjectLotDisplay } from '../cac/ProcurementProjectLotDisplay'
import { SignatureDisplay } from '../cac/SignatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TenderStatusRequest, void>
  tenderStatusRequest: TenderStatusRequest[] | undefined
  renderContext: RenderContext
}

export const TenderStatusRequestSubElementsMap: SubElementsTemplatesMap<TenderStatusRequestField, TenderStatusRequest, void> = new Map([
    [
      TenderStatusRequestField.UBLExtensions,
      { meta: TenderStatusRequestFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TenderStatusRequestField.UBLExtensions}
          meta={TenderStatusRequestFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.UBLVersionID,
      { meta: TenderStatusRequestFieldMeta.UBLVersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.UBLVersionID}
          meta={TenderStatusRequestFieldMeta.UBLVersionID}
          fieldConfig={fieldConfig}
          identifier={value?.UBLVersionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.CustomizationID,
      { meta: TenderStatusRequestFieldMeta.CustomizationID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.CustomizationID}
          meta={TenderStatusRequestFieldMeta.CustomizationID}
          fieldConfig={fieldConfig}
          identifier={value?.CustomizationID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ProfileID,
      { meta: TenderStatusRequestFieldMeta.ProfileID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.ProfileID}
          meta={TenderStatusRequestFieldMeta.ProfileID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ProfileExecutionID,
      { meta: TenderStatusRequestFieldMeta.ProfileExecutionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.ProfileExecutionID}
          meta={TenderStatusRequestFieldMeta.ProfileExecutionID}
          fieldConfig={fieldConfig}
          identifier={value?.ProfileExecutionID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ID,
      { meta: TenderStatusRequestFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.ID}
          meta={TenderStatusRequestFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.CopyIndicator,
      { meta: TenderStatusRequestFieldMeta.CopyIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TenderStatusRequestField.CopyIndicator}
          meta={TenderStatusRequestFieldMeta.CopyIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CopyIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.UUID,
      { meta: TenderStatusRequestFieldMeta.UUID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.UUID}
          meta={TenderStatusRequestFieldMeta.UUID}
          fieldConfig={fieldConfig}
          identifier={value?.UUID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ContractFolderID,
      { meta: TenderStatusRequestFieldMeta.ContractFolderID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TenderStatusRequestField.ContractFolderID}
          meta={TenderStatusRequestFieldMeta.ContractFolderID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractFolderID}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.IssueDate,
      { meta: TenderStatusRequestFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={TenderStatusRequestField.IssueDate}
          meta={TenderStatusRequestFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.IssueTime,
      { meta: TenderStatusRequestFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={TenderStatusRequestField.IssueTime}
          meta={TenderStatusRequestFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ContractName,
      { meta: TenderStatusRequestFieldMeta.ContractName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderStatusRequestField.ContractName}
          meta={TenderStatusRequestFieldMeta.ContractName}
          fieldConfig={fieldConfig}
          text={value?.ContractName}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.Note,
      { meta: TenderStatusRequestFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TenderStatusRequestField.Note}
          meta={TenderStatusRequestFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.Signature,
      { meta: TenderStatusRequestFieldMeta.Signature,
        template: ({value, renderContext, fieldConfig}) => <SignatureDisplay
          key={TenderStatusRequestField.Signature}
          meta={TenderStatusRequestFieldMeta.Signature}
          fieldConfig={fieldConfig}
          signature={value?.Signature}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ContractingParty,
      { meta: TenderStatusRequestFieldMeta.ContractingParty,
        template: ({value, renderContext, fieldConfig}) => <ContractingPartyDisplay
          key={TenderStatusRequestField.ContractingParty}
          meta={TenderStatusRequestFieldMeta.ContractingParty}
          fieldConfig={fieldConfig}
          contractingParty={value?.ContractingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.EconomicOperatorParty,
      { meta: TenderStatusRequestFieldMeta.EconomicOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <EconomicOperatorPartyDisplay
          key={TenderStatusRequestField.EconomicOperatorParty}
          meta={TenderStatusRequestFieldMeta.EconomicOperatorParty}
          fieldConfig={fieldConfig}
          economicOperatorParty={value?.EconomicOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ProcurementProject,
      { meta: TenderStatusRequestFieldMeta.ProcurementProject,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectDisplay
          key={TenderStatusRequestField.ProcurementProject}
          meta={TenderStatusRequestFieldMeta.ProcurementProject}
          fieldConfig={fieldConfig}
          procurementProject={value?.ProcurementProject}
          renderContext={renderContext}
        />}
    ],

    [
      TenderStatusRequestField.ProcurementProjectLot,
      { meta: TenderStatusRequestFieldMeta.ProcurementProjectLot,
        template: ({value, renderContext, fieldConfig}) => <ProcurementProjectLotDisplay
          key={TenderStatusRequestField.ProcurementProjectLot}
          meta={TenderStatusRequestFieldMeta.ProcurementProjectLot}
          fieldConfig={fieldConfig}
          procurementProjectLot={value?.ProcurementProjectLot}
          renderContext={renderContext}
        />}
    ]
]) 

export function TenderStatusRequestDisplay<TFieldMeta>({ meta, fieldConfig, tenderStatusRequest, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TenderStatusRequestTypeName,
    meta,
    fieldConfig,
    tenderStatusRequest,
    renderContext,
    TenderStatusRequestSubElementsMap,
  )
}
