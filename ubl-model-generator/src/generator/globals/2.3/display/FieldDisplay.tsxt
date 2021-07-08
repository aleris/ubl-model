import React, { ReactNode } from 'react'
import { classNames } from './classNames'
import { FieldConfig, FieldDirection, FieldLayout, FieldSize, FieldSpacing } from './FieldConfig'
import { FieldLabelDisplay } from './FieldLabelDisplay'
import { FieldValueDisplay } from './FieldValueDisplay'
import './FieldDisplay.scss'

type Props = {
  label?: string
  value: ReactNode
  config?: FieldConfig
}

export function FieldDisplay(
  {
    label,
    value,
    config: {
      layout = FieldLayout.Block,
      direction = FieldDirection.Vertical,
      size = FieldSize.Normal,
      spacing = FieldSpacing.Spaced,
      showLabel = false,
      showColon = true,
    } = {
      layout: FieldLayout.Block,
      direction: FieldDirection.Vertical,
      size: FieldSize.Normal,
      spacing: FieldSpacing.Spaced,
      showLabel: false,
      showColon: true,
    }
  }: Props
) {
  return (
    <div className={classNames('Field', `Layout${layout}`, `Direction${direction}`, `Spacing${spacing}`)}>
      {label !== undefined && showLabel
        ? <FieldLabelDisplay size={size} showColon={showColon}>{label}</FieldLabelDisplay>
        : null}
      <FieldValueDisplay size={size}>{value}</FieldValueDisplay>
    </div>
  )
}
