import React from 'react'
import s from './styles.module.scss'
import { t } from '../../utils/translate'

export default ({ img, name, desc, url, alt}) => (
	<div className={s.project}>
		<div className={s.imgContainer}>
			<img src={img} className={s.image} alt={alt} />
		</div>
		<div className={s.content}>
			<h3>{name}</h3>
			<p>{desc}</p>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<button>{t("Visiter le site", "Visit the website")}</button>
			</a>
		</div>
	</div>
)