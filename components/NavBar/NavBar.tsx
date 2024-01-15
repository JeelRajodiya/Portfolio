"use client";
import { MenuItem } from "@chakra-ui/react";
import styles from "./NavBar.module.css";
import NavItem from "../MenuItem/NavItem";
import { forwardRef, useEffect, useRef, useState } from "react";

const NavIndicator = forwardRef(function NavIndicator(props: any, ref: any) {
	return <div ref={ref} className={styles.navIndicator}></div>;
});

export default function NavBar() {
	const navItems = ["About", "Projects", "Contact"];
	const [activeItem, setActiveItem] = useState(navItems[0]);
	const navIndicatorRef = useRef<HTMLDivElement>(null);
	const navBarRef = useRef<HTMLDivElement>(null);
	// useEffect(() => {
	// 	if (
	// 		navBarRef &&
	// 		navIndicatorRef &&
	// 		navBarRef.current &&
	// 		navIndicatorRef.current
	// 	) {
	// 		console.log(
	// 			navBarRef.current.offsetHeight,
	// 			navIndicatorRef.current.offsetHeight
	// 		);
	// 		navIndicatorRef.current.style.height = `${navBarRef.current.offsetHeight}px`;
	// 	}
	// }, [navBarRef, navIndicatorRef]);
	return (
		<div className={styles.navBar} ref={navBarRef}>
			{navItems.map((item) => (
				<NavItem
					navIndicatorRef={navIndicatorRef}
					setActive={setActiveItem}
					key={item}
					name={item}
					isActive={item === activeItem}
				/>
			))}
			<NavIndicator ref={navIndicatorRef} />
		</div>
	);
}
