import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { getStartedPlugin } from "./plugins/sanity-plugin-tutorial";

const devOnlyPlugins = [getStartedPlugin()];

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
// Define the singleton document types
const singletonTypes = new Set(["about", "cookiesInfo", "contactInstructions", "summary"]);


export default defineConfig({
    name: "default",
    title: "Matlock Raft Event",

    projectId: "6m6e8mul",
    dataset: "production",

    plugins: [
        deskTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        // Our singleton type has a list item with a custom child
                        S.listItem()
                            .title("Summary")
                            .id("summary")
                            .child(
                                // Instead of rendering a list of documents, we render a single document, specifying
                                // the `documentId` manually to ensure that we're editing the single instance of the document
                                S.document()
                                    .schemaType("summary")
                                    .documentId("summary")
                            ),

                        S.listItem()
                            .title("About")
                            .id("about")
                            .child(
                                S.document()
                                    .schemaType("about")
                                    .documentId("about")
                            ),

                        S.listItem()
                            .title("Contact Instructions")
                            .id("contactInstructions")
                            .child(
                                S.document()
                                    .schemaType("contactInstructions")
                                    .documentId("contactInstructions")
                            ),

                        S.listItem()
                            .title("Cookies Information")
                            .id("cookiesInfo")
                            .child(
                                S.document()
                                    .schemaType("cookiesInfo")
                                    .documentId("cookiesInfo")
                            ),

                        ...schemaTypes
                            .filter(schema => !singletonTypes.has(schema.name))
                            .map(schema =>
                                S.documentTypeListItem(schema.name).title(schema.title)
                            ),
                    ]),
        }),
        visionTool(),
        ...(isDev ? devOnlyPlugins : [])
    ],

    schema: {
        types: schemaTypes,
        // Filter out singleton types from the global “New document” menu options
        templates: (templates) =>
            templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },

    document: {
        // For singleton types, filter out actions that are not explicitly included
        // in the `singletonActions` list defined above
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({ action }) => action && singletonActions.has(action))
                : input,
    },
});

