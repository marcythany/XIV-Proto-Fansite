import Image from "next/image";
import {useEffect, useState} from "react";
import Button from "./button";
import {useTheme} from "next-themes";
import Avatar from "./images/avatar_96x96.jpg";

type Props = {};

const Navbar = (props: Props) => {
	const {systemTheme, theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === "system" ? systemTheme : theme;

		if (currentTheme === "dark") {
			return (
				<Button className=" rounded-full dark:bg-[#c7bc99]" onClick={() => setTheme("garden")}>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			);
		} else {
			return (
				<Button className="rounded-full bg-[#e4d8b4]" onClick={() => setTheme("dark")}>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="#404040">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</Button>
			);
		}
	};

	return (
		<div className="z-0 navbar bg-neutral">
			<div className="flex-1">
				<a className="text-xl normal-case btn btn-ghost font-saira dark:text-gray-200">
					<span className="p-1 mr-2 border-2 dark:border-gray-200 text-error">XIV</span> Proto Fansite
				</a>
			</div>

			<div className="navbar-center text-[1rem] font-semibold">
				<ul className="p-0 menu menu-horizontal">
					<li>
						<a>Raibu Retta</a>
					</li>
					<li>
						<a>Guides</a>
					</li>
					<li>
						<a>Niusu</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
				</ul>
			</div>

			<div className="flex-none gap-2">
				<div className="form-control">
					<input type="text" placeholder="Search" className="input input-bordered bg-base-100" />
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10">
							<Image className="rounded-full" src={Avatar} alt="Avatar" fill />
						</div>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-neutral rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge bg-accent text-primary">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
				<div>{renderThemeChanger()}</div>
			</div>
		</div>
	);
};

export default Navbar;
