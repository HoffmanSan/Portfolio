export type Project = {
  title: string
  category: string
  description: string
  adminCreds?: {[key: string]: string}[]
  image: string
  link: string
  sourceCode: string
  technologies: {
    [key: string]: string
  }
}

export type Template = ({
  navbar: string[]
  header: {
    headingOne: string
    headingTwo: string
    buttons: string[]
  },
  about: {
    headingOne: string
    bio: string
    priorities: {title: string, description: string}[]
  },
  projects: {
    headingOne: string
    projects: {
      title: string
      description: string
      adminCreds?: ({ login: string; password?: undefined; } | { password: string; login?: undefined; })[]
      image: string
      link: string
      sourceCode: string
      technologies: {
        [key: string]: string | undefined
      }
    }[]
    card: {buttons: string[]}
    modal: {
      headingOne: string
      adminCreds: string
      buttons: string[]
    }
  },
  contact: {
    headingOne: string
    headingTwo: string
    form: {
      name: string
      email: string
      message: string
      button: {[key: string]: string},
      errors: {[key: string]: string},
      success: string
    }
  },
  footer: {
    headingOne: string
    headingTwo: string
    anchors: {[key: string]: string}[]
  }
})

export type TemplateContextType = {
  template: Template
}