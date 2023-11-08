// schemas/gallery-image.js
export default {
    name: 'hero',
    type: 'document',
    title: 'Hero',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'subtitle',
            type: 'string',
            title: 'Subtitle'
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text'
        },
        {
            name: 'buttonLink',
            type: 'url',
            title: 'Button Link'
        },
        {
            name: 'video',
            type: 'file',
            title: 'Video'
        },
    ]
}
