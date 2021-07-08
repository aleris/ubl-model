import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TelecommunicationsSupply } from  '../../model/cac/TelecommunicationsSupply'
import { TelecommunicationsSupplyField, TelecommunicationsSupplyFieldMeta, TelecommunicationsSupplyTypeName } from  '../../meta/cac/TelecommunicationsSupplyMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TelecommunicationsSupplyLineDisplay } from './TelecommunicationsSupplyLineDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TelecommunicationsSupply, void>
  telecommunicationsSupply: TelecommunicationsSupply[] | undefined
  renderContext: RenderContext
}

export const TelecommunicationsSupplySubElementsMap: SubElementsTemplatesMap<TelecommunicationsSupplyField, TelecommunicationsSupply, void> = new Map([
    [
      TelecommunicationsSupplyField.UBLExtensions,
      { meta: TelecommunicationsSupplyFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TelecommunicationsSupplyField.UBLExtensions}
          meta={TelecommunicationsSupplyFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.TelecommunicationsSupplyType,
      { meta: TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsSupplyField.TelecommunicationsSupplyType}
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyType}
          fieldConfig={fieldConfig}
          text={value?.TelecommunicationsSupplyType}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode,
      { meta: TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TelecommunicationsSupplyField.TelecommunicationsSupplyTypeCode}
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TelecommunicationsSupplyTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.PrivacyCode,
      { meta: TelecommunicationsSupplyFieldMeta.PrivacyCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TelecommunicationsSupplyField.PrivacyCode}
          meta={TelecommunicationsSupplyFieldMeta.PrivacyCode}
          fieldConfig={fieldConfig}
          code={value?.PrivacyCode}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.Description,
      { meta: TelecommunicationsSupplyFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TelecommunicationsSupplyField.Description}
          meta={TelecommunicationsSupplyFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.TotalAmount,
      { meta: TelecommunicationsSupplyFieldMeta.TotalAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={TelecommunicationsSupplyField.TotalAmount}
          meta={TelecommunicationsSupplyFieldMeta.TotalAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalAmount}
          renderContext={renderContext}
        />}
    ],

    [
      TelecommunicationsSupplyField.TelecommunicationsSupplyLine,
      { meta: TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine,
        template: ({value, renderContext, fieldConfig}) => <TelecommunicationsSupplyLineDisplay
          key={TelecommunicationsSupplyField.TelecommunicationsSupplyLine}
          meta={TelecommunicationsSupplyFieldMeta.TelecommunicationsSupplyLine}
          fieldConfig={fieldConfig}
          telecommunicationsSupplyLine={value?.TelecommunicationsSupplyLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function TelecommunicationsSupplyDisplay<TFieldMeta>({ meta, fieldConfig, telecommunicationsSupply, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TelecommunicationsSupplyTypeName,
    meta,
    fieldConfig,
    telecommunicationsSupply,
    renderContext,
    TelecommunicationsSupplySubElementsMap,
  )
}
