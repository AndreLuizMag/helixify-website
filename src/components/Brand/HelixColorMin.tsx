import React, { FC, HTMLAttributes } from 'react'

interface HelixColorMinProps
	extends HTMLAttributes<HTMLElement> {
	size?: number
	classNameIcon?: string
	classNameText?: string
	classNameSufix?: string
	className?: string
}

export const HelixColorMin: FC<HelixColorMinProps> = ({
	size = 42,
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
			viewBox='0 0 274 42'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			aria-labelledby='catTitle catDesc'
			className={className}>
			<title id='catTitle'>HelixColor</title>
			<desc id='catDesc'>
				Color selection based on the color wheel
			</desc>
			<g className={classNameText}>
				<path
					d='M34.1563 1.1936C35.1305 1.1936 35.922 1.96241 35.922 2.90865V39.7527C35.922 40.6989 35.1305 41.4086 34.1563 41.4086C33.1822 41.4086 32.4515 40.6989 32.4515 39.7527V23.5484H3.47043V39.7527C3.47043 40.6989 2.67893 41.4086 1.70477 41.4086C0.730616 41.4086 0 40.6989 0 39.7527V2.90865C0 2.02155 0.730616 1.1936 1.70477 1.1936C2.67893 1.1936 3.47043 1.96241 3.47043 2.90865V20.3549H32.4515V2.90865C32.4515 2.02155 33.1822 1.1936 34.1563 1.1936Z'
					fill='currentColor'
				/>
				<path
					d='M56.1316 12.1344C64.2818 12.1935 70.8388 18.8763 70.8388 26.9784V27.7473C70.8388 28.6344 70.1035 29.344 69.2455 29.344H44.9173C45.8978 34.7849 50.4938 38.9247 56.3767 38.9247C59.5633 38.9247 63.4852 37.7419 67.5297 35.7311C68.3263 35.3763 69.3068 35.672 69.6745 36.4408C70.1035 37.2096 69.7971 38.1559 69.0004 38.5107C64.3431 40.8171 59.8697 41.9999 56.3767 41.9999C47.8588 41.9999 41.3631 35.3763 41.3631 27.1559C41.3631 18.8172 47.9201 12.1344 56.1316 12.1344ZM44.7948 26.2096H67.4684C67.1007 20.2365 62.1983 15.2688 56.1316 15.2688C50.0036 15.2688 45.2237 20.2365 44.7948 26.2096Z'
					fill='currentColor'
				/>
				<path
					d='M89.5011 8.29048C88.0241 8.29048 86.9164 7.34424 86.9164 6.16145C86.9164 4.97865 88.0241 3.97328 89.5011 3.97328C90.9042 3.97328 92.0857 4.97865 92.0857 6.16145C92.0857 7.34424 90.9042 8.29048 89.5011 8.29048ZM89.4272 41.4087C88.3195 41.4087 87.4334 40.699 87.4334 39.812V14.3819C87.4334 13.4948 88.3195 12.726 89.4272 12.726C90.5349 12.726 91.495 13.4356 91.495 14.3819V39.812C91.495 40.699 90.5349 41.4087 89.4272 41.4087Z'
					fill='currentColor'
				/>
				<path
					d='M111.469 27.0969L121.585 38.8065C122.202 39.4571 122.079 40.5216 121.338 41.0538C121.03 41.2904 120.66 41.4087 120.29 41.4087C119.796 41.4087 119.303 41.2313 118.995 40.8173L109.495 29.699L99.9962 40.8173C99.6877 41.2313 99.1943 41.4087 98.7008 41.4087C98.3307 41.4087 97.9606 41.2904 97.6522 41.0538C96.912 40.5216 96.7886 39.4571 97.4055 38.8065L107.583 27.0969L97.4055 15.3872C96.7886 14.7367 96.912 13.6722 97.6522 13.1399C98.3307 12.5485 99.441 12.6668 99.9962 13.3765L109.495 24.4947L118.995 13.3765C119.55 12.6668 120.66 12.5485 121.338 13.1399C122.079 13.6722 122.202 14.7367 121.585 15.3872L111.469 27.0969Z'
					fill='currentColor'
				/>
				<path
					d='M78.4933 41.4086C77.3254 41.4086 76.3911 40.6989 76.3911 39.8118V1.66665C76.3911 0.779559 77.3254 0.0107422 78.4933 0.0107422C79.6612 0.0107422 80.6733 0.72042 80.6733 1.66665V39.8118C80.6733 40.6989 79.6612 41.4086 78.4933 41.4086Z'
					fill='currentColor'
				/>
			</g>
			<g className={classNameSufix}>
				<path
					d='M148.135 41.9892C136.662 41.9892 127.554 32.6452 127.554 21.2903C127.554 9.93551 136.721 0.591427 148.135 0.591427C153.635 0.591427 158.898 2.89788 162.683 6.86024C163.689 7.86561 163.629 9.52153 162.624 10.4678C161.56 11.4731 159.963 11.4731 158.957 10.4086C156.119 7.3925 152.275 5.73658 148.135 5.73658C139.678 5.73658 132.995 12.7742 132.995 21.2903C132.995 29.8656 139.678 36.8441 148.135 36.8441C152.275 36.8441 156.119 35.2473 158.957 32.2312C159.963 31.1667 161.56 31.1667 162.624 32.172C163.629 33.1183 163.689 34.7742 162.683 35.7796C158.898 39.7419 153.635 41.9892 148.135 41.9892Z'
					fill='currentColor'
				/>
				<path
					d='M185.078 11.828C193.357 11.828 200.158 18.6291 200.158 26.9087C200.158 35.2474 193.357 41.9893 185.078 41.9893C176.739 41.9893 169.997 35.2474 169.997 26.9087C169.997 18.6291 176.739 11.828 185.078 11.828ZM185.078 36.9624C190.459 36.9624 194.836 32.4678 194.836 26.9087C194.836 21.4087 190.459 16.8549 185.078 16.8549C179.637 16.8549 175.32 21.4087 175.32 26.9087C175.32 32.4678 179.637 36.9624 185.078 36.9624Z'
					fill='currentColor'
				/>
				<path
					d='M209.926 41.3978C208.448 41.3978 207.265 40.215 207.265 38.7365V2.66129C207.265 1.24194 208.448 0 209.926 0C211.346 0 212.588 1.24194 212.588 2.66129V38.7365C212.588 40.215 211.346 41.3978 209.926 41.3978Z'
					fill='currentColor'
				/>
				<path
					d='M234.701 11.828C242.981 11.828 249.782 18.6291 249.782 26.9087C249.782 35.2474 242.981 41.9893 234.701 41.9893C226.362 41.9893 219.621 35.2474 219.621 26.9087C219.621 18.6291 226.362 11.828 234.701 11.828ZM234.701 36.9624C240.083 36.9624 244.459 32.4678 244.459 26.9087C244.459 21.4087 240.083 16.8549 234.701 16.8549C229.26 16.8549 224.943 21.4087 224.943 26.9087C224.943 32.4678 229.26 36.9624 234.701 36.9624Z'
					fill='currentColor'
				/>
				<path
					d='M270.956 11.9463C272.967 11.828 274.504 13.7796 273.854 15.7312C273.381 17.0914 272.08 17.742 270.956 17.742C270.838 17.742 270.66 17.6828 270.483 17.6828C265.633 17.6828 261.671 21.8226 261.671 26.8495V38.7366C261.671 40.2151 260.429 41.3979 259.01 41.3979C257.531 41.3979 256.348 40.2151 256.348 38.7366V15.0807C256.348 13.6613 257.531 12.4194 259.01 12.4194C260.429 12.4194 261.671 13.6613 261.671 15.0807V17.0323C264.273 13.1291 268.058 12.1237 270.956 11.9463Z'
					fill='currentColor'
				/>
			</g>
		</svg>
	)
}