import { GluegunToolbox } from 'gluegun'
import { GluegunTemplateGenerateOptions } from 'gluegun/build/types/toolbox/template-types'

export type GenerateTemplates = (
  toolbox: GluegunToolbox,
  templates: GluegunTemplateGenerateOptions[],
  props: Record<string, unknown>
) => Promise<void>
