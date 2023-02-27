// @ts-nocheck
export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	groups: [
		{
			name: 'content',
			title: 'Content',
		},
		{
			name: 'meta',
			title: 'Meta',
		},
	],
	fields: [
		{
			name: 'meta_title',
			type: 'string',
			title: 'Meta title',
			group: 'meta',
			validation: Rule => Rule.required(),
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			title: 'Body content',
			name: 'body',
			type: 'array',
			group: 'content',
			of: [
				{
					type: 'block',
				},
				{
					type: 'image',
				}
			],
			validation: Rule => Rule.required(),
		},
		{
			name: 'publishedDate',
			type: 'date',
			title: 'Published date',
			group: 'content',
			validation: Rule => Rule.required(),
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			group: 'content',
			fields: [
				{
					name: 'caption',
					type: 'string',
					title: 'Caption',
					options: {
						isHighlighted: true // <-- make this field easily accessible
					}
				}
			],
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			group: 'content',
			options: {
				source: 'title',
				slugify: input => input
					.toLowerCase()
					.replace(/\s+/g, '-')
					.slice(0, 30)
			},
			validation: Rule => Rule.required(),
		},
	]
}