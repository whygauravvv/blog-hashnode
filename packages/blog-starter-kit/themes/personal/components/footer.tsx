import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className=" text-center text-xs text-neutral-300 dark:text-neutral-600">
			&copy; {new Date().getFullYear()} powered by my will to write.
		</footer>
	);
};
