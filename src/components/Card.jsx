/* eslint-disable react/no-unescaped-entities */
// Card.js
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Card() {
	return (
		<div className="bg-gray-900 text-white md:p-10 p-5 md:w-[40%] w-[90%] shadow-lg">
			<p className="md:text-3xl text-xl font-medium md:w-[90%]">
				Hi 👋🏻, I'm Vinay basargekar, a developer who enjoys building websites.
			</p>
			<div className="md:flex justify-between mt-4 space-x-2">
				<button className="flex justify-center items-center md:w-[50%] w-full md:mb-0 mb-5 py-3 bg-[#ff2d5d] text-white px-2 border-4 border-white ">
					<FaEnvelope className="mr-2 text-3xl" />
					<p className="text-xl md:text-2xl cursor-pointer">
						<a href="mailto:vinaybasargekar13@gmail.com">hey@vinay</a>
					</p>
				</button>
				<div className="flex text-lg ml-0">
					<div className="border-4 border-white flex justify-center w-[50%] hover:bg-[#ff2d5d]">
						<a
							href="https://github.com/Vinay-Basargekar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub className="text-white size-10 m-3" />
						</a>
					</div>
					<div className="border-4 border-white flex  justify-center w-[50%] hover:bg-[#ff2d5d]">
						<a
							href="https://www.linkedin.com/in/vinay-basargekar/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin className="text-white size-10 m-3" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
