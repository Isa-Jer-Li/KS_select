const btn = document.querySelector('#btn')
let postedFruit = document.getElementById('posted-fruit')

btn.addEventListener('click', (event) => {

	let values = []
	let checkboxes = document.querySelectorAll('input[name="fruit"]:checked')

  checkboxes.forEach((checkbox) => {
		values.push(checkbox.value)
	})
  postedFruit.textContent = values.map((i) =>
	  `${i}`).join(", ")
})

//we could do some pretty intricate stuff by running "if" statements and returning recipes that include certain values

