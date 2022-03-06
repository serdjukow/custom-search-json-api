document.querySelector('body').insertAdjacentHTML(
	'beforeend',
	`
	<div id="result-page" class="wrapper result-page">
	<header class="header">
		<div class="result-page__close">&#x2715</div>						
		<div class="header__row header__container">
			<div class="header__logo">
				<img src="images/logo.png" alt="logo" />
			</div>
			<div class="header__search search">
				<form id="search-form" class="search__form" action="">
					<input class="search__input" type="text" name="search-value" autofocus="autofocus" value="" />
					<span class="search__form-border"></span>
					<button class="search__button" type="submit">
						<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
							<path
								d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
							></path>
						</svg>
					</button>
				</form>
			</div>
		</div>
	</header>
	<div class="result-stats">
		<div class="result-stats__container">
			<span class="result-stats__title"></span>
			<span class="result-stats__of-about"></span>
			<span class="result-stats__of-seconds"></span>
		</div>
	</div>

	<main class="page">

		<section class="page__row page__container">
			<div class="page__body result-body">
				<div class="result-body__content">

				</div>
			</div>
			<div class="page__more more">
				<ul class="more__items">
					<li class="more__item active">0</li>
					<li class="more__item">1</li>
					<li class="more__item">2</li>
					<li class="more__item">3</li>
					<li class="more__item">4</li>
				</ul>
			</div>
		</section>
	</main>
	<footer class="footer">
		<div class="footer__row footer__container">
			<div class="footer__item">
				&#169; Copyright 2022 - For
				<a href="https://kunde-ssystems.de" class="footer__link">
					kunde-ssystems.de
				</a>
			</div>
		</div>
	</footer>
	</div>
	
`
)

const apiKey = 'AIzaSyBLlqr-NeS-brQ9s-aHUfKQqJ_SRuWcyVk'
const apiKey2 = 'AIzaSyAKw-CcJL3OmIKfsgn5EKUPp5CcnBwWZ6Y'
const apiKey3 = 'AIzaSyC9EzGVxy6QeAEu-lYDur-8GkpYMbJvU4o'
const apiKey4 = 'AIzaSyBy8LZVLSIxHlEWCJaqWpGf10Vez9I2Wcw'
const apiKey5 = 'AIzaSyD_dBpEXBBD7xPmw9YizjEFfiAWpyPKikM'
const apiKey6 = 'AIzaSyCMCmqIJTEV2AqE8kok1OYkyqyOjjMLKwM'
const apiKey7 = 'AIzaSyA5-m1Nnjm6fYKks3p-fJcfaCseNObBZ8o'

async function searchRequest(searchValie) {
	let curButtonValue
	if (sessionStorage.getItem('curPage')) {
		curButtonValue = JSON.parse(sessionStorage.getItem('curPage'))
	}
	const newsUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey7}&cx=017576662512468239146:omuauf_lfve&q=${searchValie}&start=${ curButtonValue || 0 }&num=10`
	const response = await fetch(newsUrl)
	try {
		const searchValue = await response.json()
		if (searchValue.error) {
			document.querySelector('.result-body__content').innerHTML = `<span style="color:red;">${searchValue.error.message}</span>`
		} else {
			getStats(searchValue)
			searchValue.searchInformation.totalResults !== '0' ? searchRender(searchValue.items) : nothingFound()

			sessionStorage.setItem('searchValue', JSON.stringify(searchValue))
		}
	} catch (er) {
		console.error(er.message)
	}
}

function getStats(searchValue) {
	document.querySelector('.result-stats__title').innerText = `${searchValue.queries.request[0].title}`
	document.querySelector('.result-stats__of-about').innerText = `Of about ${searchValue.searchInformation.formattedTotalResults}`
	document.querySelector('.result-stats__of-seconds').innerText = `results (${searchValue.searchInformation.formattedSearchTime} seconds)`
	console.log(searchValue.queries.request)
}

const searchItemToHtml = searchItem => `
	<div class="result-body__item">
		<h3 class="result-body__title">
			<a href="https://${searchItem.displayLink}" target="_blank">
				${searchItem.htmlTitle}
			</a>
		</h3>
		<a href="https://${searchItem.displayLink}" class="result-body__link" target="_blank">
			${searchItem.displayLink}
		 </a>
		<p class="result-body__description">
			${searchItem.htmlSnippet}
		</p>
	</div>
`

function searchRender(searchItems) {
	document.querySelector('.result-body__content').innerHTML = searchItems.map(searchItemToHtml).join('')
}

function getFormValue() {
	const searchForm = document.getElementById('search-form')
	searchForm.addEventListener('submit', e => {
		e.preventDefault()
		let currentValue = searchForm.querySelector('[name="search-value"]').value
		if (currentValue) {
			let curPage = 0
			sessionStorage.setItem('curPage', JSON.stringify(curPage))
			clearActive()
			searchRequest(currentValue)
			addMoreActive(currentValue)
		}
	})
}
getFormValue()

function getBlockFormValue() {
	const searchBlockForm = document.getElementById('search')
	searchBlockForm.addEventListener('submit', e => {
		e.preventDefault()
		let currentValue = searchBlockForm.querySelector('[name="search-block-value"]').value
		if (currentValue) {
			let curPage = 0
			sessionStorage.setItem('curPage', JSON.stringify(curPage))
			searchRequest(currentValue)
			clearActive()
			document.getElementById('result-page').classList.add('show')
			document.querySelector('[name="search-value"]').value = currentValue
			addMoreActive(currentValue)
		}
	})
}
getBlockFormValue()

function nothingFound() {
	document.querySelector('.result-body__content').innerHTML = 'Not found...'
}

function closeResulpPage() {
	const buttonClose = document.querySelector('.result-page__close')
	buttonClose.addEventListener('click', e => {
		e.preventDefault()
		document.getElementById('result-page').classList.remove('show')
	})
}
closeResulpPage()

function clearActive() {
	const moreItems = document.querySelectorAll('.more__item')
	moreItems.forEach(item => item.classList.remove('active'))
}

function addMoreActive(currentValue) {
	const moreItems = document.querySelectorAll('.more__item')
	moreItems.forEach(item => {
		item.addEventListener('click', e => {
			e.preventDefault()
			clearActive()
			e.target.classList.add('active')
			let curPage = +item.innerText * 10
			sessionStorage.setItem('curPage', JSON.stringify(curPage))
			searchRequest(currentValue)
		})
	})
}
