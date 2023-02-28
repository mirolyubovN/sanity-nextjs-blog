import React, { useState } from 'react';

import {
	Section,
	Cover,
	SocialNetworks,
	BuyMeCoffee,
	Title,
	PostGrid,
	Post,
	Button
} from '@/components'

import Head from 'next/head'

import { loadPosts } from './api/posts';

const LOAD_MORE_STEP = 4;

export default function Home({ initialPosts, total }) {
	const [posts, setPosts] = useState(initialPosts)
	const [loadedCount, setLoadedCount] = useState(LOAD_MORE_STEP);
	const [loading, setLoading] = useState(false);

	const showLoadMore = total > loadedCount;

	const getMorePosts = async () => {
		setLoading(true);
		try {
			const response = await fetch(`/api/posts?start=${loadedCount}&end=${loadedCount + LOAD_MORE_STEP}`);
			const data = await response.json();

			setLoadedCount(loadedCount + LOAD_MORE_STEP);
			setPosts([...posts, ...data.posts]);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}

	}

	return (
		<>
			<Head>
				<title>Sanity blog</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Section>
					<Cover title="Nikita <br/> Mirolyubov" />
					<SocialNetworks />
					<BuyMeCoffee />
				</Section>
				<Section>
					<Title> New posts</Title>
					<PostGrid>
						{posts.map((post) => (
							<Post
								key={post.slug.current}
								{...post}
							/>
						))}
					</PostGrid>
					{showLoadMore && (
						<div style={{
							display: 'flex',
							justifyContent: 'center'
						}}>
							<Button
								onClick={getMorePosts}
								disabled={loading}
							>
								Load more posts
							</Button>
						</div>
					)}
				</Section>
			</main>
		</>
	)
}

export async function getServerSideProps() {
	const { posts, total } = await loadPosts(0, LOAD_MORE_STEP);

	return {
		props: {
			initialPosts: posts,
			total
		}
	}
}
