"use client";
import { MenuItem } from "@chakra-ui/react";
import styles from "./NavBar.module.css";
import NavItem from "../NavItem/NavItem";
import { forwardRef, useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";

const NavIndicator = forwardRef(function NavIndicator(props: any, ref: any) {
	return <div ref={ref} className={styles.navIndicator}></div>;
});
function postVisitor(cookies: { [key: string]: string }) {
	if (!cookies._ga) {
		fetch("/api/visitor", {
			method: "POST",
		});
	}
}
function postView(
	cookies: { [key: string]: string },
	setCookie: (name: string, value: string, options?: any) => void
) {
	if (!cookies.session_started) {
		fetch("/api/view", {
			method: "POST",
		});

		setCookie("session_started", "true", { maxAge: 1800 });
	}
}
export default function NavBar() {
	const initialized = useRef(false);
	const [cookies, setCookie] = useCookies();

	useEffect(() => {
		if (!initialized.current) {
			initialized.current = true;

			postVisitor(cookies);
			postView(cookies, setCookie);
		}
	}, [cookies, setCookie]);
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
