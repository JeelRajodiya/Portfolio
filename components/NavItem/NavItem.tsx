import { useEffect, useRef } from "react";
import styles from "./NavItem.module.css";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { event } from "nextjs-google-analytics";

export default function NavItem({
	name,
	link,
	navIndicatorRef,
	isActive,
	setActive,
}: {
	name: string;
	link: string;
	navIndicatorRef: any;
	isActive: boolean;
	setActive: (name: string) => void;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const offsetMiss = 8;
	useEffect(() => {
		if (isActive && ref && navIndicatorRef) {
			const { offsetLeft, offsetWidth } = ref.current!;
			navIndicatorRef.current!.style.height = `${
				ref.current!.offsetHeight
			}px`;
			navIndicatorRef.current!.style.left = `${
				offsetLeft + offsetMiss
			}px`;
			setTimeout(() => {
				navIndicatorRef.current!.style.left = `${
					offsetLeft - offsetMiss
				}px`;
			}, 100);
			setTimeout(() => {
				navIndicatorRef.current!.style.left = `${offsetLeft}px`;
			}, 200);

			navIndicatorRef.current!.style.width = `${offsetWidth}px`;
		}
	}, [isActive, navIndicatorRef]);
	const router = useRouter();
	useEffect(() => {
		if (isActive) {
			router.push(`${link}`);
		}
	}, [isActive, link, router]);
	return (
		<div
			ref={ref}
			className={classNames(
				styles.navItem,
				isActive ? styles.active : ""
			)}
			onClick={() => {
				setActive(name);
				event("navigate", {
					menu: name,
				});
			}}
		>
			{name}
		</div>
	);
}
