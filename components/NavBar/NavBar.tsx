"use client";
import { MenuItem } from "@chakra-ui/react";
import styles from "./NavBar.module.css";
import NavItem from "../NavItem/NavItem";
import { forwardRef, useEffect, useRef, useState } from "react";

const NavIndicator = forwardRef(function NavIndicator(props: any, ref: any) {
	return <div ref={ref} className={styles.navIndicator}></div>;
});

export default function NavBar() {
	const navItemsMap = [
		{
			name: "About",
			link: "",
		},
		{
			name: "Projects",
			link: "#Projects",
		},
		{
			name: "Contact",
			link: "#Contact",
		},
	];
	const [activeItem, setActiveItem] = useState(navItemsMap[0].name);
	const navIndicatorRef = useRef<HTMLDivElement>(null);
	const navBarRef = useRef<HTMLDivElement>(null);

	return (
		<div className={styles.navBar} ref={navBarRef}>
			{navItemsMap.map((item) => (
				<NavItem
					link={item.link}
					navIndicatorRef={navIndicatorRef}
					setActive={setActiveItem}
					key={item.name}
					name={item.name}
					isActive={item.name === activeItem}
				/>
			))}
			<NavIndicator ref={navIndicatorRef} />
		</div>
	);
}
