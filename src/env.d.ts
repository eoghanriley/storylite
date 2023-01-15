/// <reference types="astro/client" />
/// <reference types="svelte" />

import type { ComponentType } from "svelte";

export interface Story {
  title: string;
  component: ComponentType | undefined;
  props: {};
}
