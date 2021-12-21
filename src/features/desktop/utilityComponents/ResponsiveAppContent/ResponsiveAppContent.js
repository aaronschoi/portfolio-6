const ResponsiveAppContent = ({ target, className, children }) => {
	const [mini, setMini] = React.useState("");

	React.useEffect(() => {
		const halfScreen = window.innerWidth / 2;

		const resize_ob = new ResizeObserver(function (entries) {
			let width = entries[0].contentRect.width;

			if (!mini) {
				if (width < halfScreen) {
					setMini("-mini");
                    console.log("minicalled")
				}
			}
			if (mini) {
				if (width > halfScreen) {
					setMini("");
                    console.log("called")
				}
			}
		});

		resize_ob.observe(document.getElementById(target));

		return () => resize_ob.unobserve(document.getElementById(target));
	}, [mini]);

	return <div className={`${className}${mini}`}>{children && children}</div>;
};

export default ResponsiveAppContent;
