import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Contract } from  '../../model/cac/Contract'
import { ContractField, ContractFieldMeta, ContractTypeName } from  '../../meta/cac/ContractMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Contract, void>
  contract: Contract[] | undefined
  renderContext: RenderContext
}

export const ContractSubElementsMap: SubElementsTemplatesMap<ContractField, Contract, void> = new Map([
    [
      ContractField.UBLExtensions,
      { meta: ContractFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ContractField.UBLExtensions}
          meta={ContractFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ID,
      { meta: ContractFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractField.ID}
          meta={ContractFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.IssueDate,
      { meta: ContractFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractField.IssueDate}
          meta={ContractFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.IssueTime,
      { meta: ContractFieldMeta.IssueTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ContractField.IssueTime}
          meta={ContractFieldMeta.IssueTime}
          fieldConfig={fieldConfig}
          time={value?.IssueTime}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.NominationDate,
      { meta: ContractFieldMeta.NominationDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ContractField.NominationDate}
          meta={ContractFieldMeta.NominationDate}
          fieldConfig={fieldConfig}
          date={value?.NominationDate}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.NominationTime,
      { meta: ContractFieldMeta.NominationTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ContractField.NominationTime}
          meta={ContractFieldMeta.NominationTime}
          fieldConfig={fieldConfig}
          time={value?.NominationTime}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ContractTypeCode,
      { meta: ContractFieldMeta.ContractTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractField.ContractTypeCode}
          meta={ContractFieldMeta.ContractTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ContractTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ContractType,
      { meta: ContractFieldMeta.ContractType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractField.ContractType}
          meta={ContractFieldMeta.ContractType}
          fieldConfig={fieldConfig}
          text={value?.ContractType}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.Note,
      { meta: ContractFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractField.Note}
          meta={ContractFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.VersionID,
      { meta: ContractFieldMeta.VersionID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ContractField.VersionID}
          meta={ContractFieldMeta.VersionID}
          fieldConfig={fieldConfig}
          identifier={value?.VersionID}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ModificationReasonCode,
      { meta: ContractFieldMeta.ModificationReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ContractField.ModificationReasonCode}
          meta={ContractFieldMeta.ModificationReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ModificationReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ModificationReasonDescription,
      { meta: ContractFieldMeta.ModificationReasonDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractField.ModificationReasonDescription}
          meta={ContractFieldMeta.ModificationReasonDescription}
          fieldConfig={fieldConfig}
          text={value?.ModificationReasonDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.Description,
      { meta: ContractFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ContractField.Description}
          meta={ContractFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ValidityPeriod,
      { meta: ContractFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ContractField.ValidityPeriod}
          meta={ContractFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ContractDocumentReference,
      { meta: ContractFieldMeta.ContractDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={ContractField.ContractDocumentReference}
          meta={ContractFieldMeta.ContractDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ContractDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.NominationPeriod,
      { meta: ContractFieldMeta.NominationPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ContractField.NominationPeriod}
          meta={ContractFieldMeta.NominationPeriod}
          fieldConfig={fieldConfig}
          period={value?.NominationPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ContractField.ContractualDelivery,
      { meta: ContractFieldMeta.ContractualDelivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={ContractField.ContractualDelivery}
          meta={ContractFieldMeta.ContractualDelivery}
          fieldConfig={fieldConfig}
          delivery={value?.ContractualDelivery}
          renderContext={renderContext}
        />}
    ]
]) 

export function ContractDisplay<TFieldMeta>({ meta, fieldConfig, contract, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ContractTypeName,
    meta,
    fieldConfig,
    contract,
    renderContext,
    ContractSubElementsMap,
  )
}
