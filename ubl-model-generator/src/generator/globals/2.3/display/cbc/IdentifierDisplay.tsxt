import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Identifier } from '../../model/cbc/Identifier'
import { classNames } from '../classNames'
import { FieldConfig } from '../FieldConfig'
import { FieldDisplay } from '../FieldDisplay'
import './IdentifierDisplay.scss'

type Props = {
  className: string
  label?: string
  identifier: Identifier | undefined
  meta: FieldMeta<any>
  fieldConfig?: FieldConfig
}

export function IdentifierDisplay({ className, label, identifier, meta, fieldConfig }: Props) {
  if (identifier === undefined) {
    return null
  }
  const content = (
    <>
      {identifier.schemeID !== undefined
        ? (
          <span className="Identifier--Scheme">
            <span className="Identifier--Scheme--Text">{identifier.schemeID}</span>
            <span className="Identifier--Scheme--Separator">:</span>
          </span>
        )
        : null}
      <span className="Identifier--Content">{identifier._}</span>
    </>
  )
  return (
    <div className={classNames('Identifier', className)}>
      <FieldDisplay label={label} value={content} config={fieldConfig} />
    </div>
  )
}
