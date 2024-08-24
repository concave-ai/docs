import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Concave VIDE</span>,
  project: {
    link: 'https://github.com/concave-ai',
  },

  docsRepositoryBase: 'https://github.com/concave-ai/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Concave'
    }
  }
}

export default config
