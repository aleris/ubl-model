import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { TenderingCriterionProperty } from  '../../model/cac/TenderingCriterionProperty'
import { TenderingCriterionPropertyFieldMeta } from  '../../meta/cac/TenderingCriterionPropertyMeta'
import AmountDisplay from '../cbc/AmountDisplay'
import { Amount } from '../../model/cbc/Amount'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import EvidenceDisplay from './EvidenceDisplay'
import { Evidence } from '../../model/cac/Evidence'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import NumericDisplay from '../cbc/NumericDisplay'
import { Numeric } from '../../model/cbc/Numeric'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: TenderingCriterionProperty | undefined
  meta: FieldMeta<T>
}

export default function TenderingCriterionPropertyDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-TenderingCriterionProperty">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ID}
          />

          <TextDisplay
            label="Name"
            value={value.Name?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.Name}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Description"
            label="Description"
            items={value.Description}
            meta={TenderingCriterionPropertyFieldMeta.Description} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Description"
                value={itemValue}
                meta={TenderingCriterionPropertyFieldMeta.Description}
              />
            }
          />

          <CodeDisplay
            label="Type Code"
            value={value.TypeCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.TypeCode}
          />

          <CodeDisplay
            label="Value Data Type Code"
            value={value.ValueDataTypeCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ValueDataTypeCode}
          />

          <CodeDisplay
            label="Value Unit Code"
            value={value.ValueUnitCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ValueUnitCode}
          />

          <CodeDisplay
            label="Value Currency Code"
            value={value.ValueCurrencyCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ValueCurrencyCode}
          />

          <AmountDisplay
            label="Expected Amount"
            value={value.ExpectedAmount?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedAmount}
          />

          <IdentifierDisplay
            label="Expected Identifier"
            value={value.ExpectedID?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedID}
          />

          <IndicatorDisplay
            label="Expected Indicator"
            value={value.ExpectedIndicator?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedIndicator}
          />

          <CodeDisplay
            label="Expected Code"
            value={value.ExpectedCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedCode}
          />

          <NumericDisplay
            label="Expected Value"
            value={value.ExpectedValueNumeric?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedValueNumeric}
          />

          <TextDisplay
            label="Expected Description"
            value={value.ExpectedDescription?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedDescription}
          />

          <IdentifierDisplay
            label="Expected URI"
            value={value.ExpectedURI?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.ExpectedURI}
          />

          <AmountDisplay
            label="Maximum Amount"
            value={value.MaximumAmount?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MaximumAmount}
          />

          <AmountDisplay
            label="Minimum Amount"
            value={value.MinimumAmount?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MinimumAmount}
          />

          <NumericDisplay
            label="Maximum Value"
            value={value.MaximumValueNumeric?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MaximumValueNumeric}
          />

          <NumericDisplay
            label="Minimum Value"
            value={value.MinimumValueNumeric?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MinimumValueNumeric}
          />

          <QuantityDisplay
            label="Maximum Quantity"
            value={value.MaximumQuantity?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MaximumQuantity}
          />

          <QuantityDisplay
            label="Minimum Quantity"
            value={value.MinimumQuantity?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.MinimumQuantity}
          />

          <CodeDisplay
            label="Translation Type Code"
            value={value.TranslationTypeCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.TranslationTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-CertificationLevelDescription"
            label="Certification Level Description"
            items={value.CertificationLevelDescription}
            meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Certification Level Description"
                value={itemValue}
                meta={TenderingCriterionPropertyFieldMeta.CertificationLevelDescription}
              />
            }
          />

          <CodeDisplay
            label="Copy Quality Type Code"
            value={value.CopyQualityTypeCode?.[0]}
            meta={TenderingCriterionPropertyFieldMeta.CopyQualityTypeCode}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Period ubl-ApplicablePeriod"
            label="Applicable Period"
            items={value.ApplicablePeriod}
            meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod} 
            itemDisplay={ (itemValue: Period, key: string | number) =>
              <PeriodDisplay
                key={key}
                label="Applicable Period"
                value={itemValue}
                meta={TenderingCriterionPropertyFieldMeta.ApplicablePeriod}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Evidence ubl-TemplateEvidence"
            label="Template Evidence"
            items={value.TemplateEvidence}
            meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence} 
            itemDisplay={ (itemValue: Evidence, key: string | number) =>
              <EvidenceDisplay
                key={key}
                label="Template Evidence"
                value={itemValue}
                meta={TenderingCriterionPropertyFieldMeta.TemplateEvidence}
              />
            }
          />
        </div>
    </div>
  )
}
