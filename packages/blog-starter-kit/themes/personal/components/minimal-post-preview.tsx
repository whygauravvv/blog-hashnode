import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
};

export const MinimalPostPreview = ({ title, date, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<tr className="border-b  border-neutral-300 hover:bg-[#E9FF27] dark:border-neutral-800 dark:hover:bg-[#0B64FE]">
			<td className="py-2.5">
				<p className="text-xs">
					<Link href={postURL} className=" text-neutral-600 dark:text-neutral-400">
						<div className="mr-2 inline-block size-2 bg-black dark:bg-white" />
						<DateFormatter dateString={date} />
					</Link>
				</p>
			</td>
			<td className="py-2.5">
				<h2 className="line-clamp-1 text-2xl leading-tight tracking-tight text-black dark:text-white">
					<Link href={postURL}>{title}</Link>
				</h2>
			</td>
		</tr>
	);
};
