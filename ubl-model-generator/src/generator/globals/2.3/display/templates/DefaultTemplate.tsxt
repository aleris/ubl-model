import React from 'react'
import { ConfigurableFieldDisplay } from '../FieldConfig'

type Props = {
  elementsMap: Map<any, ConfigurableFieldDisplay>
}

export function DefaultTemplate({elementsMap}: Props) {
  return (
    <>
      {
        Array.from(elementsMap.values())
          .map(configurableFieldDisplay => configurableFieldDisplay())
      }
    </>
  )
}
