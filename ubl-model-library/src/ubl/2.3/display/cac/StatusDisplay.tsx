import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Status } from  '../../model/cac/Status'
import { StatusField, StatusFieldMeta, StatusTypeName } from  '../../meta/cac/StatusMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConditionDisplay } from './ConditionDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Status, void>
  status: Status[] | undefined
  renderContext: RenderContext
}

export const StatusSubElementsMap: SubElementsTemplatesMap<StatusField, Status, void> = new Map([
    [
      StatusField.UBLExtensions,
      { meta: StatusFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={StatusField.UBLExtensions}
          meta={StatusFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.ConditionCode,
      { meta: StatusFieldMeta.ConditionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StatusField.ConditionCode}
          meta={StatusFieldMeta.ConditionCode}
          fieldConfig={fieldConfig}
          code={value?.ConditionCode}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.ReferenceDate,
      { meta: StatusFieldMeta.ReferenceDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={StatusField.ReferenceDate}
          meta={StatusFieldMeta.ReferenceDate}
          fieldConfig={fieldConfig}
          date={value?.ReferenceDate}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.ReferenceTime,
      { meta: StatusFieldMeta.ReferenceTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={StatusField.ReferenceTime}
          meta={StatusFieldMeta.ReferenceTime}
          fieldConfig={fieldConfig}
          time={value?.ReferenceTime}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.Description,
      { meta: StatusFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StatusField.Description}
          meta={StatusFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.StatusReasonCode,
      { meta: StatusFieldMeta.StatusReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={StatusField.StatusReasonCode}
          meta={StatusFieldMeta.StatusReasonCode}
          fieldConfig={fieldConfig}
          code={value?.StatusReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.StatusReason,
      { meta: StatusFieldMeta.StatusReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StatusField.StatusReason}
          meta={StatusFieldMeta.StatusReason}
          fieldConfig={fieldConfig}
          text={value?.StatusReason}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.SequenceID,
      { meta: StatusFieldMeta.SequenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={StatusField.SequenceID}
          meta={StatusFieldMeta.SequenceID}
          fieldConfig={fieldConfig}
          identifier={value?.SequenceID}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.Text,
      { meta: StatusFieldMeta.Text,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={StatusField.Text}
          meta={StatusFieldMeta.Text}
          fieldConfig={fieldConfig}
          text={value?.Text}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.IndicationIndicator,
      { meta: StatusFieldMeta.IndicationIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={StatusField.IndicationIndicator}
          meta={StatusFieldMeta.IndicationIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.IndicationIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.Percent,
      { meta: StatusFieldMeta.Percent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={StatusField.Percent}
          meta={StatusFieldMeta.Percent}
          fieldConfig={fieldConfig}
          numeric={value?.Percent}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.ReliabilityPercent,
      { meta: StatusFieldMeta.ReliabilityPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={StatusField.ReliabilityPercent}
          meta={StatusFieldMeta.ReliabilityPercent}
          fieldConfig={fieldConfig}
          numeric={value?.ReliabilityPercent}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.SubStatus,
      { meta: StatusFieldMeta.SubStatus,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={StatusField.SubStatus}
          meta={StatusFieldMeta.SubStatus}
          fieldConfig={fieldConfig}
          status={value?.SubStatus}
          renderContext={renderContext}
        />}
    ],

    [
      StatusField.Condition,
      { meta: StatusFieldMeta.Condition,
        template: ({value, renderContext, fieldConfig}) => <ConditionDisplay
          key={StatusField.Condition}
          meta={StatusFieldMeta.Condition}
          fieldConfig={fieldConfig}
          condition={value?.Condition}
          renderContext={renderContext}
        />}
    ]
]) 

export function StatusDisplay<TFieldMeta>({ meta, fieldConfig, status, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    StatusTypeName,
    meta,
    fieldConfig,
    status,
    renderContext,
    StatusSubElementsMap,
  )
}
