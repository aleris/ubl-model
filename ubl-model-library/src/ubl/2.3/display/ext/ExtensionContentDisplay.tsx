import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExtensionContent } from  '../../model/ext/ExtensionContent'
import { ExtensionContentFieldMeta } from  '../../meta/ext/ExtensionContentMeta'


type Props<T> = {
  label: string
  value: ExtensionContent | undefined
  meta: FieldMeta<T>
}

export default function ExtensionContentDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-ext ubl-ExtensionContent">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">

        </div>
    </div>
  )
}
