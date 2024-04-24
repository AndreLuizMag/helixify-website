import React, { FC, HTMLAttributes } from 'react'

interface HelixCSSProps
	extends HTMLAttributes<HTMLElement> {
	size?: number
	classNameIcon?: string
	classNameText?: string
	classNameSufix?: string
	className?: string
}

export const HelixCSS: FC<HelixCSSProps> = ({
	size = 64,
	classNameIcon,
	classNameText,
	classNameSufix,
	className,
}) => {
	const proportion = 4.734375
	const width = size * proportion
	return (
		<svg
			width={`${width}px`}
			height={`${size}px`}
			viewBox='0 0 303 64'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-labelledby='catTitle catDesc'
			className={className}>
			<title id='catTitle'>HelixCSS</title>
			<desc id='catDesc'>A framework CSS</desc>
			<g className={classNameIcon}>
				<path
					d='M1.18415 38.5904C0.426571 39.041 0.177702 40.0204 0.628285 40.778C1.07887 41.5355 2.05827 41.7844 2.81585 41.3338L1.18415 38.5904ZM9.29599 37.7961L9.37844 39.3899L9.29599 37.7961ZM41.8801 24.2073C41.7417 23.3368 40.9237 22.7434 40.0532 22.8819C39.1827 23.0204 38.5893 23.8383 38.7278 24.7088L41.8801 24.2073ZM55.9144 18.7886C56.672 18.3381 56.9209 17.3586 56.4703 16.6011C56.0197 15.8435 55.0403 15.5946 54.2827 16.0452L55.9144 18.7886ZM47.8026 19.583L47.7202 17.9891L47.8026 19.583ZM15.2185 33.1717C15.3569 34.0422 16.1749 34.6356 17.0454 34.4971C17.9159 34.3586 18.5093 33.5407 18.3708 32.6702L15.2185 33.1717ZM41.2529 2.89432C41.7468 2.16426 41.5554 1.17202 40.8253 0.678103C40.0952 0.184185 39.103 0.375618 38.6091 1.10568L41.2529 2.89432ZM38.2536 6.33196L39.8066 6.69969L38.2536 6.33196ZM36.6972 12.5057C36.8925 13.3653 37.7476 13.9037 38.6072 13.7085C39.4667 13.5132 40.0052 12.6581 39.8099 11.7985L36.6972 12.5057ZM16.1117 54.5778C15.6178 55.3078 15.8092 56.3001 16.5393 56.794C17.2693 57.2879 18.2616 57.0965 18.7555 56.3664L16.1117 54.5778ZM19.111 51.1401L17.5579 50.7724L19.111 51.1401ZM20.6673 44.9664C20.472 44.1068 19.6169 43.5683 18.7574 43.7636C17.8978 43.9589 17.3594 44.814 17.5547 45.6736L20.6673 44.9664ZM2 39.9621C2.81585 41.3338 2.81554 41.334 2.81524 41.3342C2.81515 41.3342 2.81486 41.3344 2.81469 41.3345C2.81436 41.3347 2.81407 41.3349 2.81383 41.335C2.81335 41.3353 2.81307 41.3355 2.81298 41.3355C2.8128 41.3356 2.8134 41.3353 2.81477 41.3345C2.81751 41.3329 2.82331 41.3295 2.8321 41.3245C2.84968 41.3144 2.87919 41.2976 2.91999 41.2751C3.00164 41.2301 3.12821 41.1622 3.29471 41.0784C3.62833 40.9105 4.11873 40.6806 4.72645 40.4439C5.95211 39.9664 7.60236 39.4818 9.37844 39.3899L9.21353 36.2022C6.98737 36.3173 4.98963 36.9157 3.56785 37.4696C2.85186 37.7485 2.26868 38.0213 1.85965 38.2272C1.65483 38.3303 1.49281 38.417 1.3787 38.4799C1.32162 38.5114 1.27645 38.5369 1.24383 38.5557C1.22752 38.565 1.21434 38.5727 1.20437 38.5785C1.19938 38.5814 1.1952 38.5839 1.19183 38.5858C1.19014 38.5868 1.18865 38.5877 1.18737 38.5885C1.18674 38.5889 1.18615 38.5892 1.18561 38.5895C1.18534 38.5897 1.18497 38.5899 1.18484 38.59C1.18449 38.5902 1.18415 38.5904 2 39.9621ZM9.37844 39.3899C10.8297 39.3148 12.5527 39.546 14.5492 39.922C16.4402 40.2781 18.7582 40.8047 20.9232 41.1785C25.3509 41.9429 30.3418 42.3206 34.7722 40.0091L33.2957 37.1791C29.8601 38.9716 25.788 38.7792 21.4663 38.0331C19.2566 37.6516 17.2782 37.1878 15.14 36.7851C13.1073 36.4023 11.0683 36.1062 9.21353 36.2022L9.37844 39.3899ZM34.7722 40.0091C39.2866 37.6537 41.0469 33.5931 41.6857 30.2901C42.0053 28.6374 42.0548 27.1346 42.0259 26.0473C42.0114 25.5014 41.9769 25.0543 41.9452 24.7381C41.9294 24.5798 41.9142 24.4539 41.9024 24.3642C41.8965 24.3193 41.8915 24.2835 41.8877 24.2572C41.8858 24.2441 41.8841 24.2333 41.8829 24.225C41.8822 24.2208 41.8817 24.2172 41.8812 24.2143C41.881 24.2128 41.8808 24.2115 41.8806 24.2103C41.8805 24.2098 41.8804 24.209 41.8804 24.2087C41.8802 24.208 41.8801 24.2073 40.304 24.4581C38.7278 24.7088 38.7277 24.7082 38.7276 24.7077C38.7276 24.7075 38.7275 24.707 38.7275 24.7067C38.7274 24.7062 38.7273 24.7058 38.7273 24.7055C38.7272 24.705 38.7272 24.7051 38.7273 24.7058C38.7275 24.7071 38.7281 24.7108 38.7289 24.7168C38.7307 24.7287 38.7336 24.7497 38.7375 24.7793C38.7453 24.8386 38.7567 24.9322 38.7691 25.0562C38.794 25.3046 38.8228 25.6734 38.835 26.1321C38.8595 27.054 38.8164 28.3158 38.5517 29.684C38.022 32.4231 36.6473 35.4304 33.2957 37.1791L34.7722 40.0091ZM55.0986 17.4169C54.2827 16.0452 54.2831 16.045 54.2834 16.0448C54.2834 16.0448 54.2837 16.0446 54.2839 16.0445C54.2842 16.0443 54.2845 16.0441 54.2848 16.044C54.2852 16.0437 54.2855 16.0436 54.2856 16.0435C54.2858 16.0434 54.2852 16.0438 54.2838 16.0446C54.2811 16.0461 54.2753 16.0495 54.2665 16.0546C54.2489 16.0647 54.2194 16.0814 54.1786 16.1039C54.097 16.1489 53.9704 16.2168 53.8039 16.3006C53.4703 16.4686 52.9799 16.6984 52.3721 16.9351C51.1465 17.4126 49.4962 17.8972 47.7202 17.9891L47.8851 21.1768C50.1112 21.0617 52.109 20.4633 53.5307 19.9095C54.2467 19.6306 54.8299 19.3577 55.2389 19.1519C55.4438 19.0488 55.6058 18.962 55.7199 18.8991C55.777 18.8676 55.8221 18.8421 55.8548 18.8234C55.8711 18.814 55.8843 18.8064 55.8942 18.8005C55.8992 18.7976 55.9034 18.7952 55.9068 18.7932C55.9085 18.7922 55.9099 18.7913 55.9112 18.7905C55.9119 18.7902 55.9125 18.7898 55.913 18.7895C55.9133 18.7893 55.9136 18.7891 55.9138 18.789C55.9141 18.7888 55.9144 18.7886 55.0986 17.4169ZM47.7202 17.9891C46.2689 18.0642 44.5459 17.833 42.5494 17.457C40.6584 17.1009 38.3404 16.5743 36.1754 16.2005C31.7477 15.4361 26.7568 15.0584 22.3264 17.3699L23.8029 20.1999C27.2385 18.4074 31.3106 18.5998 35.6323 19.346C37.842 19.7274 39.8204 20.1912 41.9586 20.5939C43.9913 20.9767 46.0303 21.2728 47.8851 21.1768L47.7202 17.9891ZM22.3264 17.3699C17.812 19.7253 16.0517 23.7859 15.4129 27.0889C15.0933 28.7417 15.0438 30.2444 15.0727 31.3317C15.0872 31.8776 15.1217 32.3247 15.1534 32.6409C15.1692 32.7992 15.1844 32.9252 15.1962 33.0148C15.2021 33.0597 15.2071 33.0955 15.2109 33.1218C15.2128 33.135 15.2145 33.1457 15.2157 33.1541C15.2164 33.1582 15.2169 33.1618 15.2174 33.1647C15.2176 33.1662 15.2178 33.1675 15.218 33.1687C15.2181 33.1693 15.2182 33.17 15.2182 33.1703C15.2183 33.171 15.2185 33.1717 16.7946 32.9209C18.3708 32.6702 18.3709 32.6708 18.371 32.6713C18.371 32.6715 18.3711 32.672 18.3711 32.6723C18.3712 32.6728 18.3713 32.6732 18.3713 32.6735C18.3714 32.674 18.3714 32.6739 18.3713 32.6732C18.3711 32.6719 18.3705 32.6682 18.3697 32.6623C18.3679 32.6503 18.365 32.6293 18.3611 32.5997C18.3533 32.5404 18.3419 32.4469 18.3295 32.3228C18.3046 32.0744 18.2758 31.7057 18.2636 31.2469C18.2391 30.325 18.2822 29.0632 18.5469 27.695C19.0766 24.956 20.4513 21.9486 23.8029 20.1999L22.3264 17.3699ZM39.931 2C38.6091 1.10568 38.6088 1.10606 38.6086 1.10645C38.6085 1.10658 38.6082 1.10698 38.608 1.10725C38.6077 1.10779 38.6073 1.10836 38.6069 1.10896C38.6061 1.11014 38.6052 1.11142 38.6043 1.11279C38.6025 1.11553 38.6004 1.11864 38.5981 1.12213C38.5935 1.1291 38.5879 1.13755 38.5814 1.14749C38.5685 1.16737 38.552 1.19318 38.5322 1.2249C38.4927 1.28833 38.4401 1.37542 38.3771 1.48595C38.2512 1.70699 38.0836 2.02196 37.8959 2.42909C37.5205 3.24345 37.0645 4.42685 36.7005 5.96422L39.8066 6.69969C40.1174 5.38706 40.5001 4.40448 40.7948 3.76536C40.9421 3.44576 41.0673 3.21212 41.1505 3.06622C41.192 2.99329 41.223 2.94234 41.241 2.91359C41.2499 2.89922 41.2556 2.89041 41.2577 2.88719C41.2587 2.88558 41.2589 2.88536 41.2581 2.88655C41.2577 2.88714 41.2571 2.88809 41.2562 2.88938C41.2558 2.89003 41.2553 2.89076 41.2547 2.89159C41.2545 2.892 41.2542 2.89243 41.2539 2.89289C41.2537 2.89311 41.2535 2.89347 41.2534 2.89359C41.2531 2.89395 41.2529 2.89432 39.931 2ZM36.7005 5.96422C36.3111 7.60874 36.3179 9.24408 36.4092 10.433C36.4554 11.035 36.5248 11.5409 36.5835 11.9006C36.6129 12.0808 36.6398 12.2254 36.6601 12.3281C36.6703 12.3795 36.6788 12.4204 36.6851 12.4503C36.6883 12.4652 36.6909 12.4774 36.693 12.4866C36.694 12.4913 36.6949 12.4952 36.6956 12.4984C36.6959 12.5 36.6962 12.5014 36.6965 12.5026C36.6967 12.5032 36.6968 12.5038 36.6969 12.5043C36.697 12.5046 36.6971 12.5049 36.6971 12.505C36.6972 12.5054 36.6972 12.5057 38.2536 12.1521C39.8099 11.7985 39.81 11.7988 39.81 11.7991C39.8101 11.7992 39.8101 11.7995 39.8102 11.7997C39.8102 11.8 39.8103 11.8003 39.8104 11.8006C39.8105 11.8011 39.8106 11.8014 39.8106 11.8016C39.8107 11.8019 39.8106 11.8015 39.8103 11.8004C39.8099 11.7983 39.8088 11.7934 39.8072 11.7858C39.804 11.7708 39.7987 11.7452 39.7917 11.7098C39.7777 11.6389 39.7571 11.5292 39.7338 11.3864C39.6871 11.1001 39.63 10.6854 39.5918 10.1886C39.5144 9.17991 39.5212 7.90517 39.8066 6.69969L36.7005 5.96422ZM17.4336 55.4721C18.7555 56.3664 18.7557 56.366 18.756 56.3656C18.7561 56.3655 18.7563 56.3651 18.7565 56.3648C18.7569 56.3643 18.7573 56.3637 18.7577 56.3631C18.7585 56.362 18.7593 56.3607 18.7603 56.3593C18.7621 56.3566 18.7642 56.3534 18.7665 56.35C18.7711 56.343 18.7767 56.3345 18.7831 56.3246C18.796 56.3047 18.8126 56.2789 18.8323 56.2472C18.8719 56.1838 18.9245 56.0967 18.9875 55.9861C19.1134 55.7651 19.281 55.4501 19.4686 55.043C19.844 54.2286 20.3 53.0452 20.6641 51.5079L17.5579 50.7724C17.2471 52.085 16.8644 53.0676 16.5698 53.7067C16.4225 54.0263 16.2972 54.26 16.2141 54.4059C16.1725 54.4788 16.1415 54.5298 16.1236 54.5585C16.1147 54.5729 16.109 54.5817 16.1069 54.5849C16.1058 54.5865 16.1057 54.5867 16.1065 54.5856C16.1069 54.585 16.1075 54.584 16.1083 54.5827C16.1088 54.5821 16.1093 54.5813 16.1098 54.5805C16.1101 54.5801 16.1104 54.5797 16.1107 54.5792C16.1109 54.579 16.1111 54.5786 16.1112 54.5785C16.1114 54.5781 16.1117 54.5778 17.4336 55.4721ZM20.6641 51.5079C21.0534 49.8634 21.0466 48.228 20.9554 47.0391C20.9092 46.4371 20.8398 45.9312 20.781 45.5715C20.7516 45.3913 20.7247 45.2467 20.7044 45.144C20.6943 45.0926 20.6858 45.0516 20.6794 45.0218C20.6763 45.0069 20.6736 44.9947 20.6716 44.9855C20.6706 44.9808 20.6697 44.9769 20.669 44.9737C20.6686 44.9721 20.6683 44.9707 20.668 44.9695C20.6679 44.9689 20.6678 44.9683 20.6677 44.9678C20.6676 44.9675 20.6675 44.9672 20.6675 44.9671C20.6674 44.9667 20.6673 44.9664 19.111 45.32C17.5547 45.6736 17.5546 45.6733 17.5545 45.673C17.5545 45.6729 17.5544 45.6726 17.5544 45.6724C17.5543 45.6721 17.5542 45.6718 17.5542 45.6715C17.5541 45.671 17.554 45.6707 17.554 45.6705C17.5539 45.6702 17.554 45.6706 17.5542 45.6717C17.5547 45.6738 17.5558 45.6787 17.5574 45.6862C17.5606 45.7013 17.5659 45.7269 17.5729 45.7623C17.5869 45.8332 17.6074 45.9429 17.6307 46.0857C17.6775 46.372 17.7346 46.7867 17.7727 47.2835C17.8502 48.2922 17.8434 49.5669 17.5579 50.7724L20.6641 51.5079Z'
					fill='currentColor'
				/>
			</g>
			<g className={classNameText}>
				<path
					d='M97.1766 11.949C98.1228 11.949 98.8916 12.6957 98.8916 13.6148V49.4021C98.8916 50.3212 98.1228 51.0105 97.1766 51.0105C96.2304 51.0105 95.5207 50.3212 95.5207 49.4021V33.6626H67.3709V49.4021C67.3709 50.3212 66.6021 51.0105 65.6559 51.0105C64.7097 51.0105 64 50.3212 64 49.4021V13.6148C64 12.7532 64.7097 11.949 65.6559 11.949C66.6021 11.949 67.3709 12.6957 67.3709 13.6148V30.5606H95.5207V13.6148C95.5207 12.7532 96.2304 11.949 97.1766 11.949Z'
					fill='currentColor'
				/>
				<path
					d='M118.522 22.5759C126.438 22.6334 132.807 29.1245 132.807 36.9942V37.741C132.807 38.6026 132.093 39.292 131.259 39.292H107.629C108.581 44.5767 113.045 48.5978 118.76 48.5978C121.855 48.5978 125.664 47.4489 129.593 45.4958C130.366 45.1512 131.319 45.4384 131.676 46.1852C132.093 46.9319 131.795 47.851 131.021 48.1957C126.498 50.436 122.152 51.5848 118.76 51.5848C110.486 51.5848 104.177 45.1512 104.177 37.1665C104.177 29.067 110.546 22.5759 118.522 22.5759ZM107.51 36.2475H129.533C129.176 30.4457 124.414 25.6204 118.522 25.6204C112.569 25.6204 107.927 30.4457 107.51 36.2475Z'
					fill='currentColor'
				/>
				<path
					d='M150.934 18.8423C149.499 18.8423 148.423 17.9232 148.423 16.7743C148.423 15.6255 149.499 14.6489 150.934 14.6489C152.297 14.6489 153.444 15.6255 153.444 16.7743C153.444 17.9232 152.297 18.8423 150.934 18.8423ZM150.862 51.0106C149.786 51.0106 148.925 50.3213 148.925 49.4596V24.759C148.925 23.8973 149.786 23.1505 150.862 23.1505C151.938 23.1505 152.871 23.8399 152.871 24.759V49.4596C152.871 50.3213 151.938 51.0106 150.862 51.0106Z'
					fill='currentColor'
				/>
				<path
					d='M172.272 37.1092L182.098 48.483C182.697 49.1149 182.577 50.1489 181.858 50.6659C181.558 50.8957 181.199 51.0105 180.84 51.0105C180.36 51.0105 179.881 50.8382 179.581 50.4361L170.355 39.6368L161.128 50.4361C160.828 50.8382 160.349 51.0105 159.87 51.0105C159.51 51.0105 159.151 50.8957 158.851 50.6659C158.132 50.1489 158.012 49.1149 158.612 48.483L168.497 37.1092L158.612 25.7355C158.012 25.1036 158.132 24.0696 158.851 23.5526C159.51 22.9782 160.589 23.0931 161.128 23.7824L170.355 34.5817L179.581 23.7824C180.121 23.0931 181.199 22.9782 181.858 23.5526C182.577 24.0696 182.697 25.1036 182.098 25.7355L172.272 37.1092Z'
					fill='currentColor'
				/>
				<path
					d='M140.242 51.0104C139.107 51.0104 138.2 50.3211 138.2 49.4594V12.4085C138.2 11.5468 139.107 10.8 140.242 10.8C141.376 10.8 142.359 11.4894 142.359 12.4085V49.4594C142.359 50.3211 141.376 51.0104 140.242 51.0104Z'
					fill='currentColor'
				/>
			</g>
			<g className={classNameSufix}>
				<path
					d='M207.986 51.5744C196.842 51.5744 187.995 42.4983 187.995 31.4692C187.995 20.4401 196.899 11.364 207.986 11.364C213.328 11.364 218.44 13.6043 222.117 17.453C223.093 18.4296 223.036 20.038 222.059 20.9571C221.025 21.9336 219.474 21.9336 218.498 20.8996C215.741 17.97 212.007 16.3616 207.986 16.3616C199.771 16.3616 193.28 23.1974 193.28 31.4692C193.28 39.7985 199.771 46.5768 207.986 46.5768C212.007 46.5768 215.741 45.0258 218.498 42.0962C219.474 41.0622 221.025 41.0622 222.059 42.0388C223.036 42.9579 223.093 44.5663 222.117 45.5428C218.44 49.3915 213.328 51.5744 207.986 51.5744Z'
					fill='currentColor'
				/>
				<path
					d='M244.479 51.5744C239.654 51.5744 234.542 50.0234 230.75 47.1512C229.602 46.347 229.372 44.6812 230.176 43.5323C231.038 42.3834 232.704 42.1537 233.795 43.0153C236.667 45.1407 240.631 46.6917 244.479 46.6917H244.537C249.649 46.7491 254.877 44.9109 254.877 40.2006C254.877 35.8923 250.741 35.2605 244.939 34.1116C236.495 32.3883 230.406 29.8608 230.406 22.0485C230.406 19.6359 231.153 17.5679 232.531 15.902C233.623 14.5234 235.174 13.4894 237.069 12.7427C239.999 11.5363 243.158 11.364 244.824 11.364C251.258 11.364 255.681 13.8915 258.323 16.0169C259.415 16.936 259.587 18.5444 258.668 19.6359C257.806 20.7847 256.14 20.9571 255.049 20.038C252.062 17.6253 248.386 16.2467 244.824 16.2467C240.286 16.2467 235.576 17.7977 235.576 22.0485C235.576 26.9886 240.286 27.6205 245.973 28.8268C254.073 30.4352 260.047 32.7904 260.047 40.2006C260.047 47.7831 253.211 51.5744 244.479 51.5744Z'
					fill='currentColor'
				/>
				<path
					d='M281.78 51.6103C276.954 51.6103 271.842 50.0593 268.051 47.1871C266.902 46.3829 266.672 44.7171 267.476 43.5682C268.338 42.4193 270.004 42.1896 271.095 43.0512C273.967 45.1766 277.931 46.7276 281.78 46.7276H281.837C286.949 46.785 292.177 44.9468 292.177 40.2365C292.177 35.9282 288.041 35.2964 282.239 34.1475C273.795 32.4242 267.706 29.8967 267.706 22.0844C267.706 19.6718 268.453 17.6038 269.831 15.9379C270.923 14.5593 272.474 13.5253 274.369 12.7785C277.299 11.5722 280.458 11.3999 282.124 11.3999C288.558 11.3999 292.981 13.9274 295.623 16.0528C296.715 16.9719 296.887 18.5803 295.968 19.6718C295.106 20.8206 293.441 20.9929 292.349 20.0739C289.362 17.6612 285.686 16.2826 282.124 16.2826C277.586 16.2826 272.876 17.8336 272.876 22.0844C272.876 27.0245 277.586 27.6564 283.273 28.8627C291.373 30.4711 297.347 32.8263 297.347 40.2365C297.347 47.819 290.511 51.6103 281.78 51.6103Z'
					fill='currentColor'
				/>
			</g>

			{/* <path
				d='M1.86945 40.015C1.86945 40.015 5.18881 38.0407 9.22218 37.8321C15.8856 37.4873 26.2254 42.7722 34.1526 38.6363C42.0798 34.5004 40.4714 24.3903 40.4714 24.3903M55.3811 17.2944C55.3811 17.2944 52.0617 19.2687 48.0283 19.4773C41.3649 19.822 31.0251 14.5371 23.0979 18.6731C15.1707 22.809 16.7792 32.919 16.7792 32.919M40.0955 1.75757C40.0955 1.75757 39.0851 3.25105 38.405 6.12322C37.7249 8.99539 38.405 11.9887 38.405 11.9887M17.4231 55.6456C17.4231 55.6456 18.4335 54.1521 19.1135 51.2799C19.7936 48.4078 19.1135 45.4145 19.1135 45.4145'
				stroke='currentColor'
				strokeWidth='3.21683'
				strokeLinecap='round'
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
				d='M244.944 51.7423C240.119 51.7423 235.006 50.1913 231.215 47.3192C230.066 46.515 229.836 44.8491 230.641 43.7002C231.502 42.5514 233.168 42.3216 234.259 43.1833C237.132 45.3087 241.095 46.8596 244.944 46.8596H245.001C250.114 46.9171 255.341 45.0789 255.341 40.3685C255.341 36.0603 251.205 35.4284 245.404 34.2795C236.959 32.5562 230.87 30.0287 230.87 22.2164C230.87 19.8038 231.617 17.7358 232.996 16.07C234.087 14.6913 235.638 13.6574 237.534 12.9106C240.463 11.7043 243.623 11.532 245.289 11.532C251.722 11.532 256.145 14.0595 258.788 16.1849C259.879 17.104 260.052 18.7124 259.132 19.8038C258.271 20.9527 256.605 21.125 255.514 20.2059C252.526 17.7933 248.85 16.4146 245.289 16.4146C240.751 16.4146 236.04 17.9656 236.04 22.2164C236.04 27.1566 240.751 27.7884 246.437 28.9947C254.537 30.6032 260.511 32.9583 260.511 40.3685C260.511 47.9511 253.675 51.7423 244.944 51.7423Z'
				fill='currentColor'
				className={classNameSufix}
			/>
			<path
				d='M282.195 51.7423C277.369 51.7423 272.257 50.1913 268.466 47.3192C267.317 46.515 267.087 44.8491 267.891 43.7002C268.753 42.5514 270.419 42.3216 271.51 43.1833C274.382 45.3087 278.346 46.8596 282.195 46.8596H282.252C287.365 46.9171 292.592 45.0789 292.592 40.3685C292.592 36.0603 288.456 35.4284 282.654 34.2795C274.21 32.5562 268.121 30.0287 268.121 22.2164C268.121 19.8038 268.868 17.7358 270.246 16.07C271.338 14.6913 272.889 13.6574 274.784 12.9106C277.714 11.7043 280.873 11.532 282.539 11.532C288.973 11.532 293.396 14.0595 296.038 16.1849C297.13 17.104 297.302 18.7124 296.383 19.8038C295.521 20.9527 293.856 21.125 292.764 20.2059C289.777 17.7933 286.101 16.4146 282.539 16.4146C278.001 16.4146 273.291 17.9656 273.291 22.2164C273.291 27.1566 278.001 27.7884 283.688 28.9947C291.788 30.6032 297.762 32.9583 297.762 40.3685C297.762 47.9511 290.926 51.7423 282.195 51.7423Z'
				fill='currentColor'
				className={classNameSufix}
			/> */}
		</svg>
	)
}
