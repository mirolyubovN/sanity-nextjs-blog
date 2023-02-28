import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
	projectId: 'yj38474p',
	dataset: 'production',
}

export const client = createClient({
	projectId: clientConfig.projectId,
	dataset: clientConfig.dataset,
	useCdn: true,
	apiVersion: '2023-02-23', // use current date (YYYY-MM-DD) to target the latest API version
	token: process.env.SANITY_SECRET_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);