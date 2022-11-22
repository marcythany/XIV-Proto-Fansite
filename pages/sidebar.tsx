import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<aside className="bg-neutral">
			<div className="px-2 py-2 w-[16rem]">
				<ul className="flex flex-col w-full">
					<li className="my-px">
						<span className="flex px-4 my-4 text-sm font-medium text-gray-300 uppercase">Projects</span>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
								</svg>
							</span>
							<span className="ml-3">Manager</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
								</svg>
							</span>
							<span className="ml-3">Tasks</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</span>
							<span className="ml-3">Clients</span>
							<span className="flex items-center justify-center h-6 px-2 ml-auto text-xs font-semibold text-red-500 bg-red-100 rounded-full">
								1k
							</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-green-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
							<span className="ml-3">Add new</span>
						</a>
					</li>
					<li className="my-px">
						<span className="flex px-4 my-4 text-sm font-medium text-gray-300 uppercase">Account</span>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
							</span>
							<span className="ml-3">Profile</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
								</svg>
							</span>
							<span className="ml-3">Notifications</span>
							<span className="flex items-center justify-center h-6 px-2 ml-auto text-xs font-semibold text-red-500 bg-red-100 rounded-full">
								10
							</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-gray-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</span>
							<span className="ml-3">Settings</span>
						</a>
					</li>
					<li className="my-px">
						<a
							href="#"
							className="flex flex-row items-center h-10 px-3 text-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
						>
							<span className="flex items-center justify-center text-lg text-red-400">
								<svg
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
								</svg>
							</span>
							<span className="ml-3">Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
