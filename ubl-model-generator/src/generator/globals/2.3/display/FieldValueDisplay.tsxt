import React, { PropsWithChildren } from 'react'
import { classNames } from './classNames'
import { FieldSize } from './FieldSize'
import './FieldValueDisplay.scss'

type Props = {
  size?: FieldSize
}

export const FieldValueDisplay = ({ size = FieldSize.Normal, children }: PropsWithChildren<Props>) => {
  return <div className={classNames('FieldValue', size)}>{children}</div>
}
