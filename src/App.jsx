import { useEffect } from "react";
import { CanvasSpace, Pt, World, Particle, Create, Num } from "pts";
import Card from "./components/Card";

function App() {
	useEffect(() => {
		const space = new CanvasSpace("#ptCanvas");
		space.setup({ bgcolor: "#ffff" });
		const form = space.getForm();
		let world;

		space.add({
			start: () => {
				world = new World(space.innerBound, 1, 0);
				const pts = Create.distributeRandom(space.innerBound, 200);

				// Create particles and assign random impulses
				pts.forEach((pt, i) => {
					const particle = new Particle(pt).size(
						i === 0 ? 30 : 3 + (Math.random() * space.size.x) / 35
					);
					particle.hit(Num.randomRange(-50, 50), Num.randomRange(-25, 25));
					world.add(particle);
				});

				world.particle(0).lock = true;
			},

			animate: (time, ftime) => {
				world.drawParticles((p, i) => {
					if (i === 0) {
						// form.fillOnly("#fff").point(p, p.radius, "circle");
						form.strokeOnly("#007bff").point(p, p.radius + 3, "circle");
					} else {
						const color = ["#ff2d5d", "#42dc8e", "#2e43eb", "#ffe359"][i % 4];
						form.fillOnly(color).point(p, p.radius, "circle");
					}
				});
				world.update(ftime);
			},

			action: (type, px, py) => {
				if (type === "move") {
					world.particle(0).position = new Pt(px, py);
				}
			},

			resize: () => {
				if (world) world.bound = space.innerBound;
			},
		});

		space.bindMouse().bindTouch();
		space.play();

		return () => {
			space.stop();
		};
	}, []);

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
			}}
		>
			<canvas
				id="ptCanvas"
				style={{ display: "block", width: "100%", height: "100%" }}
			/>
			<div className="absolute md:bottom-10 bottom-5 md:left-10 left-5 z-10 w-screen">
				<Card />
			</div>
		</div>
	);
}

export default App;
