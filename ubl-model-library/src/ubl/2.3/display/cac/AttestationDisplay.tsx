import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Attestation } from  '../../model/cac/Attestation'
import { AttestationField, AttestationFieldMeta, AttestationTypeName } from  '../../meta/cac/AttestationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AttestationLineDisplay } from './AttestationLineDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Attestation, void>
  attestation: Attestation[] | undefined
  renderContext: RenderContext
}

export const AttestationSubElementsMap: SubElementsTemplatesMap<AttestationField, Attestation, void> = new Map([
    [
      AttestationField.UBLExtensions,
      { meta: AttestationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AttestationField.UBLExtensions}
          meta={AttestationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.ID,
      { meta: AttestationFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={AttestationField.ID}
          meta={AttestationFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.Description,
      { meta: AttestationFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttestationField.Description}
          meta={AttestationFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.Note,
      { meta: AttestationFieldMeta.Note,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AttestationField.Note}
          meta={AttestationFieldMeta.Note}
          fieldConfig={fieldConfig}
          text={value?.Note}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.ValidityPeriod,
      { meta: AttestationFieldMeta.ValidityPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={AttestationField.ValidityPeriod}
          meta={AttestationFieldMeta.ValidityPeriod}
          fieldConfig={fieldConfig}
          period={value?.ValidityPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.IssuerParty,
      { meta: AttestationFieldMeta.IssuerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={AttestationField.IssuerParty}
          meta={AttestationFieldMeta.IssuerParty}
          fieldConfig={fieldConfig}
          party={value?.IssuerParty}
          renderContext={renderContext}
        />}
    ],

    [
      AttestationField.AttestationLine,
      { meta: AttestationFieldMeta.AttestationLine,
        template: ({value, renderContext, fieldConfig}) => <AttestationLineDisplay
          key={AttestationField.AttestationLine}
          meta={AttestationFieldMeta.AttestationLine}
          fieldConfig={fieldConfig}
          attestationLine={value?.AttestationLine}
          renderContext={renderContext}
        />}
    ]
]) 

export function AttestationDisplay<TFieldMeta>({ meta, fieldConfig, attestation, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AttestationTypeName,
    meta,
    fieldConfig,
    attestation,
    renderContext,
    AttestationSubElementsMap,
  )
}
