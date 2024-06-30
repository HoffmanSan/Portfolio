// others
import { createContext, useEffect, useState } from "react"
import TemplatePL from '../templates/polish'
import TemplateEN from '../templates/english'
import { Template } from "../types/types"

type Props = {
  children: React.ReactNode
}

export const TemplateContext = createContext<{template: Template} | undefined>(undefined)

export const TemplateContextProvider = ({ children } : Props) => {
  const [template, setTemplate] = useState(TemplateEN)
  const sp = new URLSearchParams(window.location.search)
  
  useEffect(() => {
    if (sp.get('lang') === 'PL') {
      setTemplate(TemplatePL)
    }
  }, [])

  return (
    <TemplateContext.Provider value={{template}}>
      {children}
    </TemplateContext.Provider>
  )
}
