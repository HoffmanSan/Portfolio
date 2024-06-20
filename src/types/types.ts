export type Project = {
  title: string
  category: string
  description: string
  adminCreds?: {[key: string]: string}[]
  link: string
  sourceCode: string
  technologies: {
    [key: string]: string
  }
}