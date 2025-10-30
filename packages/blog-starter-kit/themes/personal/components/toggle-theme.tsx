import { useTheme } from 'next-themes';
import { ComponentProps } from 'react';

type Props = ComponentProps<'button'>;

export function ToggleTheme(props: Props) {
	const { setTheme, theme } = useTheme();

	return (
		<button
			aria-label="toggle"
			onClick={() => {
				setTheme(theme === 'dark' ? 'light' : 'dark');
			}}
			{...props}
		>
			<p className="bg-zinc-200/70 px-1 py-0.5 text-xs font-medium uppercase  tracking-tight text-neutral-600 dark:hidden dark:scale-100 dark:bg-zinc-800/60 dark:text-neutral-400">
				Dark
			</p>
			<p className="hidden bg-zinc-200/70 px-1 py-0.5 text-xs font-medium uppercase tracking-tight text-neutral-600 dark:block dark:scale-100 dark:bg-zinc-800/60 dark:text-neutral-400">
				Light
			</p>
		</button>
	);
}
