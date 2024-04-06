import React, { FC, HTMLAttributes } from 'react'

interface HelixColorProps
	extends HTMLAttributes<HTMLElement> {
	size?: number
	classNameIcon?: string
	classNameText?: string
	classNameSufix?: string
	className?: string
}

export const HelixColor: FC<HelixColorProps> = ({
	size = 64,
	classNameIcon,
	classNameText,
	classNameSufix,
	className,
}) => {
	const proportion = 5.21875
	const width = size * proportion
	return (
		<svg
			width={`${width}px`}
			height={`${size}px`}
			viewBox='0 0 334 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-labelledby='catTitle catDesc'
			className={className}>
			<title id='catTitle'>HelixColor</title>
			<desc id='catDesc'>
				Color selection based on the color wheel
			</desc>
			<path
				d='M1.86945 40.015C1.86945 40.015 5.18881 38.0407 9.22218 37.8321C15.8856 37.4873 26.2254 42.7722 34.1526 38.6363C42.0798 34.5004 40.4714 24.3903 40.4714 24.3903M55.3811 17.2944C55.3811 17.2944 52.0617 19.2687 48.0283 19.4773C41.3649 19.822 31.0251 14.5371 23.0979 18.6731C15.1707 22.809 16.7792 32.919 16.7792 32.919M40.0955 1.75757C40.0955 1.75757 39.0851 3.25105 38.405 6.12322C37.7249 8.99539 38.405 11.9887 38.405 11.9887M17.4231 55.6456C17.4231 55.6456 18.4335 54.1521 19.1135 51.2799C19.7936 48.4078 19.1135 45.4145 19.1135 45.4145'
				stroke='currentColor'
				stroke-width='3.21683'
				stroke-linecap='round'
				className={classNameIcon}
			/>

			<path
				d='M96.8083 12.1064C97.7273 12.1064 98.4741 12.8532 98.4741 13.7722V49.5595C98.4741 50.4786 97.7273 51.1679 96.8083 51.1679C95.8892 51.1679 95.1998 50.4786 95.1998 49.5595V33.82H67.8568V49.5595C67.8568 50.4786 67.11 51.1679 66.1909 51.1679C65.2718 51.1679 64.5825 50.4786 64.5825 49.5595V13.7722C64.5825 12.9106 65.2718 12.1064 66.1909 12.1064C67.11 12.1064 67.8568 12.8532 67.8568 13.7722V30.718H95.1998V13.7722C95.1998 12.9106 95.8892 12.1064 96.8083 12.1064Z'
				fill='currentColor'
				className={classNameText}
			/>
			<path
				d='M118.61 22.7334C126.25 22.7909 132.396 29.282 132.396 37.1517V37.8985C132.396 38.7601 131.707 39.4494 130.903 39.4494H108.098C109.017 44.7342 113.325 48.7553 118.84 48.7553C121.827 48.7553 125.503 47.6064 129.294 45.6533C130.041 45.3087 130.96 45.5959 131.305 46.3426C131.707 47.0894 131.42 48.0085 130.673 48.3532C126.307 50.5935 122.114 51.7423 118.84 51.7423C110.855 51.7423 104.766 45.3087 104.766 37.324C104.766 29.2245 110.912 22.7334 118.61 22.7334ZM107.983 36.4049H129.237C128.892 30.6032 124.297 25.7779 118.61 25.7779C112.865 25.7779 108.385 30.6032 107.983 36.4049Z'
				fill='currentColor'
				className={classNameText}
			/>
			<path
				d='M140.298 51.1679C139.437 51.1679 138.747 50.4786 138.747 49.6169V12.5659C138.747 11.7043 139.437 10.9575 140.298 10.9575C141.16 10.9575 141.907 11.6468 141.907 12.5659V49.6169C141.907 50.4786 141.16 51.1679 140.298 51.1679Z'
				fill='currentColor'
				className={classNameText}
			/>
			<path
				d='M151.003 18.9996C149.854 18.9996 148.992 18.0805 148.992 16.9316C148.992 15.7828 149.854 14.8062 151.003 14.8062C152.094 14.8062 153.013 15.7828 153.013 16.9316C153.013 18.0805 152.094 18.9996 151.003 18.9996ZM150.946 51.1679C150.084 51.1679 149.395 50.4786 149.395 49.6169V24.9163C149.395 24.0546 150.084 23.3078 150.946 23.3078C151.807 23.3078 152.554 23.9972 152.554 24.9163V49.6169C152.554 50.4786 151.807 51.1679 150.946 51.1679Z'
				fill='currentColor'
				className={classNameText}
			/>
			<path
				d='M172.305 37.2666L181.726 48.6404C182.301 49.2723 182.186 50.3062 181.496 50.8232C181.209 51.053 180.865 51.1679 180.52 51.1679C180.06 51.1679 179.601 50.9956 179.314 50.5935L170.467 39.7941L161.621 50.5935C161.334 50.9956 160.874 51.1679 160.415 51.1679C160.07 51.1679 159.725 51.053 159.438 50.8232C158.749 50.3062 158.634 49.2723 159.208 48.6404L168.687 37.2666L159.208 25.8928C158.634 25.2609 158.749 24.2269 159.438 23.71C160.07 23.1355 161.104 23.2504 161.621 23.9397L170.467 34.7391L179.314 23.9397C179.831 23.2504 180.865 23.1355 181.496 23.71C182.186 24.2269 182.301 25.2609 181.726 25.8928L172.305 37.2666Z'
				fill='currentColor'
				className={classNameText}
			/>
			<path
				d='M208.433 51.7423C197.289 51.7423 188.443 42.6663 188.443 31.6371C188.443 20.608 197.346 11.532 208.433 11.532C213.775 11.532 218.888 13.7722 222.564 17.621C223.54 18.5975 223.483 20.2059 222.506 21.125C221.473 22.1015 219.922 22.1015 218.945 21.0676C216.188 18.1379 212.454 16.5295 208.433 16.5295C200.218 16.5295 193.727 23.3653 193.727 31.6371C193.727 39.9664 200.218 46.7447 208.433 46.7447C212.454 46.7447 216.188 45.1938 218.945 42.2642C219.922 41.2302 221.473 41.2302 222.506 42.2067C223.483 43.1258 223.54 44.7342 222.564 45.7108C218.888 49.5595 213.775 51.7423 208.433 51.7423Z'
				fill='currentColor'
				className={classNameSufix}
			/>
			<path
				d='M244.255 22.4462C252.297 22.4462 258.903 29.0522 258.903 37.0943C258.903 45.1938 252.297 51.7423 244.255 51.7423C236.155 51.7423 229.607 45.1938 229.607 37.0943C229.607 29.0522 236.155 22.4462 244.255 22.4462ZM244.255 46.8596C249.482 46.8596 253.733 42.4939 253.733 37.0943C253.733 31.752 249.482 27.3289 244.255 27.3289C238.97 27.3289 234.776 31.752 234.776 37.0943C234.776 42.4939 238.97 46.8596 244.255 46.8596Z'
				fill='currentColor'
				className={classNameSufix}
			/>
			<path
				d='M268.403 51.1679C266.967 51.1679 265.818 50.019 265.818 48.5829V13.5425C265.818 12.1638 266.967 10.9575 268.403 10.9575C269.782 10.9575 270.988 12.1638 270.988 13.5425V48.5829C270.988 50.019 269.782 51.1679 268.403 51.1679Z'
				fill='currentColor'
				className={classNameSufix}
			/>
			<path
				d='M292.503 22.4462C300.545 22.4462 307.151 29.0522 307.151 37.0943C307.151 45.1938 300.545 51.7423 292.503 51.7423C284.403 51.7423 277.855 45.1938 277.855 37.0943C277.855 29.0522 284.403 22.4462 292.503 22.4462ZM292.503 46.8596C297.73 46.8596 301.981 42.4939 301.981 37.0943C301.981 31.752 297.73 27.3289 292.503 27.3289C287.218 27.3289 283.024 31.752 283.024 37.0943C283.024 42.4939 287.218 46.8596 292.503 46.8596Z'
				fill='currentColor'
				className={classNameSufix}
			/>
			<path
				d='M327.68 22.5611C329.633 22.4462 331.127 24.3418 330.495 26.2375C330.036 27.5587 328.772 28.1905 327.68 28.1905C327.565 28.1905 327.393 28.1331 327.221 28.1331C322.51 28.1331 318.662 32.1541 318.662 37.0368V48.5829C318.662 50.019 317.455 51.1679 316.077 51.1679C314.641 51.1679 313.492 50.019 313.492 48.5829V25.6056C313.492 24.2269 314.641 23.0206 316.077 23.0206C317.455 23.0206 318.662 24.2269 318.662 25.6056V27.5012C321.189 23.71 324.866 22.7334 327.68 22.5611Z'
				fill='currentColor'
				className={classNameSufix}
			/>
		</svg>
	)
}
