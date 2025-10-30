import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { ToggleTheme } from './toggle-theme';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const PersonalHeader = () => {
	const { publication } = useAppContext();

	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 2);
	const hiddenItems = navbarItems.slice(2);

	const navList = (
		<ul className="flex list-none flex-row items-center gap-4 text-xs font-medium uppercase tracking-tight text-neutral-600 dark:text-neutral-400">
			{visibleItems.map((item) => (
				<li key={item.url} className="bg-zinc-200/70 px-1 py-0.5 dark:bg-zinc-800/60">
					<a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button>More</button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="flex flex-col items-stretch gap-1 rounded-lg border bg-white text-xs font-semibold uppercase tracking-tight text-neutral-600 shadow-xl dark:border-neutral-800 dark:bg-neutral-900  dark:text-neutral-300"
								sideOffset={5}
								align="end"
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full p-2 hover:underline"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<>
			<div className="flex items-center justify-between">
				<nav>{navList}</nav>
				<ToggleTheme />
			</div>
			<header className="">
				<div className="flex justify-between">
					<h1>
						<Link
							className="flex flex-row items-center gap-2 text-lg font-bold leading-tight tracking-tight text-black  dark:text-white"
							href="/"
							aria-label={`${publication.author.name}'s blog home page`}
						>
							{publication.author.profilePicture && (
								// eslint-disable-next-line @next/next/no-img-element
								<img
									className="block h-8 w-8 rounded-full fill-current"
									alt={publication.author.name}
									src={resizeImage(publication.author.profilePicture, {
										w: 400,
										h: 400,
										c: 'face',
									})}
								/>
							)}
							{publication.title}
						</Link>
					</h1>
				</div>
			</header>
		</>
	);
};
