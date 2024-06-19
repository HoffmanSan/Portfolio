export type Project = {
  title: string
  category: string
  description: string
  link: string
  sourceCode: string
  technologies: {
    [key: string]: string
  }
}