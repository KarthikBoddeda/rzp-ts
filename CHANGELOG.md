# Changelog

## 0.1.0-alpha.1 (2025-07-03)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/KarthikBoddeda/rzp-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([a6814e3](https://github.com/KarthikBoddeda/rzp-ts/commit/a6814e3270a8fd1ef9896b60f6075a50a9411bbf))
* **mcp:** implement support for binary responses ([74e81c2](https://github.com/KarthikBoddeda/rzp-ts/commit/74e81c239f5a250bea4d33a43b5e30b6ea98a5f7))
* **mcp:** include http information in tools ([41c19a2](https://github.com/KarthikBoddeda/rzp-ts/commit/41c19a2b19ef96ceb311e84302dc3c6b9e051f3a))
* **mcp:** set X-Stainless-MCP header ([4fffd82](https://github.com/KarthikBoddeda/rzp-ts/commit/4fffd8220792756ce3a0e0985b3f18409524c3f6))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([0697b59](https://github.com/KarthikBoddeda/rzp-ts/commit/0697b59a3c47ef0f18a815bdcfd7b8c0843cc928))


### Bug Fixes

* **client:** always overwrite when merging headers ([4f61a9c](https://github.com/KarthikBoddeda/rzp-ts/commit/4f61a9cd7dd8903b3f5377fae838f99d42dbee94))
* **client:** explicitly copy fetch in withOptions ([4518c6f](https://github.com/KarthikBoddeda/rzp-ts/commit/4518c6f18764131ba94aad198e8881148b812987))
* **client:** get fetchOptions type more reliably ([5faf875](https://github.com/KarthikBoddeda/rzp-ts/commit/5faf875c833e538b81216e3c28905f8d5a7d4a78))
* compat with more runtimes ([b61dacf](https://github.com/KarthikBoddeda/rzp-ts/commit/b61dacf5176ea9107b76f36767422ffff17f6b87))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([933b19a](https://github.com/KarthikBoddeda/rzp-ts/commit/933b19a893737724251342527d19dc7215e85f02))
* **mcp:** fix cursor schema transformation issue with recursive references ([7998327](https://github.com/KarthikBoddeda/rzp-ts/commit/799832779a03be2d76aa8859cd528a2bbf35687e))
* **mcp:** include description in dynamic tool search ([fee2995](https://github.com/KarthikBoddeda/rzp-ts/commit/fee2995808935b3678527af059853610c894ae4d))
* publish script — handle NPM errors correctly ([6ab50f5](https://github.com/KarthikBoddeda/rzp-ts/commit/6ab50f5078719e9a725a655d99f5de13680affc7))


### Chores

* add docs to RequestOptions type ([86072c9](https://github.com/KarthikBoddeda/rzp-ts/commit/86072c97e944ea12d4941bbdc35a45565f191b48))
* adjust eslint.config.mjs ignore pattern ([3dc4362](https://github.com/KarthikBoddeda/rzp-ts/commit/3dc4362ba2c57829a8e015ff6be8f18d9f43ecf1))
* avoid type error in certain environments ([2e8393f](https://github.com/KarthikBoddeda/rzp-ts/commit/2e8393f72d96e9cc86c213b0c350f64e95e9d173))
* **build:** automatically build subpackages if present ([0055e86](https://github.com/KarthikBoddeda/rzp-ts/commit/0055e868ab27daba5aeebf44c4cd4ae9a54b5e14))
* change publish docs url ([4d672ed](https://github.com/KarthikBoddeda/rzp-ts/commit/4d672ed6ceb95c7ac51580eb7d0ce1e3fb7c93b4))
* **ci:** enable for pull requests ([fd7a15d](https://github.com/KarthikBoddeda/rzp-ts/commit/fd7a15df7d5914f3fa0cd4396ebb9794e5daf53c))
* **ci:** only run for pushes and fork pull requests ([284c5a7](https://github.com/KarthikBoddeda/rzp-ts/commit/284c5a7bb9617cf819a64eb081a8f6da358c5bd2))
* **client:** improve path param validation ([86973b6](https://github.com/KarthikBoddeda/rzp-ts/commit/86973b62becaf42f31def824c5cc55e17c342535))
* **client:** refactor imports ([3c7a6f2](https://github.com/KarthikBoddeda/rzp-ts/commit/3c7a6f266a386c3c00601f3b4e702e3d49ad7fb5))
* configure new SDK language ([2f1ab67](https://github.com/KarthikBoddeda/rzp-ts/commit/2f1ab67dc3f5c2be6f1776bcef7a0bda741ad2cd))
* **deps:** bump eslint-plugin-prettier ([eea9bf4](https://github.com/KarthikBoddeda/rzp-ts/commit/eea9bf499706106b608595e3a91baef78bb62b3f))
* **docs:** grammar improvements ([266dde3](https://github.com/KarthikBoddeda/rzp-ts/commit/266dde33caba0ff1e789f879abb9a358ec3580cb))
* **docs:** use top-level-await in example snippets ([af6b817](https://github.com/KarthikBoddeda/rzp-ts/commit/af6b817272ecd8c6b5f5c8168477b0d0b77feff2))
* improve publish-npm script --latest tag logic ([959b9c7](https://github.com/KarthikBoddeda/rzp-ts/commit/959b9c7f3652bb2140b12e57ccc510eb88ef468c))
* **internal:** add pure annotations, make base APIResource abstract ([6a7a51c](https://github.com/KarthikBoddeda/rzp-ts/commit/6a7a51c8bcd51bf1682a25eb8fd32deeeb006431))
* **internal:** codegen related update ([f71fbd7](https://github.com/KarthikBoddeda/rzp-ts/commit/f71fbd7436088438d76ca459fd5b39f7ba443a81))
* **internal:** codegen related update ([3d9fd63](https://github.com/KarthikBoddeda/rzp-ts/commit/3d9fd63fb883242415e7506c4897157d28006a50))
* **internal:** fix readablestream types in node 20 ([5064215](https://github.com/KarthikBoddeda/rzp-ts/commit/5064215271c196973c08b195a058825c3454c90d))
* **internal:** update jest config ([cb10145](https://github.com/KarthikBoddeda/rzp-ts/commit/cb10145e982aec909b3481f8eb03909c97976eca))
* **mcp:** provides high-level initMcpServer function and exports known clients ([030260f](https://github.com/KarthikBoddeda/rzp-ts/commit/030260f29631de79298b735e0727980c3b7b0fa8))
* **mcp:** remove duplicate assignment ([c9c768f](https://github.com/KarthikBoddeda/rzp-ts/commit/c9c768f1a21419f569fb9bc9c16f2d403436ab81))
* **package:** remove engines ([d6096e4](https://github.com/KarthikBoddeda/rzp-ts/commit/d6096e4158cb3d7529380d87d8215f757dd1462f))
* **readme:** update badges ([29562ed](https://github.com/KarthikBoddeda/rzp-ts/commit/29562ed19dea498923c5bbb32516942b0e80ede5))
* **readme:** use better example snippet for undocumented params ([635ad44](https://github.com/KarthikBoddeda/rzp-ts/commit/635ad44612456bbd51c8d0f6e8d1861fffdd4e37))
* **tests:** use node 22 for CI tests ([f45e5e5](https://github.com/KarthikBoddeda/rzp-ts/commit/f45e5e50253f25ddabc47102439965d1c6edd798))
* update SDK settings ([50c3636](https://github.com/KarthikBoddeda/rzp-ts/commit/50c36367c18ee185bfcc67042da4b53d1c2ba629))


### Refactors

* **types:** replace Record with mapped types ([95d7775](https://github.com/KarthikBoddeda/rzp-ts/commit/95d7775220a61e8efce049771eff584c2db2ecee))
