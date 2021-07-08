import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ImmobilizedSecurity } from  '../../model/cac/ImmobilizedSecurity'
import { ImmobilizedSecurityField, ImmobilizedSecurityFieldMeta, ImmobilizedSecurityTypeName } from  '../../meta/cac/ImmobilizedSecurityMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ImmobilizedSecurity, void>
  immobilizedSecurity: ImmobilizedSecurity[] | undefined
  renderContext: RenderContext
}

export const ImmobilizedSecuritySubElementsMap: SubElementsTemplatesMap<ImmobilizedSecurityField, ImmobilizedSecurity, void> = new Map([
    [
      ImmobilizedSecurityField.UBLExtensions,
      { meta: ImmobilizedSecurityFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ImmobilizedSecurityField.UBLExtensions}
          meta={ImmobilizedSecurityFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.ImmobilizationCertificateID,
      { meta: ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ImmobilizedSecurityField.ImmobilizationCertificateID}
          meta={ImmobilizedSecurityFieldMeta.ImmobilizationCertificateID}
          fieldConfig={fieldConfig}
          identifier={value?.ImmobilizationCertificateID}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.SecurityID,
      { meta: ImmobilizedSecurityFieldMeta.SecurityID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ImmobilizedSecurityField.SecurityID}
          meta={ImmobilizedSecurityFieldMeta.SecurityID}
          fieldConfig={fieldConfig}
          identifier={value?.SecurityID}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.IssueDate,
      { meta: ImmobilizedSecurityFieldMeta.IssueDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ImmobilizedSecurityField.IssueDate}
          meta={ImmobilizedSecurityFieldMeta.IssueDate}
          fieldConfig={fieldConfig}
          date={value?.IssueDate}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.FaceValueAmount,
      { meta: ImmobilizedSecurityFieldMeta.FaceValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ImmobilizedSecurityField.FaceValueAmount}
          meta={ImmobilizedSecurityFieldMeta.FaceValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.FaceValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.MarketValueAmount,
      { meta: ImmobilizedSecurityFieldMeta.MarketValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ImmobilizedSecurityField.MarketValueAmount}
          meta={ImmobilizedSecurityFieldMeta.MarketValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.MarketValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.SharesNumberQuantity,
      { meta: ImmobilizedSecurityFieldMeta.SharesNumberQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ImmobilizedSecurityField.SharesNumberQuantity}
          meta={ImmobilizedSecurityFieldMeta.SharesNumberQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.SharesNumberQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ImmobilizedSecurityField.IssuerParty,
      { meta: ImmobilizedSecurityFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ImmobilizedSecurityField.IssuerParty}
          meta={ImmobilizedSecurityFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ]
]) 

export function ImmobilizedSecurityDisplay<TFieldMeta>({ meta, fieldConfig, immobilizedSecurity, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ImmobilizedSecurityTypeName,
    meta,
    fieldConfig,
    immobilizedSecurity,
    renderContext,
    ImmobilizedSecuritySubElementsMap,
  )
}
