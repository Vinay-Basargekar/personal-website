/* eslint-disable react/no-unescaped-entities */
// Card.js
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Card() {
	return (
		<div className="bg-gray-900 text-white md:p-10 p-5 md:w-[40%] w-[90%] shadow-lg">
			<p className="md:text-3xl text-xl font-medium md:w-[90%]">
				Hi 👋🏻, I'm Vinay, a developer who enjoys crafting user-friendly
				websites.
			</p>
			<div className="flex justify-between mt-4 space-x-2">
				<button className="flex items-center bg-[#ff2d5d] text-white px-2 border-2 border-white ">
					<FaEnvelope className="mr-2 text-3xl" />
					<p className="text-xl md:text-2xl cursor-pointer">
						<a href="mailto:vinaybasargekar13@gmail.com">hey@vinay</a>
					</p>
				</button>
				<div className="flex text-lg">
					<div className="border-2 border-white hover:bg-[#ff2d5d]">
						<a
							href="https://github.com/Vinay-Basargekar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="text-white size-5 md:size-10 m-3" />
						</a>
					</div>
					<div className="border-2 border-white hover:bg-[#ff2d5d]">
						<a
							href="https://www.linkedin.com/in/vinay-basargekar/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="text-white size-5 md:size-10 m-3" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
