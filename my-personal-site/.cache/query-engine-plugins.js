
import * as pluginGatsbyNode0 from "../node_modules/gatsby-plugin-image/gatsby-node"
import * as pluginGatsbyNode1 from "../node_modules/gatsby-source-filesystem/gatsby-node"
import * as pluginGatsbyNode2 from "../node_modules/gatsby-transformer-sharp/gatsby-node"
import * as pluginGatsbyNode3 from "../node_modules/gatsby-plugin-sharp/gatsby-node"
import * as pluginGatsbyNode4 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode5 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode6 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode7 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode8 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode9 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode10 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode11 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode12 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode13 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode14 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode15 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyNode16 from "../node_modules/gatsby-plugin-page-creator/gatsby-node"
import * as pluginGatsbyWorker0 from "../node_modules/gatsby-plugin-sharp/gatsby-worker"

export const gatsbyNodes = [
{ name: "gatsby-plugin-image", module: pluginGatsbyNode0, importKey: 1 },
{ name: "gatsby-source-filesystem", module: pluginGatsbyNode1, importKey: 2 },
{ name: "gatsby-transformer-sharp", module: pluginGatsbyNode2, importKey: 3 },
{ name: "gatsby-plugin-sharp", module: pluginGatsbyNode3, importKey: 4 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode4, importKey: 5 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode5, importKey: 6 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode6, importKey: 7 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode7, importKey: 8 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode8, importKey: 9 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode9, importKey: 10 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode10, importKey: 11 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode11, importKey: 12 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode12, importKey: 13 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode13, importKey: 14 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode14, importKey: 15 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode15, importKey: 16 },
{ name: "gatsby-plugin-page-creator", module: pluginGatsbyNode16, importKey: 17 },
]

export const gatsbyWorkers = [
{ name: "gatsby-plugin-sharp", module: pluginGatsbyWorker0, importKey: 1 },
]

export const flattenedPlugins =
  [
  {
    "resolve": "",
    "id": "a9f9c4c1-d74b-569b-a6ec-6093f5d12592",
    "name": "gatsby-plugin-image",
    "version": "3.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "createSchemaCustomization",
      "onCreateBabelConfig",
      "onCreateWebpackConfig",
      "preprocessSource"
    ],
    "browserAPIs": [],
    "ssrAPIs": [
      "onRenderBody"
    ],
    "pluginFilepath": "",
    "importKey": 1
  },
  {
    "resolve": "",
    "id": "3005ab38-49b7-5985-b413-6e52342ec213",
    "name": "gatsby-source-filesystem",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "name": "images",
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/src/images",
      "fastHash": false
    },
    "nodeAPIs": [
      "onPreInit",
      "pluginOptionsSchema",
      "sourceNodes",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 2
  },
  {
    "resolve": "",
    "id": "822bdf7b-a95a-5885-9351-158705910ac3",
    "name": "gatsby-transformer-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": []
    },
    "nodeAPIs": [
      "onPreInit",
      "onCreateNode",
      "shouldOnCreateNode",
      "createSchemaCustomization",
      "createResolvers"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 3
  },
  {
    "resolve": "",
    "id": "9e618b1c-a2d0-52b1-86ab-f91016f37381",
    "name": "gatsby-plugin-sharp",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "base64Width": 20,
      "stripMetadata": true,
      "defaultQuality": 50,
      "failOnError": true,
      "failOn": "warning"
    },
    "nodeAPIs": [
      "onCreateDevServer",
      "onPostBootstrap",
      "onPluginInit",
      "onPreBootstrap",
      "pluginOptionsSchema"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 4
  },
  {
    "resolve": "",
    "id": "9a2f4f25-52a3-557e-9b85-3f8635d62b77",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/dev-404-page/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 5
  },
  {
    "resolve": "",
    "id": "3fac4534-b263-5f7e-9f85-e43a7beba1a9",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/load-babel-config/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 6
  },
  {
    "resolve": "",
    "id": "898b797b-06b8-5df8-9055-e8d8d29ddd08",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/internal-data-bridge/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 7
  },
  {
    "resolve": "",
    "id": "866d9135-2e93-5601-8a4f-4ea10ed6ee50",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/prod-404-500/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 8
  },
  {
    "resolve": "",
    "id": "2cec19ab-df3b-586c-a38c-9d121a18013e",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 9
  },
  {
    "resolve": "",
    "id": "ebd415b6-efad-5bbe-8628-e9b56872b1c4",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/bundle-optimisations/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 10
  },
  {
    "resolve": "",
    "id": "ad9da979-908e-5e9c-bbb3-f204ab7d8cd2",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby/dist/internal-plugins/functions/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 11
  },
  {
    "resolve": "",
    "id": "ff0028c3-b120-5a0e-8e04-0de244c2492b",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby-plugin-image/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 12
  },
  {
    "resolve": "",
    "id": "a7a708fd-1987-5a5d-a45c-9cb1b2daa31f",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby-source-filesystem/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 13
  },
  {
    "resolve": "",
    "id": "7b813329-7900-577b-9dd7-070e3a2cdde8",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby-transformer-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 14
  },
  {
    "resolve": "",
    "id": "d9570a01-0d53-5499-aaf5-c2cb9fca5d39",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby-plugin-sharp/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 15
  },
  {
    "resolve": "",
    "id": "1f58acff-e148-575f-8eae-7fe0b7356824",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/node_modules/gatsby-plugin-manifest/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 16
  },
  {
    "resolve": "",
    "id": "a52bac3d-4cb9-5e95-ac85-7f98231c3c07",
    "name": "gatsby-plugin-page-creator",
    "version": "5.13.1",
    "pluginOptions": {
      "plugins": [],
      "path": "/Users/janecastleman/Documents/personal-site/jane2620.github.io/my-personal-site/src/pages",
      "pathCheck": false
    },
    "nodeAPIs": [
      "createPages",
      "createPagesStatefully",
      "onPluginInit",
      "setFieldsOnGraphQLNodeType"
    ],
    "browserAPIs": [],
    "ssrAPIs": [],
    "pluginFilepath": "",
    "importKey": 17
  }
]
