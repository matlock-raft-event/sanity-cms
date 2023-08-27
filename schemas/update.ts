// schemas/update.ts

export default {
    name: "update",
    type: "document",
    title: "Update",
    fields: [
        {
            name: "slug",
            type: "string",
            title: "Slug",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "title",
            type: "string",
            title: "Title",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "content",
            title: "Content",
            type: 'array',
            of: [{type: 'block'}]
        },
        {
            name: 'img',
            type: 'image',
            title: 'Image'
        },
    ]
};
