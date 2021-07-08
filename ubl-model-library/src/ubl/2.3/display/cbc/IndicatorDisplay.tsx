import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Indicator } from '../../model/cbc/Indicator'
import { classNames } from '../classNames'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'
import IndicatorCheck from './IndicatorCheck.svg'
import './IndicatorDisplay.scss'

type Props = {
  className: string
  label?: string
  indicator: Indicator | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function IndicatorDisplay({ className, label, indicator, meta, fieldConfig }: Props) {
  if (indicator === undefined) {
    return null
  }
  const content = indicator._
    ? (
      <span className="Indicator--Check">
        <img src={IndicatorCheck} alt={`${indicator._}`} />
        <span>{label}</span>
      </span>
    )
    : null
  return (
    <div className={classNames('Indicator', className)}>
      <FieldDisplay value={content} config={fieldConfig} />
    </div>
  )
}
