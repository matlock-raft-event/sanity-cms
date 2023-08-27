// schemas/summary.ts
export default {
    name: "about",
    type: "document",
    title: "About",
    fields: [
        {
            name: "bio",
            type: 'array',
            of: [{type: 'block'}],
            title: "Biography",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "rnliBio",
            type: 'array',
            of: [{type: 'block'}],
            title: "RNLI Bio",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "rnliLink",
            type: "string",
            title: "RNLI Link",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "dasacBio",
            type: 'array',
            of: [{type: 'block'}],
            title: "DASAC Bio",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "dasacLink",
            type: "string",
            title: "DASAC Link",
            validation: (Rule: any) => Rule.required()
        },
    ]
};
