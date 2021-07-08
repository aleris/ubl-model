import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PartyTaxScheme } from  '../../model/cac/PartyTaxScheme'
import { PartyTaxSchemeField, PartyTaxSchemeFieldMeta, PartyTaxSchemeTypeName } from  '../../meta/cac/PartyTaxSchemeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TaxSchemeDisplay } from './TaxSchemeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PartyTaxScheme, void>
  partyTaxScheme: PartyTaxScheme[] | undefined
  renderContext: RenderContext
}

export const PartyTaxSchemeSubElementsMap: SubElementsTemplatesMap<PartyTaxSchemeField, PartyTaxScheme, void> = new Map([
    [
      PartyTaxSchemeField.UBLExtensions,
      { meta: PartyTaxSchemeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PartyTaxSchemeField.UBLExtensions}
          meta={PartyTaxSchemeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.RegistrationName,
      { meta: PartyTaxSchemeFieldMeta.RegistrationName,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PartyTaxSchemeField.RegistrationName}
          meta={PartyTaxSchemeFieldMeta.RegistrationName}
          fieldConfig={fieldConfig}
          text={value?.RegistrationName}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.CompanyID,
      { meta: PartyTaxSchemeFieldMeta.CompanyID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PartyTaxSchemeField.CompanyID}
          meta={PartyTaxSchemeFieldMeta.CompanyID}
          fieldConfig={fieldConfig}
          identifier={value?.CompanyID}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.TaxLevelCode,
      { meta: PartyTaxSchemeFieldMeta.TaxLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PartyTaxSchemeField.TaxLevelCode}
          meta={PartyTaxSchemeFieldMeta.TaxLevelCode}
          fieldConfig={fieldConfig}
          code={value?.TaxLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.ExemptionReasonCode,
      { meta: PartyTaxSchemeFieldMeta.ExemptionReasonCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PartyTaxSchemeField.ExemptionReasonCode}
          meta={PartyTaxSchemeFieldMeta.ExemptionReasonCode}
          fieldConfig={fieldConfig}
          code={value?.ExemptionReasonCode}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.ExemptionReason,
      { meta: PartyTaxSchemeFieldMeta.ExemptionReason,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PartyTaxSchemeField.ExemptionReason}
          meta={PartyTaxSchemeFieldMeta.ExemptionReason}
          fieldConfig={fieldConfig}
          text={value?.ExemptionReason}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.RegistrationAddress,
      { meta: PartyTaxSchemeFieldMeta.RegistrationAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={PartyTaxSchemeField.RegistrationAddress}
          meta={PartyTaxSchemeFieldMeta.RegistrationAddress}
          fieldConfig={fieldConfig}
          address={value?.RegistrationAddress}
          renderContext={renderContext}
        />}
    ],

    [
      PartyTaxSchemeField.TaxScheme,
      { meta: PartyTaxSchemeFieldMeta.TaxScheme,
        template: ({value, renderContext, fieldConfig}) => <TaxSchemeDisplay
          key={PartyTaxSchemeField.TaxScheme}
          meta={PartyTaxSchemeFieldMeta.TaxScheme}
          fieldConfig={fieldConfig}
          taxScheme={value?.TaxScheme}
          renderContext={renderContext}
        />}
    ]
]) 

export function PartyTaxSchemeDisplay<TFieldMeta>({ meta, fieldConfig, partyTaxScheme, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PartyTaxSchemeTypeName,
    meta,
    fieldConfig,
    partyTaxScheme,
    renderContext,
    PartyTaxSchemeSubElementsMap,
  )
}
