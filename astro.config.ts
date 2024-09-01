import fs from "node:fs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import astroExpressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// Remark plugins
import remarkDirective from "remark-directive"; /* Handle ::: directives as nodes */
import remarkUnwrapImages from "remark-unwrap-images";
import { remarkAdmonitions } from "./src/plugins/remark-admonitions"; /* Add admonitions */
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

// Rehype plugins
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["webmention.io"],
	},
	integrations: [
		astroExpressiveCode({
			plugins: [pluginLineNumbers()],
			styleOverrides: {
				codeFontFamily: "JetBrainsMono, Nerd Font, monolisa",
				codeFontSize: "0.875rem",
				uiFontWeight: "600",
				codeLineHeight: "2rem",
				codePaddingInline: "1rem",
				uiLineHeight: "inherit",
			},
			// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
			themes: ["github-dark", "github-light"],
			useThemedScrollbars: true,
			themeCssSelector(theme, { styleVariants }) {
				// If one dark and one light theme are available
				// generate theme CSS selectors compatible with cactus-theme dark mode switch
				if (styleVariants.length >= 2) {
					const baseTheme = styleVariants[0]?.theme;
					const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
					if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
				}
				// return default selector
				return `[data-theme="${theme.name}"]`;
			},
		}),
		icon(),
		tailwind({
			applyBaseStyles: false,
			nesting: true,
		}),
		sitemap(),
		mdx(),
	],
	markdown: {
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					rel: ["nofollow, noreferrer"],
					target: "_blank",
				},
			],
		],
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime, remarkDirective, remarkAdmonitions],
		remarkRehype: {
			footnoteLabelProperties: {
				className: [""],
			},
		},
	},
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	site: "https://rizkal.lamaau.space/",
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
		plugins: [rawFonts([".ttf", ".woff"])],
	},
});

function rawFonts(ext: string[]) {
	return {
		name: "vite-plugin-raw-fonts",
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return {
					code: `export default ${JSON.stringify(buffer)}`,
					map: null,
				};
			}
		},
	};
}
