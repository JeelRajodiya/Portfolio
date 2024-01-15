import { useEffect, useRef } from "react";
import styles from "./NavItem.module.css";
import classNames from "classnames";

export default function NavItem({
	name,
	navIndicatorRef,
	isActive,
	setActive,
}: {
	name: string;
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
	return (
		<div
			ref={ref}
			className={classNames(
				styles.menuItem,
				isActive ? styles.active : ""
			)}
			onClick={() => setActive(name)}
		>
			{name}
		</div>
	);
}
