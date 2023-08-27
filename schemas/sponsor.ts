// schemas/sponsor.ts
export default {
    name: 'sponsor',
    type: 'document',
    title: 'Sponsor',
    fields: [
        {
            name: "slug",
            type: "string",
            title: "Slug",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'url',
            type: 'string',
            title: 'URL'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Logo'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'address',
            type: 'string',
            title: 'Address'
        },
        {
            name: 'testimonial',
            type: 'text',
            title: 'Testimonial'
        }
    ]
}
