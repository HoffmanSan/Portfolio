import { createContext, useEffect, useState } from "react"
import TemplatePL from '../templates/polish'
import TemplateEN from '../templates/english'

type Props = {
  children: React.ReactNode
}

export const TemplateContext = createContext<any | undefined>(undefined)

export const TemplateContextProvider = ({ children } : Props) => {
  const [template, setTemplate] = useState(TemplateEN)
  const sp = new URLSearchParams(window.location.search)

  const changeToEN = () => {
    history.pushState('', '', "?lang=EN");
    setTemplate(TemplateEN)
  }

  const changeToPL = () => {
    history.pushState('', '', "?lang=PL");
    setTemplate(TemplatePL)
  }
  
  useEffect(() => {
    if (sp.get('lang') === 'PL') {
      setTemplate(TemplatePL)
    }
  }, [])

  return (
    <TemplateContext.Provider value={{template, changeToEN, changeToPL}}>
      {children}
    </TemplateContext.Provider>
  )
}
