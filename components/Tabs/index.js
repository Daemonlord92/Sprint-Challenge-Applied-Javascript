// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = (data) => {

	const newTabCard = document.createElement('div')

	newTabCard.classList.add('tab')

	data.topics.forEach((x) => {
		const tabAnchor = document.createElement('a')
		tabAnchor.appendChild(document.createTextNode(x))
		newTabCard.appendChild(tabAnchor)
	})

	const menuButton = document.querySelector('.topics')

	menuButton.addEventListener('click', () => {
		newTabCard.classList.toggle('active-tab')
	})

	return newTabCard
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
	console.log(response)
	const topTab = newTab(response.data)
	const entryPoint = document.querySelector('.topics')
	entryPoint.appendChild(topTab)
})