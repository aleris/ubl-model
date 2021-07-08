import React, { PropsWithChildren } from 'react'
import { classNames } from './classNames'
import { FieldSize } from './FieldConfig'
import './FieldLabelDisplay.scss'

type Props = {
  size?: FieldSize
  showColon?: boolean
}

export const FieldLabelDisplay = ({ size = FieldSize.Normal, showColon = false, children }: PropsWithChildren<Props>) => {
  return (
    <span className={classNames('FieldLabel', size)}>
      <span className="FieldLabel--Text">{children}</span>
      {showColon ? <span className="FieldLabel--Colon">:</span> : null}
    </span>
  )
}
