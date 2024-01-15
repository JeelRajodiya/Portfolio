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
	useEffect(() => {
		if (isActive && ref && navIndicatorRef) {
			const { offsetLeft, offsetWidth } = ref.current!;
			navIndicatorRef.current!.style.height = `${
				ref.current!.offsetHeight
			}px`;
			navIndicatorRef.current!.style.left = `${offsetLeft}px`;
			navIndicatorRef.current!.style.width = `${offsetWidth}px`;
		}
	}, [isActive]);
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
