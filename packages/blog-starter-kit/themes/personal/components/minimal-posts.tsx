import { PostFragment } from '../generated/graphql';
import { MinimalPostPreview } from './minimal-post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MinimalPosts = ({ posts }: Props) => {
	return (
		<table className="table text-left">
			<thead className="border-b border-neutral-300 dark:border-neutral-800">
				<tr className=" text-xs uppercase text-neutral-500 dark:text-neutral-400">
					<th className="min-w-20 font-mono font-normal tracking-tight">/Date</th>
					<th className="min-w-20 font-mono font-normal tracking-tight">/Title</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => (
					<MinimalPostPreview
						key={post.id}
						title={post.title}
						date={post.publishedAt}
						author={{
							name: post.author.name,
						}}
						slug={post.slug}
					/>
				))}
			</tbody>
		</table>
	);
};
