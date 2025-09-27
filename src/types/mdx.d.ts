declare module "*.mdx" {
  import type { ComponentType } from "react";
  const MDXComponent: ComponentType<any>;
  export const frontmatter: Record<string, any>;
  export default MDXComponent;
}
