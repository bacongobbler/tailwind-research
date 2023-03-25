import Button from "@/atoms/button";
import NavBar from "@/organisms/navbar";

export default function HomePage() {
	return (
		<div>
			<NavBar />
			<section id="hero">
				<div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
					<div className="flex flex-col mb-32 space-y-12 md:w-1/2">
						<h1 className="max-w-md text-4xl font-bold text-oxfordblue text-center md:text-5xl md:text-left">
							Experience the next wave of cloud computing
						</h1>
						<p className="max-w-sm text-center text-oxfordblue md:text-left">
							Go from blinking cursor to deployed serverless app in 66 seconds.
						</p>
						<div className="flex justify-center md:justify-start">
							<Button text="Get Started" />
						</div>
					</div>
				</div>
			</section>

			<section id="features">
				<div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
					<div className="flex flex-col space-y-12 md:w-1/2">
						<h2 className="max-w-md text-4xl font-bold text-oxfordblue text-center md:text-left">
							A frictionless dev experience
						</h2>
						<p className="max-w-sm text-center text-oxfordblue md:text-left">
							Quickly create, distribute, and execute WebAssembly apps, functions and microservices with Spin — our developer framework and CLI.
						</p>
					</div>
					<div className="flex flex-col space-y-4 md:w-1/2">
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-darkolive-xlight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkocean">1</div>
									<h3 className="text-base font-bold font-mono md:mb-4 md:hidden">$ spin build</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold font-mono md:block">$ spin build</h3>
							</div>
						</div>
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-darkolive-xlight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkocean">2</div>
									<h3 className="text-base font-bold font-mono md:mb-4 md:hidden">$ spin login</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold font-mono md:block">$ spin login</h3>
							</div>
						</div>
						<div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
							<div className="rounded-l-full bg-darkolive-xlight md:bg-transparent">
								<div className="flex items-center space-x-2">
									<div className="px-4 py-2 text-white rounded-full md:py-1 bg-darkocean">3</div>
									<h3 className="text-base font-bold font-mono md:mb-4 md:hidden">$ spin deploy</h3>
								</div>
							</div>
							<div>
								<h3 className="hidden mb-4 text-lg font-bold font-mono md:block">$ spin deploy</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
