import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { FinancialGuarantee } from  '../../model/cac/FinancialGuarantee'
import { FinancialGuaranteeField, FinancialGuaranteeFieldMeta, FinancialGuaranteeTypeName } from  '../../meta/cac/FinancialGuaranteeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<FinancialGuarantee, void>
  financialGuarantee: FinancialGuarantee[] | undefined
  renderContext: RenderContext
}

export const FinancialGuaranteeSubElementsMap: SubElementsTemplatesMap<FinancialGuaranteeField, FinancialGuarantee, void> = new Map([
    [
      FinancialGuaranteeField.UBLExtensions,
      { meta: FinancialGuaranteeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={FinancialGuaranteeField.UBLExtensions}
          meta={FinancialGuaranteeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialGuaranteeField.GuaranteeTypeCode,
      { meta: FinancialGuaranteeFieldMeta.GuaranteeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={FinancialGuaranteeField.GuaranteeTypeCode}
          meta={FinancialGuaranteeFieldMeta.GuaranteeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.GuaranteeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialGuaranteeField.Description,
      { meta: FinancialGuaranteeFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={FinancialGuaranteeField.Description}
          meta={FinancialGuaranteeFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialGuaranteeField.LiabilityAmount,
      { meta: FinancialGuaranteeFieldMeta.LiabilityAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={FinancialGuaranteeField.LiabilityAmount}
          meta={FinancialGuaranteeFieldMeta.LiabilityAmount}
          fieldConfig={fieldConfig}
          amount={value?.LiabilityAmount}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialGuaranteeField.AmountRate,
      { meta: FinancialGuaranteeFieldMeta.AmountRate,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={FinancialGuaranteeField.AmountRate}
          meta={FinancialGuaranteeFieldMeta.AmountRate}
          fieldConfig={fieldConfig}
          numeric={value?.AmountRate}
          renderContext={renderContext}
        />}
    ],

    [
      FinancialGuaranteeField.ConstitutionPeriod,
      { meta: FinancialGuaranteeFieldMeta.ConstitutionPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={FinancialGuaranteeField.ConstitutionPeriod}
          meta={FinancialGuaranteeFieldMeta.ConstitutionPeriod}
          fieldConfig={fieldConfig}
          period={value?.ConstitutionPeriod}
          renderContext={renderContext}
        />}
    ]
]) 

export function FinancialGuaranteeDisplay<TFieldMeta>({ meta, fieldConfig, financialGuarantee, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    FinancialGuaranteeTypeName,
    meta,
    fieldConfig,
    financialGuarantee,
    renderContext,
    FinancialGuaranteeSubElementsMap,
  )
}
