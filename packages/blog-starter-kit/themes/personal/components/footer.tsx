import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className=" text-center text-xs text-neutral-300 dark:border-neutral-800 dark:text-neutral-400">
			&copy; {new Date().getFullYear()} powered by my will to write.
		</footer>
	);
};
